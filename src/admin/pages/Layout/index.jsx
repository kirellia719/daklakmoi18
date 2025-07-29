import './style.scss';
import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';

const Layout = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem('admin_auth') === 'true';

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) navigate('/admin-login');
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setSidebarOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isAuthenticated) return null;

  return (
    <div className={`admin-layout ${isMobile ? 'mobile' : 'desktop'}`}>
      {isMobile && <Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />}
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="admin-main">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
