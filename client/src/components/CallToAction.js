import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 leading-tight">
          Gas Boiler Installation Scunthorpe – £7,500 Grant Available
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed opacity-95">
          Expert gas boiler installation, services, repairs, and maintenance across Scunthorpe and North Lincolnshire. Gas Safe registered engineers ready to help.
        </p>
        <Link 
          to="/quote"
          className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 font-bold py-4 px-10 rounded-xl text-lg md:text-xl lg:text-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-yellow-300"
          aria-label="Get an instant quote for gas boiler installation"
        >
          Get Instant Quote
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;