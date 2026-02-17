// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { Code, Brain, Users, Zap, MapPin, Clock, DollarSign, Star, ArrowRight, Briefcase, GraduationCap, Home, Coffee, Heart, Target } from 'lucide-react';
// import AnimatedBackground from '../components/AnimatedBackground';
// import { useTheme } from '../contexts/ThemeContext';

// const Careers = () => {
//   const { isDark } = useTheme();

//   const openPositions = [
//     {
//       id: 1,
//       title: "Senior AI/ML Engineer",
//       department: "Artificial Intelligence",
//       type: "Full-time",
//       location: "Silicon Valley, CA",
//       salary: "$150k - $200k",
//       experience: "5+ years",
//       description: "Lead the development of cutting-edge AI solutions, working with transformer models, computer vision, and natural language processing.",
//       requirements: [
//         "PhD/Masters in Computer Science or related field",
//         "Expertise in TensorFlow, PyTorch, and Scikit-learn",
//         "Experience with LLMs and generative AI",
//         "Strong background in machine learning algorithms",
//         "Experience with cloud ML platforms (AWS, Azure)"
//       ],
//       benefits: ["Stock options", "Health & dental", "Flexible PTO", "Learning budget"]
//     },
//     {
//       id: 2,
//       title: "Full-Stack Developer",
//       department: "Engineering",
//       type: "Full-time", 
//       location: "Remote / San Francisco",
//       salary: "$120k - $160k",
//       experience: "3+ years",
//       description: "Build scalable web applications using React, Node.js, and modern cloud technologies. Work on enterprise-grade solutions for Fortune 500 clients.",
//       requirements: [
//         "Strong proficiency in React and Node.js",
//         "Experience with TypeScript and GraphQL",
//         "Knowledge of cloud platforms (AWS/Azure)",
//         "Understanding of microservices architecture",
//         "Experience with containerization (Docker/Kubernetes)"
//       ],
//       benefits: ["Remote work", "Health insurance", "401(k) match", "Tech allowance"]
//     },
//     {
//       id: 3,
//       title: "Cloud Solutions Architect",
//       department: "Infrastructure",
//       type: "Full-time",
//       location: "New York, NY",
//       salary: "$140k - $180k",
//       experience: "4+ years",
//       description: "Design and implement enterprise cloud architectures, focusing on scalability, security, and cost optimization for large-scale deployments.",
//       requirements: [
//         "AWS/Azure certifications required",
//         "Experience with Infrastructure as Code (Terraform)",
//         "Strong background in DevOps practices",
//         "Knowledge of containerization and orchestration",
//         "Experience with monitoring and observability tools"
//       ],
//       benefits: ["Certification budget", "Conference attendance", "Stock options", "Relocation assistance"]
//     },
//     {
//       id: 4,
//       title: "Product Manager - AI Solutions",
//       department: "Product",
//       type: "Full-time",
//       location: "Austin, TX",
//       salary: "$130k - $170k",
//       experience: "4+ years",
//       description: "Drive product strategy for AI-powered solutions, working closely with engineering teams and enterprise clients to define and deliver innovative products.",
//       requirements: [
//         "MBA or equivalent experience in product management",
//         "Understanding of AI/ML technologies and applications",
//         "Experience with enterprise B2B products",
//         "Strong analytical and communication skills",
//         "Track record of successful product launches"
//       ],
//       benefits: ["Product training", "Leadership development", "Flexible schedule", "Annual bonus"]
//     },
//     {
//       id: 5,
//       title: "UI/UX Designer",
//       department: "Design",
//       type: "Contract",
//       location: "Remote",
//       salary: "$80k - $110k",
//       experience: "3+ years",
//       description: "Create intuitive and beautiful user experiences for AI-powered applications. Work on complex enterprise dashboards and consumer-facing AI products.",
//       requirements: [
//         "Portfolio demonstrating UI/UX expertise",
//         "Proficiency in Figma, Adobe Creative Suite",
//         "Experience designing for AI/ML applications",
//         "Understanding of accessibility principles",
//         "Strong prototyping and user testing skills"
//       ],
//       benefits: ["Design software budget", "Portfolio development", "Flexible hours", "Creative freedom"]
//     },
//     {
//       id: 6,
//       title: "DevOps Engineer",
//       department: "Infrastructure",
//       type: "Full-time",
//       location: "Seattle, WA",
//       salary: "$110k - $150k",
//       experience: "3+ years",
//       description: "Build and maintain CI/CD pipelines, automate infrastructure deployment, and ensure system reliability for mission-critical applications.",
//       requirements: [
//         "Experience with CI/CD tools (Jenkins, GitHub Actions)",
//         "Proficiency in Infrastructure as Code (Terraform, Ansible)",
//         "Strong Linux/Unix system administration skills",
//         "Knowledge of monitoring tools (Prometheus, Grafana)",
//         "Experience with container orchestration (Kubernetes)"
//       ],
//       benefits: ["On-call compensation", "Tech allowance", "Training budget", "Health benefits"]
//     }
//   ];

//   const benefits = [
//     {
//       icon: Brain,
//       title: "Innovation-First Culture",
//       description: "Work on cutting-edge AI projects that push the boundaries of what's possible",
//       color: isDark ? "from-blue-500 to-cyan-500" : "from-blue-600 to-blue-800"
//     },
//     {
//       icon: Users,
//       title: "Collaborative Environment",
//       description: "Join a team of world-class engineers, designers, and product experts",
//       color: isDark ? "from-cyan-500 to-blue-500" : "from-blue-700 to-blue-900"
//     },
//     {
//       icon: Star,
//       title: "Growth Opportunities",
//       description: "Continuous learning, mentorship, and career advancement paths",
//       color: isDark ? "from-blue-600 to-purple-500" : "from-blue-800 to-purple-700"
//     },
//     {
//       icon: Zap,
//       title: "Impact at Scale",
//       description: "Your work directly impacts Fortune 500 companies and millions of users",
//       color: isDark ? "from-purple-500 to-blue-600" : "from-purple-700 to-blue-800"
//     }
//   ];

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="pt-20 md:pt-32 overflow-x-hidden"
//     >
//       {/* Hero Section */}
//       <AnimatedBackground className="min-h-[70vh] flex items-center justify-center">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-center"
//           >
//             <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 border transition-all duration-300 ${isDark 
//                 ? 'bg-blue-500/10 border-blue-400/20 text-blue-400 hover:bg-blue-500/20 hover:border-blue-400/30' 
//                 : 'bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100 hover:border-blue-300 shadow-sm'}`}>
//               <Briefcase className="w-4 h-4 mr-2" />
//               Career Opportunities
//             </span>
            
