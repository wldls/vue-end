<template>
  <header>
    <div>
      <router-link :to="logoLink" class="logo">TIL</router-link>
    </div>
    <div class="navigations">
      <!-- 분기처리 1 -->
      <template v-if="isUserLogin">
        <span class="username">{{ $store.state.username }}</span>
        <a href="javascript:;" @click="logoutUser">로그아웃</a>
      </template>
      <!-- 분기처리 2 -->
      <template v-else>
        <router-link to="/login">로그인</router-link>
        <router-link to="/signup">회원가입</router-link>
      </template>
    </div>
  </header>
</template>

<script>
import { deleteCookie } from '@/utils/cookies';

export default {
  computed: {
    isUserLogin() {
      return this.$store.getters.isLogin;
    },
    logoLink() {
      return this.$store.getters.isLogin ? '/main' : '/login';
    },
  },
  methods: {
    logoutUser() {
      // store 값 삭제
      this.$store.commit('clearUsername');
      this.$store.commit('clearToken');
      // cookie 값 삭제
      deleteCookie('til_auth');
      deleteCookie('til_user');
      // 메인 페이지로 이동
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #927dfc;
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
}
.logo > span {
  font-size: 14px;
  font-weight: normal;
}
.navigations a {
  margin-left: 10px;
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
.username {
  color: #fff;
}
</style>
