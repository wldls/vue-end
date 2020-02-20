// login, 회원가입, 회원 탈퇴 등 사용자 계정과 관련된 API 함수
import { instance } from './index';

// 회원가입 API
function registerUser(userData) {
  // const url = 'http://localhost:3000/signup';
  // return axios.post(url);
  // return instance.post('signup', userData);
  return instance.post('signup', userData);
}

// 로그인 API
function loginUser(loginData) {
  return instance.post('login', loginData);
}

export { registerUser, loginUser };
