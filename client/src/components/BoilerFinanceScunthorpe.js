import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import QuoteForm from './QuoteForm';

const BoilerFinanceScunthorpe = () => {
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
      question: "What boiler finance options are available in Scunthorpe?",
      answer: "0% finance over 12-60 months, low interest hire purchase, and leasing options for new boiler installations. Tailored to your budget."
    },
    {
      question: "Is 0% boiler finance available North Lincolnshire?",
      answer: "Yes, subject to status. Nimbus partners with leading finance providers for interest-free boiler finance Scunthorpe on selected models."
    },
    {
      question: "Can I combine boiler finance with grants?",
      answer: "Absolutely. Reduce your financed amount with ECO4 grants up to £7,500. See our <a href='/boiler-grants-scunthorpe'>Boiler Grants Scunthorpe</a> page for eligibility."
    },
    {
      question: "What is the minimum deposit for boiler finance?",
      answer: "Typically 0-10% deposit required. Full finance available for qualifying customers."
    },
    {
      question: "How quick is boiler finance approval Scunthorpe?",
      answer: "Instant online decisions. Funds released same day for fast Gas Safe installation."
    },
    {
      question: "Does finance cover installation costs?",
      answer: "Yes, full package including boiler, installation, filters, thermostat all financed."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Boiler Finance Scunthorpe | 0% Finance Options | Affordable Monthly Payments North Lincolnshire</title>
        <meta name="description" content="Boiler finance Scunthorpe: 0% interest options, low monthly payments for new installations. Combine with grants for affordability. Gas Safe engineers Nimbus North Lincolnshire. Apply free." />
        <meta name="keywords" content="boiler finance Scunthorpe, 0% boiler finance North Lincolnshire, boiler installation finance, affordable boilers Scunthorpe, finance new boiler" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://nimbusheatpumps.co.uk/boiler-finance-scunthorpe/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://nimbusheatpumps.co.uk/#organization",
            "name": "Nimbus Heat Pumps Ltd",
            "alternateName": "Nimbus Boilers & Heat Pumps",
            "url": "https://nimbusheatpumps.co.uk/",
            "logo": "https://nimbusheatpumps.co.uk/wp-content/uploads/2025/06/Nimbus-Heat-Pumps-Logo.png",
            "description": "Boiler finance options and Gas Safe installation services in Scunthorpe and North Lincolnshire. 0% finance, grants assistance.",
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
                  "name": "Boiler Finance Scunthorpe",
                  "description": "0% finance and payment plans for boiler installations."
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
            "paymentAccepted": ["Finance", "Cash", "Credit Card"],
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
            "name": "Boiler Finance Scunthorpe",
            "provider": {
              "@id": "https://nimbusheatpumps.co.uk/#organization",
              "@type": "LocalBusiness"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Scunthorpe, North Lincolnshire"
            },
            "serviceType": "Boiler Finance",
            "description": "Affordable 0% finance for gas boiler installations in Scunthorpe. Monthly payments, grants combination.",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "GBP",
              "price": "from 50",
              "priceCurrency": "GBP/month"
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Boiler Finance Scunthorpe: 0% Options & Grants Guide",
            "description": "Complete guide to boiler finance in Scunthorpe, including 0% plans, eligibility, monthly costs and grant combinations for North Lincolnshire.",
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
                alt="Nimbus Boilers & Heat Pumps - Boiler Finance Scunthorpe"
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
                <a href="/gas-boiler-installation-scunthorpe" className="nimbus-link">Boiler Installation</a>
              </li>
              <li className="nimbus-menu-item">
                <a href="/boiler-grants-scunthorpe" className="nimbus-link">Boiler Grants</a>
              </li>
              <li className="nimbus-menu-item">
                <a href="/gas-boiler-service-scunthorpe" className="nimbus-link">Boiler Service</a>
              </li>
              <li className="nimbus-menu-item">
                <a href="/" className="nimbus-link">Home</a>
              </li>
            </ul>
          </div>
          <div className="nimbus-cta-container">
            <div className="nimbus-cta-row">
              <a href="#contact-form" className="nimbus-cta nimbus-cta-primary">Apply for Finance</a>
              <a href="/quote" className="nimbus-cta nimbus-cta-secondary">Instant Quote</a>
              <a href="tel:+447487546550" className="nimbus-cta nimbus-cta-primary">Call 07487 546550</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Banner */}
      <div className="install-banner">
        <div className="banner-wrapper">
          <h2 className="banner-label">0% Finance | From £50/month | Grants up to £7,500</h2>
          <div className="banner-scroller" aria-live="polite">
            <div className="banner-track">
              <div className="banner-items">
                <span className="banner-item">12-60 months terms</span>
                <span className="banner-item">No deposit options</span>
                <span className="banner-item">Instant approval</span>
                <span className="banner-item">Gas Safe install included</span>
                <span className="banner-item">Grants reduce payments</span>
              </div>
              <div className="banner-items" aria-hidden="true">
                <span className="banner-item">12-60 months terms</span>
                <span className="banner-item">No deposit options</span>
                <span className="banner-item">Instant approval</span>
                <span className="banner-item">Gas Safe install included</span>
                <span className="banner-item">Grants reduce payments</span>
              </div>
            </div>
          </div>
        </div>
        <p className="banner-footnote">Subject to status | Nimbus Boiler Finance Partners</p>
      </div>

      <main>
        {/* Hero */}
        <section className="hero-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '50px'}}>
            <div style={{flex: '1 1 400px', textAlign: 'center'}}>
              <h1 className="section-heading section-heading--hero">Boiler Finance Scunthorpe</h1>
              <h2 className="section-subheading">0% Finance Options | Affordable Monthly Payments | North Lincolnshire</h2>
              <p className="section-text section-text--intro section-text--compact"><strong>Boiler finance Scunthorpe</strong> made easy with 0% interest plans. Spread the cost of new installations over 12-60 months. Combine with <a href="/boiler-grants-scunthorpe">boiler grants Scunthorpe</a> for even lower payments. Gas Safe certified.</p>
              <div className="section-cta-group">
                <a href="#contact-form" className="cta-button cta-button--nowrap">Apply for 0% Finance</a>
                <a href="/quote" className="cta-button cta-button--nowrap">Get Quote First</a>
              </div>
            </div>
            <div style={{flex: '1 1 300px', maxWidth: '400px'}}>
              <img decoding="async" src="/images/hero-home.webp" alt="boiler finance Scunthorpe 0% monthly payments" style={{width: '100%', height: 'auto', borderRadius: '8px'}} loading="lazy" />
            </div>
          </div>
        </section>

        {/* Finance Options */}
        <section className="our-services-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <h2 className="section-heading section-heading--spaced">Boiler Finance Options Scunthorpe</h2>
            <div className="services-grid">
              <div className="service-card">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{margin: '0 auto 20px'}}>
                  <circle cx="12" cy="12" r="12" fill="#00a676"/>
                  <path d="M6 12.5L10 16.5L18 7.5" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 className="card-heading">0% Finance</h3>
                <p className="card-text">Interest free over 12-60 months. No payments first 3 months option.</p>
              </div>
              <div className="service-card">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{margin: '0 auto 20px'}}>
                  <circle cx="12" cy="12" r="12" fill="#00a676"/>
                  <path d="M6 12.5L10 16.5L18 7.5" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 className="card-heading">Low Deposit HP</h3>
                <p className="card-text">From 0% deposit, competitive APR for longer terms.</p>
              </div>
              <div className="service-card">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{margin: '0 auto 20px'}}>
                  <circle cx="12" cy="12" r="12" fill="#00a676"/>
                  <path d="M6 12.5L10 16.5L18 7.5" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 className="card-heading">Grants + Finance</h3>
                <p className="card-text">£7,500 grants reduce financed amount dramatically.</p>
              </div>
              <div className="service-card">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{margin: '0 auto 20px'}}>
                  <circle cx="12" cy="12" r="12" fill="#00a676"/>
                  <path d="M6 12.5L10 16.5L18 7.5" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 className="card-heading">Rent to Own</h3>
                <p className="card-text">Fixed monthly rent until owned. Landlord friendly.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="expert-repair-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <h2 className="section-heading section-heading--spaced">Benefits of Boiler Finance Scunthorpe</h2>
            <p className="section-text">Spread the cost of a new efficient boiler without high upfront expense. <strong>0% boiler finance North Lincolnshire</strong> makes upgrades affordable.</p>
            <ul className="section-list">
              <li>No large deposit required</li>
              <li>Fixed monthly payments</li>
              <li>Combine with grants for £0 payments</li>
              <li>Instant approval online</li>
              <li>Gas Safe installation included</li>
              <li>Energy bill savings from day 1</li>
            </ul>
            <div className="section-cta-group">
              <a href="#contact-form" className="cta-button cta-button--nowrap">Apply Now</a>
            </div>
          </div>
        </section>

        {/* Grants Tie-in */}
        <section className="gas-service-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <h2 className="section-heading section-heading--spaced">Combine Finance with Boiler Grants</h2>
            <p className="section-text">Eligible for ECO4 grants? Up to £7,500 off your new boiler. Finance the balance at 0%. <a href="/boiler-grants-scunthorpe">Check boiler grants Scunthorpe eligibility</a>.</p>
            <div className="section-cta-group">
              <a href="/boiler-grants-scunthorpe" className="cta-button cta-button--nowrap">Grants Page</a>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="faqs-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <h2 className="section-heading section-heading--spaced">Boiler Finance FAQs Scunthorpe</h2>
            <div className="faq-accordion">
              {faqData.map((faq, index) => (
                <div key={index} className={`faq-item ${faqActive === index ? 'active' : ''}`}>
                  <h3 className="faq-question" onClick={() => toggleFaq(index)} role="button" tabIndex="0" aria-expanded={faqActive === index}>{faq.question}</h3>
                  <div className="faq-answer" aria-hidden={faqActive !== index} dangerouslySetInnerHTML={{__html: faq.answer}} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote */}
        <section className="free-quote-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <h2 className="section-heading">Apply for Your Boiler Finance Quote</h2>
            <p className="section-text section-text--intro">Quick application. Subject to affordability checks.</p>
            <div id="contact-form">
              <QuoteForm />
            </div>
          </div>
        </section>
      </main>

      <style>{`
        /* Same styles as GasBoilerBrandsScunthorpe.js - copy entire style block */
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
        .services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; margin-top: 3rem; }
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

export default BoilerFinanceScunthorpe;
