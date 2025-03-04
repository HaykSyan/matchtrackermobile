import axios, { InternalAxiosRequestConfig } from 'axios';
import config from 'config';
/** logger interceptors */
interface AxiosConfig {
  baseURL: string;
}

const baseConfig: AxiosConfig = {
  baseURL: config.apiUrl,
};

const client = axios.create(baseConfig);

/** logger interceptors */
const loggerInterceptor = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  /** TODO */
  return config;
};

client.interceptors.request.use(loggerInterceptor);
client.interceptors.response.use(
  (response) => {
    /** TODO: Add any response interceptors */
    return response;
  },
  async (error) => {
    return Promise.reject(error);
  }
);

export default client;
