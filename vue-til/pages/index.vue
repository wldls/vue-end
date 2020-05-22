<template>
  <v-container fluid>
    <SkeletonLoader v-if="pageLoading"></SkeletonLoader>
    <!-- <SkeletonLoader v-if="$fetchState.pending"></SkeletonLoader> -->
    <v-row v-else dense>
      <v-col v-for="list in lists" :key="list._id" cols="6" md="4">
        <v-card class="mx-auto" max-width="600" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">{{ list.createdAt }}</div>
              <v-list-item-title class="headline mb-1">{{
                list.title
              }}</v-list-item-title>
              <v-list-item-subtitle>{{ list.contents }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-card-actions>
            <v-spacer />
            <v-btn icon to="/create">
              <v-icon color="blue">mdi-plus</v-icon>
            </v-btn>
            <v-btn icon>
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
  async fetch({ app }) {
    // this.updateLoading(true);

    const { data } = await app.$api.get("/posts");

    // console.log(data);

    console.log(this);

    this.lists = data.posts;

    // return { lists: data.posts };

    // this.updateLoading(false);
  },
  fetchOnServer: false,
  data() {
    return {
      lists: [],
    };
  },
  computed: {
    pageLoading() {
      return this.$store.state.pageLoading;
    },
  },
};
</script>

<style></style>
