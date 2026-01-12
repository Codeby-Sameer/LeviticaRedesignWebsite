// components/GlassCard.jsx
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const GlassCard = ({ children, className = "" }) => {
  const { isDark } = useTheme();
  
  return (
    <div className={`relative backdrop-blur-md border rounded-3xl overflow-hidden transition-all duration-300 ${className} ${
      isDark 
        ? 'bg-white/5 border-white/10 shadow-xl shadow-blue-500/5' 
        : 'bg-white/60 border-white/20 shadow-2xl shadow-blue-200/20'
    }`}>
      {children}
    </div>
  );
};

export default GlassCard;