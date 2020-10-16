import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://e30fe190b76a.ngrok.io'
  baseURL: "http://ec2-52-91-101-186.compute-1.amazonaws.com:8080/"
});

export default api;
