// src/pages/AdminPage.jsx
import { useState } from 'react';
import './style.scss'; // Giả sử bạn đang dùng SASS
import AdminDashboard from '../AdminDashboard';

const AdminPage = () => {
  const [inputPassword, setInputPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');

  const correctPassword = import.meta.env.VITE_ADMIN_PASSWORD;

  // useEffect(() => {
  //   const auth = localStorage.getItem('admin-authenticated');
  //   if (auth === 'true') {
  //     setIsAuthenticated(true);
  //   }
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputPassword === correctPassword) {
      setIsAuthenticated(true);
      // localStorage.setItem('admin-authenticated', 'true');
      setError('');
    } else {
      setError('Mật khẩu không đúng!');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="admin-login">
        <h2>Vui lòng nhập mật khẩu để truy cập</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Mật khẩu..."
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
          />
          <button type="submit">Xác nhận</button>
        </form>
        {error && <p className="error">{error}</p>}
      </div>
    );
  }

  return (
    <div className="admin-page">
      <AdminDashboard />
    </div>
  );
};

export default AdminPage;
