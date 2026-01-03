import React, { useState, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  CheckBadgeIcon, 
  BoltIcon, 
  ClockIcon, 
  ShieldCheckIcon,
  ArrowRightIcon 
} from '@heroicons/react/24/outline';

const Testimonials = lazy(() => import('./Testimonials'));
const CallToAction = lazy(() => import('./CallToAction'));

const Home = () => {
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
        <section className="hero-section relative bg-navy text-white py-32 md:py-48 overflow-hidden">
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

        <Suspense fallback={null}>
          <CallToAction />
        </Suspense>

        <section className="our-services-section section-padding bg-slate-50">
          <div className="section-container">
            <h2 className="section-heading">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
              {services.map((service, i) => (
                <div key={i} className="card-premium flex flex-col service-card">
                  <h3 className="text-xl mb-4">{service.title}</h3>
                  <p className="text-slate-600 mb-6 flex-grow">{service.text}</p>
                  <a href={service.href} className="text-primary font-bold hover:text-primary-dark inline-flex items-center group" aria-label={`Learn more about ${service.title}`}>
                    View {service.title}
                    <ArrowRightIcon className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="why-choose-nimbus-boilers section-padding bg-white">
          <div className="section-container">
            <h2 className="section-heading">Why Choose Nimbus Boilers in Scunthorpe?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
              <div className="card-premium">
                <div className="text-secondary mb-6">
                  <CheckBadgeIcon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold mb-3">Instant Online Quote</h3>
                <p className="text-slate-600 mb-0">Get a fixed price in under 30 seconds with our easy-to-use online tool.</p>
              </div>
              <div className="card-premium">
                <div className="text-secondary mb-6">
                  <BoltIcon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold mb-3">Free ECO4 Grants</h3>
                <p className="text-slate-600 mb-0">We help eligible households access government funding for energy-efficient upgrades.</p>
              </div>
              <div className="card-premium">
                <div className="text-secondary mb-6">
                  <ClockIcon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold mb-3">Same-Day Response</h3>
                <p className="text-slate-600 mb-0">Emergency breakdown? Our local Scunthorpe engineers are on standby to help.</p>
              </div>
              <div className="card-premium">
                <div className="text-secondary mb-6">
                  <ShieldCheckIcon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold mb-3">12-Year Warranty</h3>
                <p className="text-slate-600 mb-0">Enjoy peace of mind with industry-leading warranties on new boiler installations.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section-padding bg-slate-50">
          <div className="section-container">
            <h2 className="section-heading">What Our Customers Say</h2>
            <Suspense fallback={<div className="text-center">Loading testimonials...</div>}><Testimonials /></Suspense>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
