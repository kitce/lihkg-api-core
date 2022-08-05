import axios from 'axios';
import type { RequestMethod } from '../types/http';
import { baseURL } from './config';
import { getRequestHeaders } from './helpers';

const api = axios.create({ baseURL });

api.interceptors.request.use((config) => {
  const { method, url, baseURL, params, data } = config;
  const _url = `${baseURL}${url}`;
  /* prepend the necessary request headers */
  config.headers = {
    ...getRequestHeaders(method! as RequestMethod, _url, data || params),
    ...config.headers
  };
  return config;
});

export default api;
