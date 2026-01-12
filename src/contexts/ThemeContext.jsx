// import { createContext, useContext, useState, useEffect } from 'react';

// const ThemeContext = createContext();

// export const useTheme = () => {
//   const context = useContext(ThemeContext);
//   if (!context) {
//     throw new Error('useTheme must be used within a ThemeProvider');
//   }
//   return context;
// };

// export const ThemeProvider = ({ children }) => {
//   const [isDark, setIsDark] = useState(true);

//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme) {
//       setIsDark(savedTheme === 'dark');
//     }
//   }, []);

//   const toggleTheme = () => {
//     const newTheme = !isDark;
//     setIsDark(newTheme);
//     localStorage.setItem('theme', newTheme ? 'dark' : 'light');
//   };

//   const theme = {
//     isDark,
//     toggleTheme,
//     colors: {
//       primary: isDark ? 'slate-900' : 'white',
//       secondary: isDark ? 'slate-800' : 'gray-50',
//       accent: isDark ? 'blue-400' : 'blue-600',
//       text: {
//         primary: isDark ? 'white' : 'slate-900',
//         secondary: isDark ? 'gray-300' : 'slate-700',
//         muted: isDark ? 'gray-400' : 'slate-500'
//       },
//       border: isDark ? 'slate-700' : 'slate-200',
//       card: isDark ? 'slate-800/50' : 'white/80',
//       cardBorder: isDark ? 'slate-700/50' : 'slate-200/50'
//     }
//   };

//   return (
//     <ThemeContext.Provider value={theme}>
//       <div className={isDark ? 'dark' : 'light'}>
//         {children}
//       </div>
//     </ThemeContext.Provider>
//   );
// };





































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
  const [isDark, setIsDark] = useState(() => {
    // Initialize from localStorage immediately to prevent flash
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      // Check system preference as fallback
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return prefersDark;
    }
    return true; // Default to dark if SSR
  });

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Apply theme to HTML element
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.style.backgroundColor = '#0f172a'; // slate-900
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.backgroundColor = '#ffffff'; // white
    }
    
    // Mark as loaded after a small delay to prevent flash
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 50);
    
    return () => clearTimeout(timer);
  }, [isDark]);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  const theme = {
    isDark,
    toggleTheme,
    isLoaded, // Add this to conditionally render
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
      {/* Remove wrapper div - apply class directly to html */}
      {children}
    </ThemeContext.Provider>
  );
};