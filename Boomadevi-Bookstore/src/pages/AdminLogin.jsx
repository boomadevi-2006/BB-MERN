import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (password === 'admin123') {
      alert("✅ Admin logged in");

      // ✅ Set login flag in localStorage
      localStorage.setItem("admin", "true");

      navigate('/admin/add-book');
    } else {
      alert("❌ Incorrect password");
    }
  };

  return (
    <div style={{ padding: '30px', textAlign: 'center' }}>
      <h2>Admin Login</h2>
      <input
        type="password"
        placeholder="Enter Admin Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ padding: '8px', margin: '10px' }}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default AdminLogin;
