import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import QuoteForm from './QuoteForm';

const BoilerRepairScunthorpe = () => {
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
      question: "How much does boiler repair cost in Scunthorpe?",
      answer: "Boiler repair costs in Scunthorpe vary depending on the issue, typically ranging from £50 to £500 for common repairs like thermostat replacement or pump fixes. Emergency call-outs may incur additional fees."
    },
    {
      question: "What are common boiler problems in Scunthorpe homes?",
      answer: "Common issues include no hot water, low pressure, strange noises, and pilot light problems. Our Gas Safe engineers diagnose and fix these quickly to restore heating."
    },
    {
      question: "How long does boiler repair take in Scunthorpe?",
      answer: "Most boiler repairs in Scunthorpe are completed within 1-2 hours, though complex issues may take longer. We aim for same-day service for urgent repairs."
    },
    {
      question: "Do you offer emergency boiler repair in Scunthorpe?",
      answer: "Yes, we provide 24/7 emergency boiler repair services in Scunthorpe and North Lincolnshire for breakdowns during cold weather."
    },
    {
      question: "Is boiler installation included with repair services in Scunthorpe?",
      answer: "While we specialize in repairs, we also offer full boiler installation services in Scunthorpe, including upgrades to energy-efficient models."
    },
    {
      question: "What warranties do you offer on boiler repairs in Scunthorpe?",
      answer: "We provide a 12-month warranty on all boiler repair work in Scunthorpe, ensuring peace of mind for our customers."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Boiler Repair Scunthorpe | Gas Boiler Service North Lincolnshire | Nimbus Boilers & Heat Pumps</title>
        <meta name="description" content="Expert boiler repair Scunthorpe services by Gas Safe registered engineers. Fast emergency repairs, installations and servicing in Scunthorpe, Grimsby, Doncaster, Lincoln." />
        <meta name="keywords" content="boiler repair Scunthorpe, boiler installation Scunthorpe, gas boiler service Scunthorpe, emergency boiler repair North Lincolnshire" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://nimbusheatpumps.co.uk/boiler-repair-scunthorpe/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://nimbusheatpumps.co.uk/#organization",
            "name": "Nimbus Heat Pumps Ltd",
            "alternateName": "Nimbus Boilers & Heat Pumps",
            "url": "https://nimbusheatpumps.co.uk/",
            "logo": "https://nimbusheatpumps.co.uk/wp-content/uploads/2025/06/Nimbus-Heat-Pumps-Logo.png",
            "description": "Gas Safe registered boiler repair and installation services in Scunthorpe and North Lincolnshire. Emergency repairs, servicing and energy-efficient upgrades.",
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
              },
              {
                "@type": "City",
                "name": "Grimsby"
              },
              {
                "@type": "City",
                "name": "Doncaster"
              },
              {
                "@type": "City",
                "name": "Lincoln"
              }
            ],
            "makesOffer": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Boiler Repair Scunthorpe",
                  "description": "Emergency and routine boiler repair services in Scunthorpe by Gas Safe engineers."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Boiler Installation Scunthorpe",
                  "description": "Professional boiler installation in Scunthorpe with energy-efficient models."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Gas Boiler Service Scunthorpe",
                  "description": "Annual servicing for gas boilers in Scunthorpe to ensure safety and efficiency."
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
            ]
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
      {/* Navigation */}
      <nav className="nimbus-nav" aria-label="Main navigation">
        <div className="nimbus-nav-container">
          <div className="nimbus-nav-inner">
            <a href="/" className="nimbus-logo-link" aria-label="Nimbus Boilers & Heat Pumps - Home">
              <img decoding="async" src="https://nimbusheatpumps.co.uk/wp-content/uploads/2025/06/Nimbus-Heat-Pumps-Logo.png"
                    alt="Nimbus Boilers & Heat Pumps - Gas Boiler Repair and Installation in Scunthorpe"
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
                  <a href="https://x.com/NimbusHeatPumps" target="_blank" rel="noopener noreferrer" title="Follow Nimbus Boilers & Heat Pumps on X for gas boiler tips in Scunthorpe" aria-label="Follow Nimbus Boilers & Heat Pumps on X">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path fill="#000" stroke="none" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61579773217395" target="_blank" rel="noopener noreferrer" title="Follow Nimbus Boilers & Heat Pumps on Facebook for boiler repair updates in Scunthorpe" aria-label="Follow Nimbus Boilers & Heat Pumps on Facebook">
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
              <a href="https://nimbusheatpumps.co.uk/gas-boiler-installation-scunthorpe/" className="nimbus-cta nimbus-cta-primary">Gas Boiler Quote</a>
              <a href="#contact-form" className="nimbus-cta nimbus-cta-secondary">Heat Pump Quote</a>
              <a href="mailto:info@nimbusheatpumps.co.uk" className="nimbus-cta nimbus-cta-primary">Email Us</a>
              <a href="tel:01724622069" className="nimbus-cta nimbus-cta-secondary">Call Now</a>
            </div>
          </div>
        </div>
      </nav>
      {/* Install Banner */}
      <div className="install-banner">
        <div className="banner-wrapper">
          <h2 className="banner-label">Every installation includes:</h2>
          <div className="banner-scroller" aria-live="polite">
            <div className="banner-track">
              <div className="banner-items">
                <span className="banner-item">MagnaCleanse chemical flush</span>
                <span className="banner-item">Hive smart thermostat</span>
                <span className="banner-item">Shock arrester</span>
                <span className="banner-item">Cold water scale reducer</span>
                <span className="banner-item">Central heating magnetic filter</span>
              </div>
              <div className="banner-items" aria-hidden="true">
                <span className="banner-item">MagnaCleanse chemical flush</span>
                <span className="banner-item">Hive smart thermostat</span>
                <span className="banner-item">Shock arrester</span>
                <span className="banner-item">Cold water scale reducer</span>
                <span className="banner-item">Central heating magnetic filter</span>
              </div>
            </div>
          </div>
        </div>
        <p className="banner-footnote">
          All work is completed to the relevant British Standards, Building Regulations and Gas Safe Regulations.
        </p>
      </div>
      {/* Main Content */}
      <main role="main" aria-label="Main content">
        {/* Hero Section */}
        <section className="hero-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '50px'}}>
            <div style={{flex: '1 1 400px', textAlign: 'center'}}>
              <h1 className="section-heading section-heading--hero">Gas Boiler Repair Scunthorpe | 24/7 Emergency Repairs</h1>
              <h2 className="section-subheading">Gas Safe Registered Engineers | Emergency Boiler Repairs and Services Scunthorpe, Grimsby, Doncaster, Lincoln & North Lincolnshire</h2>
              <p className="section-text section-text--intro section-text--compact">Specialising in boiler repair Scunthorpe services including emergency fixes, installations and annual servicing. Our Gas Safe registered team provides fast, reliable heating solutions for homes in Scunthorpe and surrounding areas. Get your free quote today.</p>
              <div className="section-cta-group">
                <a href="#contact-form" className="cta-button cta-button--nowrap">Get a Free Boiler Repair Quote in Scunthorpe</a>
                <a href="https://nimbusheatpumps.co.uk/gas-boiler-installation-scunthorpe/" className="cta-button cta-button--nowrap">Gas Boiler Installation Scunthorpe</a>
              </div>
            </div>
            <div style={{flex: '1 1 300px', maxWidth: '400px'}}>
              <img decoding="async" src="https://nimbusheatpumps.co.uk/wp-content/uploads/2025/06/iStock-2211126281-scaled.jpg" alt="Gas boiler repair service in Scunthorpe by Nimbus Boilers & Heat Pumps" style={{width: '100%', height: 'auto', display: 'block', margin: '0 auto', borderRadius: '8px'}} loading="lazy" />
            </div>
          </div>
        </section>
        {/* Services Section */}
        <section className="our-services-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <h2 className="section-heading section-heading--spaced">Boiler Repair and Installation Services in Scunthorpe</h2>
            <div className="services-grid">
              <div className="service-card">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{margin: '0 auto 20px'}}>
                  <circle cx="12" cy="12" r="12" fill="#00a676"/>
                  <path d="M6 12.5L10 16.5L18 7.5" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 className="card-heading">Emergency Boiler Repair Scunthorpe</h3>
                <p className="card-text">24/7 emergency boiler repair services in Scunthorpe for breakdowns and heating failures.</p>
              </div>
              <div className="service-card">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{margin: '0 auto 20px'}}>
                  <circle cx="12" cy="12" r="12" fill="#00a676"/>
                  <path d="M6 12.5L10 16.5L18 7.5" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 className="card-heading">Gas Boiler Service Scunthorpe</h3>
                <p className="card-text">Annual servicing and maintenance for gas boilers in Scunthorpe to ensure efficiency and safety.</p>
              </div>
              <div className="service-card">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{margin: '0 auto 20px'}}>
                  <circle cx="12" cy="12" r="12" fill="#00a676"/>
                  <path d="M6 12.5L10 16.5L18 7.5" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 className="card-heading">Boiler Installation Scunthorpe</h3>
                <p className="card-text">Professional boiler installation in Scunthorpe with modern, energy-efficient models.</p>
              </div>
              <div className="service-card">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{margin: '0 auto 20px'}}>
                  <circle cx="12" cy="12" r="12" fill="#00a676"/>
                  <path d="M6 12.5L10 16.5L18 7.5" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 className="card-heading">Gas Safety Certificates Scunthorpe</h3>
                <p className="card-text">Gas safety certificate issuance following inspections and repairs in Scunthorpe.</p>
              </div>
            </div>
          </div>
        </section>
        {/* Expert Boiler Repair Section */}
        <section className="expert-repair-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <h2 className="section-heading section-heading--spaced">Expert Boiler Repair in Scunthorpe</h2>
            <p className="section-text">At Nimbus Boilers & Heat Pumps, we deliver top-tier <strong>boiler repair in Scunthorpe</strong> and throughout <strong>boiler repair North Lincolnshire</strong>. Our fully Gas Safe registered engineers are on call 24/7, ready to tackle any boiler emergency with speed and precision. From minor leaks and pressure issues to major component failures, we restore your heating system swiftly, keeping your family comfortable.</p>
            <p className="section-text">With years of experience serving Scunthorpe homes, we prioritize reliability, transparency, and customer satisfaction in every job. Our diagnostic approach ensures accurate fixes without unnecessary upsells.</p>
            <h3 className="card-heading" style={{textAlign: 'center', marginBottom: '20px', fontSize: '22px'}}>Why Choose Nimbus for Your Boiler Repair?</h3>
            <ul className="section-list">
              <li><strong>Gas Safe Certified:</strong> All work complies with the highest UK safety standards.</li>
              <li><strong>24/7 Availability:</strong> Emergency <strong>boiler repair North Lincolnshire</strong> any time.</li>
              <li><strong>Fixed Pricing:</strong> Transparent quotes, no hidden charges.</li>
              <li><strong>12-Month Guarantee:</strong> On parts and labour for peace of mind.</li>
              <li><strong>Rapid Response:</strong> Same-day service for most Scunthorpe callouts.</li>
            </ul>
            <div className="section-cta-group">
              <a href="#contact-form" className="cta-button cta-button--nowrap">Schedule Your Boiler Repair</a>
            </div>
          </div>
        </section>
        {/* Gas Boiler Service & Installation Section */}
        <section className="gas-service-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <h2 className="section-heading section-heading--spaced">Gas Boiler Service North Lincolnshire</h2>
            <p className="section-text">Keep your boiler safe and efficient with our expert <strong>gas boiler service Scunthorpe</strong> covering all of North Lincolnshire. Our annual servicing includes detailed inspections, flue gas analysis, cleaning, and adjustments to optimise performance and safety.</p>
            <p className="section-text">Planning an upgrade? Nimbus offers <strong>fixed price boiler installation Scunthorpe</strong>, installing modern A-rated condensing boilers with smart Hive thermostats, MagnaCleanse chemical flushes, magnetic filters, shock arresters, and scale reducers included as standard.</p>
            <h3 className="card-heading" style={{textAlign: 'center', marginBottom: '20px', fontSize: '22px'}}>Benefits of Professional Boiler Servicing & Installation:</h3>
            <ul className="section-list">
              <li>Boosted efficiency to cut energy bills and carbon emissions</li>
              <li>Early fault detection prevents breakdowns and high repair costs</li>
              <li>Gas Safe certification for landlord compliance</li>
              <li>Extended boiler lifespan through proper maintenance</li>
              <li>Complete system protection during <strong>boiler installation Scunthorpe</strong></li>
            </ul>
            <div className="section-cta-group">
              <a href="#contact-form" className="cta-button cta-button--nowrap">Book Gas Boiler Service Today</a>
            </div>
          </div>
        </section>
        {/* FAQs Section */}
        <section className="faqs-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <h2 className="section-heading section-heading--spaced">Boiler Repair FAQs in Scunthorpe</h2>
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
        {/* Testimonials Section */}
        <section className="testimonials-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <h2 className="section-heading section-heading--spaced">What Our Customers Say</h2>
            <div className="testimonials-carousel-wrapper">
              <div className="testimonials-carousel">
                <div className="testimonial-card">
                  <div className="testimonial-stars">★★★★★</div>
                  <p style={{whiteSpace: 'normal'}}>"Brilliant bloke. Always explains everything. Tries to save us money, genuine and caring. Definitely looks after us. Would highly recommend. Top service." - Sharon Rhodes, Scunthorpe (Facebook Post Comment)</p>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-stars">★★★★★</div>
                  <p style={{whiteSpace: 'normal'}}>"Thanks Brian for your help, it was amazing how you sorted all out while we were away. I love that you polish the copper pipes when you finish. Jaja" - Manuel (Google Review)</p>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-stars">★★★★★</div>
                  <p style={{whiteSpace: 'normal'}}>"Can't thank Brian enough he really goes above and beyond. Would recommend everytime ." - Audrey Lal (Google Review)</p>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-stars">★★★★★</div>
                  <p style={{whiteSpace: 'normal'}}>"Excellent service with work carried out would defo use again" - Dean Bonner (Google Review)</p>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-stars">★★★★★</div>
                  <p style={{whiteSpace: 'normal'}}>"Brilliant bloke. Always explains everything. Tries to save us money, genuine and caring. Definitely looks after us. Would highly recommend. Top service." - Sharon Rhodes (Facebook Post Comment)</p>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-stars">★★★★★</div>
                  <p style={{whiteSpace: 'normal'}}>"Thanks Brian for your help, it was amazing how you sorted all out while we were away. I love that you polish the copper pipes when you finish. Jaja" - Manuel (Google Review)</p>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-stars">★★★★★</div>
                  <p style={{whiteSpace: 'normal'}}>"Can't thank Brian enough he really goes above and beyond. Would recommend everytime ." - Audrey Lal (Google Review)</p>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-stars">★★★★★</div>
                  <p style={{whiteSpace: 'normal'}}>"Excellent service with work carried out would defo use again" - Dean Bonner (Google Review)</p>
                </div>
              </div>
            </div>
            <div className="section-cta-group section-cta-group--spaced" style={{marginTop: '10px'}}>
              <a href="https://share.google/yk7F28G9VpVstANKx" target="_blank" rel="noopener noreferrer" className="cta-button cta-button--nowrap" aria-label="Read all Nimbus Boilers & Heat Pumps reviews on Google">
                Read all Google reviews
              </a>
            </div>
          </div>
        </section>
        {/* Manufacturers Section */}
        <section className="manufacturers-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <h2 className="section-heading section-heading--spaced">Our Trusted Boiler Manufacturers in Scunthorpe</h2>
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '20px'}}>
              <div style={{padding: '20px', border: '1px solid #A8D5BA', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)', backgroundColor: '#f9f9f9', minHeight: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.3s ease, box-shadow 0.3s ease'}}>
                <a href="https://www.baxi.co.uk/" target="_blank" rel="noopener noreferrer" style={{display: 'inline-block', textDecoration: 'none'}}>
                  <img decoding="async" src="https://nimbusheatpumps.co.uk/wp-content/uploads/2025/08/baxi-logo.png" alt="Baxi boilers logo - Nimbus Boilers & Heat Pumps in Scunthorpe" style={{maxWidth: '150px', maxHeight: '100px', display: 'block'}} loading="lazy" />
                </a>
              </div>
              <div style={{padding: '20px', border: '1px solid #A8D5BA', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)', backgroundColor: '#f9f9f9', minHeight: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.3s ease, box-shadow 0.3s ease'}}>
                <a href="https://idealheating.com/" target="_blank" rel="noopener noreferrer" style={{display: 'inline-block', textDecoration: 'none'}}>
                  <img decoding="async" src="https://nimbusheatpumps.co.uk/wp-content/uploads/2025/06/Ideal_Logo-removebg-preview-1.png" alt="Ideal boilers logo - Nimbus Boilers & Heat Pumps in Scunthorpe" style={{maxWidth: '150px', maxHeight: '100px', display: 'block'}} loading="lazy" />
                </a>
              </div>
              <div style={{padding: '20px', border: '1px solid #A8D5BA', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)', backgroundColor: '#f9f9f9', minHeight: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.3s ease, box-shadow 0.3s ease'}}>
                <a href="https://www.vaillant.co.uk/" target="_blank" rel="noopener noreferrer" style={{display: 'inline-block', textDecoration: 'none'}}>
                  <img decoding="async" src="https://nimbusheatpumps.co.uk/wp-content/uploads/2025/06/a38b5edd-0773-40c1-a329-ed07a9522c26.png" alt="Vaillant boilers logo - Nimbus Boilers & Heat Pumps in Scunthorpe" style={{maxWidth: '150px', maxHeight: '100px', display: 'block'}} loading="lazy" />
                </a>
              </div>
              <div style={{padding: '20px', border: '1px solid #A8D5BA', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)', backgroundColor: '#f9f9f9', minHeight: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.3s ease, box-shadow 0.3s ease'}}>
                <a href="https://www.worcester-bosch.co.uk/" target="_blank" rel="noopener noreferrer" style={{display: 'inline-block', textDecoration: 'none'}}>
                  <img decoding="async" src="https://nimbusheatpumps.co.uk/wp-content/uploads/2025/06/worcester-removebg-preview-1.png" alt="Worcester Bosch boilers logo - Nimbus Boilers & Heat Pumps in Scunthorpe" style={{maxWidth: '150px', maxHeight: '100px', display: 'block'}} loading="lazy" />
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Free Quote Section */}
        <section className="free-quote-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <h2 className="section-heading">Request Your Free Boiler Repair Quote in Scunthorpe</h2>
            <p className="section-text section-text--intro">Get a no-obligation quote for boiler repair, installation or servicing in Scunthorpe. Our Gas Safe registered engineers will assess your needs and provide fast, reliable solutions.</p>
            <div id="contact-form">
              <QuoteForm />
            </div>
          </div>
        </section>
        {/* Company Details Section */}
        <footer className="company-details-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <img decoding="async" src="https://nimbusheatpumps.co.uk/wp-content/uploads/2025/06/Nimbus-Heat-Pumps-Logo.png" alt="Nimbus Boilers & Heat Pumps Logo - Boiler Repair Services in Scunthorpe" style={{maxWidth: '200px', height: 'auto', display: 'block', margin: '0 auto 20px auto'}} loading="lazy" />
            <h2 className="footer-heading">Your Trusted Partner for Boiler Repair and Installation in Scunthorpe</h2>
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
      {/* Styles */}
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
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          margin: 0;
          padding: 0;
          line-height: 1.6;
          color: var(--dark-green);
          background-color: var(--off-white);
        }
        body * {
          color: var(--dark-green) !important;
          font-family: inherit !important;
        }
        body ::placeholder {
          color: var(--dark-green) !important;
          font-family: inherit !important;
        }
        h1, h2, h3, h4, h5, h6 {
          font-weight: 700 !important;
        }
        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 32px;
        }
        @media (max-width: 768px) {
          .container {
            padding: 0 20px;
          }
        }
        .nimbus-section-base {
          padding: 100px 32px;
          text-align: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          border-radius: 8px;
          margin: 40px 0;
          font-family: 'Inter', sans-serif;
          border: 2px solid #A8D5BA;
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          justify-content: center;
        }
        .service-card {
          padding: 30px;
          background-color: transparent;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 166, 118, 0.1);
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 16px rgba(0, 166, 118, 0.15);
        }
        .testimonials-carousel-wrapper {
          overflow: hidden;
          position: relative;
        }
        .testimonials-carousel {
          display: flex;
          gap: 20px;
          animation: carousel 20s linear infinite;
        }
        .testimonial-card {
          flex: 0 0 300px;
          padding: 20px;
          background: var(--light-green);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-soft);
          white-space: normal;
          word-break: break-word;
          position: relative;
          transition: transform 0.3s ease;
        }
        .testimonial-card:hover {
          transform: scale(1.05);
        }
        .testimonial-card::before {
          content: '"';
          font-size: 40px;
          color: var(--primary-green);
          position: absolute;
          top: 10px;
          left: 15px;
          transition: color 0.3s ease;
        }
        .testimonial-card:hover::before {
          color: var(--dark-green);
        }
        .testimonial-card p {
          margin-top: 20px;
          font-style: italic;
        }
        .testimonial-stars {
          color: #ffd700;
          margin-bottom: 10px;
        }
        @keyframes carousel {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .faq-accordion {
          max-width: 800px;
          margin: 0 auto;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: var(--shadow-soft);
        }
        .faq-item {
          margin-bottom: 0;
          border-bottom: 1px solid var(--border-color);
        }
        .faq-item:last-child {
          border-bottom: none;
        }
        .faq-question {
          background: var(--light-green);
          padding: 15px 20px;
          cursor: pointer;
          position: relative;
          font-weight: 600;
          color: var(--text-dark);
          transition: background 0.3s ease, color 0.3s ease;
          text-align: left;
          margin: 0;
        }
        .faq-question::after {
          content: '+';
          position: absolute;
          right: 20px;
          font-size: 20px;
          transition: transform 0.3s ease;
        }
        .faq-item.active .faq-question::after {
          transform: rotate(45deg);
        }
        .faq-question:hover {
          background: var(--accent-green);
          color: var(--white);
        }
        .faq-question:focus-visible {
          outline: 2px solid var(--primary-green);
          outline-offset: 2px;
        }
        .faq-answer {
          display: none;
          padding: 15px 20px;
          background: var(--white);
          text-align: left;
          color: var(--text-medium);
        }
        .faq-item.active .faq-answer {
          display: block;
        }
        .trust-badges {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }
        .badge {
          width: 100px;
          height: 100px;
          object-fit: contain;
        }
        .gas-safe-section img {
          max-width: 200px;
          margin-bottom: 20px;
        }
        /* Navigation styles */
        .nimbus-nav * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        .nimbus-nav-container {
          background: transparent;
          position: relative;
          z-index: 9999;
          width: 100%;
          margin: 0;
          padding: 0;
          border: none;
          box-shadow: none;
        }
        .nimbus-nav-inner {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 140px;
          padding: 0 32px;
          position: relative;
        }
        @media (min-width: 1025px) {
          .nimbus-nav-inner {
            justify-content: center;
          }
          .nimbus-logo-link {
            position: static;
          }
        }
        .nimbus-logo-link {
          display: flex;
          align-items: center;
          margin-right: 60px;
          text-decoration: none;
          padding: 10px 0;
          height: auto !important;
          width: auto !important;
        }
        .nimbus-logo {
          height: 120px !important;
          min-height: 120px !important;
          width: auto !important;
          max-width: 350px !important;
          object-fit: contain !important;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
          display: block !important;
        }
        .nimbus-logo-link:hover .nimbus-logo {
          transform: scale(1.08) translateY(-2px);
          filter: drop-shadow(0 4px 8px rgba(0, 166, 118, 0.2));
        }
        .nimbus-menu {
          display: flex;
          list-style: none;
          align-items: center;
          gap: 12px;
          margin: 0;
          padding: 0;
        }
        .nimbus-menu-item {
          position: relative;
        }
        .nimbus-link {
          display: inline-flex;
          align-items: center;
          min-height: 44px;
          padding: 14px 24px;
          color: var(--text-dark);
          text-decoration: none;
          font-weight: 500;
          font-size: 15px;
          letter-spacing: -0.01em;
          border-radius: var(--radius-md);
          position: relative;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          white-space: nowrap;
          overflow: hidden;
        }
        .nimbus-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, transparent 0%, rgba(0, 166, 118, 0.05) 50%, rgba(0, 200, 150, 0.08) 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: var(--radius-md);
        }
        .nimbus-link:hover::before {
          opacity: 1;
        }
        .nimbus-link:hover {
          color: var(--primary-green);
          transform: translateY(-1px);
        }
        .nimbus-link::after {
          content: '';
          position: absolute;
          bottom: 12px;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--primary-green), var(--accent-green));
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          transform: translateX(-50%);
        }
        .nimbus-link:hover::after {
          width: calc(100% - 48px);
        }
        .nimbus-has-dropdown .nimbus-link::after {
          display: none;
        }
        .nimbus-has-dropdown .nimbus-link span {
          margin-left: 8px;
          display: inline-block;
          transition: transform 0.3s ease;
          font-size: 11px;
          opacity: 0.7;
        }
        .nimbus-has-dropdown:hover .nimbus-link span {
          transform: rotate(180deg);
        }
        .nimbus-dropdown {
          position: absolute;
          top: calc(100% - 5px);
          left: 50%;
          transform: translateX(-50%) translateY(10px);
          background: var(--glass-white);
          -webkit-backdrop-filter: blur(20px);
          backdrop-filter: blur(20px);
          box-shadow: var(--shadow-large), var(--shadow-glow);
          border-radius: var(--radius-lg);
          border: 1px solid rgba(255, 255, 255, 0.6);
          list-style: none;
          padding: 12px;
          margin: 0;
          min-width: 260px;
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 1100;
        }
        .nimbus-dropdown::before {
          content: '';
          position: absolute;
          top: -10px;
          left: 0;
          right: 0;
          height: 15px;
          background: transparent;
          display: block;
        }
        .nimbus-menu-item:hover .nimbus-dropdown {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
          transform: translateX(-50%) translateY(0);
        }
        .nimbus-dropdown-item {
          margin: 3px 0;
          opacity: 0;
          animation: fadeInUp 0.4s forwards;
        }
        .nimbus-dropdown-item:nth-child(1) {
          animation-delay: 0.05s;
        }
        .nimbus-dropdown-item:nth-child(2) {
          animation-delay: 0.1s;
        }
        .nimbus-dropdown-item:nth-child(3) {
          animation-delay: 0.15s;
        }
        .nimbus-dropdown-item:nth-child(4) {
          animation-delay: 0.2s;
        }
        .nimbus-dropdown-item:nth-child(5) {
          animation-delay: 0.25s;
        }
        .nimbus-dropdown-item:nth-child(6) {
          animation-delay: 0.3s;
        }
        .nimbus-dropdown-item:nth-child(7) {
          animation-delay: 0.35s;
        }
        .nimbus-dropdown-item:nth-child(8) {
          animation-delay: 0.4s;
        }
        .nimbus-dropdown-item:nth-child(9) {
          animation-delay: 0.45s;
        }
        .nimbus-dropdown-item:nth-child(10) {
          animation-delay: 0.5s;
        }
        .nimbus-dropdown-item:nth-child(11) {
          animation-delay: 0.55s;
        }
        .nimbus-dropdown-item:nth-child(12) {
          animation-delay: 0.6s;
        }
        .nimbus-dropdown-item:nth-child(13) {
          animation-delay: 0.65s;
        }
        .nimbus-dropdown-item:nth-child(14) {
          animation-delay: 0.7s;
        }
        .nimbus-dropdown-item:nth-child(15) {
          animation-delay: 0.75s;
        }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
          from {
            opacity: 0;
            transform: translateY(10px);
          }
        }
        .nimbus-dropdown-link {
          color: var(--text-dark);
          text-decoration: none;
          display: flex;
          align-items: center;
          padding: 12px 18px;
          border-radius: var(--radius-sm);
          transition: all 0.2s ease;
          font-size: 14px;
          font-weight: 450;
          position: relative;
          overflow: hidden;
        }
        .nimbus-dropdown-link::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 3px;
          background: linear-gradient(180deg, var(--primary-green), var(--accent-green));
          transform: translateX(-3px);
          transition: transform 0.3s ease;
        }
        .nimbus-dropdown-link:hover::before {
          transform: translateX(0);
        }
        .nimbus-dropdown-link:hover {
          background: linear-gradient(90deg, rgba(0, 166, 118, 0.08) 0%, rgba(0, 166, 118, 0.03) 100%);
          color: var(--primary-green);
          padding-left: 26px;
        }
        .nimbus-dropdown-link[target="_blank"]::after {
          content: '↗';
          margin-left: auto;
          font-size: 12px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .nimbus-dropdown-link:hover[target="_blank"]::after {
          opacity: 0.5;
        }
        .nimbus-cta {
          margin-left: 10px;
          padding: 14px 28px;
          border: 2px solid transparent;
          border-radius: var(--radius-md);
          font-weight: 600;
          font-size: 14px;
          letter-spacing: -0.01em;
          cursor: pointer;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          min-height: 46px;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          white-space: nowrap;
          position: relative;
          overflow: hidden;
        }
        .nimbus-cta-primary {
          background: rgba(255, 255, 255, 0.9);
          color: var(--dark-green);
          border: 2px solid var(--primary-green);
          box-shadow: 0 2px 8px rgba(0, 166, 118, 0.1), inset 0 0 0 0 var(--primary-green);
          margin-left: auto;
        }
        .nimbus-cta-primary:hover {
          background: var(--white);
          border-color: var(--dark-green);
          color: var(--dark-green);
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 6px 20px rgba(0, 166, 118, 0.2), inset 0 0 0 2px var(--white);
        }
        .nimbus-cta-secondary {
          background: rgba(255, 255, 255, 0.9);
          color: var(--dark-green);
          border: 2px solid var(--primary-green);
          box-shadow: 0 2px 8px rgba(0, 166, 118, 0.1), inset 0 0 0 0 var(--primary-green);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .nimbus-cta-secondary:hover {
          background: var(--white);
          border-color: var(--dark-green);
          color: var(--dark-green);
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 6px 20px rgba(0, 166, 118, 0.2), inset 0 0 0 2px var(--white);
        }
        .nimbus-link:focus-visible,
        .nimbus-cta:focus-visible,
        .nimbus-dropdown-link:focus-visible {
          outline: 2px solid var(--primary-green);
          outline-offset: 3px;
        }
        .nimbus-mobile-toggle {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 48px;
          height: 48px;
          background: var(--glass-white);
          -webkit-backdrop-filter: blur(10px);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(0, 166, 118, 0.2);
          border-radius: var(--radius-sm);
          cursor: pointer;
          padding: 0;
          margin-left: auto;
          position: relative;
          transition: all 0.3s ease;
        }
        .nimbus-mobile-toggle:hover {
          background: var(--white);
          box-shadow: var(--shadow-medium);
        }
        .nimbus-mobile-toggle span {
          width: 22px;
          height: 2px;
          background: var(--text-dark);
          border-radius: 2px;
          transition: all 0.3s ease;
          position: absolute;
        }
        .nimbus-mobile-toggle span:nth-child(1) {
          transform: translateY(-7px);
        }
        .nimbus-mobile-toggle span:nth-child(3) {
          transform: translateY(7px);
        }
        .nimbus-mobile-toggle.active span:nth-child(1) {
          transform: rotate(-45deg);
        }
        .nimbus-mobile-toggle.active span:nth-child(2) {
          opacity: 0;
        }
        .nimbus-mobile-toggle.active span:nth-child(3) {
          transform: rotate(45deg);
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .nimbus-nav-inner {
            padding: 0 24px;
            min-height: 120px;
            justify-content: center;
          }
          .nimbus-logo {
            height: 100px !important;
            min-height: 100px !important;
            max-width: 300px !important;
          }
          .nimbus-logo-link {
            margin-right: 40px;
          }
          .nimbus-menu {
            gap: 8px;
            flex: 1;
            justify-content: center;
          }
          .nimbus-link {
            padding: 12px 20px;
            font-size: 14px;
          }
          .nimbus-cta {
            padding: 12px 24px;
            font-size: 13px;
            min-height: 42px;
          }
          .nimbus-dropdown {
            min-width: 280px;
          }
          .nimbus-dropdown-link {
            padding: 10px 16px;
            font-size: 13px;
          }
          .nimbus-cta-container {
            padding: 0 24px;
          }
          .nimbus-cta-row {
            gap: 16px;
            margin-top: 8px;
          }
        }
        @media (max-width: 768px) {
          .nimbus-nav-inner {
            padding: 0 20px;
            min-height: 100px;
          }
          .nimbus-logo {
            height: 80px !important;
            min-height: 80px !important;
            max-width: 250px !important;
          }
          .nimbus-logo-link {
            margin-right: auto;
          }
          .nimbus-mobile-toggle {
            display: flex;
          }
          .nimbus-menu {
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            height: 0;
            flex-direction: column;
            background: rgba(255, 255, 255, 0.98);
            -webkit-backdrop-filter: blur(20px);
            backdrop-filter: blur(20px);
            overflow: hidden;
            transition: height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: var(--shadow-large);
            gap: 0;
            padding: 0;
            z-index: 999;
          }
          .nimbus-menu.active {
            overflow-y: auto;
            overflow-x: hidden;
            padding: 20px 0;
            -webkit-overflow-scrolling: touch;
          }
          .nimbus-menu-item {
            width: 100%;
            opacity: 0;
            transform: translateY(-10px);
            animation: none;
          }
          .nimbus-menu.active .nimbus-menu-item {
            opacity: 1;
            transform: translateY(0);
            transition: all 0.3s ease;
          }
          .nimbus-menu.active .nimbus-menu-item:nth-child(1) {
            transition-delay: 0.05s;
          }
          .nimbus-menu.active .nimbus-menu-item:nth-child(2) {
            transition-delay: 0.1s;
          }
          .nimbus-menu.active .nimbus-menu-item:nth-child(3) {
            transition-delay: 0.15s;
          }
          .nimbus-link {
            padding: 18px 24px;
            width: 100%;
            justify-content: space-between;
            border-radius: 0;
            font-size: 16px;
          }
          .nimbus-link::before, .nimbus-link::after {
            display: none;
          }
          .nimbus-dropdown {
            position: static;
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
            transform: none;
            box-shadow: none;
            border: none;
            background: var(--light-green);
            -webkit-backdrop-filter: none;
            backdrop-filter: none;
            border-radius: 0;
            width: 100%;
            max-height: 0;
            overflow: hidden;
            padding: 0;
            transition: max-height 0.4s ease;
            text-align: center;
          }
          .nimbus-menu-item.dropdown-active .nimbus-dropdown {
            max-height: 60vh;
            overflow-y: auto;
            overflow-x: hidden;
            padding: 10px 0;
            -webkit-overflow-scrolling: touch;
          }
          .nimbus-menu-item.dropdown-active .nimbus-dropdown::-webkit-scrollbar {
            width: 4px;
          }
          .nimbus-menu-item.dropdown-active .nimbus-dropdown::-webkit-scrollbar-track {
            background: rgba(0, 166, 118, 0.1);
          }
          .nimbus-menu-item.dropdown-active .nimbus-dropdown::-webkit-scrollbar-thumb {
            background: var(--primary-green);
            border-radius: 2px;
          }
          .nimbus-dropdown-item {
            animation: none;
            opacity: 1;
          }
          .nimbus-dropdown-link {
            justify-content: center;
            padding: 14px 20px;
            border-radius: 0;
            font-size: 13px;
            white-space: normal;
            text-align: center;
          }
          .nimbus-dropdown-link:hover {
            padding-left: 20px;
          }
          .nimbus-cta-container {
            padding: 0 20px;
          }
          .nimbus-cta-row {
            flex-direction: column;
            gap: 8px;
            margin-top: 5px;
          }
          .nimbus-cta {
            margin-left: 0;
            width: 100%;
            justify-content: center;
            font-size: 13px;
            padding: 10px 20px;
            min-height: 38px;
            border-width: 1.5px;
          }
          .nimbus-cta-primary {
            margin-left: 0;
          }
          .nimbus-cta:hover {
            transform: translateY(-2px) scale(1.01);
          }
        }
        @media (max-width: 768px) and (orientation: portrait) {
          .nimbus-menu-item.dropdown-active .nimbus-dropdown {
            max-height: 50vh;
          }
          .nimbus-dropdown-link {
            font-size: 12px;
            padding: 12px 16px;
          }
          .nimbus-cta {
            font-size: 12px;
            padding: 9px 18px;
            min-height: 36px;
          }
        }
        @media (max-width: 375px) {
          .nimbus-cta {
            font-size: 12px;
            padding: 8px 16px;
            min-height: 34px;
          }
          .nimbus-cta-row {
            gap: 6px;
          }
        }
        @media (max-width: 768px) and (orientation: portrait) {
          .nimbus-has-dropdown .nimbus-dropdown {
            left: 0 !important;
            transform: none !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
          }
          .nimbus-has-dropdown .nimbus-link span {
            transform: none;
          }
          .nimbus-has-dropdown.dropdown-active .nimbus-link span {
            transform: rotate(180deg);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .nimbus-nav *,
          .nimbus-nav *::before,
          .nimbus-nav *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
        .nimbus-cta-row {
          background: transparent;
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 20px;
          margin-top: 10px;
          flex-wrap: wrap;
        }
        .nimbus-cta-row .nimbus-cta {
          margin-left: 0;
        }
        .nimbus-cta-row .nimbus-cta-primary {
          margin-left: 0;
        }
        .nimbus-cta-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 32px;
        }
        .nimbus-social {
          display: flex;
          align-items: center;
          gap: 15px;
        }
        .nimbus-social a {
          color: var(--text-dark);
          transition: color 0.3s ease, transform 0.3s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: var(--radius-sm);
          position: relative;
          overflow: hidden;
        }
        .nimbus-social a::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, transparent 0%, rgba(0, 166, 118, 0.05) 50%, rgba(0, 200, 150, 0.08) 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .nimbus-social a:hover::before {
          opacity: 1;
        }
        .nimbus-social a:hover {
          color: var(--primary-green);
          transform: translateY(-2px);
        }
        .nimbus-social svg {
          width: 24px;
          height: 24px;
        }
        .nimbus-social-item .nimbus-link {
          display: none;
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .nimbus-social {
            gap: 10px;
          }
          .nimbus-social a {
            width: 36px;
            height: 36px;
          }
          .nimbus-social svg {
            width: 20px;
            height: 20px;
          }
        }
        @media (max-width: 768px) {
          .nimbus-social-item {
            justify-content: center;
            padding: 18px 0;
          }
          .nimbus-social {
            gap: 20px;
            justify-content: center;
          }
          .nimbus-social a {
            width: 44px;
            height: 44px;
          }
          .nimbus-social svg {
            width: 26px;
            height: 26px;
          }
        }
        /* Install Banner */
        .install-banner {
          background: var(--off-white);
          border: 2px solid var(--primary-green);
          border-radius: var(--radius-md);
          padding: 24px 28px 20px;
          margin: 24px 0;
          box-shadow: var(--shadow-soft);
          display: flex;
          flex-direction: column;
          gap: 18px;
          align-items: center;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .install-banner:hover {
          border-color: var(--dark-green);
          box-shadow: 0 12px 28px rgba(0, 122, 87, 0.18);
          transform: translateY(-3px) scale(1.01);
        }
        .banner-wrapper {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 20px;
        }
        .banner-label {
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 10px;
          padding: 12px 22px;
          border-radius: var(--radius-md);
          border: 2px solid var(--primary-green);
          background: rgba(255, 255, 255, 0.92);
          color: var(--dark-green);
          font-weight: 600;
          letter-spacing: -0.01em;
          box-shadow: 0 2px 8px rgba(0, 166, 118, 0.12);
          margin: 0;
        }
        .banner-label::before {
          content: '✓';
          color: var(--primary-green);
          font-weight: 700;
          font-size: 15px;
        }
        .banner-scroller {
          position: relative;
          overflow: hidden;
          flex: 1 1 320px;
          max-width: 100%;
        }
        .banner-track {
          display: flex;
          width: max-content;
          gap: 0;
          animation: banner-scroll 36s linear infinite;
          will-change: transform;
        }
        .banner-track:hover { animation-play-state: paused; }
        .banner-items {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 20px;
          flex-shrink: 0;
          min-width: auto;
          padding-inline-start: 0;
          padding-inline-end: 20px;
        }
        .banner-item {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: var(--radius-md);
          border: 2px solid var(--primary-green);
          background: rgba(255, 255, 255, 0.9);
          box-shadow: 0 2px 8px rgba(0, 166, 118, 0.12);
          font-weight: 600;
          color: var(--dark-green);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          white-space: nowrap;
          flex: 0 0 auto;
          box-sizing: border-box;
        }
        .banner-item::before {
          content: '✓';
          color: var(--primary-green);
          font-weight: 700;
        }
        .banner-item:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 6px 20px rgba(0, 166, 118, 0.2);
        }
        .banner-footnote {
          margin: 0;
          font-size: 14px;
          color: var(--dark-green);
          text-align: center;
          padding: 12px 20px;
          border: 2px solid var(--primary-green);
          border-radius: var(--radius-md);
          background: rgba(255, 255, 255, 0.92);
          box-shadow: 0 2px 8px rgba(0, 166, 118, 0.12);
          font-weight: 600;
        }
        @keyframes banner-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (max-width: 768px) {
          .install-banner {
            padding: 20px 18px 16px;
            margin: 16px 0;
          }
          .banner-wrapper {
            flex-direction: column;
            gap: 14px;
          }
          .banner-label,
          .banner-scroller {
            width: 100%;
            max-width: 520px;
            margin: 0 auto;
          }
          .banner-scroller {
            height: 220px;
            overflow: hidden;
            border-radius: var(--radius-md);
          }
          .banner-track {
            width: 100%;
            display: flex;
            flex-direction: column;
            animation: banner-scroll-y 18s linear infinite;
            will-change: transform;
          }
          .banner-items[aria-hidden="true"] {
            display: flex !important;
          }
          .banner-items {
            display: flex !important;
            flex-direction: column;
            align-items: stretch;
            gap: 12px;
            padding: 10px 0;
            min-width: auto;
          }
          .banner-item {
            width: 100%;
            min-height: 52px;
            justify-content: center;
            text-align: center;
            white-space: normal;
            font-size: 13px;
            padding: 12px 16px;
          }
          .banner-footnote {
            font-size: 13px;
          }
        }
        @keyframes banner-scroll-y {
          0%   { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .banner-track { animation: none !important; }
        }
        /* Section headings and text */
        .section-heading {
          font-size: 28px;
          font-weight: 600;
          margin-bottom: 25px;
          color: #333333;
          text-align: center;
        }
        .section-heading--spaced {
          margin-bottom: 40px;
        }
        .section-heading--hero {
          font-size: 32px;
        }
        .section-subheading {
          font-size: 22px;
          font-weight: 400;
          margin-bottom: 15px;
          color: #666666;
          text-align: center;
        }
        .section-text {
          font-size: 17px;
          line-height: 1.7;
          color: #555555;
          margin-bottom: 30px;
          text-align: center;
        }
        .section-text--compact {
          margin-bottom: 25px;
        }
        .section-text--intro {
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }
        .section-text--small {
          font-size: 14px;
          color: #777777;
          margin-bottom: 0;
        }
        .section-list {
          font-size: 17px;
          line-height: 1.7;
          color: #555555;
          list-style-type: none;
          padding-left: 0;
          margin: 0 auto 30px auto;
          max-width: 800px;
          text-align: center;
        }
        .section-list--flush {
          margin-bottom: 0;
        }
        .section-list li {
          margin-bottom: 15px;
        }
        .section-cta-group {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }
        .section-cta-group--spaced {
          margin-bottom: 30px;
        }
        .card-heading {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 15px;
          color: #333333;
        }
        .card-text {
          font-size: 16px;
          line-height: 1.6;
          color: #555555;
        }
        .cta-button {
          padding: 14px 28px;
          border: 2px solid #00a676;
          border-radius: 14px;
          font-weight: 600;
          font-size: 14px;
          letter-spacing: -0.01em;
          cursor: pointer;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          min-height: 46px;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          white-space: normal;
          position: relative;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.9);
          color: #007a57;
          box-shadow: 0 2px 8px rgba(0, 166, 118, 0.1), inset 0 0 0 0 #00a676;
        }
        .cta-button--nowrap {
          white-space: nowrap;
        }
        .cta-button:hover {
          background: #ffffff;
          border-color: #007a57;
          color: #007a57;
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 6px 20px rgba(0, 166, 118, 0.2), inset 0 0 0 2px #ffffff;
        }
        .footer-heading {
          font-size: 18px;
          font-weight: 600;
          color: #007a57;
          margin-bottom: 30px;
          text-align: center;
        }
        /* Media queries */
        @media(max-width:1024px){
          .nimbus-section-base{
            padding:80px 32px
          }
          .services-grid{
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))
          }
        }
        @media(max-width:768px){
          .nimbus-section-base{
            padding:40px 20px
          }
          .section-heading{
            font-size:24px
          }
          .section-text{
            font-size:15px
          }
          .section-list li{
            font-size:15px
          }
          .cta-button{
            width:100%;
            max-width:300px;
            margin:0 auto 10px;
            font-size:13px;
            padding:10px 20px;
            min-height:38px
          }
          .services-grid{
            grid-template-columns: 1fr
          }
          .testimonials-carousel{
            animation-duration:30s;
            gap:10px
          }
          .testimonial-card{
            flex:0 0 250px
          }
          .faqs-section{
            padding:40px 20px
          }
          .faqs-section h2{
            font-size:24px
          }
          .gas-safe-section{
            padding:40px 20px
          }
          .gas-safe-section h2{
            font-size:24px
          }
          .gas-safe-section p{
            font-size:15px
          }
          .gas-safe-section ul li{
            font-size:15px
          }
          .gas-safe-section img{
            max-width:150px
          }
          .free-quote-section{
            padding:40px 20px
          }
          .free-quote-section h2{
            font-size:24px
          }
          .free-quote-section p{
            font-size:15px
          }
          .company-details-section{
            padding:40px 20px
          }
          .company-details-section h2{
            font-size:24px
          }
          .company-details-section p{
            font-size:15px
          }
          .company-details-section img{
            max-width:150px
          }
          .company-details-section .section-cta-group{
            flex-direction:column;
            gap:15px
          }
          .company-details-section a{
            width:100%;
            max-width:300px;
            margin:0 auto;
            font-size:13px;
            padding:10px 20px;
            min-height:38px
          }
        }
        @media (max-width: 1024px) {
          .free-quote-section {
            padding: 80px 32px;
          }
        }
        @media (max-width: 768px) {
          .cta-button--nowrap { white-space: normal !important; }
        }
      `}</style>
    </>
  );
};

export default BoilerRepairScunthorpe;