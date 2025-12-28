import React from 'react';
import { Link } from 'react-router-dom';

const PricingPage = () => {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: 'linear-gradient(to bottom, #8643EF 0%, #B98CFF 100%)',
        fontFamily: '"Libre Baskerville", serif',
      }}
    >
      {/* Top Back to Home */}
      <div className="w-full px-4 pt-4 md:px-8 md:pt-6 flex justify-start">
        <Link
          to="/"
          className="inline-block text-white text-sm md:text-base font-normal underline-offset-2 hover:underline"
        >
          Back To Home
        </Link>
      </div>

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center px-4 md:px-10 lg:px-16 py-10 md:py-14 lg:py-16">
        <div className="w-full max-w-6xl mx-auto">
          {/* Layout: column on mobile, row on md+ */}
          <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-10">
            {/* Left: Free Tier */}
            <div className="w-full md:w-1/2 flex flex-col items-center gap-4 md:gap-6">
              {/* Free heading */}
              <h2 className="text-xl md:text-2xl lg:text-3xl text-white mb-1 md:mb-2 text-center">
                Free Tier
              </h2>
              {/* Free Tier image */}
              <div className="w-full flex justify-center px-2 md:px-0">
                <img
                  src="/pricing-free.png"
                  alt="Free Tier"
                  className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto rounded-3xl shadow-2xl"
                />
              </div>

              {/* Chat on WhatsApp CTA */}
              <a
                href="https://wa.me/919657293681?text=Sup%20Thread!"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#E9DE5F] text-black font-semibold px-6 py-3 md:px-8 md:py-3 rounded-full shadow-lg hover:bg-yellow-300 transition-all duration-300 hover:scale-105 text-base md:text-lg text-center"
              >
                Chat on WhatsApp
              </a>
            </div>

            {/* Right: Premium Tier */}
            <div className="w-full md:w-1/2 flex flex-col items-center gap-4 md:gap-6">
              {/* Premium heading */}
              <h2 className="text-xl md:text-2xl lg:text-3xl text-white mb-1 md:mb-2 text-center">
                Premium Tier
              </h2>
              {/* Premium Tier image */}
              <div className="w-full flex justify-center px-2 md:px-0">
                <img
                  src="/pricing-premium.png"
                  alt="Premium Tier"
                  className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto rounded-3xl shadow-2xl"
                />
              </div>

              {/* Join Waitlist CTA */}
              <a
                href="https://app.youform.com/forms/ywhblc6e"
                 target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-purple-800 font-semibold px-6 py-3 md:px-8 md:py-3 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 text-base md:text-lg text-center"
              >
                Join Waitlist
              </a>
            </div>
          </div>

          {/* Bottom Back to Home */}
          <div className="mt-10 flex justify-center">
            <Link
              to="/"
              className="inline-block bg-white text-purple-700 px-6 py-3 rounded-full text-sm md:text-base font-semibold shadow-md hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              Back To Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PricingPage;


