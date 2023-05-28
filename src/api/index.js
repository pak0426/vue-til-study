import axios from 'axios';

async function registerUser(userData) {
  const url = 'http://localhost:3000/signup';
  const response = await axios.post(url, userData);
  return response;
}

export { registerUser }