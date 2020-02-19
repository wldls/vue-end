import axios from 'axios';
// import store from '../store';
import { setInterceptors } from '@/api/common/interceptors';

// axios 초기화 함수
function createInstance() {
  // axios.create로 공통 url 적용
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    // headers: {
    //   Authorization: store.state.token,
    // },
  });

  return setInterceptors(instance);
}

const instance = createInstance();

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

// 학습 노트 데이터를 조회하는 API
function fetchPosts() {
  return instance.get('posts');
}

// 학습 노트 데이터를 생성하는 API
function createPost(postdata) {
  return instance.post('posts', postdata);
}

export { registerUser, loginUser, fetchPosts, createPost };
