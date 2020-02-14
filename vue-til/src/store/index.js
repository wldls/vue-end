import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 컴포넌트간데 공유되는 데이터
    username: '',
  },
  mutations: {
    // 데이터(state)를 변경
    setUsername(state, username) {
      // username을 받아서 state 값을 바꿔줌
      state.username = username;
    },
  },
});
