import Vue from 'vue';
import Vuex from 'vuex';
import {
  saveAuthToCookie,
  saveUserToCookie,
  getAuthFromCookie,
  getUserFromCookie,
} from '@/utils/cookies.js';
import { loginUser } from '@/api/auth';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 컴포넌트간에 공유되는 데이터. 쿠키에 값이 있는 경우 쿠키 데이터 사용
    username: getUserFromCookie() || '',
    token: getAuthFromCookie() || '',
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
    clearToken(state) {
      state.token = '';
    },
  },
  actions: {
    // LoginForm의 내용이 복잡해 진 관계로 actions를 활용하여 분리적용
    async LOGIN({ commit }, userData) {
      const { data } = await loginUser(userData);

      // token 값 store에 저장
      commit('setToken', data.token);
      // mutations을 호출하는 api
      commit('setUsername', data.user.username);

      // 새로고침 해도 로그인 정보를 유지할 수 있도록 쿠키에 값 저장
      saveAuthToCookie(data.token);
      saveUserToCookie(data.user.username);

      // async 함수는 무조건 promise가 return 되지만 나중에 활용될 수 있는 data속성을 위해 data를 return해줌
      return data;
    },
  },
});
