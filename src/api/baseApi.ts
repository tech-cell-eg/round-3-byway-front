import axios from 'axios';

const baseApi = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL as string,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default baseApi;