//             <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>
//               Join Our Mission
//               <span className={`block bg-gradient-to-r bg-clip-text text-transparent mt-2 ${isDark 
//                   ? 'from-blue-400 to-cyan-400' 
//                   : 'from-blue-600 to-blue-800'}`}>
//                 Shape the Future
//               </span>
//             </h1>
//             <p className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed transition-colors duration-300 mb-8 ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>
//               Be part of a team that's defining the future of AI and intelligent systems. 
//               Work on groundbreaking projects with the latest technologies and make an impact that matters.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Link
//                 to="/positions"
//                 className={`group relative inline-flex items-center px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${isDark 
//                     ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-lg hover:shadow-blue-500/25' 
//                     : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl'}`}
//               >
//                 <span>View Open Positions</span>
//                 <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                 <div className={`absolute inset-0 rounded-lg blur opacity-30 group-hover:opacity-50 -z-10 ${isDark 
//                     ? 'bg-gradient-to-r from-blue-400 to-cyan-400' 
//                     : 'bg-gradient-to-r from-blue-500 to-blue-600'}`} />
//               </Link>
              
//               <Link
//                 to="/apply"
//                 className={`inline-flex items-center px-8 py-4 border-2 rounded-lg font-semibold transition-all duration-300 ${isDark 
//                     ? 'border-cyan-400/50 text-cyan-400 hover:border-cyan-400 hover:bg-cyan-400/10 hover:shadow-glow' 
//                     : 'border-blue-600/50 text-blue-600 hover:border-blue-600 hover:bg-blue-50 shadow-md hover:shadow-lg'}`}
//               >
//                 Submit Application
//               </Link>
//             </div>
//           </motion.div>
//         </div>
//       </AnimatedBackground>

//       {/* Why Work With Us */}
//       <section className={`py-16 md:py-20 transition-all duration-300 ${isDark ? 'bg-slate-900/30' : 'bg-gray-50/50'}`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-12 md:mb-16"
//           >
//             <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>
//               Why Choose Levitica Technologies?
//             </h2>
//             <p className={`text-lg md:text-xl max-w-3xl mx-auto transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
//               Join a culture that values innovation, collaboration, and continuous growth
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
//             {benefits.map((benefit, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 whileHover={{ y: -5 }}
//                 className={`text-center backdrop-blur-sm border rounded-xl p-6 transition-all duration-300 hover:scale-[1.02] ${isDark 
//                     ? 'bg-slate-800/50 border-slate-700/50 hover:border-blue-400/50 hover:bg-slate-800/70 hover:shadow-glow' 
//                     : 'bg-white/70 border-slate-200/50 hover:border-blue-300/50 hover:bg-white/90 shadow-lg hover:shadow-xl'}`}
//               >
//                 <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${benefit.color} rounded-lg mb-4 opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110`}>
//                   <benefit.icon className="w-6 h-6 text-white" />
//                 </div>
//                 <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>{benefit.title}</h3>
//                 <p className={`text-sm leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>{benefit.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Open Positions */}
//       <section className={`py-16 md:py-20 transition-all duration-300 ${isDark ? 'bg-slate-900/50' : 'bg-white'}`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-12 md:mb-16"
//           >
//             <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>
//               Current Openings
//             </h2>
//             <p className={`text-lg md:text-xl max-w-3xl mx-auto transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
//               Explore opportunities to work with cutting-edge technology and brilliant minds
//             </p>
//           </motion.div>

//           <div className="space-y-6 md:space-y-8">
//             {openPositions.map((position, index) => (
//               <motion.div
//                 key={position.id}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className={`backdrop-blur-sm border rounded-xl p-6 md:p-8 transition-all duration-300 group ${isDark 
//                     ? 'bg-slate-800/50 border-slate-700/50 hover:border-blue-400/30 hover:bg-slate-800/70' 
//                     : 'bg-white/70 border-slate-200/50 hover:border-blue-300/30 hover:bg-white/90 shadow-lg hover:shadow-xl'}`}
//               >
//                 <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
//                   <div className="mb-4 lg:mb-0">
//                     <h3 className={`text-xl md:text-2xl font-semibold mb-2 transition-colors duration-300 ${isDark ? 'text-white group-hover:text-blue-300' : 'text-slate-900 group-hover:text-blue-700'}`}>
//                       {position.title}
//                     </h3>
//                     <div className="flex flex-wrap items-center gap-3 md:gap-4 text-sm">
//                       <span className={`flex items-center transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
//                         <Code className="w-4 h-4 mr-1" />
//                         {position.department}
//                       </span>
//                       <span className={`flex items-center transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
//                         <MapPin className="w-4 h-4 mr-1" />
//                         {position.location}
//                       </span>
//                       <span className={`flex items-center transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
//                         <Clock className="w-4 h-4 mr-1" />
//                         {position.type}
//                       </span>
//                       <span className={`flex items-center transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
//                         <DollarSign className="w-4 h-4 mr-1" />
//                         {position.salary}
//                       </span>
//                     </div>
//                   </div>
                  
//                   <Link
//                     to={`/apply/${position.id}`}
//                     className={`group relative inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${isDark 
//                         ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-lg hover:shadow-blue-500/25' 
//                         : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-md'}`}
//                   >
//                     <span>Apply Now</span>
//                     <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                   </Link>
//                 </div>

//                 <p className={`mb-6 leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>
//                   {position.description}
//                 </p>

