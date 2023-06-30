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
        </div>
        <button type="submit" class="btn">Create</button>
      </form>
    </div>
  </div>
</template>

<script>
import VueJwtDecode from 'vue-jwt-decode';

export default {
  data() {
    return {
      title: '',
      contents: '',
      member_id: '',
    }
  },
  methods: {
    submitForm() {
      console.log('insert Form');
      console.log('token', VueJwtDecode.decode(window.localStorage.getItem('accessToken').replace('Bearer ', '')));
    }
  }
}
</script>

<style scoped>
.form-wrapper .form {
  width: 100%;
}
</style>