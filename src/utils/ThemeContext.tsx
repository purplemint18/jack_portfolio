import { createContext, useState, useContext, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { ThemeColors } from '../types';
import { darkTheme, monochromeTheme } from './theme';

type ThemeType = 'dark' | 'monochrome';

interface ThemeContextType {
  theme: ThemeColors;
  themeType: ThemeType;
  setThemeType: (theme: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // Get initial theme from localStorage or default to 'dark'
  const [themeType, setThemeTypeState] = useState<ThemeType>(() => {
    const savedTheme = localStorage.getItem('themeType');
    // If saved theme was 'light' or invalid, convert to 'dark'
    if (savedTheme !== 'dark' && savedTheme !== 'monochrome') {
      return 'dark';
    }
    return savedTheme as ThemeType;
  });

  const getTheme = (): ThemeColors => {
    switch (themeType) {
      case 'monochrome':
        return monochromeTheme;
      default:
        return darkTheme;
    }
  };

  // Function to set theme and save to localStorage
  const setThemeType = (newTheme: ThemeType) => {
    setThemeTypeState(newTheme);
    localStorage.setItem('themeType', newTheme);
  };

  // Apply theme to document body when theme changes
  useEffect(() => {
    const theme = getTheme();
    document.body.style.backgroundColor = theme.background;
    document.body.style.color = theme.foreground;
    
    // Add a data attribute for theme-specific CSS if needed
    document.documentElement.setAttribute('data-theme', themeType);
  }, [themeType]);

  const value = {
    theme: getTheme(),
    themeType,
    setThemeType,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}; 