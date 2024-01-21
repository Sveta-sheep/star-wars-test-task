import axios, { AxiosRequestConfig } from 'axios';
import { BASE_URL } from './constants';

const axiosConfig: AxiosRequestConfig = {
  baseURL: BASE_URL,
  timeout: 30000,
};

const axiosClient = axios.create(axiosConfig);

export default axiosClient;
