import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://10.0.0.109:3000',
});

export default axiosInstance;
