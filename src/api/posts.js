import { posts } from '@/api/index';

function fetchPosts() {
  return posts.get('/');
}

function createPost(postData) {
  return posts.post('/', postData);
}

function deletePost(postId) {
  return posts.delete('/' + postId);
}

function fetchPost(postId) {
  return posts.get('/' + postId)
}

function editPost(postData) {
  return posts.put('/', postData);
}

export { fetchPosts, createPost, deletePost, fetchPost, editPost }