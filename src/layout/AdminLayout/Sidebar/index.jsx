import React from 'react';
import './Sidebar.scss';

const Sidebar = ({ active, onSelect, isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>


      <div className="sidebar-logo logo" style={{ color: "white" }}>Upstream</div>

      <div className="menu">
        <div
          className={`icon ${active === 'album' ? 'active' : ''}`}
          onClick={() => {
            onSelect('album');
            onClose();
          }}
        >
          🖼️ Album
        </div>

        <div
          className={`icon ${active === 'video' ? 'active' : ''}`}
          onClick={() => {
            onSelect('video');
            onClose();
          }}
        >
          🎥 Video
        </div>
      </div>
      <div className="close-btn" onClick={onClose}>✖</div>
    </div>
  );
};

export default Sidebar;
