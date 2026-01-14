// SolutionDetailPage.jsx
import { motion } from 'framer-motion';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { getSolutionById } from '../data/aiSolutionsData';
import { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight, FaBolt, FaClock, FaCode, FaIndianRupeeSign, FaRupeeSign, FaUsers } from 'react-icons/fa6';
import { PiTargetBold } from 'react-icons/pi';
import { FaChartBar, FaCheckCircle } from 'react-icons/fa';

const SolutionDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isDark } = useTheme();
  const [solution, setSolution] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(0);

  useEffect(() => {
    const foundSolution = getSolutionById(id);
    if (foundSolution) {
      setSolution(foundSolution);
    } else {
      navigate('/ai-solutions');
    }
    setLoading(false);
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`text-lg ${isDark ? 'text-white' : 'text-slate-900'}`}
        >
          Loading solution details...
        </motion.div>
      </div>
    );
  }

  if (!solution) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen flex items-center justify-center"
      >
        <div className={`text-center ${isDark ? 'text-white' : 'text-slate-900'}`}>
          <h2 className="text-2xl font-bold mb-4">Solution not found</h2>
          <Link to="/ai-solutions" className={`inline-flex items-center text-blue-500 hover:text-blue-600`}>
            <FaArrowLeft className="w-4 h-4 mr-2" />
            Back to AI Solutions
          </Link>
        </div>
      </motion.div>
    );
  }

  const Icon = solution.icon;

  // Fade-up animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 md:pt-24 min-h-screen"
    >
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={`relative py-10 md:py-10 ${isDark ? 'bg-gradient-to-br from-slate-900 to-slate-800' : 'bg-gradient-to-br from-gray-50 to-white'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
            <div className="lg:w-2/3">
              {/* Back Link */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Link 
                  to="/ai-solutions" 
                  className={`group inline-flex items-center text-sm font-medium mb-8 transition-all duration-300 ${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}
                >
                  <FaArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                  
                </Link>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}
              >
                {solution.title}
              </motion.h1>
              
              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className={`text-md md:text-lg leading-relaxed mb-10 max-w-3xl ${isDark ? 'text-gray-300' : 'text-slate-600'}`}
              >
                {solution.fullDescription}
              </motion.p>

              {/* Quick Stats */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8"
              >
                {[
                  { icon: FaClock, label: 'Timeline', value: solution.timeline },
                  { icon: FaUsers, label: 'Team Size', value: solution.team.size },
                  { icon: PiTargetBold, label: 'Success Rate', value: '95%+' },
                  { icon: FaIndianRupeeSign, label: 'Starting From', value: Object.values(solution.pricingModels)[0].split('(')[0] }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className={`p-5 rounded-xl backdrop-blur-sm border transition-all duration-300 ${isDark 
                        ? 'bg-slate-800/30 border-slate-700/50 hover:border-blue-500/50 hover:shadow-lg' 
                        : 'bg-white/70 border-slate-200/50 hover:border-blue-300 hover:shadow-lg'}`}
                  >
                    <div className="flex items-center mb-3">
                      <stat.icon className={`w-5 h-5 mr-3 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                      <div className={`text-md font-medium ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                        {stat.label}
                      </div>
                    </div>
                    <div className={`font-bold text-center text-sm md:text-lg ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {stat.value}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Sidebar CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:w-1/3"
            >
              <div className={`sticky top-32 backdrop-blur-sm border rounded-2xl p-8 shadow-2xl ${isDark 
                  ? 'bg-slate-800/70 border-slate-700/50' 
                  : 'bg-white/80 border-slate-200/50'}`}>
                <h3 className={`text-2xl font-bold mb-8 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Get This Solution
                </h3>
                
                <div className="space-y-4 mb-8">
                  <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      to="/contact"
                      state={{ solution: solution.title }}
                      className={`group relative w-full inline-flex items-center justify-center px-6 py-4 rounded-xl font-semibold transition-all duration-300 overflow-hidden ${isDark 
                          ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-lg' 
                          : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg'}`}
                    >
                      <span className="relative z-10">Request Consultation</span>
                      <FaArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                  </motion.div>
                  
                  <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      to="/demo"
                      state={{ solution: solution.title }}
                      className={`w-full inline-flex items-center justify-center px-6 py-4 border-2 rounded-xl font-semibold transition-all duration-300 ${isDark 
                          ? 'border-cyan-400/50 text-cyan-400 hover:border-cyan-400 hover:bg-cyan-400/10 hover:shadow-lg' 
                          : 'border-blue-600/50 text-blue-600 hover:border-blue-600 hover:bg-blue-50 hover:shadow-lg'}`}
                    >
                      Book a Demo
                    </Link>
                  </motion.div>
                </div>

                <div className={`border-t pt-8 ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
                  <h4 className={`font-semibold mb-4 ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>Quick Facts</h4>
                  <motion.ul
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="space-y-3"
                  >
                    {[
                      'Average ROI: 200-400%',
                      'Implementation Success: 95%',
                      '24/7 Support Available',
                      'Customizable Packages'
                    ].map((fact, index) => (
                      <motion.li
                        key={index}
                        variants={itemVariants}
                        className="flex items-center text-sm"
                      >
                        <FaCheckCircle className={`w-3 h-3 mr-3 ${isDark ? 'text-green-400' : 'text-green-600'}`} />
                        <span className={isDark ? 'text-gray-300' : 'text-slate-600'}>{fact}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Detailed Content Sections */}
      <div className="py-10 md:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Detailed Description */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="py-10"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={`text-2xl font-bold mb-5 ${isDark ? 'text-white' : 'text-slate-900'}`}
            >
              Solution Overview
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className={`prose prose-lg max-w-none ${isDark ? 'prose-invert' : ''}`}
              
            >
              <div 
                className={`text-lg leading-relaxed mb-6 ${isDark ? 'text-gray-300' : 'text-slate-700'}`}
                dangerouslySetInnerHTML={{ __html: solution.detailedDescription }}
            />
            </motion.div>
          </motion.section>

          {/* Features Grid */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="py-10"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={`text-3xl font-bold mb-10 ${isDark ? 'text-white' : 'text-slate-900'}`}
            >
              Key Features
            </motion.h2>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {solution.features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -8 }}
                  className={`p-2 rounded-2xl backdrop-blur-sm border transition-all duration-300 ${isDark 
                      ? 'bg-slate-800/30 border-slate-700/50 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10' 
                      : 'bg-white/70 border-slate-200/50 hover:border-blue-300 hover:shadow-xl'}`}
                >
                  <div className="flex items-start mb-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                      className={`w-12 h-12 rounded-xl flex items-center justify-center mr-2 ${isDark ? 'bg-blue-500/20' : 'bg-blue-100'}`}
                    >
                      <FaBolt className={`w-5 h-5 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                    </motion.div>
                    <h3 className={`text-lg font-semibold mt-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {feature}
                    </h3>
                  </div>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                    Advanced AI capabilities to transform your business operations.
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* Benefits Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="py-10"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={`text-3xl font-bold mb-10 ${isDark ? 'text-white' : 'text-slate-900'}`}
            >
              Business Benefits
            </motion.h2>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {solution.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center mt-1.5 mr-4 ${isDark ? 'bg-green-500/20' : 'bg-green-100'}`}
                  >
                    <FaCheckCircle className={`w-3 h-3 ${isDark ? 'text-green-400' : 'text-green-600'}`} />
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className={`text-lg pt-1 ${isDark ? 'text-gray-300' : 'text-slate-700'}`}
                  >
                    {benefit}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* Two Column Layout: Tech Stack & Process */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-10">
            {/* Technologies */}
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-slate-900'}`}
              >
                Technology Stack
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className={`p-8 rounded-2xl backdrop-blur-sm border ${isDark 
                    ? 'bg-slate-800/40 border-slate-700/50' 
                    : 'bg-white/60 border-slate-200/50 shadow-lg'}`}
              >
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  {solution.technologies.map((tech, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ y: -3 }}
                      className="flex items-center p-3 rounded-lg hover:bg-slate-500/5 transition-colors"
                    >
                      <div className={`p-2 rounded-lg mr-3 ${isDark ? 'bg-blue-500/10' : 'bg-blue-100'}`}>
                        <FaCode className={`w-4 h-4 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                      </div>
                      <span className={isDark ? 'text-gray-300' : 'text-slate-700'}>
                        {tech}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.section>

            {/* Implementation Process */}
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-slate-900'}`}
              >
                Implementation Process
              </motion.h2>
              
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                className="space-y-4"
              >
                {solution.implementationProcess.map((step, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -3 }}
                    className="flex items-start group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center mr-4 mt-1 ${isDark 
                          ? 'bg-gradient-to-br from-blue-600 to-cyan-600' 
                          : 'bg-gradient-to-br from-blue-600 to-blue-700'}`}
                    >
                      <motion.span
                        className="text-white font-bold text-sm"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        {index + 1}
                      </motion.span>
                    </motion.div>
                    <div>
                      <h3 className={`font-semibold mb-1 group-hover:text-blue-500 transition-colors ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}>
                        {step.split('(')[0]}
                      </h3>
                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.2 }}
                        className={`text-sm ${isDark ? 'text-gray-400' : 'text-slate-600'}`}
                      >
                        {step.includes('(') ? step.split('(')[1].replace(')', '') : 'Phase completion'}
                      </motion.p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>
          </div>

          {/* Case Studies */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="py-10"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}
              >
                Success Stories
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-center space-x-2"
              >
                <motion.button
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCaseStudy(prev => prev > 0 ? prev - 1 : solution.caseStudies.length - 1)}
                  className={`p-3 rounded-full transition-all duration-300 ${isDark 
                      ? 'bg-slate-800/50 border border-slate-700/50 text-blue-400 hover:bg-blue-500/20 hover:border-blue-400/50' 
                      : 'bg-white/70 border border-slate-200/50 text-blue-600 hover:bg-blue-50 hover:border-blue-300 shadow-sm hover:shadow-md'}`}
                >
                  <FaArrowLeft className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCaseStudy(prev => prev < solution.caseStudies.length - 1 ? prev + 1 : 0)}
                  className={`p-3 rounded-full transition-all duration-300 ${isDark 
                      ? 'bg-slate-800/50 border border-slate-700/50 text-blue-400 hover:bg-blue-500/20 hover:border-blue-400/50' 
                      : 'bg-white/70 border border-slate-200/50 text-blue-600 hover:bg-blue-50 hover:border-blue-300 shadow-sm hover:shadow-md'}`}
                >
                  <FaArrowRight className="w-5 h-5" />
                </motion.button>
              </motion.div>
            </div>

            <motion.div
              key={selectedCaseStudy}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className={`rounded-2xl overflow-hidden ${isDark 
                  ? 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50' 
                  : 'bg-gradient-to-br from-white to-gray-50/50 border border-slate-200/50 shadow-2xl'}`}
            >
              <div className="p-8 md:p-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex flex-col md:flex-row items-start md:items-center mb-6"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    className={`p-3 rounded-xl mb-4 md:mb-0 md:mr-6 ${isDark ? 'bg-blue-500/20' : 'bg-blue-100'}`}
                  >
                    <FaChartBar className={`w-8 h-8 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                  </motion.div>
                  <div>
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}
                    >
                      {solution.caseStudies[selectedCaseStudy].title}
                    </motion.h3>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className={`text-lg font-semibold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}
                    >
                      {solution.caseStudies[selectedCaseStudy].result}
                    </motion.div>
                  </div>
                </motion.div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-slate-700'}`}
                >
                  {solution.caseStudies[selectedCaseStudy].description}
                </motion.p>
              </div>
            </motion.div>

            {/* Case Study Dots */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex justify-center mt-8 space-x-3"
            >
              {solution.caseStudies.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setSelectedCaseStudy(index)}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="relative"
                >
                  <motion.div
                    animate={{ 
                      scale: index === selectedCaseStudy ? 1.2 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                    className={`w-3 h-3 rounded-full ${index === selectedCaseStudy 
                        ? (isDark ? 'bg-blue-400' : 'bg-blue-600') 
                        : (isDark ? 'bg-slate-700' : 'bg-slate-300')}`}
                  />
                </motion.button>
              ))}
            </motion.div>
          </motion.section>

          {/* Pricing & Team Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-10">
            {/* Pricing Models */}
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-slate-900'}`}
              >
                Pricing Models
              </motion.h2>
              
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                className="space-y-6"
              >
                {Object.entries(solution.pricingModels).map(([model, price], index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className={`p-6 rounded-xl backdrop-blur-sm border transition-all duration-300 ${isDark 
                        ? 'bg-slate-800/40 border-slate-700/50 hover:border-blue-500/50 hover:shadow-lg' 
                        : 'bg-white/60 border-slate-200/50 hover:border-blue-300 hover:shadow-lg'}`}
                  >
                    <div className="flex justify-between items-center mb-3">
                      <h3 className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {model.charAt(0).toUpperCase() + model.slice(1)}
                      </h3>
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.2 }}
                        className={`text-lg font-bold bg-gradient-to-r bg-clip-text text-transparent ${solution.color(isDark)}`}
                      >
                        {price}
                      </motion.div>
                    </div>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                      {model === 'standard' && 'Complete solution with basic features'}
                      {model === 'enterprise' && 'Full-scale deployment with premium support'}
                      {model === 'subscription' && 'Monthly access with updates and support'}
                      {model === 'per-camera' && 'Hardware and software bundle per unit'}
                      {model === 'per-process' && 'Custom pricing per business process'}
                      {model === 'consulting+licensing' && 'Professional services + software license'}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* Team Structure */}
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-slate-900'}`}
              >
                Dedicated Team
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className={`p-8 rounded-2xl backdrop-blur-sm border ${isDark 
                    ? 'bg-gradient-to-br from-slate-800/40 to-slate-900/40 border-slate-700/50' 
                    : 'bg-gradient-to-br from-white/60 to-gray-50/60 border-slate-200/50 shadow-xl'}`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center mb-8"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`p-3 rounded-xl mr-4 ${isDark ? 'bg-blue-500/20' : 'bg-blue-100'}`}
                  >
                    <FaUsers className={`w-8 h-8 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                  </motion.div>
                  <div>
                    <div className={`font-bold text-xl ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      Team Size: {solution.team.size} specialists
                    </div>
                    <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                      Average project duration: {solution.timeline}
                    </div>
                  </div>
                </motion.div>
                
                <div className="space-y-6">
                  <h4 className={`font-semibold text-lg ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
                    Team Roles:
                  </h4>
                  
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    {solution.team.roles.map((role, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{ y: -3 }}
                        className="flex items-center p-3 rounded-lg hover:bg-slate-500/5 transition-colors"
                      >
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          className={`w-2 h-2 rounded-full mr-4 ${isDark ? 'bg-blue-400' : 'bg-blue-600'}`}
                        />
                        <span className={isDark ? 'text-gray-300' : 'text-slate-700'}>
                          {role}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </motion.section>
          </div>

        </div>
      </div>

      {/* Final CTA */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className={`py-10 ${isDark 
            ? 'bg-gradient-to-br from-slate-900 via-blue-900/30 to-slate-900' 
            : 'bg-gradient-to-br from-white via-blue-50/70 to-gray-50'}`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-8 ${isDark ? 'text-white' : 'text-slate-900'}`}
          >
            Ready to Implement{' '}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              {solution.title}
            </span>
            ?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`text-xl md:text-2xl mb-12 leading-relaxed max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-slate-600'}`}
          >
            Transform your business with this proven AI solution. Get started with a free consultation and see the difference in just 30 days.
          </motion.p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                state={{ solution: solution.title }}
                className={`group relative inline-flex items-center px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300 overflow-hidden ${isDark 
                    ? 'bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-600 hover:shadow-2xl hover:shadow-blue-500/25' 
                    : 'bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 hover:shadow-2xl'}`}
              >
                <span className="relative z-10 text-white">Start Your Project</span>
                <FaArrowRight className="ml-4 w-5 h-5 group-hover:translate-x-2 transition-transform relative z-10" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-600"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/ai-solutions"
                className={`group inline-flex items-center px-10 py-5 border-2 rounded-xl font-semibold text-lg transition-all duration-300 ${isDark 
                    ? 'border-cyan-400/50 text-cyan-400 hover:border-cyan-400 hover:bg-cyan-400/10 hover:shadow-lg' 
                    : 'border-blue-600/50 text-blue-600 hover:border-blue-600 hover:bg-blue-50 hover:shadow-xl'}`}
              >
                View Other Solutions
              </Link>
            </motion.div>
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className={`mt-10 text-sm ${isDark ? 'text-gray-400' : 'text-slate-500'}`}
          >
            Free initial consultation and solution assessment included
          </motion.p>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default SolutionDetailPage;