import './style.scss';
import React from 'react';

const Header = ({ onToggleSidebar }) => {
  return (
    <div className="admin-header">
      <button className="menu-button" onClick={onToggleSidebar}>☰</button>
      <h1>Admin Panel</h1>
    </div>
  );
};

export default Header;
