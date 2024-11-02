import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaBars, FaTimes, FaHome, FaInfoCircle, FaCog, FaFileInvoiceDollar, FaEnvelope } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-text">MyBrand</span>
          <span className="logo-dot">.</span>
        </div>
        
        <div className="navbar-toggle" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes className="toggle-icon" /> : <FaBars className="toggle-icon" />}
        </div>

        <div className={`navbar-menu ${isMobileMenuOpen ? 'navbar-menu-open' : ''}`}>
          <ul className={`navbar-links ${isMobileMenuOpen ? 'navbar-links-mobile' : ''}`}>
            <li><a href="/" className="nav-link"><FaHome className="social-icon" /> Home</a></li>
            <li><a href="/aboutUs" className="nav-link"><FaInfoCircle className="social-icon" /> About</a></li>
            <li><a href="/services" className="nav-link"><FaCog className="social-icon" /> Services</a></li>
            <li><a href="/billingSection" className="nav-link"><FaFileInvoiceDollar className="social-icon" /> Bills</a></li>
            <li><a href="/contact" className="nav-link"><FaEnvelope className="social-icon" /> Contact</a></li>
          </ul>

          {/* Social Media Icons in Mobile Menu */}
          <div className="navbar-social-mobile">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;