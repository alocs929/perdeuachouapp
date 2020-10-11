import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://e30fe190b76a.ngrok.io'
  baseURL: 'http://ec2weofkefofw:8080'
});

export default api;
