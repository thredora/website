import React from 'react';

const HowItWorks = () => {
  return (
    <section 
      id="how-it-works" 
      className="min-h-screen py-16 md:py-20 px-4 md:px-6 relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #B98CFF 0%, #FFFFFF 100%)'
      }}
    >
      {/* Main Title */}
      <div className="max-w-6xl mx-auto text-center mb-16 md:mb-20 px-4">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif leading-tight">
          <span style={{ color: '#6A4EB6' }}>From cluttered closet to </span>
          
          {/* Blue bubble behind "perfect outfit" - responsive positioning */}
          <span className="relative inline-block mx-1 md:mx-2">
            <span 
              className="absolute animate-pulse-slow"
              style={{
                width: '140%',
                height: '160%',
                backgroundColor: '#91C5FF',
                borderRadius: '50%',
                zIndex: 0,
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)'
              }}
            ></span>
            <span className="relative z-10 px-2" style={{ color: '#FFFFFF' }}>perfect outfit</span>
          </span>
          
          <span style={{ color: '#6A4EB6' }}> in 3 steps</span>
        </h2>
      </div>

      {/* Three Images Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
        {/* Image 1 */}
        <div className="flex justify-center items-center animate-fadeInUp">
          <img 
            src="https://customer-assets.emergentagent.com/job_2267f688-6c2c-4449-a687-79611e916621/artifacts/0ogs0ou6_1-%20HIW.png"
            alt="Step 1 - Upload Your Wardrobe"
            className="w-full max-w-md h-auto rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Image 2 */}
        <div className="flex justify-center items-center animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
          <img 
            src="https://customer-assets.emergentagent.com/job_2267f688-6c2c-4449-a687-79611e916621/artifacts/dslyh2yk_2-%20HIW.png"
            alt="Step 2 - Chat With Thread"
            className="w-full max-w-md h-auto rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Image 3 */}
        <div className="flex justify-center items-center animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          <img 
            src="https://customer-assets.emergentagent.com/job_2267f688-6c2c-4449-a687-79611e916621/artifacts/bhu88p5s_3-%20HIW.png"
            alt="Step 3 - Step Out In Style"
            className="w-full max-w-md h-auto rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
