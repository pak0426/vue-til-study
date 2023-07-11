<template>
  <div class="contents">
    <h1 class="page-header">Edit Post</h1>
    <div class="form-wrapper">
      <form class="form" @submit.prevent="submitForm">
        <div>
          <label for="title">Title:</label>
          <input id="title" type="text" v-model="title">
        </div>
        <div>
          <label for="contents">Contents:</label>
          <textarea id="contents" rows="10" v-model="contents"></textarea>
          <p v-if="!isContentsValid" class="validation-text warning">Contents is too long</p>
        </div>
        <button type="submit" class="btn">Edit</button>
      </form>
      <p class="log">
        {{ logMessage }}
      </p>
    </div>
  </div>
</template>

<script>
import { fetchPost } from '@/api/posts';

export default {
  data() {
    return {
      title: '',
      contents: '',
      member_id: '',
      logMessage: '',
    }
  },
  computed: {
    isContentsValid() {
      return this.contents.length < 100
    },
  },
  methods: {
    submitForm() {

    },
    async fetchPost() {
      const postId = this.$route.params.id;

      try {
        const { data } = await fetchPost(postId);
        console.log('data', data);

        this.title = data.title;
        this.contents = data.contents;
      } catch (e) {
        console.log('e', e);
      }
    }
  },
  created() {
    this.fetchPost();
  }
}
</script>

<style scoped>
.form-wrapper .form {
  width: 100%;
}
</style>