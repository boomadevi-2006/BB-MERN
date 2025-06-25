import React, { useState } from 'react';
import './Login.css';
import bgVideo from '../assets/ls.mp4';
import API from '../data/api'; // Axios instance

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post('/auth/login', formData);

      // ✅ Store username locally if needed
      localStorage.setItem('username', formData.username);

      alert(res.data.message || 'Login successful!');
      setFormData({ username: '', password: '' });
      window.location.href = '/'; // or navigate('/dashboard');
    } catch (err) {
      console.error('Login failed:', err.response?.data || err.message);
      alert(err.response?.data?.message || 'Login failed. Please check credentials.');
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="video-section">
      <video className="login-background-video" autoPlay muted loop>
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <form className="login-container" onSubmit={handleSubmit}>
        <h2 style={{ color: 'bisque' }}>Login</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        /><br /><br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        /><br /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
