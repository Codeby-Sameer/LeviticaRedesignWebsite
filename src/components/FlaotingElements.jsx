// components/FloatingElements.jsx
import { motion } from 'framer-motion';
import { FaCog, FaCode, FaServer, FaDatabase } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

const FloatingElements = () => {
  const { isDark } = useTheme();

  const elements = [
    { Icon: FaCog, delay: 0, x: '10%', y: '20%' },
    { Icon: FaCode, delay: 1, x: '85%', y: '30%' },
    { Icon: FaServer, delay: 2, x: '15%', y: '70%' },
    { Icon: FaDatabase, delay: 3, x: '90%', y: '80%' },
  ];

  return (
    <>
      {elements.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className={`absolute text-4xl ${
            isDark ? 'text-blue-400/30' : 'text-blue-600/30'
          }`}
          style={{ left: x, top: y }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 3,
            delay: delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Icon />
        </motion.div>
      ))}
    </>
  );
};

export default FloatingElements;