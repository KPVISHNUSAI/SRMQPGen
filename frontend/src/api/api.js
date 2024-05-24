// src/api/api.js
import axios from 'axios';
import Cookies from 'js-cookie';

export const isAuthenticated = () => {
  return !!Cookies.get('token');
};

export const logout = () => {
  Cookies.remove('token');
};

const api = axios.create({
  baseURL: 'http://localhost:4000', 
  withCredentials: true,
});


export const login = (credentials) => api.post('/auth/login', credentials);
export const register = (userData) => api.post('/auth/signup', userData);


export const fetchUsers = () => api.get('/allusers');
export const currentUser = () => api.get('/users');
export const createUser = (user) => api.post('/users', user);


export const fetchQuestions = () => api.get('/questions');
export const createQuestion = (question) => api.post('/questions', question);

export default api;
