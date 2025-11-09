import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col relative">
      {/* Background Image - fixed to this section only */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'url(https://customer-assets.emergentagent.com/job_2267f688-6c2c-4449-a687-79611e916621/artifacts/x4kzk0lm_new%20bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'
      }}>
      </div>
      
      {/* Hero Card */}
      <div className="relative z-10 flex-1 flex items-start md:items-center justify-center px-4 md:px-6 pt-20 md:py-20">
        <div className="rounded-3xl p-6 md:p-10 md:pb-16 w-full max-w-[95vw] md:max-w-4xl animate-fadeInUp hero-card-blur" style={{
          backgroundColor: 'rgba(255, 255, 255, 0.80)',
          maxHeight: '75vh',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }}>
        {/* Decorative Wave SVG */}
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 animate-float">
          <svg width="150" height="40" viewBox="0 0 150 40" className="text-purple-400 opacity-50">
            <path 
              d="M10 20 Q 40 10 75 20 T 140 20" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              fill="none"
            />
          </svg>
        </div>
        
        {/* Floating Sparkles */}
        <div className="absolute top-4 right-8 animate-bounce-slow">
          <div className="w-2 h-2 bg-yellow-400 rounded-full opacity-70"></div>
        </div>
        <div className="absolute top-12 left-8 animate-pulse-slow">
          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full opacity-60"></div>
        </div>
        <div className="absolute bottom-8 right-12 animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-2.5 h-2.5 bg-lime-400 rounded-full opacity-50"></div>
        </div>
        
        {/* Thredora Header Image */}
        <div className="text-center mb-4">
          <img 
            src="https://customer-assets.emergentagent.com/job_dress-effortless/artifacts/p6w98td7_Header%20%281%29.png" 
            alt="Thredora" 
            className="mx-auto h-auto animate-bounce-elegant w-4/5 md:w-4/5"
            style={{
              maxWidth: '360px'
            }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://customer-assets.emergentagent.com/job_dress-effortless/artifacts/g5mqymry_Header.png";
            }}
          />
        </div>
        
        {/* Main Headline */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-3xl lg:text-4xl leading-tight" style={{
            fontFamily: 'Libre Caslon Text, serif'
          }}>
            <span style={{ color: '#7C60C7' }}>What if getting dressed was </span>
            <span style={{ color: '#E6B800' }} className="font-semibold animate-pulse-slow">effortless</span><span style={{ color: '#7C60C7' }}>,</span>
          </h2>
          <h2 className="text-3xl md:text-3xl lg:text-4xl leading-tight" style={{
            fontFamily: 'Libre Caslon Text, serif',
            color: '#525A71'
          }}>
            every single day?
          </h2>
        </div>
        
        {/* Subheading */}
        <div className="text-center mb-8">
          {/* Desktop Version */}
          <p className="text-lg md:text-xl mb-2 hidden md:flex items-center justify-center" style={{
            fontFamily: 'Libre Caslon Text, serif',
            color: '#525A71'
          }}>
            <span>Your AI Stylist on</span>
            <span className="inline-flex items-center ml-2">
              <div className="bg-green-500 rounded-lg p-1 mr-1">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.531 3.609"/>
                </svg>
              </div>
              <span>WhatsApp</span>
            </span>
          </p>
          
          {/* Mobile Version */}
          <p className="text-lg mb-2 md:hidden text-center" style={{
            fontFamily: 'Libre Caslon Text, serif',
            color: '#525A71'
          }}>
            Your AI Stylist on WhatsApp
          </p>
          
          <p className="text-lg md:text-xl" style={{
            fontFamily: 'Libre Caslon Text, serif',
            color: '#525A71'
          }}>
            Turn Your Wardrobe Into{' '}
            <span style={{ color: '#E6B800' }} className="font-semibold animate-pulse-slow">Endless</span>{' '}
            Possibilities
          </p>
        </div>
        
        {/* CTA Button */}
        <div className="flex justify-center mt-6">
          <Button className="bg-gradient-to-r from-yellow-400 to-lime-400 hover:from-yellow-500 hover:to-lime-500 text-gray-800 text-lg font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-110 shadow-xl flex items-center gap-2 group animate-bounce-subtle hover:shadow-2xl" style={{
            fontFamily: 'Libre Caslon Text, serif'
          }}>
            Let's Get Started
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </Button>
        </div>
        
        {/* Bottom Decorative Wave */}
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 rotate-180 animate-float" style={{ animationDelay: '0.5s' }}>
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
    </div>
  );
};

export default HeroSection;