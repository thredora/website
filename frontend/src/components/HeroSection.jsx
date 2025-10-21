import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(180deg, #A891E8 0%, #8B6FD9 100%)'
      }}>
        {/* Background Illustration */}
        <div className="absolute inset-0 opacity-60">
          <img 
            src="https://customer-assets.emergentagent.com/job_adcb6dde-669b-4845-8137-9955e5fecf88/artifacts/luwk62at_ChatGPT%20Image%20Sep%2028%2C%202025%2C%2008_20_46%20PM.png" 
            alt="Wardrobe Background" 
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
      
      {/* Hero Card */}
      <div className="relative z-10 rounded-3xl p-8 md:p-12 max-w-3xl mx-auto" style={{
        backgroundColor: 'rgba(255, 255, 255, 0.85)'
      }}>
        {/* Decorative Wave SVG */}
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
          <svg width="150" height="40" viewBox="0 0 150 40" className="text-purple-400 opacity-50">
            <path 
              d="M10 20 Q 40 10 75 20 T 140 20" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              fill="none"
            />
          </svg>
        </div>
        
        {/* Thredora Header Image */}
        <div className="text-center mb-6">
          <img 
            src="https://customer-assets.emergentagent.com/job_dress-effortless/artifacts/g5mqymry_Header.png" 
            alt="Thredora" 
            className="mx-auto max-w-xs md:max-w-sm h-auto"
          />
        </div>
        
        {/* Main Headline */}
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl leading-tight mb-2" style={{
            fontFamily: 'Libre Caslon Text, serif'
          }}>
            <span style={{ color: '#7C60C7' }}>What if getting dressed was </span>
            <span style={{ color: '#ABA728' }} className="font-semibold">effortless</span>,
          </h2>
          <h2 className="text-2xl md:text-3xl lg:text-4xl leading-tight" style={{
            fontFamily: 'Libre Caslon Text, serif',
            color: '#525A71'
          }}>
            every single day?
          </h2>
        </div>
        
        {/* Subheading */}
        <div className="text-center mb-8">
          <p className="text-lg md:text-xl mb-2" style={{
            fontFamily: 'Libre Caslon Text, serif',
            color: '#525A71'
          }}>
            Your AI Stylist on{' '}
            <span className="inline-flex items-center mx-2">
              <div className="bg-green-500 rounded-lg p-1 mr-1">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.531 3.609"/>
                </svg>
              </div>
              WhatsApp
            </span>
          </p>
          <p className="text-lg md:text-xl" style={{
            fontFamily: 'Libre Caslon Text, serif',
            color: '#525A71'
          }}>
            Turn Your Wardrobe Into{' '}
            <span style={{ color: '#ABA728' }} className="font-semibold">Endless</span>{' '}
            Possibilities
          </p>
        </div>
        
        {/* CTA Button */}
        <div className="text-center">
          <Button className="bg-gradient-to-r from-yellow-400 to-lime-400 hover:from-yellow-500 hover:to-lime-500 text-gray-800 text-lg font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-xl flex items-center gap-2 mx-auto group" style={{
            fontFamily: 'Libre Caslon Text, serif'
          }}>
            Let's Get Started
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
        
        {/* Bottom Decorative Wave */}
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 rotate-180">
          <svg width="150" height="40" viewBox="0 0 150 40" className="text-purple-400 opacity-50">
            <path 
              d="M10 20 Q 40 10 75 20 T 140 20" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              fill="none"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;