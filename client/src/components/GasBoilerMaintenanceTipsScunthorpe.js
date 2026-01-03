import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import QuoteForm from './QuoteForm';
import { 
  PlusIcon, 
  MinusIcon, 
  Bars3Icon, 
  XMarkIcon, 
  ChevronDownIcon 
} from '@heroicons/react/24/outline';

const GasBoilerMaintenanceTipsScunthorpe = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [dropdownActive, setDropdownActive] = useState(null);
  const [faqActive, setFaqActive] = useState(null);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const toggleDropdown = (index) => {
    setDropdownActive(dropdownActive === index ? null : index);
  };

  const toggleFaq = (index) => {
    setFaqActive(faqActive === index ? null : index);
  };

  const faqData = [
    {
      question: "How often should my gas boiler be serviced in Scunthorpe?",
      answer: "UK regulations and manufacturers recommend an annual boiler service. Nimbus Gas Safe engineers in Scunthorpe advise booking every 12 months for safety, efficiency and compliance. Call 01724 622069 to schedule."
    },
    {
      question: "What DIY gas boiler maintenance can Scunthorpe homeowners do safely?",
      answer: "Safe DIY tasks include checking pressure (1-1.5 bar cold), bleeding radiators monthly, cleaning air filters quarterly, optimising thermostat settings and monitoring for unusual noises. Never attempt repairs on gas components."
    },
    {
      question: "What are the signs I need professional boiler service in Scunthorpe?",
      answer: "Call a Gas Safe engineer for leaks, strange smells, yellow flames, error codes, repeated pressure loss, kettling noises or no heat/hot water. Early intervention prevents breakdowns."
    },
    {
      question: "What is included in a professional gas boiler service Scunthorpe?",
      answer: "Comprehensive inspection: visual checks, flue gas analysis, combustion chamber clean, safety device test, pressure test, efficiency report and safety certification."
    },
    {
      question: "Why is regular maintenance important for boilers in Scunthorpe homes?",
      answer: "Improves safety (CO detection), boosts efficiency (10% bill savings), prevents costly breakdowns, extends boiler life by 5-10 years and meets insurance/warranty requirements."
    },
    {
      question: "Do Nimbus offer gas boiler maintenance plans in North Lincolnshire?",
      answer: "Yes, affordable annual service plans, repairs, installations and emergency response across Scunthorpe and North Lincolnshire. Free no-obligation quotes. Gas Safe certified."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Gas Boiler Maintenance Tips Scunthorpe | Expert DIY Advice & Gas Safe Services | Nimbus Boilers</title>
        <meta name="description" content="Gas boiler maintenance tips Scunthorpe: DIY checks (pressure, bleed radiators, filters), when to book gas boiler service Scunthorpe. Annual boiler service North Lincolnshire by Gas Safe engineers. Call 01724 622069 for free quote." />
        <meta name="keywords" content="gas boiler maintenance tips Scunthorpe, gas boiler service Scunthorpe, annual boiler service, boiler maintenance North Lincolnshire, DIY boiler checks, Gas Safe service Scunthorpe" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://nimbusboilers.co.uk/gas-boiler-maintenance-tips-scunthorpe" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://nimbusboilers.co.uk/# organization",
            "name": "Nimbus Boilers",
            "alternateName": "Nimbus Boilers & Heat Pumps",
            "url": "https://nimbusboilers.co.uk/",
            "logo": "https://nimbusboilers.co.uk/images/nimbus-logo.webp",
            "description": "Gas boiler maintenance tips Scunthorpe with DIY advice, professional servicing and repairs. Gas Safe certified engineers serving Scunthorpe and North Lincolnshire.",
            "image": "/images/hero-team-service.webp",
            "telephone": "01724 622069",
            "email": "info@nimbusboilers.co.uk",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "3 Crossbeck Road",
              "addressLocality": "Scunthorpe",
              "addressRegion": "North Lincolnshire",
              "postalCode": "DN16 3HR",
              "addressCountry": "GB"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "53.5723",
              "longitude": "-0.6355"
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Scunthorpe"
              },
              {
                "@type": "State",
                "name": "North Lincolnshire"
              }
            ],
            "makesOffer": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Gas Boiler Maintenance Scunthorpe",
                  "description": "DIY tips and professional gas boiler servicing in Scunthorpe."
                }
              }
            ],
            "hasCredential": [
              {
                "@type": "EducationalOccupationalCredential",
                "name": "Gas Safe Registered",
                "credentialCategory": "license"
              }
            ],
            "priceRange": "£",
            "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
            "currenciesAccepted": "GBP",
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "09:00",
              "closes": "17:00"
            },
            "sameAs": [
              "https://x.com/NimbusHeatPumps",
              "https://www.facebook.com/profile.php?id=61579773217395"
            ],
            "keywords": "gas boiler maintenance tips Scunthorpe, gas boiler service Scunthorpe"
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Gas Boiler Maintenance Tips Scunthorpe",
            "provider": {
              "@id": "https://nimbusboilers.co.uk/#organization",
              "@type": "LocalBusiness"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Scunthorpe, North Lincolnshire"
            },
            "serviceType": "Boiler Maintenance Advice & Servicing",
            "description": "DIY gas boiler maintenance tips and professional servicing for Scunthorpe homes. Safety checks, efficiency improvements and Gas Safe certification.",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "GBP",
              "price": "80-150",
              "itemConditioned": "https://schema.org/NewCondition",
              "priceRange": "£80 - £150"
            },
            "keywords": "gas boiler maintenance tips Scunthorpe, annual boiler service"
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Gas Boiler Maintenance Tips Scunthorpe",
            "datePublished": "2026-01-01",
            "author": {
              "@type": "Organization",
              "name": "Nimbus Boilers"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Nimbus Boilers",
              "logo": {
                "@type": "ImageObject",
                "url": "/images/nimbus-logo.webp"
              }
            },
            "image": "/images/hero-team-service.webp",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://nimbusboilers.co.uk/gas-boiler-maintenance-tips-scunthorpe"
            }
          })}
        </script>
      </Helmet>
      <nav className="nimbus-nav" aria-label="Main navigation">
        <div className="nimbus-nav-container">
          <div className="nimbus-nav-inner">
            <a href="/" className="nimbus-logo-link" aria-label="Nimbus Boilers - Home">
              <img decoding="async" src="/images/nimbus-logo.webp"
                    alt="Nimbus Boilers - Gas Boiler Maintenance Tips Scunthorpe"
                    className="nimbus-logo" loading="lazy" />
            </a>
            <button className={`nimbus-mobile-toggle ${menuActive ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                    aria-expanded={menuActive}
                    aria-controls="nimbusMenu">
              {menuActive ? (
                <XMarkIcon className="h-6 w-6 text-white" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-white" />
              )}
            </button>
            <ul className={`nimbus-menu ${menuActive ? 'active' : ''}`} id="nimbusMenu">
              <li className="nimbus-menu-item">
                <a href="/areas-covered" className="nimbus-link">Areas Covered</a>
              </li>
              <li className="nimbus-menu-item">
                <a href="/boiler-grants-scunthorpe" className="nimbus-link">Boiler Grants</a>
              </li>
              <li className={`nimbus-menu-item nimbus-has-dropdown ${dropdownActive === 0 ? 'dropdown-active' : ''}`}>
                <a href="#" className="nimbus-link" onClick={() => toggleDropdown(0)}>
                  Boiler Brands <ChevronDownIcon className="inline-block h-4 w-4 ml-1" />
                </a>
                <ul className="nimbus-dropdown">
                  <li className="nimbus-dropdown-item">
                    <a href="https://www.baxi.co.uk/products/boilers" className="nimbus-dropdown-link" target="_blank" rel="noopener noreferrer">Baxi Boilers</a>
                  </li>
                  <li className="nimbus-dropdown-item">
                    <a href="https://www.idealheating.com/products/boilers" className="nimbus-dropdown-link" target="_blank" rel="noopener noreferrer">Ideal Boilers</a>
                  </li>
                  <li className="nimbus-dropdown-item">
                    <a href="https://www.vaillant.co.uk/homeowners/products/boilers/" className="nimbus-dropdown-link" target="_blank" rel="noopener noreferrer">Vaillant Boilers</a>
                  </li>
                  <li className="nimbus-dropdown-item">
                    <a href="https://www.worcester-bosch.co.uk/products/boilers" className="nimbus-dropdown-link" target="_blank" rel="noopener noreferrer">Worcester Bosch Boilers</a>
                  </li>
                </ul>
              </li>
              <li className="nimbus-menu-item">
                <a href="/" className="nimbus-link">Home</a>
              </li>
              <li className="nimbus-menu-item nimbus-social-item">
                <div className="nimbus-social">
                  <a href="https://x.com/NimbusHeatPumps" target="_blank" rel="noopener noreferrer" title="Follow us on X" aria-label="Follow on X">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path fill="#000" stroke="none" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61579773217395" target="_blank" rel="noopener noreferrer" title="Follow us on Facebook" aria-label="Follow on Facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path fill="#1877F2" d="M18 2h-3a5 5 0 0 0-5 5v3h-2.5v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className="nimbus-cta-container">
            <div className="nimbus-cta-row">
              <a href="/quote" className="nimbus-cta nimbus-cta-primary">Boiler Quote</a>
              <a href="#contact-form" className="nimbus-cta nimbus-cta-secondary">Free Survey</a>
              <a href="mailto:info@nimbusboilers.co.uk" className="nimbus-cta nimbus-cta-primary">Email Us</a>
              <a href="tel:01724622069" className="nimbus-cta nimbus-cta-secondary">Call 01724 622069</a>
            </div>
          </div>
        </div>
      </nav>
      <div className="maintenance-banner">
        <div className="banner-wrapper">
          <h2 className="banner-label">DIY Gas Boiler Maintenance Checklist for Scunthorpe Homes:</h2>
          <div className="banner-scroller" aria-live="polite">
            <div className="banner-track">
              <div className="banner-items">
                <span className="banner-item">Check pressure 1-1.5 bar</span>
                <span className="banner-item">Bleed radiators monthly</span>
                <span className="banner-item">Clean air filters quarterly</span>
                <span className="banner-item">Optimise thermostat settings</span>
                <span className="banner-item">Monitor unusual noises</span>
              </div>
              <div className="banner-items" aria-hidden="true">
                <span className="banner-item">Check pressure 1-1.5 bar</span>
                <span className="banner-item">Bleed radiators monthly</span>
                <span className="banner-item">Clean air filters quarterly</span>
                <span className="banner-item">Optimise thermostat settings</span>
                <span className="banner-item">Monitor unusual noises</span>
              </div>
            </div>
          </div>
        </div>
        <p className="banner-footnote">
          Professional annual service by Gas Safe certified Nimbus engineers. Free quotes for Scunthorpe & North Lincolnshire.
        </p>
      </div>
      <main>
        <section className="hero-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '50px'}}>
            <div style={{flex: '1 1 400px', textAlign: 'center'}}>
              <h1 className="section-heading section-heading--hero">Gas Boiler Maintenance Tips Scunthorpe</h1>
              <h2 className="section-subheading">DIY Home Checks & When to Book Gas Boiler Service North Lincolnshire | Annual Servicing by Gas Safe Engineers</h2>
              <p className="section-text section-text--intro section-text--compact">Practical <strong>gas boiler maintenance tips Scunthorpe</strong> for homeowners. Essential for <strong>gas boiler service Scunthorpe</strong>, <strong>gas boiler repair North Lincolnshire</strong>, and <strong>gas boiler installation Scunthorpe</strong>. Learn safe DIY tasks, warning signs and why <strong>annual boiler service</strong> is essential. Professional service from Nimbus Gas Safe engineers. Call 01724 622069.</p>
              <div className="section-cta-group">
                <a href="#contact-form" className="cta-button cta-button--nowrap">Book Gas Boiler Service</a>
                <a href="/quote" className="cta-button cta-button--nowrap">Get Free Quote</a>
              </div>
            </div>
            <div style={{flex: '1 1 300px', maxWidth: '400px'}}>
              <img src="/images/hero-team-service.webp" alt="Gas Safe registered engineer performing boiler service Scunthorpe" className="w-full h-96 object-cover lg:h-screen rounded-lg" loading="lazy" />
            </div>
          </div>
        </section>
        <section className="why-maintenance-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <h2 className="section-heading section-heading--spaced">Why Regular Maintenance Matters</h2>
            <img decoding="async" src="/images/hero-boiler-room.webp" alt="Modern gas boiler installation Scunthorpe utility room" style={{width: '100%', maxWidth: '600px', height: 'auto', display: 'block', margin: '0 auto 30px', borderRadius: '8px'}} loading="lazy" />
            <ul className="section-list">
              <li><strong>Safety:</strong> Detects carbon monoxide risks, gas leaks and faulty components.</li>
              <li><strong>Efficiency:</strong> Up to 10% fuel savings through cleaning and adjustments.</li>
              <li><strong>Reliability:</strong> Prevents winter breakdowns and emergency callouts.</li>
              <li><strong>Longevity:</strong> Extends boiler life by 5-10 years.</li>
              <li><strong>Compliance:</strong> Required for insurance, warranties and landlord Gas Safety Certificates.</li>
            </ul>
            <div className="section-cta-group">
              <a href="tel:01724622069" className="cta-button cta-button--nowrap">Call 01724 622069 for Service</a>
            </div>
          </div>
        </section>
        <section className="annual-service-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <h2 className="section-heading section-heading--spaced">Annual Gas Safe Service (966812)</h2>
            <p className="section-text">Our comprehensive annual service ensures your boiler remains safe and efficient. Nimbus Boilers engineers are fully qualified Gas Safe professionals (Registration: 966812).</p>
            <ul className="section-list">
              <li>Visual inspection of burner, heat exchanger, and flue system</li>
              <li>Flue gas analysis for combustion safety</li>
              <li>Cleaning of combustion chamber and components</li>
              <li>Testing safety devices (flame failure, overheat stats)</li>
              <li>System pressure vessel test and adjustments</li>
              <li>Full efficiency report and Gas Safe safety certification</li>
            </ul>
            <div className="section-cta-group">
              <a href="tel:01724622069" className="cta-button cta-button--nowrap">Book Your Annual Service</a>
            </div>
          </div>
        </section>
        <section className="diy-tips-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <h2 className="section-heading section-heading--spaced">DIY Tips: Check Boiler Pressure, Bleed Radiators, Clean Filters</h2>
            <ul className="section-list">
              <li><strong>Check Boiler Pressure:</strong> Ensure 1-1.5 bar when cold. Top up via filling loop if low (never exceed 2 bar).</li>
              <li><strong>Bleed Radiators:</strong> Monthly in heating season using radiator key until water flows steadily.</li>
              <li><strong>Clean Filters:</strong> Vacuum air intake filters quarterly; replace per manufacturer guidelines.</li>
            </ul>
            <p style={{textAlign: 'center', marginTop: '30px', fontSize: '18px', fontWeight: 'bold'}}><strong>⚠️ DIY only for basic checks. Gas work MUST be by Gas Safe engineer.</strong></p>
          </div>
        </section>
        <section className="warning-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <h2 className="section-heading section-heading--spaced">When to Call Professionals</h2>
            <ul className="section-list">
              <li><strong>Leaks:</strong> Water or gas drips</li>
              <li><strong>Smells:</strong> Rotten egg gas or unusual odours</li>
              <li><strong>Flames:</strong> Yellow/orange instead of blue</li>
              <li><strong>Noises:</strong> Gurgling, banging beyond normal</li>
              <li><strong>Controls:</strong> Error codes, lockout, no ignition</li>
              <li><strong>Performance:</strong> No heat/hot water, pressure drops repeatedly</li>
            </ul>
            <div className="section-cta-group">
              <a href="tel:01724622069" className="cta-button cta-button--nowrap">Emergency Call 01724 622069</a>
            </div>
          </div>
        </section>
        <section className="eco4-grants-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <h2 className="section-heading section-heading--spaced">ECO4 Grants for Servicing?</h2>
            <p className="section-text">The ECO4 scheme primarily funds boiler replacements and upgrades, but may cover servicing for eligible low-income households with poor energy efficiency. Contact us for a free eligibility check.</p>
            <ul className="section-list">
              <li>Low income or benefits recipients</li>
              <li>Properties with EPC rating D-G</li>
              <li>Off-gas homes (oil/LPG)</li>
              <li>Free survey to confirm eligibility</li>
            </ul>
            <div className="section-cta-group">
              <a href="#contact-form" className="cta-button cta-button--nowrap">Check ECO4 Eligibility</a>
            </div>
          </div>
        </section>
        <section className="nimbus-services-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <h2 className="section-heading section-heading--spaced">Nimbus Professional Gas Boiler Services in Scunthorpe</h2>
            <div className="services-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px'}}>
              <div className="service-card">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{margin: '0 auto 20px'}}>
                  <circle cx="12" cy="12" r="12" fill="#00a676"/>
                  <path d="M6 12.5L10 16.5L18 7.5" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 className="card-heading">Annual Boiler Service</h3>
                <p className="card-text">Fixed price Gas Safe service with safety certificate.</p>
              </div>
              <div className="service-card">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{margin: '0 auto 20px'}}>
                  <circle cx="12" cy="12" r="12" fill="#00a676"/>
                  <path d="M6 12.5L10 16.5L18 7.5" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 className="card-heading">Boiler Repairs</h3>
                <p className="card-text">Fast diagnosis and repair of breakdowns.</p>
              </div>
              <div className="service-card">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{margin: '0 auto 20px'}}>
                  <circle cx="12" cy="12" r="12" fill="#00a676"/>
                  <path d="M6 12.5L10 16.5L18 7.5" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 className="card-heading">New Installations</h3>
                <p className="card-text">Combi, system, regular boilers installed.</p>
              </div>
              <div className="service-card">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{margin: '0 auto 20px'}}>
                  <circle cx="12" cy="12" r="12" fill="#00a676"/>
                  <path d="M6 12.5L10 16.5L18 7.5" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 className="card-heading">Emergency Response</h3>
                <p className="card-text">24/7 boiler breakdown service Scunthorpe.</p>
              </div>
            </div>
            <div className="section-cta-group">
              <a href="#contact-form" className="cta-button cta-button--nowrap">Book Service Now</a>
            </div>
          </div>
        </section>
        <section className="faqs-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <h2 className="section-heading section-heading--spaced">Gas Boiler Maintenance FAQs Scunthorpe</h2>
            <div className="faq-accordion">
              {faqData.map((faq, index) => (
                <div key={index} className={`faq-item ${faqActive === index ? 'active' : ''}`}>
                  <h3 className="faq-question flex justify-between items-center" onClick={() => toggleFaq(index)} role="button" tabIndex="0" aria-expanded={faqActive === index} aria-controls={`faq-answer-${index}`}>
                    {faq.question}
                    <span>
                      {faqActive === index ? (
                        <MinusIcon className="h-5 w-5" />
                      ) : (
                        <PlusIcon className="h-5 w-5" />
                      )}
                    </span>
                  </h3>
                  <div className="faq-answer" id={`faq-answer-${index}`} role="region" aria-labelledby={`faq-question-${index}`} aria-hidden={faqActive !== index}>{faq.answer}</div>
                </div>
              ))}            
            </div>
          </div>
        </section>
        <section className="testimonials-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <h2 className="section-heading section-heading--spaced">Customer Reviews - Boiler Maintenance Scunthorpe</h2>
            <div className="testimonials-carousel-wrapper">
              <div className="testimonials-carousel">
                <div className="testimonial-card">
                  <div className="testimonial-stars">★★★★★</div>
                  <p>"Thorough annual service and helpful maintenance tips. Boiler running better than ever." - Scunthorpe Resident</p>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-stars">★★★★★</div>
                  <p>"Quick response to pressure issue. Explained DIY checks for future. Highly recommend." - Local Homeowner</p>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-stars">★★★★★</div>
                  <p>"Gas Safe team fixed leak fast. Peace of mind with service plan." - Satisfied Customer</p>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-stars">★★★★★</div>
                  <p>"Excellent advice on maintenance. Prevented breakdown this winter." - Repeat Client</p>
                </div>
                <div className="testimonial-card" aria-hidden="true">
                  <div className="testimonial-stars">★★★★★</div>
                  <p>"Thorough annual service and helpful maintenance tips. Boiler running better than ever." - Scunthorpe Resident</p>
                </div>
              </div>
            </div>
            <div className="section-cta-group section-cta-group--spaced">
              <a href="https://share.google/yk7F28G9VpVstANKx" target="_blank" rel="noopener noreferrer" className="cta-button cta-button--nowrap">
                Read Google Reviews
              </a>
            </div>
          </div>
        </section>
        <section className="manufacturers-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <h2 className="section-heading section-heading--spaced">Boiler Brands We Service in Scunthorpe</h2>
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '20px'}}>
              <div style={{padding: '20px', border: '1px solid #A8D5BA', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)', backgroundColor: '#f9f9f9', minHeight: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.3s ease, box-shadow 0.3s ease'}}>
                <a href="https://www.baxi.co.uk/" target="_blank" rel="noopener noreferrer" style={{display: 'inline-block', textDecoration: 'none'}}>
                  <img decoding="async" src="/images/baxi-logo.webp" alt="Baxi boilers service Scunthorpe" style={{maxWidth: '150px', maxHeight: '100px', display: 'block'}} loading="lazy" />
                </a>
              </div>
              <div style={{padding: '20px', border: '1px solid #A8D5BA', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)', backgroundColor: '#f9f9f9', minHeight: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.3s ease, box-shadow 0.3s ease'}}>
                <a href="https://idealheating.com/" target="_blank" rel="noopener noreferrer" style={{display: 'inline-block', textDecoration: 'none'}}>
                  <img decoding="async" src="/images/ideal-logo.webp" alt="Ideal boilers service Scunthorpe" style={{maxWidth: '150px', maxHeight: '100px', display: 'block'}} loading="lazy" />
                </a>
              </div>
              <div style={{padding: '20px', border: '1px solid #A8D5BA', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)', backgroundColor: '#f9f9f9', minHeight: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.3s ease, box-shadow 0.3s ease'}}>
                <a href="https://www.vaillant.co.uk/" target="_blank" rel="noopener noreferrer" style={{display: 'inline-block', textDecoration: 'none'}}>
                  <img decoding="async" src="/images/vaillant-logo.webp" alt="Vaillant boilers service Scunthorpe" style={{maxWidth: '150px', maxHeight: '100px', display: 'block'}} loading="lazy" />
                </a>
              </div>
              <div style={{padding: '20px', border: '1px solid #A8D5BA', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)', backgroundColor: '#f9f9f9', minHeight: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.3s ease, box-shadow 0.3s ease'}}>
                <a href="https://www.worcester-bosch.co.uk/" target="_blank" rel="noopener noreferrer" style={{display: 'inline-block', textDecoration: 'none'}}>
                  <img decoding="async" src="/images/worcester-logo.webp" alt="Worcester Bosch boilers service Scunthorpe" style={{maxWidth: '150px', maxHeight: '100px', display: 'block'}} loading="lazy" />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="free-quote-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <h2 className="section-heading">Get Your Personalised Gas Boiler Service Quote Scunthorpe</h2>
            <p className="section-text section-text--intro">Book annual service or repairs for your Scunthorpe boiler. Free no-obligation quote. <strong>Gas Safe disclaimer:</strong> All gas work must be carried out by a Gas Safe registered engineer. Nimbus Boilers is Gas Safe registered (966812).</p>
            <div id="contact-form">
              <QuoteForm />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default GasBoilerMaintenanceTipsScunthorpe;
