// import { motion } from 'framer-motion';
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import AnimatedBackground from '../components/AnimatedBackground';
// import { useTheme } from '../contexts/ThemeContext';
// import { FaClock, FaEnvelope, FaGlobe, FaMapLocationDot, FaPaperPlane, FaPhone, FaSignalMessenger } from 'react-icons/fa6';
// import { FaPhoneAlt, FaRocket } from 'react-icons/fa';
// import { FaMapMarkerAlt } from 'react-icons/fa';

// const Contact = () => {
//   const { isDark } = useTheme();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     company: '',
//     phone: '',
//     service: '',
//     message: ''
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     // Simulate form submission
//     await new Promise(resolve => setTimeout(resolve, 2000));
    
//     setIsSubmitting(false);
//     // Reset form or show success message
//     alert('Thank you for your message! We\'ll get back to you within 24 hours.');
//     setFormData({
//       name: '',
//       email: '',
//       company: '',
//       phone: '',
//       service: '',
//       message: ''
//     });
//   };

//   const contactInfo = [
//     {
//       icon: FaEnvelope,
//       title: "Email Us",
//       details: "info@leviticatechnologies.com",
//       subtitle: "Response within 4 hours",
//       color: isDark ? "from-blue-500 to-cyan-500" : "from-blue-600 to-blue-800"
//     },
//     {
//       icon: FaPhone,
//       title: "Call Us",
//       details: " +91 9032503559",
//       subtitle: "Mon-Fri, 9 AM - 6 PM PST",
//       color: isDark ? "from-green-500 to-green-500" : "from-green-700 to-green-900"
//     },
//     {
//       icon: FaMapMarkerAlt,
//       title: "Visit Us",
//       details: "Jain Sadguru Image's Capital Park, Ayyappa Society, Madhapur, Hyderabad, Telangana 500081.",
//       subtitle: "Schedule an appointment",
//       color: isDark ? "from-purple-600 to-purple-500" : "from-purple-600 to-purple-600"
//     },
//     {
//       icon: FaClock,
//       title: "24/7 Support",
//       details: "Emergency Hotline",
//       subtitle: "+91 9032503559",
//       color: isDark ? "from-orange-500 to-orange-600" : "from-orange-700 to-orange-800"
//     }
//   ];

//   const services = [
//     "Custom Software Engineering",
//     "AI & Machine Learning",
//     "Cloud Infrastructure",
//     "Mobile App Development",
//     "Digital Transformation",
//     "Enterprise Consulting",
//     "Other"
//   ];

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="pt-20 md:pt-32 overflow-x-hidden"
//     >
//       {/* Hero Section - Contact Page */}
// <div className="relative min-h-[60vh] py-4 flex items-center justify-center overflow-hidden">
//   {/* Background Image with Overlay */}
//   <div className="absolute inset-0 z-0">
//     {/* Background Image - Technology/Connection Theme */}
//     <div 
//       className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//       style={{
//         backgroundImage: 'url(https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
//         opacity: isDark ? 0.5 : 0.9,
//         backgroundPosition: 'center center',
//       }}
//     />
    
//     {/* Dark/Light Overlay */}
//     <div className={`absolute inset-0 ${
//       isDark 
//         ? 'bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-gray-900/80' 
//         : 'bg-gradient-to-br from-white/85 via-white/75 to-white/85'
//     }`} />
    
    
    
//     {/* Connection/Network Pattern Overlay */}
   
    
   
//   </div>

//   {/* Content */}
//   <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="text-center"
//     >
//       <motion.span
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ delay: 0.2 }}
//         className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 border backdrop-blur-sm transition-all duration-300 hover:scale-105 ${isDark 
//             ? 'bg-blue-500/20 border-blue-400/30 text-blue-400 hover:bg-blue-500/30 hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-500/10' 
//             : 'bg-white/90 border-blue-300/80 text-blue-700 hover:bg-white hover:border-blue-400 shadow-lg hover:shadow-xl'}`}>
//         <FaSignalMessenger className="w-4 h-4 mr-2" />
//         Get in Touch
//       </motion.span>
      
//       <motion.h1
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.3 }}
//         className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-3 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}
//       >
//         Let's Build Intelligent
//         <span className={`block bg-gradient-to-r bg-clip-text text-transparent mt-2 pb-3 ${isDark 
//             ? 'from-blue-400 to-cyan-400' 
//             : 'from-blue-600 to-blue-800'}`}>
//           Systems Together
//         </span>
//       </motion.h1>
      
