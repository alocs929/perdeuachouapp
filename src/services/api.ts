import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://e30fe190b76a.ngrok.io'
  baseURL: "http://ec2-100-24-235-52.compute-1.amazonaws.com:8080/"
});

export default api;
