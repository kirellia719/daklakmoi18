import React from 'react';
import './Tabs.scss';

const Tabs = ({ activeTab, setActiveTab, tabs }) => {
  return (
    <div className="tabs-container">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={activeTab === index ? 'tab active' : 'tab'}
          onClick={() => setActiveTab(index)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