//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
//                   <div>
//                     <h4 className={`text-lg font-semibold mb-3 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>Requirements</h4>
//                     <ul className="space-y-2">
//                       {position.requirements.map((req, idx) => (
//                         <li key={idx} className="flex items-start text-sm">
//                           <div className={`w-1.5 h-1.5 rounded-full mr-3 mt-2 flex-shrink-0 ${isDark ? 'bg-blue-400' : 'bg-blue-600'}`} />
//                           <span className={`transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-700'}`}>
//                             {req}
//                           </span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
                  
//                   <div>
//                     <h4 className={`text-lg font-semibold mb-3 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>Benefits</h4>
//                     <div className="flex flex-wrap gap-2">
//                       {position.benefits.map((benefit, idx) => (
//                         <span
//                           key={idx}
//                           className={`px-3 py-1 rounded-full text-sm transition-colors duration-300 ${isDark 
//                             ? 'bg-blue-500/20 text-blue-300' 
//                             : 'bg-blue-100 text-blue-700'}`}
//                         >
//                           {benefit}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Company Culture */}
//       <section className={`py-16 md:py-20 transition-all duration-300 ${isDark 
//           ? 'bg-gradient-to-br from-slate-900 via-blue-900/10 to-slate-900' 
//           : 'bg-gradient-to-br from-gray-50 via-blue-50/20 to-gray-50'}`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-12 md:mb-16"
//           >
//             <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>
//               Our Culture & Values
//             </h2>
//             <p className={`text-lg md:text-xl max-w-3xl mx-auto transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
//               We foster an environment where innovation thrives and every team member can reach their potential
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
//             {[
//               {
//                 title: "Innovation Freedom",
//                 description: "20% time for personal projects and exploration of new technologies. We encourage experimentation and creative problem-solving.",
//                 icon: Brain,
//                 color: isDark ? "from-blue-500 to-cyan-500" : "from-blue-600 to-blue-800"
//               },
//               {
//                 title: "Continuous Learning",
//                 description: "Annual learning budget, conference attendance, and access to cutting-edge courses. We invest in your professional growth.",
//                 icon: GraduationCap,
//                 color: isDark ? "from-cyan-500 to-blue-500" : "from-blue-700 to-blue-900"
//               },
//               {
//                 title: "Work-Life Balance",
//                 description: "Flexible schedules, remote work options, and unlimited PTO. We believe great work happens when you're at your best.",
//                 icon: Home,
//                 color: isDark ? "from-blue-600 to-purple-500" : "from-blue-800 to-purple-700"
//               }
//             ].map((culture, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.2 }}
//                 whileHover={{ y: -5 }}
//                 className={`backdrop-blur-sm border rounded-xl p-6 text-center transition-all duration-300 ${isDark 
//                     ? 'bg-slate-800/30 border-slate-700/30 hover:border-blue-400/50 hover:bg-slate-800/50' 
//                     : 'bg-white/70 border-slate-200/50 hover:border-blue-300/50 hover:bg-white/90 shadow-lg hover:shadow-xl'}`}
//               >
//                 <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${culture.color} rounded-full mb-4`}>
//                   <culture.icon className="w-6 h-6 text-white" />
//                 </div>
//                 <h3 className={`text-xl font-semibold mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>{culture.title}</h3>
//                 <p className={`leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>{culture.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className={`py-16 md:py-20 transition-all duration-300 ${isDark 
//           ? 'bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900' 
//           : 'bg-gradient-to-br from-white via-blue-50/50 to-gray-50'}`}>
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="relative"
//           >
//             {/* Decorative Elements */}
//             <div className={`absolute -top-10 -left-10 w-20 h-20 rounded-full blur-xl opacity-20 ${isDark ? 'bg-blue-500' : 'bg-blue-400'}`} />
//             <div className={`absolute -bottom-10 -right-10 w-32 h-32 rounded-full blur-xl opacity-20 ${isDark ? 'bg-cyan-500' : 'bg-blue-300'}`} />
            
//             <div className="relative z-10">
//               <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>
//                 Ready to Build the Future?
//               </h2>
//               <p className={`text-lg md:text-xl mb-8 leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>
//                 Don't see a position that matches your skills? We're always looking for exceptional talent.
//               </p>
              
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <Link
//                   to="/positions"
//                   className={`group relative inline-flex items-center px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${isDark 
//                       ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-lg hover:shadow-blue-500/25' 
//                       : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl'}`}
//                 >
//                   <Target className="w-5 h-5 mr-2" />
//                   <span>View All Positions</span>
//                   <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                   <div className={`absolute inset-0 rounded-lg blur opacity-30 group-hover:opacity-50 -z-10 ${isDark 
//                       ? 'bg-gradient-to-r from-blue-400 to-cyan-400' 
//                       : 'bg-gradient-to-r from-blue-500 to-blue-600'}`} />
//                 </Link>
                
//                 <Link
//                   to="/apply"
//                   className={`inline-flex items-center px-8 py-4 border-2 rounded-lg font-semibold transition-all duration-300 ${isDark 
//                       ? 'border-cyan-400/50 text-cyan-400 hover:border-cyan-400 hover:bg-cyan-400/10 hover:shadow-glow' 
//                       : 'border-blue-600/50 text-blue-600 hover:border-blue-600 hover:bg-blue-50 shadow-md hover:shadow-lg'}`}
//                 >
//                   Submit General Application
//                 </Link>
//               </div>
              
//               <div className={`mt-8 text-sm transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>
//                 We review applications within 48 hours and provide feedback regardless of the outcome
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Perks & Benefits */}
//       <section className={`py-12 md:py-16 border-t transition-all duration-300 ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
//             {[
//               { value: "Flexible", label: "Work Hours", icon: Clock },
//               { value: "Unlimited", label: "Paid Time Off", icon: Coffee },
//               { value: "Full", label: "Health Coverage", icon: Heart },
//               { value: "$5k", label: "Learning Budget", icon: GraduationCap },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className="text-center"
//               >
//                 <div className="flex justify-center mb-2">
//                   <div className={`p-2 rounded-lg ${isDark ? 'bg-blue-500/20' : 'bg-blue-100'}`}>
//                     <item.icon className={`w-5 h-5 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
//                   </div>
//                 </div>
//                 <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r bg-clip-text text-transparent ${isDark 
//                     ? 'from-blue-400 to-cyan-400' 
//                     : 'from-blue-600 to-blue-700'}`}>
//                   {item.value}
//                 </div>
//                 <div className={`text-sm transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>{item.label}</div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </motion.div>
//   );
// };