//       <motion.p
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.4 }}
//         className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed transition-colors duration-300 mb-8 backdrop-blur-sm px-6 py-4 rounded-xl ${isDark 
//             ? 'text-gray-200 bg-gray-900/40 border border-gray-800/50' 
//             : 'text-slate-700 bg-white/70 border border-blue-100/50 shadow-lg'}`}
//       >
//         Ready to transform your business with cutting edge AI and technology solutions? 
//         Our team of experts is here to turn your vision into reality.
//       </motion.p>

//       {/* Contact CTA Section */}
      

//       {/* Get Started Button */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.95 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ delay: 0.6 }}
//         className="mt-10"
//       >
//         <Link
//           to="/contact"
//           className={`group inline-flex items-center px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${isDark 
//               ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-xl hover:shadow-2xl hover:shadow-blue-500/25' 
//               : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-xl hover:shadow-2xl'}`}
//         >
//           <span>Start Your Project Today</span>
//           <FaRocket className="ml-3 w-5 h-5 group-hover:translate-y-[-2px] transition-transform" />
//         </Link>
//       </motion.div>
//     </motion.div>
//   </div>

//   {/* Connection Lines Animation */}
//   <div className="absolute bottom-0 left-0 right-0 h-px overflow-hidden">
//     <div className={`h-full w-full ${isDark 
//         ? 'bg-gradient-to-r from-transparent via-blue-500 to-transparent' 
//         : 'bg-gradient-to-r from-transparent via-blue-400 to-transparent'}`}>
//       <div className="absolute h-full w-32 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer" />
//     </div>
//   </div>
// </div>

//       {/* Contact Information */}
//       <section className={`py-10 md:py-5 transition-all duration-300 ${isDark ? 'bg-slate-900' : 'bg-gray-50'}`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-12 md:mb-16"
//           >
//             <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>
//               Get in Touch
//             </h2>
//             <p className={`text-lg md:text-xl max-w-3xl mx-auto transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
//               Multiple ways to connect with our team and start your digital transformation journey
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-20">
//             {contactInfo.map((info, index) => (
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
//                 <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${info.color} rounded-lg mb-4 opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110`}>
//                   <info.icon className="w-6 h-6 text-white" />
//                 </div>
//                 <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>{info.title}</h3>
//                 <p className={`font-medium mb-1 ${isDark ? 'text-blue-300' : 'text-blue-600'}`}>{info.details}</p>
//                 <p className={`text-sm transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>{info.subtitle}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Form */}
//       <section className={`py-16 md:py-10 transition-all duration-300 ${isDark ? 'bg-slate-900/50' : 'bg-white'}`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
//             {/* Form */}
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//             >
//               <h2 className={`text-3xl font-bold mb-8 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>
//                 Start Your Project
//               </h2>
              
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     className="space-y-2"
//                   >
//                     <label htmlFor="name" className={`text-sm font-medium transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
//                       Full Name *
//                     </label>
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleInputChange}
//                       required
//                       className={`w-full px-4 py-3 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${isDark 
//                         ? 'bg-slate-800/50 border border-slate-600 text-white focus:border-blue-400 focus:ring-blue-400/20' 
//                         : 'bg-white border border-slate-300 text-slate-900 focus:border-blue-500 focus:ring-blue-500/20 shadow-sm'}`}
//                       placeholder="John Doe"
//                     />
//                   </motion.div>
                  
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: 0.1 }}
//                     className="space-y-2"
//                   >
//                     <label htmlFor="email" className={`text-sm font-medium transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
//                       Email Address *
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       required
//                       className={`w-full px-4 py-3 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${isDark 
//                         ? 'bg-slate-800/50 border border-slate-600 text-white focus:border-blue-400 focus:ring-blue-400/20' 
//                         : 'bg-white border border-slate-300 text-slate-900 focus:border-blue-500 focus:ring-blue-500/20 shadow-sm'}`}
//                       placeholder="john@company.com"
//                     />
//                   </motion.div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: 0.2 }}
//                     className="space-y-2"
//                   >
//                     <label htmlFor="company" className={`text-sm font-medium transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
//                       Company
//                     </label>
//                     <input
//                       type="text"
//                       id="company"
//                       name="company"
//                       value={formData.company}
//                       onChange={handleInputChange}
//                       className={`w-full px-4 py-3 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${isDark 
//                         ? 'bg-slate-800/50 border border-slate-600 text-white focus:border-blue-400 focus:ring-blue-400/20' 
//                         : 'bg-white border border-slate-300 text-slate-900 focus:border-blue-500 focus:ring-blue-500/20 shadow-sm'}`}
//                       placeholder="Your Company"
//                     />
//                   </motion.div>
                  
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: 0.3 }}
//                     className="space-y-2"
//                   >
//                     <label htmlFor="phone" className={`text-sm font-medium transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
//                       Phone Number
//                     </label>
//                     <input
//                       type="tel"
//                       id="phone"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleInputChange}
//                       className={`w-full px-4 py-3 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${isDark 
//                         ? 'bg-slate-800/50 border border-slate-600 text-white focus:border-blue-400 focus:ring-blue-400/20' 
//                         : 'bg-white border border-slate-300 text-slate-900 focus:border-blue-500 focus:ring-blue-500/20 shadow-sm'}`}
//                       placeholder="+1 (555) 123-4567"
//                     />
//                   </motion.div>
//                 </div>

