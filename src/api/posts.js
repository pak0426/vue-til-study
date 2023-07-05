import { posts } from '@/api/index';

function fetchPosts() {
  return posts.get('/');
}

function createPost(postData) {
  return posts.post('/', postData);
}

function deletePost(postData) {
  return posts.delete('/', postData);
}

export { fetchPosts, createPost, deletePost }