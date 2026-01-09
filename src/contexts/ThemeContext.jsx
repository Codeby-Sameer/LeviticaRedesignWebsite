import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  const theme = {
    isDark,
    toggleTheme,
    colors: {
      primary: isDark ? 'slate-900' : 'white',
      secondary: isDark ? 'slate-800' : 'gray-50',
      accent: isDark ? 'blue-400' : 'blue-600',
      text: {
        primary: isDark ? 'white' : 'slate-900',
        secondary: isDark ? 'gray-300' : 'slate-700',
        muted: isDark ? 'gray-400' : 'slate-500'
      },
      border: isDark ? 'slate-700' : 'slate-200',
      card: isDark ? 'slate-800/50' : 'white/80',
      cardBorder: isDark ? 'slate-700/50' : 'slate-200/50'
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className={isDark ? 'dark' : 'light'}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};