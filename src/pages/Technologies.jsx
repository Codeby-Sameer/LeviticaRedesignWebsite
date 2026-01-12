// import { motion } from 'framer-motion';
// import { Code, Database, Cloud, Smartphone, Brain, Shield } from 'lucide-react';
// import AnimatedBackground from '../components/AnimatedBackground';

// const Technologies = () => {
//   const techCategories = [
//     {
//       icon: Code,
//       title: "Frontend Technologies",
//       description: "Modern, responsive user interfaces built with cutting-edge frameworks",
//       technologies: [
//         { name: "React", level: 95, color: "from-blue-400 to-blue-600" },
//         { name: "Next.js", level: 92, color: "from-gray-600 to-gray-800" },
//         { name: "Flutter", level: 88, color: "from-blue-400 to-cyan-500" },
//         { name: "Vue.js", level: 85, color: "from-green-400 to-green-600" },
//         { name: "TypeScript", level: 93, color: "from-blue-500 to-blue-700" },
//         { name: "Tailwind CSS", level: 96, color: "from-cyan-400 to-cyan-600" }
//       ]
//     },
//     {
//       icon: Database,
//       title: "Backend & Databases",
//       description: "Scalable server architectures and robust data management systems",
//       technologies: [
//         { name: "Node.js", level: 94, color: "from-green-500 to-green-700" },
//         { name: "Express.js", level: 92, color: "from-gray-600 to-gray-800" },
//         { name: "PostgreSQL", level: 90, color: "from-blue-600 to-blue-800" },
//         { name: "MongoDB", level: 88, color: "from-green-600 to-green-800" },
//         { name: "Redis", level: 85, color: "from-red-500 to-red-700" },
//         { name: "GraphQL", level: 87, color: "from-pink-500 to-pink-700" }
//       ]
//     },
//     {
//       icon: Cloud,
//       title: "Cloud & DevOps",
//       description: "Enterprise-grade cloud infrastructure and automated deployment pipelines",
//       technologies: [
//         { name: "AWS", level: 93, color: "from-orange-400 to-orange-600" },
//         { name: "Azure", level: 89, color: "from-blue-500 to-blue-700" },
//         { name: "Docker", level: 91, color: "from-blue-400 to-blue-600" },
//         { name: "Kubernetes", level: 87, color: "from-blue-600 to-purple-600" },
//         { name: "Terraform", level: 85, color: "from-purple-500 to-purple-700" },
//         { name: "Jenkins", level: 88, color: "from-blue-600 to-blue-800" }
//       ]
//     },
//     {
//       icon: Brain,
//       title: "AI & Machine Learning",
//       description: "Advanced AI frameworks and machine learning platforms",
//       technologies: [
//         { name: "TensorFlow", level: 90, color: "from-orange-500 to-orange-700" },
//         { name: "PyTorch", level: 87, color: "from-red-500 to-orange-600" },
//         { name: "OpenAI APIs", level: 92, color: "from-green-400 to-green-600" },
//         { name: "Scikit-learn", level: 88, color: "from-blue-500 to-blue-700" },
//         { name: "Hugging Face", level: 85, color: "from-yellow-400 to-orange-500" },
//         { name: "LangChain", level: 89, color: "from-purple-500 to-purple-700" }
//       ]
//     },
//     {
//       icon: Smartphone,
//       title: "Mobile Development",
//       description: "Cross-platform mobile solutions for iOS and Android",
//       technologies: [
//         { name: "React Native", level: 91, color: "from-blue-400 to-blue-600" },
//         { name: "Flutter", level: 88, color: "from-blue-400 to-cyan-500" },
//         { name: "iOS (Swift)", level: 82, color: "from-orange-500 to-orange-700" },
//         { name: "Android (Kotlin)", level: 85, color: "from-green-500 to-green-700" },
//         { name: "Expo", level: 89, color: "from-gray-600 to-gray-800" },
//         { name: "PWAs", level: 93, color: "from-purple-500 to-purple-700" }
//       ]
//     },
//     {
//       icon: Shield,
//       title: "Security & Testing",
//       description: "Comprehensive security measures and quality assurance protocols",
//       technologies: [
//         { name: "OAuth 2.0", level: 90, color: "from-blue-600 to-blue-800" },
//         { name: "JWT", level: 92, color: "from-green-500 to-green-700" },
//         { name: "Jest", level: 88, color: "from-red-500 to-red-700" },
//         { name: "Cypress", level: 85, color: "from-green-600 to-green-800" },
//         { name: "SonarQube", level: 83, color: "from-blue-500 to-blue-700" },
//         { name: "OWASP", level: 87, color: "from-purple-500 to-purple-700" }
//       ]
//     }
//   ];

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="pt-16"
//     >
//       {/* Hero Section */}
//       <AnimatedBackground className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-center mb-16"
//           >
//             <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
//               Technology Stack
//               <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
//                 Innovation at Scale
//               </span>
//             </h1>
//             <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
//               Powered by cutting-edge technologies and frameworks, we build scalable, secure, 
//               and future-ready solutions that drive business transformation.
//             </p>
//           </motion.div>
//         </div>
//       </AnimatedBackground>

