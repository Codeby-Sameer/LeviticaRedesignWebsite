import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import AnimatedBackground from '../components/AnimatedBackground';
import { useTheme } from '../contexts/ThemeContext';
import { servicesData } from '../data/Servicedata';
import { businessServicesData } from '../data/Servicedata';
import { FaArrowRight, FaBolt, FaBriefcase, FaBuilding, FaClock, FaCode, FaCrosshairs, FaLaptopCode, FaRegCalendarDays, FaStar, FaUsers } from 'react-icons/fa6';
import { FaCheckCircle, FaCheckSquare, FaExternalLinkAlt, FaShieldAlt } from 'react-icons/fa';
import { PiTargetBold } from 'react-icons/pi';

// Service data moved to separate file for reusability

const Services = () => {
  const { isDark } = useTheme();
  const navigate = useNavigate();
  // console.log(servicesData);
  console.log(businessServicesData);

  const handleServiceClick = (serviceId) => {
    navigate(`/services/${serviceId}`);
  };



  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="md:pt-32 pt-20 overflow-x-hidden"
    >
     {/* Hero Section */}
<div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
  {/* Background Image with Overlay */}
  <div className="absolute inset-0 z-0">
    {/* Background Image */}
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
        opacity: isDark ? 1 : 2,
      }}
    />
    
    {/* Dark/Light Overlay */}
    <div className={`absolute inset-0 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900/70 via-gray-900/40 to-gray-900/70' 
        : 'bg-gradient-to-br from-black/50 via-black/50 to-black/50'
    }`} />
    
    {/* Subtle Pattern */}
    <div className={`absolute inset-0 ${
      isDark 
        ? 'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-gray-900/30' 
        : 'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-blue-50/20'
    }`} />
  </div>

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 md:pt-5 pt-16">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center"
    >
      <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 border backdrop-blur-sm transition-all duration-300 ${
        isDark 
          ? 'bg-blue-500/10 border-blue-400/30 text-blue-400 hover:bg-blue-500/20 hover:border-blue-400/40' 
          : 'bg-white/80 border-blue-200/80 text-blue-700 hover:bg-white hover:border-blue-300 shadow-sm'
      }`}>
        <FaCrosshairs className="w-4 h-4 mr-2" />
        End to End Solutions
      </span>
      
      <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 transition-colors duration-300 ${
        isDark ? 'text-white' : 'text-white'
      }`}>
        Technology & Business Services
        <span className={`block bg-gradient-to-r bg-clip-text text-transparent mt-2 pb-2 ${
          isDark 
            ? 'from-blue-400 to-cyan-400' 
            : 'from-blue-600 to-blue-800'
        }`}>
          Building Your Digital Future
        </span>
      </h1>
      <p className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed transition-colors duration-300 backdrop-blur-sm ${
        isDark 
          ? 'text-gray-200' 
          : 'text-white'
      }`}>
        Comprehensive technology solutions designed to accelerate your digital transformation 
        and drive sustainable business growth through innovation.
      </p>
      
      {/* CTA Buttons */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
      >
        <button className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
          isDark
            ? 'bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-blue-500/25'
            : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-600/25'
        }`}>
          Explore Our Services
        </button>
        <button className={`px-8 py-3 rounded-lg font-semibold border transition-all duration-300 ${
          isDark
            ? 'border-gray-600 hover:border-blue-400 text-gray-200 hover:text-blue-400 bg-gray-800/30 hover:bg-gray-800/50'
            : 'border-blue-200 hover:border-blue-400 text-blue-700 hover:text-blue-800 bg-white/80 hover:bg-white'
        }`}>
          Schedule a Consultation
        </button>
      </motion.div>
    </motion.div>
  </div>
