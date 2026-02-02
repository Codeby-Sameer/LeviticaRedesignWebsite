import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedBackground from '../components/AnimatedBackground';
import AISection from '../components/AISection';
import { useTheme } from '../contexts/ThemeContext';
import { useState, useEffect, useRef, useCallback } from 'react';
import { FaArrowRight, FaRobot, FaChartBar, FaClock, FaCloud, FaCrosshairs, FaRocket, FaServer, FaShieldAlt, FaUsers, FaChevronRight, FaAward, FaBolt, FaCode, FaLaptop, FaCheckCircle, FaQuoteRight, FaStar, FaChevronLeft, FaPlay, FaVideo, FaPause } from 'react-icons/fa';

// Image URLs - replace these with your actual images
const IMAGES = {
  aiTechnology: "https://media.istockphoto.com/id/2206472967/photo/ai-cloud-cloud-computing-technology-big-data-concepts.jpg?s=612x612&w=0&k=20&c=1qYFy4w_xPq6wIej9NMNZA6IT43_WU_se7hTVSly4AM=",
  cloudInfrastructure: "https://media.istockphoto.com/id/981901768/photo/cloud-computing.webp?a=1&b=1&s=612x612&w=0&k=20&c=87V521q--2uaBf8C2SMMR2K3Q34T2Qj9-EJrfggPzkA=",
  realTimeAnalytics: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  enterpriseSecurity: "https://media.istockphoto.com/id/2020157664/photo/cyber-security-network-cybersecurity-concept-global-network-security-technology-business.webp?a=1&b=1&s=612x612&w=0&k=20&c=3dJ_LcKoMA7sEzkX3e6W-DEiyz3RCfPrwmzTmjUS4SM=",
  digitalTransformation: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  techTeam: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  innovationLab: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2068&q=80",
  clientSuccess: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
};

const Home = () => {
  const { isDark } = useTheme();
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [activeHeroImage, setActiveHeroImage] = useState(0);
  const heroIntervalRef = useRef(null);

  // my modifications in this area 
const [activeSlide, setActiveSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Carousel items with mixed media
  const carouselItems = [
    {
      id: 1,
      type: 'image',
      src: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2070&auto=format&fit=crop",
      title: "AI Development",
      description: "Building intelligent machine learning models"
    },
    {
      id: 2,
      type: 'video',
      src: "/videos/cloud video.mp4",
      thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2074&auto=format&fit=crop",
      title: "Cloud Infrastructure",
      description: "Scalable cloud-native solutions"
    },
    {
      id: 3,
      type: 'image',
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      title: "Data Analytics",
      description: "Real-time business intelligence"
    }
  ];

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % carouselItems.length);
    setIsPlaying(true);
  }, [carouselItems.length]);

  const prevSlide = useCallback(() => {
    setActiveSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
    setIsPlaying(true);
  }, [carouselItems.length]);

  // Auto-rotate carousel (skips videos to avoid autoplay issues)
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (activeSlide + 1) % carouselItems.length;
      // Skip to next if current is video (to respect autoplay policies)
      if (carouselItems[activeSlide].type === 'video') {
        setActiveSlide(nextIndex);
      } else {
        setActiveSlide(nextIndex);
      }
    }, 8000);
    
    return () => clearInterval(interval);
  }, [activeSlide, carouselItems]);

  // Pause video when not active
  useEffect(() => {
    const videoElement = document.querySelector('video');
    if (videoElement) {
      if (carouselItems[activeSlide].type === 'video' && isPlaying) {
        videoElement.play().catch(e => console.log("Autoplay prevented:", e));
      } else {
        videoElement.pause();
      }
    }
  }, [activeSlide, isPlaying, carouselItems]);

  const imageContentSections = [
    {
      title: "AI-Powered Intelligence Systems",
      description: "We develop cutting edge artificial intelligence solutions that transform business operations. Our AI models are trained on enterprise data to deliver predictive insights, automate complex processes, and enhance decision making capabilities across your organization.",
      features: [
        "Custom machine learning models",
        "Natural language processing",
        "Computer vision solutions",
        "Predictive analytics",
        "AI driven automation"
      ],
      image: IMAGES.aiTechnology,
      icon: FaRobot,
      color: isDark ? "from-blue-500 to-cyan-500" : "from-blue-600 to-blue-700",
      reversed: false
    },
    {
      title: "Scalable Cloud Infrastructure",
      description: "Build resilient and scalable cloud architectures with our expertise. We design and implement cloud solutions that ensure high availability, optimal performance, and cost efficiency for your enterprise applications.",
      features: [
        "Multi cloud architecture",
        "Serverless computing",
        "Container orchestration",
        "Disaster recovery",
        "Cost optimization"
      ],
      image: IMAGES.cloudInfrastructure,
      icon: FaCloud,
      color: isDark ? "from-cyan-500 to-blue-500" : "from-blue-700 to-blue-800",
      reversed: true
    },
    {
      title: "Real time Data Processing",
      description: "Process and analyze streaming data in real time to gain immediate insights. Our real time processing systems enable instant decision making, live monitoring, and proactive response to changing business conditions.",
      features: [
        "Streaming analytics",
        "Real time dashboards",
        "Event driven architecture",
        "IoT data processing",
        "Live monitoring systems"
      ],
      image: IMAGES.realTimeAnalytics,
      icon: FaChartBar,
      color: isDark ? "from-blue-600 to-purple-500" : "from-blue-800 to-indigo-700",
      reversed: false
    },
    {
      title: "Enterprise Security Solutions",
      description: "Protect your digital assets with our comprehensive security framework. We implement advanced cybersecurity measures, compliance protocols, and threat detection systems to safeguard your enterprise infrastructure.",
      features: [
        "Zero trust architecture",
        "Data encryption",
        "Threat intelligence",
        "Compliance management",
        "Security monitoring"
      ],
      image: IMAGES.enterpriseSecurity,
      icon: FaShieldAlt,
      color: isDark ? "from-purple-500 to-blue-600" : "from-indigo-700 to-blue-800",
      reversed: true
    }
  ];

    // Testimonials auto-rotate

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 md:pt-24 w-full"
    >
{/* Hero Section */}
<div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
  {/* Background Pattern */}
  <div className="absolute inset-0 z-0 opacity-5">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/50 to-transparent dark:from-blue-900/20" />
  </div>

  {/* Floating Elements */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-300/20 dark:bg-blue-500/10 rounded-full blur-3xl" />
    <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-300/20 dark:bg-purple-500/10 rounded-full blur-3xl" />
  </div>

  <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      
      {/* Left Column - Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >

        {/* Main Headline */}
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
            <span className="block text-slate-900 dark:text-white">
              Engineering
            </span>
            <span className="block">
              <span className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
                Intelligent Solutions
              </span>
            </span>
            <span className="block text-slate-900 dark:text-white">
              For The Future
            </span>
          </h1>

          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
            We build cutting edge software solutions that drive digital transformation. 
            From AI powered applications to scalable cloud infrastructure, we deliver 
            excellence that powers businesses forward.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-2">
          <Link
            to="/contact"
            className="group relative px-8 py-3.5 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Start Your Project
              <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
          
          <Link
            to="/solutions"
            className="group px-8 py-3.5 rounded-lg font-semibold border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-blue-500 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-500/5 transition-all duration-300"
          >
            <span className="flex items-center justify-center gap-2">
              View Our Solutions
              <FaChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200 dark:border-slate-700">
          {[
            { value: "500+", label: "Projects" },
            { value: "99%", label: "Success Rate" },
            { value: "150+", label: "Clients" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Right Column - Media Carousel */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative"
      >
        {/* Carousel Container */}
        <div className="relative h-[300px] lg:h-[500px] rounded-xl overflow-hidden shadow-2xl ring-1 ring-slate-900/10 dark:ring-slate-100/10">
          {/* Media Items */}
          <div className="relative h-full">
            {[
              {
                id: 1,
                type: 'image',
                src: "https://media.istockphoto.com/id/2218761418/photo/ai-trading-concepts.jpg?s=612x612&w=0&k=20&c=gzuvENH_OB7wlIwm4yBi4ax4VwfASOQ9UNOxJIOaJO0=",
                title: "AI Development",
                description: "Building intelligent machine learning models"
              },
              {
                id: 2,
                type: 'video',
                src: "/videos/cloud video2.mp4", // Replace with your video URL
                thumbnail: "https://media.istockphoto.com/id/1137141260/photo/augmented-reality-interface.jpg?s=612x612&w=0&k=20&c=WrO_0dvnPvpdjWA2ZJaQZKDNAbyZgCNoHB0higIMItM=",
                title: "Cloud Infrastructure",
                description: "Scalable cloud-native solutions"
              },
              {
                id: 3,
                type: 'image',
                src: "https://media.istockphoto.com/id/2096475191/photo/data-analytics-automated-with-ai-technology-big-data-business-analytics-and-artificial.jpg?s=612x612&w=0&k=20&c=JfgQEyufL3bCy2v5z_n8UQMBcx1WZyvstin8UyEeGKU=",
                title: "Data Analytics",
                description: "Real-time business intelligence"
              }
            ].map((item, index) => (
              <motion.div
                key={item.id}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: activeSlide === index ? 1 : 0,
                  scale: activeSlide === index ? 1 : 1.02
                }}
                transition={{ duration: 0.6 }}
              >
                {item.type === 'video' ? (
                  <div className="relative h-full w-full">
                    <video
                      key={activeSlide === index ? 'playing' : 'paused'}
                      className="w-full h-full object-cover"
                      poster={item.thumbnail}
                      autoPlay={activeSlide === index}
                      muted
                      loop
                      playsInline
                    >
                      <source src={item.src} type="video/mp4" />
                    </video>
                    {/* Video Play Button */}
                    {activeSlide !== index && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="p-4 rounded-full bg-black/50 backdrop-blur-sm">
                          <FaPlay className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <img 
                    src={item.src} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                )}
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                
                {/* Media Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-2 h-2 rounded-full ${
                      index === 0 ? 'bg-blue-400' :
                      index === 1 ? 'bg-purple-400' :
                      'bg-green-400'
                    }`} />
                    <span className="text-sm font-semibold text-white/90 uppercase tracking-wider">
                      {item.title}
                    </span>
                    {item.type === 'video' && (
                      <FaVideo className="w-3 h-3 text-white/70 ml-1" />
                    )}
                  </div>
                  <p className="text-lg font-medium text-white">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`w-8 h-1.5 rounded-full transition-all duration-300 ${
                  activeSlide === index 
                    ? 'bg-white' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`View ${carouselItems[index].type}`}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group"
            aria-label="Previous media"
          >
            <FaChevronLeft className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group"
            aria-label="Next media"
          >
            <FaChevronRight className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Media Controls */}
        <div className="flex items-center justify-center gap-4 mt-4">
          <button
            onClick={() => setActiveSlide(0)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeSlide === 0
                ? 'bg-blue-500 text-white'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            AI Showcase
          </button>
          <button
            onClick={() => setActiveSlide(1)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeSlide === 1
                ? 'bg-purple-500 text-white'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            Video
          </button>
          <button
            onClick={() => setActiveSlide(2)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeSlide === 2
                ? 'bg-green-500 text-white'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            Analytics
          </button>
        </div>
      </motion.div>
    </div>

    
  </div>
</div>


      {/* Why Choose Us Section */}
      <section className={`py-10 md:py-10 transition-all duration-300 ${isDark ? 'bg-slate-900/50' : 'bg-white'}`}>
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Why Choose Levitica Technologies?
              </h2>
              <p className={`text-lg md:text-xl max-w-3xl mx-auto transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                We combine technical expertise with business acumen to deliver exceptional results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: FaAward,
                  title: "Proven Expertise",
                  description: "8+ years of experience delivering complex enterprise solutions with measurable ROI",
                  color: isDark ? "from-blue-500 to-cyan-500" : "from-blue-600 to-blue-700"
                },
                {
                  icon: FaBolt,
                  title: "Rapid Deployment",
                  description: "Agile development approach ensures faster time to market for your solutions",
                  color: isDark ? "from-red-500 to-orange-500" : "from-red-700 to-orange-800"
                },
                {
                  icon: FaUsers,
                  title: "Dedicated Teams",
                  description: "Skilled professionals who become an extension of your in house team",
                  color: isDark ? "from-violet-600 to-violet-500" : "from-violet-800 to-violet-700"
                },
                {
                  icon: FaShieldAlt,
                  title: "Enterprise Security",
                  description: "Highest security standards with compliance certifications and regular audits",
                  color: isDark ? "from-green-500 to-green-600" : "from-green-700 to-green-800"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className={`backdrop-blur-sm border rounded-xl p-6 text-center transition-all duration-300 hover:scale-105 ${isDark 
                      ? 'bg-slate-800/50 border-slate-700/50 hover:border-blue-400/50 hover:bg-slate-800/70 hover:shadow-glow' 
                      : 'bg-white/70 border-slate-200/50 hover:border-blue-300/50 hover:bg-white/90 shadow-lg hover:shadow-xl'}`}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${item.color} rounded-full mb-4`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {item.title}
                  </h3>
                  <p className={`text-sm leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Image-Content Sections */}
      <div className="space-y-5 md:space-y-14 py-6 md:py-10">
        {imageContentSections.map((section, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }} 
            className={`transition-all duration-300 ${isDark ? 'bg-slate-900/30' : 'bg-gray-50/50'}`}
          >
            <div className="w-full px-4 sm:px-6 lg:px-8 py-4">
              <div className={`max-w-7xl mx-auto flex flex-col ${section.reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}>
                {/* Image Section - Simplified animation */}
                <div className="lg:w-1/2">
                  <div className="relative group">
                    {/* Image Container */}
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-[16/9]">
                      <img
                        src={section.image}
                        alt={section.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-t ${isDark 
                          ? 'from-slate-900/50 via-slate-900/20 to-transparent' 
                          : 'from-white/10 via-white/10 to-transparent'}`} />
                    </div>
                    
                    {/* Simplified decorative elements - removed negative positioning */}
                    <div className={`absolute bottom-0 left-0 w-32 h-32 ${isDark 
                        ? 'bg-blue-500/10' 
                        : 'bg-blue-600/10'} rounded-full blur-2xl -z-10`} />
                    <div className={`absolute top-0 right-0 w-24 h-24 ${isDark 
                        ? 'bg-cyan-500/10' 
                        : 'bg-blue-400/10'} rounded-full blur-2xl -z-10`} />
                  </div>
                </div>

                {/* Content Section - Simplified animation */}
                <div className="lg:w-1/2">
                  <div className="space-y-6">
                    {/* Badge */}
                    <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border ${isDark 
                        ? 'bg-blue-500/10 border-blue-400/20 text-blue-400' 
                        : 'bg-blue-50 border-blue-200 text-blue-600'}`}>
                      <FaCrosshairs className="w-4 h-4 mr-2" />
                      {section.reversed ? 'Enterprise Solution' : 'Core Technology'}
                    </span>
                    
                    {/* Title */}
                    <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {section.title}
                    </h2>
                    
                    {/* Description */}
                    <p className={`text-lg leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>
                      {section.description}
                    </p>
                    
                    {/* Features */}
                    <div className="space-y-3">
                      {section.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center"
                        >
                          <div className={`w-2 h-2 rounded-full mr-3 ${isDark 
                              ? 'bg-blue-400' 
                              : 'bg-blue-600'}`} />
                          <span className={`transition-colors duration-300 ${isDark 
                              ? 'text-gray-300' 
                              : 'text-slate-700'}`}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    {/* CTA Button */}
                    <div className="pt-4">
                      <Link
                        to="/services"
                        className={`inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${isDark 
                            ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-lg hover:shadow-blue-500/25' 
                            : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-md'}`}
                      >
                        <span>Learn More</span>
                        <FaArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      

      {/* Innovation Process Section */}
      <section className={`py-10 md:py-10 transition-all duration-300 ${isDark 
          ? 'bg-gradient-to-br from-slate-900 via-blue-900/10 to-slate-900' 
          : 'bg-gradient-to-br from-gray-50 via-blue-50/20 to-gray-50'}`}>
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Our Innovation Process
              </h2>
              <p className={`text-lg md:text-xl max-w-3xl mx-auto transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                A structured approach to delivering exceptional technology solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  number: "01",
                  title: "Discovery & Analysis",
                  description: "Deep dive into your business needs, challenges, and objectives",
                  icon: FaCrosshairs
                },
                {
                  number: "02",
                  title: "Solution Design",
                  description: "Architect the optimal technical solution with detailed planning",
                  icon: FaCode
                },
                {
                  number: "03",
                  title: "Development & Testing",
                  description: "Agile development with continuous integration and rigorous testing",
                  icon: FaLaptop
                },
                {
                  number: "04",
                  title: "Deployment & Support",
                  description: "Seamless deployment and ongoing support for long term success",
                  icon: FaShieldAlt
                }
              ].map((step, index) => (
                <div
                  key={index}
                  className={`relative backdrop-blur-sm border rounded-xl p-6 transition-all duration-300 hover:scale-105 ${isDark 
                      ? 'bg-slate-800/50 border-slate-700/50 hover:border-blue-400/50 hover:bg-slate-800/70' 
                      : 'bg-white/70 border-slate-200/50 hover:border-blue-300/50 hover:bg-white/90 shadow-lg hover:shadow-xl'}`}
                >
                  <div className="flex items-center mb-4">
                    <div className={`p-2 rounded-lg ${isDark ? 'bg-blue-500/20' : 'bg-blue-100'} mr-3`}>
                      <step.icon className={`w-5 h-5 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                    </div>
                    <h3 className={`text-xl font-semibold transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {step.title}
                    </h3>
                  </div>
                  <p className={`text-sm leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Section */}
      <AISection />

      {/* Success Stories Section */}
      <section className={`py-10 md:py-10 transition-all duration-300 ${isDark ? 'bg-slate-900/50' : 'bg-white'}`}>
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Success Stories
              </h2>
              <p className={`text-lg md:text-xl max-w-3xl mx-auto transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                Transforming businesses across industries with our technology expertise
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "E-commerce Platform Optimization",
                  description: "Increased conversion rates by 40% through AI-powered personalization",
                  metrics: "40% increase in conversions",
                  color: isDark ? "from-cyan-500 to-cyan-500" : "from-cyan-500 to-cyan-500"
                },
                {
                  title: "Healthcare Data Analytics",
                  description: "Reduced patient wait times by 60% with predictive analytics",
                  metrics: "60% reduction in wait times",
                  color: isDark ? "from-indigo-500 to-indigo-500" : "from-indigo-700 to-indigo-800"
                },
                {
                  title: "Financial Services Automation",
                  description: "Automated 80% of manual processes with intelligent workflow systems",
                  metrics: "80% process automation",
                  color: isDark ? "from-emerald-600 to-emerald-500" : "from-emerald-800 to-emerald-700"
                }
              ].map((story, index) => (
                <div
                  key={index}
                  className={`backdrop-blur-sm border rounded-xl p-6 transition-all duration-300 hover:scale-105 ${isDark 
                      ? 'bg-slate-800/50 border-slate-700/50 hover:border-blue-400/50 hover:bg-slate-800/70 hover:shadow-glow' 
                      : 'bg-white/70 border-slate-200/50 hover:border-blue-300/50 hover:bg-white/90 shadow-lg hover:shadow-xl'}`}
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${story.color} rounded-lg mb-4`}>
                    <FaCheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {story.title}
                  </h3>
                  <p className={`text-sm leading-relaxed mb-4 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                    {story.description}
                  </p>
                  <div className={`font-semibold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                    {story.metrics}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-10 md:py-10 transition-all duration-300 ${isDark 
          ? 'bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900' 
          : 'bg-gradient-to-br from-white via-blue-50/50 to-gray-50'}`}>
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative">
              {/* Decorative Elements */}
              <div className={`absolute top-0 left-0 w-20 h-20 rounded-full blur-xl opacity-20 ${isDark ? 'bg-blue-500' : 'bg-blue-400'}`} />
              <div className={`absolute bottom-0 right-0 w-32 h-32 rounded-full blur-xl opacity-20 ${isDark ? 'bg-cyan-500' : 'bg-blue-300'}`} />
              
              <div className="relative z-10">
                <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Ready to Build the Future?
                </h2>
                <p className={`text-lg md:text-xl mb-8 leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>
                  Transform your business with intelligent systems designed for tomorrow's challenges. 
                  Let's create something extraordinary together.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className={`group relative inline-flex items-center px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${isDark 
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-lg hover:shadow-blue-500/25' 
                        : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl'}`}
                  >
                    <FaRocket className="w-5 h-5 mr-2" />
                    <span>Start Your Project</span>
                    <FaArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    <div className={`absolute inset-0 rounded-lg blur opacity-30 group-hover:opacity-50 -z-10 ${isDark 
                        ? 'bg-gradient-to-r from-blue-400 to-cyan-400' 
                        : 'bg-gradient-to-r from-blue-500 to-blue-600'}`} />
                  </Link>
                  
                  <Link
                    to="/solutions"
                    className={`inline-flex items-center px-8 py-4 border-2 rounded-lg font-semibold transition-all duration-300 ${isDark 
                        ? 'border-cyan-400/50 text-cyan-400 hover:border-cyan-400 hover:bg-cyan-400/10 hover:shadow-glow' 
                        : 'border-blue-600/50 text-blue-600 hover:border-blue-600 hover:bg-blue-50 shadow-md hover:shadow-lg'}`}
                  >
                    View Case Studies
                    <FaChevronRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
                
                <p className={`mt-8 text-sm transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>
                  Schedule a free consultation with our AI experts
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;



















































































// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import AnimatedBackground from '../components/AnimatedBackground';
// import AISection from '../components/AISection';
// import { useTheme } from '../contexts/ThemeContext';
// import { useState, useEffect, useRef, useCallback } from 'react';
// import { FaArrowRight, FaRobot, FaChartBar, FaClock, FaCloud, FaCrosshairs, FaRocket, FaServer, FaShieldAlt, FaUsers, FaChevronRight, FaAward, FaBolt, FaCode, FaLaptop, FaCheckCircle, FaQuoteRight, FaStar, FaChevronLeft, FaPlay, FaVideo, FaPause, FaBrain } from 'react-icons/fa';

// // Image URLs - replace these with your actual images
// const IMAGES = {
//   aiTechnology: "https://media.istockphoto.com/id/2206472967/photo/ai-cloud-cloud-computing-technology-big-data-concepts.jpg?s=612x612&w=0&k=20&c=1qYFy4w_xPq6wIej9NMNZA6IT43_WU_se7hTVSly4AM=",
//   cloudInfrastructure: "https://media.istockphoto.com/id/981901768/photo/cloud-computing.webp?a=1&b=1&s=612x612&w=0&k=20&c=87V521q--2uaBf8C2SMMR2K3Q34T2Qj9-EJrfggPzkA=",
//   realTimeAnalytics: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
//   enterpriseSecurity: "https://media.istockphoto.com/id/2020157664/photo/cyber-security-network-cybersecurity-concept-global-network-security-technology-business.webp?a=1&b=1&s=612x612&w=0&k=20&c=3dJ_LcKoMA7sEzkX3e6W-DEiyz3RCfPrwmzTmjUS4SM=",
//   digitalTransformation: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
//   techTeam: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
//   innovationLab: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2068&q=80",
//   clientSuccess: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
//   hero1: "/services/ai-machine-learning.jpg",
//   hero2: "/services/cloud-devops.jpg",
//   // hero3: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2068&q=80",
//   hero4: "/services/cybersecurity.jpg",
//   // hero5: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=2065&q=80",
// };

// const Home = () => {
//   const { isDark } = useTheme();
//   const [activeTestimonial, setActiveTestimonial] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);
//   const [activeHeroImage, setActiveHeroImage] = useState(0);
//   const heroIntervalRef = useRef(null);

//   // my modifications in this area 
// const [activeSlide, setActiveSlide] = useState(0);

// // Auto-rotate carousel
// useEffect(() => {
//   const interval = setInterval(() => {
//     setActiveSlide((prev) => (prev + 1) % 3);
//   }, 5000); // Change every 5 seconds
  
//   return () => clearInterval(interval);
// }, []);

//   // this my closing of my modifications sections 



//   const nextTestimonial = () => {
//     setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
//     setIsAutoPlaying(false);
//   };

//   const prevTestimonial = () => {
//     setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//     setIsAutoPlaying(false);
//   };

//   const goToTestimonial = (index) => {
//     setActiveTestimonial(index);
//     setIsAutoPlaying(false);
//   };

//   const testimonials = [
//     {
//       name: "Sarah Chen",
//       position: "CTO, TechCorp",
//       company: "Fortune 500 Technology",
//       content: "Levitica transformed our entire data infrastructure. Their AI solutions helped us reduce operational costs by 40% while improving system performance by 300%. The team's expertise in machine learning is unmatched.",
//       rating: 5,
//       project: "Enterprise AI Platform",
//       duration: "6-month engagement",
//       avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
//     },
//     {
//       name: "Michael Rodriguez",
//       position: "VP of Engineering, InnovateX",
//       company: "Global Fintech Leader",
//       content: "Working with Levitica was a game changer for our organization. Their cloud migration strategy saved us over $2M annually in infrastructure costs. The team's attention to detail and proactive approach exceeded all expectations.",
//       rating: 5,
//       project: "Cloud Infrastructure Overhaul",
//       duration: "8-month partnership",
//       avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
//     },
//     {
//       name: "Jennifer Park",
//       position: "Director of Operations, DataSystems",
//       company: "Healthcare Analytics",
//       content: "The AI driven analytics platform developed by Levitica revolutionized how we process patient data. We're now able to deliver insights 10x faster with 99.9% accuracy. Their support team is incredibly responsive.",
//       rating: 5,
//       project: "Healthcare Analytics Platform",
//       duration: "4-month implementation",
//       avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
//     },
//     {
//       name: "David Wilson",
//       position: "CEO, CloudScale",
//       company: "Enterprise SaaS Provider",
//       content: "Levitica's security framework implementation was flawless. They not only met all compliance requirements but also future proofed our systems against emerging threats. Their expertise gave us peace of mind.",
//       rating: 5,
//       project: "Security Infrastructure",
//       duration: "3-month security audit & implementation",
//       avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
//     },
//     {
//       name: "Priya Sharma",
//       position: "Product Director, AI Labs",
//       company: "AI Research & Development",
//       content: "The custom ML models developed by Levitica's team outperformed all our benchmarks. Their innovative approach to problem solving and deep technical knowledge made this partnership incredibly valuable.",
//       rating: 5,
//       project: "Custom Machine Learning Models",
//       duration: "9-month R&D collaboration",
//       avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
//     }
//   ];

//   const imageContentSections = [
//     {
//       title: "AI-Powered Intelligence Systems",
//       description: "We develop cutting edge artificial intelligence solutions that transform business operations. Our AI models are trained on enterprise data to deliver predictive insights, automate complex processes, and enhance decision making capabilities across your organization.",
//       features: [
//         "Custom machine learning models",
//         "Natural language processing",
//         "Computer vision solutions",
//         "Predictive analytics",
//         "AI driven automation"
//       ],
//       image: IMAGES.aiTechnology,
//       icon: FaRobot,
//       color: isDark ? "from-blue-500 to-cyan-500" : "from-blue-600 to-blue-700",
//       reversed: false
//     },
//     {
//       title: "Scalable Cloud Infrastructure",
//       description: "Build resilient and scalable cloud architectures with our expertise. We design and implement cloud solutions that ensure high availability, optimal performance, and cost efficiency for your enterprise applications.",
//       features: [
//         "Multi cloud architecture",
//         "Serverless computing",
//         "Container orchestration",
//         "Disaster recovery",
//         "Cost optimization"
//       ],
//       image: IMAGES.cloudInfrastructure,
//       icon: FaCloud,
//       color: isDark ? "from-cyan-500 to-blue-500" : "from-blue-700 to-blue-800",
//       reversed: true
//     },
//     {
//       title: "Real time Data Processing",
//       description: "Process and analyze streaming data in real time to gain immediate insights. Our real time processing systems enable instant decision making, live monitoring, and proactive response to changing business conditions.",
//       features: [
//         "Streaming analytics",
//         "Real time dashboards",
//         "Event driven architecture",
//         "IoT data processing",
//         "Live monitoring systems"
//       ],
//       image: IMAGES.realTimeAnalytics,
//       icon: FaChartBar,
//       color: isDark ? "from-blue-600 to-purple-500" : "from-blue-800 to-indigo-700",
//       reversed: false
//     },
//     {
//       title: "Enterprise Security Solutions",
//       description: "Protect your digital assets with our comprehensive security framework. We implement advanced cybersecurity measures, compliance protocols, and threat detection systems to safeguard your enterprise infrastructure.",
//       features: [
//         "Zero trust architecture",
//         "Data encryption",
//         "Threat intelligence",
//         "Compliance management",
//         "Security monitoring"
//       ],
//       image: IMAGES.enterpriseSecurity,
//       icon: FaShieldAlt,
//       color: isDark ? "from-purple-500 to-blue-600" : "from-indigo-700 to-blue-800",
//       reversed: true
//     }
//   ];

//     // Testimonials auto-rotate
//   useEffect(() => {
//     if (!isAutoPlaying) return;

//     const interval = setInterval(() => {
//       setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [isAutoPlaying, testimonials.length]);

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="pt-24 md:pt-24 w-full"
//     >
// {/* Hero Section - Video Background with Carousel */}
// <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
//   {/* Video Background - Playing Continuously */}
//   <div className="absolute inset-0 z-0">
//     <video
//       className="w-full h-full object-cover"
//       autoPlay
//       muted
//       loop
//       playsInline
//       poster="/services/ai-machine-learning.jpg"
//     >
//       <source src="/videos/cloud video.mp4" type="video/mp4" />
//       {/* Fallback Image */}
//       <img 
//         src="/services/ai-machine-learning.jpg" 
//         alt="Technology Background"
//         className="w-full h-full object-cover"
//       />
//     </video>
    
//     {/* Dark Overlay for Better Text Readability */}
//     <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/40" />
    
//     {/* Subtle Pattern Overlay */}
//     <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[size:20px_20px]" />
//   </div>

//   {/* Content */}
//   <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
//     <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
      
//       {/* Left Column - Text Content */}
//       <div className="space-y-6">
//         {/* Company Tag */}
//         <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
//           <div className="flex items-center gap-1.5">
//             <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
//             <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse delay-150" />
//             <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse delay-300" />
//           </div>
//           <span className="text-sm font-medium text-white">
//             Levitica Technologies • Since 2018
//           </span>
//         </div>

//         {/* Main Headline */}
//         <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
//           <span className="block text-white">
//             Transform Your Business
//           </span>
//           <span className="block my-4">
//             <span className="relative">
//               <span className="relative z-10 bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
//                 With Intelligent
//               </span>
//               <span className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-cyan-500/30 to-purple-500/30 blur-xl" />
//             </span>
//           </span>
//           <span className="block text-white">
//             Technology Solutions
//           </span>
//         </h1>

//         {/* Description */}
//         <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-xl">
//           We specialize in building cutting-edge AI systems, scalable cloud infrastructure, 
//           and enterprise-grade software that drives innovation and delivers measurable results.
//         </p>

//         {/* CTA Buttons */}
//         <div className="flex flex-col sm:flex-row gap-4 pt-4">
//           <Link
//             to="/contact"
//             className="group relative px-8 py-3.5 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105"
//           >
//             <span className="relative z-10 flex items-center justify-center gap-3">
//               Start Your Project
//               <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//             </span>
//           </Link>
          
//           <Link
//             to="/ai-solutions"
//             className="group px-8 py-3.5 rounded-lg font-semibold border-2 border-white/30 text-white hover:border-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
//           >
//             <span className="flex items-center justify-center gap-2">
//               <FaPlay className="w-4 h-4" />
//               View Our Work
//             </span>
//           </Link>
//         </div>

//         {/* Quick Stats */}
//         <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/20">
//           {[
//             { value: "500+", label: "Projects", color: "text-blue-300" },
//             { value: "150+", label: "Clients", color: "text-purple-300" },
//             { value: "99.9%", label: "Satisfaction", color: "text-cyan-300" }
//           ].map((stat, index) => (
//             <div key={index} className="text-center">
//               <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
//               <div className="text-sm text-gray-300 mt-1">{stat.label}</div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Right Column - Image Carousel */}
//       <div className="relative">
//         {/* Carousel Container with Glass Effect */}
//         <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm bg-white/5 border border-white/20">
          
//           {/* Images Carousel */}
//           <div className="relative h-full">
//             {[
//               {
//                 id: 1,
//                 type: 'image',
//                 src: "/services/ai-machine-learning.jpg", // Your AI image
//                 title: "AI & Machine Learning",
//                 description: "Intelligent systems for automation"
//               },
//               {
//                 id: 2,
//                 type: 'video',
//                 src: "/videos/cloud video2.mp4", // Your cloud video
//                 thumbnail: "/services/cloud-devops.jpg",
//                 title: "Cloud Infrastructure",
//                 description: "Scalable cloud-native solutions"
//               },
//               {
//                 id: 3,
//                 type: 'image',
//                 src: "/services/cybersecurity.jpg", // Your security image
//                 title: "Enterprise Security",
//                 description: "Advanced cybersecurity solutions"
//               }
//             ].map((item, index) => (
//               <motion.div
//                 key={item.id}
//                 className="absolute inset-0"
//                 initial={{ opacity: 0 }}
//                 animate={{ 
//                   opacity: activeSlide === index ? 1 : 0,
//                   scale: activeSlide === index ? 1 : 1.02
//                 }}
//                 transition={{ duration: 0.8 }}
//               >
//                 {/* Media Content */}
//                 <div className="relative h-full w-full">
//                   {item.type === 'video' ? (
//                     <video
//                       key={activeSlide === index ? 'playing' : 'paused'}
//                       className="w-full h-full object-cover"
//                       poster={item.thumbnail}
//                       autoPlay={activeSlide === index}
//                       muted
//                       loop
//                       playsInline
//                     >
//                       <source src={item.src} type="video/mp4" />
//                     </video>
//                   ) : (
//                     <img 
//                       src={item.src} 
//                       alt={item.title}
//                       className="w-full h-full object-cover"
//                       loading="lazy"
//                     />
//                   )}
                  
//                   {/* Gradient Overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
//                   {/* Content Overlay */}
//                   <div className="absolute bottom-0 left-0 right-0 p-6">
//                     <div className="flex items-center gap-2 mb-2">
//                       <div className={`w-2 h-2 rounded-full ${
//                         index === 0 ? 'bg-blue-400' :
//                         index === 1 ? 'bg-cyan-400' :
//                         'bg-purple-400'
//                       } animate-pulse`} />
//                       <span className="text-sm font-semibold text-white/90">
//                         {item.title}
//                       </span>
//                       {item.type === 'video' && (
//                         <FaVideo className="w-3 h-3 text-white/70 ml-1" />
//                       )}
//                     </div>
//                     <p className="text-lg font-medium text-white">
//                       {item.description}
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* Navigation Dots */}
//           <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
//             {[0, 1, 2].map((index) => (
//               <button
//                 key={index}
//                 onClick={() => setActiveSlide(index)}
//                 className={`w-10 h-1.5 rounded-full transition-all duration-300 ${
//                   activeSlide === index 
//                     ? 'bg-white' 
//                     : 'bg-white/50 hover:bg-white/70'
//                 }`}
//                 aria-label={`Go to slide ${index + 1}`}
//               />
//             ))}
//           </div>

//           {/* Navigation Arrows */}
//           <button
//             onClick={() => setActiveSlide((prev) => (prev - 1 + 3) % 3)}
//             className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
//             aria-label="Previous slide"
//           >
//             <FaChevronLeft className="w-5 h-5 text-white" />
//           </button>
          
//           <button
//             onClick={() => setActiveSlide((prev) => (prev + 1) % 3)}
//             className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
//             aria-label="Next slide"
//           >
//             <FaChevronRight className="w-5 h-5 text-white" />
//           </button>
//         </div>

//         {/* Quick Links */}
//         <div className="grid grid-cols-3 gap-3 mt-4">
//           {[
//             { icon: FaBrain, label: "AI Solutions", index: 0 },
//             { icon: FaCloud, label: "Cloud Services", index: 1 },
//             { icon: FaShieldAlt, label: "Security", index: 2 }
//           ].map((item, index) => (
//             <button
//               key={index}
//               onClick={() => setActiveSlide(item.index)}
//               className={`flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg transition-all duration-300 ${
//                 activeSlide === item.index
//                   ? 'bg-blue-500/20 border border-blue-500/30 text-blue-300'
//                   : 'bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10'
//               }`}
//             >
//               <item.icon className="w-4 h-4" />
//               <span className="text-sm font-medium">{item.label}</span>
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>


//   </div>

//   {/* Scroll Indicator */}
//   <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
//     <div className="animate-bounce">
//       <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
//         <div className="w-1 h-3 mt-2 rounded-full bg-white/50" />
//       </div>
//     </div>
//   </div>
// </div>

//       {/* Image-Content Sections */}
//       <div className="space-y-5 md:space-y-14 py-6 md:py-10">
//         {imageContentSections.map((section, index) => (
//           <motion.div 
//             key={index}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: index * 0.1 }}
//             whileHover={{ y: -5 }} 
//             className={`transition-all duration-300 ${isDark ? 'bg-slate-900/30' : 'bg-gray-50/50'}`}
//           >
//             <div className="w-full px-4 sm:px-6 lg:px-8 py-4">
//               <div className={`max-w-7xl mx-auto flex flex-col ${section.reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}>
//                 {/* Image Section - Simplified animation */}
//                 <div className="lg:w-1/2">
//                   <div className="relative group">
//                     {/* Image Container */}
//                     <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-[16/9]">
//                       <img
//                         src={section.image}
//                         alt={section.title}
//                         className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
//                       />
//                       {/* Gradient Overlay */}
//                       <div className={`absolute inset-0 bg-gradient-to-t ${isDark 
//                           ? 'from-slate-900/50 via-slate-900/20 to-transparent' 
//                           : 'from-white/10 via-white/10 to-transparent'}`} />
//                     </div>
                    
//                     {/* Simplified decorative elements - removed negative positioning */}
//                     <div className={`absolute bottom-0 left-0 w-32 h-32 ${isDark 
//                         ? 'bg-blue-500/10' 
//                         : 'bg-blue-600/10'} rounded-full blur-2xl -z-10`} />
//                     <div className={`absolute top-0 right-0 w-24 h-24 ${isDark 
//                         ? 'bg-cyan-500/10' 
//                         : 'bg-blue-400/10'} rounded-full blur-2xl -z-10`} />
//                   </div>
//                 </div>

//                 {/* Content Section - Simplified animation */}
//                 <div className="lg:w-1/2">
//                   <div className="space-y-6">
//                     {/* Badge */}
//                     <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border ${isDark 
//                         ? 'bg-blue-500/10 border-blue-400/20 text-blue-400' 
//                         : 'bg-blue-50 border-blue-200 text-blue-600'}`}>
//                       <FaCrosshairs className="w-4 h-4 mr-2" />
//                       {section.reversed ? 'Enterprise Solution' : 'Core Technology'}
//                     </span>
                    
//                     {/* Title */}
//                     <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>
//                       {section.title}
//                     </h2>
                    
//                     {/* Description */}
//                     <p className={`text-lg leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>
//                       {section.description}
//                     </p>
                    
//                     {/* Features */}
//                     <div className="space-y-3">
//                       {section.features.map((feature, idx) => (
//                         <div
//                           key={idx}
//                           className="flex items-center"
//                         >
//                           <div className={`w-2 h-2 rounded-full mr-3 ${isDark 
//                               ? 'bg-blue-400' 
//                               : 'bg-blue-600'}`} />
//                           <span className={`transition-colors duration-300 ${isDark 
//                               ? 'text-gray-300' 
//                               : 'text-slate-700'}`}>
//                             {feature}
//                           </span>
//                         </div>
//                       ))}
//                     </div>
                    
//                     {/* CTA Button */}
//                     <div className="pt-4">
//                       <Link
//                         to="/services"
//                         className={`inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${isDark 
//                             ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-lg hover:shadow-blue-500/25' 
//                             : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-md'}`}
//                       >
//                         <span>Learn More</span>
//                         <FaArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Why Choose Us Section */}
//       <section className={`py-10 md:py-10 transition-all duration-300 ${isDark ? 'bg-slate-900/50' : 'bg-white'}`}>
//         <div className="w-full px-4 sm:px-6 lg:px-8">
//           <div className="max-w-7xl mx-auto">
//             <div className="text-center mb-12 md:mb-16">
//               <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>
//                 Why Choose Levitica Technologies?
//               </h2>
//               <p className={`text-lg md:text-xl max-w-3xl mx-auto transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
//                 We combine technical expertise with business acumen to deliver exceptional results
//               </p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//               {[
//                 {
//                   icon: FaAward,
//                   title: "Proven Expertise",
//                   description: "8+ years of experience delivering complex enterprise solutions with measurable ROI",
//                   color: isDark ? "from-blue-500 to-cyan-500" : "from-blue-600 to-blue-700"
//                 },
//                 {
//                   icon: FaBolt,
//                   title: "Rapid Deployment",
//                   description: "Agile development approach ensures faster time to market for your solutions",
//                   color: isDark ? "from-red-500 to-orange-500" : "from-red-700 to-orange-800"
//                 },
//                 {
//                   icon: FaUsers,
//                   title: "Dedicated Teams",
//                   description: "Skilled professionals who become an extension of your in house team",
//                   color: isDark ? "from-violet-600 to-violet-500" : "from-violet-800 to-violet-700"
//                 },
//                 {
//                   icon: FaShieldAlt,
//                   title: "Enterprise Security",
//                   description: "Highest security standards with compliance certifications and regular audits",
//                   color: isDark ? "from-green-500 to-green-600" : "from-green-700 to-green-800"
//                 }
//               ].map((item, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 50 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1 }}
//                   whileHover={{ y: -5 }}
//                   className={`backdrop-blur-sm border rounded-xl p-6 text-center transition-all duration-300 hover:scale-105 ${isDark 
//                       ? 'bg-slate-800/50 border-slate-700/50 hover:border-blue-400/50 hover:bg-slate-800/70 hover:shadow-glow' 
//                       : 'bg-white/70 border-slate-200/50 hover:border-blue-300/50 hover:bg-white/90 shadow-lg hover:shadow-xl'}`}
//                 >
//                   <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${item.color} rounded-full mb-4`}>
//                     <item.icon className="w-8 h-8 text-white" />
//                   </div>
//                   <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>
//                     {item.title}
//                   </h3>
//                   <p className={`text-sm leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
//                     {item.description}
//                   </p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Innovation Process Section */}
//       <section className={`py-10 md:py-10 transition-all duration-300 ${isDark 
//           ? 'bg-gradient-to-br from-slate-900 via-blue-900/10 to-slate-900' 
//           : 'bg-gradient-to-br from-gray-50 via-blue-50/20 to-gray-50'}`}>
//         <div className="w-full px-4 sm:px-6 lg:px-8">
//           <div className="max-w-7xl mx-auto">
//             <div className="text-center mb-12 md:mb-16">
//               <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>
//                 Our Innovation Process
//               </h2>
//               <p className={`text-lg md:text-xl max-w-3xl mx-auto transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
//                 A structured approach to delivering exceptional technology solutions
//               </p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//               {[
//                 {
//                   number: "01",
//                   title: "Discovery & Analysis",
//                   description: "Deep dive into your business needs, challenges, and objectives",
//                   icon: FaCrosshairs
//                 },
//                 {
//                   number: "02",
//                   title: "Solution Design",
//                   description: "Architect the optimal technical solution with detailed planning",
//                   icon: FaCode
//                 },
//                 {
//                   number: "03",
//                   title: "Development & Testing",
//                   description: "Agile development with continuous integration and rigorous testing",
//                   icon: FaLaptop
//                 },
//                 {
//                   number: "04",
//                   title: "Deployment & Support",
//                   description: "Seamless deployment and ongoing support for long term success",
//                   icon: FaShieldAlt
//                 }
//               ].map((step, index) => (
//                 <div
//                   key={index}
//                   className={`relative backdrop-blur-sm border rounded-xl p-6 transition-all duration-300 hover:scale-105 ${isDark 
//                       ? 'bg-slate-800/50 border-slate-700/50 hover:border-blue-400/50 hover:bg-slate-800/70' 
//                       : 'bg-white/70 border-slate-200/50 hover:border-blue-300/50 hover:bg-white/90 shadow-lg hover:shadow-xl'}`}
//                 >
//                   <div className="flex items-center mb-4">
//                     <div className={`p-2 rounded-lg ${isDark ? 'bg-blue-500/20' : 'bg-blue-100'} mr-3`}>
//                       <step.icon className={`w-5 h-5 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
//                     </div>
//                     <h3 className={`text-xl font-semibold transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>
//                       {step.title}
//                     </h3>
//                   </div>
//                   <p className={`text-sm leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
//                     {step.description}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* AI Section */}
//       <AISection />

//       {/* Success Stories Section */}
//       <section className={`py-10 md:py-10 transition-all duration-300 ${isDark ? 'bg-slate-900/50' : 'bg-white'}`}>
//         <div className="w-full px-4 sm:px-6 lg:px-8">
//           <div className="max-w-7xl mx-auto">
//             <div className="text-center mb-12 md:mb-16">
//               <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>
//                 Success Stories
//               </h2>
//               <p className={`text-lg md:text-xl max-w-3xl mx-auto transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
//                 Transforming businesses across industries with our technology expertise
//               </p>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//               {[
//                 {
//                   title: "E-commerce Platform Optimization",
//                   description: "Increased conversion rates by 40% through AI-powered personalization",
//                   metrics: "40% increase in conversions",
//                   color: isDark ? "from-cyan-500 to-cyan-500" : "from-cyan-500 to-cyan-500"
//                 },
//                 {
//                   title: "Healthcare Data Analytics",
//                   description: "Reduced patient wait times by 60% with predictive analytics",
//                   metrics: "60% reduction in wait times",
//                   color: isDark ? "from-indigo-500 to-indigo-500" : "from-indigo-700 to-indigo-800"
//                 },
//                 {
//                   title: "Financial Services Automation",
//                   description: "Automated 80% of manual processes with intelligent workflow systems",
//                   metrics: "80% process automation",
//                   color: isDark ? "from-emerald-600 to-emerald-500" : "from-emerald-800 to-emerald-700"
//                 }
//               ].map((story, index) => (
//                 <div
//                   key={index}
//                   className={`backdrop-blur-sm border rounded-xl p-6 transition-all duration-300 hover:scale-105 ${isDark 
//                       ? 'bg-slate-800/50 border-slate-700/50 hover:border-blue-400/50 hover:bg-slate-800/70 hover:shadow-glow' 
//                       : 'bg-white/70 border-slate-200/50 hover:border-blue-300/50 hover:bg-white/90 shadow-lg hover:shadow-xl'}`}
//                 >
//                   <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${story.color} rounded-lg mb-4`}>
//                     <FaCheckCircle className="w-6 h-6 text-white" />
//                   </div>
//                   <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>
//                     {story.title}
//                   </h3>
//                   <p className={`text-sm leading-relaxed mb-4 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
//                     {story.description}
//                   </p>
//                   <div className={`font-semibold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
//                     {story.metrics}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Client Testimonials Carousel */}
//       <section className={`py-10 md:py-10 transition-all duration-300 ${isDark 
//           ? 'bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900' 
//           : 'bg-gradient-to-br from-white via-blue-50/50 to-gray-50'}`}>
//         <div className="w-full px-4 sm:px-6 lg:px-8">
//           <div className="max-w-6xl mx-auto">
//             <div className="text-center mb-12 md:mb-16">
//               <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>
//                 What Our Clients Say
//               </h2>
//               <p className={`text-lg md:text-xl max-w-3xl mx-auto transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
//                 Hear from industry leaders who have transformed their businesses with our solutions
//               </p>
//             </div>

//             <div className="relative">
//               {/* Testimonial Carousel */}
//               <div className="relative overflow-hidden rounded-2xl">
//                 <div className="relative h-full">
//                   {/* Active Testimonial */}
//                   <motion.div
//                     key={activeTestimonial}
//                     initial={{ opacity: 0, x: 50 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0, x: -50 }}
//                     transition={{ duration: 0.5 }}
//                     className={`backdrop-blur-sm border rounded-2xl p-8 md:p-12 transition-all duration-300 ${isDark 
//                         ? 'bg-slate-800/50 border-slate-700/50' 
//                         : 'bg-white/70 border-slate-200/50 shadow-xl'}`}
//                   >
//                     <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
//                       {/* Client Info */}
//                       <div className="lg:w-1/3">
//                         <div className="flex flex-col items-center lg:items-start">
//                           {/* Avatar */}
//                           <div className="relative mb-6">
//                             <img
//                               src={testimonials[activeTestimonial].avatar}
//                               alt={testimonials[activeTestimonial].name}
//                               className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
//                             />
//                             <div className={`absolute -bottom-2 -right-2 w-12 h-12 rounded-full flex items-center justify-center ${isDark 
//                                 ? 'bg-gradient-to-r from-blue-600 to-cyan-600' 
//                                 : 'bg-gradient-to-r from-blue-600 to-blue-700'}`}>
//                               <FaQuoteRight className="w-6 h-6 text-white" />
//                             </div>
//                           </div>
                          
//                           {/* Client Details */}
//                           <div className="text-center lg:text-left">
//                             <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>
//                               {testimonials[activeTestimonial].name}
//                             </h3>
//                             <p className={`font-medium mb-1 transition-colors duration-300 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
//                               {testimonials[activeTestimonial].position}
//                             </p>
//                             <p className={`text-sm mb-4 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
//                               {testimonials[activeTestimonial].company}
//                             </p>
                            
//                             {/* Rating */}
//                             <div className="flex justify-center lg:justify-start mb-4">
//                               {[...Array(5)].map((_, i) => (
//                                 <FaStar
//                                   key={i}
//                                   className={`w-5 h-5 ${i < testimonials[activeTestimonial].rating 
//                                     ? (isDark ? 'text-yellow-400' : 'text-yellow-500') 
//                                     : (isDark ? 'text-gray-600' : 'text-gray-300')}`}
//                                   fill="currentColor"
//                                 />
//                               ))}
//                             </div>
                            
//                             {/* Project Info */}
//                             <div className={`text-sm space-y-2 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
//                               <div className="flex items-center">
//                                 <FaCheckCircle className="w-4 h-4 mr-2 text-green-500" />
//                                 <span>{testimonials[activeTestimonial].project}</span>
//                               </div>
//                               <div className="flex items-center">
//                                 <FaClock className="w-4 h-4 mr-2 text-blue-500" />
//                                 <span>{testimonials[activeTestimonial].duration}</span>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
                      
//                       {/* Testimonial Content */}
//                       <div className="lg:w-2/3">
//                         <div className={`text-lg md:text-xl leading-relaxed mb-6 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
//                           "{testimonials[activeTestimonial].content}"
//                         </div>
                        
//                         {/* Stats */}
//                         <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 mt-8">
//                           {[
//                             { label: "Client Satisfaction", value: "98%" },
//                             { label: "On-time Delivery", value: "95%" },
//                             { label: "ROI Delivered", value: "3.5x" },
//                           ].map((stat, idx) => (
//                             <div 
//                               key={idx}
//                               className={`text-center p-4 rounded-xl ${isDark 
//                                   ? 'bg-slate-800/30 border border-slate-700/30' 
//                                   : 'bg-white/50 border border-slate-200/50 shadow-sm'}`}
//                             >
//                               <div className={`text-2xl font-bold mb-1 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
//                                 {stat.value}
//                               </div>
//                               <div className={`text-sm transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
//                                 {stat.label}
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </motion.div>
//                 </div>
                
//                 {/* Navigation Controls */}
//                 <div className="flex justify-center items-center mt-8 space-x-4">
//                   <button
//                     onClick={prevTestimonial}
//                     className={`p-3 rounded-full transition-all duration-300 ${isDark 
//                         ? 'bg-slate-800/50 border border-slate-700/50 text-blue-400 hover:bg-blue-500/20 hover:border-blue-400/50 hover:shadow-glow' 
//                         : 'bg-white/70 border border-slate-200/50 text-blue-600 hover:bg-blue-50 hover:border-blue-300 hover:shadow-md'}`}
//                   >
//                     <FaChevronLeft className="w-4 h-4" />
//                   </button>
                  
//                   {/* Dots Indicator */}
//                   <div className="flex space-x-2">
//                     {testimonials.map((_, index) => (
//                       <button
//                         key={index}
//                         onClick={() => goToTestimonial(index)}
//                         className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeTestimonial 
//                             ? (isDark ? 'bg-blue-400' : 'bg-blue-600') 
//                             : (isDark ? 'bg-slate-700 hover:bg-slate-600' : 'bg-slate-300 hover:bg-slate-400')}`}
//                       />
//                     ))}
//                   </div>
                  
//                   <button
//                     onClick={nextTestimonial}
//                     className={`p-3 rounded-full transition-all duration-300 ${isDark 
//                         ? 'bg-slate-800/50 border border-slate-700/50 text-blue-400 hover:bg-blue-500/20 hover:border-blue-400/50 hover:shadow-glow' 
//                         : 'bg-white/70 border border-slate-200/50 text-blue-600 hover:bg-blue-50 hover:border-blue-300 hover:shadow-md'}`}
//                   >
//                     <FaChevronRight className="w-4 h-4" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className={`py-10 md:py-10 transition-all duration-300 ${isDark 
//           ? 'bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900' 
//           : 'bg-gradient-to-br from-white via-blue-50/50 to-gray-50'}`}>
//         <div className="w-full px-4 sm:px-6 lg:px-8">
//           <div className="max-w-4xl mx-auto text-center">
//             <div className="relative">
//               {/* Decorative Elements */}
//               <div className={`absolute top-0 left-0 w-20 h-20 rounded-full blur-xl opacity-20 ${isDark ? 'bg-blue-500' : 'bg-blue-400'}`} />
//               <div className={`absolute bottom-0 right-0 w-32 h-32 rounded-full blur-xl opacity-20 ${isDark ? 'bg-cyan-500' : 'bg-blue-300'}`} />
              
//               <div className="relative z-10">
//                 <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>
//                   Ready to Build the Future?
//                 </h2>
//                 <p className={`text-lg md:text-xl mb-8 leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>
//                   Transform your business with intelligent systems designed for tomorrow's challenges. 
//                   Let's create something extraordinary together.
//                 </p>
                
//                 <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                   <Link
//                     to="/contact"
//                     className={`group relative inline-flex items-center px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${isDark 
//                         ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-lg hover:shadow-blue-500/25' 
//                         : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl'}`}
//                   >
//                     <FaRocket className="w-5 h-5 mr-2" />
//                     <span>Start Your Project</span>
//                     <FaArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                     <div className={`absolute inset-0 rounded-lg blur opacity-30 group-hover:opacity-50 -z-10 ${isDark 
//                         ? 'bg-gradient-to-r from-blue-400 to-cyan-400' 
//                         : 'bg-gradient-to-r from-blue-500 to-blue-600'}`} />
//                   </Link>
                  
//                   <Link
//                     to="/solutions"
//                     className={`inline-flex items-center px-8 py-4 border-2 rounded-lg font-semibold transition-all duration-300 ${isDark 
//                         ? 'border-cyan-400/50 text-cyan-400 hover:border-cyan-400 hover:bg-cyan-400/10 hover:shadow-glow' 
//                         : 'border-blue-600/50 text-blue-600 hover:border-blue-600 hover:bg-blue-50 shadow-md hover:shadow-lg'}`}
//                   >
//                     View Case Studies
//                     <FaChevronRight className="ml-2 w-4 h-4" />
//                   </Link>
//                 </div>
                
//                 <p className={`mt-8 text-sm transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>
//                   Schedule a free consultation with our AI experts
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </motion.div>
//   );
// };

// export default Home;