<template>
  <div class="contents">
    <h1 class="page-header">수정페이지</h1>
    <div class="form-wrapper">
      <form class="form" @submit.prevent="submitForm">
        <div>
          <label for="title">Title:</label>
          <input type="text" id="title" v-model="title" />
        </div>
        <div>
          <label for="contents">Contents:</label>
          <textarea id="contents" cols="30" rows="5" v-model="contents"></textarea>
          <p class="validation-text">{{ contentsCount }} / 200</p>
          <p class="validation-text warning" v-if="!isContentsValid">Contents must be less than 200</p>
        </div>
        <button type="submit" class="btn">Edit</button>
      </form>
      <p class="log">{{ logMessage }}</p>
    </div>
  </div>
</template>

<script>
import { fetchPost, editPost } from '@/api/posts';

export default {
  data() {
    return {
      title: '',
      contents: '',
      logMessage: '',
    };
  },
  computed: {
    isContentsValid() {
      return this.contents.length <= 200;
    },
    contentsCount() {
      return this.contents.length;
    },
  },
  methods: {
    async submitForm() {
      const id = this.$route.params.id;

      try {
        await editPost(id, {
          title: this.title,
          contents: this.contents,
        });

        this.$router.push('/main');
      } catch (error) {
        this.logMessage = error;
        console.log(error.response.data.message);
      }
    },
  },
  async created() {
    const id = this.$route.params.id;
    const { data } = await fetchPost(id);

    this.title = data.title;
    this.contents = data.contents;
  },
};
</script>

<style scoped>
.form-wrapper .form {
  width: 100%;
}
.btn {
  color: white;
}
</style>
