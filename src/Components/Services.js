import React from 'react';
import './Services.css';
import { FaMoneyBillWave, FaClipboardList, FaUserShield, FaChartLine } from 'react-icons/fa';

const services = [
   {
      id: 1,
      title: 'Billing Management',
      description: 'Streamline your billing processes with our intuitive management tools. Generate invoices and track payments effortlessly.',
      icon: <FaMoneyBillWave className="service-icon" />,
   },
   {
      id: 2,
      title: 'Client Management',
      description: 'Easily manage your clients with organized records and histories. Never miss important details with our efficient tracking system.',
      icon: <FaClipboardList className="service-icon" />,
   },
   {
      id: 3,
      title: 'Secure Payments',
      description: 'Ensure secure payment processing with top-tier encryption and security protocols, protecting both you and your clients.',
      icon: <FaUserShield className="service-icon" />,
   },
   {
      id: 4,
      title: 'Analytics & Reporting',
      description: 'Get insights into your billing practices with detailed reports and analytics, helping you make informed decisions.',
      icon: <FaChartLine className="service-icon" />,
   },
];

const Services = () => (
   <div className="services">
      <div className="services-header">
         <h2>Our Services</h2>
         <p>Explore the wide range of services we offer to enhance your billing experience.</p>
      </div>
      <div className="services-list">
         {services.map((service) => (
            <div className="service-card" key={service.id}>
               {service.icon}
               <h3>{service.title}</h3>
               <p>{service.description}</p>
            </div>
         ))}
      </div>
   </div>
);

export default Services;
