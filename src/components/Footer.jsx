import { motion } from 'framer-motion';
import { Brain, Mail, MapPin, Phone, Linkedin, Twitter, Github } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Footer = () => {
  const { isDark } = useTheme();

  return (
    <footer className={`mt-20 border-t transition-all duration-300 ${
      isDark 
        ? 'bg-slate-900/95 border-slate-700/50' 
        : 'bg-white/95 border-slate-200/50 shadow-lg'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Brain className={`w-8 h-8 ${
                isDark ? 'text-blue-400' : 'text-blue-600'
              }`} />
              <span className={`text-xl font-bold bg-gradient-to-r bg-clip-text text-transparent ${
                isDark 
                  ? 'from-blue-400 to-cyan-300' 
                  : 'from-blue-600 to-blue-800'
              }`}>
                Levitica Technologies
              </span>
            </div>
            <p className={`text-sm leading-relaxed ${
              isDark ? 'text-gray-400' : 'text-slate-600'
            }`}>
              Engineering intelligent digital systems for the future. We transform businesses through AI-driven innovation and cutting-edge technology solutions.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className={`transition-colors ${
                  isDark 
                    ? 'text-gray-400 hover:text-blue-400' 
                    : 'text-slate-500 hover:text-blue-600'
                }`}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className={`transition-colors ${
                  isDark 
                    ? 'text-gray-400 hover:text-blue-400' 
                    : 'text-slate-500 hover:text-blue-600'
                }`}
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className={`transition-colors ${
                  isDark 
                    ? 'text-gray-400 hover:text-blue-400' 
                    : 'text-slate-500 hover:text-blue-600'
                }`}
              >
                <Github className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className={`font-semibold text-lg ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>Services</h3>
            <ul className={`space-y-2 text-sm ${
              isDark ? 'text-gray-400' : 'text-slate-600'
            }`}>
              <li><a href="#" className={`transition-colors ${
                isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'
              }`}>Custom Software Engineering</a></li>
              <li><a href="#" className={`transition-colors ${
                isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'
              }`}>Web & Mobile Development</a></li>
              <li><a href="#" className={`transition-colors ${
                isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'
              }`}>Cloud & DevOps</a></li>
              <li><a href="#" className={`transition-colors ${
                isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'
              }`}>AI Solutions</a></li>
              <li><a href="#" className={`transition-colors ${
                isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'
              }`}>Digital Transformation</a></li>
            </ul>
          </div>

          {/* Technologies */}
          <div className="space-y-4">
            <h3 className={`font-semibold text-lg ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>Technologies</h3>
            <ul className={`space-y-2 text-sm ${
              isDark ? 'text-gray-400' : 'text-slate-600'
            }`}>
              <li><a href="#" className={`transition-colors ${
                isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'
              }`}>React & Node.js</a></li>
              <li><a href="#" className={`transition-colors ${
                isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'
              }`}>AWS & Azure</a></li>
              <li><a href="#" className={`transition-colors ${
                isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'
              }`}>AI & Machine Learning</a></li>
              <li><a href="#" className={`transition-colors ${
                isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'
              }`}>Database Solutions</a></li>
              <li><a href="#" className={`transition-colors ${
                isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'
              }`}>DevOps Automation</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className={`font-semibold text-lg ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>Contact</h3>
            <div className={`space-y-3 text-sm ${
              isDark ? 'text-gray-400' : 'text-slate-600'
            }`}>
              <div className="flex items-center space-x-3">
                <Mail className={`w-4 h-4 ${
                  isDark ? 'text-blue-400' : 'text-blue-600'
                }`} />
                <span>contact@leviticatech.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className={`w-4 h-4 ${
                  isDark ? 'text-blue-400' : 'text-blue-600'
                }`} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className={`w-4 h-4 mt-0.5 ${
                  isDark ? 'text-blue-400' : 'text-blue-600'
                }`} />
                <span>Silicon Valley, CA<br />United States</span>
              </div>
            </div>
          </div>
        </div>

        <div className={`border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center ${
          isDark ? 'border-slate-700/50' : 'border-slate-200/50'
        }`}>
          <p className={`text-sm ${
            isDark ? 'text-gray-400' : 'text-slate-600'
          }`}>
            © 2026 Levitica Technologies. All rights reserved.
          </p>
          <div className={`flex space-x-6 mt-4 md:mt-0 text-sm ${
            isDark ? 'text-gray-400' : 'text-slate-600'
          }`}>
            <a href="#" className={`transition-colors ${
              isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'
            }`}>Privacy Policy</a>
            <a href="#" className={`transition-colors ${
              isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'
            }`}>Terms of Service</a>
            <a href="#" className={`transition-colors ${
              isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'
            }`}>Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;