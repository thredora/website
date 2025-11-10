import React, { useEffect, useState } from 'react';

const HowItWorks = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('how-it-works');
      if (section) {
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top < windowHeight && rect.bottom > 0) {
          const sectionHeight = rect.height;
          const scrolled = windowHeight - rect.top;
          const progress = Math.max(0, Math.min(1, scrolled / (sectionHeight * 1.2)));
          setScrollProgress(progress);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Improved gradient with new yellow color
  const interpolateColor = (progress) => {
    if (progress < 0.35) {
      // First 35%: Purple to White
      const localProgress = progress / 0.35;
      const start = { r: 185, g: 140, b: 255 }; // #B98CFF
      const end = { r: 255, g: 255, b: 255 }; // #FFFFFF
      
      const r = Math.round(start.r + (end.r - start.r) * localProgress);
      const g = Math.round(start.g + (end.g - start.g) * localProgress);
      const b = Math.round(start.b + (end.b - start.b) * localProgress);
      
      return `rgb(${r}, ${g}, ${b})`;
    } else if (progress < 0.65) {
      // Middle 30%: Stay White
      return 'rgb(255, 255, 255)';
    } else {
      // Last 35%: White to Bright Yellow
      const localProgress = (progress - 0.65) / 0.35;
      const start = { r: 255, g: 255, b: 255 }; // #FFFFFF
      const end = { r: 233, g: 222, b: 95 }; // #E9DE5F
      
      const r = Math.round(start.r + (end.r - start.r) * localProgress);
      const g = Math.round(start.g + (end.g - start.g) * localProgress);
      const b = Math.round(start.b + (end.b - start.b) * localProgress);
      
      return `rgb(${r}, ${g}, ${b})`;
    }
  };

  return (
    <section 
      id="how-it-works" 
      className="min-h-screen py-16 md:py-20 px-4 md:px-6 relative overflow-hidden transition-colors duration-500"
      style={{
        background: `linear-gradient(180deg, #B98CFF 0%, ${interpolateColor(scrollProgress)} 100%)`
      }}
    >
      {/* Floating Decorative Circles */}
      <div className="absolute top-20 left-10 w-16 h-16 rounded-full opacity-30 animate-float" style={{ backgroundColor: '#FFB6C1', animationDelay: '0s' }}></div>
      <div className="absolute top-40 right-16 w-12 h-12 rounded-full opacity-25 animate-float" style={{ backgroundColor: '#87CEEB', animationDelay: '1s' }}></div>
      <div className="absolute top-[60%] left-[15%] w-20 h-20 rounded-full opacity-20 animate-float" style={{ backgroundColor: '#DDA0DD', animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-40 right-[10%] w-14 h-14 rounded-full opacity-30 animate-float" style={{ backgroundColor: '#F0E68C', animationDelay: '1.5s' }}></div>
      <div className="absolute top-[30%] right-[25%] w-10 h-10 rounded-full opacity-25 animate-float" style={{ backgroundColor: '#FFE4B5', animationDelay: '0.8s' }}></div>
      
      {/* Main Title */}
      <div className="max-w-6xl mx-auto text-center mb-16 md:mb-20 px-4" style={{ position: 'relative', zIndex: 2 }}>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight md:leading-relaxed" style={{ position: 'relative', zIndex: 10 }}>
          <span style={{ color: '#5B3A9E', position: 'relative', zIndex: 10 }}>From cluttered closet to </span>
          
          {/* Perfectly circular blue bubble behind "perfect outfit" */}
          <span className="relative inline-block mx-1 md:mx-2" style={{ zIndex: 5 }}>
            {/* Mobile bubble - smaller with floating animation */}
            <span 
              className="absolute md:hidden bubble-float"
              style={{
                width: '280px',
                height: '280px',
                backgroundColor: '#91C5FF',
                borderRadius: '50%',
                zIndex: -1,
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)'
              }}
            ></span>
            {/* Desktop bubble */}
            <span 
              className="absolute hidden md:block bubble-float"
              style={{
                width: '340px',
                height: '340px',
                backgroundColor: '#91C5FF',
                borderRadius: '50%',
                zIndex: -1,
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)'
              }}
            ></span>
            <span className="relative px-2" style={{ color: '#FFFFFF', zIndex: 10 }}>perfect outfit</span>
          </span>
          <span style={{ color: '#5B3A9E', position: 'relative', zIndex: 10 }}> in 3 steps</span>
        </h2>
      </div>

      {/* Desktop/Tablet: Three Images in Grid */}
      <div className="hidden md:grid max-w-7xl mx-auto grid-cols-3 gap-6 lg:gap-8 mb-20" style={{ position: 'relative', zIndex: 10 }}>
        {/* Image 1 */}
        <div className="flex justify-center items-center animate-slideInFromRight">
          <img 
            src="https://customer-assets.emergentagent.com/job_2267f688-6c2c-4449-a687-79611e916621/artifacts/0ogs0ou6_1-%20HIW.png"
            alt="Step 1 - Upload Your Wardrobe"
            className="w-full h-auto rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Image 2 */}
        <div className="flex justify-center items-center animate-slideInFromRight" style={{ animationDelay: '0.2s' }}>
          <img 
            src="https://customer-assets.emergentagent.com/job_2267f688-6c2c-4449-a687-79611e916621/artifacts/dslyh2yk_2-%20HIW.png"
            alt="Step 2 - Chat With Thread"
            className="w-full h-auto rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Image 3 */}
        <div className="flex justify-center items-center animate-slideInFromRight" style={{ animationDelay: '0.4s' }}>
          <img 
            src="https://customer-assets.emergentagent.com/job_2267f688-6c2c-4449-a687-79611e916621/artifacts/bhu88p5s_3-%20HIW.png"
            alt="Step 3 - Step Out In Style"
            className="w-full h-auto rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Mobile: Simple Stacked Images */}
      <div className="md:hidden flex flex-col gap-8 max-w-md mx-auto mb-16" style={{ position: 'relative', zIndex: 10 }}>
        {/* Image 1 */}
        <div className="flex justify-center items-center">
          <img 
            src="https://customer-assets.emergentagent.com/job_2267f688-6c2c-4449-a687-79611e916621/artifacts/0ogs0ou6_1-%20HIW.png"
            alt="Step 1 - Upload Your Wardrobe"
            className="w-full h-auto rounded-2xl shadow-xl active:scale-95 transition-transform duration-200"
          />
        </div>

        {/* Image 2 */}
        <div className="flex justify-center items-center">
          <img 
            src="https://customer-assets.emergentagent.com/job_2267f688-6c2c-4449-a687-79611e916621/artifacts/dslyh2yk_2-%20HIW.png"
            alt="Step 2 - Chat With Thread"
            className="w-full h-auto rounded-2xl shadow-xl active:scale-95 transition-transform duration-200"
          />
        </div>

        {/* Image 3 */}
        <div className="flex justify-center items-center">
          <img 
            src="https://customer-assets.emergentagent.com/job_2267f688-6c2c-4449-a687-79611e916621/artifacts/bhu88p5s_3-%20HIW.png"
            alt="Step 3 - Step Out In Style"
            className="w-full h-auto rounded-2xl shadow-xl active:scale-95 transition-transform duration-200"
          />
        </div>
      </div>

      {/* New Headline */}
      <div className="max-w-6xl mx-auto text-center mb-16 px-4" style={{ position: 'relative', zIndex: 2 }}>
        {/* Mobile: Single large bubble behind entire headline */}
        <div className="md:hidden absolute inset-0 flex items-center justify-center" style={{ zIndex: 0 }}>
          <div 
            className="bubble-float"
            style={{
              width: '320px',
              height: '320px',
              backgroundColor: 'rgba(145, 197, 255, 0.7)',
              borderRadius: '50%',
              position: 'absolute'
            }}
          ></div>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-relaxed md:leading-normal relative" style={{ zIndex: 1 }}>
          {/* Desktop version with individual bubbles and tighter spacing */}
          <span className="hidden md:inline">
            <span style={{ color: '#5B3A9E' }}>Look</span>{' '}
            
            {/* Bubble behind "Good." */}
            <span className="relative inline-block mx-1 my-1">
              <span 
                className="absolute bubble-float"
                style={{
                  width: '180px',
                  height: '180px',
                  backgroundColor: '#91C5FF',
                  borderRadius: '50%',
                  zIndex: 1,
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)'
                }}
              ></span>
              <span className="relative px-3" style={{ color: '#FFFFFF', zIndex: 10 }}>Good.</span>
            </span>{' '}
            
            <span style={{ color: '#5B3A9E' }}>Feel</span>{' '}
            
            {/* Bubble behind "Confident." */}
            <span className="relative inline-block mx-1 my-1">
              <span 
                className="absolute bubble-float"
                style={{
                  width: '240px',
                  height: '240px',
                  backgroundColor: '#91C5FF',
                  borderRadius: '50%',
                  zIndex: 1,
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)'
                }}
              ></span>
              <span className="relative px-3" style={{ color: '#FFFFFF', zIndex: 10 }}>Confident.</span>
            </span>{' '}
            
            <span style={{ color: '#5B3A9E' }}>Every</span>{' '}
            
            {/* Bubble behind "Day." */}
            <span className="relative inline-block mx-1 my-1">
              <span 
                className="absolute bubble-float"
                style={{
                  width: '170px',
                  height: '170px',
                  backgroundColor: '#91C5FF',
                  borderRadius: '50%',
                  zIndex: 1,
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)'
                }}
              ></span>
              <span className="relative px-3" style={{ color: '#FFFFFF', zIndex: 10 }}>Day.</span>
            </span>
          </span>

          {/* Mobile version: 3 lines with 3 words, 2 words, 1 word */}
          <span className="md:hidden block">
            <span className="block">
              <span style={{ color: '#5B3A9E' }}>Look</span>{' '}
              <span style={{ color: '#FFFFFF' }}>Good.</span>{' '}
              <span style={{ color: '#5B3A9E' }}>Feel</span>
            </span>
            <span className="block">
              <span style={{ color: '#FFFFFF' }}>Confident.</span>{' '}
              <span style={{ color: '#5B3A9E' }}>Every</span>
            </span>
            <span className="block">
              <span style={{ color: '#FFFFFF' }}>Day.</span>
            </span>
          </span>
        </h2>
      </div>

      {/* Desktop/Tablet: Three Feature Images in Grid */}
      <div className="hidden md:grid max-w-7xl mx-auto grid-cols-3 gap-6 lg:gap-8" style={{ position: 'relative', zIndex: 10 }}>
        {/* Feature Image 1 */}
        <div className="flex justify-center items-center animate-slideInFromRight">
          <img 
            src="https://customer-assets.emergentagent.com/job_2267f688-6c2c-4449-a687-79611e916621/artifacts/zixorku3_1%20-%20Features.png"
            alt="Feature 1"
            className="w-full h-auto rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Feature Image 2 */}
        <div className="flex justify-center items-center animate-slideInFromRight" style={{ animationDelay: '0.2s' }}>
          <img 
            src="https://customer-assets.emergentagent.com/job_2267f688-6c2c-4449-a687-79611e916621/artifacts/fvp8d69r_2-%20Features.png"
            alt="Feature 2"
            className="w-full h-auto rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Feature Image 3 */}
        <div className="flex justify-center items-center animate-slideInFromRight" style={{ animationDelay: '0.4s' }}>
          <img 
            src="https://customer-assets.emergentagent.com/job_2267f688-6c2c-4449-a687-79611e916621/artifacts/wao43fou_3-%20Features.png"
            alt="Feature 3"
            className="w-full h-auto rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Mobile: Simple Stacked Feature Images */}
      <div className="md:hidden flex flex-col gap-8 max-w-md mx-auto" style={{ position: 'relative', zIndex: 10 }}>
        {/* Feature Image 1 */}
        <div className="flex justify-center items-center">
          <img 
            src="https://customer-assets.emergentagent.com/job_2267f688-6c2c-4449-a687-79611e916621/artifacts/zixorku3_1%20-%20Features.png"
            alt="Feature 1"
            className="w-full h-auto rounded-2xl shadow-xl active:scale-95 transition-transform duration-200"
          />
        </div>

        {/* Feature Image 2 */}
        <div className="flex justify-center items-center">
          <img 
            src="https://customer-assets.emergentagent.com/job_2267f688-6c2c-4449-a687-79611e916621/artifacts/fvp8d69r_2-%20Features.png"
            alt="Feature 2"
            className="w-full h-auto rounded-2xl shadow-xl active:scale-95 transition-transform duration-200"
          />
        </div>

        {/* Feature Image 3 */}
        <div className="flex justify-center items-center">
          <img 
            src="https://customer-assets.emergentagent.com/job_2267f688-6c2c-4449-a687-79611e916621/artifacts/wao43fou_3-%20Features.png"
            alt="Feature 3"
            className="w-full h-auto rounded-2xl shadow-xl active:scale-95 transition-transform duration-200"
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
