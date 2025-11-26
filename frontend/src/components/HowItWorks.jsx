import React, { useEffect, useState } from 'react';

const HowItWorks = () => {
  const [textVisible, setTextVisible] = useState(0);
  const [cardsVisible, setCardsVisible] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Track text section visibility
      const textSection = document.getElementById('text-section');
      if (textSection) {
        const rect = textSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top < windowHeight && rect.bottom > 0) {
          const visibleAmount = Math.min(1, Math.max(0, (windowHeight - rect.top) / windowHeight));
          setTextVisible(visibleAmount);
        }
      }

      // Track cards section visibility (mobile only)
      const cardsSection = document.getElementById('mobile-cards');
      if (cardsSection) {
        const rect = cardsSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top < windowHeight && rect.bottom > 0) {
          const visibleAmount = Math.min(1, Math.max(0, (windowHeight - rect.top) / (windowHeight * 0.3)));
          setCardsVisible(visibleAmount);
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
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight md:leading-relaxed" style={{ position: 'relative', zIndex: 10, color: '#FFFFFF' }}>
          <span>From cluttered closet to </span>
          <span style={{ fontStyle: 'italic', fontWeight: 'bold' }}>perfect outfit</span>
          <span> in 3 steps</span>
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
            src="/hiw-1.png"
            alt="Step 1"
            className="w-full h-auto rounded-2xl shadow-2xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-3xl group-hover:rotate-1"
          />
        </div>

        {/* Card 2 */}
        <div className="flex justify-center items-center group cursor-pointer">
          <img 
            src="/hiw-2.png"
            alt="Step 2"
            className="w-full h-auto rounded-2xl shadow-2xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-3xl group-hover:-rotate-1"
          />
        </div>

        {/* Card 3 */}
        <div className="flex justify-center items-center group cursor-pointer">
          <img 
            src="/hiw-3.png"
            alt="Step 3"
            className="w-full h-auto rounded-2xl shadow-2xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-3xl group-hover:rotate-1"
          />
        </div>
      </div>

      {/* Mobile: Stacked Cards */}
      <div 
        id="mobile-cards"
        className="md:hidden flex flex-col gap-8 max-w-md mx-auto transition-opacity duration-500" 
        style={{ 
          position: 'relative', 
          zIndex: 10,
          opacity: Math.min(cardsVisible, Math.max(0, 1 - textVisible * 1.2))
        }}
      >
        {/* Card 1 */}
        <div className="flex justify-center items-center active:scale-95 transition-transform duration-200">
          <img 
            src="/hiw-1.png"
            alt="Step 1"
            className="w-full h-auto rounded-2xl shadow-2xl"
          />
        </div>

        {/* Card 2 */}
        <div className="flex justify-center items-center active:scale-95 transition-transform duration-200">
          <img 
            src="/hiw-2.png"
            alt="Step 2"
            className="w-full h-auto rounded-2xl shadow-2xl"
          />
        </div>

        {/* Card 3 */}
        <div className="flex justify-center items-center active:scale-95 transition-transform duration-200">
          <img 
            src="/hiw-3.png"
            alt="Step 3"
            className="w-full h-auto rounded-2xl shadow-2xl"
          />
        </div>
      </div>

      {/* Text Section */}
      <div 
        id="text-section"
        className="max-w-4xl mx-auto mt-16 md:mt-24 px-2 md:px-8 transition-opacity duration-500" 
        style={{ 
          position: 'relative', 
          zIndex: 10,
          opacity: Math.min(1, textVisible * 2.5)
        }}
      >
        {/* Desktop: Narrower container with overlay */}
        <div 
          className="hidden md:block mx-auto rounded-2xl p-8 lg:p-10"
          style={{
            maxWidth: '680px',
            backgroundColor: 'rgba(101, 58, 183, 0.3)',
            backdropFilter: 'blur(8px)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4), 0 8px 16px rgba(0, 0, 0, 0.2)'
          }}
        >
          <div className="text-base md:text-lg lg:text-xl space-y-6 md:space-y-8" style={{ 
            fontFamily: 'Libre Caslon Text, serif',
            textAlign: 'justify',
            color: '#FFFFFF',
            lineHeight: '1.9'
          }}>
            <div>
              <h3 className="font-bold mb-3">Dressing well is a superpower.</h3>
              <p>
                It opens doors and shapes first impressions before you even say a word. Yet we all struggle with the questions: What colours work for me? Why does that outfit look flat on me?
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-3">Fashion isn't one-size-fits-all.</h3>
              <p>
                Your style is as unique as you are. Some love the quiet confidence of muted tones; others thrive on bold statements. You don't need a trend chaser, you need someone who gets you.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-3">Thredora is that someone.</h3>
              <p>
                Your AI stylist who knows your colours, your fits, and your vibe. No more guessing. Just outfits that make your clothes speak highly of you.
              </p>
            </div>

            <p className="text-xl md:text-2xl lg:text-3xl font-bold text-center" style={{ 
              textAlign: 'center',
              marginTop: '3rem',
              lineHeight: '1.6'
            }}>
              Say hello to your new style bestie.
            </p>
          </div>
        </div>

        {/* Mobile: With overlay styling like desktop */}
        <div 
          className="block md:hidden mx-auto rounded-2xl p-6"
          style={{
            backgroundColor: 'rgba(101, 58, 183, 0.3)',
            backdropFilter: 'blur(8px)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4), 0 8px 16px rgba(0, 0, 0, 0.2)'
          }}
        >
          <div className="text-base space-y-6" style={{ 
            fontFamily: 'Libre Caslon Text, serif',
            textAlign: 'justify',
            color: '#FFFFFF',
            lineHeight: '1.9'
          }}>
            <div>
              <h3 className="font-bold mb-3">Dressing well is a superpower.</h3>
              <p>
                It opens doors and shapes first impressions before you even say a word. Yet we all struggle with the questions: What colours work for me? Why does that outfit look flat on me?
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-3">Fashion isn't one-size-fits-all.</h3>
              <p>
                Your style is as unique as you are. Some love the quiet confidence of muted tones; others thrive on bold statements. You don't need a trend chaser, you need someone who gets you.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-3">Thredora is that someone.</h3>
              <p>
                Your AI stylist who knows your colours, your fits, and your vibe. No more guessing. Just outfits that make your clothes speak highly of you.
              </p>
            </div>

            <p className="text-xl font-bold text-center" style={{ 
              textAlign: 'center',
              marginTop: '3rem',
              lineHeight: '1.6',
              paddingTop: '1rem'
            }}>
              Say hello to your new style bestie.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;