// export default Careers;




































// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import { 
//   FaCode, FaBrain, FaUsers, FaBolt, FaMapMarkerAlt, FaClock, 
//   FaDollarSign, FaStar, FaArrowRight, FaBriefcase, FaGraduationCap, 
//   FaHome, FaCoffee, FaHeart, FaBullseye, FaCheck 
// } from 'react-icons/fa';
// import { 
//   RiBrainFill, RiTeamFill, RiFlashlightFill, RiStarFill,
//   RiMapPinLine, RiTimeLine, RiMoneyDollarCircleLine
// } from 'react-icons/ri';
// import AnimatedBackground from '../components/AnimatedBackground';
// import { useTheme } from '../contexts/ThemeContext';
// import initialCareersData from '../data/careersData'; // Import from data file

// const Careers = () => {
//   const { isDark } = useTheme();
//   const [openPositions, setOpenPositions] = useState([]);

//   // Load jobs from localStorage or use initial data
//   useEffect(() => {
//     const storedJobs = localStorage.getItem('leviticaCareersData');
//     if (storedJobs) {
//       try {
//         const parsedJobs = JSON.parse(storedJobs);
//         // Filter only active jobs
//         const activeJobs = parsedJobs.filter(job => job.isActive !== false);
//         setOpenPositions(activeJobs);
//       } catch (error) {
//         console.error('Error parsing careers data:', error);
//         // Fallback to initial data if localStorage has issues
//         const activeJobs = initialCareersData.filter(job => job.isActive !== false);
//         setOpenPositions(activeJobs);
//       }
//     } else {
//       // Use initial data from careersData.js
//       const activeJobs = initialCareersData.filter(job => job.isActive !== false);
//       setOpenPositions(activeJobs);
//     }
//   }, []);

//   const benefits = [
//     {
//       icon: FaBrain,
//       title: "Innovation-First Culture",
//       description: "Work on cutting-edge AI projects that push the boundaries of what's possible",
//       color: isDark ? "from-blue-500 to-cyan-500" : "from-blue-600 to-blue-800"
//     },
//     {
//       icon: FaUsers,
//       title: "Collaborative Environment",
//       description: "Join a team of world-class engineers, designers, and product experts",
//       color: isDark ? "from-cyan-500 to-blue-500" : "from-blue-700 to-blue-900"
//     },
//     {
//       icon: FaStar,
//       title: "Growth Opportunities",
//       description: "Continuous learning, mentorship, and career advancement paths",
//       color: isDark ? "from-blue-600 to-purple-500" : "from-blue-800 to-purple-700"
//     },
//     {
//       icon: FaBolt,
//       title: "Impact at Scale",
//       description: "Your work directly impacts Fortune 500 companies and millions of users",
//       color: isDark ? "from-purple-500 to-blue-600" : "from-purple-700 to-blue-800"
//     }
//   ];

//   // Direct to admin login for now (will be replaced with actual application links)
//   const handleApply = (jobId) => {
//     // For now, just navigate to contact page
//     window.location.href = '/contact';
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="pt-20 md:pt-32 overflow-x-hidden"
//     >
//       {/* Hero Section */}
//       <AnimatedBackground className="min-h-[70vh] flex items-center justify-center">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-center"
//           >
//             <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 border transition-all duration-300 ${isDark 
//                 ? 'bg-blue-500/10 border-blue-400/20 text-blue-400 hover:bg-blue-500/20 hover:border-blue-400/30' 
//                 : 'bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100 hover:border-blue-300 shadow-sm'}`}>
//               <FaBriefcase className="w-4 h-4 mr-2" />
//               Career Opportunities
//             </span>
            
//             <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>
//               Join Our Mission
//               <span className={`block bg-gradient-to-r bg-clip-text text-transparent mt-2 ${isDark 
//                   ? 'from-blue-400 to-cyan-400' 
//                   : 'from-blue-600 to-blue-800'}`}>
//                 Shape the Future
//               </span>
//             </h1>
//             <p className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed transition-colors duration-300 mb-8 ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>
//               Be part of a team that's defining the future of AI and intelligent systems. 
//               Work on groundbreaking projects with the latest technologies and make an impact that matters.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <a
//                 href="#positions"
//                 className={`group relative inline-flex items-center px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${isDark 
//                     ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-lg hover:shadow-blue-500/25' 
//                     : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl'}`}
//               >
//                 <span>View Open Positions</span>
//                 <FaArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                 <div className={`absolute inset-0 rounded-lg blur opacity-30 group-hover:opacity-50 -z-10 ${isDark 
//                     ? 'bg-gradient-to-r from-blue-400 to-cyan-400' 
//                     : 'bg-gradient-to-r from-blue-500 to-blue-600'}`} />
//               </a>
              
//               <Link
//                 to="/contact"
//                 className={`inline-flex items-center px-8 py-4 border-2 rounded-lg font-semibold transition-all duration-300 ${isDark 
//                     ? 'border-cyan-400/50 text-cyan-400 hover:border-cyan-400 hover:bg-cyan-400/10 hover:shadow-glow' 
//                     : 'border-blue-600/50 text-blue-600 hover:border-blue-600 hover:bg-blue-50 shadow-md hover:shadow-lg'}`}
//               >
//                 Submit Application
//               </Link>
//             </div>
//           </motion.div>
//         </div>
//       </AnimatedBackground>

