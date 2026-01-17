
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedBackground from '../components/AnimatedBackground';
import { useTheme } from '../contexts/ThemeContext';
import { FaArrowRight, FaAward, FaBolt, FaRobot, FaBuilding, FaChartLine, FaClock, FaCrosshairs, FaGlobe, FaLightbulb, FaShieldCat, FaShieldHeart, FaUsers } from 'react-icons/fa6';
import { FaShieldAlt } from 'react-icons/fa';

const About = () => {
  const { isDark } = useTheme();

  const milestones = [
    { year: "2018", title: "Company Founded", description: "Established with a vision to transform businesses through intelligent technology solutions." },
    { year: "2019", title: "First AI Implementation", description: "Deployed our first machine learning model for predictive analytics in healthcare." },
    { year: "2021", title: "Cloud First Strategy", description: "Transitioned to cloud native architecture, enabling 10x scalability for our clients." },
    { year: "2023", title: "AI Innovation Lab", description: "Launched dedicated AI research lab focusing on generative AI and automation." },
    { year: "2024", title: "Global Expansion", description: "Extended operations to serve enterprise clients across North America and Europe." },
    { year: "2026", title: "Industry Leadership", description: "Recognized as a leading AI first technology consultancy with 500+ successful projects." }
  ];

  const values = [
    {
      icon: FaCrosshairs,
      title: "Innovation Excellence",
      description: "We push the boundaries of what's possible, delivering cutting edge solutions that create competitive advantages for our clients.",
      color: isDark ? "from-blue-500 to-cyan-500" : "from-blue-600 to-blue-800"
    },
    {
      icon: FaUsers,
      title: "Client Partnership",
      description: "We build long term partnerships based on trust, transparency, and shared success in achieving business objectives.",
      color: isDark ? "from-green-500 to-green-500" : "from-green-700 to-green-900"
    },
    {
      icon: FaLightbulb,
      title: "Technical Mastery",
      description: "Our team maintains expertise in the latest technologies, ensuring solutions that are both current and future ready.",
      color: isDark ? "from-purple-600 to-purple-500" : "from-purple-800 to-purple-700"
    },
    {
      icon: FaAward,
      title: "Quality Commitment", 
      description: "We deliver enterprise grade solutions with rigorous testing, security protocols, and performance optimization.",
      color: isDark ? "from-emerald-500 to-emerald-600" : "from-emerald-700 to-emerald-800"
    },
    {
      icon: FaGlobe,
      title: "Scalable Impact",
      description: "Every solution we build is designed to scale, adapt, and evolve with your business growth and changing requirements.",
      color: isDark ? "from-pink-500 to-pink-500" : "from-pink-600 to-pink-700"
    },
    {
      icon: FaBolt,
      title: "Agile Execution",
      description: "We execute with speed and precision, delivering value iteratively while maintaining the highest quality standards.",
      color: isDark ? "from-yellow-500 to-yellow-600" : "from-yellow-500 to-yellow-600"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: FaChartLine },
    { number: "150+", label: "Enterprise Clients", icon: FaUsers },
    { number: "50+", label: "AI Models Deployed", icon: FaRobot },
    { number: "99.9%", label: "System Uptime", icon: FaShieldAlt },
    { number: "8", label: "Years of Innovation", icon: FaClock },
    { number: "24/7", label: "Technical Support", icon: FaBolt }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 overflow-x-hidden"
    >
      {/* Hero Section */}
      <AnimatedBackground className="min-h-[70vh] flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 border transition-all duration-300 ${isDark 
                ? 'bg-blue-500/10 border-blue-400/20 text-blue-400 hover:bg-blue-500/20 hover:border-blue-400/30' 
                : 'bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100 hover:border-blue-300 shadow-sm'}`}>
              <FaBuilding className="w-4 h-4 mr-2" />
              Our Story & Vision
            </span>
            
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              About Levitica
              <span className={`block bg-gradient-to-r bg-clip-text text-transparent mt-2 ${isDark 
                  ? 'from-blue-400 to-cyan-400' 
                  : 'from-blue-600 to-blue-800'}`}>
                Technologies
              </span>
            </h1>
            <p className={`text-lg md:text-xl max-w-4xl mx-auto leading-relaxed transition-colors duration-300 mb-8 ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>
              We are a forward-thinking technology consultancy specializing in AI-driven solutions, 
              cloud infrastructure, and digital transformation. Since 2018, we've been engineering 
              intelligent systems that empower businesses to thrive in the digital age.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/careers"
                className={`group relative inline-flex items-center px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${isDark 
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-lg hover:shadow-blue-500/25' 
                    : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl'}`}
              >
                <span>Join Our Team</span>
                <FaArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <div className={`absolute inset-0 rounded-lg blur opacity-30 group-hover:opacity-50 -z-10 ${isDark 
                    ? 'bg-gradient-to-r from-blue-400 to-cyan-400' 
                    : 'bg-gradient-to-r from-blue-500 to-blue-600'}`} />
              </Link>
              
              <Link
                to="/contact"
                className={`inline-flex items-center px-8 py-4 border-2 rounded-lg font-semibold transition-all duration-300 ${isDark 
                    ? 'border-cyan-400/50 text-cyan-400 hover:border-cyan-400 hover:bg-cyan-400/10 hover:shadow-glow' 
                    : 'border-blue-600/50 text-blue-600 hover:border-blue-600 hover:bg-blue-50 shadow-md hover:shadow-lg'}`}
              >
                Contact Leadership
              </Link>
            </div>
          </motion.div>
        </div>
      </AnimatedBackground>

      {/* Mission & Vision */}
      <section className={`py-16 md:py-20 transition-all duration-300 ${isDark ? 'bg-slate-900/30' : 'bg-gray-50/50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className={`backdrop-blur-sm border rounded-xl p-6 transition-all duration-300 ${isDark 
                  ? 'bg-slate-800/50 border-slate-700/50 hover:border-blue-400/50 hover:bg-slate-800/70' 
                  : 'bg-white/70 border-slate-200/50 hover:border-blue-300/50 hover:bg-white/90 shadow-lg hover:shadow-xl'}`}>
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg ${isDark ? 'bg-blue-500/20' : 'bg-blue-100'} mr-4`}>
                    <FaCrosshairs className={`w-6 h-6 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                  </div>
                  <h2 className={`text-2xl md:text-3xl font-bold transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>Our Mission</h2>
                </div>
                <p className={`text-lg leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>
                  Our mission is to deliver high quality, scalable, and secure applications that solve real world challenges, while ensuring client satisfaction at every stage.
                </p>
              </div>

              <div className={`backdrop-blur-sm border rounded-xl p-6 transition-all duration-300 ${isDark 
                  ? 'bg-slate-800/50 border-slate-700/50 hover:border-cyan-400/50 hover:bg-slate-800/70' 
                  : 'bg-white/70 border-slate-200/50 hover:border-blue-400/50 hover:bg-white/90 shadow-lg hover:shadow-xl'}`}>
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg ${isDark ? 'bg-cyan-500/20' : 'bg-cyan-100'} mr-4`}>
                    <FaLightbulb className={`w-6 h-6 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`} />
                  </div>
                  <h2 className={`text-2xl md:text-3xl font-bold transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>Our Vision</h2>
                </div>
                <p className={`text-lg leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>
                  At Levitica Technologies, our vision is to empower businesses with innovative technology solutions, enabling them to thrive in a connected and digital world.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className={`text-3xl font-bold mb-8 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>Company Statistics</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`backdrop-blur-sm border rounded-xl p-4 md:p-6 text-center transition-all duration-300 ${isDark 
                        ? 'bg-slate-800/30 border-slate-700/30 hover:border-blue-400/30 hover:bg-slate-800/50' 
                        : 'bg-white/50 border-slate-200/50 hover:border-blue-300/50 hover:bg-white/70 shadow-sm hover:shadow-md'}`}
                  >
                    <div className="flex justify-center mb-2">
                      <div className={`p-2 rounded-lg ${isDark ? 'bg-blue-500/20' : 'bg-blue-100'}`}>
                        <stat.icon className={`w-5 h-5 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                      </div>
                    </div>
                    <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r bg-clip-text text-transparent mb-1 ${isDark 
                        ? 'from-blue-400 to-cyan-400' 
                        : 'from-blue-600 to-blue-700'}`}>
                      {stat.number}
                    </div>
                    <div className={`text-sm transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className={`py-16 md:py-20 transition-all duration-300 ${isDark ? 'bg-slate-900/50' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Our Core Values
            </h2>
            <p className={`text-lg md:text-xl max-w-3xl mx-auto transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
              The principles that guide everything we do and define how we serve our clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`group backdrop-blur-sm border rounded-xl p-6 transition-all duration-300 hover:scale-[1.02] ${isDark 
                    ? 'bg-slate-800/50 border-slate-700/50 hover:border-blue-400/50 hover:bg-slate-800/70 hover:shadow-glow' 
                    : 'bg-white/70 border-slate-200/50 hover:border-blue-300/50 hover:bg-white/90 shadow-lg hover:shadow-xl'}`}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${value.color} rounded-lg mb-4 opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110`}>
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>{value.title}</h3>
                <p className={`text-sm leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className={`py-16 md:py-20 transition-all duration-300 ${isDark 
          ? 'bg-gradient-to-br from-slate-900 via-blue-900/10 to-slate-900' 
          : 'bg-gradient-to-br from-gray-50 via-blue-50/20 to-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Our Journey of Innovation
            </h2>
            <p className={`text-lg md:text-xl max-w-3xl mx-auto transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
              Key milestones in our evolution from startup to industry-leading AI consultancy
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className={`absolute left-4 md:left-1/2 md:transform md:-translate-x-px h-full w-0.5 ${isDark 
                ? 'bg-gradient-to-b from-blue-500 to-cyan-500' 
                : 'bg-gradient-to-b from-blue-600 to-blue-800'}`}></div>

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`relative flex ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'} justify-start`}
                >
                  <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className={`backdrop-blur-sm border rounded-xl p-6 transition-all duration-300 ${isDark 
                        ? 'bg-slate-800/50 border-slate-700/50 hover:border-blue-400/30 hover:bg-slate-800/70' 
                        : 'bg-white/70 border-slate-200/50 hover:border-blue-300/30 hover:bg-white/90 shadow-lg hover:shadow-xl'}`}>
                      <div className={`font-bold text-lg md:text-xl mb-2 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>{milestone.year}</div>
                      <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>{milestone.title}</h3>
                      <p className={`leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className={`absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 ${isDark ? 'bg-gradient-to-r from-blue-500 to-cyan-500' : 'bg-gradient-to-r from-blue-600 to-blue-800'} rounded-full border-4 ${isDark ? 'border-slate-900' : 'border-white'} flex items-center justify-center`}>
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className={`py-16 md:py-20 transition-all duration-300 ${isDark ? 'bg-slate-900/30' : 'bg-gray-50/50'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Decorative Elements */}
            <div className={`absolute -top-10 -left-10 w-20 h-20 rounded-full blur-xl opacity-20 ${isDark ? 'bg-blue-500' : 'bg-blue-400'}`} />
            <div className={`absolute -bottom-10 -right-10 w-32 h-32 rounded-full blur-xl opacity-20 ${isDark ? 'bg-cyan-500' : 'bg-blue-300'}`} />
            
            <div className="relative z-10">
              <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Technology with Purpose
              </h2>
              <p className={`text-lg md:text-xl mb-8 leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>
                We believe that technology should amplify human potential, not replace it. Our solutions 
                are designed to augment human decision making, streamline complex processes, and create 
                opportunities for innovation and growth.
              </p>
              
              <div className={`backdrop-blur-sm border rounded-xl p-6 md:p-8 transition-all duration-300 ${isDark 
                  ? 'bg-slate-800/50 border-slate-700/50' 
                  : 'bg-white/70 border-slate-200/50 shadow-lg'}`}>
                <blockquote className={`text-xl md:text-2xl italic mb-6 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
                  "The future belongs to organizations that can seamlessly blend human creativity 
                  with artificial intelligence. We're here to make that future a reality."
                </blockquote>
                <div className={`font-semibold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                   Levitica Technologies Leadership Team
                </div>
              </div>

              <div className="mt-8">
                <Link
                  to="/team"
                  className={`inline-flex items-center px-6 py-3 border-2 rounded-lg font-semibold transition-all duration-300 ${isDark 
                      ? 'border-blue-400/50 text-blue-400 hover:border-blue-400 hover:bg-blue-400/10 hover:shadow-glow' 
                      : 'border-blue-600/50 text-blue-600 hover:border-blue-600 hover:bg-blue-50 shadow-md hover:shadow-lg'}`}
                >
                  Meet Our Leadership Team
                  <FaArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Philosophy */}
      <section className={`py-12 md:py-16 border-t transition-all duration-300 ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { value: "95%", label: "Employee Retention", desc: "Industry leading retention rate" },
              { value: "50%", label: "Women in Tech", desc: "Promoting diversity & inclusion" },
              { value: "10+", label: "Countries", desc: "Global team representation" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
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
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;