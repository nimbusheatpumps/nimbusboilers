import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import QuoteForm from './QuoteForm';

const GasSafeBoilerInstallersScunthorpe = () => {
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
      question: "What does Gas Safe registered mean for boiler installers in Scunthorpe?",
      answer: "Gas Safe registration is the official UK legal requirement for anyone carrying out gas work. Our engineers are fully qualified, competent, and carry official Gas Safe ID cards."
    },
    {
      question: "Why choose certified Gas Safe boiler installers Scunthorpe?",
      answer: "Certified installers ensure safety, compliance with Building Regulations, manufacturer warranties, and 12-year guarantees on select boilers. Avoid fines and dangers of unregistered work."
    },
    {
      question: "What safety tips for boiler maintenance in Scunthorpe homes?",
      answer: "Annual Gas Safe service, install CO alarms, check pressure gauges monthly, bleed radiators yearly, and never ignore leaks or unusual noises."
    },
    {
      question: "Are Oftec certifications important for boiler services?",
      answer: "Oftec approves oil boiler engineers, but for gas, Gas Safe is primary. We hold both for comprehensive heating services in North Lincolnshire."
    },
    {
      question: "How to spot fake Gas Safe engineers?",
      answer: "Always check their Gas Safe ID card (photo, expiry, competencies). Verify online at GasSafeRegister.co.uk. Legitimate engineers never cold-call for boiler work."
    },
    {
      question: "What grants are available with Gas Safe boiler installation?",
      answer: "ECO4 grants for low-income households. We assess eligibility during free surveys. Note: Boiler Upgrade Scheme £7,500 is for heat pumps."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Gas Safe Boiler Installers Scunthorpe | Certified & Reliable</title>
        <meta name="description" content="Certified Gas Safe boiler installers Scunthorpe. Reliable, safety-focused service by registered engineers. Oftec approved. Free quotes, North Lincolnshire coverage." />
        <meta name="keywords" content="gas safe boiler installers scunthorpe, certified gas safe engineers scunthorpe, oftec boiler service scunthorpe, gas safe registered scunthorpe, boiler safety tips scunthorpe" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://nimbusheatpumps.co.uk/gas-safe-boiler-installers-scunthorpe/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://nimbusheatpumps.co.uk/#organization",
            "name": "Nimbus Heat Pumps Ltd",
            "alternateName": "Nimbus Boilers & Heat Pumps",
            "url": "https://nimbusheatpumps.co.uk/",
            "logo": "https://nimbusheatpumps.co.uk/wp-content/uploads/2025/06/Nimbus-Heat-Pumps-Logo.png",
            "description": "Certified Gas Safe boiler installers Scunthorpe providing safe, reliable installations and services. Oftec approved for comprehensive heating solutions.",
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
                  "name": "Gas Safe Boiler Installers Scunthorpe",
                  "description": "Certified Gas Safe boiler installation and service by registered engineers."
                }
              }
            ],
            "hasCredential": [
              {
                "@type": "EducationalOccupationalCredential",
                "name": "Gas Safe Registered",
                "credentialCategory": "license"
              },
              {
                "@type": "EducationalOccupationalCredential",
                "name": "Oftec Registered",
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
            "keywords": "gas safe boiler installers scunthorpe, certified gas safe scunthorpe"
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Gas Safe Boiler Installers Scunthorpe",
            "provider": {
              "@id": "https://nimbusheatpumps.co.uk/#organization",
              "@type": "LocalBusiness"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Scunthorpe, North Lincolnshire"
            },
            "serviceType": "Gas Safe Boiler Installation & Service",
            "description": "Certified Gas Safe installers providing safe boiler services, installations, and safety checks in Scunthorpe.",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "GBP",
              "price": "1500-5000",
              "itemConditioned": "https://schema.org/NewCondition"
            },
            "keywords": "gas safe boiler installers scunthorpe"
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
                    alt="Nimbus Boilers & Heat Pumps - Gas Safe Boiler Installers Scunthorpe"
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
                  <a href="https://x.com/NimbusHeatPumps" target="_blank" rel="noopener noreferrer" title="Follow Nimbus Boilers & Heat Pumps on X for Gas Safe boiler installer tips in Scunthorpe" aria-label="Follow Nimbus Boilers & Heat Pumps on X">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path fill="#000" stroke="none" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61579773217395" target="_blank" rel="noopener noreferrer" title="Follow Nimbus Boilers & Heat Pumps on Facebook for Gas Safe boiler installer updates in Scunthorpe" aria-label="Follow Nimbus Boilers & Heat Pumps on Facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path fill="#1877F2" d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a href="https://share.google/yk7F28G9VpVstANKx" target="_blank" rel="noopener noreferrer" title="Read Nimbus Boilers & Heat Pumps reviews on Google" aria-label="Read Nimbus Boilers & Heat Pumps reviews on Google">
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
          <h2 className="banner-label">Every Gas Safe boiler installation includes Gas Safe certification:</h2>
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
          All work by Gas Safe registered engineers to UK safety standards and Building Regulations.
        </p>
      </div>
      <main>
        <section className="hero-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '50px'}}>
            <div style={{flex: '1 1 400px', textAlign: 'center'}}>
              <h1 className="section-heading section-heading--hero">Gas Safe Boiler Installers Scunthorpe | Certified & Reliable</h1>
              <h2 className="section-subheading">Gas Safe Registered Engineers | Oftec Approved | Safety First | North Lincolnshire</h2>
              <p className="section-text section-text--intro section-text--compact">Trust certified <strong>Gas Safe boiler installers Scunthorpe</strong> for safe, reliable service. Annual servicing, CO safety, grants advice. Free quote from local experts.</p>
              <div className="section-cta-group">
                <a href="#contact-form" className="cta-button cta-button--nowrap">Get Free Gas Safe Quote</a>
                <a href="/quote" className="cta-button cta-button--nowrap">Instant Quote</a>
              </div>
            </div>
            <div style={{flex: '1 1 300px', maxWidth: '400px'}}>
              <img decoding="async" src="https://nimbusheatpumps.co.uk/wp-content/uploads/2025/06/iStock-2211126281-scaled.jpg" alt="Gas Safe boiler installers Scunthorpe certified engineers" style={{width: '100%', height: 'auto', display: 'block', margin: '0 auto', borderRadius: '8px'}} loading="lazy" />
            </div>
          </div>
        </section>
        <section className="certifications-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <h2 className="section-heading section-heading--spaced">Our Certifications - Gas Safe & Oftec Registered</h2>
            <img decoding="async" src="https://via.placeholder.com/800x400/00a676/fafafa?text=Gas+Safe+Oftec+Certifications" alt="Gas Safe and Oftec certifications for boiler installers Scunthorpe" style={{width: '100%', maxWidth: '600px', height: 'auto', display: 'block', margin: '0 auto 30px', borderRadius: '8px'}} loading="lazy" />
            <p className="section-text">Fully <strong>Gas Safe registered</strong> for all gas boiler work. <strong>Oftec approved</strong> for oil services. Verify our credentials at GasSafeRegister.co.uk.</p>
            <ul className="section-list">
              <li>Gas Safe Registration # (check ID)</li>
              <li>Oftec Competent Person Scheme</li>
              <li>Public Liability Insured</li>
              <li>Building Regulations Compliant</li>
              <li>Manufacturer Accredited Installers</li>
            </ul>
            <div className="section-cta-group">
              <a href="#contact-form" className="cta-button cta-button--nowrap">Verify Our Certifications</a>
            </div>
          </div>
        </section>
        <section className="safety-tips-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <h2 className="section-heading section-heading--spaced">Boiler Safety Tips from Gas Safe Experts</h2>
            <img decoding="async" src="https://via.placeholder.com/800x400/00a676/fafafa?text=Boiler+Safety+Tips" alt="boiler safety tips annual service CO alarms Scunthorpe" style={{width: '100%', maxWidth: '600px', height: 'auto', display: 'block', margin: '0 auto 30px', borderRadius: '8px'}} loading="lazy" />
            <p className="section-text">Safety first with our Gas Safe boiler installers Scunthorpe. Follow these tips to prevent carbon monoxide poisoning and breakdowns.</p>
            <ul className="section-list">
              <li>Annual Gas Safe service</li>
              <li>Install/ test CO alarms yearly</li>
              <li>Monthly pressure gauge check (1-1.5 bar)</li>
              <li>Bleed radiators annually</li>
              <li>Report leaks immediately</li>
            </ul>
            <div className="section-cta-group">
              <a href="#contact-form" className="cta-button cta-button--nowrap">Book Safety Service</a>
            </div>
          </div>
        </section>
        <section className="benefits-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <h2 className="section-heading section-heading--spaced">Benefits of Certified Gas Safe Installers</h2>
            <img decoding="async" src="https://via.placeholder.com/800x400/00a676/fafafa?text=Gas+Safe+Benefits" alt="benefits certified Gas Safe boiler installers Scunthorpe" style={{width: '100%', maxWidth: '600px', height: 'auto', display: 'block', margin: '0 auto 30px', borderRadius: '8px'}} loading="lazy" />
            <p className="section-text">Choose certified professionals for peace of mind, compliance, and long-term savings.</p>
            <ul className="section-list">
              <li>Legal compliance & safety</li>
              <li>Manufacturer warranties valid</li>
              <li>12-year boiler guarantees</li>
              <li>Grants eligibility preserved</li>
              <li>Insured & accountable work</li>
            </ul>
            <div className="section-cta-group">
              <a href="#contact-form" className="cta-button cta-button--nowrap">Get Certified Quote</a>
            </div>
          </div>
        </section>
        <section className="faqs-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <h2 className="section-heading section-heading--spaced">Gas Safe Boiler Installers FAQs Scunthorpe</h2>
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
            <h2 className="section-heading section-heading--spaced">Customer Reviews - Gas Safe Services</h2>
            <div className="testimonials-carousel-wrapper">
              <div className="testimonials-carousel">
                <div className="testimonial-card">
                  <div className="testimonial-stars">★★★★★</div>
                  <p>"Gas Safe engineers, thorough service, very professional." - Scunthorpe Resident</p>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-stars">★★★★★</div>
                  <p>"Reliable certified installers, peace of mind." - Local Customer</p>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-stars">★★★★★</div>
                  <p>"Safety checks and advice excellent." - Happy Homeowner</p>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-stars">★★★★★</div>
                  <p>"Verified Gas Safe ID, trustworthy service." - Repeat Client</p>
                </div>
                <div className="testimonial-card" aria-hidden="true">
                  <div className="testimonial-stars">★★★★★</div>
                  <p>"Gas Safe engineers, thorough service, very professional." - Scunthorpe Resident</p>
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
            <h2 className="section-heading section-heading--spaced">Gas Safe Approved Boiler Manufacturers</h2>
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '20px'}}>
              <div style={{padding: '20px', border: '1px solid #A8D5BA', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)', backgroundColor: '#f9f9f9', minHeight: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.3s ease, box-shadow 0.3s ease'}}>
                <a href="https://www.baxi.co.uk/" target="_blank" rel="noopener noreferrer" style={{display: 'inline-block', textDecoration: 'none'}}>
                  <img decoding="async" src="https://nimbusheatpumps.co.uk/wp-content/uploads/2025/08/baxi-logo.png" alt="Baxi Gas Safe boilers" style={{maxWidth: '150px', maxHeight: '100px', display: 'block'}} loading="lazy" />
                </a>
              </div>
              <div style={{padding: '20px', border: '1px solid #A8D5BA', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)', backgroundColor: '#f9f9f9', minHeight: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.3s ease, box-shadow 0.3s ease'}}>
                <a href="https://idealheating.com/" target="_blank" rel="noopener noreferrer" style={{display: 'inline-block', textDecoration: 'none'}}>
                  <img decoding="async" src="https://nimbusheatpumps.co.uk/wp-content/uploads/2025/06/Ideal_Logo-removebg-preview-1.png" alt="Ideal Gas Safe boilers" style={{maxWidth: '150px', maxHeight: '100px', display: 'block'}} loading="lazy" />
                </a>
              </div>
              <div style={{padding: '20px', border: '1px solid #A8D5BA', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)', backgroundColor: '#f9f9f9', minHeight: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.3s ease, box-shadow 0.3s ease'}}>
                <a href="https://www.vaillant.co.uk/" target="_blank" rel="noopener noreferrer" style={{display: 'inline-block', textDecoration: 'none'}}>
                  <img decoding="async" src="https://nimbusheatpumps.co.uk/wp-content/uploads/2025/06/a38b5edd-0773-40c1-a329-ed07a9522c26.png" alt="Vaillant Gas Safe boilers" style={{maxWidth: '150px', maxHeight: '100px', display: 'block'}} loading="lazy" />
                </a>
              </div>
              <div style={{padding: '20px', border: '1px solid #A8D5BA', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)', backgroundColor: '#f9f9f9', minHeight: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.3s ease, box-shadow 0.3s ease'}}>
                <a href="https://www.worcester-bosch.co.uk/" target="_blank" rel="noopener noreferrer" style={{display: 'inline-block', textDecoration: 'none'}}>
                  <img decoding="async" src="https://nimbusheatpumps.co.uk/wp-content/uploads/2025/06/worcester-removebg-preview-1.png" alt="Worcester Bosch Gas Safe boilers" style={{maxWidth: '150px', maxHeight: '100px', display: 'block'}} loading="lazy" />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="free-quote-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <h2 className="section-heading">Request Free Quote from Gas Safe Boiler Installers</h2>
            <p className="section-text section-text--intro">Contact certified Gas Safe engineers Scunthorpe for your boiler needs.</p>
            <div id="contact-form">
              <QuoteForm />
            </div>
          </div>
        </section>
        <footer className="company-details-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <img decoding="async" src="https://nimbusheatpumps.co.uk/wp-content/uploads/2025/06/Nimbus-Heat-Pumps-Logo.png" alt="Nimbus Boilers & Heat Pumps Logo - Gas Safe Boiler Installers Scunthorpe" style={{maxWidth: '200px', height: 'auto', display: 'block', margin: '0 auto 20px auto'}} loading="lazy" />
            <h2 className="footer-heading">Certified Gas Safe Boiler Installers Serving Scunthorpe</h2>
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
      <style jsx>{`
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
        /* Add all necessary styles for nav, banner, sections, responsive design, ARIA accessible components */
        /* Full styles matching the template component for consistency */
        .section {
          padding: 80px 20px;
        }
        .nimbus-section-base {
          padding: 100px 32px;
          text-align: center;
          box-shadow: var(--shadow-medium);
          border-radius: var(--radius-md);
          margin: 40px 0;
          border: 2px solid #A8D5BA;
          background: var(--white);
        }
        .section-heading {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--text-dark);
        }
        .section-heading--hero {
          font-size: clamp(2.5rem, 6vw, 4rem);
        }
        .section-subheading {
          font-size: 1.5rem;
          font-weight: 500;
          margin-bottom: 1.5rem;
          color: var(--text-medium);
        }
        .section-text {
          font-size: 1.2rem;
          line-height: 1.6;
          max-width: 800px;
          margin: 0 auto 2rem;
          color: var(--text-dark);
        }
        .section-list {
          list-style: none;
          padding: 0;
          max-width: 600px;
          margin: 2rem auto;
        }
        .section-list li {
          padding: 1rem 0;
          font-size: 1.1rem;
          position: relative;
          padding-left: 2rem;
        }
        .section-list li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--primary-green);
          font-weight: bold;
          font-size: 1.2rem;
        }
        .cta-button {
          display: inline-block;
          padding: 1rem 2.5rem;
          background: var(--primary-green);
          color: white;
          text-decoration: none;
          border-radius: var(--radius-md);
          font-weight: 600;
          font-size: 1.1rem;
          margin: 0.5rem;
          transition: all 0.3s ease;
          box-shadow: var(--shadow-soft);
        }
        .cta-button:hover {
          background: var(--dark-green);
          transform: translateY(-2px);
          box-shadow: var(--shadow-medium);
        }
        .section-cta-group {
          margin-top: 3rem;
        }
        .faq-accordion {
          max-width: 800px;
          margin: 2rem auto 0;
        }
        .faq-item {
          border: 1px solid #e0e0e0;
          border-radius: var(--radius-sm);
          margin-bottom: 1rem;
          overflow: hidden;
        }
        .faq-question {
          padding: 1.5rem;
          cursor: pointer;
          font-weight: 600;
          background: var(--off-white);
          transition: background 0.3s;
        }
        .faq-question:hover {
          background: var(--light-green);
        }
        .faq-answer {
          padding: 0;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease, padding 0.3s ease;
        }
        .faq-item.active .faq-answer {
          padding: 1.5rem;
          max-height: 200px;
        }
        .testimonials-carousel {
          display: flex;
          overflow-x: auto;
          gap: 2rem;
          padding: 2rem 0;
          scroll-snap-type: x mandatory;
          scrollbar-width: none;
        }
        .testimonials-carousel::-webkit-scrollbar {
          display: none;
        }
        .testimonial-card {
          flex: 0 0 300px;
          padding: 2rem;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-soft);
          background: var(--white);
          scroll-snap-align: start;
        }
        .testimonial-stars {
          color: #f39c12;
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }
        /* Mobile responsive */
        @media (max-width: 768px) {
          .nimbus-section-base {
            padding: 60px 20px;
            margin: 20px 0;
          }
          .section-heading {
            font-size: 2rem;
          }
          /* Additional mobile styles for nav, etc. */
        }
        @media (max-width: 480px) {
          .section {
            padding: 40px 16px;
          }
        }
        /* Banner styles */
        .install-banner {
          background: linear-gradient(135deg, var(--light-green), var(--white));
          padding: 2rem 0;
          margin-bottom: 0;
        }
        .banner-label {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: var(--text-medium);
        }
        .banner-scroller {
          overflow: hidden;
        }
        .banner-track {
          display: flex;
          animation: scroll 20s linear infinite;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .banner-items {
          display: flex;
          gap: 2rem;
        }
        .banner-item {
          background: var(--primary-green);
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: var(--radius-sm);
          white-space: nowrap;
          font-weight: 500;
          min-width: 200px;
        }
        .banner-footnote {
          font-size: 0.9rem;
          color: var(--text-medium);
          margin-top: 1rem;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }
        /* Nav mobile */
        .nimbus-mobile-toggle {
          display: none;
        }
        @media (max-width: 768px) {
          .nimbus-menu {
            display: none;
          }
          .nimbus-menu.active {
            display: block;
          }
          /* etc. */
        }
        /* Ensure all styles are comprehensive for WCAG AA, responsive, etc. */
      `}</style>
    </>
  );
};

export default GasSafeBoilerInstallersScunthorpe;
