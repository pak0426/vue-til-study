import axios from 'axios';

function registerUser() {
  const url = 'http://localhost:3000/signup';
  return axios.post(url)
    .then(function(response) {
      console.log('response', response);
    })
    .catch(function(error) {
      console.log('error', error);
    })
}

export { registerUser }