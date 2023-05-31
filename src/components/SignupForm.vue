<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="email">email: </label>
      <input id="email" type="text" v-model="email">
    </div>
    <div>
      <label for="password">password: </label>
      <input id="password" type="text" v-model="password">
    </div>
    <div>
      <label for="nickname">nickname: </label>
      <input id="nickname" type="text" v-model="nickname">
    </div>
    <button type="submit">회원 가입</button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import { registerUser } from '@/api/index'

export default {
  data() {
    return {
      email: '',
      password: '',
      nickname: '',
      logMessage: '',
    }
  },
  methods: {
    async submitForm() {
      console.log('폼 제출');
      const userData = {
        email: this.email,
        password: this.password,
        nickname : this.nickname
      }
      const { data } = await registerUser(userData);
      console.log('data', data);
      this.logMessage = `${ data.email } 님이 가입되었습니다.`
      this.initForm();
    },
    initForm() {
      this.email = '';
      this.password = '';
      this.nickname = '';
    }
  }
};
</script>

<style scoped>

</style>