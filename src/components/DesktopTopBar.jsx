import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaWhatsapp, FaLinkedin, FaPhone, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const DesktopTopBar = ({ scrolled, isDark }) => {
  return (
    <div className={`w-full hidden md:block py-2 text-sm transition-all duration-300 ${
      scrolled ? 'shadow-md' : ''
    } ${
      isDark 
        ? 'bg-gradient-to-r from-gray-900 to-slate-800 text-gray-300' 
        : 'bg-gradient-to-r from-blue-800 to-blue-900 text-blue-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
          {/* Social Icons */}
          <div className="flex items-center space-x-4">
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
              href="https://www.instagram.com/levitica_technologies/" 
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
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
            <span className="flex items-center gap-2 hover:text-white transition-colors">
              <FaPhone className="w-3 h-3" />
              <a 
                href="tel:+919032503559" 
                className="hover:text-white transition-colors"
              >
                (India) +91 9032503559
              </a>
            </span>
            <span className="flex items-center gap-2 hover:text-white transition-colors">
              <FaEnvelope className="w-3 h-3" />
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@leviticatechnologies.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                info@leviticatechnologies.com
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopTopBar;