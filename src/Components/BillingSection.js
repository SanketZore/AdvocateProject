import React, { useState } from 'react';
import CriminalTab from './CriminalTab';
import CivilTab from './CivilTab';
import OriginalTab from './OriginalTab'; // Import the OriginalTab component
import './BillingSection.css'; // Ensure you have this CSS file
import AdvocateBillingForm from './AdvocateBillingForm';

const BillingSection = () => {
  const [activeTab, setActiveTab] = useState('criminal');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <br /><br /><br/>
      <div className="billing-section">
        <h1>Billing Section</h1>
        <div className="tabs">
          <button
            className={`tab-button ${activeTab === 'criminal' ? 'active' : ''}`}
            onClick={() => handleTabClick('criminal')}
          >
            Criminal
          </button>
          <button
            className={`tab-button ${activeTab === 'civil' ? 'active' : ''}`}
            onClick={() => handleTabClick('civil')}
          >
            Civil
          </button>
          <button
            className={`tab-button ${activeTab === 'original' ? 'active' : ''}`}
            onClick={() => handleTabClick('original')}
          >
            Original
          </button>
        </div>
        <div className="tab-content">
          {activeTab === 'criminal' && <CriminalTab />}
          {activeTab === 'civil' && <CivilTab />}
          {activeTab === 'original' && <OriginalTab />} {/* Render OriginalTab */}
        </div>
      </div>
      <br/>
      <AdvocateBillingForm/>
      <br/>


    </div>
  );
};

export default BillingSection;