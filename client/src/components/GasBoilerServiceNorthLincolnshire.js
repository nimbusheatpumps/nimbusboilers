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

const GasBoilerServiceNorthLincolnshire = () => {
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
      question: "Why is annual boiler service required in North Lincolnshire?",
      answer: "According to UK Gas Safety Regulations, annual boiler servicing is mandatory for gas boilers in North Lincolnshire. Harsh winters increase risks; regular service by Gas Safe engineers ensures safety, efficiency, and prevents breakdowns."
    },
    {
      question: "What does a boiler service include?",
      answer: "A full Gas Safe boiler service includes: visual inspection, flue gas analysis, cleaning combustion chamber and heat exchanger, checking safety devices, pressure testing, electrical checks, and efficiency report with CP12 certificate if needed."
    },
    {
      question: "How much does gas boiler service cost in North Lincolnshire?",
      answer: "Pricing ranges from £80-£120 for standard services. Factors include boiler type (combi/system), age, system complexity, location accessibility, and any additional safety checks required."
    },
    {
      question: "What are the benefits of regular boiler servicing?",
      answer: "Benefits include improved energy efficiency (up to 10% bill savings), enhanced safety (CO detection), extended boiler lifespan (2-3 years), warranty/insurance compliance, and reduced breakdown risk."
    },
    {
      question: "Do you offer boiler service for landlords in North Lincolnshire?",
      answer: "Yes, we provide annual Gas Safety Certificates (CP12) for landlords. Full service and certification for rental properties across North Lincolnshire and Scunthorpe."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Gas Boiler Service North Lincolnshire | Annual Servicing Experts | Nimbus Boilers & Heat Pumps</title>
        <meta name="description" content="Expert gas boiler service North Lincolnshire by Gas Safe registered engineers. Annual boiler servicing, safety checks, boiler service Scunthorpe. Fixed price £80-£120. Free quote." />
        <meta name="keywords" content="gas boiler service north lincolnshire, boiler service scunthorpe, gas boiler installation scunthorpe, annual boiler service north lincolnshire, gas safe boiler service scunthorpe" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://nimbusheatpumps.co.uk/gas-boiler-service-north-lincolnshire/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://nimbusheatpumps.co.uk/#organization",
            "name": "Nimbus Heat Pumps Ltd",
            "alternateName": "Nimbus Boilers & Heat Pumps",
            "url": "https://nimbusheatpumps.co.uk/",
            "logo": "https://nimbusheatpumps.co.uk/wp-content/uploads/2025/06/Nimbus-Heat-Pumps-Logo.png",
            "description": "Gas Safe registered boiler service across North Lincolnshire including boiler service Scunthorpe. Annual servicing, Gas Safety certificates, maintenance plans.",
            "image": "https://nimbusheatpumps.co.uk/wp-content/uploads/2025/06/iStock-2211126281-scaled.jpg",
            "telephone": "+44 7487 546550",
            "email": "info@nimbusheatpumps.co.uk",
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
                "@type": "State",
                "name": "North Lincolnshire"
              },
              {
                "@type": "City",
                "name": "Scunthorpe"
              }
            ],
            "makesOffer": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Gas Boiler Service North Lincolnshire",
                  "description": "Annual gas boiler servicing in North Lincolnshire by Gas Safe engineers."
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
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Gas Boiler Service North Lincolnshire",
            "provider": {
              "@id": "https://nimbusheatpumps.co.uk/#organization",
              "@type": "LocalBusiness"
            },
            "areaServed": {
              "@type": "Place",
              "name": "North Lincolnshire, Scunthorpe"
            },
            "serviceType": "Gas Boiler Servicing",
            "description": "Annual gas boiler service and maintenance by Gas Safe engineers in North Lincolnshire. Safety inspection, efficiency testing, cleaning. Boiler service Scunthorpe.",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "GBP",
              "price": "80-120",
              "itemConditioned": "https://schema.org/NewCondition"
            }
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
      </Helmet>
      <nav className="nimbus-nav" aria-label="Main navigation">
        <div className="nimbus-nav-container">
          <div className="nimbus-nav-inner">
            <a href="/" className="nimbus-logo-link" aria-label="Nimbus Boilers & Heat Pumps - Home">
              <img decoding="async" src="https://nimbusheatpumps.co.uk/wp-content/uploads/2025/06/Nimbus-Heat-Pumps-Logo.png"
                    alt="Nimbus Boilers & Heat Pumps - Gas Boiler Service North Lincolnshire"
                    className="nimbus-logo" loading="lazy" />
            </a>
            <button className={`nimbus-mobile-toggle ${menuActive ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                    aria-expanded={menuActive}
                    aria-controls="nimbusMenu">
              {menuActive ? (
                <XMarkIcon className="h-6 w-6 text-primary" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-primary" />
              )}
            </button>
            <ul className={`nimbus-menu ${menuActive ? 'active' : ''}`} id="nimbusMenu">
              <li className="nimbus-menu-item">
                <a href="https://nimbusheatpumps.co.uk/faq/" className="nimbus-link">Air Source Heat Pumps FAQ</a>
              </li>
              <li className="nimbus-menu-item">
                <a href="https://nimbusheatpumps.co.uk/areas-we-cover/" className="nimbus-link">Areas We Cover</a>
              </li>
              <li className="nimbus-menu-item">
                <a href="https://nimbusheatpumps.co.uk/boiler-upgrade-scheme-eligibility-7500-heat-pump-grants-scunthorpe/"
                    className="nimbus-link">£7,500 Boiler Upgrade Scheme Grants in Scunthorpe</a>
              </li>
              <li className={`nimbus-menu-item nimbus-has-dropdown ${dropdownActive === 0 ? 'dropdown-active' : ''}`}>
                <a href="#" className="nimbus-link" onClick={() => toggleDropdown(0)}>
                  Heat Pump & Boiler Manufacturers <ChevronDownIcon className="inline-block h-4 w-4 ml-1" />
                </a>
                <ul className="nimbus-dropdown">
                  <li className="nimbus-dropdown-item">
                    <a href="https://www.alpha-innovation.co.uk/products-category/air-source-heat-pumps"
                      className="nimbus-dropdown-link"
                      target="_blank"
                      rel="noopener noreferrer">
                      Alpha Heat Pumps
                    </a>
                  </li>
                  <li className="nimbus-dropdown-item">
                    <a href="https://www.baxi.co.uk/products/air-source-heat-pumps"
                      className="nimbus-dropdown-link"
                      target="_blank"
                      rel="noopener noreferrer">
                      Baxi Heat Pumps
                    </a>
                  </li>
                  <li className="nimbus-dropdown-item">
                    <a href="https://www.idealheating.com/products/heat-pumps"
                      className="nimbus-dropdown-link"
                      target="_blank"
                      rel="noopener noreferrer">
                      Ideal Heat Pumps
                    </a>
                  </li>
                  <li className="nimbus-dropdown-item">
                    <a href="https://www.intergasheating.co.uk/homeowner/products/xtend-split/"
                      className="nimbus-dropdown-link"
                      target="_blank"
                      rel="noopener noreferrer">
                      Intergas Heat Pumps
                    </a>
                  </li>
                  <li className="nimbus-dropdown-item">
                    <a href="https://les.mitsubishielectric.co.uk/homeowners/our-heat-pumps"
                      className="nimbus-dropdown-link"
                      target="_blank"
                      rel="noopener noreferrer">
                      Mitsubishi Electric Heat Pumps
                    </a>
                  </li>
                  <li className="nimbus-dropdown-item">
                    <a href="https://samsung-climatesolutions.com/gb/b2c/our-solutions/home/heat-pump-solutions/heating.html"
                      className="nimbus-dropdown-link"
                      target="_blank"
                      rel="noopener noreferrer">
                      Samsung Heat Pumps
                    </a>
                  </li>
                  <li className="nimbus-dropdown-item">
                    <a href="https://www.vaillant.co.uk/homeowners/products/heat-pumps/view-all-heat-pumps/"
                      className="nimbus-dropdown-link"
                      target="_blank"
                      rel="noopener noreferrer">
                      Vaillant Heat Pumps
                    </a>
                  </li>
                  <li className="nimbus-dropdown-item">
                    <a href="https://www.viessmann.co.uk/en/products/heat-pump/heat-pumps.html"
                      className="nimbus-dropdown-link"
                      target="_blank"
                      rel="noopener noreferrer">
                      Viessmann Heat Pumps
                    </a>
                  </li>
                  <li className="nimbus-dropdown-item">
                    <a href="https://www.worcester-bosch.co.uk/products/heat-pumps"
                      className="nimbus-dropdown-link"
                      target="_blank"
                      rel="noopener noreferrer">
                      Worcester Bosch Heat Pumps
                    </a>
                  </li>
                  <li className="nimbus-dropdown-item">
                    <a href="https://www.alpha-innovation.co.uk/products"
                      className="nimbus-dropdown-link"
                      target="_blank"
                      rel="noopener noreferrer">
                      Alpha Boilers
                    </a>
                  </li>
                  <li className="nimbus-dropdown-item">
                    <a href="https://www.baxi.co.uk/products/boilers"
                      className="nimbus-dropdown-link"
                      target="_blank"
                      rel="noopener noreferrer">
                      Baxi Boilers
                    </a>
                  </li>
                  <li className="nimbus-dropdown-item">
                    <a href="https://www.idealheating.com/products/boilers"
                      className="nimbus-dropdown-link"
                      target="_blank"
                      rel="noopener noreferrer">
                      Ideal Boilers
                    </a>
                  </li>
                  <li className="nimbus-dropdown-item">
                    <a href="https://www.intergasheating.co.uk/homeowner/products/"
                      className="nimbus-dropdown-link"
                      target="_blank"
                      rel="noopener noreferrer">
                      Intergas Boilers
                    </a>
                  </li>
                  <li className="nimbus-dropdown-item">
                    <a href="https://www.vaillant.com/home/products/energy-type/gas/"
                      className="nimbus-dropdown-link"
                      target="_blank"
                      rel="noopener noreferrer">
                      Vaillant Boilers
                    </a>
                  </li>
                  <li className="nimbus-dropdown-item">
                    <a href="https://www.viessmann.co.uk/en/products/gas-boilers.html"
                      className="nimbus-dropdown-link"
                      target="_blank"
                      rel="noopener noreferrer">
                      Viessmann Boilers
                    </a>
                  </li>
                  <li className="nimbus-dropdown-item">
                    <a href="https://www.worcester-bosch.co.uk/products/boilers"
                      className="nimbus-dropdown-link"
                      target="_blank"
                      rel="noopener noreferrer">
                      Worcester Bosch Boilers
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nimbus-menu-item">
                <a href="/" className="nimbus-link">Home</a>
              </li>
              <li className={`nimbus-menu-item nimbus-has-dropdown ${dropdownActive === 1 ? 'dropdown-active' : ''}`}>
                <a href="#" className="nimbus-link" onClick={() => toggleDropdown(1)}>
                  Policies <ChevronDownIcon className="inline-block h-4 w-4 ml-1" />
                </a>
                <ul className="nimbus-dropdown">
                  <li className="nimbus-dropdown-item">
                    <a href="https://nimbusheatpumps.co.uk/policies/cookies-policy/"
                      className="nimbus-dropdown-link">
                      Cookies Policy
                    </a>
                  </li>
                  <li className="nimbus-dropdown-item">
                    <a href="https://nimbusheatpumps.co.uk/policies/privacy-policy/"
                      className="nimbus-dropdown-link">
                      Privacy Policy
                    </a>
                  </li>
                  <li className="nimbus-dropdown-item">
                    <a href="https://nimbusheatpumps.co.uk/policies/terms-and-conditions/"
                      className="nimbus-dropdown-link">
                      Terms & Conditions
                    </a>
                  </li>
                </ul>
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
                      <path fill="#1877F2" d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a href="https://share.google/yk7F28G9VpVstANKx" target="_blank" rel="noopener noreferrer" title="Google Reviews" aria-label="Google Reviews">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" fill="#ffffff" stroke="#4285F4" strokeWidth="2"/>
                      <text x="12" y="16" textAnchor="middle" fontSize="12" fontFamily="Arial, Helvetica, sans-serif" fill="#4285F4">G</text>
                    </svg>
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className="nimbus-cta-container">
            <div className="nimbus-cta-row">
              <a href="mailto:info@nimbusheatpumps.co.uk" className="nimbus-cta nimbus-cta-primary">Email Us</a>
              <a href="tel:01724622069" className="nimbus-cta nimbus-cta-secondary" aria-label="Call Now: 01724 622069">Call Now</a>
            </div>
          </div>
        </div>
      </nav>
      <div className="install-banner">
        <div className="banner-wrapper">
          <h2 className="banner-label">Every boiler service includes:</h2>
          <div className="banner-scroller" aria-live="polite">
            <div className="banner-track">
              <div className="banner-items">
                <span className="banner-item">Flue gas analysis</span>
                <span className="banner-item">Safety device check</span>
                <span className="banner-item">Combustion clean</span>
                <span className="banner-item">Pressure test</span>
                <span className="banner-item">Efficiency report</span>
              </div>
              <div className="banner-items" aria-hidden="true">
                <span className="banner-item">Flue gas analysis</span>
                <span className="banner-item">Safety device check</span>
                <span className="banner-item">Combustion clean</span>
                <span className="banner-item">Pressure test</span>
                <span className="banner-item">Efficiency report</span>
              </div>
            </div>
          </div>
        </div>
        <p className="banner-footnote">
          All work Gas Safe certified to UK safety standards.
        </p>
      </div>
      <main>
        <section className="hero-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '50px'}}>
            <div style={{flex: '1 1 400px', textAlign: 'center'}}>
              <h1 className="section-heading section-heading--hero">Gas Boiler Service North Lincolnshire | Annual Servicing Experts</h1>
              <h2 className="section-subheading">Gas Safe Annual Boiler Servicing | Safety Checks | Efficiency Testing | Boiler Service Scunthorpe</h2>
              <p className="section-text section-text--intro section-text--compact">Professional <strong>gas boiler service north lincolnshire</strong> and <strong>boiler service scunthorpe</strong> by certified Gas Safe engineers. Annual servicing ensures safety, efficiency, warranty compliance. Fixed price £80-£120. Serving all North Lincolnshire.</p>
              <div className="section-cta-group">
                <a href="#contact-form" className="cta-button cta-button--nowrap">Get Free Boiler Service Quote</a>
                <a href="/quote" className="cta-button cta-button--nowrap">Instant Quote</a>
              </div>
            </div>
            <div style={{flex: '1 1 300px', maxWidth: '400px'}}>
              <img decoding="async" src="https://via.placeholder.com/800x600/00a676/ffffff?text=Gas+Boiler+Service+North+Lincolnshire" alt="gas boiler service North Lincolnshire Gas Safe engineer performing annual safety service" style={{width: '100%', height: 'auto', display: 'block', margin: '0 auto', borderRadius: '8px'}} loading="lazy" />
            </div>
          </div>
        </section>
        <section className="annual-service-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <h2 className="section-heading section-heading--spaced">Annual Gas Safety Servicing North Lincolnshire</h2>
            <p className="section-text">Our Gas Safe engineers perform thorough annual <strong>gas boiler service north lincolnshire</strong>. Essential for safety in cold North Lincolnshire winters.</p>
            <img decoding="async" src="https://via.placeholder.com/800x400/00a676/fafafa?text=Annual+Gas+Safety+Service+North+Lincolnshire" alt="gas boiler service North Lincolnshire annual Gas Safety servicing by certified engineer" style={{width: '100%', maxWidth: '600px', height: 'auto', display: 'block', margin: '0 auto 30px', borderRadius: '8px'}} loading="lazy" />
            <div className="section-cta-group">
              <a href="#contact-form" className="cta-button cta-button--nowrap">Book Annual Service</a>
            </div>
          </div>
        </section>
        <section className="benefits-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <h2 className="section-heading section-heading--spaced">Benefits of Regular Boiler Servicing</h2>
            <p className="section-text">Regular <strong>boiler service scunthorpe</strong> and North Lincolnshire delivers key benefits:</p>
            <ul className="section-list">
              <li>Improved efficiency - save up to 10% on heating bills</li>
              <li>Enhanced safety - detect CO leaks and faults early</li>
              <li>Extend boiler life by 2-3 years</li>
              <li>Maintain warranty and insurance compliance</li>
              <li>Prevent unexpected breakdowns</li>
            </ul>
            <div className="section-cta-group">
              <a href="#contact-form" className="cta-button cta-button--nowrap">Get Service Benefits Quote</a>
            </div>
          </div>
        </section>
        <section className="pricing-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <h2 className="section-heading section-heading--spaced">Boiler Service Pricing North Lincolnshire (£80-£120)</h2>
            <p className="section-text">Fixed price <strong>gas boiler service north lincolnshire</strong>. Transparent costs with no hidden fees.</p>
            <ul className="section-list">
              <li>Standard combi boiler: £80</li>
              <li>System/regular boiler: £100</li>
              <li>Landlord CP12 cert: +£20</li>
              <li>Factors: accessibility, boiler age, additional tests</li>
            </ul>
            <img decoding="async" src="https://via.placeholder.com/800x400/00a676/fafafa?text=Boiler+Service+Pricing+£80-£120" alt="gas boiler service North Lincolnshire pricing £80-£120 factors" style={{width: '100%', maxWidth: '600px', height: 'auto', display: 'block', margin: '0 auto 30px', borderRadius: '8px'}} loading="lazy" />
            <div className="section-cta-group">
              <a href="#contact-form" className="cta-button cta-button--nowrap">View Full Pricing</a>
            </div>
          </div>
        </section>
        <section className="our-services-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <h2 className="section-heading section-heading--spaced">Gas Boiler Service Services North Lincolnshire</h2>
            <div className="services-grid">
              <div className="service-card">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{margin: '0 auto 20px'}}>
                  <circle cx="12" cy="12" r="12" fill="#00a676"/>
                  <path d="M6 12.5L10 16.5L18 7.5" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 className="card-heading">Annual Boiler Service North Lincolnshire</h3>
                <p className="card-text">Comprehensive annual servicing for gas boilers.</p>
              </div>
              <div className="service-card">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{margin: '0 auto 20px'}}>
                  <circle cx="12" cy="12" r="12" fill="#00a676"/>
                  <path d="M6 12.5L10 16.5L18 7.5" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 className="card-heading">Gas Safety Certificates</h3>
                <p className="card-text">CP12 certificates for landlords and homeowners.</p>
              </div>
              <div className="service-card">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{margin: '0 auto 20px'}}>
                  <circle cx="12" cy="12" r="12" fill="#00a676"/>
                  <path d="M6 12.5L10 16.5L18 7.5" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 className="card-heading">Maintenance Plans</h3>
                <p className="card-text">Affordable yearly service plans.</p>
              </div>
              <div className="service-card">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{margin: '0 auto 20px'}}>
                  <circle cx="12" cy="12" r="12" fill="#00a676"/>
                  <path d="M6 12.5L10 16.5L18 7.5" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 className="card-heading">Emergency Servicing</h3>
                <p className="card-text">24/7 urgent service calls.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="faqs-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <h2 className="section-heading section-heading--spaced">Gas Boiler Service FAQs North Lincolnshire</h2>
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
            <h2 className="section-heading section-heading--spaced">Customer Reviews - Boiler Service North Lincolnshire</h2>
            <div className="testimonials-carousel-wrapper">
              <div className="testimonials-carousel">
                <div className="testimonial-card">
                  <div className="testimonial-stars">★★★★★</div>
                  <p>"Thorough service, peace of mind for winter. Highly recommend." - North Lincolnshire Customer</p>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-stars">★★★★★</div>
                  <p>"Gas Safe cert issued quickly for rental. Professional team." - Landlord</p>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-stars">★★★★★</div>
                  <p>"Efficient service at good price. Boiler running better." - Homeowner</p>
                </div>
              </div>
            </div>
            <div className="section-cta-group section-cta-group--spaced">
              <a href="https://share.google/yk7F28G9VpVstANKx" target="_blank" rel="noopener noreferrer" className="cta-button cta-button--nowrap">
                Read all Google reviews
              </a>
            </div>
          </div>
        </section>
        <section className="free-quote-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <h2 className="section-heading">Request Free Gas Boiler Service Quote North Lincolnshire</h2>
            <p className="section-text section-text--intro">Book your annual boiler service today. Fast response across North Lincolnshire.</p>
            <div id="contact-form">
              <QuoteForm />
            </div>
          </div>
        </section>
      </main>
      <style>{`
        :root {
          --primary-green: #00a676;
          --dark-green: #007a57;
          --light-green: #e8f5f0;
          --accent-green: #00c896;
          --text-dark: #1a1a1a;
          --text-medium: #4a5568;
          --text-light: #718096;
          --white: #ffffff;
          --off-white: #fafafa;
          --glass-white: rgba(255, 255, 255, 0.85);
          --shadow-soft: 0 2px 8px rgba(0, 0, 0, 0.04);
          --shadow-medium: 0 4px 16px rgba(0, 0, 0, 0.06);
          --shadow-large: 0 8px 32px rgba(0, 0, 0, 0.08);
          --radius-sm: 10px;
          --radius-md: 14px;
          --radius-lg: 18px;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        * {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          padding: 0;
          line-height: 1.6;
          color: var(--text-dark);
          background: var(--off-white);
        }
        .nimbus-section-base {
          padding: 100px 32px;
          max-width: 1400px;
          margin: 40px auto;
          text-align: center;
          background: var(--white);
          border: 2px solid var(--light-green);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-medium);
          position: relative;
        }
        @media (max-width: 768px) {
          .nimbus-section-base {
            padding: 60px 20px;
            margin: 20px auto;
            border-radius: var(--radius-sm);
          }
        }
        .section-heading {
          font-size: clamp(28px, 5vw, 48px);
          font-weight: 700;
          margin-bottom: 24px;
          color: var(--dark-green);
          line-height: 1.2;
        }
        .section-heading--hero {
          font-size: clamp(36px, 6vw, 64px);
          background: linear-gradient(135deg, var(--primary-green), var(--accent-green));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .section-subheading {
          font-size: clamp(20px, 4vw, 32px);
          font-weight: 500;
          color: var(--dark-green);
          margin-bottom: 20px;
        }
        .section-text {
          font-size: clamp(16px, 3vw, 20px);
          line-height: 1.7;
          max-width: 700px;
          margin: 0 auto 30px;
          color: var(--text-medium);
        }
        .section-text--intro {
          font-weight: 500;
        }
        .section-list {
          list-style: none;
          padding: 0;
          max-width: 800px;
          margin: 0 auto 30px;
          text-align: left;
        }
        .section-list li {
          font-size: 18px;
          padding: 12px 0;
          position: relative;
          padding-left: 40px;
        }
        .section-list li::before {
          content: '✅';
          position: absolute;
          left: 0;
          top: 12px;
        }
        .section-cta-group {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 40px;
        }
        .cta-button {
          padding: 16px 32px;
          background: var(--white);
          color: var(--primary-green);
          border: 2px solid var(--primary-green);
          border-radius: var(--radius-md);
          font-weight: 600;
          font-size: 16px;
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 52px;
          box-shadow: var(--shadow-soft);
        }
        .cta-button:hover {
          background: var(--primary-green);
          color: var(--white);
          transform: translateY(-2px);
          box-shadow: var(--shadow-medium);
        }
        .cta-button--nowrap {
          white-space: nowrap;
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          margin-top: 50px;
        }
        .service-card {
          background: var(--white);
          padding: 40px 24px;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-soft);
          border: 1px solid var(--light-green);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-large);
        }
        .card-heading {
          font-size: 24px;
          font-weight: 600;
          color: var(--dark-green);
          margin-bottom: 16px;
        }
        .card-text {
          color: var(--text-medium);
          line-height: 1.6;
        }
        .faq-accordion {
          max-width: 800px;
          margin: 0 auto;
        }
        .faq-item {
          border-bottom: 1px solid #e5e7eb;
          margin-bottom: 10px;
        }
        .faq-question {
          cursor: pointer;
          padding: 20px;
          font-size: 18px;
          font-weight: 600;
          color: var(--dark-green);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .faq-question:hover {
          background: var(--light-green);
        }
        .faq-answer {
          padding: 0 20px 20px;
          color: var(--text-medium);
          display: none;
        }
        .faq-item.active .faq-answer {
          display: block;
        }
        .faq-item.active .faq-question {
          background: var(--light-green);
          border-radius: var(--radius-sm) var(--radius-sm) 0 0;
        }
        .testimonials-carousel {
          display: flex;
          gap: 20px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          padding: 20px 0;
        }
        .testimonial-card {
          flex: 0 0 300px;
          background: var(--white);
          padding: 30px;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-soft);
          text-align: center;
          border: 1px solid var(--light-green);
        }
        .testimonial-stars {
          color: #fbbf24;
          font-size: 24px;
          margin-bottom: 16px;
        }
        .install-banner {
          background: linear-gradient(135deg, var(--primary-green), var(--accent-green));
          color: var(--white);
          padding: 20px 0;
          overflow: hidden;
        }
        .banner-wrapper {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 32px;
        }
        .banner-label {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 16px;
          opacity: 0.95;
        }
        .banner-scroller {
          overflow: hidden;
        }
        .banner-track {
          display: flex;
          animation: scroll 30s linear infinite;
        }
        .banner-items {
          display: flex;
          gap: 40px;
          min-width: max-content;
        }
        .banner-item {
          font-size: 18px;
          font-weight: 500;
          padding: 12px 24px;
          background: rgba(255,255,255,0.2);
          border-radius: var(--radius-sm);
          backdrop-filter: blur(10px);
          white-space: nowrap;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .banner-footnote {
          font-size: 14px;
          opacity: 0.9;
          margin-top: 12px;
          font-style: italic;
        }
        .nimbus-nav {
          background: var(--white);
          box-shadow: var(--shadow-medium);
          position: sticky;
          top: 0;
          z-index: 100;
        }
        .nimbus-nav-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 80px;
        }
        @media (max-width: 768px) {
          .nimbus-nav-container {
            padding: 0 20px;
            height: 70px;
          }
        }
        .nimbus-logo {
          height: 50px;
          width: auto;
        }
        .nimbus-mobile-toggle {
          display: none;
          flex-direction: column;
          gap: 4px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
        }
        .nimbus-mobile-toggle span {
          width: 25px;
          height: 3px;
          background: var(--dark-green);
          transition: 0.3s;
          border-radius: 2px;
        }
        .nimbus-mobile-toggle.active span:nth-child(1) {
          transform: rotate(-45deg) translate(-5px, 6px);
        }
        .nimbus-mobile-toggle.active span:nth-child(2) {
          opacity: 0;
        }
        .nimbus-mobile-toggle.active span:nth-child(3) {
          transform: rotate(45deg) translate(-5px, -6px);
        }
        .nimbus-menu {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
          gap: 32px;
          align-items: center;
        }
        .nimbus-link {
          color: var(--text-dark);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s;
          position: relative;
        }
        .nimbus-link:hover {
          color: var(--primary-green);
        }
        .nimbus-has-dropdown {
          position: relative;
        }
        .nimbus-dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          background: var(--white);
          min-width: 250px;
          box-shadow: var(--shadow-large);
          border-radius: var(--radius-md);
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px);
          transition: all 0.3s ease;
          list-style: none;
          padding: 16px 0;
          margin: 0;
          border: 1px solid var(--light-green);
        }
        .nimbus-has-dropdown.dropdown-active .nimbus-dropdown {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
        .nimbus-dropdown-link {
          display: block;
          padding: 12px 24px;
          color: var(--text-medium);
          text-decoration: none;
          font-size: 14px;
          transition: background 0.3s;
        }
        .nimbus-dropdown-link:hover {
          background: var(--light-green);
          color: var(--dark-green);
        }
        .nimbus-social {
          display: flex;
          gap: 12px;
        }
        .nimbus-social a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          transition: transform 0.3s;
        }
        .nimbus-social a:hover {
          transform: scale(1.1);
        }
        .nimbus-cta-container {
          display: none;
        }
        @media (max-width: 1024px) {
          .nimbus-menu {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background: var(--white);
            flex-direction: column;
            justify-content: center;
            gap: 20px;
            opacity: 0;
            visibility: hidden;
            transform: translateX(-100%);
            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }
          .nimbus-menu.active {
            opacity: 1;
            visibility: visible;
            transform: translateX(0);
          }
          .nimbus-mobile-toggle {
            display: flex;
          }
          .nimbus-nav-inner {
            width: 100%;
          }
          .nimbus-has-dropdown .nimbus-dropdown {
            position: static;
            opacity: 1;
            visibility: visible;
            transform: none;
            box-shadow: none;
            border: none;
            background: var(--light-green);
            margin-top: 10px;
          }
          .nimbus-cta-container {
            display: block;
            order: -1;
          }
          .nimbus-cta-row {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            justify-content: center;
          }
          .nimbus-cta {
            padding: 12px 20px;
            font-size: 14px;
            border-radius: var(--radius-sm);
            text-decoration: none;
            font-weight: 600;
            min-height: 44px;
          }
          .nimbus-cta-primary {
            background: var(--primary-green);
            color: var(--white);
            border: 2px solid var(--primary-green);
          }
          .nimbus-cta-secondary {
            background: var(--white);
            color: var(--primary-green);
            border: 2px solid var(--primary-green);
          }
        }
        .footer-heading {
          font-size: 28px;
          color: var(--dark-green);
          margin-bottom: 20px;
        }
        .section-text--small {
          font-size: 14px;
          opacity: 0.8;
        }
        .section-cta-group--spaced {
          gap: 16px;
        }
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}
      </style>
    </>
  );
};

export default GasBoilerServiceNorthLincolnshire;
