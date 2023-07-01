<template>
  <div class="contents">
    <h1 class="page-header">생성 페이지</h1>
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
        <button type="submit" class="btn">Create</button>
      </form>
      <p class="log">
        {{ logMessage }}
      </p>
    </div>
  </div>
</template>

<script>
import VueJwtDecode from 'vue-jwt-decode';
import { createPost } from '@/api';

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
        this.logMessage = data.message;
      }catch (e) {
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