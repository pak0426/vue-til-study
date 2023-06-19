import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: '',
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
    }
  },
  getters: {
    isLogin(state) {
      return !!state.username;
    }
  }
})