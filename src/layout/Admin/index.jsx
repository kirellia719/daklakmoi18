import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import '../../styles/main.scss'; // Main CSS entry point

const Layout = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem('admin_auth') === 'true';

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/admin-login');
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) return null;

  return (
    <div className="admin-layout">
      <Sidebar />
      <div className="admin-main">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
