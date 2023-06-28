import Vue from 'vue';
import Vuex from 'vuex';
import { loginUser } from "@/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: '',
    isLogin: !!window.localStorage.getItem('accessToken'),
  },
  mutations: {
    setUsername(state, username) {
      state.username = username;
    },
    clearUsername(state) {
      state.username = null;
    },
    logout(state) {
      window.localStorage.removeItem('accessToken');
      window.localStorage.removeItem('refreshToken');
      state.username = null;
      state.isLogin = false;
    },
    login(state) {
      state.isLogin = window.localStorage.getItem('accessToken');
    }
  },
  actions: {
    async LOGIN({ commit }, userData) {
      const { data } = await loginUser(userData);
      console.log('data', data);
      if(!data.tokenInfo) {
        this.logMessage = '에러가 발생했습니다. 관리자에게 문의해주세요.';
        return this.logMessage;
      }
      this.logMessage = `${data.nickname}님 환영합니다.`;
      commit('setUsername', data.nickname);

      window.localStorage.setItem('accessToken', data.tokenInfo.grantType + ' ' + data.tokenInfo.accessToken);
      window.localStorage.setItem('refreshToken', data.tokenInfo.grantType + ' ' + data.tokenInfo.refreshToken);
      this.$store.commit('login');
      return this.logMessage;
    }
  },
  getters: {
    isLogin(state) {
      return !!state.isLogin;
    }
  }
})