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
      try {
        const userData = {
          email: this.email,
          password: this.password,
        };

        this.logMessage = await this.$store.dispatch('LOGIN', userData);

        // const { data } = await loginUser(userData);
        // console.log('data', data);
        // if(!data.tokenInfo) {
        //   this.logMessage = '에러가 발생했습니다. 관리자에게 문의해주세요.';
        //   return;
        // }
        // this.logMessage = `${data.nickname}님 환영합니다.`;
        // this.$store.commit('setUsername', data.nickname);
        //
        // window.localStorage.setItem('accessToken', data.tokenInfo.grantType + ' ' + data.tokenInfo.accessToken);
        // window.localStorage.setItem('refreshToken', data.tokenInfo.grantType + ' ' + data.tokenInfo.refreshToken);
        // this.$store.commit('login');
        this.$router.push('/main');
        this.initForm();
      }
      catch (error) {
        console.log('error', error);
        const { data } = error.response;

        if(!data) {
          this.logMessage = '에러가 발생했습니다. 관리자에게 문의해주세요.';
          return;
        }

        this.logMessage = data.message;
      }
    },
    initForm() {
      this.email = '';
      this.password = '';
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