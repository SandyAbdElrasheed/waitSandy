import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Detect system theme and use it as the initial theme
  const getSystemTheme = () => {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDarkScheme ? 'dark' : 'light';
  };

  const [theme, setTheme] = useState(getSystemTheme); // Set the initial theme based on the system

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // This function toggles between light and dark theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Automatically update the theme if the system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e) => {
      setTheme(e.matches ? 'dark' : 'light'); // Update theme when system theme changes
    };

    mediaQuery.addEventListener('change', handleChange); // Listen for system theme changes

    // Clean up the event listener on component unmount
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
