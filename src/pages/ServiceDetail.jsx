import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { servicesData } from '../data/Servicedata';
import { useTheme } from '../contexts/ThemeContext';
import AnimatedBackground from '../components/AnimatedBackground';
import { businessServicesData } from '../data/Servicedata';
import { FaArrowLeft, FaBolt, FaCalendarDays, FaCode, FaCrosshairs, FaFileSignature, FaRegMessage } from 'react-icons/fa6';
import { FaChartBar, FaCheckCircle, FaExternalLinkAlt, FaExternalLinkSquareAlt, FaRegCheckCircle } from 'react-icons/fa';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const { isDark } = useTheme();
  const [activeTab, setActiveTab] = useState('overview');

  const allServices = [...servicesData, ...businessServicesData];
  const service = allServices.find(s => s.id === serviceId);
  
  // Get single service image from service data
  const serviceImage = service?.image || 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';

  if (!service) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Service not found</h1>
          <Link to="/services" className="text-blue-600 hover:underline">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: FaCrosshairs },
    { id: 'features', label: 'Features', icon: FaRegCheckCircle },
    { id: 'benefits', label: 'Benefits', icon: FaBolt },
    // { id: 'case-studies', label: 'Case Studies', icon: BarChart },
    { id: 'technologies', label: 'Technologies', icon: FaCode }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="md:pt-24 pt-20"
    >
      {/* Hero Section with Image on Right */}
      <AnimatedBackground className="min-h-[60vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
            {/* Content - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-1/2"
            >
              <Link
                to="/services"
                className={`group inline-flex items-center text-sm font-medium mb-8 transition-all duration-300 ${
                  isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
                }`}
              >
                <FaArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              </Link>

              <div className="flex items-center gap-4 mb-6">
                
                <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  {service.title}
                </h1>
              </div>

              <p className={`text-lg sm:text-xl leading-relaxed mb-6 transition-colors duration-300 ${
                isDark ? 'text-gray-300' : 'text-slate-600'
              }`}>
                {service.fullDescription}
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/contact"
                  className={`group inline-flex items-center justify-center px-5 sm:px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    isDark 
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-lg hover:shadow-blue-500/25' 
                      : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl'
                  }`}
                >
                  <FaCalendarDays className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  <span>Schedule a Call</span>
                  <FaExternalLinkSquareAlt className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>

                <button className={`inline-flex items-center justify-center px-5 sm:px-6 py-3 border-2 rounded-lg font-semibold transition-all duration-300 ${
                  isDark 
                    ? 'border-cyan-400/50 text-cyan-400 hover:border-cyan-400 hover:bg-cyan-400/10' 
                    : 'border-blue-600/50 text-blue-600 hover:border-blue-600 hover:bg-blue-50'
                }`}>
                  <FaFileSignature className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  <span>Download Brochure</span>
                </button>
              </div>
            </motion.div>

            {/* Image - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:w-1/2"
            >
              <div className={`rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border ${
                isDark ? 'border-slate-700/50' : 'border-slate-200'
              }`}>
                <img 
                  src={serviceImage}
                  alt={service.title}
                  className="w-full h-64 sm:h-80 md:h-80 lg:h-[400px] object-cover"
                />
                <div className={`p-4 sm:p-6 ${isDark ? 'bg-slate-800/50' : 'bg-white/50'}`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className={`font-bold text-lg sm:text-xl ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}>
                        {service.title}
                      </h3>
                      <p className={`text-sm sm:text-base ${
                        isDark ? 'text-gray-400' : 'text-slate-600'
                      }`}>
                        Professional {service.title.toLowerCase()} services
                      </p>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      isDark ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-700'
                    }`}>
                      Featured
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedBackground>

      {/* Tabs Navigation */}
      <div className={`sticky top-16 z-40 backdrop-blur-md border-b ${
        isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white/80 border-slate-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto hide-scrollbar">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-4 sm:px-6 py-3 sm:py-4 font-medium transition-all duration-300 whitespace-nowrap border-b-2 flex-shrink-0 ${
                    activeTab === tab.id
                      ? isDark
                        ? 'border-blue-400 text-blue-400'
                        : 'border-blue-600 text-blue-600'
                      : isDark
                        ? 'border-transparent text-gray-400 hover:text-gray-300'
                        : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Icon className="w-4 h-4 sm:w-4 sm:h-4 mr-2 flex-shrink-0" />
                  <span className="text-sm sm:text-base">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tab Content - Only one image used in overview */}
      <div className={`py-8 sm:py-12 md:py-8 transition-all duration-300 ${
        isDark ? 'bg-slate-900/30' : 'bg-gray-50/50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8 sm:space-y-12"
            >
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className={`text-2xl sm:text-3xl font-bold transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    Detailed Description
                  </h3>
                  <p className={`leading-relaxed text-base sm:text-lg transition-colors duration-300 ${
                    isDark ? 'text-gray-300' : 'text-slate-600'
                  }`}>
                    {service.detailedDescription || service.fullDescription}
                  </p>
                  <div className="space-y-4">
                    <h4 className={`text-xl font-semibold ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                      Key Highlights
                    </h4>
                    <ul className={`space-y-3 ${
                      isDark ? 'text-gray-300' : 'text-slate-600'
                    }`}>
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <FaCheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-3 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div>
                  <h3 className={`text-2xl sm:text-3xl font-bold mb-6 transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    Our Process
                  </h3>
                  <div className="space-y-4">
                    {(service.process || ['Consultation', 'Planning', 'Development', 'Testing', 'Deployment']).map((step, index) => (
                      <div key={index} className="flex items-center p-4 rounded-lg border ${
                        isDark ? 'bg-slate-800/30 border-slate-700' : 'bg-white/50 border-slate-200'
                      }">
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-4 ${
                          isDark ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600'
                        }`}>
                          {index + 1}
                        </div>
                        <span className={`font-medium ${
                          isDark ? 'text-gray-300' : 'text-slate-700'
                        }`}>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Features Tab */}
          {activeTab === 'features' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8 sm:space-y-12"
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-4 sm:p-6 rounded-lg border transition-all duration-300 hover:scale-[1.02] ${
                      isDark 
                        ? 'bg-slate-800/30 border-slate-700/50 hover:border-blue-400/50' 
                        : 'bg-white/50 border-slate-200/50 hover:border-blue-300/50 shadow-sm hover:shadow-md'
                    }`}
                  >
                    <div className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-r ${
                      service.color(isDark)
                    } mb-4`}>
                      <FaCheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h4 className={`font-semibold text-base sm:text-lg mb-2 transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                      {feature}
                    </h4>
                    <p className={`text-xs sm:text-sm transition-colors duration-300 ${
                      isDark ? 'text-gray-400' : 'text-slate-600'
                    }`}>
                      Comprehensive implementation with best practices and industry standards.
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Benefits Tab */}
          {activeTab === 'benefits' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8 sm:space-y-12"
            >
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className={`text-2xl sm:text-3xl font-bold mb-6 transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    Business Benefits
                  </h3>
                  <div className="space-y-4">
                    {service.benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`p-4 rounded-lg border ${
                          isDark ? 'bg-slate-800/30 border-slate-700' : 'bg-white/50 border-slate-200'
                        }`}
                      >
                        <div className="flex items-start">
                          <FaBolt className={`w-5 h-5 mr-3 mt-1 flex-shrink-0 ${
                            isDark ? 'text-yellow-400' : 'text-yellow-600'
                          }`} />
                          <span className={`transition-colors duration-300 ${
                            isDark ? 'text-gray-300' : 'text-slate-700'
                          }`}>{benefit}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className={`p-6 rounded-xl border ${
                    isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-blue-50 border-blue-200'
                  }`}>
                    <h4 className={`text-lg sm:text-xl font-bold mb-4 ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                      Key Outcomes
                    </h4>
                    <div className="space-y-4">
                      <div>
                        <div className={`text-sm font-medium mb-2 ${
                          isDark ? 'text-blue-400' : 'text-blue-600'
                        }`}>Efficiency Gain</div>
                        <div className={`h-2 sm:h-3 rounded-full overflow-hidden ${
                          isDark ? 'bg-slate-700' : 'bg-gray-200'
                        }`}>
                          <div className="h-full bg-gradient-to-r from-green-400 to-cyan-400 w-3/4"></div>
                        </div>
                      </div>
                      <div>
                        <div className={`text-sm font-medium mb-2 ${
                          isDark ? 'text-blue-400' : 'text-blue-600'
                        }`}>Cost Reduction</div>
                        <div className={`h-2 sm:h-3 rounded-full overflow-hidden ${
                          isDark ? 'bg-slate-700' : 'bg-gray-200'
                        }`}>
                          <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-400 w-2/3"></div>
                        </div>
                      </div>
                      <div>
                        <div className={`text-sm font-medium mb-2 ${
                          isDark ? 'text-blue-400' : 'text-blue-600'
                        }`}>ROI Timeframe</div>
                        <div className={`h-2 sm:h-3 rounded-full overflow-hidden ${
                          isDark ? 'bg-slate-700' : 'bg-gray-200'
                        }`}>
                          <div className="h-full bg-gradient-to-r from-blue-400 to-purple-400 w-4/5"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Case Studies Tab */}
          {activeTab === 'case-studies' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8 sm:space-y-12"
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.caseStudies?.map((study, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-6 rounded-xl border transition-all duration-300 hover:scale-[1.02] ${
                      isDark 
                        ? 'bg-slate-800/30 border-slate-700/50 hover:border-blue-400/50' 
                        : 'bg-white/50 border-slate-200/50 hover:border-blue-300/50 shadow-lg hover:shadow-xl'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                        isDark ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-700'
                      }`}>
                        Case Study
                      </div>
                      <FaChartBar className={`w-5 h-5 ${
                        isDark ? 'text-blue-400' : 'text-blue-600'
                      }`} />
                    </div>
                    <h4 className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                      {study.title}
                    </h4>
                    <p className={`mb-4 transition-colors duration-300 text-sm sm:text-base ${
                      isDark ? 'text-gray-400' : 'text-slate-600'
                    }`}>
                      {study.description}
                    </p>
                    <div className={`p-3 rounded-lg ${
                      isDark ? 'bg-green-900/30 text-green-400' : 'bg-green-50 text-green-700'
                    }`}>
                      <div className="font-semibold text-sm sm:text-base">Result:</div>
                      <div className="text-sm sm:text-base">{study.result}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Technologies Tab */}
          {activeTab === 'technologies' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8 sm:space-y-12"
            >
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className={`text-2xl sm:text-3xl font-bold mb-6 transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    Technology Stack
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {service.technologies?.map((tech, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 hover:scale-105 ${
                          isDark 
                            ? 'bg-slate-800 text-blue-400 border border-slate-700 hover:bg-slate-700' 
                            : 'bg-white text-blue-700 border border-slate-200 hover:bg-blue-50 shadow-sm hover:shadow'
                        }`}
                      >
                        {tech.name || tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className={`text-2xl sm:text-3xl font-bold mb-6 transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    Methodologies
                  </h3>
                  <div className="space-y-4">
                    {(service.methodologies || ['Agile', 'Scrum', 'DevOps', 'CI/CD']).map((method, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center"
                      >
                        <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full mr-3 ${
                          isDark ? 'bg-cyan-400' : 'bg-cyan-600'
                        }`} />
                        <span className={`transition-colors duration-300 text-base sm:text-lg ${
                          isDark ? 'text-gray-300' : 'text-slate-700'
                        }`}>{method}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <section className={`py-12 sm:py-16 md:py-10 transition-all duration-300 ${
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
            <div className="relative z-10">
              <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                Ready to Get Started with {service.title}?
              </h2>
              <p className={`text-base sm:text-lg md:text-xl mb-6 sm:mb-8 leading-relaxed transition-colors duration-300 ${
                isDark ? 'text-gray-300' : 'text-slate-600'
              }`}>
                Contact our experts for a free consultation and discover how we can help you achieve your goals.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link
                  to="/contact"
                  className={`group relative inline-flex items-center justify-center px-5 sm:px-6 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                    isDark 
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-lg hover:shadow-blue-500/25' 
                      : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl'
                  }`}
                >
                  <FaRegMessage className="w-4 h-4 sm:w-4 sm:h-4 mr-2 flex-shrink-0" />
                  <span>Get in Touch</span>
                  <FaExternalLinkAlt className="w-4 h-4 sm:w-4 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </Link>
                
                <Link
                  to="/portfolio"
                  className={`inline-flex items-center justify-center px-5 sm:px-6 py-3 sm:py-4 border-2 rounded-lg font-semibold transition-all duration-300 ${
                    isDark 
                      ? 'border-cyan-400/50 text-cyan-400 hover:border-cyan-400 hover:bg-cyan-400/10' 
                      : 'border-blue-600/50 text-blue-600 hover:border-blue-600 hover:bg-blue-50'
                  }`}
                >
                  View Similar Projects
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default ServiceDetail;