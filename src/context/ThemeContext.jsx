// src/context/ThemeContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the context
const ThemeContext = createContext(undefined);

// Custom hook to use the theme context
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

// Theme provider component
export function ThemeProvider({ children }) {
  // Initialize state from localStorage or default to light mode
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check if we're in the browser environment
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('theme');
        return saved === 'dark';
      } catch (error) {
        console.warn('Failed to read theme from localStorage:', error);
        return false;
      }
    }
    // Default to light mode for SSR
    return false;
  });

  // Apply theme changes to DOM
  useEffect(() => {
    // Only run in browser environment
    if (typeof window !== 'undefined') {
      const root = document.documentElement;
      
      if (isDarkMode) {
        root.classList.add('dark');
        try {
          localStorage.setItem('theme', 'dark');
        } catch (error) {
          console.warn('Failed to save theme to localStorage:', error);
        }
      } else {
        root.classList.remove('dark');
        try {
          localStorage.setItem('theme', 'light');
        } catch (error) {
          console.warn('Failed to save theme to localStorage:', error);
        }
      }
    }
  }, [isDarkMode]);

  // Toggle function
  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  const value = {
    isDarkMode,
    toggleTheme
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}