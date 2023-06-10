<template>
  <header>
    <div>
      <router-link to="/" class="logo">
        TIL Project
      </router-link>
    </div>
    <div class="navigations">
      <template v-if="isLogin">
        <span>{{ $store.state.username }}</span>
        <a href="javascript:;" @click="logoutUser">로그아웃</a>
      </template>
      <template v-else>
        <router-link to="/login">로그인</router-link>
        <router-link to="/signup">회원가입</router-link>
      </template>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  computed: {
    isLogin() {
      return this.$store.getters.isLogin;
    }
  },
  methods: {
    logoutUser() {
      this.$store.commit('clearUsername');
      this.$router.push('/');
    }
  }
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  z-index: 2;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.05);
}
a {
  color: #dedede;
  font-size: 18px;
}
a.logo {
  font-size: 30px;
  font-weight: 900;
  color: white;
  letter-spacing: 3px;
}
.logo > span {
  font-size: 14px;
  font-weight: normal;
}
.navigations a {
  margin-left: 10px;
}
.navigations span {
  color: white;
}
.fixed {
  position: fixed;
  top: 0;
  width: 100%;
}
a.router-link-exact-active {
  color: white;
  font-weight: bold;
}
</style>