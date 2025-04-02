import React, { useState, useEffect } from 'react';
import '../Styles/ThemeToggle.css';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check if user has a saved preference
    const savedTheme = localStorage.getItem('theme');
    // Check if user prefers dark mode in their OS settings
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    return savedTheme === 'dark' || (!savedTheme && prefersDark);
  });

  useEffect(() => {
    // Apply theme to the document
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="theme-toggle">
      <input
        type="checkbox"
        id="theme-toggle-checkbox"
        checked={isDarkMode}
        onChange={toggleTheme}
        className="theme-toggle-checkbox"
      />
      <label htmlFor="theme-toggle-checkbox" className="theme-toggle-label">
        <div className="theme-toggle-icons">
          <i className="fas fa-sun"></i>
          <i className="fas fa-moon"></i>
        </div>
        <div className="theme-toggle-switch"></div>
      </label>
    </div>
  );
};

export default ThemeToggle; 