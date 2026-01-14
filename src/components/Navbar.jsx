// import { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { Menu, X, Brain, Cpu } from 'lucide-react';
// import { useTheme } from '../contexts/ThemeContext';
// import ThemeToggle from './ThemeToggle';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();
//   const { isDark } = useTheme();

//   const navItems = [
//     { name: 'Home', path: '/' },
//     { name: 'Services', path: '/services' },
//     { name: 'AI Solutions', path: '/ai-solutions' },
//     { name: 'Technologies', path: '/technologies' },
//     { name: 'About', path: '/about' },
//     { name: 'Careers', path: '/careers' },
//     { name: 'Contact', path: '/contact' },
//   ];

//   return (
//     <motion.nav
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       className={`fixed w-full top-0 z-50 backdrop-blur-lg border-b transition-all duration-300 ${
//         isDark 
//           ? 'bg-slate-900 border-slate-700/50' 
//           : 'bg-white border-slate-200/50 shadow-lg'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <Link to="/" className="flex items-center space-x-2 group">
//             <div className="relative">
//               <Brain className={`w-8 h-8 transition-colors ${
//                 isDark 
//                   ? 'text-blue-400 group-hover:text-blue-300' 
//                   : 'text-blue-600 group-hover:text-blue-500'
//               }`} />
//               <div className={`absolute inset-0 blur-lg scale-150 transition-all ${
//                 isDark 
//                   ? 'bg-blue-400/20 group-hover:bg-blue-300/30' 
//                   : 'bg-blue-600/20 group-hover:bg-blue-500/30'
//               }`} />
//             </div>
//             <span className={`text-xl font-bold bg-gradient-to-r bg-clip-text text-transparent ${
//               isDark 
//                 ? 'from-blue-400 to-cyan-300' 
//                 : 'from-blue-600 to-blue-800'
//             }`}>
//               Levitica Technologies
//             </span>
//           </Link>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-6">
//             {navItems.map((item) => (
//               <Link
//                 key={item.path}
//                 to={item.path}
//                 className={`relative px-3 py-2 text-sm font-medium transition-all duration-200 ${
//                   location.pathname === item.path
//                     ? isDark ? 'text-blue-400' : 'text-blue-600'
//                     : isDark ? 'text-gray-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'
//                 }`}
//               >
//                 {item.name}
//                 {location.pathname === item.path && (
//                   <motion.div
//                     layoutId="navbar-indicator"
//                     className={`absolute bottom-0 left-0 w-full h-0.5 ${
//                       isDark ? 'bg-blue-400' : 'bg-blue-600'
//                     }`}
//                   />
//                 )}
//               </Link>
//             ))}
            
//             <ThemeToggle />
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden flex items-center space-x-3">
//             <ThemeToggle />
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//               className={`p-2 rounded-lg transition-colors ${
//                 isDark 
//                   ? 'hover:bg-slate-800' 
//                   : 'hover:bg-gray-100'
//               }`}
//           >
//             {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             className={`md:hidden border-t ${
//               isDark ? 'border-slate-700' : 'border-slate-200'
//             }`}
//           >
//             <div className="py-4 space-y-2">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.path}
//                   to={item.path}
//                   onClick={() => setIsOpen(false)}
//                   className={`block px-4 py-2 text-sm font-medium transition-all duration-200 ${
//                     location.pathname === item.path
//                       ? isDark ? 'text-blue-400 bg-slate-800/50' : 'text-blue-600 bg-blue-50'
//                       : isDark ? 'text-gray-300 hover:text-white hover:bg-slate-800/30' : 'text-slate-600 hover:text-slate-900 hover:bg-gray-50'
//                   }`}
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </div>
//     </motion.nav>
//   );
// };

// export default Navbar;























import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import ThemeToggle from './ThemeToggle';
import {
  FaBars,
  FaTimes
} from 'react-icons/fa';
import DesktopTopBar from './DesktopTopBar';
import MobileTopBar from './MobileTopBar';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { isDark } = useTheme();

  // Logo paths
  const lightLogo = '/images/company-logo.png';
  const darkLogo = '/images/company-logo-dark.png';

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'AI Solutions', path: '/ai-solutions' },
    { name: 'Technologies', path: '/technologies' },
    { name: 'About', path: '/about' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed w-full top-0 z-50">

      <DesktopTopBar scrolled={scrolled} isDark={isDark} />
      <MobileTopBar scrolled={scrolled} isDark={isDark} />
      

      {/* Main Navigation */}
      <motion.nav
        // initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`w-full backdrop-blur-lg border-b transition-all duration-300 ${
          scrolled ? 'shadow-xl' : 'shadow-lg'
        } ${
          isDark 
            ? 'bg-slate-900/95 border-slate-700/50' 
            : 'bg-white/95 border-slate-200/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="relative">
                {/* Company Logo */}
                <img
                  src={isDark ? darkLogo : lightLogo}
                  alt="Levitica Technologies"
                  className="h-12 w-auto transition-all duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    const fallback = document.createElement('div');
                    fallback.className = `h-12 w-36 flex items-center justify-center rounded-lg ${
                      isDark ? 'bg-blue-900' : 'bg-blue-600'
                    }`;
                    fallback.innerHTML = `<span class="font-bold text-white">LEVITICA</span>`;
                    e.target.parentNode.appendChild(fallback);
                  }}
                />
                {/* Subtle glow effect */}
                {/* <div className={`absolute inset-0 blur-lg scale-150 transition-all opacity-0 group-hover:opacity-30 ${
                  isDark 
                    ? 'bg-blue-400' 
                    : 'bg-blue-600'
                }`} /> */}
              </div>
              {/* Company Name */}
              <span className={`md:text-xl text-[16px] font-bold bg-gradient-to-r bg-clip-text text-transparent transition-all duration-300 ${
                isDark 
                  ? 'from-blue-400 to-cyan-300 group-hover:from-blue-300 group-hover:to-cyan-200' 
                  : 'from-blue-600 to-blue-800 group-hover:from-blue-500 group-hover:to-blue-700'
              }`}>
                Levitica Technologies
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-200 ${
                    location.pathname === item.path
                      ? isDark ? 'text-blue-400' : 'text-blue-600'
                      : isDark ? 'text-gray-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className={`absolute bottom-0 left-0 w-full h-0.5 ${
                        isDark ? 'bg-blue-400' : 'bg-blue-600'
                      }`}
                    />
                  )}
                </Link>
              ))}
              
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-3">
              
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-lg transition-colors ${
                  isDark 
                    ? 'hover:bg-slate-800' 
                    : 'hover:bg-gray-100'
                }`}
                aria-label="Menu"
              >
                {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`md:hidden border-t ${
                isDark ? 'border-slate-700' : 'border-slate-200'
              }`}
            >
              <div className="py-4 space-y-2">
                <div className='flex relative items-center justify-end'>
                  <ThemeToggle />
                </div>
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-2 text-sm font-medium transition-all duration-200 ${
                      location.pathname === item.path
                        ? isDark ? 'text-blue-400 bg-slate-800/50' : 'text-blue-600 bg-blue-50'
                        : isDark ? 'text-gray-300 hover:text-white hover:bg-slate-800/30' : 'text-slate-600 hover:text-slate-900 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Spacer for fixed navbar - Adjust height based on scroll */}
      {/* <div className={`transition-all duration-300 ${
        scrolled ? 'h-24' : 'h-28'
      }`}></div> */}
    </header>
  );
};

export default Navbar;