//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: 0.4 }}
//                   className="space-y-2"
//                 >
//                   <label htmlFor="service" className={`text-sm font-medium transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
//                     Service of Interest
//                   </label>
//                   <select
//                     id="service"
//                     name="service"
//                     value={formData.service}
//                     onChange={handleInputChange}
//                     className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 ${isDark 
//                       ? 'bg-slate-800/50 border border-slate-600 text-white focus:border-blue-400 focus:ring-blue-400/20' 
//                       : 'bg-white border border-slate-300 text-slate-900 focus:border-blue-500 focus:ring-blue-500/20 shadow-sm'}`}
//                   >
//                     <option value="">Select a service</option>
//                     {services.map((service, index) => (
//                       <option key={index} value={service}>
//                         {service}
//                       </option>
//                     ))}
//                   </select>
//                 </motion.div>

//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: 0.5 }}
//                   className="space-y-2"
//                 >
//                   <label htmlFor="message" className={`text-sm font-medium transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
//                     Project Details *
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleInputChange}
//                     required
//                     rows={6}
//                     className={`w-full px-4 py-3 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 resize-none ${isDark 
//                       ? 'bg-slate-800/50 border border-slate-600 text-white focus:border-blue-400 focus:ring-blue-400/20' 
//                       : 'bg-white border border-slate-300 text-slate-900 focus:border-blue-500 focus:ring-blue-500/20 shadow-sm'}`}
//                     placeholder="Tell us about your project, goals, and requirements..."
//                   />
//                 </motion.div>

//                 <motion.button
//                   type="submit"
//                   disabled={isSubmitting}
//                   whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
//                   whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
//                   className={`w-full flex items-center justify-center px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${isDark 
//                       ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-lg hover:shadow-blue-500/25' 
//                       : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl'} disabled:opacity-50 disabled:cursor-not-allowed`}
//                 >
//                   {isSubmitting ? (
//                     <>
//                       <div className={`w-5 h-5 border-2 rounded-full animate-spin mr-3 ${isDark ? 'border-white/30 border-t-white' : 'border-white/50 border-t-white'}`} />
//                       Sending...
//                     </>
//                   ) : (
//                     <>
//                       <FaPaperPlane className="w-5 h-5 mr-2" />
//                       Send Message
//                     </>
//                   )}
//                 </motion.button>
//               </form>
//             </motion.div>

