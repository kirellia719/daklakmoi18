import React, { useState } from 'react';
import Sidebar from './Sidebar';
import AlbumModule from './AlbumModule';
import VideoModule from './VideoModule';
import './AdminDashboard.scss';


const Header = ({ onToggleSidebar }) => {
  return (
    <div className="header">
      <button className="hamburger" onClick={onToggleSidebar}>
        ☰
      </button>
      <h1>Admin</h1>
    </div>
  );
};

const AdminDashboard = () => {
  const [activeModule, setActiveModule] = useState('album');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderModule = () => {
    switch (activeModule) {
      case 'album':
        return <AlbumModule />;
      case 'video':
        return <VideoModule />;
      default:
        return <div>Chọn module từ menu</div>;
    }
  };

  return (

    <div className="admin-dashboard">
      <Sidebar
        active={activeModule}
        onSelect={setActiveModule}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      <div className="main-panel">
        <Header onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <div className="content-area">{renderModule()}</div>
      </div>
    </div>
  );
};

export default AdminDashboard;
