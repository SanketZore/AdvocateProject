import React from 'react';

const CriminalTab = () => {
  return (
    <div className="criminal-tab">
      <h2>Criminal</h2>
      <label htmlFor="m_skey">Select Application Type:</label>
      <select name="m_skey" className="form-control">
        <option value="APPSC">Application in Cr. Suo Moto CONP</option>
        <option value="ALP">Appln For Leave To Appeal(PVT.)</option>
        <option value="ALS">Appln For Leave to Appeal(STATE)</option>
        <option value="ABA">Cr. Anticipatory Bail Appln.</option>
        <option value="APPA">Cr. Application in Appeal</option>
        <option value="APPP">Cr. Application in Application</option>
        <option value="APPCO">Cr. Application in Confirmation</option>
        <option value="APPCP">Cr. Application in Contempt</option>
        <option value="APPI">Cr. Application in PIL</option>
        <option value="APPCR">Cr. Application in Reference</option>
        <option value="APPR">Cr. Application in Revision</option>
        <option value="APPW">Cr. Application in Writ Petition</option>
        <option value="APL">Cr. Application U/s 482</option>
        <option value="BA">Cr. Bail Application</option>
        <option value="CRPIL">Cr. Public Interest Litigation</option>
        <option value="SMCP">Cr. Suo-Motu Contempt Petn.</option>
        <option value="SOMO">Cr. Suo-Motu Petition</option>
        <option value="SMRN">Cr. Suo-Motu Revision Appln.</option>
        <option value="SMWP">Cr. Suo-Motu Writ Petition</option>
        <option value="APEAL">Criminal Appeal</option>
        <option value="APPLN">Criminal Application</option>
        <option value="CONF">Criminal Confirmation Case</option>
        <option value="CONP">Criminal Contempt Petition</option>
        <option value="REF">Criminal Reference</option>
        <option value="REVW">Criminal Review</option>
        <option value="REVN">Criminal Revision Appln.</option>
        <option value="SMAP">Criminal Suo-Motu Application</option>
        <option value="WP">Criminal Writ Petition</option>
        <option value="IA">INTERIM APPLICATION</option>
        <option value="SMP">Suo-Motu Cr. PIL</option>
      </select>
    </div>
  );
};

export default CriminalTab;