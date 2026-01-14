import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedBackground from '../components/AnimatedBackground';
import { useTheme } from '../contexts/ThemeContext';
import { FaArrowRight, FaCloud, FaCode, FaDatabase, FaGlobe, FaLaptopCode, FaLayerGroup, FaRobot, FaRocket, FaUsers } from 'react-icons/fa6';
import { FaCheckCircle, FaShieldAlt } from 'react-icons/fa';
import { LuSparkles, LuTrendingUp } from 'react-icons/lu';
import { IoGitBranchOutline } from 'react-icons/io5';

const Technologies = () => {
  const { isDark } = useTheme();

  const techCategories = [
    {
      icon: FaCode,
      title: "Frontend Development",
      description: "Crafting exceptional user experiences with modern frameworks",
      highlight: "Pixel perfect responsive designs",
      technologies: [
        { name: "React", level: 95, color: isDark ? "from-blue-400 to-cyan-400" : "from-blue-600 to-blue-800" },
        { name: "Next.js", level: 92, color: isDark ? "from-gray-400 to-gray-600" : "from-gray-700 to-gray-900" },
        { name: "TypeScript", level: 93, color: isDark ? "from-blue-500 to-indigo-500" : "from-blue-700 to-indigo-800" },
        { name: "Tailwind CSS", level: 96, color: isDark ? "from-cyan-400 to-teal-500" : "from-cyan-600 to-teal-700" },
        { name: "Vue.js", level: 85, color: isDark ? "from-emerald-400 to-green-500" : "from-emerald-600 to-green-700" },
        { name: "React Native", level: 91, color: isDark ? "from-sky-400 to-blue-500" : "from-sky-600 to-blue-700" }
      ]
    },
    {
      icon: FaDatabase,
      title: "Backend & Databases",
      description: "Robust server solutions for scalable applications",
      highlight: "High performance data management",
      technologies: [
        { name: "Node.js", level: 94, color: isDark ? "from-green-400 to-emerald-500" : "from-green-600 to-emerald-700" },
        { name: "PostgreSQL", level: 90, color: isDark ? "from-blue-400 to-indigo-500" : "from-blue-700 to-indigo-800" },
        { name: "MongoDB", level: 88, color: isDark ? "from-green-500 to-emerald-600" : "from-green-700 to-emerald-800" },
        { name: "GraphQL", level: 87, color: isDark ? "from-pink-500 to-rose-600" : "from-pink-600 to-rose-700" },
        { name: "Redis", level: 85, color: isDark ? "from-red-500 to-orange-500" : "from-red-600 to-orange-600" },
        { name: "Django", level: 82, color: isDark ? "from-emerald-500 to-green-600" : "from-emerald-700 to-green-800" }
      ]
    },
    {
      icon: FaCloud,
      title: "Cloud & DevOps",
      description: "Enterprise grade infrastructure and deployment",
      highlight: "Automated CI/CD pipelines",
      technologies: [
        { name: "AWS", level: 93, color: isDark ? "from-orange-400 to-amber-500" : "from-orange-600 to-amber-700" },
        { name: "Docker", level: 91, color: isDark ? "from-blue-400 to-cyan-500" : "from-blue-600 to-cyan-700" },
        { name: "Kubernetes", level: 87, color: isDark ? "from-blue-500 to-indigo-600" : "from-blue-700 to-indigo-800" },
        { name: "Terraform", level: 85, color: isDark ? "from-purple-500 to-violet-600" : "from-purple-700 to-violet-800" },
        { name: "Azure", level: 89, color: isDark ? "from-blue-600 to-sky-600" : "from-blue-800 to-sky-800" },
        { name: "CI/CD", level: 92, color: isDark ? "from-green-500 to-teal-600" : "from-green-700 to-teal-800" }
      ]
    },
    {
      icon: FaRobot,
      title: "AI & Machine Learning",
      description: "Intelligent solutions powered by advanced AI",
      highlight: "Custom ML models & integrations",
      technologies: [
        { name: "TensorFlow", level: 90, color: isDark ? "from-purple-500 to-purple-600" : "from-purple-700 to-purple-800" },
        { name: "OpenAI APIs", level: 92, color: isDark ? "from-emerald-400 to-green-500" : "from-emerald-600 to-green-700" },
        { name: "PyTorch", level: 87, color: isDark ? "from-red-500 to-orange-600" : "from-red-700 to-orange-800" },
        { name: "LangChain", level: 89, color: isDark ? "from-purple-500 to-violet-600" : "from-purple-700 to-violet-800" },
        { name: "Computer Vision", level: 84, color: isDark ? "from-blue-500 to-cyan-600" : "from-blue-700 to-cyan-800" },
        { name: "NLP", level: 86, color: isDark ? "from-pink-500 to-rose-600" : "from-pink-700 to-rose-800" }
      ]
    }
  ];

  const capabilities = [
    {
      icon: FaRocket,
      title: "Rapid Prototyping",
      description: "From concept to MVP in weeks, not months",
      color: isDark ? "from-blue-500 to-cyan-500" : "from-blue-600 to-blue-800"
    },
    {
      icon: FaShieldAlt,
      title: "Enterprise Security",
      description: "SOC2 compliant with end-to-end encryption",
      color: isDark ? "from-green-500 to-emerald-500" : "from-green-600 to-emerald-700"
    },
    {
      icon: LuTrendingUp,
      title: "Scalable Architecture",
      description: "Designed to handle millions of users",
      color: isDark ? "from-purple-500 to-violet-500" : "from-purple-600 to-violet-700"
    },
    {
      icon: FaUsers,
      title: "Team Augmentation",
      description: "Seamless integration with your existing teams",
      color: isDark ? "from-orange-500 to-amber-500" : "from-orange-600 to-amber-700"
    }
  ];

  const clientBenefits = [
    { icon: FaCheckCircle, text: "Reduced time to market by 40%" },
    { icon: FaCheckCircle, text: "Scalable infrastructure saving 30% on cloud costs" },
    { icon: FaCheckCircle, text: "24/7 monitoring and proactive maintenance" },
    { icon: FaCheckCircle, text: "Regular security audits and compliance checks" },
    { icon: FaCheckCircle, text: "Dedicated technical support team" },
    { icon: FaCheckCircle, text: "Future proof technology stack" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 md:pt-24 overflow-x-hidden"
    >
      {/* Hero Section - Mobile Optimized */}
      <AnimatedBackground className="min-h-[90vh] sm:min-h-[85vh] flex items-center justify-center relative bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10">
        <div className="absolute inset-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10 w-full">
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
                <LuSparkles className="w-4 h-4 mr-2" />
                Trusted by industry leaders
              </motion.span>
            
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Technology Solutions That
              <span className={`block mt-2 sm:mt-4 bg-gradient-to-r bg-clip-text text-transparent ${isDark 
                ? 'from-blue-400 via-cyan-400 to-blue-400' 
                : 'from-blue-600 via-blue-700 to-blue-800'}`}>
                Drive Business Growth
              </span>
            </h1>
            
            <p className={`text-base sm:text-lg md:text-xl max-w-4xl mx-auto leading-relaxed transition-colors duration-300 mb-8 sm:mb-12 px-2 sm:px-0 ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>
              We don't just build with technology we solve business challenges. Our expertise transforms 
              complex requirements into scalable, secure, and innovative digital solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <Link
                to="/contact"
                className={`group relative inline-flex items-center justify-center w-full sm:w-auto px-2 py-2 sm:px-6 sm:py-5 rounded-lg sm:rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-xl ${isDark 
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white hover:shadow-cyan-500/30' 
                  : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white hover:shadow-2xl'}`}
              >
                <FaLaptopCode className="w-4 h-4 sm:w-6 sm:h-6 mr-2 sm:mr-3 flex-shrink-0" />
                <span className="truncate">Start Your Tech Journey</span>
                <FaArrowRight className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform flex-shrink-0" />
              </Link>
              
              <div className="flex items-center space-x-4 sm:space-x-6 pt-4 sm:pt-0">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center backdrop-blur-sm flex-shrink-0 ${isDark 
                  ? 'bg-white/10 border border-white/20' 
                  : 'bg-white/80 border border-blue-100 shadow-lg'}`}>
                  <FaGlobe className={`w-6 h-6 sm:w-8 sm:h-8 ${isDark ? 'text-cyan-400' : 'text-blue-600'}`} />
                </div>
                <div className="text-left">
                  <div className={`text-xl sm:text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>50+</div>
                  <div className={`text-xs sm:text-sm ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>Countries Served</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatedBackground>

      {/* Client Benefits Section */}
      <section className={`py-12 sm:py-10 md:py-10 transition-all duration-300 ${isDark ? 'bg-slate-900' : 'bg-gradient-to-b from-white to-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="w-full lg:w-1/2 space-y-6 sm:space-y-8"
            >
              <div>
                <span className={`inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium mb-3 sm:mb-4 ${isDark 
                  ? 'bg-blue-500/20 text-blue-400' 
                  : 'bg-blue-100 text-blue-700'}`}>
                  Client Benefits
                </span>
                <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-4 sm:mb-6 leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Why Choose Our
                  <span className={`block ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>Technology Expertise?</span>
                </h2>
                <p className={`text-sm sm:text-base lg:text-lg ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                  We translate technical excellence into tangible business results. Here's what you can expect:
                </p>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                {clientBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3 sm:space-x-2"
                  >
                    <div className={`flex-shrink-0 w-6 h-6 sm:w-6 sm:h-6 rounded-lg flex items-center justify-center mt-1 md:mt-1.5 ${isDark 
                      ? 'bg-blue-500/20 border border-blue-400/20' 
                      : 'bg-blue-50 border border-blue-100'}`}>
                      <benefit.icon className={`w-3 h-3 sm:w-4 sm:h-4 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                    </div>
                    <span className={`text-sm sm:text-base lg:text-lg ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>{benefit.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="w-full lg:w-1/2"
            >
              <div className={`rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 backdrop-blur-sm ${isDark 
                ? 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50' 
                : 'bg-gradient-to-br from-white to-blue-50/50 border border-blue-100 shadow-xl sm:shadow-2xl'}`}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {capabilities.map((capability, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className={`p-4 sm:p-6 rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-105 ${isDark 
                        ? 'bg-slate-800/30 hover:bg-slate-800/50 border border-slate-700/50' 
                        : 'bg-white hover:bg-blue-50 border border-blue-100 shadow-lg'}`}
                    >
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-gradient-to-r ${capability.color} flex items-center justify-center mb-3 sm:mb-4`}>
                        <capability.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                      </div>
                      <h3 className={`text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {capability.title}
                      </h3>
                      <p className={`text-xs sm:text-sm ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                        {capability.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className={`py-10 sm:py-10 md:py-10 transition-all duration-300 ${isDark ? 'bg-slate-900/50' : 'bg-gradient-to-b from-gray-50 to-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-4 sm:mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Our Technology
              <span className={`block ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>Stack & Expertise</span>
            </h2>
            <p className={`text-sm sm:text-base md:text-lg lg:text-lg max-w-3xl mx-auto px-2 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
              Mastery across the entire technology spectrum from frontend to AI
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-6">
            {techCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`group relative rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-500 ${isDark 
                  ? 'bg-gradient-to-b from-slate-800/50 to-slate-900/50 hover:from-slate-800 hover:to-slate-900' 
                  : 'bg-gradient-to-b from-white to-blue-50/50 hover:from-white hover:to-blue-50 shadow-lg hover:shadow-xl'}`}
              >
                {/* Card Header */}
                <div className={`p-4 sm:p-6 md:p-6 border-b ${isDark ? 'border-slate-700/50' : 'border-blue-100'}`}>
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg sm:rounded-xl bg-gradient-to-r ${category.technologies[0].color} flex items-center justify-center mb-4 sm:mb-6`}>
                    <category.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className={`text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {category.title}
                  </h3>
                  <p className={`text-xs sm:text-sm mb-2 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                    {category.description}
                  </p>
                  <span className={`text-xs font-medium px-2 py-1 sm:px-3 sm:py-1 rounded-full ${isDark 
                    ? 'bg-blue-500/20 text-blue-400' 
                    : 'bg-blue-100 text-blue-700'}`}>
                    {category.highlight}
                  </span>
                </div>

                {/* Technology List */}
                <div className="p-4 sm:p-6 md:p-8">
                  <div className="space-y-4 sm:space-y-6">
                    {category.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className="space-y-1 sm:space-y-2">
                        <div className="flex justify-between items-center">
                          <span className={`text-sm sm:text-base font-medium truncate mr-2 ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
                            {tech.name}
                          </span>
                          <span className={`text-xs sm:text-sm font-semibold flex-shrink-0 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                            {tech.level}%
                          </span>
                        </div>
                        <div className={`h-1.5 sm:h-2 rounded-full overflow-hidden ${isDark ? 'bg-slate-700' : 'bg-blue-100'}`}>
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${tech.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: techIndex * 0.1 }}
                            className={`h-full bg-gradient-to-r ${tech.color} rounded-full`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Effect Background */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${isDark 
                  ? 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20' 
                  : 'bg-gradient-to-br from-blue-200/20 to-cyan-200/20'}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Timeline - Mobile Responsive */}
      <section className={`py-12 sm:py-10 md:py-10 relative overflow-hidden ${isDark 
        ? 'bg-gradient-to-br from-slate-900 via-blue-900/10 to-slate-900' 
        : 'bg-gradient-to-br from-blue-50/30 via-white to-cyan-50/30'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-4 sm:mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Technology Evolution
              <span className={`block ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>Journey</span>
            </h2>
            <p className={`text-sm sm:text-base md:text-lg lg:text-lg max-w-3xl mx-auto px-2 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
              Staying ahead of technological curves to deliver future-proof solutions
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line - Mobile: Left aligned, Desktop: Centered */}
            <div className="hidden sm:block absolute left-1/2 transform -translate-x-px w-0.5 sm:w-1 h-full">
              <div className={`absolute inset-0 bg-gradient-to-b ${isDark 
                ? 'from-blue-500 via-cyan-500 to-blue-500' 
                : 'from-blue-600 via-blue-700 to-blue-600'}`} />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent animate-pulse" />
            </div>

            {/* Mobile timeline line (left aligned) */}
            <div className="sm:hidden absolute left-6 w-0.5 h-full">
              <div className={`absolute inset-0 bg-gradient-to-b ${isDark 
                ? 'from-blue-500 via-cyan-500 to-blue-500' 
                : 'from-blue-600 via-blue-700 to-blue-600'}`} />
            </div>

            <div className="space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-10">
              {[
                {
                  year: "2024+",
                  title: "AI-First Era",
                  description: "Integrating generative AI and machine learning into business",
                  technologies: ["LLMs", "Vector DBs", "Edge AI", "Agent Systems"],
                  side: "left",
                  color: isDark ? "from-blue-600 to-cyan-600" : "from-blue-700 to-blue-900"
                },
                {
                  year: "2022-2024", 
                  title: "Cloud-Native Revolution",
                  description: "Embracing serverless and microservices for global scalability",
                  technologies: ["Kubernetes", "Serverless", "Edge", "WASM"],
                  side: "right",
                  color: isDark ? "from-cyan-600 to-blue-600" : "from-cyan-700 to-blue-800"
                },
                {
                  year: "2020-2022",
                  title: "Modern Stack",
                  description: "Adopting React ecosystem and full-stack JavaScript",
                  technologies: ["React", "Node.js", "GraphQL", "Docker"],
                  side: "left",
                  color: isDark ? "from-purple-600 to-blue-600" : "from-purple-700 to-blue-700"
                },
                {
                  year: "2018-2020",
                  title: "DevOps Foundation",
                  description: "Building robust CI/CD pipelines and infrastructure automation",
                  technologies: ["CI/CD", "IaC", "Monitoring", "Security"],
                  side: "right",
                  color: isDark ? "from-blue-600 to-cyan-600" : "from-blue-600 to-cyan-700"
                }
              ].map((period, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`relative flex items-start sm:items-center ${period.side === 'left' ? 'sm:justify-end sm:pr-12 md:pr-24' : 'sm:justify-start sm:pl-12 md:pl-24'}`}
                >
                  {/* Mobile layout: All items left aligned */}
                  <div className={`w-full sm:w-1/2 pl-12 sm:pl-0 ${period.side === 'left' ? 'sm:text-right' : 'sm:text-left'}`}>
                    <div className={`inline-block p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl md:rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${isDark 
                      ? 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 hover:border-blue-500/50' 
                      : 'bg-gradient-to-br from-white/80 to-blue-50/50 border-blue-100 shadow-lg hover:shadow-xl sm:hover:shadow-2xl'}`}>
                      <div className={`text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-2 sm:mb-4 bg-gradient-to-r ${period.color} bg-clip-text text-transparent`}>
                        {period.year}
                      </div>
                      <h3 className={`text-lg sm:text-xl md:text-xl font-bold mb-2 sm:mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {period.title}
                      </h3>
                      <p className={`text-xs sm:text-sm md:text-sm mb-3 sm:mb-4 md:mb-6 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                        {period.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {period.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className={`px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${isDark 
                              ? 'bg-blue-500/20 text-blue-400 hover:bg-blue-500/30' 
                              : 'bg-blue-100 text-blue-700 hover:bg-blue-200'}`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className={`absolute left-6 sm:left-1/2 transform -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 rounded-full border-2 sm:border-3 md:border-4 ${isDark 
                    ? 'bg-blue-500 border-slate-900' 
                    : 'bg-blue-600 border-white'}`}>
                    <div className={`absolute inset-0 rounded-full ${isDark ? 'bg-blue-400' : 'bg-blue-500'} animate-ping opacity-20`} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Mobile Optimized */}
      <section className={`py-12 sm:py-10 md:py-10 relative overflow-hidden ${isDark 
        ? 'bg-gradient-to-br from-blue-900/20 via-slate-900 to-cyan-900/20' 
        : 'bg-gradient-to-br from-blue-600 to-blue-800'}`}>
        {/* Animated background elements - reduced for mobile */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute rounded-full ${isDark ? 'bg-blue-500/10' : 'bg-white/10'}`}
              style={{
                width: Math.random() * 100 + 30,
                height: Math.random() * 100 + 30,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 50 - 25],
                x: [0, Math.random() * 50 - 25],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-4 lg:px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            className={`p-2 sm:p-6 md:p-6 lg:p-6 rounded-xl sm:rounded-2xl md:rounded-3xl backdrop-blur-sm ${isDark 
              ? 'bg-slate-900/40 border border-slate-700/50' 
              : 'bg-white/10 border border-white/20'}`}
          >
            <LuSparkles className={`w-8 h-8 sm:w-10 sm:h-10 md:w-10 md:h-10 mx-auto mb-4 sm:mb-4 md:mb-5 ${isDark ? 'text-cyan-400' : 'text-white'}`} />
            
            <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-4 md:mb-5 ${isDark ? 'text-white' : 'text-white'}`}>
              Ready to Transform Your
              <span className={`block mt-1 sm:mt-2 md:mt-4 ${isDark ? 'text-cyan-400' : 'text-blue-200'}`}>
                Business with Technology?
              </span>
            </h2>
            
            <p className={`text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 md:mb-6 px-2 ${isDark ? 'text-gray-300' : 'text-blue-100'}`}>
              Let's discuss how our technology expertise can accelerate your digital transformation journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 justify-center">
              <Link
                to="/contact"
                className={`group relative px-6 py-3 sm:px-8 sm:py-4 md:px-5 md:py-4 lg:px-6 lg:py-5 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base md:text-lg transition-all duration-300 transform hover:scale-105 ${isDark 
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-cyan-500/30' 
                  : 'bg-white text-blue-700 hover:shadow-xl hover:shadow-white/20'}`}
              >
                <span className="flex items-center justify-center">
                  Start Conversation
                  <FaArrowRight className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform flex-shrink-0" />
                </span>
              </Link>
              
              <Link
                to="/portfolio"
                className={`px-6 py-3 sm:px-8 sm:py-4 md:px-5 md:py-4 lg:px-6 lg:py-5 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base md:text-lg border-2 transition-all duration-300 ${isDark 
                  ? 'border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 hover:shadow-glow' 
                  : 'border-white text-white hover:bg-white/10'}`}
              >
                View Success Stories
              </Link>
            </div>
            
            <p className={`mt-4 sm:mt-6 md:mt-8 text-xs sm:text-sm ${isDark ? 'text-gray-400' : 'text-blue-200/80'}`}>
              Get a free technology assessment and architecture review
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section - Mobile Optimized */}
      <section className={`py-8 sm:py-12 md:py-10 transition-all duration-300 ${isDark ? 'bg-slate-900' : 'bg-gradient-to-b from-white to-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-6">
            {[
              { value: "200+", label: "Projects Delivered", icon: FaLayerGroup },
              { value: "99.9%", label: "Client Satisfaction", icon: FaCheckCircle },
              { value: "50+", label: "Technologies", icon: IoGitBranchOutline },
              { value: "24/7", label: "Support", icon: FaShieldAlt }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-15 rounded-lg sm:rounded-xl md:rounded-2xl mx-auto mb-3 sm:mb-4 md:mb-6 flex items-center justify-center transition-all duration-300 group-hover:scale-105 ${isDark 
                  ? 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/20' 
                  : 'bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100'}`}>
                  <stat.icon className={`w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-10 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                </div>
                <div className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {stat.value}
                </div>
                <div className={`text-xs sm:text-sm md:text-base lg:text-lg font-medium ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Technologies;