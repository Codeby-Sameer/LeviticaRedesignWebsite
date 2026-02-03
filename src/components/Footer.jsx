// import { motion } from 'framer-motion';
// import { Brain, Mail, MapPin, Phone, Linkedin, Twitter, Github } from 'lucide-react';
// import { useTheme } from '../contexts/ThemeContext';

// const Footer = () => {
//   const { isDark } = useTheme();

//   return (
//     <footer className={`mt-20 border-t transition-all duration-300 ${
//       isDark 
//         ? 'bg-slate-900/95 border-slate-700/50' 
//         : 'bg-white/95 border-slate-200/50 shadow-lg'
//     }`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           {/* Company Info */}
//           <div className="space-y-4">
//             <div className="flex items-center space-x-2">
//               <Brain className={`w-8 h-8 ${
//                 isDark ? 'text-blue-400' : 'text-blue-600'
//               }`} />
//               <span className={`text-xl font-bold bg-gradient-to-r bg-clip-text text-transparent ${
//                 isDark 
//                   ? 'from-blue-400 to-cyan-300' 
//                   : 'from-blue-600 to-blue-800'
//               }`}>
//                 Levitica Technologies
//               </span>
//             </div>
//             <p className={`text-sm leading-relaxed ${
//               isDark ? 'text-gray-400' : 'text-slate-600'
//             }`}>
//               Engineering intelligent digital systems for the future. We transform businesses through AI-driven innovation and cutting-edge technology solutions.
//             </p>
//             <div className="flex space-x-4">
//               <motion.a
//                 href="#"
//                 whileHover={{ scale: 1.1 }}
//                 className={`transition-colors ${
//                   isDark 
//                     ? 'text-gray-400 hover:text-blue-400' 
//                     : 'text-slate-500 hover:text-blue-600'
//                 }`}
//               >
//                 <Linkedin className="w-5 h-5" />
//               </motion.a>
//               <motion.a
//                 href="#"
//                 whileHover={{ scale: 1.1 }}
//                 className={`transition-colors ${
//                   isDark 
//                     ? 'text-gray-400 hover:text-blue-400' 
//                     : 'text-slate-500 hover:text-blue-600'
//                 }`}
//               >
//                 <Twitter className="w-5 h-5" />
//               </motion.a>
//               <motion.a
//                 href="#"
//                 whileHover={{ scale: 1.1 }}
//                 className={`transition-colors ${
//                   isDark 
//                     ? 'text-gray-400 hover:text-blue-400' 
//                     : 'text-slate-500 hover:text-blue-600'
//                 }`}
//               >
//                 <Github className="w-5 h-5" />
//               </motion.a>
//             </div>
//           </div>

//           {/* Services */}
//           <div className="space-y-4">
//             <h3 className={`font-semibold text-lg ${
//               isDark ? 'text-white' : 'text-slate-900'
//             }`}>Services</h3>
//             <ul className={`space-y-2 text-sm ${
//               isDark ? 'text-gray-400' : 'text-slate-600'
//             }`}>
//               <li><Link href="#" className={`transition-colors ${
//                 isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'
//               }`}>Custom Software Engineering</Link></li>
//               <li><Link href="#" className={`transition-colors ${
//                 isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'
//               }`}>Web & Mobile Development</Link></li>
//               <li><Link href="#" className={`transition-colors ${
//                 isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'
//               }`}>Cloud & DevOps</Link></li>
//               <li><Link href="#" className={`transition-colors ${
//                 isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'
//               }`}>AI Solutions</Link></li>
//               <li><Link href="#" className={`transition-colors ${
//                 isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'
//               }`}>Digital Transformation</Link></li>
//             </ul>
//           </div>

