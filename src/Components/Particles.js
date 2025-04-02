import React, { useEffect, useRef } from 'react';
import '../Styles/Particles.css';

const Particles = ({ density = 100, colorScheme = 'theme' }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    
    // Get theme colors from CSS variables
    const getThemeColors = () => {
      const computedStyle = getComputedStyle(document.documentElement);
      const primaryColor = computedStyle.getPropertyValue('--primary-color').trim() || '#3a86ff';
      const secondaryColor = computedStyle.getPropertyValue('--secondary-color').trim() || '#8338ec';
      const accentColor = computedStyle.getPropertyValue('--accent-color').trim() || '#ff006e';
      
      return [
        primaryColor,
        secondaryColor,
        accentColor,
        // Add color variations
        lightenColor(primaryColor, 20),
        lightenColor(secondaryColor, 20),
        lightenColor(accentColor, 20)
      ];
    };
    
    // Helper function to lighten a color
    const lightenColor = (color, percent) => {
      const num = parseInt(color.replace('#', ''), 16),
        amt = Math.round(2.55 * percent),
        R = (num >> 16) + amt,
        G = (num >> 8 & 0x00FF) + amt,
        B = (num & 0x0000FF) + amt;
      return '#' + (
        0x1000000 + 
        (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 + 
        (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 + 
        (B < 255 ? (B < 1 ? 0 : B) : 255)
      ).toString(16).slice(1);
    };
    
    // Convert hex to rgba
    const hexToRgba = (hex, alpha = 0.5) => {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Get theme colors
    const themeColors = getThemeColors();

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.baseSize = this.size;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        
        // Use theme colors if specified, otherwise random colors
        if (colorScheme === 'theme') {
          const colorIndex = Math.floor(Math.random() * themeColors.length);
          this.color = hexToRgba(themeColors[colorIndex], 0.4);
        } else {
          this.color = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.4)`;
        }
        
        // Add pulse animation
        this.angle = Math.random() * 2 * Math.PI;
        this.angleSpeed = 0.01 + Math.random() * 0.02;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Animate size for subtle pulsing effect
        this.angle += this.angleSpeed;
        this.size = this.baseSize + Math.sin(this.angle) * 0.5;

        // Loop particles at edges
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create particles
    const createParticles = () => {
      particles = [];
      const particleCount = Math.min(density, 200); // Cap at 200 for performance
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    // Draw connections
    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          const maxDistance = 150;
          if (distance < maxDistance) {
            // Get gradient color based on theme
            let gradientColor;
            if (colorScheme === 'theme') {
              const primaryRgba = hexToRgba(themeColors[0], 0.2 * (1 - distance / maxDistance));
              gradientColor = primaryRgba;
            } else {
              gradientColor = `rgba(255, 255, 255, ${0.2 * (1 - distance / maxDistance)})`;
            }
            
            ctx.beginPath();
            ctx.strokeStyle = gradientColor;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      drawConnections();
      animationFrameId = requestAnimationFrame(animate);
    };

    createParticles();
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [density, colorScheme]);

  return <canvas ref={canvasRef} className="particles-canvas" />;
};

export default Particles; 