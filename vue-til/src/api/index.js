import axios from 'axios';

// axios.create로 공통 url 적용
const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

function registerUser(userData) {
  // const url = 'http://localhost:3000/signup';
  // return axios.post(url);
  return instance.post('signup', userData);
}

function loginUser(loginData) {
  return instance.post('login', loginData);
}

export { registerUser, loginUser };
