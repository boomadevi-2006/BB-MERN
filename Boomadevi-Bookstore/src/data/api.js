import axios from 'axios';

const API = axios.create({
  baseURL: 'https://bb-mern-1.onrender.com', // ✅ or the port your backend uses
  headers: {
    'Content-Type': 'application/json'
  }
});

export default API;
