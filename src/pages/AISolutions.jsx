import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedBackground from '../components/AnimatedBackground';
import { useTheme } from '../contexts/ThemeContext';
import { aiSolutionsData } from '../data/aiSolutionsData';
import { FaArrowRight, FaBolt, FaRobot, FaClock, FaCode, FaCrosshairs, FaDatabase, FaShield } from 'react-icons/fa6';
import { LuBot } from 'react-icons/lu';
import { FaCheckCircle, FaCloud, FaMagic, FaShieldAlt } from 'react-icons/fa';

const AISolutions = () => {
  const { isDark } = useTheme();

  const aiCapabilities = [
    { name: "Deep Learning", percentage: 95 },
    { name: "Natural Language Processing", percentage: 92 },
    { name: "Computer Vision", percentage: 88 },
    { name: "Predictive Modeling", percentage: 94 },
    { name: "Reinforcement Learning", percentage: 85 },
    { name: "Neural Networks", percentage: 90 }
  ];

  // Fade animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.8 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 md:pt-24 w-full"
    >
      {/* Hero Section */}
      <div className="relative min-h-[70vh] flex items-center justify-center w-full">
        <AnimatedBackground className="absolute inset-0" />
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 border transition-all duration-300 ${isDark 
                    ? 'bg-blue-500/10 border-blue-400/20 text-blue-400 hover:bg-blue-500/20 hover:border-blue-400/30' 
                    : 'bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100 hover:border-blue-300 shadow-sm'}`}>
                <FaRobot className="w-4 h-4 mr-2" />
                Artificial Intelligence Solutions
              </motion.span>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="flex items-center justify-center space-x-2 mb-6"
              >
                <FaRobot className={`w-10 h-10 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                {/* <LuBot className={`w-10 h-10 ${isDark ? 'text-cyan-400' : 'text-blue-700'}`} /> */}
                <FaBolt className={`w-8 h-8 ${isDark ? 'text-blue-300' : 'text-blue-800'}`} />
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}
              >
                AI Solutions
                <span className={`block pb-2 bg-gradient-to-r bg-clip-text text-transparent mt-2 ${isDark 
                    ? 'from-blue-400 via-cyan-400 to-purple-400' 
                    : 'from-blue-600 via-blue-700 to-blue-800'}`}>
                  Intelligent by Design
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed transition-colors duration-300 mb-8 ${isDark ? 'text-gray-300' : 'text-slate-600'}`}
              >
                Harness the power of artificial intelligence to transform your business operations, 
                enhance decision making, and create unprecedented competitive advantages.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link
                  to="/contact"
                  className={`group relative inline-flex items-center px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${isDark 
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-lg hover:shadow-blue-500/25' 
                      : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl'}`}
                >
                  <span>Start AI Transformation</span>
                  <FaArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link
                  to="/ai-solutions#solutions-grid"
                  className={`inline-flex items-center px-8 py-4 border-2 rounded-lg font-semibold transition-all duration-300 ${isDark 
                      ? 'border-cyan-400/50 text-cyan-400 hover:border-cyan-400 hover:bg-cyan-400/10 hover:shadow-glow' 
                      : 'border-blue-600/50 text-blue-600 hover:border-blue-600 hover:bg-blue-50 shadow-md hover:shadow-lg'}`}
                >
                  Explore Solutions
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* AI Solutions Grid */}
      <section id="solutions-grid" className={`py-10 md:py-10 transition-all duration-300 ${isDark ? 'bg-slate-900/30' : 'bg-gray-50/50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Our AI Solutions Portfolio
            </h2>
            <p className={`text-lg md:text-xl max-w-3xl mx-auto transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
              Complete AI-powered solutions designed to solve complex business challenges with measurable results
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {aiSolutionsData.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <motion.div
                  key={solution.id}
                  variants={fadeInUp}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`group relative backdrop-blur-sm border rounded-xl overflow-hidden transition-all duration-300 ${isDark 
                      ? 'bg-slate-800/50 border-slate-700/50 hover:border-blue-400/50 hover:bg-slate-800/70 hover:shadow-glow' 
                      : 'bg-white/70 border-slate-200/50 hover:border-blue-300/50 hover:bg-white/90 shadow-lg hover:shadow-xl'}`}
                >
                  <Link to={`/ai-solutions/${solution.id}`} className="block">
                    <div className={`absolute inset-0 bg-gradient-to-r ${solution.color(isDark)} rounded-xl opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                    
                    <div className="relative z-10 p-6">
                      <div className="flex items-start justify-between mb-4">
                        <motion.div 
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${solution.color(isDark)} rounded-lg opacity-80 group-hover:opacity-100 transition-all duration-300`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </motion.div>
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${isDark 
                            ? 'bg-blue-500/10 border border-blue-400/20 text-blue-400' 
                            : 'bg-blue-50 border border-blue-200 text-blue-600'}`}>
                          Solution
                        </span>
                      </div>

                      <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-blue-500 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {solution.title}
                      </h3>

                      <p className={`text-sm mb-4 leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                        {solution.shortDescription}
                      </p>

                      <div className="mb-6">
                        <div className={`text-xs font-medium mb-2 ${isDark ? 'text-gray-500' : 'text-slate-500'}`}>Key Features:</div>
                        <ul className="space-y-1">
                          {solution.features.slice(0, 3).map((feature, idx) => (
                            <motion.li 
                              key={idx} 
                              whileHover={{ x: 2 }}
                              className="flex items-center text-sm"
                            >
                              <div className={`w-1.5 h-1.5 rounded-full mr-2 ${isDark ? 'bg-blue-400' : 'bg-blue-600'}`} />
                              <span className={`transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
                                {feature}
                              </span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex items-center text-sm">
                          <FaClock className={`w-4 h-4 mr-2 ${isDark ? 'text-gray-500' : 'text-gray-400'}`} />
                          <span className={isDark ? 'text-gray-400' : 'text-slate-600'}>{solution.timeline}</span>
                        </div>
                        <motion.div 
                          whileHover={{ x: 5 }}
                          className={`inline-flex items-center text-sm font-medium ${isDark ? 'text-blue-400' : 'text-blue-600'}`}
                        >
                          Learn More
                          <FaArrowRight className="ml-1 w-4 h-4 transition-transform" />
                        </motion.div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link
              to="/contact"
              className={`inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${isDark 
                  ? 'text-blue-400 hover:text-blue-300 border border-blue-400/50 hover:border-blue-400 hover:bg-blue-400/10' 
                  : 'text-blue-600 hover:text-blue-700 border border-blue-600/50 hover:border-blue-600 hover:bg-blue-50'}`}
            >
              Need a Custom AI Solution?
              <FaArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className={`py-10 md:py-10 transition-all duration-300 ${isDark ? 'bg-slate-900/50' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className={`text-3xl md:text-4xl font-bold mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                AI Technology Expertise
              </h2>
              <p className={`text-lg md:text-xl mb-8 leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                Our team masters cutting edge AI technologies to deliver solutions that push the boundaries of what's possible.
              </p>
              
              <div className="space-y-6">
                {aiCapabilities.map((capability, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between text-sm">
                      <span className={`transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>{capability.name}</span>
                      <span className={`font-semibold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>{capability.percentage}%</span>
                    </div>
                    <div className={`h-2 rounded-full overflow-hidden ${isDark ? 'bg-slate-700' : 'bg-slate-200'}`}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${capability.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        className={`h-full bg-gradient-to-r ${isDark ? 'from-blue-500 to-cyan-500' : 'from-blue-600 to-blue-700'}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 md:space-y-8"
            >
              <motion.div
                whileHover={{ y: -5 }}
                className={`backdrop-blur-sm border rounded-xl p-6 transition-all duration-300 ${isDark 
                    ? 'bg-slate-800/50 border-slate-700/50' 
                    : 'bg-white/70 border-slate-200/50 shadow-lg'}`}
              >
                <h3 className={`text-xl font-semibold mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>AI Development Stack</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className={`font-medium mb-3 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                      <FaCode className="inline-block w-4 h-4 mr-2" />
                      Frameworks
                    </div>
                    <ul className="space-y-2 text-sm">
                      {["TensorFlow", "PyTorch", "Keras", "Scikit-learn", "OpenAI", "Hugging Face"].map((item, i) => (
                        <motion.li 
                          key={i} 
                          whileHover={{ x: 2 }}
                          className={`flex items-center transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-slate-700'}`}
                        >
                          <FaCheckCircle className="w-3 h-3 mr-2" />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className={`font-medium mb-3 ${isDark ? 'text-cyan-400' : 'text-blue-700'}`}>
                      <FaDatabase className="inline-block w-4 h-4 mr-2" />
                      Languages
                    </div>
                    <ul className="space-y-2 text-sm">
                      {["Python", "R", "JavaScript", "SQL", "Java", "C++"].map((item, i) => (
                        <motion.li 
                          key={i} 
                          whileHover={{ x: 2 }}
                          className={`flex items-center transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-slate-700'}`}
                        >
                          <FaCheckCircle className="w-3 h-3 mr-2" />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className={`backdrop-blur-sm border rounded-xl p-6 transition-all duration-300 ${isDark 
                    ? 'bg-slate-800/50 border-slate-700/50' 
                    : 'bg-white/70 border-slate-200/50 shadow-lg'}`}
              >
                <h3 className={`text-xl font-semibold mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>Cloud AI Platforms</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className={`font-medium mb-3 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                      <FaCloud className="inline-block w-4 h-4 mr-2" />
                      AWS
                    </div>
                    <ul className="space-y-2 text-sm">
                      {["SageMaker", "Bedrock", "Comprehend", "Rekognition", "Lex", "Poly"].map((item, i) => (
                        <motion.li 
                          key={i} 
                          whileHover={{ x: 2 }}
                          className={`flex items-center transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-slate-700'}`}
                        >
                          <FaCheckCircle className="w-3 h-3 mr-2" />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className={`font-medium mb-3 ${isDark ? 'text-cyan-400' : 'text-blue-700'}`}>
                      <FaShield className="inline-block w-4 h-4 mr-2" />
                      Azure & GCP
                    </div>
                    <ul className="space-y-2 text-sm">
                      {["Azure ML", "Cognitive Services", "Vertex AI", "Dialogflow", "Vision AI", "AutoML"].map((item, i) => (
                        <motion.li 
                          key={i} 
                          whileHover={{ x: 2 }}
                          className={`flex items-center transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-slate-700'}`}
                        >
                          <FaCheckCircle className="w-3 h-3 mr-2" />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Benefits */}
      <section className={`py-10 md:py-10 transition-all duration-300 ${isDark ? 'bg-slate-900/30' : 'bg-gray-50/50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Why Choose Our AI Solutions?
            </h2>
            <p className={`text-lg md:text-xl max-w-3xl mx-auto transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
              We deliver end to end AI solutions with proven results and measurable ROI
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: FaMagic,
                title: "End-to-End Solutions",
                description: "Complete implementation from strategy to deployment and ongoing support",
                color: isDark ? "from-blue-500 to-cyan-500" : "from-blue-600 to-blue-700"
              },
              {
                icon: FaCrosshairs,
                title: "Measurable Results",
                description: "Clear KPIs and ROI tracking for every solution we deliver",
                color: isDark ? "from-green-500 to-green-500" : "from-green-700 to-green-800"
              },
              {
                icon: FaShieldAlt,
                title: "Enterprise Ready",
                description: "Scalable, secure solutions built for enterprise deployment",
                color: isDark ? "from-purple-600 to-purple-500" : "from-indigo-500 to-indigo-500"
              },
              {
                icon: FaBolt,
                title: "Rapid Deployment",
                description: "Agile methodology for faster time-to-value and business impact",
                color: isDark ? "from-pink-500 to-pink-600" : "from-pink-500 to-pink-600"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className={`backdrop-blur-sm border rounded-xl p-6 text-center transition-all duration-300 ${isDark 
                    ? 'bg-slate-800/50 border-slate-700/50 hover:border-blue-400/50 hover:bg-slate-800/70 hover:shadow-glow' 
                    : 'bg-white/70 border-slate-200/50 hover:border-blue-300/50 hover:bg-white/90 shadow-lg hover:shadow-xl'}`}
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${item.color} rounded-full mb-4`}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {item.title}
                </h3>
                <p className={`text-sm leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-10 md:py-10 transition-all duration-300 ${isDark 
          ? 'bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900' 
          : 'bg-gradient-to-br from-white via-blue-50/50 to-gray-50'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}
              >
                Ready to Transform Your Business with AI?
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className={`text-lg md:text-xl mb-8 leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-slate-600'}`}
              >
                Schedule a free consultation with our AI experts to discuss your specific challenges and goals.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link
                  to="/contact"
                  className={`group relative inline-flex items-center px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${isDark 
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-lg hover:shadow-blue-500/25' 
                      : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl'}`}
                >
                  <FaRobot className="w-5 h-5 mr-2" />
                  <span>Book Free Consultation</span>
                  <FaArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link
                  to="/ai-solutions#solutions-grid"
                  className={`inline-flex items-center px-8 py-4 border-2 rounded-lg font-semibold transition-all duration-300 ${isDark 
                      ? 'border-cyan-400/50 text-cyan-400 hover:border-cyan-400 hover:bg-cyan-400/10 hover:shadow-glow' 
                      : 'border-blue-600/50 text-blue-600 hover:border-blue-600 hover:bg-blue-50 shadow-md hover:shadow-lg'}`}
                >
                  Explore All Solutions
                </Link>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className={`mt-8 text-sm transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-500'}`}
              >
                Includes free AI readiness assessment and solution roadmap
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Impact Stats */}
      <section className={`py-12 md:py-16 border-t transition-all duration-300 ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          >
            {[
              { value: "40-60%", label: "Cost Reduction", desc: "Average operational efficiency" },
              { value: "3-5x", label: "ROI Delivered", desc: "Average return on AI investment" },
              { value: "95%+", label: "Accuracy Rate", desc: "In predictions & automation" },
              { value: "12-16", label: "Weeks to Value", desc: "Average implementation timeline" },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="text-center"
              >
                <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r bg-clip-text text-transparent ${isDark 
                    ? 'from-blue-400 to-cyan-400' 
                    : 'from-blue-600 to-blue-700'}`}>
                  {item.value}
                </div>
                <div className={`font-semibold text-sm md:text-base mb-1 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.label}</div>
                <div className={`text-xs transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>{item.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default AISolutions;












































































































































// {/* AI Network Visualization */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.5, duration: 1 }}
//             className="relative h-48 md:h-64 mt-12 overflow-hidden"
//           >
//             <div className="absolute inset-0 flex items-center justify-center">
//               <svg 
//                 width="100%" 
//                 height="100%" 
//                 viewBox="0 0 600 200" 
//                 preserveAspectRatio="xMidYMid meet"
//                 className="max-w-3xl mx-auto"
//               >
//                 {/* AI Network Nodes */}
//                 {Array.from({ length: 15 }, (_, i) => (
//                   <motion.circle
//                     key={i}
//                     cx={50 + (i % 5) * 125}
//                     cy={50 + Math.floor(i / 5) * 50}
//                     r="4"
//                     fill={isDark ? "#3b82f6" : "#1d4ed8"}
//                     initial={{ opacity: 0 }}
//                     animate={{ 
//                       opacity: isDark ? [0.3, 1, 0.3] : [0.2, 0.8, 0.2],
//                       r: [4, 8, 4]
//                     }}
//                     transition={{
//                       duration: 3,
//                       delay: i * 0.2,
//                       repeat: Infinity,
//                       repeatType: "reverse"
//                     }}
//                   />
//                 ))}
                
//                 {/* Connecting Lines */}
//                 {Array.from({ length: 10 }, (_, i) => (
//                   <motion.line
//                     key={i}
//                     x1={50 + (i % 4) * 125}
//                     y1={50 + Math.floor(i / 4) * 50}
//                     x2={175 + (i % 4) * 125}
//                     y2={50 + Math.floor(i / 4) * 50}
//                     stroke={isDark ? "url(#gradient)" : "url(#gradient-light)"}
//                     strokeWidth="2"
//                     strokeOpacity={isDark ? 0.6 : 0.4}
//                     initial={{ pathLength: 0, opacity: 0 }}
//                     animate={{ pathLength: 1, opacity: 1 }}
//                     transition={{ delay: i * 0.3, duration: 2 }}
//                   />
//                 ))}
                
//                 <defs>
//                   <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
//                     <stop offset="0%" stopColor="#3b82f6" />
//                     <stop offset="100%" stopColor="#06b6d4" />
//                   </linearGradient>
//                   <linearGradient id="gradient-light" x1="0%" y1="0%" x2="100%" y2="0%">
//                     <stop offset="0%" stopColor="#1d4ed8" />
//                     <stop offset="100%" stopColor="#2563eb" />
//                   </linearGradient>
//                 </defs>
//               </svg>
//             </div>
//           </motion.div>