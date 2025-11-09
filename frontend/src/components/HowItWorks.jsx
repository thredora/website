import React, { useEffect, useState } from 'react';

const HowItWorks = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('how-it-works');
      if (section) {
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Start showing images when section enters viewport
        if (rect.top < windowHeight) {
          const sectionHeight = rect.height;
          const scrolled = windowHeight - rect.top;
          const progress = Math.max(0, Math.min(1, scrolled / sectionHeight));
          setScrollProgress(progress);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate which images should be visible on mobile based on scroll
  const image1Visible = scrollProgress > 0.02; // Appears almost immediately
  const image2Progress = Math.max(0, Math.min(1, (scrollProgress - 0.1) / 0.1)); // Starts at 10%, done by 20%
  const image3Progress = Math.max(0, Math.min(1, (scrollProgress - 0.22) / 0.1)); // Starts at 22%, done by 32%

  return (
    <section 
      id="how-it-works" 
      className="min-h-screen py-16 md:py-20 px-4 md:px-6 relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #B98CFF 0%, #FFFFFF 100%)'
      }}
    >
      {/* Main Title */}
      <div className="max-w-6xl mx-auto text-center mb-16 md:mb-20 px-4" style={{ position: 'relative', zIndex: 2 }}>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight md:leading-relaxed" style={{ position: 'relative', zIndex: 10 }}>
          <span style={{ color: '#5B3A9E', position: 'relative', zIndex: 10 }}>From cluttered closet to</span>{' '}
          
          {/* Perfectly circular blue bubble behind "perfect outfit" */}
          <span className="relative inline-block mx-1 md:mx-2" style={{ zIndex: 5 }}>
            {/* Mobile bubble */}
            <span 
              className="absolute md:hidden bubble-float"
              style={{
                width: '220px',
                height: '220px',
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
          {' '}<span style={{ color: '#5B3A9E', position: 'relative', zIndex: 10 }}>in 3 steps</span>
        </h2>
      </div>

      {/* Desktop/Tablet: Three Images in Grid */}
      <div className="hidden md:grid max-w-7xl mx-auto grid-cols-3 gap-6 lg:gap-8" style={{ position: 'relative', zIndex: 10 }}>
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

      {/* Mobile: Overlaying Images with Scroll */}
      <div className="md:hidden relative w-full max-w-md mx-auto" style={{ minHeight: '600px', position: 'relative', zIndex: 10 }}>
        {/* Image 1 - Base layer */}
        <div 
          className="absolute inset-0 flex justify-center items-start transition-opacity duration-500"
          style={{
            opacity: image1Visible ? 1 : 0
          }}
        >
          <img 
            src="https://customer-assets.emergentagent.com/job_2267f688-6c2c-4449-a687-79611e916621/artifacts/0ogs0ou6_1-%20HIW.png"
            alt="Step 1 - Upload Your Wardrobe"
            className="w-full h-auto rounded-2xl shadow-xl"
          />
        </div>

        {/* Image 2 - Slides over Image 1 */}
        <div 
          className="absolute inset-0 flex justify-center items-start transition-all duration-700"
          style={{
            transform: `translateX(${(1 - image2Progress) * 100}%)`,
            opacity: image2Progress
          }}
        >
          <img 
            src="https://customer-assets.emergentagent.com/job_2267f688-6c2c-4449-a687-79611e916621/artifacts/dslyh2yk_2-%20HIW.png"
            alt="Step 2 - Chat With Thread"
            className="w-full h-auto rounded-2xl shadow-xl"
          />
        </div>

        {/* Image 3 - Slides over previous images */}
        <div 
          className="absolute inset-0 flex justify-center items-start transition-all duration-700"
          style={{
            transform: `translateX(${(1 - image3Progress) * 100}%)`,
            opacity: image3Progress
          }}
        >
          <img 
            src="https://customer-assets.emergentagent.com/job_2267f688-6c2c-4449-a687-79611e916621/artifacts/bhu88p5s_3-%20HIW.png"
            alt="Step 3 - Step Out In Style"
            className="w-full h-auto rounded-2xl shadow-xl"
          />
        </div>
      </div>

      {/* Spacer for mobile scroll - minimal */}
      <div className="md:hidden h-[150px]"></div>
    </section>
  );
};

export default HowItWorks;
