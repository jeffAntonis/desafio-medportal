import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://192.168.0.136:3000',
});

export default axiosInstance;