//       {/* Why Work With Us */}
//       <section className={`py-16 md:py-20 transition-all duration-300 ${isDark ? 'bg-slate-900/30' : 'bg-gray-50/50'}`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-12 md:mb-16"
//           >
//             <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>
//               Why Choose Levitica Technologies?
//             </h2>
//             <p className={`text-lg md:text-xl max-w-3xl mx-auto transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
//               Join a culture that values innovation, collaboration, and continuous growth
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
//             {benefits.map((benefit, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 whileHover={{ y: -5 }}
//                 className={`text-center backdrop-blur-sm border rounded-xl p-6 transition-all duration-300 hover:scale-[1.02] ${isDark 
//                     ? 'bg-slate-800/50 border-slate-700/50 hover:border-blue-400/50 hover:bg-slate-800/70 hover:shadow-glow' 
//                     : 'bg-white/70 border-slate-200/50 hover:border-blue-300/50 hover:bg-white/90 shadow-lg hover:shadow-xl'}`}
//               >
//                 <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${benefit.color} rounded-lg mb-4 opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110`}>
//                   <benefit.icon className="w-6 h-6 text-white" />
//                 </div>
//                 <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>{benefit.title}</h3>
//                 <p className={`text-sm leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>{benefit.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Open Positions */}
//       <section id="positions" className={`py-16 md:py-20 transition-all duration-300 ${isDark ? 'bg-slate-900/50' : 'bg-white'}`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-12 md:mb-16"
//           >
//             <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>
//               Current Openings
//             </h2>
//             <p className={`text-lg md:text-xl max-w-3xl mx-auto transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
//               Explore opportunities to work with cutting-edge technology and brilliant minds
//             </p>
//           </motion.div>

//           {openPositions.length === 0 ? (
//             <div className={`text-center py-12 border-2 border-dashed rounded-xl ${isDark ? 'border-slate-700' : 'border-slate-300'}`}>
//               <FaBriefcase className={`w-16 h-16 mx-auto mb-4 ${isDark ? 'text-gray-600' : 'text-slate-400'}`} />
//               <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
//                 No Open Positions Available
//               </h3>
//               <p className={`mb-4 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
//                 Check back later for new opportunities
//               </p>
//               <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-slate-500'}`}>
//                 Or submit a general application through our contact page
//               </p>
//             </div>
//           ) : (
//             <div className="space-y-6 md:space-y-8">
//               {openPositions.map((position, index) => (
//                 <motion.div
//                   key={position.id}
//                   initial={{ opacity: 0, y: 50 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1 }}
//                   className={`backdrop-blur-sm border rounded-xl p-6 md:p-8 transition-all duration-300 group ${isDark 
//                       ? 'bg-slate-800/50 border-slate-700/50 hover:border-blue-400/30 hover:bg-slate-800/70' 
//                       : 'bg-white/70 border-slate-200/50 hover:border-blue-300/30 hover:bg-white/90 shadow-lg hover:shadow-xl'}`}
//                 >
//                   <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
//                     <div className="mb-4 lg:mb-0">
//                       <h3 className={`text-xl md:text-2xl font-semibold mb-2 transition-colors duration-300 ${isDark ? 'text-white group-hover:text-blue-300' : 'text-slate-900 group-hover:text-blue-700'}`}>
//                         {position.title}
//                       </h3>
//                       <div className="flex flex-wrap items-center gap-3 md:gap-4 text-sm">
//                         <span className={`flex items-center transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
//                           <FaCode className="w-4 h-4 mr-1" />
//                           {position.department}
//                         </span>
//                         <span className={`flex items-center transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
//                           <FaMapMarkerAlt className="w-4 h-4 mr-1" />
//                           {position.location}
//                         </span>
//                         <span className={`flex items-center transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
//                           <FaClock className="w-4 h-4 mr-1" />
//                           {position.type}
//                         </span>
//                         <span className={`flex items-center transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
//                           <FaDollarSign className="w-4 h-4 mr-1" />
//                           {position.salary}
//                         </span>
//                       </div>
//                     </div>
                    
//                     <button
//                       onClick={() => handleApply(position.id)}
//                       className={`group relative inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${isDark 
//                           ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-lg hover:shadow-blue-500/25' 
//                           : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-md'}`}
//                     >
//                       <span>Apply Now</span>
//                       <FaArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                     </button>
//                   </div>

//                   <p className={`mb-6 leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>
//                     {position.description}
//                   </p>

//                   <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
//                     <div>
//                       <h4 className={`text-lg font-semibold mb-3 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>Requirements</h4>
//                       <ul className="space-y-2">
//                         {position.requirements.slice(0, 5).map((req, idx) => (
//                           <li key={idx} className="flex items-start text-sm">
//                             <div className={`w-1.5 h-1.5 rounded-full mr-3 mt-2 flex-shrink-0 ${isDark ? 'bg-blue-400' : 'bg-blue-600'}`} />
//                             <span className={`transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-700'}`}>
//                               {req}
//                             </span>
//                           </li>
//                         ))}
//                         {position.requirements.length > 5 && (
//                           <li className={`text-sm ${isDark ? 'text-gray-500' : 'text-slate-500'}`}>
//                             +{position.requirements.length - 5} more requirements
//                           </li>
//                         )}
//                       </ul>
//                     </div>
                    
