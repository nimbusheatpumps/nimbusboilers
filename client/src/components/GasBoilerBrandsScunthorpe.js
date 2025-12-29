import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import QuoteForm from './QuoteForm';

const GasBoilerBrandsScunthorpe = () => {
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
      question: "Which is the best gas boiler brand for Scunthorpe homes?",
      answer: "Worcester Bosch and Vaillant are top choices for reliability and efficiency in North Lincolnshire. Nimbus Gas Safe engineers recommend based on your home size and needs."
    },
    {
      question: "What are Worcester Bosch boiler pros and cons?",
      answer: "Pros: Excellent reliability, high efficiency (up to 94%), great warranties, quiet operation. Cons: Higher upfront cost, parts can be expensive."
    },
    {
      question: "Are Vaillant boilers good for Scunthorpe?",
      answer: "Yes, Vaillant ecoTEC boilers offer smart controls, compact design, and ErP A ratings. Ideal for modern homes in North Lincolnshire."
    },
    {
      question: "Does Nimbus install Worcester Bosch and Vaillant in Scunthorpe?",
      answer: "Yes, as Gas Safe registered installers, we professionally install all major brands including Worcester Bosch and Vaillant with full commissioning."
    },
    {
      question: "How much do top brand boilers cost installed in Scunthorpe?",
      answer: "Installed prices start from £2,200 for Worcester Bosch Greenstar, £2,000 for Vaillant ecoTEC. Includes all filters, thermostat, Gas Safe cert."
    },
    {
      question: "Can I finance Worcester Bosch or Vaillant boilers?",
      answer: "Yes, 0% finance options available on selected models. Combine with boiler grants if eligible."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Gas Boiler Brands Scunthorpe | Worcester Bosch vs Vaillant | Nimbus Gas Safe Installers</title>
        <meta name="description" content="Top gas boiler brands Scunthorpe: Worcester Bosch, Vaillant pros/cons comparison. Gas Safe installation North Lincolnshire by Nimbus. Reviews, prices, free quotes for reliable boilers." />
        <meta name="keywords" content="gas boiler brands Scunthorpe, Worcester Bosch Scunthorpe, Vaillant boilers North Lincolnshire, best boiler brands, boiler manufacturers Scunthorpe, Worcester Bosch vs Vaillant" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://nimbusheatpumps.co.uk/gas-boiler-brands-scunthorpe/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://nimbusheatpumps.co.uk/#organization",
            "name": "Nimbus Heat Pumps Ltd",
            "alternateName": "Nimbus Boilers & Heat Pumps",
            "url": "https://nimbusheatpumps.co.uk/",
            "logo": "https://nimbusheatpumps.co.uk/wp-content/uploads/2025/06/Nimbus-Heat-Pumps-Logo.png",
            "description": "Gas boiler brands information and Gas Safe installation services for Worcester Bosch, Vaillant and more in Scunthorpe, North Lincolnshire.",
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
                  "name": "Gas Boiler Brands Consultation Scunthorpe",
                  "description": "Expert advice on top boiler brands like Worcester Bosch and Vaillant for Scunthorpe homes."
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
            "name": "Gas Boiler Brands Comparison Scunthorpe",
            "provider": {
              "@id": "https://nimbusheatpumps.co.uk/#organization",
              "@type": "LocalBusiness"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Scunthorpe, North Lincolnshire"
            },
            "serviceType": "Boiler Brands Advice",
            "description": "Compare top gas boiler brands Worcester Bosch, Vaillant for Scunthorpe installations. Pros, cons, pricing, Gas Safe installation.",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "GBP",
              "price": "0",
              "itemConditioned": "https://schema.org/NewCondition"
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Gas Boiler Brands Scunthorpe: Worcester Bosch vs Vaillant Guide",
            "description": "In-depth comparison of top gas boiler brands available in Scunthorpe, North Lincolnshire. Pros, cons, pricing and installation by Nimbus Gas Safe engineers.",
            "author": {
              "@type": "Organization",
              "name": "Nimbus Heat Pumps Ltd"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Nimbus Heat Pumps Ltd",
              "logo": {
                "@type": "ImageObject",
                "url": "https://nimbusheatpumps.co.uk/wp-content/uploads/2025/06/Nimbus-Heat-Pumps-Logo.png"
              }
            },
            "datePublished": "2025-12-29",
            "image": "https://nimbusheatpumps.co.uk/wp-content/uploads/2025/06/iStock-2211126281-scaled.jpg"
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
                alt="Nimbus Boilers & Heat Pumps - Gas Boiler Brands Scunthorpe"
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
                <a href="/gas-boiler-service-scunthorpe" className="nimbus-link">Gas Boiler Service</a>
              </li>
              <li className="nimbus-menu-item">
                <a href="/gas-boiler-installation-scunthorpe" className="nimbus-link">Gas Boiler Installation</a>
              </li>
              <li className="nimbus-menu-item">
                <a href="/boiler-grants-scunthorpe" className="nimbus-link">Boiler Grants</a>
              </li>
              <li className="nimbus-menu-item">
                <a href="/" className="nimbus-link">Home</a>
              </li>
            </ul>
          </div>
          <div className="nimbus-cta-container">
            <div className="nimbus-cta-row">
              <a href="/quote" className="nimbus-cta nimbus-cta-primary">Get Boiler Quote</a>
              <a href="#contact-form" className="nimbus-cta nimbus-cta-secondary">Free Consultation</a>
              <a href="tel:+447487546550" className="nimbus-cta nimbus-cta-primary">Call Now</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Banner */}
      <div className="install-banner">
        <div className="banner-wrapper">
          <h2 className="banner-label">Top Gas Boiler Brands Installed in Scunthorpe:</h2>
          <div className="banner-scroller" aria-live="polite">
            <div className="banner-track">
              <div className="banner-items">
                <span className="banner-item">Worcester Bosch</span>
                <span className="banner-item">Vaillant ecoTEC</span>
                <span className="banner-item">Baxi 800</span>
                <span className="banner-item">Ideal Logic Max</span>
                <span className="banner-item">Gas Safe Certified</span>
              </div>
              <div className="banner-items" aria-hidden="true">
                <span className="banner-item">Worcester Bosch</span>
                <span className="banner-item">Vaillant ecoTEC</span>
                <span className="banner-item">Baxi 800</span>
                <span className="banner-item">Ideal Logic Max</span>
                <span className="banner-item">Gas Safe Certified</span>
              </div>
            </div>
          </div>
        </div>
        <p className="banner-footnote">Nimbus installs all major brands with full warranty & commissioning</p>
      </div>

      <main>
        {/* Hero */}
        <section className="hero-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '50px'}}>
            <div style={{flex: '1 1 400px', textAlign: 'center'}}>
              <h1 className="section-heading section-heading--hero">Gas Boiler Brands Scunthorpe</h1>
              <h2 className="section-subheading">Worcester Bosch, Vaillant & Top Manufacturers | North Lincolnshire</h2>
              <p className="section-text section-text--intro section-text--compact">Discover the best <strong>gas boiler brands Scunthorpe</strong> has to offer. Compare <strong>Worcester Bosch vs Vaillant</strong> pros/cons, prices and features. Gas Safe installation by Nimbus throughout North Lincolnshire. Free expert advice.</p>
              <div className="section-cta-group">
                <a href="#contact-form" className="cta-button cta-button--nowrap">Compare Brands Free</a>
                <a href="/quote" className="cta-button cta-button--nowrap">Instant Quote</a>
              </div>
            </div>
            <div style={{flex: '1 1 300px', maxWidth: '400px'}}>
              <img decoding="async" src="/images/hero-install.webp" alt="top gas boiler brands Scunthorpe Worcester Bosch Vaillant" style={{width: '100%', height: 'auto', borderRadius: '8px'}} loading="lazy" />
            </div>
          </div>
        </section>

        {/* Top Brands */}
        <section className="our-services-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <h2 className="section-heading section-heading--spaced">Top Gas Boiler Brands in Scunthorpe</h2>
            <div className="services-grid">
              <div className="service-card">
                <img src="/images/worcester-logo.webp" alt="Worcester Bosch boilers Scunthorpe" style={{width: '120px', height: 'auto', margin: '0 auto 20px'}} loading="lazy" />
                <h3 className="card-heading">Worcester Bosch</h3>
                <p className="card-text">UK's most trusted boiler brand.</p>
                <table className="pros-cons-table">
                  <thead>
                    <tr><th>Pros</th><th>Cons</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>94% efficiency</td><td>Premium price</td></tr>
                    <tr><td>10yr warranty</td><td>Larger size</td></tr>
                    <tr><td>Quiet operation</td><td>Parts cost</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="service-card">
                <img src="/images/vaillant-logo.webp" alt="Vaillant boilers Scunthorpe" style={{width: '120px', height: 'auto', margin: '0 auto 20px'}} loading="lazy" />
                <h3 className="card-heading">Vaillant</h3>
                <p className="card-text">German engineering excellence.</p>
                <table className="pros-cons-table">
                  <thead>
                    <tr><th>Pros</th><th>Cons</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Smart controls</td><td>Service intervals</td></tr>
                    <tr><td>Compact design</td><td>Noise level</td></tr>
                    <tr><td>ErP A rated</td><td>Hot water priority</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Nimbus Installation */}
        <section className="expert-repair-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <h2 className="section-heading section-heading--spaced">Nimbus Gas Safe Boiler Installation - All Brands</h2>
            <p className="section-text">We install <strong>Worcester Bosch Scunthorpe</strong> and <strong>Vaillant boilers North Lincolnshire</strong> with full manufacturer warranty transfer. Expert advice on the best brand for your home.</p>
            <ul className="section-list">
              <li>Gas Safe registered engineers</li>
              <li>Full system flush & filters</li>
              <li>Smart thermostat included</li>
              <li>12 month workmanship guarantee</li>
              <li>Finance & grants available</li>
            </ul>
            <div className="section-cta-group">
              <a href="#contact-form" className="cta-button cta-button--nowrap">Choose Your Brand Quote</a>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="faqs-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <h2 className="section-heading section-heading--spaced">Gas Boiler Brands FAQs Scunthorpe</h2>
            <div className="faq-accordion">
              {faqData.map((faq, index) => (
                <div key={index} className={`faq-item ${faqActive === index ? 'active' : ''}`}>
                  <h3 className="faq-question" onClick={() => toggleFaq(index)} role="button" tabIndex="0" aria-expanded={faqActive === index}>{faq.question}</h3>
                  <div className="faq-answer" aria-hidden={faqActive !== index}>{faq.answer}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote */}
        <section className="free-quote-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <h2 className="section-heading">Get Quote for Worcester Bosch or Vaillant Boiler</h2>
            <p className="section-text section-text--intro">Tell us your preferred brand and get a free no-obligation quote.</p>
            <div id="contact-form">
              <QuoteForm />
            </div>
          </div>
        </section>
      </main>

      <style>{`
        :root {
          --primary-green: #00a676;
          --dark-green: #007a5a;
          --orange: #ff6b35;
          --light-gray: #f8f9fa;
          --gray: #6c757d;
          --dark: #343a40;
        }
        * { box-sizing: border-box; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: var(--dark); margin: 0; }
        .nimbus-nav { background: linear-gradient(to right, var(--primary-green), var(--dark-green)); color: white; padding: 1rem 0; position: sticky; top: 0; z-index: 100; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        .nimbus-nav-container { max-width: 1400px; margin: 0 auto; padding: 0 20px; display: flex; justify-content: space-between; align-items: center; }
        .nimbus-logo { height: 40px; width: auto; }
        .nimbus-mobile-toggle { display: none; flex-direction: column; background: none; border: none; cursor: pointer; padding: 5px; }
        .nimbus-mobile-toggle span { height: 3px; width: 25px; background: white; margin: 3px 0; transition: 0.3s; }
        .nimbus-mobile-toggle.active span:nth-child(1) { transform: rotate(-45deg) translate(-5px, 6px); }
        .nimbus-mobile-toggle.active span:nth-child(2) { opacity: 0; }
        .nimbus-mobile-toggle.active span:nth-child(3) { transform: rotate(45deg) translate(-5px, -6px); }
        .nimbus-menu { display: flex; list-style: none; margin: 0; padding: 0; gap: 2rem; }
        .nimbus-link { color: white; text-decoration: none; font-weight: 500; transition: opacity 0.3s; }
        .nimbus-link:hover { opacity: 0.8; }
        .nimbus-cta-container { display: flex; gap: 1rem; }
        .nimbus-cta { padding: 0.75rem 1.5rem; border-radius: 5px; text-decoration: none; font-weight: 600; transition: all 0.3s; }
        .nimbus-cta-primary { background: var(--orange); color: white; }
        .nimbus-cta-primary:hover { background: #e55a2b; transform: translateY(-2px); }
        .nimbus-cta-secondary { background: white; color: var(--primary-green); border: 2px solid white; }
        .nimbus-cta-secondary:hover { background: var(--primary-green); color: white; }
        .install-banner { background: var(--light-gray); padding: 1.5rem 0; text-align: center; }
        .banner-label { margin: 0 0 1rem; color: var(--dark); font-size: 1.2rem; font-weight: 600; }
        .banner-scroller { overflow: hidden; }
        .banner-track { display: flex; animation: scroll 20s linear infinite; }
        .banner-items { display: flex; gap: 2rem; min-width: max-content; }
        .banner-item { background: white; padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.9rem; font-weight: 500; white-space: nowrap; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
        @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .banner-footnote { margin: 1rem 0 0; font-size: 0.9rem; color: var(--gray); }
        .section { padding: 4rem 0; }
        .nimbus-section-base { background: white; }
        .section-heading { font-size: 2.5rem; font-weight: 700; margin: 0 0 1rem; line-height: 1.2; }
        .section-heading--hero { font-size: 3rem; color: var(--primary-green); }
        .section-subheading { font-size: 1.5rem; margin: 0 0 1.5rem; color: var(--dark-green); }
        .section-text { font-size: 1.1rem; margin: 0 0 1.5rem; max-width: 600px; margin-left: auto; margin-right: auto; }
        .section-text--intro { font-size: 1.2rem; }
        .section-text--compact { line-height: 1.5; }
        .section-cta-group { display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center; }
        .cta-button { padding: 1rem 2rem; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 1.1rem; transition: all 0.3s; display: inline-flex; align-items: center; justify-content: center; min-height: 50px; background: var(--primary-green); color: white; }
        .cta-button:hover { background: var(--dark-green); transform: translateY(-3px); box-shadow: 0 5px 15px rgba(0,166,118,0.4); }
        .cta-button--nowrap { white-space: nowrap; }
        .services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-top: 3rem; }
        .service-card { text-align: center; padding: 2.5rem 1.5rem; border: 1px solid #e9ecef; border-radius: 12px; transition: all 0.3s; background: var(--light-gray); }
        .service-card:hover { transform: translateY(-5px); box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
        .card-heading { font-size: 1.4rem; margin: 1rem 0 0.5rem; color: var(--dark); }
        .card-text { color: var(--gray); margin: 0; }
        .section-list { max-width: 600px; margin: 2rem auto; padding-left: 1.5rem; }
        .section-list li { margin-bottom: 0.75rem; font-size: 1.1rem; }
        .faq-accordion { max-width: 800px; margin: 2rem auto 0; }
        .faq-item { border-bottom: 1px solid #e9ecef; margin-bottom: 0.5rem; border-radius: 8px; overflow: hidden; }
        .faq-question { background: var(--light-gray); padding: 1.5rem; margin: 0; cursor: pointer; font-weight: 600; font-size: 1.1rem; transition: all 0.3s; }
        .faq-question:hover { background: #e9ecef; }
        .faq-item.active .faq-question { background: var(--primary-green); color: white; }
        .faq-answer { padding: 0 1.5rem 1.5rem; background: white; display: none; }
        .faq-item.active .faq-answer { display: block; }
        .hero-section { background: linear-gradient(135deg, var(--primary-green) 0%, var(--dark-green) 100%); color: white; padding: 5rem 0; text-align: center; }
        .pros-cons-table { width: 100%; border-collapse: collapse; margin-top: 1rem; font-size: 0.9rem; }
        .pros-cons-table th, .pros-cons-table td { border: 1px solid #ddd; padding: 0.5rem; text-align: left; }
        .pros-cons-table th { background: var(--light-gray); font-weight: 600; }
        .pros-cons-table td:nth-child(1) { background: #f0f9f0; }
        .pros-cons-table td:nth-child(2) { background: #fff5f5; }
        @media (max-width: 768px) {
          .section-heading--hero { font-size: 2rem; }
          .section-subheading { font-size: 1.2rem; }
          .nimbus-menu { display: none; position: fixed; top: 80px; left: 0; width: 100%; background: var(--dark-green); flex-direction: column; padding: 1rem; gap: 1rem; }
          .nimbus-menu.active { display: flex; }
          .nimbus-mobile-toggle { display: flex; }
          .nimbus-nav-container { flex-wrap: wrap; }
          .nimbus-cta-container { order: -1; width: 100%; justify-content: center; margin-top: 1rem; }
          .section-cta-group { flex-direction: column; align-items: center; }
          .services-grid { grid-template-columns: 1fr; }
          .section { padding: 2rem 0; }
          .pros-cons-table { font-size: 0.8rem; }
        }
        @media (max-width: 480px) {
          .section-heading { font-size: 2rem; }
          .banner-items { gap: 1rem; }
          .banner-item { font-size: 0.8rem; padding: 0.4rem 0.8rem; }
        }
      `}</style>
    </>
  );
};

export default GasBoilerBrandsScunthorpe;