//           {/* Technologies */}
//           <div className="space-y-4">
//             <h3 className={`font-semibold text-lg ${
//               isDark ? 'text-white' : 'text-slate-900'
//             }`}>Technologies</h3>
//             <ul className={`space-y-2 text-sm ${
//               isDark ? 'text-gray-400' : 'text-slate-600'
//             }`}>
//               <li><Link href="#" className={`transition-colors ${
//                 isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'
//               }`}>React & Node.js</Link></li>
//               <li><Link href="#" className={`transition-colors ${
//                 isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'
//               }`}>AWS & Azure</Link></li>
//               <li><Link href="#" className={`transition-colors ${
//                 isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'
//               }`}>AI & Machine Learning</Link></li>
//               <li><Link href="#" className={`transition-colors ${
//                 isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'
//               }`}>Database Solutions</Link></li>
//               <li><Link href="#" className={`transition-colors ${
//                 isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'
//               }`}>DevOps Automation</Link></li>
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div className="space-y-4">
//             <h3 className={`font-semibold text-lg ${
//               isDark ? 'text-white' : 'text-slate-900'
//             }`}>Contact</h3>
//             <div className={`space-y-3 text-sm ${
//               isDark ? 'text-gray-400' : 'text-slate-600'
//             }`}>
//               <div className="flex items-center space-x-3">
//                 <Mail className={`w-4 h-4 ${
//                   isDark ? 'text-blue-400' : 'text-blue-600'
//                 }`} />
//                 <span>contact@leviticatech.com</span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <Phone className={`w-4 h-4 ${
//                   isDark ? 'text-blue-400' : 'text-blue-600'
//                 }`} />
//                 <span>+1 (555) 123-4567</span>
//               </div>
//               <div className="flex items-start space-x-3">
//                 <MapPin className={`w-4 h-4 mt-0.5 ${
//                   isDark ? 'text-blue-400' : 'text-blue-600'
//                 }`} />
//                 <span>Silicon Valley, CA<br />United States</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className={`border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center ${
//           isDark ? 'border-slate-700/50' : 'border-slate-200/50'
//         }`}>
//           <p className={`text-sm ${
//             isDark ? 'text-gray-400' : 'text-slate-600'
//           }`}>
//             © 2026 Levitica Technologies. All rights reserved.
//           </p>
//           <div className={`flex space-x-6 mt-4 md:mt-0 text-sm ${
//             isDark ? 'text-gray-400' : 'text-slate-600'
//           }`}>
//             <Link href="#" className={`transition-colors ${
//               isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'
//             }`}>Privacy Policy</Link>
//             <Link href="#" className={`transition-colors ${
//               isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'
//             }`}>Terms of Service</Link>
//             <Link href="#" className={`transition-colors ${
//               isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'
//             }`}>Cookies</Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




























import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { Link } from 'react-router-dom';
import { FaXTwitter,FaGlobe, FaHeart } from 'react-icons/fa6';
import {FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaMap, FaPhone, FaWhatsapp, FaYoutube,} from 'react-icons/fa';

