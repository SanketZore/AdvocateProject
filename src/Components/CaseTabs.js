import React, { useState } from 'react';
import './CaseTabs.css'; // Ensure you have the necessary styles

const CaseTabs = ({ onTabChange }) => {
  const [activeTab, setActiveTab] = useState('all'); // Default to 'all'

  const handleTabChange = (customerType) => {
    setActiveTab(customerType); // Set the active tab
    onTabChange(customerType); // Call the passed function to filter customers
  };

  return (
    <div className="case-tabs">
      <button 
        className={activeTab === 'criminal' ? 'active' : ''} 
        onClick={() => handleTabChange('criminal')}
      >
        Criminal
      </button>
      <button 
        className={activeTab === 'civil' ? 'active' : ''} 
        onClick={() => handleTabChange('civil')}
      >
        Civil
      </button>
      <button 
        className={activeTab === 'original' ? 'active' : ''} 
        onClick={() => handleTabChange('original')}
      >
        Original
      </button>
      <button 
        className={activeTab === 'all' ? 'active' : ''} 
        onClick={() => handleTabChange('all')}
      >
        All
      </button>
    </div>
  );
};

export default CaseTabs;