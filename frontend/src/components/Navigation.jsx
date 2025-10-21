import React from 'react';
import { Button } from './ui/button';

const Navigation = () => {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-auto px-4">
      <div className="bg-white/95 backdrop-blur-lg rounded-full px-6 py-3 shadow-lg border border-white/20">
        <div className="flex items-center justify-center space-x-6">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="https://customer-assets.emergentagent.com/job_adcb6dde-669b-4845-8137-9955e5fecf88/artifacts/obc3uawj_New%20Logo.png" 
              alt="Thredora Logo" 
              className="h-8 w-8"
            />
          </div>
          
          {/* Navigation Links */}
          <div className="flex items-center space-x-6">
            <a href="#how-it-works" className="text-gray-600 hover:text-purple-700 transition-colors duration-300 font-medium text-sm" style={{
              fontFamily: 'Libre Caslon Text, serif'
            }}>
              How It Works
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-purple-700 transition-colors duration-300 font-medium text-sm" style={{
              fontFamily: 'Libre Caslon Text, serif'
            }}>
              Pricing
            </a>
            <a href="#wardrobe" className="text-gray-600 hover:text-purple-700 transition-colors duration-300 font-medium text-sm" style={{
              fontFamily: 'Libre Caslon Text, serif'
            }}>
              My Wardrobe
            </a>
          </div>
          
          {/* CTA Button */}
          <Button className="bg-gradient-to-r from-yellow-400 to-lime-400 hover:from-yellow-500 hover:to-lime-500 text-gray-800 font-medium px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 shadow-lg text-sm" style={{
            fontFamily: 'Libre Caslon Text, serif'
          }}>
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;