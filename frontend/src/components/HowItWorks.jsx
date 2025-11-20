import React, { useEffect, useState } from 'react';

const HowItWorks = () => {
  const [textVisible, setTextVisible] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const textSection = document.getElementById('text-section');
      if (textSection) {
        const rect = textSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Calculate visibility based on position in viewport
        if (rect.top < windowHeight && rect.bottom > 0) {
          const visibleAmount = Math.min(1, Math.max(0, (windowHeight - rect.top) / windowHeight));
          setTextVisible(visibleAmount);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="how-it-works" 
      className="min-h-screen pt-20 md:pt-24 pb-12 md:pb-16 px-4 md:px-6 relative overflow-hidden flex flex-col"
      style={{
        background: 'linear-gradient(180deg, #B98CFF 0%, #8643EF 100%)'
      }}
    >
      {/* Main Title */}
      <div className="max-w-6xl mx-auto text-center mb-8 md:mb-12 px-4" style={{ position: 'relative', zIndex: 2 }}>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight md:leading-relaxed" style={{ position: 'relative', zIndex: 10 }}>
          <span style={{ color: '#431FA2', position: 'relative', zIndex: 10 }}>From cluttered closet to </span>
          <span style={{ color: '#FFFFFF', position: 'relative', zIndex: 10 }}>perfect outfit</span>
          <span style={{ color: '#431FA2', position: 'relative', zIndex: 10 }}> in 3 steps</span>
        </h2>
      </div>

      {/* Desktop/Tablet: Three Cards in Grid */}
      <div 
        className="hidden md:grid max-w-7xl mx-auto grid-cols-3 gap-4 lg:gap-6 flex-1 items-center transition-opacity duration-700" 
        style={{ 
          position: 'relative', 
          zIndex: 10
        }}
      >
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
      <div 
        className="md:hidden flex flex-col gap-8 max-w-md mx-auto transition-opacity duration-500" 
        style={{ 
          position: 'relative', 
          zIndex: 10,
          opacity: Math.max(0, 1 - textVisible * 1.2)
        }}
      >
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

      {/* Text Section */}
      <div 
        id="text-section"
        className="max-w-4xl mx-auto mt-16 md:mt-24 px-4 md:px-8 transition-opacity duration-500" 
        style={{ 
          position: 'relative', 
          zIndex: 10,
          opacity: Math.min(1, textVisible * 2.5)
        }}
      >
        <div className="text-base md:text-lg lg:text-xl leading-relaxed md:leading-loose space-y-6 md:space-y-8" style={{ 
          fontFamily: 'Libre Caslon Text, serif',
          textAlign: 'justify',
          color: '#FFFFFF'
        }}>
          <p>
            Dressing well is a superpower. It gets you into rooms. It shapes how people see you, before you even say a word.
            And yet, we all struggle. What colours truly work for me? Why does that amazing outfit look flat on me, but great on someone else?
          </p>

          <p>
            The truth is, fashion isn't one size fits all. Your style is as unique as your personality. Some prefer the quiet confidence of muted tones. Others prefer the energy of standing out.
          </p>

          <p>
            You don't need a trend chaser. You need someone who gets you. Someone who can help you define your taste and dress in a way that feels authentic. In a way where your clothes speak highly of you.
          </p>

          <p>
            Thredora is that someone. The one who understands your style, your colours, your fits. The one who knows what works for the occasion, the weather, and your vibe.
          </p>

          <p className="text-xl md:text-2xl lg:text-3xl font-bold text-center" style={{ 
            textAlign: 'center',
            marginTop: '2rem'
          }}>
            Say hello to your new style bestie.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;