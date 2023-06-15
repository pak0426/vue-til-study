import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: '',
    accessToken: '',
    refreshToken: '',
  },
  mutations: {
    setUsername(state, username) {
      state.username = username;
    },
    clearUsername(state) {
      state.username = null;
    },
    setToken(state, tokenInfo) {
      state.accessToken = tokenInfo.accessToken;
      state.refreshToken = tokenInfo.refreshToken;
    }
  },
  getters: {
    isLogin(state) {
      return !!state.accessToken;
    }
  }
})