//                     <div>
//                       <h4 className={`text-lg font-semibold mb-3 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>Benefits</h4>
//                       <div className="flex flex-wrap gap-2">
//                         {position.benefits.slice(0, 4).map((benefit, idx) => (
//                           <span
//                             key={idx}
//                             className={`px-3 py-1 rounded-full text-sm transition-colors duration-300 ${isDark 
//                               ? 'bg-blue-500/20 text-blue-300' 
//                               : 'bg-blue-100 text-blue-700'}`}
//                           >
//                             {benefit}
//                           </span>
//                         ))}
//                         {position.benefits.length > 4 && (
//                           <span className={`px-3 py-1 rounded-full text-sm ${isDark 
//                             ? 'bg-gray-800 text-gray-400' 
//                             : 'bg-gray-100 text-gray-600'}`}
//                           >
//                             +{position.benefits.length - 4} more
//                           </span>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Company Culture */}
//       <section className={`py-16 md:py-20 transition-all duration-300 ${isDark 
//           ? 'bg-gradient-to-br from-slate-900 via-blue-900/10 to-slate-900' 
//           : 'bg-gradient-to-br from-gray-50 via-blue-50/20 to-gray-50'}`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-12 md:mb-16"
//           >
//             <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>
//               Our Culture & Values
//             </h2>
//             <p className={`text-lg md:text-xl max-w-3xl mx-auto transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
//               We foster an environment where innovation thrives and every team member can reach their potential
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
//             {[
//               {
//                 title: "Innovation Freedom",
//                 description: "20% time for personal projects and exploration of new technologies. We encourage experimentation and creative problem-solving.",
//                 icon: FaBrain,
//                 color: isDark ? "from-blue-500 to-cyan-500" : "from-blue-600 to-blue-800"
//               },
//               {
//                 title: "Continuous Learning",
//                 description: "Annual learning budget, conference attendance, and access to cutting-edge courses. We invest in your professional growth.",
//                 icon: FaGraduationCap,
//                 color: isDark ? "from-cyan-500 to-blue-500" : "from-blue-700 to-blue-900"
//               },
//               {
//                 title: "Work-Life Balance",
//                 description: "Flexible schedules, remote work options, and unlimited PTO. We believe great work happens when you're at your best.",
//                 icon: FaHome,
//                 color: isDark ? "from-blue-600 to-purple-500" : "from-blue-800 to-purple-700"
//               }
//             ].map((culture, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.2 }}
//                 whileHover={{ y: -5 }}
//                 className={`backdrop-blur-sm border rounded-xl p-6 text-center transition-all duration-300 ${isDark 
//                     ? 'bg-slate-800/30 border-slate-700/30 hover:border-blue-400/50 hover:bg-slate-800/50' 
//                     : 'bg-white/70 border-slate-200/50 hover:border-blue-300/50 hover:bg-white/90 shadow-lg hover:shadow-xl'}`}
//               >
//                 <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${culture.color} rounded-full mb-4`}>
//                   <culture.icon className="w-6 h-6 text-white" />
//                 </div>
//                 <h3 className={`text-xl font-semibold mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>{culture.title}</h3>
//                 <p className={`leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>{culture.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className={`py-16 md:py-20 transition-all duration-300 ${isDark 
//           ? 'bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900' 
//           : 'bg-gradient-to-br from-white via-blue-50/50 to-gray-50'}`}>
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="relative"
//           >
//             {/* Decorative Elements */}
//             <div className={`absolute -top-10 -left-10 w-20 h-20 rounded-full blur-xl opacity-20 ${isDark ? 'bg-blue-500' : 'bg-blue-400'}`} />
//             <div className={`absolute -bottom-10 -right-10 w-32 h-32 rounded-full blur-xl opacity-20 ${isDark ? 'bg-cyan-500' : 'bg-blue-300'}`} />
            
//             <div className="relative z-10">
//               <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>
//                 Ready to Build the Future?
//               </h2>
//               <p className={`text-lg md:text-xl mb-8 leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>
//                 Don't see a position that matches your skills? We're always looking for exceptional talent.
//               </p>
              
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <a
//                   href="#positions"
//                   className={`group relative inline-flex items-center px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${isDark 
//                       ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-lg hover:shadow-blue-500/25' 
//                       : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl'}`}
//                 >
//                   <FaBullseye className="w-5 h-5 mr-2" />
//                   <span>View All Positions</span>
//                   <FaArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                   <div className={`absolute inset-0 rounded-lg blur opacity-30 group-hover:opacity-50 -z-10 ${isDark 
//                       ? 'bg-gradient-to-r from-blue-400 to-cyan-400' 
//                       : 'bg-gradient-to-r from-blue-500 to-blue-600'}`} />
//                 </a>
                
//                 <Link
//                   to="/contact"
//                   className={`inline-flex items-center px-8 py-4 border-2 rounded-lg font-semibold transition-all duration-300 ${isDark 
//                       ? 'border-cyan-400/50 text-cyan-400 hover:border-cyan-400 hover:bg-cyan-400/10 hover:shadow-glow' 
//                       : 'border-blue-600/50 text-blue-600 hover:border-blue-600 hover:bg-blue-50 shadow-md hover:shadow-lg'}`}
//                 >
//                   Submit General Application
//                 </Link>
//               </div>
              
//               <div className={`mt-8 text-sm transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>
//                 We review applications within 48 hours and provide feedback regardless of the outcome
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Perks & Benefits */}
//       <section className={`py-12 md:py-16 border-t transition-all duration-300 ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
//             {[
//               { value: "Flexible", label: "Work Hours", icon: FaClock },
//               { value: "Unlimited", label: "Paid Time Off", icon: FaCoffee },
//               { value: "Full", label: "Health Coverage", icon: FaHeart },
//               { value: "$5k", label: "Learning Budget", icon: FaGraduationCap },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className="text-center"
//               >
//                 <div className="flex justify-center mb-2">
//                   <div className={`p-2 rounded-lg ${isDark ? 'bg-blue-500/20' : 'bg-blue-100'}`}>
//                     <item.icon className={`w-5 h-5 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
//                   </div>
//                 </div>
//                 <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r bg-clip-text text-transparent ${isDark 
//                     ? 'from-blue-400 to-cyan-400' 
//                     : 'from-blue-600 to-blue-700'}`}>
//                   {item.value}
//                 </div>
//                 <div className={`text-sm transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>{item.label}</div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </motion.div>
//   );
// };

// export default Careers;































import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { 
  FaCode, FaBrain, FaUsers, FaBolt, FaMapMarkerAlt, FaClock, 
  FaDollarSign, FaStar, FaArrowRight, FaBriefcase, FaGraduationCap, 
  FaHome, FaCoffee, FaHeart, FaBullseye, FaCheck 
} from 'react-icons/fa';
import AnimatedBackground from '../components/AnimatedBackground';
import { useTheme } from '../contexts/ThemeContext';
import initialCareersData from '../data/careersData';

