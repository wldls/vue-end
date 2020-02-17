<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <!-- email 검사 -->
          <label for="username">id:</label>
          <input type="text" id="username" v-model="username" />
          <p class="validation-text">
            <span class="warning" v-if="!isUsernameValid && username">Please enter an email address</span>
          </p>
        </div>
        <div>
          <label for="password">pw:</label>
          <input type="text" id="password" v-model="password" />
        </div>
        <!-- id, pw가 없으면 로그인버튼이 눌리지 않음 -->
        <button type="submit" :disabled="!isUsernameValid || !password" class="btn">로그인</button>
        <p v-if="logMessage" class="log">{{ logMessage }}</p>
      </form>
    </div>
  </div>
</template>

<script>
import { loginUser } from '@/api/index.js';
import { validateEmail } from '@/utils/validation.js';

export default {
  data() {
    return {
      // form values
      username: '',
      password: '',
      // log
      logMessage: '',
    };
  },
  computed: {
    isUsernameValid() {
      return validateEmail(this.username);
    },
  },
  methods: {
    async submitForm() {
      try {
        // 비즈니스 로직
        const loginData = {
          username: this.username,
          password: this.password,
        };

        const { data } = await loginUser(loginData);

        console.log(data.token);
        // token 값 store에 저장
        this.$store.commit('setToken', data.token);
        // mutations을 호출하는 api
        this.$store.commit('setUsername', data.user.username);
        // 메인 페이지로 이동
        this.$router.push('/main');

        // this.logMessage = `${data.user.username} 님 환영합니다.`;
      } catch (error) {
        // 에러 핸들링할 코드
        this.logMessage = error.response.data;
      } finally {
        // try, catch에 모두 적용 가능?
        this.initForm();
      }
    },
    initForm() {
      this.username = '';
      this.password = '';
    },
  },
};
</script>

<style>
.btn {
  color: white;
}
</style>
