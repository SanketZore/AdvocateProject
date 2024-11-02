import React from 'react';


const OriginalTab = () => {
  return (
    <div className="tab-content-wrapper">
      <h2>Original</h2>
      <label htmlFor="m_skey">Select Application Type:</label>
      <select name="m_skey" className="form-control">
        <option value="ADMS">ADMIRALTY SUITS</option>
        <option value="AITR">AGRICULTURAL INCOME TAX REFERENCE</option>
        <option value="APP">APPEALS (OS)</option>
        <option value="AEP">APPLICATION IN ELECTION PETITION</option>
        <option value="ARAPP">ARBITRATION APPEAL</option>
        <option value="ARBAP">ARBITRATION APPLICATION</option>
        <option value="ARBP">ARBITRATION PETITION.</option>
        <option value="ARBS">ARBITRATION SUITS</option>
        <option value="AW">AWARDS</option>
        <option value="BIFR">CASE UNDER BIFR</option>
        <option value="CTS">CAVEAT IN TESTAMENTARY</option>
        <option value="CEXA">CENTRAL EXCISE APPEAL</option>
        <option value="CEA">CENTRAL EXCISE APPLICATION</option>
        <option value="CER">CENTRAL EXCISE REFERENCE</option>
        <option value="COI">CHAMBER ORDER (INSOLVENCY)</option>
        <option value="CHOL">CHAMBER ORDER LODGING</option>
        <option value="WP">WRIT PETITION(OS)</option>
        <option value="WSCCL">WRITTEN STATEMENT & COUNTER-CLAIM LODGING</option>
      </select>
    </div>
  );
};

export default OriginalTab;