const Careers = () => {
  const { isDark } = useTheme();
  const navigate = useNavigate();
  const [openPositions, setOpenPositions] = useState([]);

  // Load jobs from localStorage or use initial data
  useEffect(() => {
    const storedJobs = localStorage.getItem('leviticaCareersData');
    if (storedJobs) {
      try {
        const parsedJobs = JSON.parse(storedJobs);
        // Filter only active jobs
        const activeJobs = parsedJobs.filter(job => job.isActive !== false);
        setOpenPositions(activeJobs);
      } catch (error) {
        console.error('Error parsing careers data:', error);
        // Fallback to initial data if localStorage has issues
        const activeJobs = initialCareersData.filter(job => job.isActive !== false);
        setOpenPositions(activeJobs);
      }
    } else {
      // Use initial data from careersData.js
      const activeJobs = initialCareersData.filter(job => job.isActive !== false);
      setOpenPositions(activeJobs);
    }
  }, []);

  const handleApply = (jobId) => {
    navigate(`/apply/${jobId}`);
  };

  const benefits = [
    {
      icon: FaBrain,
      title: "Innovation-First Culture",
      description: "Work on cutting-edge AI projects that push the boundaries of what's possible",
      color: isDark ? "from-blue-500 to-cyan-500" : "from-blue-600 to-blue-800"
    },
    {
      icon: FaUsers,
      title: "Collaborative Environment",
      description: "Join a team of world-class engineers, designers, and product experts",
      color: isDark ? "from-cyan-500 to-blue-500" : "from-blue-700 to-blue-900"
    },
    {
      icon: FaStar,
      title: "Growth Opportunities",
      description: "Continuous learning, mentorship, and career advancement paths",
      color: isDark ? "from-blue-600 to-purple-500" : "from-blue-800 to-purple-700"
    },
    {
      icon: FaBolt,
      title: "Impact at Scale",
      description: "Your work directly impacts Fortune 500 companies and millions of users",
      color: isDark ? "from-purple-500 to-blue-600" : "from-purple-700 to-blue-800"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20 md:pt-32 overflow-x-hidden"
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
              <FaBriefcase className="w-4 h-4 mr-2" />
              Career Opportunities
            </span>
            
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Join Our Mission
              <span className={`block bg-gradient-to-r bg-clip-text text-transparent mt-2 ${isDark 
                  ? 'from-blue-400 to-cyan-400' 
                  : 'from-blue-600 to-blue-800'}`}>
                Shape the Future
              </span>
            </h1>
            <p className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed transition-colors duration-300 mb-8 ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>
              Be part of a team that's defining the future of AI and intelligent systems. 
              Work on groundbreaking projects with the latest technologies and make an impact that matters.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#positions"
                className={`group relative inline-flex items-center px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${isDark 
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-lg hover:shadow-blue-500/25' 
                    : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl'}`}
              >
                <span>View Open Positions</span>
                <FaArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <div className={`absolute inset-0 rounded-lg blur opacity-30 group-hover:opacity-50 -z-10 ${isDark 
                    ? 'bg-gradient-to-r from-blue-400 to-cyan-400' 
                    : 'bg-gradient-to-r from-blue-500 to-blue-600'}`} />
              </a>
              
              <Link
                to="/apply"
                className={`inline-flex items-center px-8 py-4 border-2 rounded-lg font-semibold transition-all duration-300 ${isDark 
                    ? 'border-cyan-400/50 text-cyan-400 hover:border-cyan-400 hover:bg-cyan-400/10 hover:shadow-glow' 
                    : 'border-blue-600/50 text-blue-600 hover:border-blue-600 hover:bg-blue-50 shadow-md hover:shadow-lg'}`}
              >
                Submit Application
              </Link>
            </div>
          </motion.div>
        </div>
      </AnimatedBackground>

      {/* Why Work With Us */}
      <section className={`py-16 md:py-20 transition-all duration-300 ${isDark ? 'bg-slate-900/30' : 'bg-gray-50/50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Why Choose Levitica Technologies?
            </h2>
            <p className={`text-lg md:text-xl max-w-3xl mx-auto transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
              Join a culture that values innovation, collaboration, and continuous growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`text-center backdrop-blur-sm border rounded-xl p-6 transition-all duration-300 hover:scale-[1.02] ${isDark 
                    ? 'bg-slate-800/50 border-slate-700/50 hover:border-blue-400/50 hover:bg-slate-800/70 hover:shadow-glow' 
                    : 'bg-white/70 border-slate-200/50 hover:border-blue-300/50 hover:bg-white/90 shadow-lg hover:shadow-xl'}`}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${benefit.color} rounded-lg mb-4 opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110`}>
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>{benefit.title}</h3>
                <p className={`text-sm leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className={`py-16 md:py-20 transition-all duration-300 ${isDark ? 'bg-slate-900/50' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Current Openings
            </h2>
            <p className={`text-lg md:text-xl max-w-3xl mx-auto transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
              Explore opportunities to work with cutting-edge technology and brilliant minds
            </p>
          </motion.div>

          {openPositions.length === 0 ? (
            <div className={`text-center py-12 border-2 border-dashed rounded-xl ${isDark ? 'border-slate-700' : 'border-slate-300'}`}>
              <FaBriefcase className={`w-16 h-16 mx-auto mb-4 ${isDark ? 'text-gray-600' : 'text-slate-400'}`} />
              <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                No Open Positions Available
              </h3>
              <p className={`mb-4 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                Check back later for new opportunities
              </p>
              <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-slate-500'}`}>
                Or submit a general application through our contact page
              </p>
            </div>
          ) : (
            <div className="space-y-6 md:space-y-8">
              {openPositions.map((position, index) => (
                <motion.div
                  key={position.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`backdrop-blur-sm border rounded-xl p-6 md:p-8 transition-all duration-300 group ${isDark 
                      ? 'bg-slate-800/50 border-slate-700/50 hover:border-blue-400/30 hover:bg-slate-800/70' 
                      : 'bg-white/70 border-slate-200/50 hover:border-blue-300/30 hover:bg-white/90 shadow-lg hover:shadow-xl'}`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div className="mb-4 lg:mb-0">
                      <h3 className={`text-xl md:text-2xl font-semibold mb-2 transition-colors duration-300 ${isDark ? 'text-white group-hover:text-blue-300' : 'text-slate-900 group-hover:text-blue-700'}`}>
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 md:gap-4 text-sm">
                        <span className={`flex items-center transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                          <FaCode className="w-4 h-4 mr-1" />
                          {position.department}
                        </span>
                        <span className={`flex items-center transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                          <FaMapMarkerAlt className="w-4 h-4 mr-1" />
                          {position.location}
                        </span>
                        <span className={`flex items-center transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                          <FaClock className="w-4 h-4 mr-1" />
                          {position.type}
                        </span>
                        <span className={`flex items-center transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                          <FaDollarSign className="w-4 h-4 mr-1" />
                          {position.salary}
                        </span>
                      </div>
                    </div>
                    
                    <Link
                      to={`/apply/${position.id}`}
                      className={`group relative inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${isDark 
                          ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-lg hover:shadow-blue-500/25' 
                          : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-md'}`}
                    >
                      <span>Apply Now</span>
                      <FaArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  <p className={`mb-6 leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>
                    {position.description}
                  </p>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                    <div>
                      <h4 className={`text-lg font-semibold mb-3 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>Requirements</h4>
                      <ul className="space-y-2">
                        {position.requirements.slice(0, 5).map((req, idx) => (
                          <li key={idx} className="flex items-start text-sm">
                            <div className={`w-1.5 h-1.5 rounded-full mr-3 mt-2 flex-shrink-0 ${isDark ? 'bg-blue-400' : 'bg-blue-600'}`} />
                            <span className={`transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-700'}`}>
                              {req}
                            </span>
                          </li>
                        ))}
                        {position.requirements.length > 5 && (
                          <li className={`text-sm ${isDark ? 'text-gray-500' : 'text-slate-500'}`}>
                            +{position.requirements.length - 5} more requirements
                          </li>
                        )}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className={`text-lg font-semibold mb-3 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>Benefits</h4>
                      <div className="flex flex-wrap gap-2">
                        {position.benefits.slice(0, 4).map((benefit, idx) => (
                          <span
                            key={idx}
                            className={`px-3 py-1 rounded-full text-sm transition-colors duration-300 ${isDark 
                              ? 'bg-blue-500/20 text-blue-300' 
                              : 'bg-blue-100 text-blue-700'}`}
                          >
                            {benefit}
                          </span>
                        ))}
                        {position.benefits.length > 4 && (
                          <span className={`px-3 py-1 rounded-full text-sm ${isDark 
                            ? 'bg-gray-800 text-gray-400' 
                            : 'bg-gray-100 text-gray-600'}`}
                          >
                            +{position.benefits.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Company Culture */}
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
              Our Culture & Values
            </h2>
            <p className={`text-lg md:text-xl max-w-3xl mx-auto transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
              We foster an environment where innovation thrives and every team member can reach their potential
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Innovation Freedom",
                description: "20% time for personal projects and exploration of new technologies. We encourage experimentation and creative problem-solving.",
                icon: FaBrain,
                color: isDark ? "from-blue-500 to-cyan-500" : "from-blue-600 to-blue-800"
              },
              {
                title: "Continuous Learning",
                description: "Annual learning budget, conference attendance, and access to cutting-edge courses. We invest in your professional growth.",
                icon: FaGraduationCap,
                color: isDark ? "from-cyan-500 to-blue-500" : "from-blue-700 to-blue-900"
              },
              {
                title: "Work-Life Balance",
                description: "Flexible schedules, remote work options, and unlimited PTO. We believe great work happens when you're at your best.",
                icon: FaHome,
                color: isDark ? "from-blue-600 to-purple-500" : "from-blue-800 to-purple-700"
              }
            ].map((culture, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className={`backdrop-blur-sm border rounded-xl p-6 text-center transition-all duration-300 ${isDark 
                    ? 'bg-slate-800/30 border-slate-700/30 hover:border-blue-400/50 hover:bg-slate-800/50' 
                    : 'bg-white/70 border-slate-200/50 hover:border-blue-300/50 hover:bg-white/90 shadow-lg hover:shadow-xl'}`}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${culture.color} rounded-full mb-4`}>
                  <culture.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-xl font-semibold mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>{culture.title}</h3>
                <p className={`leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>{culture.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-16 md:py-20 transition-all duration-300 ${isDark 
          ? 'bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900' 
          : 'bg-gradient-to-br from-white via-blue-50/50 to-gray-50'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Decorative Elements */}
            
            <div className="relative z-10">
              <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Ready to Build the Future?
              </h2>
              <p className={`text-lg md:text-xl mb-8 leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>
                Don't see a position that matches your skills? We're always looking for exceptional talent.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#positions"
                  className={`group relative inline-flex items-center px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${isDark 
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-lg hover:shadow-blue-500/25' 
                      : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl'}`}
                >
                  <FaBullseye className="w-5 h-5 mr-2" />
                  <span>View All Positions</span>
                  <FaArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <div className={`absolute inset-0 rounded-lg blur opacity-30 group-hover:opacity-50 -z-10 ${isDark 
                      ? 'bg-gradient-to-r from-blue-400 to-cyan-400' 
                      : 'bg-gradient-to-r from-blue-500 to-blue-600'}`} />
                </a>
                
                <Link
                  to="/apply"
                  className={`inline-flex items-center px-8 py-4 border-2 rounded-lg font-semibold transition-all duration-300 ${isDark 
                      ? 'border-cyan-400/50 text-cyan-400 hover:border-cyan-400 hover:bg-cyan-400/10 hover:shadow-glow' 
                      : 'border-blue-600/50 text-blue-600 hover:border-blue-600 hover:bg-blue-50 shadow-md hover:shadow-lg'}`}
                >
                  Submit General Application
                </Link>
              </div>
              
              <div className={`mt-8 text-sm transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>
                We review applications within 48 hours and provide feedback regardless of the outcome
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Perks & Benefits */}
      <section className={`py-12 md:py-16 border-t transition-all duration-300 ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { value: "Flexible", label: "Work Hours", icon: FaClock },
              { value: "Unlimited", label: "Paid Time Off", icon: FaCoffee },
              { value: "Full", label: "Health Coverage", icon: FaHeart },
              { value: "$5k", label: "Learning Budget", icon: FaGraduationCap },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-2">
                  <div className={`p-2 rounded-lg ${isDark ? 'bg-blue-500/20' : 'bg-blue-100'}`}>
                    <item.icon className={`w-5 h-5 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                  </div>
                </div>
                <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r bg-clip-text text-transparent ${isDark 
                    ? 'from-blue-400 to-cyan-400' 
                    : 'from-blue-600 to-blue-700'}`}>
                  {item.value}
                </div>
                <div className={`text-sm transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Careers;