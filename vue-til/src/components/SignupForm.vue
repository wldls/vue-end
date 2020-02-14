<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="username">id:</label>
          <input
            type="text"
            id="username"
            v-model="username"
            v-bind:class="{'inp-error': username !== '' && !isUsernameValid}"
          />
          <p class="txt-err" v-if="username !== '' && !isUsernameValid">유효하지 않은 메일주소입니다.</p>
        </div>
        <div>
          <label for="password">pw:</label>
          <input type="text" id="password" v-model="password" />
        </div>
        <div>
          <label for="nickname">nickname:</label>
          <input type="text" id="nickname" v-model="nickname" />
        </div>
        <button
          type="submit"
          v-bind:disabled="password === '' || nickname === '' || !isUsernameValid"
        >회원 가입</button>
        <p class="log">{{ logMessage }}</p>
      </form>
    </div>
  </div>
</template>

<script>
import { registerUser } from '@/api/index.js';
import { validateEmail } from '@/utils/validation.js';

export default {
  data() {
    return {
      // form values
      username: '',
      password: '',
      nickname: '',
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
      const userData = {
        username: this.username,
        password: this.password,
        nickname: this.nickname,
      };

      const { data } = await registerUser(userData);

      this.logMessage = `${data.username}님이 가입되었습니다.`;

      this.initForm();
    },
    initForm() {
      this.username = '';
      this.password = '';
      this.nickname = '';
    },
  },
};
</script>

<style scoped>
.inp-error {
  border-color: red;
}
.txt-err {
  margin: 0;
  color: red;
}
</style>
