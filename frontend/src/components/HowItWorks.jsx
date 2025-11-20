import React from 'react';

const HowItWorks = () => {
  return (
    <section 
      id="how-it-works" 
      className="min-h-screen py-16 md:py-20 px-4 md:px-6 relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #B98CFF 0%, #8643EF 100%)'
      }}
    >
      {/* Main Title */}
      <div className="max-w-6xl mx-auto text-center mb-16 md:mb-20 px-4" style={{ position: 'relative', zIndex: 2 }}>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight md:leading-relaxed" style={{ position: 'relative', zIndex: 10 }}>
          <span style={{ color: '#431FA2', position: 'relative', zIndex: 10 }}>From cluttered closet to </span>
          <span style={{ color: '#FFFFFF', position: 'relative', zIndex: 10 }}>perfect outfit</span>
          <span style={{ color: '#431FA2', position: 'relative', zIndex: 10 }}> in 3 steps</span>
        </h2>
      </div>

      {/* Desktop/Tablet: Three Cards in Grid */}
      <div className="hidden md:grid max-w-7xl mx-auto grid-cols-3 gap-6 lg:gap-8" style={{ position: 'relative', zIndex: 10 }}>
        {/* Card 1 */}
        <div className="flex justify-center items-center group cursor-pointer">
          <img 
            src="https://customer-assets.emergentagent.com/job_2267f688-6c2c-4449-a687-79611e916621/artifacts/zeguqh54_1-%20HIW%20%281%29.png"
            alt="Step 1"
            className="w-full h-auto rounded-2xl shadow-2xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-3xl group-hover:rotate-1"
          />
        </div>

        {/* Card 2 */}
        <div className="flex justify-center items-center group cursor-pointer">
          <img 
            src="https://customer-assets.emergentagent.com/job_2267f688-6c2c-4449-a687-79611e916621/artifacts/wwvzeh31_2-%20HIW%20%281%29.png"
            alt="Step 2"
            className="w-full h-auto rounded-2xl shadow-2xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-3xl group-hover:-rotate-1"
          />
        </div>

        {/* Card 3 */}
        <div className="flex justify-center items-center group cursor-pointer">
          <img 
            src="https://customer-assets.emergentagent.com/job_2267f688-6c2c-4449-a687-79611e916621/artifacts/a7fi2lsh_3-%20HIW%20%281%29.png"
            alt="Step 3"
            className="w-full h-auto rounded-2xl shadow-2xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-3xl group-hover:rotate-1"
          />
        </div>
      </div>

      {/* Mobile: Stacked Cards */}
      <div className="md:hidden flex flex-col gap-8 max-w-md mx-auto" style={{ position: 'relative', zIndex: 10 }}>
        {/* Card 1 */}
        <div className="flex justify-center items-center active:scale-95 transition-transform duration-200">
          <img 
            src="https://customer-assets.emergentagent.com/job_2267f688-6c2c-4449-a687-79611e916621/artifacts/zeguqh54_1-%20HIW%20%281%29.png"
            alt="Step 1"
            className="w-full h-auto rounded-2xl shadow-2xl"
          />
        </div>

        {/* Card 2 */}
        <div className="flex justify-center items-center active:scale-95 transition-transform duration-200">
          <img 
            src="https://customer-assets.emergentagent.com/job_2267f688-6c2c-4449-a687-79611e916621/artifacts/wwvzeh31_2-%20HIW%20%281%29.png"
            alt="Step 2"
            className="w-full h-auto rounded-2xl shadow-2xl"
          />
        </div>

        {/* Card 3 */}
        <div className="flex justify-center items-center active:scale-95 transition-transform duration-200">
          <img 
            src="https://customer-assets.emergentagent.com/job_2267f688-6c2c-4449-a687-79611e916621/artifacts/a7fi2lsh_3-%20HIW%20%281%29.png"
            alt="Step 3"
            className="w-full h-auto rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;