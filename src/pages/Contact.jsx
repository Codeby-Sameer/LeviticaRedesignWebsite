import { motion } from 'framer-motion';
import { useState } from 'react';
import AnimatedBackground from '../components/AnimatedBackground';
import { useTheme } from '../contexts/ThemeContext';
import { FaClock, FaEnvelope, FaGlobe, FaMapLocationDot, FaPaperPlane, FaPhone, FaSignalMessenger } from 'react-icons/fa6';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    // Reset form or show success message
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
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
      color: isDark ? "from-blue-500 to-cyan-500" : "from-blue-600 to-blue-800"
    },
    {
      icon: FaPhone,
      title: "Call Us",
      details: " +91 9032503559",
      subtitle: "Mon-Fri, 9 AM - 6 PM PST",
      color: isDark ? "from-green-500 to-green-500" : "from-green-700 to-green-900"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Visit Us",
      details: "Jain Sadguru Image's Capital Park, Ayyappa Society, Madhapur, Hyderabad, Telangana 500081.",
      subtitle: "Schedule an appointment",
      color: isDark ? "from-purple-600 to-purple-500" : "from-purple-600 to-purple-600"
    },
    {
      icon: FaClock,
      title: "24/7 Support",
      details: "Emergency Hotline",
      subtitle: "+91 9032503559",
      color: isDark ? "from-orange-500 to-orange-600" : "from-orange-700 to-orange-800"
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
      className="pt-24 overflow-x-hidden"
    >
      {/* Hero Section */}
      <AnimatedBackground className="min-h-[60vh] flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 border transition-all duration-300 ${isDark 
                ? 'bg-blue-500/10 border-blue-400/20 text-blue-400 hover:bg-blue-500/20 hover:border-blue-400/30' 
                : 'bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100 hover:border-blue-300 shadow-sm'}`}>
              <FaSignalMessenger className="w-4 h-4 mr-2" />
              Get in Touch
            </span>
            
            <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-3 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Let's Build Intelligent
              <span className={`block bg-gradient-to-r bg-clip-text text-transparent mt-2 pb-3 ${isDark 
                  ? 'from-blue-400 to-cyan-400' 
                  : 'from-blue-600 to-blue-800'}`}>
                Systems Together
              </span>
            </h1>
            <p className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed transition-colors duration-300 mb-8 ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>
              Ready to transform your business with cutting-edge AI and technology solutions? 
              Our team of experts is here to turn your vision into reality.
            </p>
          </motion.div>
        </div>
      </AnimatedBackground>

      {/* Contact Information */}
      <section className={`py-10 md:py-5 transition-all duration-300 ${isDark ? 'bg-slate-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Get in Touch
            </h2>
            <p className={`text-lg md:text-xl max-w-3xl mx-auto transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
              Multiple ways to connect with our team and start your digital transformation journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-20">
            {contactInfo.map((info, index) => (
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
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${info.color} rounded-lg mb-4 opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110`}>
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>{info.title}</h3>
                <p className={`font-medium mb-1 ${isDark ? 'text-blue-300' : 'text-blue-600'}`}>{info.details}</p>
                <p className={`text-sm transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>{info.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className={`py-16 md:py-10 transition-all duration-300 ${isDark ? 'bg-slate-900/50' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className={`text-3xl font-bold mb-8 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Start Your Project
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
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
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="space-y-2"
                  >
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
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="space-y-2"
                  >
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
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="space-y-2"
                  >
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
                      placeholder="+1 (555) 123-4567"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="space-y-2"
                >
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
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="space-y-2"
                >
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
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={`w-full flex items-center justify-center px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${isDark 
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-lg hover:shadow-blue-500/25' 
                      : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl'} disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  {isSubmitting ? (
                    <>
                      <div className={`w-5 h-5 border-2 rounded-full animate-spin mr-3 ${isDark ? 'border-white/30 border-t-white' : 'border-white/50 border-t-white'}`} />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="w-5 h-5 mr-2" />
                      Send Message
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
              <div className={`backdrop-blur-sm border rounded-xl p-6 md:p-8 transition-all duration-300 ${isDark 
                  ? 'bg-slate-800/50 border-slate-700/50' 
                  : 'bg-white/70 border-slate-200/50 shadow-lg'}`}>
                <h3 className={`text-2xl font-semibold mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  What Happens Next?
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      step: "01",
                      title: "Initial Consultation",
                      description: "We'll schedule a call to discuss your project requirements and objectives.",
                      color: isDark ? "from-blue-500 to-cyan-500" : "from-blue-600 to-blue-800"
                    },
                    {
                      step: "02",
                      title: "Technical Analysis",
                      description: "Our experts analyze your needs and propose the best technical approach.",
                      color: isDark ? "from-cyan-500 to-blue-500" : "from-blue-700 to-blue-900"
                    },
                    {
                      step: "03",
                      title: "Proposal & Timeline",
                      description: "Receive a detailed proposal with timeline, milestones, and investment.",
                      color: isDark ? "from-blue-600 to-purple-500" : "from-blue-800 to-purple-700"
                    },
                    {
                      step: "04",
                      title: "Project Kickoff",
                      description: "Begin development with our dedicated team and regular progress updates.",
                      color: isDark ? "from-purple-500 to-blue-600" : "from-purple-700 to-blue-800"
                    }
                  ].map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-4"
                    >
                      <div className={`flex items-center justify-center w-8 h-8 bg-gradient-to-r ${step.color} rounded-full text-white text-sm font-bold flex-shrink-0`}>
                        {step.step}
                      </div>
                      <div>
                        <h4 className={`text-lg font-semibold mb-1 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>{step.title}</h4>
                        <p className={`text-sm leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>{step.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className={`backdrop-blur-sm border rounded-xl p-6 md:p-8 transition-all duration-300 ${isDark 
                  ? 'bg-slate-800/50 border-slate-700/50' 
                  : 'bg-white/70 border-slate-200/50 shadow-lg'}`}>
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
      
      {/* Google Map */}
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h2 className='text-3xl font-bold mb-4' ><FaMapLocationDot className='inline-block mr-2 text-purple-600' /> Hyderabad</h2>
        <div className='w-full h-[400px]'>
          <iframe
            title="Hyderabad Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2899.304219739128!2d78.38360507369084!3d17.44697560108866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x873dde7736fdeff1%3A0x88d3af212bf885bc!2sLevitica%20Technologies%20PVT%20LTD!5e1!3m2!1sen!2sin!4v1757932827553!5m2!1sen!2sin"  
            width="100%"
            height="90%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
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
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Frequently Asked Questions
            </h2>
            <p className={`text-lg md:text-xl transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
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
                className={`backdrop-blur-sm border rounded-xl p-6 transition-all duration-300 ${isDark 
                    ? 'bg-slate-800/50 border-slate-700/50' 
                    : 'bg-white/70 border-slate-200/50 shadow-lg'}`}
              >
                <h3 className={`text-lg font-semibold mb-3 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>{faq.question}</h3>
                <p className={`leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stats */}
      {/* <section className={`py-12 md:py-16 border-t transition-all duration-300 ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
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
                <div className={`font-semibold text-sm md:text-base mb-1 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.label}</div>
                <div className={`text-xs transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
    </motion.div>
  );
};

export default Contact;