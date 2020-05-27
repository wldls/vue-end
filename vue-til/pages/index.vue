<template>
  <v-container fluid>
    <v-alert v-if="isRemoved" :type="isRemoved" transition="fade-transition">{{
      msg
    }}</v-alert>
    <SkeletonLoader v-if="$fetchState.pending"></SkeletonLoader>
    <v-row v-else dense transition="fade-transition">
      <div v-if="!lists.length">등록된 포스트가 없습니다.</div>
      <v-col
        v-for="list in lists"
        v-else
        :key="list._id"
        cols="12"
        md="4"
        sm="6"
      >
        <v-card class="mx-auto" max-width="600" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">{{ list.createdAt }}</div>
              <v-list-item-title class="headline mb-1">
                {{ list.title }}
              </v-list-item-title>
              <v-list-item-subtitle>{{ list.contents }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-card-actions>
            <v-spacer />
            <v-btn icon :to="`/write/${list._id}`">
              <v-icon color="blue">mdi-pencil</v-icon>
            </v-btn>
            <v-btn icon @click="onRemove(list._id)">
              <v-icon color="red">mdi-delete</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SkeletonLoader from "../components/SkeletonLoader";

export default {
  middleware: ["auth", "skeleton"],
  components: { SkeletonLoader },
  async fetch() {
    const { data } = await this.$api.get("/posts");
    this.$store.commit("loadPostList", data.posts);
    this.lists = data.posts;
  },
  data() {
    return {
      lists: [],
      msg: "",
      isRemoved: null,
    };
  },
  fetchOnServer: false,
  methods: {
    resetMsg() {
      setTimeout(() => {
        this.msg = "";
        this.isRemoved = null;
      }, 2000);
    },
    async onRemove(_id) {
      try {
        this.$nuxt.$loading.start();
        const { data } = await this.$api.delete(`/posts/${_id}`);
        this.msg = `"${data.title}" 게시물이 삭제되었습니다.`;
        this.isRemoved = "success";

        this.$nuxt.$loading.finish();
        // refresh
        this.$fetch();
        // reset
        this.resetMsg();
      } catch (err) {
        this.msg = `${err.response.statusText} ID`;
        this.isRemoved = "error";

        // reset
        this.resetMsg();
      }
    },
  },
};
</script>

<style></style>
