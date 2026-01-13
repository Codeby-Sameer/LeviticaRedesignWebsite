import { motion } from 'framer-motion';


import { useTheme } from '../contexts/ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className={`relative p-2 rounded-lg transition-all duration-300 ${
        isDark 
          ? 'bg-slate-800 hover:bg-slate-700 text-yellow-400' 
          : 'bg-white hover:bg-gray-50 text-blue-600 shadow-md'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? (
          <FaSun className="w-5 h-5" />
        ) : (
          <FaMoon className="w-5 h-5" />
        )}
      </motion.div>
      
      {/* Glow effect */}
      <div className={`absolute inset-0 rounded-lg blur-lg opacity-30 transition-all duration-300 ${
        isDark ? 'bg-yellow-400' : 'bg-blue-600'
      }`} />
    </motion.button>
  );
};

export default ThemeToggle;