//             {/* Info Panel */}
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="space-y-8"
//             >
//               <div className={`backdrop-blur-sm border rounded-xl p-6 md:p-8 transition-all duration-300 ${isDark 
//                   ? 'bg-slate-800/50 border-slate-700/50' 
//                   : 'bg-white/70 border-slate-200/50 shadow-lg'}`}>
//                 <h3 className={`text-2xl font-semibold mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>
//                   What Happens Next?
//                 </h3>
//                 <div className="space-y-4">
//                   {[
//                     {
//                       step: "01",
//                       title: "Initial Consultation",
//                       description: "We'll schedule a call to discuss your project requirements and objectives.",
//                       color: isDark ? "from-blue-500 to-cyan-500" : "from-blue-600 to-blue-800"
//                     },
//                     {
//                       step: "02",
//                       title: "Technical Analysis",
//                       description: "Our experts analyze your needs and propose the best technical approach.",
//                       color: isDark ? "from-cyan-500 to-blue-500" : "from-blue-700 to-blue-900"
//                     },
//                     {
//                       step: "03",
//                       title: "Proposal & Timeline",
//                       description: "Receive a detailed proposal with timeline, milestones, and investment.",
//                       color: isDark ? "from-blue-600 to-purple-500" : "from-blue-800 to-purple-700"
//                     },
//                     {
//                       step: "04",
//                       title: "Project Kickoff",
//                       description: "Begin development with our dedicated team and regular progress updates.",
//                       color: isDark ? "from-purple-500 to-blue-600" : "from-purple-700 to-blue-800"
//                     }
//                   ].map((step, index) => (
//                     <motion.div
//                       key={index}
//                       initial={{ opacity: 0, x: 20 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ delay: index * 0.1 }}
//                       className="flex items-start space-x-4"
//                     >
//                       <div className={`flex items-center justify-center w-8 h-8 bg-gradient-to-r ${step.color} rounded-full text-white text-sm font-bold flex-shrink-0`}>
//                         {step.step}
//                       </div>
//                       <div>
//                         <h4 className={`text-lg font-semibold mb-1 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>{step.title}</h4>
//                         <p className={`text-sm leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>{step.description}</p>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>

//               <div className={`backdrop-blur-sm border rounded-xl p-6 md:p-8 transition-all duration-300 ${isDark 
//                   ? 'bg-slate-800/50 border-slate-700/50' 
//                   : 'bg-white/70 border-slate-200/50 shadow-lg'}`}>
//                 <div className="flex items-center mb-4">
//                   <div className={`p-2 rounded-lg ${isDark ? 'bg-blue-500/20' : 'bg-blue-100'} mr-3`}>
//                     <FaGlobe className={`w-5 h-5 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
//                   </div>
//                   <h3 className={`text-xl font-semibold transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>
//                     Global Reach, Local Expertise
//                   </h3>
//                 </div>
//                 <p className={`text-sm leading-relaxed mb-4 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
//                   We work with clients worldwide, offering local expertise and global standards. 
//                   Our distributed team ensures 24/7 support and seamless collaboration across time zones.
//                 </p>
//                 <div className="grid grid-cols-2 gap-4 text-sm">
//                   <div>
//                     <div className={`font-semibold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>North America</div>
//                     <div className={`transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>Silicon Valley HQ</div>
//                   </div>
//                   <div>
//                     <div className={`font-semibold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>Europe</div>
//                     <div className={`transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>Remote Teams</div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>
      
//       {/* Google Map */}
//       <div style={{ textAlign: "center", padding: "20px" }}>
//         <h2 className='text-3xl font-bold mb-4' ><FaMapLocationDot className='inline-block mr-2 text-purple-600' /> Hyderabad</h2>
//         <div className='w-full h-[400px]'>
//           <iframe
//             title="Hyderabad Map"
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2899.304219739128!2d78.38360507369084!3d17.44697560108866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x873dde7736fdeff1%3A0x88d3af212bf885bc!2sLevitica%20Technologies%20PVT%20LTD!5e1!3m2!1sen!2sin!4v1757932827553!5m2!1sen!2sin"  
//             width="100%"
//             height="90%"
//             style={{ border: 0 }}
//             allowFullScreen=""
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//           ></iframe>
//         </div>
//       </div>

//       {/* FAQ Section */}
//       <section className={`py-16 md:py-20 transition-all duration-300 ${isDark 
//           ? 'bg-gradient-to-br from-slate-900 via-blue-900/10 to-slate-900' 
//           : 'bg-gradient-to-br from-gray-50 via-blue-50/20 to-gray-50'}`}>
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-12 md:mb-16"
//           >
//             <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>
//               Frequently Asked Questions
//             </h2>
//             <p className={`text-lg md:text-xl transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
//               Common questions about working with Levitica Technologies
//             </p>
//           </motion.div>

