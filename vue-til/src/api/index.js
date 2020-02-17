import axios from 'axios';
import store from '../store';
import { setInterceptors } from '@/api/common/interceptors';

// axios.create로 공통 url 적용
function createInstance() {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    headers: {
      Authorization: store.state.token,
    },
  });

  return setInterceptors(instance);
}

const instance = createInstance();

function registerUser(userData) {
  // const url = 'http://localhost:3000/signup';
  // return axios.post(url);
  // return instance.post('signup', userData);
  return instance.post('signup', userData);
}

function loginUser(loginData) {
  return instance.post('login', loginData);
}

export { registerUser, loginUser };
