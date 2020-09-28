import axios from 'axios';

const api = axios.create({
  baseURL: 'http://ec2-34-204-81-156.compute-1.amazonaws.com:8080/'
});

export default api;