const Footer = () => {
  const { isDark } = useTheme();

  // Logo paths - update with your actual logo files
  const lightLogo = '/images/company-logo.png';
  const darkLogo = '/images/company-logo-dark.png';
  const logoAlt = 'Levitica Technologies Logo';

  const footerLinks = {
    services: [
      { name: 'Web Development', path: '/services/web-development' },
      { name: 'Cloud & DevOps Solutions', path: '/services/cloud-devops' },
      { name: 'AI & Machine Learning', path: '/services/ai-machine-learning' },
      { name: 'HR & Recruitment', path: '/services/hr-recruitment' },
      { name: 'Digital Marketing', path: '/services/digital-marketing' },
      { name: 'Legal Finance', path: '/services/legal-finance' },
    ],
    // technologies: [
    //   { name: 'React & Next.js', path: '/technologies' },
    //   { name: 'Node.js & Python', path: '/technologies' },
    //   { name: 'AWS & Azure Cloud', path: '/technologies' },
    //   { name: 'AI/ML Frameworks', path: '/technologies' },
    //   { name: 'Database Systems', path: '/technologies' },
    //   { name: 'DevOps Tools', path: '/technologies' },
    // ],
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Services', path: '/services' },
      { name: 'Careers', path: '/careers' },
      { name: 'AI Solutions', path: '/ai-solutions' },
      { name: 'contact', path: '/contact' },
    ]
  };

  const socialLinks = [
    { icon: FaLinkedin, href: 'https://www.linkedin.com/company/levitica-technologies-pvt-ltd/', label: 'LinkedIn' },
    { icon: FaXTwitter, href: 'https://x.com/levitica02?s=11', label: 'Twitter' },
    { icon: FaWhatsapp, href: 'https://wa.me/919032503559', label: 'WhatsApp' },
    { icon: FaInstagram, href: 'https://www.instagram.com/levitica_technologies/', label: 'Instagram' },
    { icon: FaFacebook, href: 'https://www.facebook.com/people/Levitica-Technologies/61556544303087', label: 'Facebook' },
    { icon: FaYoutube, href: 'https://www.youtube.com/@leviticatechnologies', label: 'YouTube' },
  ];

  const contactInfo = [
    { icon: FaEnvelope, text: '', href: 'mailto:info@leviticatechnologies.com' },
    { icon: FaPhone, text: '+91 9032503559', href: 'tel:+919032503559' },
    { icon: FaMap, text: `Office #409, 4th Floor, Jain sadguru image's capital park, Ayyappa Society, VIP Hills, Silicon Valley, Madhapur, Hyderabad, Telangana 500081`, href: 'https://maps.google.com' },
  ];

  return (
    <footer className={`transition-all duration-300 ${
      isDark 
        ? 'bg-gradient-to-b from-slate-900 to-gray-950 border-slate-800/50' 
        : 'bg-gradient-to-b from-blue-800 via-blue-900 to-gray-900 text-white'
    }`}>
      {/* Wave Divider */}
      {/* <div className="relative -top-1">
        <svg className="w-full h-12" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 70 720 75C840 80 960 80 1080 85C1200 90 1320 100 1380 105L1440 110V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V120Z" 
            fill={isDark ? '#0f172a' : '#1e40af'} 
          />
        </svg>
      </div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mb-12">
          {/* Left Column - Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              {/* Logo */}
              <div className="relative group">
                {/* <img
                  src={isDark ? darkLogo : lightLogo}
                  alt={logoAlt}
                  className="h-12 w-auto transition-all duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    const fallback = document.createElement('div');
                    fallback.className = `h-12 w-32 flex items-center justify-center rounded-lg ${
                      isDark ? 'bg-blue-900' : 'bg-blue-600'
                    }`;
                    fallback.innerHTML = `<span class="font-bold text-white">LEVITICA</span>`;
                    e.target.parentNode.appendChild(fallback);
                  }}
                /> */}
                {/* Subtle glow */}
                <div className="absolute inset-0 bg-blue-500/20 blur-xl group-hover:bg-blue-400/30 transition-all duration-300" />
              </div>
              
              <div>
                <h2 className="text-2xl font-bold bg-white bg-clip-text text-transparent">
                  Levitica Technologies
                </h2>
                <p className="text-sm text-blue-100/80 mt-1">
                  Engineering Intelligent Digital Futures
                </p>
              </div>
            </div>

            <p className="text-blue-100/80 leading-relaxed max-w-lg">
              We transform businesses through AI driven innovation and cutting edge technology 
              solutions. Our team of experts delivers exceptional digital experiences that drive 
              growth and efficiency.
            </p>

            {/* Social Links */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-2 rounded-lg transition-all duration-200 ${
                      isDark 
                        ? 'bg-blue-900/30 hover:bg-blue-800 text-blue-300 hover:text-white' 
                        : 'bg-blue-700/30 hover:bg-blue-600 text-white hover:text-white'
                    }`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
              <div className="flex items-center space-x-2 text-sm text-blue-100/60">
                <FaGlobe className="w-4 h-4" />
                <span>Global Presence: US • UK • India • Singapore</span>
              </div>
            </div>
          </div>

          {/* Right Column - Quick Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="space-y-4">
                <h3 className="font-semibold text-lg text-white capitalize">
                  {category.replace(/([A-Z])/g, ' $1')}
                </h3>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        className="group flex items-center text-blue-100/70 hover:text-white transition-all duration-200 text-sm"
                      >
                        {/* <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:-translate-x-2 transition-all" /> */}
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Contact & Newsletter Section */}
        

        {/* Bottom Bar */}
        <div className={`border-t pt-8 flex flex-col md:flex-row justify-between items-center ${
          isDark ? 'border-blue-800/50' : 'border-blue-700/50'
        }`}>
          <div className="flex items-center space-x-4">
            <p className="text-sm text-blue-100/70">
              © {new Date().getFullYear()} Levitica Technologies. All rights reserved.
            </p>
            
          </div>
          
          <div className="flex flex-wrap gap-4 md:gap-6 mt-4 md:mt-0 text-sm text-blue-100/70">
            <Link 
              to="/privacy" 
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              Privacy Policy
            </Link>
            <span className="text-blue-100/50 hidden md:inline">•</span>
            <Link 
              to="/terms" 
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              Terms of Service
            </Link>
            {/* <span className="text-blue-100/50 hidden md:inline">•</span>
            <Link 
              href="#" 
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              Cookie Policy
            </Link>
            <span className="text-blue-100/50 hidden md:inline">•</span>
            <Link 
              href="#" 
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              GDPR Compliance
            </Link>
            <span className="text-blue-100/50 hidden md:inline">•</span>
            <Link 
              href="#" 
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              Sitemap
            </Link> */}
          </div>
        </div>

        {/* Trust Badges */}
        {/* <div className="mt-8 pt-6 border-t border-blue-800/50">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-blue-100/50">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>ISO 27001 Certified</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>GDPR Compliant</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>100% Secure & Trusted</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>24/7 Support Available</span>
            </div>
          </div>
        </div> */}
      </div>

      {/* Back to Top */}
      {/* <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 p-3 rounded-full shadow-lg transition-all duration-300 z-50 ${
          isDark 
            ? 'bg-blue-800 hover:bg-blue-700 text-blue-200' 
            : 'bg-blue-600 hover:bg-blue-500 text-white'
        }`}
        aria-label="Back to top"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg> 
      </button>*/}

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;