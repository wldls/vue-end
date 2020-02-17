import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 컴포넌트간데 공유되는 데이터
    username: '',
    token: '',
  },
  getters: {
    // computed와 유사
    isLogin(state) {
      // username 비어있지 않으면 로그인 된 상태
      return state.username !== '';
    },
  },
  mutations: {
    // 데이터(state)를 변경
    setUsername(state, username) {
      // login: username을 받아서 state 값을 바꿔줌
      state.username = username;
    },
    clearUsername(state) {
      // logout
      state.username = '';
    },
    setToken(state, token) {
      state.token = token;
    },
  },
});
