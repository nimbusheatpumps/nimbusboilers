import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <>
      <header role="banner">
        <nav className="bg-white border-b border-slate-200 sticky top-0 z-50" aria-label="Main navigation">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20 md:h-24">
              {/* Logo */}
              <div className="flex-shrink-0 flex items-center">
                <Link to="/" className="flex items-center" aria-label="Nimbus Boilers & Heat Pumps - Home">
                  <img 
                    src="/images/nimbus-logo.webp" 
                    alt="Nimbus Boilers & Heat Pumps" 
                    className="h-12 md:h-16 w-auto"
                  />
                </Link>
              </div>

              {/* Desktop Menu */}
              <div className="hidden lg:flex lg:items-center lg:space-x-8">
                <Link to="/" className="text-slate-600 hover:text-primary font-semibold transition-colors">Home</Link>
                <Link to="/boiler-price-guide-scunthorpe" className="text-slate-600 hover:text-primary font-semibold transition-colors">Price Guide</Link>
                <Link to="/gas-boiler-maintenance-tips-scunthorpe" className="text-slate-600 hover:text-primary font-semibold transition-colors">Tips</Link>
                <Link to="/boiler-grants-scunthorpe" className="text-slate-600 hover:text-primary font-semibold transition-colors">Grants</Link>
                <Link to="/areas" className="text-slate-600 hover:text-primary font-semibold transition-colors">Areas</Link>
                <Link to="/faq" className="text-slate-600 hover:text-primary font-semibold transition-colors">FAQ</Link>
                
                <div className="relative group">
                  <button className="flex items-center text-slate-600 hover:text-primary font-semibold transition-colors">
                    Policies <span className="ml-1 text-xs">▼</span>
                  </button>
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-white border border-slate-200 rounded-xl shadow-xl py-2 min-w-[200px)">
                      <Link to="/cookies-policy" className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary">Cookies Policy</Link>
                      <Link to="/privacy-policy" className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary">Privacy Policy</Link>
                      <Link to="/terms-and-conditions" className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary">Terms & Conditions</Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop CTAs */}
              <div className="hidden lg:flex lg:items-center lg:space-x-4">
                <Link to="/quote" className="btn-primary !px-6 !py-2.5 !text-sm">Gas Boiler Quote</Link>
                <a href="tel:01724622069" className="btn-secondary !px-6 !py-2.5 !text-sm">Call Now</a>
              </div>

              {/* Mobile menu button */}
              <div className="flex lg:hidden">
                <button 
                  onClick={toggleMenu}
                  className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                  aria-label="Toggle navigation menu"
                  aria-expanded={menuActive}
                >
                  <span className="sr-only">Open main menu</span>
                  {menuActive ? (
                    <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`${menuActive ? 'block' : 'hidden'} lg:hidden bg-white border-t border-slate-200`}>
            <div className="px-4 pt-2 pb-8 space-y-1">
              <Link to="/" className="block px-3 py-4 text-base font-bold text-slate-700 border-b border-slate-50 hover:text-primary transition-colors">Home</Link>
              <Link to="/boiler-price-guide-scunthorpe" className="block px-3 py-4 text-base font-bold text-slate-700 border-b border-slate-50 hover:text-primary transition-colors">Price Guide</Link>
              <Link to="/gas-boiler-maintenance-tips-scunthorpe" className="block px-3 py-4 text-base font-bold text-slate-700 border-b border-slate-50 hover:text-primary transition-colors">Maintenance Tips</Link>
              <Link to="/boiler-grants-scunthorpe" className="block px-3 py-4 text-base font-bold text-slate-700 border-b border-slate-50 hover:text-primary transition-colors">Grants</Link>
              <Link to="/areas" className="block px-3 py-4 text-base font-bold text-slate-700 border-b border-slate-50 hover:text-primary transition-colors">Areas</Link>
              <Link to="/faq" className="block px-3 py-4 text-base font-bold text-slate-700 border-b border-slate-50 hover:text-primary transition-colors">FAQ</Link>
              <div className="grid grid-cols-2 gap-4 p-4">
                <Link to="/quote" className="btn-primary !text-sm !py-3">Boiler Quote</Link>
                <a href="tel:01724622069" className="btn-secondary !text-sm !py-3 text-center">Call Now</a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;