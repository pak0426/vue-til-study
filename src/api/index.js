import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000/'
})

async function registerUser(userData) {
  return instance.post('signup', userData);
}

export { registerUser }