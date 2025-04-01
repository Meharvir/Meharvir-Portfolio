import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Home.css';

function Home() {
  return (
    <div className="home-container">
      <section className="hero-section fade-in">
        <div className="hero-content">
          <h1 className="hero-title">
            Hey, I'm <span className="highlight">Mehar</span>!
          </h1>
          <p className="hero-subtitle">
            A passionate developer crafting innovative solutions
          </p>
          <div className="hero-cta">
            <a href="#projects" className="cta-button primary">View My Work</a>
            <Link to="/contact" className="cta-button secondary">Get in Touch</Link>
          </div>
        </div>
      </section>

      <section className="about-section fade-in" id="about">
        <div className="section-content">
          <h2>About Me</h2>
          <div className="about-grid">
            <div className="about-text">
              <p>
                I'm currently a Computer Science student at the University of North Carolina at Chapel Hill,
                with a focus on software engineering and data science. I'm passionate about coding and creating
                innovative solutions to real-world problems.
              </p>
              <div className="skills">
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">React</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Data Science</span>
              </div>
            </div>
            <div className="about-image">
              {/* Add your image here */}
            </div>
          </div>
        </div>
      </section>

      <section className="projects-section fade-in" id="projects">
        <div className="section-content">
          <h2>Recent Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-content">
                <h3>Personal Finance Tracker</h3>
                <p>A comprehensive tool for managing personal finances with data visualization.</p>
                <div className="project-tech">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>MongoDB</span>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-content">
                <h3>Automated Job Application Bot</h3>
                <p>An AI-powered bot that streamlines the job application process.</p>
                <div className="project-tech">
                  <span>Python</span>
                  <span>AI/ML</span>
                  <span>Automation</span>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-content">
                <h3>Water Conservation App</h3>
                <p>A mobile app helping users track and reduce water consumption.</p>
                <div className="project-tech">
                  <span>React Native</span>
                  <span>Firebase</span>
                  <span>IoT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section fade-in" id="contact">
        <div className="section-content">
          <h2>Get in Touch</h2>
          <div className="contact-content">
            <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>
            <div className="contact-info">
              <Link to="/contact" className="contact-link">
                <i className="fas fa-envelope"></i> Contact Me
              </Link>
              <div className="social-links">
                <a href="#" className="social-link"><i className="fab fa-github"></i></a>
                <a href="#" className="social-link"><i className="fab fa-linkedin"></i></a>
                <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