//           <div className="space-y-6">
//             {[
//               {
//                 question: "What is your typical project timeline?",
//                 answer: "Project timelines vary based on complexity. Small projects (2-4 weeks), medium projects (6-12 weeks), large enterprise solutions (3-6 months). We provide detailed timelines during our initial consultation."
//               },
//               {
//                 question: "Do you work with startups or only enterprise clients?",
//                 answer: "We work with organizations of all sizes, from innovative startups to Fortune 500 companies. Our solutions are tailored to fit your specific needs and budget."
//               },
//               {
//                 question: "How do you ensure project success and quality?",
//                 answer: "We follow agile methodologies with regular check-ins, automated testing, code reviews, and continuous integration. You'll receive regular updates and can provide feedback throughout the process."
//               },
//               {
//                 question: "Do you provide ongoing support after project completion?",
//                 answer: "Yes, we offer comprehensive support packages including maintenance, updates, monitoring, and feature enhancements. Our 24/7 support team ensures your systems run smoothly."
//               }
//             ].map((faq, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className={`backdrop-blur-sm border rounded-xl p-6 transition-all duration-300 ${isDark 
//                     ? 'bg-slate-800/50 border-slate-700/50' 
//                     : 'bg-white/70 border-slate-200/50 shadow-lg'}`}
//               >
//                 <h3 className={`text-lg font-semibold mb-3 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>{faq.question}</h3>
//                 <p className={`leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>{faq.answer}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Success Stats */}
//       {/* <section className={`py-12 md:py-16 border-t transition-all duration-300 ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
//             {[
//               { value: "24h", label: "Response Time", desc: "Average response to inquiries" },
//               { value: "95%", label: "Client Retention", desc: "Repeat business rate" },
//               { value: "48h", label: "Proposal Delivery", desc: "After initial consultation" },
//               { value: "100%", label: "Satisfaction", desc: "Guaranteed quality work" },
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
//       </section> */}
//     </motion.div>
//   );
// };

// export default Contact;






































import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ContactLottie from '../components/ContactLottie';
import { useTheme } from '../contexts/ThemeContext';
import { 
  FaClock, 
  FaEnvelope, 
  FaGlobe, 
  FaMapLocationDot, 
  FaPaperPlane, 
  FaPhone, 
  FaSignalMessenger,
  FaRocket,
  FaHeadset
} from 'react-icons/fa6';
import { FaMapMarkerAlt } from 'react-icons/fa';


