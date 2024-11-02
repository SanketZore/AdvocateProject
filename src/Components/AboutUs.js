import React from 'react';
import './AboutUs.css';
import { FaCheckCircle} from 'react-icons/fa';

const About = () => (
   <div className="about">
      <div className="about-header">
         <h2>About Advocate Billing</h2>
         <p>Your partner in efficient billing management.</p>
      </div>

      <div className="about-content">
         <div className="about-section mission">
            <h3>Our Mission</h3>
            <p>To simplify billing for legal professionals.</p>
         </div>

         <div className="about-section features">
            <h3>Key Features</h3>
            <ul className="features-list">
               <li><FaCheckCircle className="icon" /> Easy invoice generation</li>
               <li><FaCheckCircle className="icon" /> Client tracking</li>
               <li><FaCheckCircle className="icon" /> Secure payments</li>
            </ul>
         </div>

      </div>
   </div>
);

export default About;
