<template>
  <div class="contents">
    <h1 class="page-header">Create Post</h1>
    <div class="form-wrapper">
      <form class="form" @submit.prevent="submitForm">
        <div>
          <label for="title">Title:</label>
          <input id="title" type="text" v-model="title">
          <p class="validation-text">
            <span class="warning" v-if="!title">
              Please enter an title
            </span>
          </p>
        </div>
        <div>
          <label for="contents">Contents:</label>
          <textarea id="contents" rows="10" v-model="contents"></textarea>
          <p v-if="!isContentsValid" class="validation-text warning">Contents is too long</p>
        </div>
        <button
          v-bind:disabled="!title"
          type="submit"
          class="btn"
          :class="!title || !isContentsValid ? 'disabled' : null"
        >
          Create
        </button>
      </form>
      <p class="log">
        {{ logMessage }}
      </p>
    </div>
  </div>
</template>

<script>
import VueJwtDecode from 'vue-jwt-decode';
import { createPost } from '@/api/posts';

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
    }
  },
  methods: {
    async submitForm() {
      const postData = {
        title: this.title,
        contents: this.contents,
        member_id : VueJwtDecode.decode(window.localStorage.getItem('accessToken').replace('Bearer ', '')).sub
      }

      try {
        const { data } = await createPost(postData);
        console.log('submit post response', data);
        alert(data.message);
        this.$router.push('/main');
      } catch (e) {
        console.log('e', e);
      }
    }
  }
}
</script>

<style scoped>
.form-wrapper .form {
  width: 100%;
}
</style>