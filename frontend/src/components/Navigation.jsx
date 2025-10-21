import React from 'react';
import { Button } from './ui/button';

const Navigation = () => {
  return (
    <nav className="fixed top-4 left-1/2 z-50 px-4" style={{ transform: 'translateX(-50%)' }}>
      <div className="bg-white/95 backdrop-blur-lg rounded-full px-4 py-2 shadow-lg border border-white/20 animate-slideFromTop" style={{
        width: '50vw',
        maxWidth: '800px',
        minWidth: '600px'
      }}>
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <a href="/" className="flex items-center hover:scale-110 transition-all duration-300 flex-1 justify-center">
            <img 
              src="https://customer-assets.emergentagent.com/job_adcb6dde-669b-4845-8137-9955e5fecf88/artifacts/obc3uawj_New%20Logo.png" 
              alt="Thredora Logo" 
              className="h-8 w-8 rounded-md shadow-sm"
            />
          </a>
          
          {/* Navigation Links */}
          <div className="flex items-center flex-1 justify-center">
            <a href="#how-it-works" className="text-gray-600 hover:text-purple-700 transition-all duration-300 font-medium text-sm hover:scale-105 flex-1 text-center" style={{
              fontFamily: 'Libre Caslon Text, serif'
            }}>
              How It Works
            </a>
          </div>
          
          <div className="flex items-center flex-1 justify-center">
            <a href="#pricing" className="text-gray-600 hover:text-purple-700 transition-all duration-300 font-medium text-sm hover:scale-105 flex-1 text-center" style={{
              fontFamily: 'Libre Caslon Text, serif'
            }}>
              Pricing
            </a>
          </div>
          
          <div className="flex items-center flex-1 justify-center">
            <a href="#wardrobe" className="text-gray-600 hover:text-purple-700 transition-all duration-300 font-medium text-sm hover:scale-105 flex-1 text-center" style={{
              fontFamily: 'Libre Caslon Text, serif'
            }}>
              My Wardrobe
            </a>
          </div>
          
          {/* CTA Button */}
          <div className="flex-1 flex justify-center">
            <Button className="bg-gradient-to-r from-yellow-400 to-lime-400 hover:from-yellow-500 hover:to-lime-500 text-gray-800 font-medium px-4 py-1.5 rounded-full transition-all duration-300 hover:scale-105 shadow-lg text-sm hover:shadow-xl" style={{
              fontFamily: 'Libre Caslon Text, serif'
            }}>
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;