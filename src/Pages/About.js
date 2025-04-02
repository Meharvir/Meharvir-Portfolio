import React, { useEffect, useRef } from 'react';
import '../Styles/About.css';
import Particles from '../Components/Particles';

const About = () => {
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const leadershipRef = useRef(null);
  const certificationsRef = useRef(null);
  const musicRef = useRef(null);

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

    if (experienceRef.current) observer.observe(experienceRef.current);
    if (educationRef.current) observer.observe(educationRef.current);
    if (leadershipRef.current) observer.observe(leadershipRef.current);
    if (certificationsRef.current) observer.observe(certificationsRef.current);
    if (musicRef.current) observer.observe(musicRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-page">
      <Particles />
      <section className="about-hero">
        <div className="hero-content">
          <h1 className="glitch" data-text="About Me">About Me</h1>
          <p className="hero-subtitle">Computer Science Student & Music Producer</p>
        </div>
      </section>

      <section className="about-section" ref={experienceRef}>
        <div className="section-header">
          <h2 className="gradient-text">Work Experience</h2>
          <p className="section-subtitle">My professional journey</p>
        </div>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-date">2024 - Present</div>
              <h3>Private Tutor</h3>
              <h4>Varsity Tutors</h4>
              <ul>
                <li>Teaching Java programming to high school students</li>
                <li>Developing personalized learning plans</li>
                <li>Improving student performance through interactive sessions</li>
              </ul>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-date">2023 - 2024</div>
              <h3>Business Data Analyst & Digital Marketing Intern</h3>
              <h4>Hukam Studios</h4>
              <ul>
                <li>Analyzed market trends and consumer behavior</li>
                <li>Developed data-driven marketing strategies</li>
                <li>Created visualizations for business insights</li>
              </ul>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-date">2023</div>
              <h3>Consumer Insights Data Analytics Extern</h3>
              <h4>Beats by Dre</h4>
              <ul>
                <li>Conducted market research and analysis</li>
                <li>Created data visualizations for consumer insights</li>
                <li>Presented findings to stakeholders</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="education-section" ref={educationRef}>
        <div className="section-header">
          <h2 className="gradient-text">Education</h2>
          <p className="section-subtitle">My academic background</p>
        </div>
        <div className="education-grid">
          <div className="education-item">
            <div className="education-icon">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <div className="education-content">
              <h3>University of North Carolina at Chapel Hill</h3>
              <p>Bachelor of Science in Computer Science</p>
              <p>Minor in Data Science</p>
              <p>Expected Graduation: December 2025</p>
              <div className="education-details">
                <h4>Relevant Coursework:</h4>
                <ul>
                  <li>Data Structures and Algorithms</li>
                  <li>Software Engineering</li>
                  <li>Machine Learning</li>
                  <li>Database Systems</li>
                  <li>Web Development</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="leadership-section" ref={leadershipRef}>
        <div className="section-header">
          <h2 className="gradient-text">Leadership Experience</h2>
          <p className="section-subtitle">My role in student organizations</p>
        </div>
        <div className="leadership-grid">
          <div className="leadership-item">
            <div className="leadership-icon">
              <i className="fas fa-users"></i>
            </div>
            <div className="leadership-content">
              <h3>Founder/President</h3>
              <h4>Punjabi Student Association</h4>
              <p>Established and led a cultural club promoting Punjabi heritage and traditions.</p>
              <ul>
                <li>Organized cultural events and celebrations</li>
                <li>Managed club activities and member engagement</li>
                <li>Fostered community building and cultural awareness</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="certifications-section" ref={certificationsRef}>
        <div className="section-header">
          <h2 className="gradient-text">Honors & Certifications</h2>
          <p className="section-subtitle">My achievements and qualifications</p>
        </div>
        <div className="certifications-grid">
          <div className="certification-item">
            <div className="certification-icon">
              <i className="fas fa-award"></i>
            </div>
            <div className="certification-content">
              <h3>Academic Honors</h3>
              <ul>
                <li>Dean's List (Fall 2023)</li>
                <li>Dean's List (Spring 2023)</li>
                <li>Dean's List (Fall 2022)</li>
                <li>Dean's List (Spring 2022)</li>
              </ul>
            </div>
          </div>
          <div className="certification-item">
            <div className="certification-icon">
              <i className="fas fa-certificate"></i>
            </div>
            <div className="certification-content">
              <h3>Professional Certifications</h3>
              <ul>
                <li>Google Data Analytics Professional Certificate</li>
                <li>IBM Data Science Professional Certificate</li>
                <li>Microsoft Power BI Data Analyst Associate</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="hobbies-section">
        <div className="section-header">
          <h2>Hobbies & Interests</h2>
          <p>Beyond coding and technology</p>
        </div>
        <div className="hobbies-grid">
          <div className="hobby-item">
            <i className="fas fa-code"></i>
            <h3>Coding</h3>
            <p>Building innovative software solutions</p>
          </div>
          <div className="hobby-item">
            <i className="fas fa-music"></i>
            <h3>Music Production</h3>
            <p>Creating beats and sharing on <a href="https://www.youtube.com/@MehrBeatss" target="_blank" rel="noopener noreferrer">YouTube</a></p>
          </div>
          <div className="hobby-item">
            <i className="fas fa-book"></i>
            <h3>Reading</h3>
            <p>Exploring new technologies and ideas</p>
          </div>
          <div className="hobby-item">
            <i className="fas fa-dumbbell"></i>
            <h3>Fitness</h3>
            <p>Staying active and healthy</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
