import axios from 'axios';
// import store from '../store';
import { setInterceptors } from '@/api/common/interceptors';

function createInstance() {
  return axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
}

// axios 초기화 함수
function createInstanceWithAuth(url) {
  // axios.create로 공통 url 적용
  const instance = axios.create({
    baseURL: `${process.env.VUE_APP_API_URL}${url}`,
    // headers: {
    //   Authorization: store.state.token,
    // },
  });

  return setInterceptors(instance);
}

export const instance = createInstance();
export const posts = createInstanceWithAuth('posts');

// GET - posts
// POST - posts
// PUT - posts {id}
// DELETE - posts {id}
