<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="email">email: </label>
          <input id="email" type="text" v-model="email">
          <p class="validation-text">
            <span class="warning" v-if="!isUsernameValid && username">
              Please enter an email address
            </span>
          </p>
        </div>
        <div>
          <label for="password">pw: </label>
          <input id="password" type="text" v-model="password">
        </div>
        <button v-bind:disabled="!isEmailValid || !password"
                type="submit"
                class="btn"
        >
          로그인
        </button>
      </form>
      <p class="log">{{ logMessage }}</p>
    </div>
  </div>
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