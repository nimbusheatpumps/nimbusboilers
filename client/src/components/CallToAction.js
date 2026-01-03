import React from 'react';

const CallToAction = () => {
  return (
    <section className="w-full bg-blue-600 text-white py-12 px-4 sm:px-6 lg:px-8 xl:px-16 text-center md:py-16 lg:py-20" role="banner">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 leading-tight tracking-tight">
          Book Your Free Survey – Call 01724 622069
        </h2>
        <a
          href="tel:01724622069"
          className="inline-flex items-center justify-center bg-white text-blue-600 hover:bg-blue-50 hover:text-blue-700 px-8 py-4 md:px-10 md:py-5 rounded-2xl font-bold text-lg md:text-xl lg:text-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-white/50 min-w-[200px] md:min-w-[220px]"
          aria-label="Call Now: 01724 622069 for free survey"
        >
          Call Now
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
