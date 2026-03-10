import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosHeaders,
} from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || '';

const HARDCODED_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN || '';

const axiosConfig: AxiosRequestConfig = {
  baseURL: API_BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
};

const apiClient: AxiosInstance = axios.create(axiosConfig);

apiClient.interceptors.request.use(
  (config) => {
    const headers = AxiosHeaders.from(config.headers);
    headers.set(
      'Authorization',
      `Bearer ${HARDCODED_TOKEN}`
    );
    config.headers = headers;
    return config;
  },
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => Promise.reject(error)
);

export default apiClient;