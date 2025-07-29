import './style.scss';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const ADMIN_PASS = import.meta.env.VITE_ADMIN_PASSWORD;

const Login = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const correctPassword = ADMIN_PASS;

    if (password === correctPassword) {
      localStorage.setItem('admin_auth', 'true');
      navigate('/admin');
    } else {
      setError('Sai mật khẩu. Vui lòng thử lại.');
    }
  };

  return (
    <div className="admin-login-container">
      <form className="admin-login-form" onSubmit={handleSubmit}>
        <h2 className="form-title">🔒 Admin Login</h2>

        <input
          type="password"
          placeholder="Nhập mật khẩu quản trị"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="error">{error}</p>}

        <button type="submit">Đăng nhập</button>
      </form>
    </div>
  );
};

export default Login;