//       {/* Technology Categories */}
//       <section className="py-20 bg-slate-900/30">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl font-bold text-white mb-6">
//               Comprehensive Technology Expertise
//             </h2>
//             <p className="text-xl text-gray-400 max-w-3xl mx-auto">
//               From frontend frameworks to AI platforms, we master the full spectrum of modern technologies
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             {techCategories.map((category, categoryIndex) => (
//               <motion.div
//                 key={categoryIndex}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: categoryIndex * 0.1 }}
//                 className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-blue-400/30 transition-all duration-300"
//               >
//                 <div className="flex items-center mb-6">
//                   <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg mr-4">
//                     <category.icon className="w-6 h-6 text-blue-400" />
//                   </div>
//                   <div>
//                     <h3 className="text-2xl font-semibold text-white">{category.title}</h3>
//                     <p className="text-gray-400 text-sm mt-1">{category.description}</p>
//                   </div>
//                 </div>

//                 <div className="space-y-4">
//                   {category.technologies.map((tech, techIndex) => (
//                     <motion.div
//                       key={techIndex}
//                       initial={{ opacity: 0, x: -20 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       transition={{ delay: (categoryIndex * 0.1) + (techIndex * 0.05) }}
//                       className="space-y-2"
//                     >
//                       <div className="flex justify-between items-center">
//                         <span className="text-gray-300 font-medium">{tech.name}</span>
//                         <span className="text-blue-400 text-sm">{tech.level}%</span>
//                       </div>
//                       <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
//                         <motion.div
//                           initial={{ width: 0 }}
//                           whileInView={{ width: `${tech.level}%` }}
//                           transition={{ duration: 1, delay: (categoryIndex * 0.1) + (techIndex * 0.05) }}
//                           className={`h-full bg-gradient-to-r ${tech.color} rounded-full`}
//                         />
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Architecture Principles */}
//       <section className="py-20 bg-slate-900/50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl font-bold text-white mb-6">
//               Architecture Principles
//             </h2>
//             <p className="text-xl text-gray-400 max-w-3xl mx-auto">
//               Built on solid architectural foundations for scalability, maintainability, and performance
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               {
//                 title: "Microservices",
//                 description: "Scalable, independently deployable services that enhance system resilience and maintainability.",
//                 icon: "🏗️"
//               },
//               {
//                 title: "Event-Driven",
//                 description: "Reactive architectures that respond to real-time events and data streams efficiently.",
//                 icon: "⚡"
//               },
//               {
//                 title: "Cloud-Native",
//                 description: "Born-in-the-cloud solutions that leverage auto-scaling and distributed computing.",
//                 icon: "☁️"
//               },
//               {
//                 title: "Security-First",
//                 description: "Zero-trust security models with encryption, authentication, and authorization built-in.",
//                 icon: "🛡️"
//               }
//             ].map((principle, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//                 className="text-center bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 rounded-xl p-6 hover:border-blue-400/30 transition-all duration-300"
//               >
//                 <div className="text-4xl mb-4">{principle.icon}</div>
//                 <h3 className="text-xl font-semibold text-white mb-3">{principle.title}</h3>
//                 <p className="text-gray-400 text-sm leading-relaxed">{principle.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Technology Timeline */}
//       <section className="py-20 bg-gradient-to-r from-slate-900 via-blue-900/10 to-slate-900">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl font-bold text-white mb-6">
//               Technology Evolution Journey
//             </h2>
//             <p className="text-xl text-gray-400 max-w-3xl mx-auto">
//               Constantly evolving our technology stack to stay ahead of industry trends
//             </p>
//           </motion.div>

//           <div className="relative">
//             {/* Timeline Line */}
//             <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-cyan-500"></div>

//             <div className="space-y-12">
//               {[
//                 {
//                   year: "2024-2026",
//                   title: "AI-First Architecture",
//                   technologies: ["Large Language Models", "Vector Databases", "Edge AI", "Quantum Computing"],
//                   side: "left"
//                 },
//                 {
//                   year: "2022-2024", 
//                   title: "Cloud-Native Transformation",
//                   technologies: ["Kubernetes", "Serverless", "Edge Computing", "WebAssembly"],
//                   side: "right"
//                 },
//                 {
//                   year: "2020-2022",
//                   title: "Modern Full-Stack",
//                   technologies: ["React Ecosystem", "Node.js", "GraphQL", "Docker"],
//                   side: "left"
//                 },
//                 {
//                   year: "2018-2020",
//                   title: "DevOps Revolution",
//                   technologies: ["CI/CD", "Infrastructure as Code", "Monitoring", "Security"],
//                   side: "right"
//                 }
//               ].map((period, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, x: period.side === 'left' ? -50 : 50 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ delay: index * 0.2 }}
//                   className={`relative flex ${period.side === 'left' ? 'justify-end' : 'justify-start'}`}
//                 >
//                   <div className={`w-5/12 ${period.side === 'left' ? 'pr-8' : 'pl-8'}`}>
//                     <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
//                       <div className="text-blue-400 font-bold text-lg mb-2">{period.year}</div>
//                       <h3 className="text-xl font-semibold text-white mb-3">{period.title}</h3>
//                       <div className="flex flex-wrap gap-2">
//                         {period.technologies.map((tech, techIndex) => (
//                           <span
//                             key={techIndex}
//                             className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
//                           >
//                             {tech}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
                  
//                   {/* Timeline Node */}
//                   <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900"></div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-slate-900/30">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//           >
//             <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
//               Let's Build with Cutting-Edge Tech
//             </h2>
//             <p className="text-xl text-gray-300 mb-8">
//               Leverage our technology expertise to create solutions that scale and adapt to your growing business needs.
//             </p>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg text-white font-semibold hover:from-blue-500 hover:to-cyan-500 transition-all duration-300"
//             >
//               Discuss Your Technology Needs
//             </motion.button>
//           </motion.div>
//         </div>
//       </section>
//     </motion.div>
//   );
// };

// export default Technologies;



























// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { Code, Database, Cloud, Smartphone, Brain, Shield, ArrowRight, Cpu, Zap, Server, Terminal } from 'lucide-react';
// import AnimatedBackground from '../components/AnimatedBackground';
// import { useTheme } from '../contexts/ThemeContext';

// const Technologies = () => {
//   const { isDark } = useTheme();

//   const techCategories = [
//     {
//       icon: Code,
//       title: "Frontend Technologies",
//       description: "Modern, responsive user interfaces built with cutting-edge frameworks",
//       technologies: [
//         { name: "React", level: 95, color: isDark ? "from-blue-400 to-blue-600" : "from-blue-600 to-blue-800" },
//         { name: "Next.js", level: 92, color: isDark ? "from-gray-600 to-gray-800" : "from-gray-700 to-gray-900" },
//         { name: "Flutter", level: 88, color: isDark ? "from-blue-400 to-cyan-500" : "from-blue-600 to-blue-800" },
//         { name: "Vue.js", level: 85, color: isDark ? "from-green-400 to-green-600" : "from-green-600 to-green-800" },
//         { name: "TypeScript", level: 93, color: isDark ? "from-blue-500 to-blue-700" : "from-blue-700 to-blue-900" },
//         { name: "Tailwind CSS", level: 96, color: isDark ? "from-cyan-400 to-cyan-600" : "from-cyan-600 to-cyan-800" }
//       ]
//     },
//     {
//       icon: Database,
//       title: "Backend & Databases",
//       description: "Scalable server architectures and robust data management systems",
//       technologies: [
//         { name: "Node.js", level: 94, color: isDark ? "from-green-500 to-green-700" : "from-green-600 to-green-800" },
//         { name: "Express.js", level: 92, color: isDark ? "from-gray-600 to-gray-800" : "from-gray-700 to-gray-900" },
//         { name: "PostgreSQL", level: 90, color: isDark ? "from-blue-600 to-blue-800" : "from-blue-700 to-blue-900" },
//         { name: "MongoDB", level: 88, color: isDark ? "from-green-600 to-green-800" : "from-green-700 to-green-900" },
//         { name: "Redis", level: 85, color: isDark ? "from-red-500 to-red-700" : "from-red-600 to-red-800" },
//         { name: "GraphQL", level: 87, color: isDark ? "from-pink-500 to-pink-700" : "from-pink-600 to-pink-800" }
//       ]
//     },
//     {
//       icon: Cloud,
//       title: "Cloud & DevOps",
//       description: "Enterprise-grade cloud infrastructure and automated deployment pipelines",
//       technologies: [
//         { name: "AWS", level: 93, color: isDark ? "from-orange-400 to-orange-600" : "from-orange-600 to-orange-800" },
//         { name: "Azure", level: 89, color: isDark ? "from-blue-500 to-blue-700" : "from-blue-700 to-blue-900" },
//         { name: "Docker", level: 91, color: isDark ? "from-blue-400 to-blue-600" : "from-blue-600 to-blue-800" },
//         { name: "Kubernetes", level: 87, color: isDark ? "from-blue-600 to-purple-600" : "from-blue-700 to-purple-800" },
//         { name: "Terraform", level: 85, color: isDark ? "from-purple-500 to-purple-700" : "from-purple-600 to-purple-800" },
//         { name: "Jenkins", level: 88, color: isDark ? "from-blue-600 to-blue-800" : "from-blue-700 to-blue-900" }
//       ]
//     },
//     {
//       icon: Brain,
//       title: "AI & Machine Learning",
//       description: "Advanced AI frameworks and machine learning platforms",
//       technologies: [
//         { name: "TensorFlow", level: 90, color: isDark ? "from-orange-500 to-orange-700" : "from-orange-600 to-orange-800" },
//         { name: "PyTorch", level: 87, color: isDark ? "from-red-500 to-orange-600" : "from-red-600 to-orange-700" },
//         { name: "OpenAI APIs", level: 92, color: isDark ? "from-green-400 to-green-600" : "from-green-600 to-green-800" },
//         { name: "Scikit-learn", level: 88, color: isDark ? "from-blue-500 to-blue-700" : "from-blue-600 to-blue-800" },
//         { name: "Hugging Face", level: 85, color: isDark ? "from-yellow-400 to-orange-500" : "from-yellow-500 to-orange-600" },
//         { name: "LangChain", level: 89, color: isDark ? "from-purple-500 to-purple-700" : "from-purple-600 to-purple-800" }
//       ]
//     },
//     {
//       icon: Smartphone,
//       title: "Mobile Development",
//       description: "Cross-platform mobile solutions for iOS and Android",
//       technologies: [
//         { name: "React Native", level: 91, color: isDark ? "from-blue-400 to-blue-600" : "from-blue-600 to-blue-800" },
//         { name: "Flutter", level: 88, color: isDark ? "from-blue-400 to-cyan-500" : "from-blue-600 to-blue-800" },
//         { name: "iOS (Swift)", level: 82, color: isDark ? "from-orange-500 to-orange-700" : "from-orange-600 to-orange-800" },
//         { name: "Android (Kotlin)", level: 85, color: isDark ? "from-green-500 to-green-700" : "from-green-600 to-green-800" },
//         { name: "Expo", level: 89, color: isDark ? "from-gray-600 to-gray-800" : "from-gray-700 to-gray-900" },
//         { name: "PWAs", level: 93, color: isDark ? "from-purple-500 to-purple-700" : "from-purple-600 to-purple-800" }
//       ]
//     },
//     {
//       icon: Shield,
//       title: "Security & Testing",
//       description: "Comprehensive security measures and quality assurance protocols",
//       technologies: [
//         { name: "OAuth 2.0", level: 90, color: isDark ? "from-blue-600 to-blue-800" : "from-blue-700 to-blue-900" },
//         { name: "JWT", level: 92, color: isDark ? "from-green-500 to-green-700" : "from-green-600 to-green-800" },
//         { name: "Jest", level: 88, color: isDark ? "from-red-500 to-red-700" : "from-red-600 to-red-800" },
//         { name: "Cypress", level: 85, color: isDark ? "from-green-600 to-green-800" : "from-green-700 to-green-900" },
//         { name: "SonarQube", level: 83, color: isDark ? "from-blue-500 to-blue-700" : "from-blue-600 to-blue-800" },
//         { name: "OWASP", level: 87, color: isDark ? "from-purple-500 to-purple-700" : "from-purple-600 to-purple-800" }
//       ]
//     }
//   ];

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="pt-16 overflow-x-hidden"
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
//               <Terminal className="w-4 h-4 mr-2" />
//               Technology Expertise
//             </span>
            
//             <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>
//               Technology Stack
//               <span className={`block bg-gradient-to-r bg-clip-text text-transparent mt-2 ${isDark 
//                   ? 'from-blue-400 to-cyan-400' 
//                   : 'from-blue-600 to-blue-800'}`}>
//                 Innovation at Scale
//               </span>
//             </h1>
//             <p className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed transition-colors duration-300 mb-8 ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>
//               Powered by cutting-edge technologies and frameworks, we build scalable, secure, 
//               and future-ready solutions that drive business transformation.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Link
//                 to="/contact"
//                 className={`group relative inline-flex items-center px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${isDark 
//                     ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-lg hover:shadow-blue-500/25' 
//                     : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl'}`}
//               >
//                 <span>Discuss Your Tech Needs</span>
//                 <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                 <div className={`absolute inset-0 rounded-lg blur opacity-30 group-hover:opacity-50 -z-10 ${isDark 
//                     ? 'bg-gradient-to-r from-blue-400 to-cyan-400' 
//                     : 'bg-gradient-to-r from-blue-500 to-blue-600'}`} />
//               </Link>
              
//               <Link
//                 to="/portfolio"
//                 className={`inline-flex items-center px-8 py-4 border-2 rounded-lg font-semibold transition-all duration-300 ${isDark 
//                     ? 'border-cyan-400/50 text-cyan-400 hover:border-cyan-400 hover:bg-cyan-400/10 hover:shadow-glow' 
//                     : 'border-blue-600/50 text-blue-600 hover:border-blue-600 hover:bg-blue-50 shadow-md hover:shadow-lg'}`}
//               >
//                 View Tech Projects
//               </Link>
//             </div>
//           </motion.div>
//         </div>
//       </AnimatedBackground>

//       {/* Technology Categories */}
//       <section className={`py-16 md:py-20 transition-all duration-300 ${isDark ? 'bg-slate-900/30' : 'bg-gray-50/50'}`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-12 md:mb-16"
//           >
//             <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>
//               Comprehensive Technology Expertise
//             </h2>
//             <p className={`text-lg md:text-xl max-w-3xl mx-auto transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
//               From frontend frameworks to AI platforms, we master the full spectrum of modern technologies
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
//             {techCategories.map((category, categoryIndex) => (
//               <motion.div
//                 key={categoryIndex}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: categoryIndex * 0.1 }}
//                 whileHover={{ y: -5 }}
//                 className={`backdrop-blur-sm border rounded-xl p-6 transition-all duration-300 hover:scale-[1.02] ${isDark 
//                     ? 'bg-slate-800/50 border-slate-700/50 hover:border-blue-400/50 hover:bg-slate-800/70 hover:shadow-glow' 
//                     : 'bg-white/70 border-slate-200/50 hover:border-blue-300/50 hover:bg-white/90 shadow-lg hover:shadow-xl'}`}
//               >
//                 <div className="flex items-center mb-6">
//                   <div className={`flex items-center justify-center w-12 h-12 bg-gradient-to-r ${category.technologies[0]?.color || 'from-blue-500/20 to-cyan-500/20'} rounded-lg mr-4 opacity-80 group-hover:opacity-100 transition-opacity`}>
//                     <category.icon className="w-6 h-6 text-white" />
//                   </div>
//                   <div>
//                     <h3 className={`text-xl font-semibold transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>{category.title}</h3>
//                     <p className={`text-sm mt-1 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>{category.description}</p>
//                   </div>
//                 </div>

//                 <div className="space-y-4">
//                   {category.technologies.map((tech, techIndex) => (
//                     <motion.div
//                       key={techIndex}
//                       initial={{ opacity: 0, x: -20 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ delay: (categoryIndex * 0.1) + (techIndex * 0.05) }}
//                       className="space-y-2"
//                     >
//                       <div className="flex justify-between items-center">
//                         <span className={`font-medium transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>{tech.name}</span>
//                         <span className={`text-sm font-semibold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>{tech.level}%</span>
//                       </div>
//                       <div className={`h-2 rounded-full overflow-hidden ${isDark ? 'bg-slate-700' : 'bg-slate-200'}`}>
//                         <motion.div
//                           initial={{ width: 0 }}
//                           whileInView={{ width: `${tech.level}%` }}
//                           viewport={{ once: true }}
//                           transition={{ duration: 1, delay: (categoryIndex * 0.1) + (techIndex * 0.05) }}
//                           className={`h-full bg-gradient-to-r ${tech.color} rounded-full`}
//                         />
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Architecture Principles */}
//       <section className={`py-16 md:py-20 transition-all duration-300 ${isDark ? 'bg-slate-900/50' : 'bg-white'}`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-12 md:mb-16"
//           >
//             <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>
//               Architecture Principles
//             </h2>
//             <p className={`text-lg md:text-xl max-w-3xl mx-auto transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
//               Built on solid architectural foundations for scalability, maintainability, and performance
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
//             {[
//               {
//                 title: "Microservices",
//                 description: "Scalable, independently deployable services that enhance system resilience and maintainability.",
//                 icon: Server,
//                 color: isDark ? "from-blue-500 to-cyan-500" : "from-blue-600 to-blue-800"
//               },
//               {
//                 title: "Event-Driven",
//                 description: "Reactive architectures that respond to real-time events and data streams efficiently.",
//                 icon: Zap,
//                 color: isDark ? "from-cyan-500 to-purple-500" : "from-blue-700 to-purple-700"
//               },
//               {
//                 title: "Cloud-Native",
//                 description: "Born-in-the-cloud solutions that leverage auto-scaling and distributed computing.",
//                 icon: Cloud,
//                 color: isDark ? "from-purple-500 to-blue-600" : "from-purple-600 to-blue-800"
//               },
//               {
//                 title: "Security-First",
//                 description: "Zero-trust security models with encryption, authentication, and authorization built-in.",
//                 icon: Shield,
//                 color: isDark ? "from-blue-600 to-cyan-600" : "from-blue-800 to-cyan-800"
//               }
//             ].map((principle, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 whileHover={{ scale: 1.05 }}
//                 className={`text-center backdrop-blur-sm border rounded-xl p-6 transition-all duration-300 ${isDark 
//                     ? 'bg-slate-800/50 border-slate-700/50 hover:border-blue-400/50 hover:bg-slate-800/70' 
//                     : 'bg-white/70 border-slate-200/50 hover:border-blue-300/50 hover:bg-white/90 shadow-lg hover:shadow-xl'}`}
//               >
//                 <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${principle.color} rounded-full mb-4`}>
//                   <principle.icon className="w-8 h-8 text-white" />
//                 </div>
//                 <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>{principle.title}</h3>
//                 <p className={`text-sm leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>{principle.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Technology Timeline */}
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
//               Technology Evolution Journey
//             </h2>
//             <p className={`text-lg md:text-xl max-w-3xl mx-auto transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
//               Constantly evolving our technology stack to stay ahead of industry trends
//             </p>
//           </motion.div>

//           <div className="relative">
//             {/* Timeline Line */}
//             <div className={`absolute left-1/2 transform -translate-x-px h-full w-0.5 ${isDark 
//                 ? 'bg-gradient-to-b from-blue-500 to-cyan-500' 
//                 : 'bg-gradient-to-b from-blue-600 to-blue-800'}`}></div>

//             <div className="space-y-8 md:space-y-12">
//               {[
//                 {
//                   year: "2024-2026",
//                   title: "AI-First Architecture",
//                   technologies: ["Large Language Models", "Vector Databases", "Edge AI", "Quantum Computing"],
//                   side: "left",
//                   color: isDark ? "from-blue-600 to-cyan-600" : "from-blue-700 to-blue-900"
//                 },
//                 {
//                   year: "2022-2024", 
//                   title: "Cloud-Native Transformation",
//                   technologies: ["Kubernetes", "Serverless", "Edge Computing", "WebAssembly"],
//                   side: "right",
//                   color: isDark ? "from-cyan-600 to-blue-600" : "from-blue-800 to-blue-900"
//                 },
//                 {
//                   year: "2020-2022",
//                   title: "Modern Full-Stack",
//                   technologies: ["React Ecosystem", "Node.js", "GraphQL", "Docker"],
//                   side: "left",
//                   color: isDark ? "from-purple-600 to-blue-600" : "from-purple-700 to-blue-800"
//                 },
//                 {
//                   year: "2018-2020",
//                   title: "DevOps Revolution",
//                   technologies: ["CI/CD", "Infrastructure as Code", "Monitoring", "Security"],
//                   side: "right",
//                   color: isDark ? "from-blue-600 to-cyan-600" : "from-blue-700 to-cyan-800"
//                 }
//               ].map((period, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, x: period.side === 'left' ? -50 : 50 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.2 }}
//                   className={`relative flex ${period.side === 'left' ? 'justify-end pr-4 md:pr-8 lg:pr-12' : 'justify-start pl-4 md:pl-8 lg:pl-12'}`}
//                 >
//                   <div className={`w-full md:w-5/12`}>
//                     <div className={`backdrop-blur-sm border rounded-xl p-6 transition-all duration-300 ${isDark 
//                         ? 'bg-slate-800/50 border-slate-700/50 hover:border-blue-400/50 hover:bg-slate-800/70' 
//                         : 'bg-white/70 border-slate-200/50 hover:border-blue-300/50 hover:bg-white/90 shadow-lg hover:shadow-xl'}`}>
//                       <div className={`font-bold text-lg mb-2 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>{period.year}</div>
//                       <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>{period.title}</h3>
//                       <div className="flex flex-wrap gap-2">
//                         {period.technologies.map((tech, techIndex) => (
//                           <span
//                             key={techIndex}
//                             className={`px-3 py-1 rounded-full text-sm transition-colors duration-300 ${isDark 
//                               ? 'bg-blue-500/20 text-blue-300' 
//                               : 'bg-blue-100 text-blue-700'}`}
//                           >
//                             {tech}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
                  
//                   {/* Timeline Node */}
//                   <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 ${isDark ? 'bg-blue-500' : 'bg-blue-600'} rounded-full border-4 ${isDark ? 'border-slate-900' : 'border-white'}`}></div>
//                 </motion.div>
//               ))}
//             </div>
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
//                 Let's Build with Cutting-Edge Tech
//               </h2>
//               <p className={`text-lg md:text-xl mb-8 leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>
//                 Leverage our technology expertise to create solutions that scale and adapt to your growing business needs.
//               </p>
              
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <Link
//                   to="/contact"
//                   className={`group relative inline-flex items-center px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${isDark 
//                       ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-lg hover:shadow-blue-500/25' 
//                       : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl'}`}
//                 >
//                   <Cpu className="w-5 h-5 mr-2" />
//                   <span>Discuss Technology Needs</span>
//                   <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                   <div className={`absolute inset-0 rounded-lg blur opacity-30 group-hover:opacity-50 -z-10 ${isDark 
//                       ? 'bg-gradient-to-r from-blue-400 to-cyan-400' 
//                       : 'bg-gradient-to-r from-blue-500 to-blue-600'}`} />
//                 </Link>
                
//                 <Link
//                   to="/case-studies"
//                   className={`inline-flex items-center px-8 py-4 border-2 rounded-lg font-semibold transition-all duration-300 ${isDark 
//                       ? 'border-cyan-400/50 text-cyan-400 hover:border-cyan-400 hover:bg-cyan-400/10 hover:shadow-glow' 
//                       : 'border-blue-600/50 text-blue-600 hover:border-blue-600 hover:bg-blue-50 shadow-md hover:shadow-lg'}`}
//                 >
//                   View Tech Case Studies
//                 </Link>
//               </div>
              
//               <p className={`mt-8 text-sm transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>
//                 Free technology assessment with architecture review
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Tech Stats */}
//       <section className={`py-12 md:py-16 border-t transition-all duration-300 ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
//             {[
//               { value: "50+", label: "Technologies", desc: "In our stack" },
//               { value: "100%", label: "Cloud Native", desc: "Solutions built" },
//               { value: "99.9%", label: "Uptime", desc: "Guaranteed SLA" },
//               { value: "24/7", label: "Support", desc: "For all technologies" },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className="text-center"
//               >
//                 <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r bg-clip-text text-transparent ${isDark 
//                     ? 'from-blue-400 to-cyan-400' 
//                     : 'from-blue-600 to-blue-700'}`}>
//                   {item.value}
//                 </div>
//                 <div className={`font-semibold text-sm md:text-base mb-1 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.label}</div>
//                 <div className={`text-xs transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>{item.desc}</div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </motion.div>
//   );
// };

// export default Technologies;



































import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code, Database, Cloud, Smartphone, Brain, Shield, ArrowRight, Cpu, Zap, Server, Terminal, Sparkles, Layers, GitBranch, Lock, Rocket, TrendingUp, CheckCircle, Users, Globe } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';
import { useTheme } from '../contexts/ThemeContext';

