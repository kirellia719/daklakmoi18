import './style.scss';
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Sidebar = ({ open, onClose }) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('admin_auth');
    navigate('/admin-login');
  };

  return (
    <>
      <div className={`admin-sidebar ${open ? 'open' : ''}`}>
        <h2>Admin</h2>
        <nav>
          <NavLink to="/admin" end onClick={onClose}>Dashboard</NavLink>
          <NavLink to="/admin/videos" onClick={onClose}>Video</NavLink>
          <NavLink to="/admin/images" onClick={onClose}>Ảnh</NavLink>
          {/* <NavLink to="/admin/provinces" onClick={onClose}>Tỉnh</NavLink> */}
        </nav>
        <button onClick={logout}>Đăng xuất</button>
      </div>

      {open && <div className="sidebar-backdrop" onClick={onClose} />}
    </>
  );
};

export default Sidebar;
