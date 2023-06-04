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
    <button type="submit">로그인</button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import { loginUser } from "@/api";

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
      this.logMessage = `${data.nickname}님 환영합니다.`;
    }
  }
};
</script>

<style scoped>

</style>