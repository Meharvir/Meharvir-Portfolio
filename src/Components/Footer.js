import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';
import '../Styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content container">
        <ScrollReveal>
          <div className="footer-grid">
            <div className="footer-about">
              <h3 className="footer-title">About Me</h3>
              <p>I'm a Computer Science Student & Music Producer passionate about creating engaging digital experiences and innovative solutions.</p>
              <div className="social-links">
                <a href="https://github.com/Meharvir" target="_blank" rel="noopener noreferrer" className="social-link">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/meharvir-randhawa-558b372a0/" target="_blank" rel="noopener noreferrer" className="social-link">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>

            <div className="footer-nav">
              <h3 className="footer-title">Quick Links</h3>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Projects">Projects</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
              </ul>
            </div>

            <div className="footer-contact">
              <h3 className="footer-title">Contact Info</h3>
              <ul className="contact-info">
                <li>
                  <i className="fas fa-envelope"></i>
                  <a href="mailto:contact@example.com">contact@example.com</a>
                </li>
                <li>
                  <i className="fas fa-phone"></i>
                  <a href="tel:+1234567890">+1 (234) 567-890</a>
                </li>
                <li>
                  <i className="fas fa-map-marker-alt"></i>
                  <span>New York, NY, USA</span>
                </li>
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <ScrollReveal delay={300}>
            <p className="copyright">
              &copy; {currentYear} Your Name. All Rights Reserved.
            </p>
            <p className="credit">
              Designed & Built with <i className="fas fa-heart pulse"></i> by Your Name
            </p>
          </ScrollReveal>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
