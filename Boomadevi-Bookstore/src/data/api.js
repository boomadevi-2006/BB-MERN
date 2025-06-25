import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000', // ✅ or the port your backend uses
  headers: {
    'Content-Type': 'application/json'
  }
});

export default API;
