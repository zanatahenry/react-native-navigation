import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://localhost:3000', //MacOS
  baseURL: 'http://127.0.0.1:3000/', //Android
});

export default api;
