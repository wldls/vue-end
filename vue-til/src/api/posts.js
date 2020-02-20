// 학습 노트 조작과 관련된 CRUD API 함수
import { posts } from './index';

// 학습 노트 데이터 목록을 조회하는 API
function fetchPosts() {
  return posts.get('/');
}

// 특정 학습 노트를 조회하는 API
function fetchPost(postId) {
  return posts.get(postId);
}

// 학습 노트 데이터를 생성하는 API
function createPost(postdata) {
  return posts.post('/', postdata);
}

// 학습 노트 데이터를 수정하는 API
function editPost(postId, postdata) {
  return posts.put(postId, postdata);
}

// 학습 노트 데이터를 삭제하는 API
function deletePost(postId) {
  return posts.delete(postId);
}

export { fetchPosts, fetchPost, createPost, editPost, deletePost };