const Technologies = () => {
  const { isDark } = useTheme();

  const techCategories = [
    {
      icon: Code,
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
      icon: Database,
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
      icon: Cloud,
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
      icon: Brain,
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
      icon: Rocket,
      title: "Rapid Prototyping",
      description: "From concept to MVP in weeks, not months",
      color: isDark ? "from-blue-500 to-cyan-500" : "from-blue-600 to-blue-800"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC2 compliant with end-to-end encryption",
      color: isDark ? "from-green-500 to-emerald-500" : "from-green-600 to-emerald-700"
    },
    {
      icon: TrendingUp,
      title: "Scalable Architecture",
      description: "Designed to handle millions of users",
      color: isDark ? "from-purple-500 to-violet-500" : "from-purple-600 to-violet-700"
    },
    {
      icon: Users,
      title: "Team Augmentation",
      description: "Seamless integration with your existing teams",
      color: isDark ? "from-orange-500 to-amber-500" : "from-orange-600 to-amber-700"
    }
  ];

  const clientBenefits = [
    { icon: CheckCircle, text: "Reduced time to market by 40%" },
    { icon: CheckCircle, text: "Scalable infrastructure saving 30% on cloud costs" },
    { icon: CheckCircle, text: "24/7 monitoring and proactive maintenance" },
    { icon: CheckCircle, text: "Regular security audits and compliance checks" },
    { icon: CheckCircle, text: "Dedicated technical support team" },
    { icon: CheckCircle, text: "Future proof technology stack" }
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
                <Sparkles className="w-4 h-4 mr-2" />
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
                <Cpu className="w-4 h-4 sm:w-6 sm:h-6 mr-2 sm:mr-3 flex-shrink-0" />
                <span className="truncate">Start Your Tech Journey</span>
                <ArrowRight className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform flex-shrink-0" />
              </Link>
              
              <div className="flex items-center space-x-4 sm:space-x-6 pt-4 sm:pt-0">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center backdrop-blur-sm flex-shrink-0 ${isDark 
                  ? 'bg-white/10 border border-white/20' 
                  : 'bg-white/80 border border-blue-100 shadow-lg'}`}>
                  <Globe className={`w-6 h-6 sm:w-8 sm:h-8 ${isDark ? 'text-cyan-400' : 'text-blue-600'}`} />
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
            <Sparkles className={`w-8 h-8 sm:w-10 sm:h-10 md:w-10 md:h-10 mx-auto mb-4 sm:mb-4 md:mb-5 ${isDark ? 'text-cyan-400' : 'text-white'}`} />
            
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
                  <ArrowRight className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform flex-shrink-0" />
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
              { value: "200+", label: "Projects Delivered", icon: Layers },
              { value: "99.9%", label: "Client Satisfaction", icon: CheckCircle },
              { value: "50+", label: "Technologies", icon: GitBranch },
              { value: "24/7", label: "Support", icon: Shield }
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