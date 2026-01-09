import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Globe, Zap, Shield } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';
import AISection from '../components/AISection';
import { useTheme } from '../contexts/ThemeContext';

const Home = () => {
  const { isDark } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16"
    >
      {/* Hero Section */}
      <AnimatedBackground className="min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 border transition-all duration-300 ${
                isDark 
                  ? 'bg-blue-500/10 border-blue-400/20 text-blue-400' 
                  : 'bg-blue-50 border-blue-200 text-blue-700'
              }`}>
                <Zap className="w-4 h-4 mr-2" />
                Next-Generation Technology Solutions
              </span>
              
              <h1 className={`text-5xl lg:text-7xl font-bold mb-6 leading-tight transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                Engineering Intelligent
                <span className={`block bg-gradient-to-r bg-clip-text text-transparent ${
                  isDark 
                    ? 'from-blue-400 via-cyan-400 to-blue-500' 
                    : 'from-blue-600 via-blue-700 to-blue-800'
                }`}>
                  Digital Systems
                </span>
                for the Future
              </h1>
              
              <p className={`text-xl max-w-3xl mx-auto leading-relaxed transition-colors duration-300 ${
                isDark ? 'text-gray-300' : 'text-slate-600'
              }`}>
                We transform enterprises through cutting-edge AI solutions, cloud infrastructure, and intelligent automation. 
                Building tomorrow's technology today with precision, scalability, and innovation at the core.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <Link
                to="/contact"
                className={`group relative inline-flex items-center px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                  isDark 
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white' 
                    : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl'
                }`}
              >
                <span>Start Your Digital Transformation</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <div className={`absolute inset-0 rounded-lg blur opacity-30 group-hover:opacity-50 -z-10 ${
                  isDark 
                    ? 'bg-gradient-to-r from-blue-400 to-cyan-400' 
                    : 'bg-gradient-to-r from-blue-500 to-blue-600'
                }`} />
              </Link>
              
              <Link
                to="/ai-solutions"
                className={`inline-flex items-center px-8 py-4 border-2 rounded-lg font-semibold transition-all duration-300 ${
                  isDark 
                    ? 'border-blue-400/50 text-blue-400 hover:border-blue-400 hover:bg-blue-400/10' 
                    : 'border-blue-600/50 text-blue-600 hover:border-blue-600 hover:bg-blue-50 shadow-md hover:shadow-lg'
                }`}
              >
                Explore AI Solutions
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {[
                { number: "500+", label: "Projects Delivered" },
                { number: "150+", label: "Enterprise Clients" },
                { number: "99.9%", label: "System Uptime" },
                { number: "24/7", label: "AI-Powered Support" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`text-3xl lg:text-4xl font-bold bg-gradient-to-r bg-clip-text text-transparent ${
                    isDark 
                      ? 'from-blue-400 to-cyan-400' 
                      : 'from-blue-600 to-blue-700'
                  }`}>
                    {stat.number}
                  </div>
                  <div className={`text-sm mt-1 transition-colors duration-300 ${
                    isDark ? 'text-gray-400' : 'text-slate-500'
                  }`}>{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </AnimatedBackground>

      {/* Core Capabilities */}
      <section className={`py-20 transition-all duration-300 ${
        isDark ? 'bg-slate-900/50' : 'bg-gray-50/50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl lg:text-5xl font-bold mb-6 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Core Technology Capabilities
            </h2>
            <p className={`text-xl max-w-3xl mx-auto transition-colors duration-300 ${
              isDark ? 'text-gray-400' : 'text-slate-600'
            }`}>
              Enterprise-grade solutions powered by advanced AI, cloud infrastructure, and intelligent automation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {[
              {
                icon: Cpu,
                title: "AI & Machine Learning",
                description: "Custom AI models, natural language processing, and intelligent automation systems.",
                color: isDark ? "from-blue-500 to-cyan-500" : "from-blue-600 to-blue-700"
              },
              {
                icon: Globe,
                title: "Cloud Infrastructure",
                description: "Scalable cloud architecture, DevOps automation, and enterprise-grade security.",
                color: isDark ? "from-cyan-500 to-blue-500" : "from-blue-700 to-blue-800"
              },
              {
                icon: Zap,
                title: "Real-time Processing",
                description: "High-performance data processing, streaming analytics, and instant decision systems.",
                color: isDark ? "from-blue-600 to-purple-500" : "from-blue-800 to-indigo-700"
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Advanced cybersecurity, compliance frameworks, and data protection protocols.",
                color: isDark ? "from-purple-500 to-blue-600" : "from-indigo-700 to-blue-800"
              },
            ].map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`group relative backdrop-blur-sm border rounded-xl p-6 transition-all duration-300 ${
                  isDark 
                    ? 'bg-slate-800/50 border-slate-700/50 hover:border-blue-400/50' 
                    : 'bg-white/70 border-slate-200/50 hover:border-blue-300/50 shadow-lg hover:shadow-xl'
                }`}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${capability.color} rounded-lg mb-4 opacity-80 group-hover:opacity-100 transition-opacity`}>
                  <capability.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>{capability.title}</h3>
                <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                  isDark ? 'text-gray-400' : 'text-slate-600'
                }`}>{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Section */}
      <AISection />

      {/* CTA Section */}
      <section className={`py-20 transition-all duration-300 ${
        isDark 
          ? 'bg-gradient-to-r from-slate-900 via-blue-900/20 to-slate-900' 
          : 'bg-gradient-to-r from-white via-blue-50/30 to-gray-50'
      }`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className={`text-4xl lg:text-5xl font-bold mb-6 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Ready to Build the Future?
            </h2>
            <p className={`text-xl mb-8 leading-relaxed transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-slate-600'
            }`}>
              Transform your business with intelligent systems designed for tomorrow's challenges. 
              Let's create something extraordinary together.
            </p>
            <Link
              to="/contact"
              className={`inline-flex items-center px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 group ${
                isDark 
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white' 
                  : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl'
              }`}
            >
              <span>Start Your Project</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;