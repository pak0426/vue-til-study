<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="email">email: </label>
      <input id="email" type="text" v-model="email">
    </div>
    <div>
      <label for="password">pw: </label>
      <input id="password" type="text" v-model="password">
    </div>
    <button v-bind:disabled="!isEmailValid || !password" type="submit">로그인</button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import { loginUser } from '@/api';
import { validateEmail } from '@/utils/validation'

export default {
  data() {
    return {
      email: '',
      password: '',
      logMessage: '',
    }
  },
  methods: {
    async submitForm() {
      const userData = {
        email: this.email,
        password: this.password,
      };

      const { data } = await loginUser(userData);
      console.log(data);
      if (data.status !== 'FAIL') this.logMessage = `${data.nickname}님 환영합니다.`;
      else this.logMessage = data.message;
      this.initForm();
    },
    initForm() {
      this.email = '';
      this.password = '';
    },
    isEmailValid() {
      return validateEmail(this.email);
    }
  }
};
</script>

<style scoped>

</style>