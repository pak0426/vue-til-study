import axios from 'axios';
import { setInterceptors } from '@/api/common/interceptors';

function createInstance() {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  })
  return setInterceptors(instance);
}
const instance = createInstance();

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