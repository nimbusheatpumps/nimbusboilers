import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import QuoteForm from './QuoteForm';

const GasBoilerReplacementScunthorpe = () => {
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
      question: "When should I replace my gas boiler in Scunthorpe?",
      answer: "Consider replacement if your boiler shows signs like leakage, strange noises, rising bills, or is over 10 years old. Our Gas Safe engineers can assess during a free survey."
    },
    {
      question: "What efficiency gains can I expect from a new A-rated boiler?",
      answer: "Modern A-rated condensing boilers achieve 90%+ efficiency compared to 60-70% for older models, potentially saving hundreds on annual heating bills."
    },
    {
      question: "Am I eligible for £7,500 Boiler Upgrade Scheme grants in Scunthorpe?",
      answer: "The Boiler Upgrade Scheme provides £7,500 for heat pump installations replacing fossil fuel boilers. Eligibility based on income, EPC rating, and off-gas properties. We check during survey."
    },
    {
      question: "How long does gas boiler replacement take in Scunthorpe?",
      answer: "Standard combi boiler replacements take 1-2 days. More complex system conversions may take 3 days. Minimal disruption guaranteed."
    },
    {
      question: "What is included in your gas boiler replacement service?",
      answer: "Full replacement includes old boiler removal, new installation, MagnaCleanse flush, Hive thermostat, filters, commissioning, and Gas Safe certification."
    },
    {
      question: "Which boiler brands do you install for replacements in Scunthorpe?",
      answer: "We install premium brands: Worcester Bosch, Vaillant, Baxi, Ideal as accredited Gas Safe installers."
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
    "description": "Expert gas boiler replacement Scunthorpe and North Lincolnshire. Gas Safe engineers providing efficient upgrades, replacements and grant advice.",
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
          "name": "Gas Boiler Replacement Scunthorpe",
          "description": "Professional gas boiler replacements and upgrades in Scunthorpe by Gas Safe engineers."
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
    "priceRange": "££",
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
    "keywords": "gas boiler replacement scunthorpe, boiler upgrade north lincolnshire"
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Gas Boiler Replacement Scunthorpe",
    "provider": {
      "@id": "https://nimbusheatpumps.co.uk/#organization",
      "@type": "LocalBusiness"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Scunthorpe, North Lincolnshire"
    },
    "serviceType": "Gas Boiler Replacement",
    "description": "Gas boiler replacement services including efficiency upgrades and old boiler removal in Scunthorpe. Gas Safe certified.",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "GBP",
      "price": "2000-5000",
      "itemConditioned": "https://schema.org/NewCondition"
    },
    "keywords": "gas boiler replacement scunthorpe, boiler upgrade north lincolnshire"
  };

  return (
    <>
      <Helmet>
        <title>Gas Boiler Replacement Scunthorpe | Expert Local Installers | Nimbus Boilers & Heat Pumps</title>
        <meta name="description" content="Professional gas boiler replacement Scunthorpe by Gas Safe engineers. Upgrade old boilers for efficiency gains (90%+ vs 60%), Boiler Upgrade Scheme grants. Free quote North Lincolnshire." />
        <meta name="keywords" content="gas boiler replacement scunthorpe, boiler upgrade north lincolnshire, boiler replacement scunthorpe, new combi boiler scunthorpe, gas safe replacement scunthorpe, boiler grants scunthorpe" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://nimbusheatpumps.co.uk/gas-boiler-replacement-scunthorpe/" />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
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
              <img decoding="async" src="/images/nimbus-logo.webp"
                    alt="Nimbus Boilers & Heat Pumps - Gas Boiler Replacement Scunthorpe"
                    className="nimbus-logo" loading="lazy" />
            </a>
            <button className={`nimbus-mobile-toggle ${menuActive ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                    aria-expanded={menuActive}
                    aria-controls="nimbusMenu">
              <span></span>
              <span></span>
              <span></span>
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
                  Heat Pump & Boiler Manufacturers <span>▼</span>
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
                  Policies <span>▼</span>
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
              <a href="/quote" className="nimbus-cta nimbus-cta-primary">Gas Boiler Quote</a>
              <a href="#contact-form" className="nimbus-cta nimbus-cta-secondary">Heat Pump Quote</a>
              <a href="mailto:info@nimbusheatpumps.co.uk" className="nimbus-cta nimbus-cta-primary">Email Us</a>
              <a href="tel:01724622069" className="nimbus-cta nimbus-cta-secondary">Call Now</a>
            </div>
          </div>
        </div>
      </nav>
      <div className="install-banner">
        <div className="banner-wrapper">
          <h2 className="banner-label">Every gas boiler replacement includes:</h2>
          <div className="banner-scroller" aria-live="polite">
            <div className="banner-track">
              <div className="banner-items">
                <span className="banner-item">MagnaCleanse chemical flush</span>
                <span className="banner-item">Hive smart thermostat</span>
                <span className="banner-item">Shock arrester</span>
                <span className="banner-item">Scale reducer</span>
                <span className="banner-item">Magnetic filter</span>
              </div>
              <div className="banner-items" aria-hidden="true">
                <span className="banner-item">MagnaCleanse chemical flush</span>
                <span className="banner-item">Hive smart thermostat</span>
                <span className="banner-item">Shock arrester</span>
                <span className="banner-item">Scale reducer</span>
                <span className="banner-item">Magnetic filter</span>
              </div>
            </div>
          </div>
        </div>
        <p className="banner-footnote">
          All work Gas Safe certified to UK safety standards, Building Regulations and manufacturer specifications.
        </p>
      </div>
      <main>
        <section className="hero-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '50px'}}>
            <div style={{flex: '1 1 400px', textAlign: 'center'}}>
              <h1 className="section-heading section-heading--hero">Gas Boiler Replacement Scunthorpe | Upgrade Your Old Boiler</h1>
              <h2 className="section-subheading">Gas Safe Engineers | A-Rated Efficiency Upgrades | North Lincolnshire</h2>
              <p className="section-text section-text--intro section-text--compact">Upgrade your old boiler with professional <strong>gas boiler replacement Scunthorpe</strong>. Gain efficiency (90%+ vs 60%), check <strong>boiler upgrade North Lincolnshire</strong> grants. Free quote from Gas Safe experts.</p>
              <div className="section-cta-group">
                <a href="#contact-form" className="cta-button cta-button--nowrap">Get Free Boiler Replacement Quote</a>
                <a href="/quote" className="cta-button cta-button--nowrap">Instant Quote</a>
              </div>
            </div>
            <div style={{flex: '1 1 300px', maxWidth: '400px'}}>
              <img decoding="async" src="/images/hero-install.webp" alt="gas boiler replacement Scunthorpe by expert Nimbus engineers" style={{width: '100%', height: 'auto', display: 'block', margin: '0 auto', borderRadius: '8px'}} loading="lazy" />
            </div>
          </div>
        </section>
        <section className="our-services-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <h2 className="section-heading section-heading--spaced">Gas Boiler Replacement Services in Scunthorpe</h2>
            <div className="services-grid">
              <div className="service-card">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{margin: '0 auto 20px'}}>
                  <circle cx="12" cy="12" r="12" fill="#00a676"/>
                  <path d="M6 12.5L10 16.5L18 7.5" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 className="card-heading">Combi Boiler Replacements</h3>
                <p className="card-text">Like-for-like swaps for maximum efficiency.</p>
              </div>
              <div className="service-card">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{margin: '0 auto 20px'}}>
                  <circle cx="12" cy="12" r="12" fill="#00a676"/>
                  <path d="M6 12.5L10 16.5L18 7.5" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 className="card-heading">Efficiency Upgrades</h3>
                <p className="card-text">Upgrade to A-rated condensing boilers.</p>
              </div>
              <div className="service-card">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{margin: '0 auto 20px'}}>
                  <circle cx="12" cy="12" r="12" fill="#00a676"/>
                  <path d="M6 12.5L10 16.5L18 7.5" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 className="card-heading">System Boiler Conversions</h3>
                <p className="card-text">Convert regular to combi systems.</p>
              </div>
              <div className="service-card">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{margin: '0 auto 20px'}}>
                  <circle cx="12" cy="12" r="12" fill="#00a676"/>
                  <path d="M6 12.5L10 16.5L18 7.5" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 className="card-heading">Old Boiler Removal</h3>
                <p className="card-text">Safe disposal of existing boilers.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="signs-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <h2 className="section-heading section-heading--spaced">Signs Your Old Boiler Needs Replacing</h2>
            <img decoding="async" src="https://via.placeholder.com/800x400/00a676/fafafa?text=Old+Boiler+Signs+Scunthorpe" alt="signs old boiler needs replacement leakage noises Scunthorpe" style={{width: '100%', maxWidth: '600px', height: 'auto', display: 'block', margin: '0 auto 30px', borderRadius: '8px'}} loading="lazy" />
            <ul className="section-list">
              <li>Water leakage from boiler</li>
              <li>Strange noises or kettling</li>
              <li>Rising energy bills</li>
              <li>Age over 10 years</li>
              <li>Inconsistent heating/hot water</li>
              <li>Frequent breakdowns</li>
            </ul>
            <div className="section-cta-group">
              <a href="#contact-form" className="cta-button cta-button--nowrap">Free Boiler Survey</a>
            </div>
          </div>
        </section>
        <section className="efficiency-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <h2 className="section-heading section-heading--spaced">Efficiency Gains: A-Rated 90%+ vs Old 60%</h2>
            <img decoding="async" src="https://via.placeholder.com/800x400/00a676/fafafa?text=New+Boiler+Efficiency+90%+" alt="efficiency gains new A-rated boiler vs old" style={{width: '100%', maxWidth: '600px', height: 'auto', display: 'block', margin: '0 auto 30px', borderRadius: '8px'}} loading="lazy" />
            <p className="section-text">Replace your inefficient old boiler with an A-rated model for 90%+ efficiency. Save up to 30% on heating bills compared to 60-70% efficient pre-2005 models.</p>
            <div className="section-cta-group">
              <a href="#contact-form" className="cta-button cta-button--nowrap">Upgrade Quote</a>
            </div>
          </div>
        </section>
        <section className="grants-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <h2 className="section-heading section-heading--spaced">£7,500 Boiler Upgrade Scheme Grant Eligibility</h2>
            <img decoding="async" src="https://via.placeholder.com/800x400/00a676/fafafa?text=Boiler+Upgrade+Scheme+Grants" alt="Boiler Upgrade Scheme £7500 grants Scunthorpe eligibility" style={{width: '100%', maxWidth: '600px', height: 'auto', display: 'block', margin: '0 auto 30px', borderRadius: '8px'}} loading="lazy" />
            <p className="section-text">Check eligibility for the £7,500 Boiler Upgrade Scheme when replacing your boiler with a heat pump. Additional ECO4 grants for gas boiler upgrades available.</p>
            <ul className="section-list">
              <li>Low income households</li>
              <li>EPC D-G properties</li>
              <li>Off-gas grid homes</li>
              <li>Free eligibility survey</li>
            </ul>
            <div className="section-cta-group">
              <a href="#contact-form" className="cta-button cta-button--nowrap">Check Eligibility</a>
            </div>
          </div>
        </section>
        <section className="faqs-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <h2 className="section-heading section-heading--spaced">Gas Boiler Replacement FAQs Scunthorpe</h2>
            <div className="faq-accordion">
              {faqData.map((faq, index) => (
                <div key={index} className={`faq-item ${faqActive === index ? 'active' : ''}`}>
                  <h3 className="faq-question" onClick={() => toggleFaq(index)} role="button" tabIndex="0" aria-expanded={faqActive === index} aria-controls={`faq-answer-${index}`}>{faq.question}</h3>
                  <div className="faq-answer" id={`faq-answer-${index}`} role="region" aria-labelledby={`faq-question-${index}`} aria-hidden={faqActive !== index}>{faq.answer}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="testimonials-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <h2 className="section-heading section-heading--spaced">What Our Customers Say About Boiler Replacements</h2>
            <div className="testimonials-carousel-wrapper">
              <div className="testimonials-carousel">
                <div className="testimonial-card">
                  <div className="testimonial-stars">★★★★★</div>
                  <p>"Perfect replacement, much more efficient now. Great service." - Scunthorpe Customer</p>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-stars">★★★★★</div>
                  <p>"Old boiler replaced quickly, bills down already. Highly recommend." - Local Resident</p>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-stars">★★★★★</div>
                  <p>"Professional team, grant advice helpful. New boiler excellent." - Happy Homeowner</p>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-stars">★★★★★</div>
                  <p>"Smooth upgrade process, reliable heating now." - Repeat Client</p>
                </div>
                <div className="testimonial-card" aria-hidden="true">
                  <div className="testimonial-stars">★★★★★</div>
                  <p>"Perfect replacement, much more efficient now. Great service." - Scunthorpe Customer</p>
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
        <section className="manufacturers-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <h2 className="section-heading section-heading--spaced">Trusted Boiler Brands for Replacements in Scunthorpe</h2>
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '20px'}}>
              <div style={{padding: '20px', border: '1px solid #A8D5BA', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)', backgroundColor: '#f9f9f9', minHeight: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.3s ease, box-shadow 0.3s ease'}}>
                <a href="https://www.baxi.co.uk/" target="_blank" rel="noopener noreferrer" style={{display: 'inline-block', textDecoration: 'none'}}>
                  <img decoding="async" src="/images/baxi-logo.webp" alt="Baxi boilers gas boiler replacement Scunthorpe" style={{maxWidth: '150px', maxHeight: '100px', display: 'block'}} loading="lazy" />
                </a>
              </div>
              <div style={{padding: '20px', border: '1px solid #A8D5BA', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)', backgroundColor: '#f9f9f9', minHeight: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.3s ease, box-shadow 0.3s ease'}}>
                <a href="https://idealheating.com/" target="_blank" rel="noopener noreferrer" style={{display: 'inline-block', textDecoration: 'none'}}>
                  <img decoding="async" src="/images/ideal-logo.webp" alt="Ideal boilers gas boiler replacement Scunthorpe" style={{maxWidth: '150px', maxHeight: '100px', display: 'block'}} loading="lazy" />
                </a>
              </div>
              <div style={{padding: '20px', border: '1px solid #A8D5BA', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)', backgroundColor: '#f9f9f9', minHeight: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.3s ease, box-shadow 0.3s ease'}}>
                <a href="https://www.vaillant.co.uk/" target="_blank" rel="noopener noreferrer" style={{display: 'inline-block', textDecoration: 'none'}}>
                  <img decoding="async" src="/images/vaillant-logo.webp" alt="Vaillant boilers gas boiler replacement Scunthorpe" style={{maxWidth: '150px', maxHeight: '100px', display: 'block'}} loading="lazy" />
                </a>
              </div>
              <div style={{padding: '20px', border: '1px solid #A8D5BA', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)', backgroundColor: '#f9f9f9', minHeight: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.3s ease, box-shadow 0.3s ease'}}>
                <a href="https://www.worcester-bosch.co.uk/" target="_blank" rel="noopener noreferrer" style={{display: 'inline-block', textDecoration: 'none'}}>
                  <img decoding="async" src="/images/worcester-logo.webp" alt="Worcester Bosch boilers gas boiler replacement Scunthorpe" style={{maxWidth: '150px', maxHeight: '100px', display: 'block'}} loading="lazy" />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="free-quote-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <h2 className="section-heading">Request Your Free Gas Boiler Replacement Quote</h2>
            <p className="section-text section-text--intro">Get personalized pricing for your boiler upgrade in Scunthorpe today.</p>
            <div id="contact-form">
              <QuoteForm />
            </div>
          </div>
        </section>
        <footer className="company-details-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <img decoding="async" src="/images/nimbus-logo.webp" alt="Nimbus Boilers & Heat Pumps Logo - Gas Boiler Replacement Scunthorpe" style={{maxWidth: '200px', height: 'auto', display: 'block', margin: '0 auto 20px auto'}} loading="lazy" />
            <h2 className="footer-heading">Your Trusted Gas Boiler Replacement Partner in Scunthorpe</h2>
            <p className="section-text">Nimbus Heat Pumps Ltd (trading as Nimbus Boilers & Heat Pumps)<br />Company Number: 16497314<br />Registered Office: Lytchett House, 13 Freeland Park, Wareham Road, Poole, Dorset, BH16 6FA<br />Email: info@nimbusheatpumps.co.uk<br />Telephone: 01724 622069</p>
            <div className="section-cta-group section-cta-group--spaced">
              <a href="https://nimbusheatpumps.co.uk/policies/privacy-policy/" target="_blank" rel="noopener noreferrer" className="cta-button">Privacy Policy</a>
              <a href="https://nimbusheatpumps.co.uk/policies/terms-and-conditions/" target="_blank" rel="noopener noreferrer" className="cta-button">Terms & Conditions</a>
              <a href="https://nimbusheatpumps.co.uk/policies/cookies-policy/" target="_blank" rel="noopener noreferrer" className="cta-button">Cookies Policy</a>
            </div>
            <p className="section-text section-text--small">&copy; Nimbus Heat Pumps Ltd. All rights reserved.</p>
          </div>
        </footer>
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
          --glass-dark: rgba(255, 255, 255, 0.1);
          --shadow-soft: 0 2px 8px rgba(0, 0, 0, 0.04);
          --shadow-medium: 0 4px 16px rgba(0, 0, 0, 0.06);
          --shadow-large: 0 8px 32px rgba(0, 0, 0, 0.08);
          --shadow-glow: 0 0 40px rgba(0, 166, 118, 0.15);
          --radius-sm: 10px;
          --radius-md: 14px;
          --radius-lg: 18px;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
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
        }
        .nimbus-nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 0;
        }
        .nimbus-logo {
          height: 40px;
        }
        .nimbus-mobile-toggle {
          display: none;
          flex-direction: column;
          gap: 4px;
          background: none;
          border: none;
          cursor: pointer;
        }
        .nimbus-mobile-toggle span {
          width: 25px;
          height: 3px;
          background: var(--text-dark);
          transition: 0.3s;
        }
        .nimbus-mobile-toggle.active span:nth-child(1) {
          transform: rotate(45deg) translate(6px, 6px);
        }
        .nimbus-mobile-toggle.active span:nth-child(2) {
          opacity: 0;
        }
        .nimbus-mobile-toggle.active span:nth-child(3) {
          transform: rotate(-45deg) translate(6px, -5px);
        }
        .nimbus-menu {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
          gap: 2rem;
          align-items: center;
        }
        .nimbus-menu-item {
          position: relative;
        }
        .nimbus-link {
          text-decoration: none;
          color: var(--text-dark);
          font-weight: 500;
          transition: color 0.3s;
        }
        .nimbus-link:hover {
          color: var(--primary-green);
        }
        .nimbus-has-dropdown ul {
          position: absolute;
          top: 100%;
          left: 0;
          background: var(--white);
          box-shadow: var(--shadow-large);
          border-radius: var(--radius-md);
          list-style: none;
          padding: 1rem 0;
          min-width: 250px;
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px);
          transition: all 0.3s;
        }
        .nimbus-has-dropdown.dropdown-active ul {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
        .nimbus-dropdown-item {
          padding: 0;
        }
        .nimbus-dropdown-link {
          display: block;
          padding: 0.75rem 1.5rem;
          color: var(--text-dark);
          text-decoration: none;
          transition: background 0.3s;
        }
        .nimbus-dropdown-link:hover {
          background: var(--light-green);
        }
        .nimbus-social {
          display: flex;
          gap: 0.5rem;
        }
        .nimbus-social a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: var(--radius-sm);
          transition: transform 0.3s;
        }
        .nimbus-social a:hover {
          transform: translateY(-2px);
        }
        .nimbus-cta-container {
          display: none;
        }
        @media (min-width: 1024px) {
          .nimbus-mobile-toggle {
            display: none;
          }
          .nimbus-cta-container {
            display: block;
          }
          .nimbus-cta-row {
            display: flex;
            gap: 1rem;
          }
          .nimbus-cta {
            padding: 0.75rem 1.5rem;
            border-radius: var(--radius-md);
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s;
            font-size: 0.875rem;
          }
          .nimbus-cta-primary {
            background: var(--primary-green);
            color: var(--white);
          }
          .nimbus-cta-primary:hover {
            background: var(--dark-green);
            transform: translateY(-2px);
          }
          .nimbus-cta-secondary {
            background: transparent;
            color: var(--primary-green);
            border: 2px solid var(--primary-green);
          }
          .nimbus-cta-secondary:hover {
            background: var(--primary-green);
            color: var(--white);
          }
        }
        @media (max-width: 1023px) {
          .nimbus-menu {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background: var(--white);
            flex-direction: column;
            justify-content: center;
            gap: 2rem;
            padding: 5rem 32px;
            transform: translateX(100%);
            transition: transform 0.3s;
          }
          .nimbus-menu.active {
            transform: translateX(0);
          }
          .nimbus-mobile-toggle {
            display: flex;
          }
          .nimbus-has-dropdown ul {
            position: static;
            opacity: 1;
            visibility: visible;
            transform: none;
            box-shadow: none;
            padding-left: 2rem;
          }
        }
        .install-banner {
          background: linear-gradient(135deg, var(--light-green), var(--off-white));
          padding: 2rem 32px;
          text-align: center;
        }
        .banner-label {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: var(--dark-green);
        }
        .banner-scroller {
          overflow: hidden;
        }
        .banner-track {
          display: flex;
        }
        .banner-items {
          display: flex;
          gap: 2rem;
        }
        .banner-item {
          font-weight: 500;
          color: var(--text-dark);
          white-space: nowrap;
          padding: 0.5rem 1rem;
          background: var(--white);
          border-radius: var(--radius-sm);
          box-shadow: var(--shadow-soft);
          animation: scroll 30s linear infinite;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .banner-footnote {
          margin-top: 1rem;
          font-size: 0.875rem;
          color: var(--text-medium);
          font-style: italic;
        }
        .nimbus-section-base {
          padding: 100px 32px;
          text-align: center;
          max-width: 1400px;
          margin: 40px auto;
          border: 2px solid #A8D5BA;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }
        .section-heading {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--text-dark);
          line-height: 1.1;
        }
        .section-heading--hero {
          font-size: clamp(2.5rem, 6vw, 4rem);
        }
        .section-heading--spaced {
          margin-bottom: 2rem;
        }
        .section-subheading {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--primary-green);
          margin-bottom: 1.5rem;
        }
        .section-text {
          font-size: 1.125rem;
          line-height: 1.6;
          max-width: 600px;
          margin: 0 auto 2rem;
          color: var(--text-dark);
        }
        .section-text--intro {
          font-size: 1.25rem;
        }
        .section-text--compact {
          line-height: 1.5;
        }
        .section-list {
          list-style: none;
          padding: 0;
          max-width: 600px;
          margin: 2rem auto;
        }
        .section-list li {
          padding: 1rem;
          background: var(--off-white);
          margin-bottom: 1rem;
          border-radius: var(--radius-sm);
          border-left: 4px solid var(--primary-green);
          text-align: left;
        }
        .section-cta-group {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          justify-content: center;
          margin-top: 2rem;
        }
        .cta-button {
          padding: 1rem 2rem;
          background: var(--primary-green);
          color: var(--white);
          text-decoration: none;
          font-weight: 600;
          border-radius: var(--radius-md);
          transition: all 0.3s;
          font-size: 1rem;
        }
        .cta-button:hover {
          background: var(--dark-green);
          transform: translateY(-3px);
          box-shadow: var(--shadow-glow);
        }
        .cta-button--nowrap {
          white-space: nowrap;
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }
        .service-card {
          padding: 2rem;
          border: 2px solid #A8D5BA;
          border-radius: var(--radius-lg);
          transition: all 0.3s;
          background: var(--white);
        }
        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-large);
        }
        .card-heading {
          font-size: 1.5rem;
          font-weight: 600;
          margin: 1rem 0;
          color: var(--text-dark);
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
          border: 2px solid #A8D5BA;
          border-radius: var(--radius-md);
          margin-bottom: 1rem;
          overflow: hidden;
        }
        .faq-question {
          padding: 1.5rem;
          background: var(--off-white);
          cursor: pointer;
          font-weight: 600;
          font-size: 1.125rem;
          margin: 0;
          transition: background 0.3s;
        }
        .faq-question:hover {
          background: var(--light-green);
        }
        .faq-answer {
          padding: 0;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s, padding 0.3s;
        }
        .faq-item.active .faq-answer {
          padding: 1.5rem;
          max-height: 200px;
        }
        .testimonials-carousel-wrapper {
          overflow: hidden;
          margin: 3rem 0;
        }
        .testimonials-carousel {
          display: flex;
          gap: 2rem;
          animation: scroll 40s linear infinite;
        }
        .testimonial-card {
          flex: 0 0 300px;
          padding: 2rem;
          background: var(--white);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-medium);
          border: 2px solid #A8D5BA;
        }
        .testimonial-stars {
          color: #f39c12;
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }
        .footer-heading {
          font-size: 2rem;
          margin-bottom: 1rem;
        }
        .section-text--small {
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .section-cta-group--spaced {
          gap: 2rem;
        }
        @media (max-width: 768px) {
          .nimbus-section-base {
            padding: 60px 20px;
            margin: 20px 0;
          }
          .services-grid {
            grid-template-columns: 1fr;
          }
          .section-cta-group {
            flex-direction: column;
            align-items: center;
          }
          .cta-button {
            width: 100%;
            max-width: 300px;
          }
          .banner-items {
            gap: 1rem;
          }
          .banner-item {
            font-size: 0.875rem;
            padding: 0.5rem;
          }
        }
        /* Additional Tailwind-like utilities if needed */
        * {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          line-height: 1.6;
        }
      `}</style>
    </>
  );
};

export default GasBoilerReplacementScunthorpe;