</div>

      {/* Technology Services Section */}
      <section className={`py-10 md:py-10 transition-all duration-300 ${
        isDark ? 'bg-slate-900/30' : 'bg-gray-50/50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 border transition-all duration-300 ${
              isDark 
                ? 'bg-blue-500/10 border-blue-400/20 text-blue-400' 
                : 'bg-blue-50 border-blue-200 text-blue-700'
            }`}>
              <FaCode className="w-4 h-4 mr-2" />
              Technology Services
            </div>
            
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Complete Technology Stack Solutions
            </h2>
            <p className={`text-lg md:text-xl max-w-3xl mx-auto transition-colors duration-300 ${
              isDark ? 'text-gray-400' : 'text-slate-600'
            }`}>
              From conception to deployment, we provide end to end services that transform your business vision into reality
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {servicesData.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                onClick={() => handleServiceClick(service.id)}
                className={`backdrop-blur-sm border rounded-xl p-6 transition-all duration-300 hover:scale-[1.02] cursor-pointer group ${
                  isDark 
                    ? 'bg-slate-800/50 border-slate-700/50 hover:border-blue-400/50 hover:bg-slate-800/70 hover:shadow-glow' 
                    : 'bg-white/70 border-slate-200/50 hover:border-blue-300/50 hover:bg-white/90 shadow-lg hover:shadow-xl'
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${service.color(isDark)} rounded-lg opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <FaExternalLinkAlt className={`w-4 h-4 transition-colors duration-300 ${
                    isDark ? 'text-gray-500 group-hover:text-blue-400' : 'text-gray-400 group-hover:text-blue-600'
                  }`} />
                </div>
                
                <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>{service.title}</h3>
                <p className={`text-sm leading-relaxed mb-4 transition-colors duration-300 ${
                  isDark ? 'text-gray-400' : 'text-slate-600'
                }`}>{service.shortDescription}</p>
                
                <div className="space-y-2 mb-4">
                  {service.features.slice(0, 3).map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <FaCheckCircle className={`w-3 h-3 mt-0.5 mr-2 flex-shrink-0 ${
                        isDark ? 'text-blue-400' : 'text-blue-600'
                      }`} />
                      <span className={`text-sm transition-colors duration-300 ${
                        isDark ? 'text-gray-300' : 'text-slate-700'
                      }`}>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className={`text-sm font-medium transition-colors duration-300 flex items-center ${
                  isDark ? 'text-blue-400' : 'text-blue-600'
                }`}>
                  Learn more
                  <FaArrowRight className="w-3 h-3 ml-1 mt-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business & Consulting Services Section */}
      <section className={`py-10 md:py-10 transition-all duration-300 ${
        isDark ? 'bg-slate-900/30' : 'bg-gray-50/50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 border transition-all duration-300 ${
              isDark 
                ? 'bg-purple-500/10 border-purple-400/20 text-purple-400' 
                : 'bg-purple-50 border-purple-200 text-purple-700'
            }`}>
              <FaBriefcase className="w-4 h-4 mr-2" />
              Business Solutions
            </div>
            
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Business & Consulting Services
            </h2>
            <p className={`text-lg md:text-xl max-w-3xl mx-auto transition-colors duration-300 ${
              isDark ? 'text-gray-400' : 'text-slate-600'
            }`}>
              Strategic solutions to help your business grow and succeed
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {businessServicesData.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                onClick={() => handleServiceClick(service.id)}
                className={`backdrop-blur-sm border rounded-xl p-6 transition-all duration-300 hover:scale-[1.02] cursor-pointer group ${
                  isDark 
                    ? 'bg-slate-800/50 border-slate-700/50 hover:border-purple-400/50 hover:bg-slate-800/70' 
                    : 'bg-white/70 border-slate-200/50 hover:border-purple-300/50 hover:bg-white/90 shadow-lg hover:shadow-xl'
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${service.color(isDark)} rounded-lg opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <FaExternalLinkAlt className={`w-4 h-4 transition-colors duration-300 ${
                    isDark ? 'text-gray-500 group-hover:text-purple-400' : 'text-gray-400 group-hover:text-purple-600'
                  }`} />
                </div>
                
                <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>{service.title}</h3>
                <p className={`text-sm leading-relaxed mb-4 transition-colors duration-300 ${
                  isDark ? 'text-gray-400' : 'text-slate-600'
                }`}>{service.description}</p>
                
                <div className="space-y-2 mb-4">
                  {service.features.slice(0, 3).map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <FaCheckCircle className={`w-3 h-3 mt-0.5 mr-2 flex-shrink-0 ${
                        isDark ? 'text-purple-400' : 'text-purple-600'
                      }`} />
                      <span className={`text-sm transition-colors duration-300 ${
                        isDark ? 'text-gray-300' : 'text-slate-700'
                      }`}>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className={`text-sm font-medium transition-colors duration-300 flex items-center ${
                  isDark ? 'text-purple-400' : 'text-purple-600'
                }`}>
                  Learn more
                  <FaArrowRight className="w-3 h-3 ml-1 mt-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Combined Services Stats */}
      <section className={`py-12 md:py-16 transition-all duration-300 ${
        isDark ? 'bg-slate-900/50' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { value: "200+", label: "Business Clients", icon: FaBuilding , color: "from-purple-600 to-pink-600" },
              { value: "500+", label: "Tech Projects", icon: FaLaptopCode, color: "from-blue-600 to-cyan-600" },
              { value: "98%", label: "Client Satisfaction", icon: FaStar, color: "from-green-600 to-emerald-600" },
              { value: "50+", label: "Industry Experts", icon: FaUsers, color: "from-orange-600 to-red-600" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`text-center p-6 rounded-xl backdrop-blur-sm border ${
                  isDark 
                    ? 'bg-slate-800/30 border-slate-700/50' 
                    : 'bg-white/50 border-slate-200/50 shadow-sm'
                }`}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${item.color} rounded-full mb-4`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r bg-clip-text text-transparent ${
                  isDark ? item.color : item.color.replace('600', '500')
                }`}>
                  {item.value}
                </div>
                <div className={`text-sm font-medium transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-slate-700'
                }`}>{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={`py-10 md:py-10 transition-all duration-300 ${
        isDark ? 'bg-slate-900/50' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Our Development Process
            </h2>
            <p className={`text-lg md:text-xl max-w-3xl mx-auto transition-colors duration-300 ${
              isDark ? 'text-gray-400' : 'text-slate-600'
            }`}>
              Proven methodology that ensures delivery excellence and client success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                step: "01",
                icon: PiTargetBold,
                title: "Discovery & Strategy",
                description: "Deep analysis of requirements, stakeholder interviews, and strategic planning.",
                color: isDark ? "from-blue-500 to-cyan-500" : "from-blue-600 to-blue-700"
              },
              {
                step: "02", 
                icon: FaCode,
                title: "Design & Architecture",
                description: "System design, UI/UX planning, and technical architecture documentation.",
                color: isDark ? "from-cyan-500 to-blue-500" : "from-blue-700 to-blue-800"
              },
              {
                step: "03",
                icon: FaBolt,
                title: "Development & Integration",
                description: "Agile development with continuous integration and regular client feedback.",
                color: isDark ? "from-blue-600 to-purple-500" : "from-blue-800 to-indigo-700"
              },
              {
                step: "04",
                icon: FaCheckSquare,
                title: "Deployment & Support",
                description: "Production deployment, monitoring setup, and ongoing maintenance support.",
                color: isDark ? "from-purple-500 to-blue-600" : "from-indigo-700 to-blue-800"
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className={`backdrop-blur-sm border rounded-xl p-6 text-center transition-all duration-300 ${
                  isDark 
                    ? 'bg-slate-800/30 border-slate-700/50 hover:border-blue-400/50 hover:bg-slate-800/50' 
                    : 'bg-white/70 border-slate-200/50 hover:border-blue-300/50 hover:bg-white/90 shadow-lg hover:shadow-xl'
                }`}
              >
                <div className="relative">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${process.color} rounded-full text-white font-bold text-lg mb-4`}>
                    <process.icon className={`w-5 h-5 ${
                      isDark ? 'text-white-400' : 'text-white-600'
                    }`} />
                  </div>
                  {/* <div className={`absolute -top-2 -right-2 w-10 h-10 rounded-full flex items-center justify-center ${
                    isDark ? 'bg-slate-800' : 'bg-white'
                  } border ${
                    isDark ? 'border-slate-700' : 'border-slate-200'
                  }`}>
                    <process.icon className={`w-5 h-5 ${
                      isDark ? 'text-blue-400' : 'text-blue-600'
                    }`} />
                  </div> */}
                </div>
                <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>{process.title}</h3>
                <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                  isDark ? 'text-gray-400' : 'text-slate-600'
                }`}>{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-10 md:py-10 transition-all duration-300 ${
        isDark 
          ? 'bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900' 
          : 'bg-gradient-to-br from-white via-blue-50/50 to-gray-50'
      }`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Decorative Elements */}
            <div className={`absolute -top-10 -left-10 w-20 h-20 rounded-full blur-xl opacity-20 ${
              isDark ? 'bg-blue-500' : 'bg-blue-400'
            }`} />
            <div className={`absolute -bottom-10 -right-10 w-32 h-32 rounded-full blur-xl opacity-20 ${
              isDark ? 'bg-cyan-500' : 'bg-blue-300'
            }`} />
            
            <div className="relative z-10">
              <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                Ready to Transform Your Business?
              </h2>
              <p className={`text-lg md:text-xl mb-8 leading-relaxed transition-colors duration-300 ${
                isDark ? 'text-gray-300' : 'text-slate-600'
              }`}>
                Let's discuss how our technology and business solutions can accelerate your growth and competitive advantage.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className={`group relative inline-flex items-center px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                    isDark 
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-lg hover:shadow-blue-500/25' 
                      : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl'
                  }`}
                >
                  <FaRegCalendarDays className="w-5 h-5 mr-2" />
                  <span>Schedule a Consultation</span>
                  <FaArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <div className={`absolute inset-0 rounded-lg blur opacity-30 group-hover:opacity-50 -z-10 ${
                    isDark 
                      ? 'bg-gradient-to-r from-blue-400 to-cyan-400' 
                      : 'bg-gradient-to-r from-blue-500 to-blue-600'
                  }`} />
                </Link>
                
                <Link
                  to="/contact"
                  className={`inline-flex items-center px-8 py-4 border-2 rounded-lg font-semibold transition-all duration-300 ${
                    isDark 
                      ? 'border-cyan-400/50 text-cyan-400 hover:border-cyan-400 hover:bg-cyan-400/10 hover:shadow-glow' 
                      : 'border-blue-600/50 text-blue-600 hover:border-blue-600 hover:bg-blue-50 shadow-md hover:shadow-lg'
                  }`}
                >
                  Get a Free Quote
                </Link>
              </div>
              
              <p className={`mt-8 text-sm transition-colors duration-300 ${
                isDark ? 'text-gray-400' : 'text-slate-500'
              }`}>
                Response within 24 hours • No obligation consultation
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className={`py-12 md:py-16 border-t transition-all duration-300 ${
        isDark ? 'border-slate-800' : 'border-slate-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "Agile", label: "Development Methodology", icon: FaBolt },
              { value: "99%", label: "Client Satisfaction", icon: FaStar },
              { value: "48hrs", label: "Average Response Time", icon: FaClock },
              { value: "24/7", label: "Production Support", icon: FaShieldAlt },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r ${item.color} rounded-full text-white font-bold text-lg mb-4`}>
                    <item.icon className={`w-7 h-7 text-purple-700 `} />
                </div>
                <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r bg-clip-text text-transparent ${
                  isDark 
                    ? 'from-blue-400 to-cyan-400' 
                    : 'from-blue-600 to-blue-700'
                }`}>
                  {item.value}
                </div>
                <div className={`text-sm transition-colors duration-300 ${
                  isDark ? 'text-gray-400' : 'text-slate-500'
                }`}>{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;