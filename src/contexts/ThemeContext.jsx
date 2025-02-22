import { createContext, useState, useContext } from 'react';

// Create a Theme Context
const ThemeContext = createContext();

// Create a Theme Provider component
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark');  // Default dark theme
  
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook for using the Theme Context
export const useTheme = () => useContext(ThemeContext);