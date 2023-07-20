<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="email">email: </label>
          <input id="email" type="text" v-model="email">
          <p class="validation-text">
            <span class="warning" v-if="!isEmailValid && email">
              Please enter an email address
            </span>
          </p>
        </div>
        <div>
          <label for="password">password: </label>
          <input id="password" type="text" v-model="password">
        </div>
        <div>
          <label for="nickname">nickname: </label>
          <input id="nickname" type="text" v-model="nickname">
        </div>
        <button v-bind:disabled="!isEmailValid || !password || !nickname"
                type="submit" class="btn"
                :class = "!isEmailValid || !password || !nickname ? 'disabled' : null"
        >
          회원 가입
        </button>
      </form>
      <p class="log">{{ logMessage }}</p>
    </div>
  </div>
</template>

<script>
import { registerUser } from '@/api/auth'
import { validateEmail } from '@/utils/validation';

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
  },
  computed: {
    isEmailValid() {
      return validateEmail(this.email);
    }
  }
};
</script>

<style scoped>

</style>