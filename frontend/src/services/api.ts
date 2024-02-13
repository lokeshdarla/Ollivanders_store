
const BASE_URL = import.meta.env.VITE_BACKEND_URL;


//Example url
const API_ENDPOINTS = {
  LOGIN: '/api/auth/login',
  REGISTER: '/api/auth/register',
  GET_USER: '/api/user',
};

export const API_URLS = {
  LOGIN: `${BASE_URL}${API_ENDPOINTS.LOGIN}`,
  REGISTER: `${BASE_URL}${API_ENDPOINTS.REGISTER}`,
  GET_USER: `${BASE_URL}${API_ENDPOINTS.GET_USER}`,
};
