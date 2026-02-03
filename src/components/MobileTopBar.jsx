import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp, FaLinkedin, FaPhone, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const MobileTopBar = ({ scrolled, isDark }) => {
  return (
    <div className={`w-full md:hidden py-1 text-xs transition-all duration-300 ${
      scrolled ? 'shadow-md' : ''
    } ${
      isDark 
        ? 'bg-gradient-to-r from-gray-900 to-slate-800 text-gray-300' 
        : 'bg-gradient-to-r from-blue-800 to-blue-900 text-blue-100'
    }`}>
      <div className="relative overflow-hidden w-full">
        {/* Marquee Container */}
        <div className="animate-marquee whitespace-nowrap">
          {/* Marquee Item 1 */}
          <div className="inline-flex items-center space-x-3 mr-8">
            {/* Social Icons */}
            <a 
              href="https://www.facebook.com/people/Levitica-Technologies/61556544303087" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-white transition-colors hover:scale-110"
              aria-label="Facebook"
            >
              <FaFacebookF className="w-4 h-4" />
            </a>
            <a 
              href="https://x.com/levitica02?s=11" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-white transition-colors hover:scale-110"
              aria-label="Twitter"
            >
              <FaXTwitter className="w-4 h-4" />
            </a>
            <a 
              href="https://www.instagram.com/life_at_levitica/" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-white transition-colors hover:scale-110"
              aria-label="Instagram"
            >
              <FaInstagram className="w-4 h-4" />
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-white transition-colors hover:scale-110"
              aria-label="YouTube"
            >
              <FaYoutube className="w-4 h-4" />
            </a>
            <a 
              href="https://wa.me/919032503559" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-white transition-colors hover:scale-110"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="w-4 h-4" />
            </a>
            <a 
              href="https://www.linkedin.com/company/levitica-technologies-pvt-ltd/" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-white transition-colors hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
            
            {/* Separator */}
            <span className="text-gray-400 mr-2">|</span>
            
            {/* Contact Info */}
            <span className="flex items-center gap-2 hover:text-white transition-colors">
              <FaPhone className="w-3 h-3 flex-shrink-0" />
              <a 
                href="tel:+919032503559" 
                className="hover:text-white transition-colors text-xs whitespace-nowrap"
              >
                (India) +91 9032503559
              </a>
            </span>
            
            <span className="flex items-center gap-2 hover:text-white transition-colors">
              <FaEnvelope className="w-3 h-3 flex-shrink-0" />
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@leviticatechnologies.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors text-xs whitespace-nowrap"
              >
                info@leviticatechnologies.com
              </a>
            </span>
          </div>
          
          {/* Marquee Item 2 (Duplicate for seamless effect) */}
          <div className="inline-flex items-center space-x-3 mr-8">
            {/* Social Icons */}
            <a 
              href="https://www.facebook.com/people/Levitica-Technologies/61556544303087" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-white transition-colors hover:scale-110"
              aria-label="Facebook"
            >
              <FaFacebookF className="w-4 h-4" />
            </a>
            <a 
              href="https://x.com/levitica02?s=11" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-white transition-colors hover:scale-110"
              aria-label="Twitter"
            >
              <FaXTwitter className="w-4 h-4" />
            </a>
            <a 
              href="https://www.instagram.com/life_at_levitica/" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-white transition-colors hover:scale-110"
              aria-label="Instagram"
            >
              <FaInstagram className="w-4 h-4" />
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-white transition-colors hover:scale-110"
              aria-label="YouTube"
            >
              <FaYoutube className="w-4 h-4" />
            </a>
            <a 
              href="https://wa.me/919032503559" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-white transition-colors hover:scale-110"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="w-4 h-4" />
            </a>
            <a 
              href="https://www.linkedin.com/company/levitica-technologies-pvt-ltd/" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-white transition-colors hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
            
            {/* Separator */}
            <span className="text-gray-400">|</span>
            
            {/* Contact Info */}
            <span className="flex items-center gap-2 hover:text-white transition-colors">
              <FaPhone className="w-3 h-3 flex-shrink-0" />
              <a 
                href="tel:+919032503559" 
                className="hover:text-white transition-colors text-xs whitespace-nowrap"
              >
                (India) +91 9032503559
              </a>
            </span>
            
            <span className="flex items-center gap-2 hover:text-white transition-colors">
              <FaEnvelope className="w-3 h-3 flex-shrink-0" />
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@leviticatechnologies.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors text-xs whitespace-nowrap"
              >
                info@leviticatechnologies.com
              </a>
            </span>
          </div>
        </div>
        
        {/* Fade edges for better UX */}
        <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-blue-900/100 to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-blue-900/100 to-transparent pointer-events-none"></div>
      </div>
      
      {/* CSS for marquee animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-marquee {
          animation: marquee 100s linear infinite;
          display: inline-block;
          padding-left: 100%;
        }
        
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        
        /* For better performance on mobile */
        @media (max-width: 640px) {
          .animate-marquee {
            animation-duration: 40s;
          }
        }
      `}</style>
    </div>
  );
};

export default MobileTopBar;