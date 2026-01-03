import React, { useState, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';

const Testimonials = lazy(() => import('./Testimonials'));
const QuoteForm = lazy(() => import('./QuoteForm'));

const Home = () => {
  const [faqActive, setFaqActive] = useState(null);

  const toggleFaq = (index) => {
    setFaqActive(faqActive === index ? null : index);
  };

  const services = [
    { title: 'Gas Boiler Installation', text: 'Expert gas boiler installation and setup by Gas Safe registered engineers.', href: '/gas-boiler-installation-scunthorpe' },
    { title: 'Combi Boiler Replacement', text: 'Efficient replacements and swaps of combi boilers with modern systems.', href: '/combi-boiler-installation-scunthorpe' },
    { title: 'Emergency Repairs', text: 'Prompt emergency repairs and regular servicing for gas boilers.', href: '/gas-boiler-repair-scunthorpe' },
    { title: 'Maintenance', text: 'Dependable repair and maintenance for gas boilers across North Lincolnshire.', href: '/gas-boiler-service-scunthorpe' },
    { title: 'Gas Safety Certificates', text: 'Gas safety certificate issuance and full heating services for commercial properties.', href: '/gas-safe-boiler-installers-scunthorpe' },
    { title: 'Smart Controls', text: 'Smart thermostat installations to optimise energy efficiency and comfort.', href: '/boiler-maintenance-tips' },
    { title: 'Boiler Breakdown', text: 'Fast response for boiler breakdowns in Scunthorpe.', href: '/gas-boiler-breakdown-scunthorpe' },
    { title: 'Boiler Servicing', text: 'Annual boiler servicing to keep your warranty valid.', href: '/gas-boiler-servicing-scunthorpe' },
    { title: 'Boiler Brands', text: 'We install all major boiler brands.', href: '/gas-boiler-brands-scunthorpe' },
    { title: 'System Boilers', text: 'Expert system boiler installation.', href: '/system-boiler-installation-scunthorpe' },
    { title: 'Regular Boilers', text: 'Traditional regular boiler specialists.', href: '/regular-boiler-installation-scunthorpe' }
  ];

  return (
    <>
      <Helmet>
        <title>Boiler Installation Scunthorpe | Gas Boiler Repair North Lincolnshire | Nimbus Boilers & Heat Pumps</title>
        <meta name="description" content="Gas Safe registered boiler installation, repair & service in Scunthorpe, Grimsby, Doncaster, Lincoln. Claim £7,500 Boiler Upgrade Scheme grant for air source heat pumps." />
      </Helmet>
      <main id="main-content">
        <section className="hero-section relative bg-navy text-white py-24 md:py-32 overflow-hidden">
          <div className="section-container relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-white mb-6 section-heading--hero">Boiler Installation Scunthorpe</h1>
              <p className="text-xl md:text-2xl text-slate-200 font-medium mb-10">Gas Safe Registered Installers | Boiler Repairs and Services</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/gas-boiler-installation-scunthorpe" className="btn-primary">Get an Instant Gas Boiler Quote</a>
                <a href="#contact-form" className="btn-secondary">Get a Free Heat Pump Quote</a>
              </div>
            </div>
          </div>
        </section>

        <section className="why-choose-nimbus-boilers section-padding bg-white">
          <div className="section-container">
            <h2 className="section-heading">Why Choose Nimbus Boilers in Scunthorpe?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="card-premium">
                <div className="text-secondary mb-6">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Instant Online Quote</h3>
                <p className="text-slate-600 mb-0">Get a fixed price in under 30 seconds with our easy-to-use online tool.</p>
              </div>
              <div className="card-premium">
                <div className="text-secondary mb-6">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Free ECO4 Grants</h3>
                <p className="text-slate-600 mb-0">We help eligible households access government funding for energy-efficient upgrades.</p>
              </div>
              <div className="card-premium">
                <div className="text-secondary mb-6">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Same-Day Response</h3>
                <p className="text-slate-600 mb-0">Emergency breakdown? Our local Scunthorpe engineers are on standby to help.</p>
              </div>
              <div className="card-premium">
                <div className="text-secondary mb-6">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">12-Year Warranty</h3>
                <p className="text-slate-600 mb-0">Enjoy peace of mind with industry-leading warranties on new boiler installations.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="our-services-section section-padding bg-slate-50">
          <div className="section-container">
            <h2 className="section-heading">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, i) => (
                <div key={i} className="card-premium flex flex-col service-card">
                  <h3 className="text-xl mb-4">{service.title}</h3>
                  <p className="text-slate-600 mb-6 flex-grow">{service.text}</p>
                  <a href={service.href} className="text-primary font-bold hover:text-primary-dark inline-flex items-center group">
                    Learn More 
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section-padding bg-white">
          <div className="section-container">
            <h2 className="section-heading">What Our Customers Say</h2>
            <Suspense fallback={<div className="text-center">Loading testimonials...</div>}><Testimonials /></Suspense>
          </div>
        </section>

        <section id="contact-form" className="section-padding bg-navy">
          <div className="section-container">
            <div className="bg-white rounded-3xl p-8 md:p-16 shadow-2xl">
              <QuoteForm />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
