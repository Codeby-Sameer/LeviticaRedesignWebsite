import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const AnimatedBackground = ({ children, className = "" }) => {
  const { isDark } = useTheme();
  const particles = Array.from({ length: 20 }, (_, i) => i);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Animated Background */}
      <div className={`absolute inset-0 transition-all duration-500 ${
        isDark 
          ? 'bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900' 
          : 'bg-gradient-to-br from-white via-blue-50/30 to-gray-50'
      }`}>
        {/* Floating Particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle}
            className={`absolute w-1 h-1 rounded-full ${
              isDark ? 'bg-blue-400/30' : 'bg-blue-600/40'
            }`}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}

        {/* Grid Pattern */}
        <div className={`absolute inset-0 bg-[size:50px_50px] ${
          isDark 
            ? 'bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)]'
            : 'bg-[linear-gradient(rgba(37,99,235,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.08)_1px,transparent_1px)]'
        }`} />
        
        {/* Gradient Orbs */}
        <motion.div
          className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl ${
            isDark ? 'bg-blue-500/10' : 'bg-blue-600/15'
          }`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: isDark ? [0.3, 0.5, 0.3] : [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className={`absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full blur-3xl ${
            isDark ? 'bg-cyan-500/10' : 'bg-blue-500/15'
          }`}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: isDark ? [0.5, 0.3, 0.5] : [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default AnimatedBackground;