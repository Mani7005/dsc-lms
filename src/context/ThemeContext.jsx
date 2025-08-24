// src/context/ThemeContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";

// Create the context
const ThemeContext = createContext(undefined);

// Custom hook
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

export function ThemeProvider({ children }) {
  // Initialize from localStorage OR system preference
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("theme");
        if (saved) return saved === "dark";
        // fallback → system preference
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
      } catch (error) {
        console.warn("Failed to read theme from localStorage:", error);
        return false;
      }
    }
    return false;
  });

  // Apply theme class to <html>
  useEffect(() => {
    if (typeof window !== "undefined") {
      const root = document.documentElement;
      if (isDarkMode) {
        root.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        root.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    }
  }, [isDarkMode]);

  // Sync with system theme changes (optional but nice!)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = (e) => {
        if (!localStorage.getItem("theme")) {
          setIsDarkMode(e.matches);
        }
      };
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, []);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
