import React from 'react';
import '../Styles/Projects.css';
import Particles from '../Components/Particles';

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and CSS animations. Features include smooth transitions, interactive elements, and a clean design.",
      image: "https://via.placeholder.com/400x300",
      technologies: ["React", "CSS", "JavaScript", "Responsive Design"],
      github: "https://github.com/yourusername/portfolio",
      live: "https://yourportfolio.com"
    },
    {
      title: "Music Production Platform",
      description: "A web application for music producers to share and collaborate on beats. Includes features for audio upload, playback, and social interaction.",
      image: "https://via.placeholder.com/400x300",
      technologies: ["React", "Node.js", "MongoDB", "Web Audio API"],
      github: "https://github.com/yourusername/music-platform",
      live: "https://musicplatform.com"
    },
    {
      title: "Data Visualization Dashboard",
      description: "An interactive dashboard for visualizing complex data sets. Features include real-time updates, multiple chart types, and customizable views.",
      image: "https://via.placeholder.com/400x300",
      technologies: ["React", "D3.js", "Python", "Data Analysis"],
      github: "https://github.com/yourusername/dashboard",
      live: "https://dashboard.com"
    }
  ];

  return (
    <div className="projects-page">
      <Particles />
      <div className="projects-hero">
        <div className="hero-content">
          <h1>My Projects</h1>
          <p className="hero-subtitle">A collection of my work and creative endeavors</p>
        </div>
      </div>

      <div className="projects-section">
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-item">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-content">
                <h2 className="project-title">{project.title}</h2>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <i className="fab fa-github"></i> GitHub
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
