import React from 'react';

const CivilTab = () => {
  return (
    <div className="civil-tab">
      <h2>Civil</h2>
      <label htmlFor="m_skey">Select Application Type:</label>
      <select name="m_skey" className="form-control">
        <option value="AO">Appeal from Order</option>
        <option value="ARA">Arbitration Appeal</option>
        <option value="ARP">Arbitration Petition</option>
        <option value="CAO">CA in Others(MCA/TXA/CA)</option>
        <option value="CAP">Civil Appl. in ARP</option>
        <option value="CA">Civil Application</option>
        <option value="CAA">Civil Application in AO</option>
        <option value="CAE">Civil Application in C.REF</option>
        <option value="CAT">Civil Application in CAPL</option>
        <option value="CAN">Civil Application in CP</option>
        <option value="CAC">Civil Application in CRA</option>
        <option value="CAF">Civil Application in FA</option>
        <option value="CAM">Civil Application in FCA</option>
        <option value="CAFM">Civil Application In FEMA</option>
        <option value="CAY">Civil Application in FERA</option>
        <option value="CAL">Civil Application in LPA</option>
        <option value="CAI">Civil Application in PIL</option>
        <option value="CAS">Civil Application in SA</option>
        <option value="CAW">Civil Application in WP</option>
        <option value="CAR">Civil Appln. in ARA</option>
        <option value="C.REF">Civil References</option>
        <option value="CRA">Civil Revision Application</option>
        <option value="SMCPC">Civil Suo Motu Contempt Petition</option>
        <option value="WP">Civil Writ Petition</option>
        <option value="COMAO">Commercial AO</option>
        <option value="COARA">Commercial Arbitration Appeal</option>
        <option value="COARP">Commercial Arbitration Petition</option>
        <option value="CCAPL">Commercial Contempt Appeal</option>
        <option value="COMCP">Commercial Contempt Petition</option>
        <option value="COMFA">Commercial FA</option>
        <option value="CP">Cont. Petition</option>
        <option value="CAPL">Contempt Appeal</option>
        <option value="COXOB">Cross Objection In Commercial FA/ARA/CO/ARP/CP/CA</option>
        <option value="XOB">Cross Objection Stamp</option>
        <option value="FCA">Family Court Appeal</option>
        <option value="FEMA">FEMA Appeal</option>
        <option value="FERA">FERA Appeal</option>
        <option value="FA">First Appeal</option>
        <option value="IA">INTERIM APPLICATION</option>
        <option value="LPA">Letter Patent Appeal</option>
        <option value="MPA">Marriage Petition (A)</option>
        <option value="MCA">Misc.Civil Application</option>
        <option value="PIL">Public Interest Litigation</option>
        <option value="RC">Rejected Case</option>
        <option value="RPF">Review Pent. in FA</option>
        <option value="RAP">Review Petition in ARA</option>
        <option value="COMRP">Review Petition In Commercial FA/ARA/AO/ARP/CP/CA</option>
        <option value="RPFM">Review Petition In FEMA Appeal</option>
        <option value="RPIA">REVIEW PETITION IN IA</option>
        <option value="RPV">Review Petition in MCA</option>
        <option value="RPI">Review Petition In PIL</option>
        <option value="RPA">Review Petn. in AO</option>
        <option value="RPR">Review Petn. in ARP</option>
        <option value="RPT">Review Petn. in CAPL</option>
        <option value="RPN">Review Petn. in CP</option>
        <option value="RPC">Review Petn. in CRA</option>
        <option value="RPM">Review Petn. in FCA</option>
        <option value="RPL">Review Petn. in LPA</option>
        <option value="RPS">Review Petn. in SA</option>
        </select>
    </div>
  );
};

export default CivilTab;