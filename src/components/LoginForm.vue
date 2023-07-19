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
                :class="!isEmailValid || !password ? 'disabled' : null"
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
        this.$router.push('/main').catch(() => {});
        this.initForm();
      }
      catch (error) {
        console.log('error', error);
        this.logMessage = '에러가 발생했습니다. 관리자에게 문의해주세요.';
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