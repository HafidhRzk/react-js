import axios from 'axios';

export const API = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL || 'http://localhost:8000/api/',
});