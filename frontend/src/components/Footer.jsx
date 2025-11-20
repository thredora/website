import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#B98DFE] py-6 md:py-8 px-4 md:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-row md:flex-row items-center md:items-center justify-between gap-4 md:gap-8">
          {/* Left Section - Logo and Copyright */}
          <div className="flex flex-col items-center md:items-center gap-2 flex-shrink-0">
            <img 
              src="https://customer-assets.emergentagent.com/job_adcb6dde-669b-4845-8137-9955e5fecf88/artifacts/obc3uawj_New%20Logo.png"
              alt="Thredora Logo"
              className="h-8 w-8 md:h-10 md:w-10 rounded-md"
            />
            <p className="text-white text-xs md:text-base whitespace-nowrap" style={{ fontFamily: 'Libre Caslon Text, serif' }}>
              Thredora 2025 ©
            </p>
          </div>

          {/* Middle Section - Links */}
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-12 relative z-20">
            <Link 
              to="/terms" 
              className="text-white hover:text-gray-200 transition-colors duration-300 text-xs md:text-base cursor-pointer touch-manipulation"
              style={{ fontFamily: 'Libre Caslon Text, serif' }}
            >
              Terms and Conditions
            </Link>
            <a 
              href="#privacy" 
              className="text-white hover:text-gray-200 transition-colors duration-300 text-xs md:text-base cursor-pointer touch-manipulation"
              style={{ fontFamily: 'Libre Caslon Text, serif' }}
            >
              Privacy Policy
            </a>
            <a 
              href="#contact" 
              className="text-white hover:text-gray-200 transition-colors duration-300 text-xs md:text-base cursor-pointer touch-manipulation"
              style={{ fontFamily: 'Libre Caslon Text, serif' }}
            >
              Contact Us
            </a>
          </div>

          {/* Right Section - Social Media */}
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-5 flex-shrink-0">
            <a 
              href="https://www.instagram.com/thredora_/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-gray-200 transition-all duration-300 hover:scale-110 cursor-pointer touch-manipulation"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6 md:w-7 md:h-7" />
            </a>
            <a 
              href="https://x.com/thredora" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-gray-200 transition-all duration-300 hover:scale-110 cursor-pointer touch-manipulation"
              aria-label="X (Twitter)"
            >
              <svg 
                className="w-6 h-6 md:w-7 md:h-7" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
