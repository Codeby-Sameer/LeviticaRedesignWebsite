import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Globe, Zap, Shield, TrendingUp, Users, Clock, Server, ChevronRight, Sparkles, Rocket, Target, Code, Database, Cloud, Brain, BarChart, Smartphone, CheckCircle, Award, Target as TargetIcon, Zap as ZapIcon, Users as UsersIcon, Shield as ShieldIcon, Star, Quote, ChevronLeft, ChevronRight as ChevronRightIcon, User } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';
import AISection from '../components/AISection';
import { useTheme } from '../contexts/ThemeContext';
import { useState, useEffect, useRef } from 'react';

// Image URLs - replace these with your actual images
const IMAGES = {
  aiTechnology: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=2065&q=80",
  cloudInfrastructure: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80",
  realTimeAnalytics: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  enterpriseSecurity: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  digitalTransformation: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  techTeam: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  innovationLab: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2068&q=80",
  clientSuccess: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  hero1: "/services/ai-machine-learning.jpg",
  hero2: "/services/cloud-devops.jpg",
  // hero3: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2068&q=80",
  hero4: "/services/cybersecurity.jpg",
  // hero5: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=2065&q=80",
};

const Home = () => {
  const { isDark } = useTheme();
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [activeHeroImage, setActiveHeroImage] = useState(0);
  const heroIntervalRef = useRef(null);

  const heroImages = [
    {
      url: IMAGES.hero1,
      title: "AI-Powered Innovation",
      subtitle: "Transforming businesses with intelligent automation"
    },
    {
      url: IMAGES.hero2,
      title: "Cloud Excellence",
      subtitle: "Scalable solutions for enterprise success"
    },
    // {
    //   url: IMAGES.hero3,
    //   title: "Data Intelligence",
    //   subtitle: "Unlocking insights with advanced analytics"
    // },
    {
      url: IMAGES.hero4,
      title: "Security First",
      subtitle: "Protecting your digital assets"
    },
    // {
    //   url: IMAGES.hero5,
    //   title: "Future Ready",
    //   subtitle: "Building tomorrow's technology today"
    // }
  ];

  // Hero image auto-rotate
  useEffect(() => {
    heroIntervalRef.current = setInterval(() => {
      setActiveHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 4000); // Change image every 4 seconds

    return () => {
      if (heroIntervalRef.current) {
        clearInterval(heroIntervalRef.current);
      }
    };
  }, [heroImages.length]);


  const nextHeroImage = () => {
    if (heroIntervalRef.current) {
      clearInterval(heroIntervalRef.current);
    }
    setActiveHeroImage((prev) => (prev + 1) % heroImages.length);
    // Restart auto-play
    heroIntervalRef.current = setInterval(() => {
      setActiveHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);
  };

  const prevHeroImage = () => {
    if (heroIntervalRef.current) {
      clearInterval(heroIntervalRef.current);
    }
    setActiveHeroImage((prev) => (prev - 1 + heroImages.length) % heroImages.length);
    // Restart auto-play
    heroIntervalRef.current = setInterval(() => {
      setActiveHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);
  };

  const goToHeroImage = (index) => {
    if (heroIntervalRef.current) {
      clearInterval(heroIntervalRef.current);
    }
    setActiveHeroImage(index);
    // Restart auto-play
    heroIntervalRef.current = setInterval(() => {
      setActiveHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);
  };

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index) => {
    setActiveTestimonial(index);
    setIsAutoPlaying(false);
  };

  const testimonials = [
    {
      name: "Sarah Chen",
      position: "CTO, TechCorp",
      company: "Fortune 500 Technology",
      content: "Levitica transformed our entire data infrastructure. Their AI solutions helped us reduce operational costs by 40% while improving system performance by 300%. The team's expertise in machine learning is unmatched.",
      rating: 5,
      project: "Enterprise AI Platform",
      duration: "6-month engagement",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Michael Rodriguez",
      position: "VP of Engineering, InnovateX",
      company: "Global Fintech Leader",
      content: "Working with Levitica was a game changer for our organization. Their cloud migration strategy saved us over $2M annually in infrastructure costs. The team's attention to detail and proactive approach exceeded all expectations.",
      rating: 5,
      project: "Cloud Infrastructure Overhaul",
      duration: "8-month partnership",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Jennifer Park",
      position: "Director of Operations, DataSystems",
      company: "Healthcare Analytics",
      content: "The AI-driven analytics platform developed by Levitica revolutionized how we process patient data. We're now able to deliver insights 10x faster with 99.9% accuracy. Their support team is incredibly responsive.",
      rating: 5,
      project: "Healthcare Analytics Platform",
      duration: "4-month implementation",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "David Wilson",
      position: "CEO, CloudScale",
      company: "Enterprise SaaS Provider",
      content: "Levitica's security framework implementation was flawless. They not only met all compliance requirements but also future-proofed our systems against emerging threats. Their expertise gave us peace of mind.",
      rating: 5,
      project: "Security Infrastructure",
      duration: "3-month security audit & implementation",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Priya Sharma",
      position: "Product Director, AI Labs",
      company: "AI Research & Development",
      content: "The custom ML models developed by Levitica's team outperformed all our benchmarks. Their innovative approach to problem-solving and deep technical knowledge made this partnership incredibly valuable.",
      rating: 5,
      project: "Custom Machine Learning Models",
      duration: "9-month R&D collaboration",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
  ];

  const imageContentSections = [
    {
      title: "AI-Powered Intelligence Systems",
      description: "We develop cutting edge artificial intelligence solutions that transform business operations. Our AI models are trained on enterprise data to deliver predictive insights, automate complex processes, and enhance decision making capabilities across your organization.",
      features: [
        "Custom machine learning models",
        "Natural language processing",
        "Computer vision solutions",
        "Predictive analytics",
        "AI-driven automation"
      ],
      image: IMAGES.aiTechnology,
      icon: Brain,
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
      icon: Cloud,
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
      icon: BarChart,
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
      icon: Shield,
      color: isDark ? "from-purple-500 to-blue-600" : "from-indigo-700 to-blue-800",
      reversed: true
    }
  ];

    // Testimonials auto-rotate
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 md:pt-24 w-full"
    >
      {/* Hero Section with Image Carousel */}
      <div className="relative min-h-screen flex items-center justify-center w-full overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 z-0">
          <div className={`absolute inset-0 ${isDark ? 'bg-slate-900' : 'bg-white'}`} />
          <div className={`absolute inset-0 bg-gradient-to-br ${isDark 
            ? 'from-slate-900/90 via-blue-900/40 to-slate-900/90' 
            : 'from-white/90 via-blue-50/40 to-white/90'}`} />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-10">
          <div className="max-w-7xl mx-auto">
            {/* Image Carousel */}
            <div className="relative mb-8 md:mb-12">
              <div className="relative h-64 md:h-96 lg:h-[500px] w-full overflow-hidden rounded-2xl shadow-2xl">
                {heroImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ 
                      opacity: index === activeHeroImage ? 1 : 0,
                      x: index === activeHeroImage ? 0 : index < activeHeroImage ? -100 : 100
                    }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${isDark 
                        ? 'from-slate-900/70 via-slate-900/30 to-transparent' 
                        : 'from-white/70 via-white/30 to-transparent'}`} />
                    
                    {/* Image Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                      <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-3 ${isDark 
                          ? 'bg-blue-500/20 border border-blue-400/20 text-blue-400' 
                          : 'bg-white/90 border border-slate-200 text-blue-700 shadow-sm'}`}>
                        <Sparkles className="w-4 h-4 mr-2" />
                        {image.title}
                      </div>
                      <h3 className={`text-lg md:text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {image.subtitle}
                      </h3>
                    </div>
                  </motion.div>
                ))}
                
                {/* Navigation Controls */}
                <div className="absolute top-4 right-4 z-20">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={prevHeroImage}
                      className={`p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${isDark 
                          ? 'bg-slate-800/70 border border-slate-700/50 text-white hover:bg-blue-500/30 hover:border-blue-400/50 hover:shadow-glow' 
                          : 'bg-white/80 border border-slate-200/50 text-slate-700 hover:bg-blue-50 hover:border-blue-300 hover:shadow-md'}`}
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <div className="flex space-x-1">
                      {heroImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => goToHeroImage(index)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeHeroImage 
                              ? (isDark ? 'bg-blue-400 w-4' : 'bg-blue-600 w-4') 
                              : (isDark ? 'bg-slate-700/70 hover:bg-slate-600/70' : 'bg-slate-300/70 hover:bg-slate-400/70')}`}
                        />
                      ))}
                    </div>
                    <button
                      onClick={nextHeroImage}
                      className={`p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${isDark 
                          ? 'bg-slate-800/70 border border-slate-700/50 text-white hover:bg-blue-500/30 hover:border-blue-400/50 hover:shadow-glow' 
                          : 'bg-white/80 border border-slate-200/50 text-slate-700 hover:bg-blue-50 hover:border-blue-300 hover:shadow-md'}`}
                    >
                      <ChevronRightIcon className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Content */}
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Engineering Intelligent
                  <span className={`block bg-gradient-to-r bg-clip-text text-transparent mt-2 mb-2 py-2 ${isDark 
                      ? 'from-blue-400 via-cyan-400 to-blue-500' 
                      : 'from-blue-600 via-blue-700 to-blue-800'}`}>
                    Digital Systems
                  </span>
                  for the Future
                </h1>
                
                <p className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed transition-colors duration-300 mb-8 ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>
                  We transform enterprises through cutting-edge AI solutions, cloud infrastructure, and intelligent automation. 
                  Building tomorrow's technology today with precision, scalability, and innovation at the core.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              >
                <Link
                  to="/contact"
                  className={`group relative inline-flex items-center px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${isDark 
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-sm hover:shadow-blue-500/25' 
                      : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-sm hover:shadow-xl'}`}
                >
                  <Rocket className="w-5 h-5 mr-2" />
                  <span>Start Your Digital Transformation</span>
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <div className={`absolute inset-0 rounded-lg blur opacity-30 group-hover:opacity-50 -z-10 ${isDark 
                      ? 'bg-gradient-to-r from-blue-400 to-cyan-400' 
                      : 'bg-gradient-to-r from-blue-500 to-blue-600'}`} />
                </Link>
                
                <Link
                  to="/ai-solutions"
                  className={`inline-flex items-center px-8 py-4 border-2 rounded-lg font-semibold transition-all duration-300 ${isDark 
                      ? 'border-blue-400/50 text-blue-400 hover:border-blue-400 hover:bg-blue-400/10 hover:shadow-glow' 
                      : 'border-blue-600/50 text-blue-600 hover:border-blue-600 hover:bg-blue-50 shadow-md hover:shadow-lg'}`}
                >
                  Explore AI Solutions
                  <ChevronRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8 mt-16"
              >
                {[
                  { 
                    number: "500+", 
                    label: "Projects Delivered",
                    icon: TrendingUp,
                    description: "Successful implementations"
                  },
                  { 
                    number: "150+", 
                    label: "Enterprise Clients",
                    icon: Users,
                    description: "Global partnerships"
                  },
                  { 
                    number: "99.9%", 
                    label: "System Uptime",
                    icon: Server,
                    description: "Guaranteed reliability"
                  },
                  { 
                    number: "24/7", 
                    label: "AI Support",
                    icon: Clock,
                    description: "Always available"
                  },
                ].map((stat, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ y: -5 }}
                    className={`p-4 rounded-xl backdrop-blur-sm border transition-all duration-300 ${isDark 
                        ? 'bg-slate-800/30 border-slate-700/30 hover:border-blue-400/30 hover:bg-slate-800/50' 
                        : 'bg-white/50 border-slate-200/50 hover:border-blue-300/50 hover:bg-white/80 shadow-sm hover:shadow-md'}`}
                  >
                    <div className="flex items-center justify-center mb-2">
                      <div className={`p-2 rounded-lg ${isDark 
                          ? 'bg-blue-500/20 text-blue-400' 
                          : 'bg-blue-100 text-blue-600'}`}>
                        <stat.icon className="w-5 h-5" />
                      </div>
                    </div>
                    <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r bg-clip-text text-transparent ${isDark 
                        ? 'from-blue-400 to-cyan-400' 
                        : 'from-blue-600 to-blue-700'}`}>
                      {stat.number}
                    </div>
                    <div className={`font-semibold text-sm md:text-base transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>{stat.label}</div>
                    <div className={`text-xs mt-1 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>{stat.description}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Image-Content Sections */}
      <div className="space-y-5 md:space-y-14 py-6 md:py-10">
        {imageContentSections.map((section, index) => (
          <section 
            key={index} 
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
                      <Target className="w-4 h-4 mr-2" />
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
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
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
                  icon: Award,
                  title: "Proven Expertise",
                  description: "8+ years of experience delivering complex enterprise solutions with measurable ROI",
                  color: isDark ? "from-blue-500 to-cyan-500" : "from-blue-600 to-blue-700"
                },
                {
                  icon: ZapIcon,
                  title: "Rapid Deployment",
                  description: "Agile development approach ensures faster time to market for your solutions",
                  color: isDark ? "from-red-500 to-orange-500" : "from-red-700 to-orange-800"
                },
                {
                  icon: UsersIcon,
                  title: "Dedicated Teams",
                  description: "Skilled professionals who become an extension of your in house team",
                  color: isDark ? "from-violet-600 to-violet-500" : "from-violet-800 to-violet-700"
                },
                {
                  icon: ShieldIcon,
                  title: "Enterprise Security",
                  description: "Highest security standards with compliance certifications and regular audits",
                  color: isDark ? "from-green-500 to-green-600" : "from-green-700 to-green-800"
                }
              ].map((item, index) => (
                <div
                  key={index}
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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
                  icon: TargetIcon
                },
                {
                  number: "02",
                  title: "Solution Design",
                  description: "Architect the optimal technical solution with detailed planning",
                  icon: Code
                },
                {
                  number: "03",
                  title: "Development & Testing",
                  description: "Agile development with continuous integration and rigorous testing",
                  icon: Cpu
                },
                {
                  number: "04",
                  title: "Deployment & Support",
                  description: "Seamless deployment and ongoing support for long term success",
                  icon: Shield
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
                    <CheckCircle className="w-6 h-6 text-white" />
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

      {/* Client Testimonials Carousel */}
      <section className={`py-10 md:py-10 transition-all duration-300 ${isDark 
          ? 'bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900' 
          : 'bg-gradient-to-br from-white via-blue-50/50 to-gray-50'}`}>
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                What Our Clients Say
              </h2>
              <p className={`text-lg md:text-xl max-w-3xl mx-auto transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                Hear from industry leaders who have transformed their businesses with our solutions
              </p>
            </div>

            <div className="relative">
              {/* Testimonial Carousel */}
              <div className="relative overflow-hidden rounded-2xl">
                <div className="relative h-full">
                  {/* Active Testimonial */}
                  <motion.div
                    key={activeTestimonial}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className={`backdrop-blur-sm border rounded-2xl p-8 md:p-12 transition-all duration-300 ${isDark 
                        ? 'bg-slate-800/50 border-slate-700/50' 
                        : 'bg-white/70 border-slate-200/50 shadow-xl'}`}
                  >
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                      {/* Client Info */}
                      <div className="lg:w-1/3">
                        <div className="flex flex-col items-center lg:items-start">
                          {/* Avatar */}
                          <div className="relative mb-6">
                            <img
                              src={testimonials[activeTestimonial].avatar}
                              alt={testimonials[activeTestimonial].name}
                              className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                            />
                            <div className={`absolute -bottom-2 -right-2 w-12 h-12 rounded-full flex items-center justify-center ${isDark 
                                ? 'bg-gradient-to-r from-blue-600 to-cyan-600' 
                                : 'bg-gradient-to-r from-blue-600 to-blue-700'}`}>
                              <Quote className="w-6 h-6 text-white" />
                            </div>
                          </div>
                          
                          {/* Client Details */}
                          <div className="text-center lg:text-left">
                            <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                              {testimonials[activeTestimonial].name}
                            </h3>
                            <p className={`font-medium mb-1 transition-colors duration-300 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                              {testimonials[activeTestimonial].position}
                            </p>
                            <p className={`text-sm mb-4 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                              {testimonials[activeTestimonial].company}
                            </p>
                            
                            {/* Rating */}
                            <div className="flex justify-center lg:justify-start mb-4">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-5 h-5 ${i < testimonials[activeTestimonial].rating 
                                    ? (isDark ? 'text-yellow-400' : 'text-yellow-500') 
                                    : (isDark ? 'text-gray-600' : 'text-gray-300')}`}
                                  fill="currentColor"
                                />
                              ))}
                            </div>
                            
                            {/* Project Info */}
                            <div className={`text-sm space-y-2 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                              <div className="flex items-center">
                                <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                                <span>{testimonials[activeTestimonial].project}</span>
                              </div>
                              <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-2 text-blue-500" />
                                <span>{testimonials[activeTestimonial].duration}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Testimonial Content */}
                      <div className="lg:w-2/3">
                        <div className={`text-lg md:text-xl leading-relaxed mb-6 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
                          "{testimonials[activeTestimonial].content}"
                        </div>
                        
                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 mt-8">
                          {[
                            { label: "Client Satisfaction", value: "98%" },
                            { label: "On-time Delivery", value: "95%" },
                            { label: "ROI Delivered", value: "3.5x" },
                          ].map((stat, idx) => (
                            <div 
                              key={idx}
                              className={`text-center p-4 rounded-xl ${isDark 
                                  ? 'bg-slate-800/30 border border-slate-700/30' 
                                  : 'bg-white/50 border border-slate-200/50 shadow-sm'}`}
                            >
                              <div className={`text-2xl font-bold mb-1 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                                {stat.value}
                              </div>
                              <div className={`text-sm transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                                {stat.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                {/* Navigation Controls */}
                <div className="flex justify-center items-center mt-8 space-x-4">
                  <button
                    onClick={prevTestimonial}
                    className={`p-3 rounded-full transition-all duration-300 ${isDark 
                        ? 'bg-slate-800/50 border border-slate-700/50 text-blue-400 hover:bg-blue-500/20 hover:border-blue-400/50 hover:shadow-glow' 
                        : 'bg-white/70 border border-slate-200/50 text-blue-600 hover:bg-blue-50 hover:border-blue-300 hover:shadow-md'}`}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  
                  {/* Dots Indicator */}
                  <div className="flex space-x-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToTestimonial(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeTestimonial 
                            ? (isDark ? 'bg-blue-400' : 'bg-blue-600') 
                            : (isDark ? 'bg-slate-700 hover:bg-slate-600' : 'bg-slate-300 hover:bg-slate-400')}`}
                      />
                    ))}
                  </div>
                  
                  <button
                    onClick={nextTestimonial}
                    className={`p-3 rounded-full transition-all duration-300 ${isDark 
                        ? 'bg-slate-800/50 border border-slate-700/50 text-blue-400 hover:bg-blue-500/20 hover:border-blue-400/50 hover:shadow-glow' 
                        : 'bg-white/70 border border-slate-200/50 text-blue-600 hover:bg-blue-50 hover:border-blue-300 hover:shadow-md'}`}
                  >
                    <ChevronRightIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>
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
                    <Rocket className="w-5 h-5 mr-2" />
                    <span>Start Your Project</span>
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
                    <ChevronRight className="ml-2 w-4 h-4" />
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