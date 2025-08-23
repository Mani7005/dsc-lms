// useDarkMode.js
import { useState, useEffect } from 'react';

export const useDarkMode = () => {
  // Initialize with your preferred default (true for dark mode)
  const [isDark, setIsDark] = useState(true);

  // Apply dark class to document root whenever isDark changes
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = 'rgb(17, 24, 39)'; // gray-900
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = 'white';
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return {
    isDark,
    toggleTheme,
    setIsDark
  };
};