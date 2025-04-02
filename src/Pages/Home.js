import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Particles from 'react-tsparticles';
import { loadSlim } from "tsparticles-slim";
import '../Styles/Home.css';

const Home = () => {
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToProjects = () => {
    const offset = 100; // Adjust this value to control how far above the section it stops
    const elementPosition = projectsRef.current?.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  const scrollToContact = () => {
    const offset = 100; // Adjust this value to control how far above the section it stops
    const elementPosition = contactRef.current?.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) observer.observe(projectsRef.current);
    if (contactRef.current) observer.observe(contactRef.current);

    return () => observer.disconnect();
  }, []);

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="animated-shapes">
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
        <div className="hero-text-container">
          <h1 className="name-title">Meharvir Randhawa</h1>
          <p className="hero-subtitle">Passionate Computer Science Student</p>
          <div className="cta-buttons">
            <button onClick={scrollToProjects} className="cta-button">
              <span className="button-content">
                <i className="fas fa-code"></i>
                View Projects
              </span>
            </button>
            <button onClick={scrollToContact} className="cta-button outline">
              <span className="button-content">
                <i className="fas fa-envelope"></i>
                Contact Me
              </span>
            </button>
          </div>
        </div>
      </section>

      <section className="about-section fade-in" id="about">
        <div className="section-header">
          <h2>Introduction</h2>
          <p>Passionate about technology and creativity</p>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a Computer Science student at the University of North Carolina at Chapel Hill, 
              specializing in software development and data science. With a strong foundation in 
              programming and a passion for creating innovative solutions, I combine technical 
              expertise with creative problem-solving skills. My deep passion for data analytics 
              drives me to transform complex data into actionable insights, helping businesses 
              make data-driven decisions. I bring an analytical mindset and expertise in data 
              visualization, statistical analysis, and predictive modeling to help scale businesses 
              through informed decision-making.
            </p>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Frontend</h3>
                <p>React, JavaScript, HTML, CSS</p>
              </div>
              <div className="skill-category">
                <h3>Backend</h3>
                <p>Python, Java, Node.js, SQL</p>
              </div>
              <div className="skill-category">
                <h3>Data Science</h3>
                <p>Machine Learning, Data Analysis, Visualization</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="projects-section" ref={projectsRef}>
        <div className="section-header">
          <h2 className="gradient-text">Featured Projects</h2>
          <p className="section-subtitle">Some of my recent work</p>
        </div>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image">
              <img src="/project1.jpg" alt="Top Investor Portfolio Viewer" />
              <div className="project-overlay">
                <div className="project-preview">
                  <i className="fas fa-search-plus"></i>
                  <i className="fas fa-link"></i>
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3>Top Investor Portfolio Viewer</h3>
              <p>A web application for tracking and analyzing top investors' portfolios with advanced stock forecasting capabilities.</p>
              <div className="project-tech">
                <span>Python</span>
                <span>React</span>
                <span>Data Analysis</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/Meharvir/portfolio-viewer" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  <i className="fab fa-github"></i> View Code
                </a>
                <a href="https://portfolio-viewer-demo.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  <i className="fas fa-external-link-alt"></i> Live Demo
                </a>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="project-image">
              <img src="/project2.jpg" alt="Automated Pediatric Doctor's Office System" />
              <div className="project-overlay">
                <div className="project-preview">
                  <i className="fas fa-search-plus"></i>
                  <i className="fas fa-link"></i>
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3>Automated Pediatric Doctor's Office System</h3>
              <p>A comprehensive office management system developed using JavaFX and SQL for efficient patient care.</p>
              <div className="project-tech">
                <span>Java</span>
                <span>SQL</span>
                <span>JavaFX</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/Meharvir/doctor-office" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  <i className="fab fa-github"></i> View Code
                </a>
                <a href="https://doctor-office-demo.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  <i className="fas fa-external-link-alt"></i> Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section" ref={contactRef}>
        <div className="section-header">
          <h2 className="gradient-text">Get In Touch</h2>
          <p className="section-subtitle">Let's work together on something amazing</p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-details">
                <h3>Email</h3>
                <a href="mailto:meharvir.randhawa@outlook.com" className="contact-link">
                  meharvir.randhawa@outlook.com
                </a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div className="contact-details">
                <h3>Phone</h3>
                <a href="tel:510-826-8380" className="contact-link">
                  510-826-8380
                </a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="contact-details">
                <h3>Location</h3>
                <p className="contact-text">Chapel Hill, North Carolina</p>
              </div>
            </div>
          </div>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/meharvir-randhawa" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/Meharvir" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
