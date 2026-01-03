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

const GasBoilerServicingScunthorpe = () => {
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
      answer: "According to UK regulations and manufacturer recommendations, gas boilers should be serviced annually. Our Gas Safe engineers in Scunthorpe recommend booking your annual boiler service every 12 months to ensure safety and efficiency."
    },
    {
      question: "How much does a boiler service cost in Scunthorpe?",
      answer: "From £80 inc VAT for standard gas boiler servicing in Scunthorpe. Prices range from £80 to £150 depending on boiler type and system complexity. Fixed-price with no hidden fees."
    },
    {
      question: "What is included in a Gas Safe boiler servicing in Scunthorpe?",
      answer: "Comprehensive service includes safety check, flue gas analysis, cleaning combustion chamber, checking safety devices, pressure testing, efficiency report, and Gas Safe certification."
    },
    {
      question: "What are the benefits of regular boiler servicing?",
      answer: "Improves safety, increases efficiency (saving up to 10% on bills), prevents breakdowns, extends lifespan, ensures Gas Safe compliance, valid for insurance and warranty."
    },
    {
      question: "Do you offer emergency boiler servicing in Scunthorpe?",
      answer: "Yes, 24/7 emergency boiler servicing across Scunthorpe and North Lincolnshire for urgent maintenance needs."
    },
    {
      question: "Is annual boiler service required for landlords in Scunthorpe?",
      answer: "Yes, landlords require annual Gas Safety Certificate (CP12). We provide thorough servicing and certification."
    },
    {
      question: "What if issues found during servicing?",
      answer: "We identify faults, provide detailed quote. No work without approval."
    }
  ];

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://nimbusheatpumps.co.uk/#organization",
    "name": "Nimbus Heat Pumps Ltd",
    "alternateName": "Nimbus Boilers & Heat Pumps",
    "url": "https://nimbusheatpumps.co.uk/",
    "logo": "https://nimbusheatpumps.co.uk/wp-content/uploads/2025/06/Nimbus-Heat-Pumps-Logo.png",
    "description": "Gas Safe registered boiler servicing, repair and installation in Scunthorpe and North Lincolnshire. Annual servicing, safety checks, Gas Safe certification.",
    "image": "https://nimbusheatpumps.co.uk/wp-content/uploads/2025/06/iStock-2211126281-scaled.jpg",
    "telephone": "+441724622069",
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
          "name": "Gas Boiler Servicing Scunthorpe",
          "description": "Annual gas boiler servicing in Scunthorpe by Gas Safe engineers."
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
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Gas Boiler Servicing Scunthorpe",
    "provider": {
      "@id": "https://nimbusheatpumps.co.uk/#organization",
      "@type": "LocalBusiness"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Scunthorpe, North Lincolnshire"
    },
    "serviceType": "Gas Boiler Servicing",
    "description": "Professional annual gas boiler servicing and maintenance by Gas Safe registered engineers in Scunthorpe. Safety checks, efficiency testing, cleaning, Gas Safe cert.",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "GBP",
      "price": "80",
      "itemConditioned": "https://schema.org/NewCondition"
    }
  };

  const faqSchema = {
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
  };

  return (
    <>
      <Helmet>
        <title>Gas Boiler Servicing Scunthorpe | Annual Boiler Service North Lincolnshire | Nimbus Boilers & Heat Pumps</title>
        <meta name="description" content="Expert gas boiler servicing Scunthorpe by Gas Safe engineers. Annual boiler service, safety checks, efficiency boost. From £80 inc VAT. North Lincolnshire. Free quote." />
        <meta name="keywords" content="gas boiler servicing Scunthorpe, boiler service North Lincolnshire, annual boiler service Scunthorpe, Gas Safe boiler service, boiler maintenance North Lincolnshire" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://nimbusheatpumps.co.uk/gas-boiler-servicing-scunthorpe/" />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      {/* Navigation */}
      <nav className="nimbus-nav" aria-label="Main navigation">
        <div className="nimbus-nav-container">
          <div className="nimbus-nav-inner">
            <a href="/" className="nimbus-logo-link" aria-label="Nimbus Boilers & Heat Pumps - Home">
              <img src="/images/nimbus-logo.webp" alt="Nimbus Boilers & Heat Pumps logo" className="nimbus-logo" loading="lazy" />
            </a>
            <button 
              className={`nimbus-mobile-toggle ${menuActive ? 'active' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
              aria-expanded={menuActive}
            >
              {menuActive ? (
                <XMarkIcon className="h-6 w-6 text-primary" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-primary" />
              )}
            </button>
            <ul className={`nimbus-menu ${menuActive ? 'active' : ''}`}>
              <li className="nimbus-menu-item">
                <a href="/faq" className="nimbus-link">FAQ</a>
              </li>
              <li className="nimbus-menu-item">
                <a href="/areas-covered" className="nimbus-link">Areas Covered</a>
              </li>
              <li className="nimbus-menu-item">
                <a href="/boiler-grants-scunthorpe" className="nimbus-link">Boiler Grants</a>
              </li>
              <li className="nimbus-menu-item nimbus-has-dropdown">
                <a href="#" className="nimbus-link" onClick={(e) => {e.preventDefault(); toggleDropdown(0);}}>
                  Services <ChevronDownIcon className="inline-block h-4 w-4 ml-1" />
                </a>
                <ul className="nimbus-dropdown">
                  <li><a href="/gas-boiler-servicing-scunthorpe" className="nimbus-dropdown-link">Boiler Servicing</a></li>
                  <li><a href="/gas-boiler-service-scunthorpe" className="nimbus-dropdown-link">Boiler Service</a></li>
                  <li><a href="/gas-boiler-repair-scunthorpe" className="nimbus-dropdown-link">Boiler Repair</a></li>
                </ul>
              </li>
              <li className="nimbus-menu-item">
                <a href="/" className="nimbus-link">Home</a>
              </li>
              <li className="nimbus-menu-item">
                <a href="/quote" className="nimbus-link">Get Quote</a>
              </li>
            </ul>
          </div>
          <div className="nimbus-cta-container">
            <div className="nimbus-cta-row">
              <a href="#contact-form" className="nimbus-cta nimbus-cta-secondary">Call 01724 622069</a>
              <a href="tel:01724622069" className="nimbus-cta nimbus-cta-primary" aria-label="Call Now: 01724 622069">Call Now</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Servicing Banner */}
      <div className="install-banner">
        <div className="banner-wrapper">
          <h2 className="banner-label">Every boiler servicing includes:</h2>
          <div className="banner-scroller" aria-live="polite">
            <div className="banner-track">
              <div className="banner-items">
                <span className="banner-item">Safety check</span>
                <span className="banner-item">Efficiency test</span>
                <span className="banner-item">Gas Safe cert</span>
                <span className="banner-item">Flue analysis</span>
                <span className="banner-item">Pressure test</span>
              </div>
              <div className="banner-items" aria-hidden="true">
                <span className="banner-item">Safety check</span>
                <span className="banner-item">Efficiency test</span>
                <span className="banner-item">Gas Safe cert</span>
                <span className="banner-item">Flue analysis</span>
                <span className="banner-item">Pressure test</span>
              </div>
            </div>
          </div>
        </div>
        <p className="banner-footnote">All work Gas Safe certified. From £80 inc VAT.</p>
      </div>

      <main>
        {/* Hero */}
        <section className="hero-section section">
          <div className="hero-container">
            <div className="hero-text">
              <h1 className="hero-h1">Gas Boiler Servicing Scunthorpe</h1>
              <h2 className="hero-h2">Annual Boiler Service North Lincolnshire | Gas Safe Engineers</h2>
              <p className="hero-p">Expert gas boiler servicing in Scunthorpe. Annual service for safety, efficiency and compliance. Serving North Lincolnshire. Book from £80 inc VAT.</p>
              <div className="hero-cta">
                <a href="#contact-form" className="cta-primary">Book Servicing</a>
                <a href="/quote" className="cta-secondary">Instant Quote</a>
              </div>
            </div>
            <div className="hero-image">
              <img src="/images/hero-home.webp" alt="Premium gas boiler installation Scunthorpe home heating" loading="lazy" />
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="benefits-section section">
          <div className="container">
            <h2>Benefits of Gas Boiler Servicing Scunthorpe</h2>
            <ul className="benefits-list">
              <li>Safety check & Gas Safe certification</li>
              <li>Boost efficiency, save on bills</li>
              <li>Prevent breakdowns & extend life</li>
              <li>Landlord CP12 certificates</li>
              <li>Fixed price from £80 inc VAT</li>
            </ul>
            <a href="#contact-form" className="cta-primary">Book Now - 01724 622069</a>
          </div>
        </section>

        {/* Services Grid */}
        <section className="services-section section">
          <div className="container">
            <h2>Our Boiler Servicing Services</h2>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">✅</div>
                <h3>Annual Boiler Servicing</h3>
                <p>Full annual service for gas boilers.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">📜</div>
                <h3>Gas Safety Certificates</h3>
                <p>CP12 for landlords & homeowners.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">🛡️</div>
                <h3>Safety & Efficiency Checks</h3>
                <p>Complete safety inspection.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">⚡</div>
                <h3>Maintenance Plans</h3>
                <p>Yearly peace of mind plans.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="faq-section section">
          <div className="container">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-list">
              {faqData.map((faq, index) => (
                <div key={index} className={`faq-item ${faqActive === index ? 'active' : ''}`}>
                  <h3 onClick={() => toggleFaq(index)} className="faq-question flex justify-between items-center">
                    {faq.question}
                    <span>
                      {faqActive === index ? (
                        <MinusIcon className="h-5 w-5" />
                      ) : (
                        <PlusIcon className="h-5 w-5" />
                      )}
                    </span>
                  </h3>
                  <p className="faq-answer">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section section">
          <div className="container">
            <h2>Ready for Your Boiler Service?</h2>
            <p>Call <a href="tel:01724622069">01724 622069</a> or get free quote.</p>
            <div id="contact-form">
              <QuoteForm />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer-section">
          <div className="container">
            <p>&copy; 2025 Nimbus Boilers & Heat Pumps. Gas Safe Registered. Scunthorpe, North Lincolnshire. <a href="tel:01724622069">01724 622069</a></p>
          </div>
        </footer>
      </main>

      <style jsx>{`
        /* Basic styles to make it work, matching siblings */
        .section { padding: 60px 20px; max-width: 1400px; margin: 0 auto; }
        .container { max-width: 1200px; margin: 0 auto; }
        .hero-container { display: flex; gap: 50px; align-items: center; flex-wrap: wrap; }
        .hero-text { flex: 1; min-width: 300px; }
        .hero-h1 { font-size: 3rem; margin-bottom: 1rem; }
        .hero-h2 { font-size: 1.5rem; margin-bottom: 1rem; color: #666; }
        .hero-p { font-size: 1.2rem; margin-bottom: 2rem; }
        .hero-cta, .section-cta-group { display: flex; gap: 1rem; flex-wrap: wrap; }
        .cta-primary, .cta-button { background: #00a676; color: white; padding: 1rem 2rem; text-decoration: none; border-radius: 5px; }
        .cta-secondary { background: transparent; color: #00a676; border: 2px solid #00a676; }
        .hero-image img { max-width: 100%; height: auto; }
        .benefits-list { list-style: none; padding: 0; max-width: 600px; margin: 2rem auto; }
        .benefits-list li { padding: 1rem; background: #f8f9fa; margin-bottom: 1rem; border-radius: 5px; }
        .services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; }
        .service-card { text-align: center; padding: 2rem; border: 1px solid #ddd; border-radius: 10px; }
        .service-icon { font-size: 3rem; margin-bottom: 1rem; }
        .faq-list { max-width: 800px; margin: 0 auto; }
        .faq-item { border: 1px solid #ddd; margin-bottom: 1rem; border-radius: 5px; overflow: hidden; }
        .faq-question { padding: 1rem; cursor: pointer; background: #f8f9fa; font-weight: bold; }
        .faq-item.active .faq-answer { padding: 1rem; }
        .nimbus-nav { background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); position: sticky; top: 0; z-index: 100; }
        .install-banner { background: linear-gradient(135deg, #00a676, #007a55); color: white; padding: 1rem 0; text-align: center; }
        .banner-scroller { overflow: hidden; }
        /* Add more styles as needed to match */
        @media (max-width: 768px) { .hero-container { flex-direction: column; text-align: center; } .hero-h1 { font-size: 2rem; } }
      `}</style>
    </>
  );
};

export default GasBoilerServicingScunthorpe;
