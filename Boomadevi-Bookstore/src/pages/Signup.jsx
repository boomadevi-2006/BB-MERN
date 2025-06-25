// src/pages/Signup.jsx
import React, { useState } from 'react';
import './Login.css'; // Reuse login styles
import bgVideo from '../assets/ls.mp4';
import API from '../data/api';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const { username, password } = formData;

    // ✅ only send username and password
   await API.post('/auth/signup', { username, password });



    alert('Signup successful! Please login.');
    setFormData({ username: '', email: '', password: '' });
    window.location.href = '/login'; // redirect
  } catch (err) {
    console.error('Signup error:', err.response?.data || err.message);
    alert(err.response?.data?.message || 'Signup failed. Try again.');
  }
};


  return (
    <div className="video-section">
      <video className="login-background-video" autoPlay muted loop>
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <form className="login-container" onSubmit={handleSubmit}>
        <h2 style={{ color: 'bisque' }}>Signup</h2>

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

        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