const Contact = () => {
  const { isDark } = useTheme();
  const [animationState, setAnimationState] = useState('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Reset animation to idle after success
  useEffect(() => {
    if (animationState === 'success') {
      const timer = setTimeout(() => {
        setAnimationState('idle');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [animationState]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setAnimationState('connect'); // Show connecting animation
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setAnimationState('success'); // Show success animation
    
    // Show success message
    alert('✅ Thank you for your message! We\'ll get back to you within 24 hours.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email Us",
      details: "info@leviticatechnologies.com",
      subtitle: "Response within 4 hours",
      color: isDark ? "from-blue-500 to-cyan-500" : "from-blue-600 to-blue-800",
      action: () => window.location.href = 'mailto:info@leviticatechnologies.com'
    },
    {
      icon: FaPhone,
      title: "Call Us",
      details: "+91 9032503559",
      subtitle: "Mon-Fri, 9 AM - 6 PM PST",
      color: isDark ? "from-green-500 to-emerald-500" : "from-green-600 to-green-800",
      action: () => window.location.href = 'tel:+919032503559'
    },
    {
      icon: FaMapMarkerAlt,
      title: "Visit Us",
      details: "Jain Sadguru Image's Capital Park",
      subtitle: "Madhapur, Hyderabad",
      color: isDark ? "from-purple-600 to-pink-500" : "from-purple-600 to-purple-800",
      action: () => setAnimationState('connect')
    },
    {
      icon: FaHeadset,
      title: "24/7 Support",
      details: "Emergency Hotline",
      subtitle: "+91 9032503559",
      color: isDark ? "from-orange-500 to-red-500" : "from-orange-600 to-orange-800",
      action: () => window.location.href = 'tel:+919032503559'
    }
  ];

  const services = [
    "Custom Software Engineering",
    "AI & Machine Learning",
    "Cloud Infrastructure",
    "Mobile App Development",
    "Digital Transformation",
    "Enterprise Consulting",
    "Other"
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20 md:pt-32 overflow-x-hidden"
    >
      {/* Hero Section with Interactive Lottie Animation */}
      <div className="relative min-h-[50vh] py-8 md:py-0 flex items-center justify-center overflow-hidden">
        {/* Background Gradient */}
        <div className={`absolute inset-0 transition-all duration-500 ${
          isDark 
            ? 'bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900' 
            : 'bg-gradient-to-br from-white via-blue-50/30 to-white'
        }`} />
        
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className={`absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNCAyNmg0djEwSDI2VjM0aDEwdi00SDI2aDQtMTBoNHYxMGg0IiBzdHJva2U9IiMwMDc4RjAiIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48L3N2Zz4=')] bg-repeat`} />
        </div>
        
        {/* Lottie Animation Component */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <ContactLottie
            state={animationState}
            opacity={isDark ? 0.3 : 0.4}
            speed={animationState === 'success' ? 0.8 : 1}
            size="xl"
            className="hidden md:block"
          />
          <ContactLottie
            state={animationState}
            opacity={isDark ? 0.3 : 0.3}
            speed={animationState === 'success' ? 0.8 : 1}
            size="lg"
            className="md:hidden"
          />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 border backdrop-blur-sm transition-all duration-300 hover:scale-105 cursor-pointer"
              onClick={() => setAnimationState('connect')}
              style={{
                background: isDark 
                  ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(6, 182, 212, 0.2))' 
                  : 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(6, 182, 212, 0.1))',
                borderColor: isDark ? 'rgba(59, 130, 246, 0.3)' : 'rgba(59, 130, 246, 0.2)',
                color: isDark ? '#93c5fd' : '#1d4ed8'
              }}
            >
              <FaSignalMessenger className="w-4 h-4" />
              <span>Get in Touch</span>
            </motion.div>
            
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl font-bold mb-4 md:mb-4"
            >
              <span className={isDark ? 'text-white' : 'text-slate-900'}>
                Let's Build
              </span>
              <span className="block mt-2 pb-2 bg-gradient-to-r bg-clip-text text-transparent"
                style={{
                  backgroundImage: isDark 
                    ? 'linear-gradient(to right, #60a5fa, #22d3ee)' 
                    : 'linear-gradient(to right, #1d4ed8, #1e40af)'
                }}>
                Intelligent Systems
              </span>
              <span className={isDark ? 'text-white' : 'text-slate-900'}>
                Together
              </span>
            </motion.h1>
            
            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8 md:mb-12 backdrop-blur-sm px-6 py-4 rounded-2xl"
              style={{
                background: isDark 
                  ? 'rgba(30, 41, 59, 0.4)' 
                  : 'rgba(255, 255, 255, 0.7)',
                border: isDark 
                  ? '1px solid rgba(71, 85, 105, 0.3)' 
                  : '1px solid rgba(191, 219, 254, 0.5)',
                color: isDark ? '#e2e8f0' : '#334155',
                boxShadow: isDark 
                  ? '0 8px 32px rgba(0, 0, 0, 0.1)' 
                  : '0 8px 32px rgba(59, 130, 246, 0.1)'
              }}
            >
              Ready to transform your business with cutting-edge AI and technology solutions? 
              Our team of experts is here to turn your vision into reality.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 md:mt-12"
            >
              <button
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="group inline-flex items-center md:px-8 md:py-4 px-4 py-3 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-2xl"
                style={{
                  background: isDark 
                    ? 'linear-gradient(135deg, #2563eb, #0891b2)' 
                    : 'linear-gradient(135deg, #1d4ed8, #1e40af)',
                  color: 'white',
                  boxShadow: isDark 
                    ? '0 20px 40px rgba(37, 99, 235, 0.3)' 
                    : '0 20px 40px rgba(29, 78, 216, 0.3)'
                }}
              >
                <span>Start Your Project Today</span>
                <FaRocket className="ml-3 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Contact Information Section */}
      <section className={`py-12 md:py-16 transition-all duration-300 ${isDark ? 'bg-slate-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Multiple Ways to Connect
            </h2>
            <p className={`text-lg max-w-2xl mx-auto transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
              Choose your preferred method to reach our team
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                onClick={info.action}
                className={`text-center backdrop-blur-sm border rounded-2xl p-6 transition-all duration-300 cursor-pointer ${isDark 
                    ? 'bg-slate-800/50 border-slate-700/50 hover:border-blue-400/50 hover:bg-slate-800/70' 
                    : 'bg-white/80 border-slate-200/50 hover:border-blue-300/50 hover:bg-white shadow-lg hover:shadow-xl'}`}
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${info.color} rounded-xl mb-4 transition-all duration-300 group-hover:scale-110`}>
                  <info.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {info.title}
                </h3>
                <p className={`font-medium mb-1 ${isDark ? 'text-blue-300' : 'text-blue-600'}`}>
                  {info.details}
                </p>
                <p className={`text-sm transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>
                  {info.subtitle}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section 
        id="contact-form"
        className={`py-16 md:py-20 transition-all duration-300 ${isDark ? 'bg-slate-900/50' : 'bg-white'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Form Column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className={`text-3xl font-bold mb-8 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Start Your Digital Transformation
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className={`text-sm font-medium transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${isDark 
                        ? 'bg-slate-800/50 border border-slate-600 text-white focus:border-blue-400 focus:ring-blue-400/20' 
                        : 'bg-white border border-slate-300 text-slate-900 focus:border-blue-500 focus:ring-blue-500/20 shadow-sm'}`}
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className={`text-sm font-medium transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${isDark 
                        ? 'bg-slate-800/50 border border-slate-600 text-white focus:border-blue-400 focus:ring-blue-400/20' 
                        : 'bg-white border border-slate-300 text-slate-900 focus:border-blue-500 focus:ring-blue-500/20 shadow-sm'}`}
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                {/* Company and Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="company" className={`text-sm font-medium transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${isDark 
                        ? 'bg-slate-800/50 border border-slate-600 text-white focus:border-blue-400 focus:ring-blue-400/20' 
                        : 'bg-white border border-slate-300 text-slate-900 focus:border-blue-500 focus:ring-blue-500/20 shadow-sm'}`}
                      placeholder="Your Company"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className={`text-sm font-medium transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${isDark 
                        ? 'bg-slate-800/50 border border-slate-600 text-white focus:border-blue-400 focus:ring-blue-400/20' 
                        : 'bg-white border border-slate-300 text-slate-900 focus:border-blue-500 focus:ring-blue-500/20 shadow-sm'}`}
                      placeholder="+91 9032503559"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div className="space-y-2">
                  <label htmlFor="service" className={`text-sm font-medium transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 ${isDark 
                      ? 'bg-slate-800/50 border border-slate-600 text-white focus:border-blue-400 focus:ring-blue-400/20' 
                      : 'bg-white border border-slate-300 text-slate-900 focus:border-blue-500 focus:ring-blue-500/20 shadow-sm'}`}
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className={`text-sm font-medium transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className={`w-full px-4 py-3 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 resize-none ${isDark 
                      ? 'bg-slate-800/50 border border-slate-600 text-white focus:border-blue-400 focus:ring-blue-400/20' 
                      : 'bg-white border border-slate-300 text-slate-900 focus:border-blue-500 focus:ring-blue-500/20 shadow-sm'}`}
                    placeholder="Tell us about your project, goals, and requirements..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={`w-full flex items-center justify-center px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${isDark 
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-lg hover:shadow-blue-500/25' 
                      : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl'} disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  {isSubmitting ? (
                    <>
                      <div className={`w-5 h-5 border-2 rounded-full animate-spin mr-3 ${isDark ? 'border-white/30 border-t-white' : 'border-white/50 border-t-white'}`} />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="w-5 h-5 mr-2" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Info Panel */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Process Steps */}
              <div className={`backdrop-blur-sm border rounded-2xl p-6 md:p-8 transition-all duration-300 ${isDark 
                  ? 'bg-slate-800/50 border-slate-700/50' 
                  : 'bg-white/80 border-slate-200/50 shadow-lg'}`}>
                <h3 className={`text-2xl font-semibold mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Our 4-Step Process
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      step: "01",
                      title: "Initial Consultation",
                      description: "We'll schedule a call to discuss your project requirements and objectives.",
                      color: "from-blue-500 to-cyan-500"
                    },
                    {
                      step: "02",
                      title: "Technical Analysis",
                      description: "Our experts analyze your needs and propose the best technical approach.",
                      color: "from-cyan-500 to-blue-500"
                    },
                    {
                      step: "03",
                      title: "Proposal & Timeline",
                      description: "Receive a detailed proposal with timeline, milestones, and investment.",
                      color: "from-blue-600 to-purple-500"
                    },
                    {
                      step: "04",
                      title: "Project Kickoff",
                      description: "Begin development with our dedicated team and regular progress updates.",
                      color: "from-purple-500 to-blue-600"
                    }
                  ].map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className={`flex items-center justify-center w-8 h-8 bg-gradient-to-r ${step.color} rounded-full text-white text-sm font-bold flex-shrink-0`}>
                        {step.step}
                      </div>
                      <div>
                        <h4 className={`text-lg font-semibold mb-1 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                          {step.title}
                        </h4>
                        <p className={`text-sm leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Global Reach */}
              <div className={`backdrop-blur-sm border rounded-2xl p-6 md:p-8 transition-all duration-300 ${isDark 
                  ? 'bg-slate-800/50 border-slate-700/50' 
                  : 'bg-white/80 border-slate-200/50 shadow-lg'}`}>
                <div className="flex items-center mb-4">
                  <div className={`p-2 rounded-lg ${isDark ? 'bg-blue-500/20' : 'bg-blue-100'} mr-3`}>
                    <FaGlobe className={`w-5 h-5 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                  </div>
                  <h3 className={`text-xl font-semibold transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Global Reach, Local Expertise
                  </h3>
                </div>
                <p className={`text-sm leading-relaxed mb-4 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                  We work with clients worldwide, offering local expertise and global standards. 
                  Our distributed team ensures 24/7 support and seamless collaboration across time zones.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className={`font-semibold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>North America</div>
                    <div className={`transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>Silicon Valley HQ</div>
                  </div>
                  <div>
                    <div className={`font-semibold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>Europe</div>
                    <div className={`transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>Remote Teams</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <div className={`py-8 md:py-12 ${isDark ? 'bg-slate-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className={`text-3xl font-bold mb-4 flex items-center justify-center gap-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              <FaMapLocationDot className="text-purple-600" />
              Visit Our Hyderabad Office
            </h2>
            <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
              Jain Sadguru Image's Capital Park, Ayyappa Society, Madhapur, Hyderabad
            </p>
          </motion.div>
          
          <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border-2 border-blue-200/50">
            <iframe
              title="Hyderabad Office Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2899.304219739128!2d78.38360507369084!3d17.44697560108866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x873dde7736fdeff1%3A0x88d3af212bf885bc!2sLevitica%20Technologies%20PVT%20LTD!5e1!3m2!1sen!2sin!4v1757932827553!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className={`py-16 md:py-20 transition-all duration-300 ${isDark 
          ? 'bg-gradient-to-br from-slate-900 via-blue-900/10 to-slate-900' 
          : 'bg-gradient-to-br from-gray-50 via-blue-50/20 to-gray-50'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Frequently Asked Questions
            </h2>
            <p className={`text-lg transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
              Common questions about working with Levitica Technologies
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "What is your typical project timeline?",
                answer: "Project timelines vary based on complexity. Small projects (2-4 weeks), medium projects (6-12 weeks), large enterprise solutions (3-6 months). We provide detailed timelines during our initial consultation."
              },
              {
                question: "Do you work with startups or only enterprise clients?",
                answer: "We work with organizations of all sizes, from innovative startups to Fortune 500 companies. Our solutions are tailored to fit your specific needs and budget."
              },
              {
                question: "How do you ensure project success and quality?",
                answer: "We follow agile methodologies with regular check-ins, automated testing, code reviews, and continuous integration. You'll receive regular updates and can provide feedback throughout the process."
              },
              {
                question: "Do you provide ongoing support after project completion?",
                answer: "Yes, we offer comprehensive support packages including maintenance, updates, monitoring, and feature enhancements. Our 24/7 support team ensures your systems run smoothly."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`backdrop-blur-sm border rounded-2xl p-6 transition-all duration-300 ${isDark 
                    ? 'bg-slate-800/50 border-slate-700/50' 
                    : 'bg-white/80 border-slate-200/50 shadow-lg'}`}
              >
                <h3 className={`text-lg font-semibold mb-3 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {faq.question}
                </h3>
                <p className={`leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stats Section */}
      <section className={`py-12 md:py-16 ${isDark ? 'bg-slate-900' : 'bg-blue-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { value: "24h", label: "Response Time", desc: "Average response to inquiries" },
              { value: "95%", label: "Client Retention", desc: "Repeat business rate" },
              { value: "48h", label: "Proposal Delivery", desc: "After initial consultation" },
              { value: "100%", label: "Satisfaction", desc: "Guaranteed quality work" },
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
                <div className={`font-semibold text-sm md:text-base mb-1 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {item.label}
                </div>
                <div className={`text-xs transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>
                  {item.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;