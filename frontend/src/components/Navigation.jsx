import React from 'react';
import { Button } from './ui/button';

const Navigation = () => {
  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-6">
      <div className="bg-white/95 backdrop-blur-lg rounded-full px-8 py-4 shadow-lg border border-white/20">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="https://customer-assets.emergentagent.com/job_adcb6dde-669b-4845-8137-9955e5fecf88/artifacts/obc3uawj_New%20Logo.png" 
              alt="Thredora Logo" 
              className="h-10 w-10"
            />
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-gray-600 hover:text-purple-700 transition-colors duration-300 font-medium">
              How It Works
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-purple-700 transition-colors duration-300 font-medium">
              Pricing
            </a>
            <a href="#wardrobe" className="text-gray-600 hover:text-purple-700 transition-colors duration-300 font-medium">
              My Wardrobe
            </a>
          </div>
          
          {/* CTA Button */}
          <Button className="bg-gradient-to-r from-yellow-400 to-lime-400 hover:from-yellow-500 hover:to-lime-500 text-gray-800 font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 shadow-lg">
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;