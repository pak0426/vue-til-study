import axios from 'axios';
import store from '@/store/index'

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    Authorization: store.state.accessToken,
  }
})

function registerUser(userData) {
  return instance.post('signup', userData)
    .then(response => {
      return response;
    })
    .catch(e => {
      console.log('e', e);
    })
}

function loginUser(userData) {
  return instance.post('login', userData)
    .then(response => {
      return response;
    })
    .catch(error => {
      return error.response;
    });
}


export { registerUser, loginUser }