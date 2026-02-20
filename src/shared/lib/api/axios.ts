import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
const API_BASE_URL = process.env.DATABASE_URL;

const axiosConfig: AxiosRequestConfig = {
  baseURL: API_BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
};

const apiClient: AxiosInstance = axios.create(axiosConfig);

apiClient.interceptors.request.use(
  (config) => {
    // Bisa menambahkan token atau log request
    // config.headers['Authorization'] = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
