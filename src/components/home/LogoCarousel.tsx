import React from 'react';

const LogoCarousel = () => {
  const logos = [
    'Microsoft', 'Google', 'Amazon', 'Netflix', 'Apple', 'Meta', 'Tesla', 'Spotify',
    'Adobe', 'Salesforce', 'Oracle', 'IBM', 'Samsung', 'Intel', 'Nvidia', 'Uber'
  ];

  return (
    <section className="py-16 bg-black border-y border-yellow-500/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-300">
            Cases de <span className="text-yellow-400">Sucesso</span>
          </h2>
        </div>

        <div className="relative overflow-hidden">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
          
          {/* Infinite scrolling container */}
          <div className="flex animate-infinite-scroll">
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 mx-4 md:mx-6 w-28 md:w-32 h-14 md:h-16 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg border border-yellow-500/20 flex items-center justify-center hover:border-yellow-400/50 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <span className="text-white font-semibold text-xs md:text-sm px-2 text-center">
                  {logo}
                </span>
              </div>
            ))}
            
            {/* Second set of logos for seamless loop */}
            {logos.map((logo, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-4 md:mx-6 w-28 md:w-32 h-14 md:h-16 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg border border-yellow-500/20 flex items-center justify-center hover:border-yellow-400/50 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <span className="text-white font-semibold text-xs md:text-sm px-2 text-center">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;