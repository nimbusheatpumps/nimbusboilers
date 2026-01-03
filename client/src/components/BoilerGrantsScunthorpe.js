import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import QuoteForm from './QuoteForm';
import { 
  PlusIcon, 
  MinusIcon, 
  Bars3Icon, 
  XMarkIcon 
} from '@heroicons/react/24/outline';

const BoilerGrantsScunthorpe = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [dropdownActive, setDropdownActive] = useState(null);
  const [faqActive, setFaqActive] = useState(null);

  const toggleMenu = () => setMenuActive(!menuActive);
  const toggleDropdown = (index) => setDropdownActive(dropdownActive === index ? null : index);
  const toggleFaq = (index) => setFaqActive(faqActive === index ? null : index);

  const faqData = [
    {
      question: "Am I eligible for boiler grant Scunthorpe?",
      answer: "You may be eligible if you live in Scunthorpe or North Lincolnshire, your household income is under £31,400, your home has EPC rating D-G, you receive benefits like Pension Credit or Universal Credit, and your boiler is over 8-10 years old."
    },
    {
      question: "How much is the boiler grant in Scunthorpe?",
      answer: "Up to £7,500 grant available through ECO4 and Great British Insulation Scheme for fully funded gas boiler replacement."
    },
    {
      question: "What is ECO4 scheme for boiler grants?",
      answer: "ECO4 is the Energy Company Obligation scheme providing free or heavily subsidised energy efficiency upgrades including boiler replacements for low-income and vulnerable households."
    },
    {
      question: "Can tenants apply for free boiler grants?",
      answer: "Yes, tenants can apply for boiler grants with landlord permission."
    },
    {
      question: "How to apply for boiler grants Scunthorpe?",
      answer: "Check eligibility with our free tool, then we arrange survey and installation if qualified."
    },
    {
      question: "Is the new boiler Gas Safe installed?",
      answer: "Yes, all installations by certified Gas Safe engineers."
    }
  ];

  const schemaLocalBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://nimbusheatpumps.co.uk/#organization",
    "name": "Nimbus Heat Pumps Ltd",
    "alternateName": "Nimbus Boilers & Heat Pumps",
    "url": "https://nimbusheatpumps.co.uk/",
    "logo": "https://nimbusheatpumps.co.uk/wp-content/uploads/2025/06/Nimbus-Heat-Pumps-Logo.png",
    "description": "Assistance with boiler grants, free boiler replacement through ECO4 in Scunthorpe and North Lincolnshire. Gas Safe registered.",
    "image": "https://nimbusheatpumps.co.uk/wp-content/uploads/2025/06/iStock-2211126281-scaled.jpg",
    "telephone": "01724 622069",
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
        "@type": "Place",
        "name": "North Lincolnshire"
      },
      {
        "@type": "Place",
        "name": "Scunthorpe"
      }
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Boiler Grants Scunthorpe",
          "description": "ECO4 funded free gas boiler replacement."
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
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
    "currenciesAccepted": "GBP",
    "sameAs": [
      "https://x.com/NimbusHeatPumps",
      "https://www.facebook.com/profile.php?id=61579773217395"
    ]
  };

  const schemaService = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Boiler Grants Scunthorpe",
    "provider": {
      "@id": "https://nimbusheatpumps.co.uk/#organization",
      "@type": "LocalBusiness"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Scunthorpe, North Lincolnshire"
    },
    "serviceType": "Boiler Grant Application & Replacement",
    "description": "Free gas boiler replacement grants up to &pound;7,500 via ECO4 and GBIS for eligible households in Scunthorpe.",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "GBP",
      "price": "0",
      "itemConditioned": "https://schema.org/NewCondition"
    }
  };

  const schemaBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://nimbusheatpumps.co.uk/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Boiler Grants Scunthorpe",
        "item": "https://nimbusheatpumps.co.uk/boiler-grants-scunthorpe/"
      }
    ]
  };

  const schemaArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Boiler Grants Scunthorpe | Up to £7,500 Free Gas Boiler Replacement",
    "description": "Comprehensive guide to ECO4 and Great British Insulation Scheme boiler grants in Scunthorpe for free gas boiler replacement.",
    "author": {
      "@type": "Organization",
      "name": "Nimbus Heat Pumps Ltd",
      "url": "https://nimbusheatpumps.co.uk/"
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
    "image": "https://nimbusheatpumps.co.uk/wp-content/uploads/2025/06/iStock-2211126281-scaled.jpg",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://nimbusheatpumps.co.uk/boiler-grants-scunthorpe/"
    }
  };

  const schemaFAQ = {
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
        <title>Boiler Grants Scunthorpe | Up to £7,500 Free Gas Boiler Replacement | North Lincolnshire</title>
        <meta name="description" content="Gas boiler grants Scunthorpe - up to £7,500 free boiler replacement through ECO4 for low-income households, pensioners, benefits recipients in North Lincolnshire. Check eligibility free today." />
        <meta name="keywords" content="gas boiler grants Scunthorpe, free boiler installation North Lincolnshire, ECO4 boiler grant Scunthorpe, Great British Insulation Scheme, boiler replacement grant, free gas boiler Scunthorpe" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://nimbusheatpumps.co.uk/boiler-grants-scunthorpe/" />
        <script type="application/ld+json">
          {JSON.stringify(schemaLocalBusiness)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(schemaService)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(schemaBreadcrumb)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(schemaArticle)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(schemaFAQ)}
        </script>
      </Helmet>

      <nav className="nimbus-nav" aria-label="Main navigation">
        <div className="nimbus-nav-container">
          <div className="nimbus-nav-inner">
            <a href="/" className="nimbus-logo-link" aria-label="Nimbus Boilers & Heat Pumps home">
              <img decoding="async" src="https://nimbusheatpumps.co.uk/wp-content/uploads/2025/06/Nimbus-Heat-Pumps-Logo.png" alt="Nimbus Boilers & Heat Pumps - Boiler Grants Scunthorpe" className="nimbus-logo" loading="lazy" />
            </a>
            <button 
              className={`nimbus-mobile-toggle ${menuActive ? 'active' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
              aria-expanded={menuActive}
            >
              {menuActive ? (
                <XMarkIcon className="h-6 w-6 text-white" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-white" />
              )}
            </button>
            <ul className={`nimbus-menu ${menuActive ? 'active' : ''}`} id="nimbusMenu">
              <li className="nimbus-menu-item">
                <a href="/faq" className="nimbus-link">FAQ</a>
              </li>
              <li className="nimbus-menu-item">
                <a href="/areas-covered" className="nimbus-link">Areas Covered</a>
              </li>
              <li className="nimbus-menu-item">
                <a href="/gas-boiler-service-scunthorpe" className="nimbus-link">Gas Boiler Service Scunthorpe</a>
              </li>
              <li className="nimbus-menu-item">
                <a href="/gas-boiler-installation-scunthorpe" className="nimbus-link">Gas Boiler Installation Scunthorpe</a>
              </li>
              <li className="nimbus-menu-item">
                <a href="/" className="nimbus-link">Home</a>
              </li>
            </ul>
          </div>
          <div className="nimbus-cta-container">
            <div className="nimbus-cta-row">
              <a href="#contact-form" className="nimbus-cta nimbus-cta-primary">Check Eligibility Free</a>
              <a href="/quote" className="nimbus-cta nimbus-cta-secondary">Instant Quote</a>
              <a href="tel:+447487546550" className="nimbus-cta nimbus-cta-primary">Call 07487 546550</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="install-banner">
        <div className="banner-wrapper">
          <h2 className="banner-label">Grants for low-income households, pensioners & benefits</h2>
          <div className="banner-scroller" aria-live="polite">
            <div className="banner-track">
              <div className="banner-items">
                <span className="banner-item">Household income under 31,400</span>
                <span className="banner-item">Pension Credit, UC recipients</span>
                <span className="banner-item">EPC D-G properties</span>
                <span className="banner-item">Homeowners & tenants</span>
                <span className="banner-item">Old inefficient boilers</span>
              </div>
              <div className="banner-items" aria-hidden="true">
                <span className="banner-item">Household income under 31,400</span>
                <span className="banner-item">Pension Credit, UC recipients</span>
                <span className="banner-item">EPC D-G properties</span>
                <span className="banner-item">Homeowners & tenants</span>
                <span className="banner-item">Old inefficient boilers</span>
              </div>
            </div>
          </div>
        </div>
        <p className="banner-footnote">ECO4 / GBIS fully funded grants | Gas Safe installation</p>
      </div>

      <main id="main-content">
        <section className="hero-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto', padding: '0 20px'}}>
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '50px'}}>
              <div style={{flex: '1 1 400px', textAlign: 'center'}}>
                <h1 className="section-heading section-heading--hero">Boiler Grants Scunthorpe</h1>
                <h2 className="section-subheading">Up to &pound;7,500 Free Gas Boiler Replacement | ECO4 North Lincolnshire</h2>
                <p className="section-text section-text--intro section-text--compact">Fully funded new gas boiler for qualifying low-income households, pensioners and benefits recipients. <strong>Gas boiler grants Scunthorpe</strong> and <strong>free boiler installation North Lincolnshire</strong>.</p>
                <div className="section-cta-group">
                  <a href="#contact-form" className="cta-button cta-button--primary cta-button--nowrap">Check Eligibility Free</a>
                  <a href="/quote" className="cta-button cta-button--secondary cta-button--nowrap">Instant Quote</a>
                </div>
              </div>
              <div style={{flex: '1 1 400px', maxWidth: '400px'}}>
                <img decoding="async" src="https://nimbusheatpumps.co.uk/wp-content/uploads/2025/06/iStock-2211126281-scaled.jpg" alt="gas boiler grants Scunthorpe free replacement" style={{width: '100%', height: 'auto', borderRadius: '8px'}} loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        <section className="our-services-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto', padding: '0 20px'}}>
            <h2 className="section-heading section-heading--spaced">Boiler Grants Services in Scunthorpe</h2>
            <div className="services-grid">
              <div className="service-card">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{margin: '0 auto 20px'}}>
                  <circle cx="12" cy="12" r="12" fill="#00a676"/>
                  <path d="M6 12.5L10 16.5L18 7.5" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 className="card-heading">ECO4 / GBIS Grants</h3>
                <p className="card-text">Up to £7,500 fully funded boiler replacement.</p>
              </div>
              <div className="service-card">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{margin: '0 auto 20px'}}>
                  <circle cx="12" cy="12" r="12" fill="#00a676"/>
                  <path d="M6 12.5L10 16.5L18 7.5" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 className="card-heading">Eligibility Assessment</h3>
                <p className="card-text">Free check for grant qualification.</p>
              </div>
              <div className="service-card">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{margin: '0 auto 20px'}}>
                  <circle cx="12" cy="12" r="12" fill="#00a676"/>
                  <path d="M6 12.5L10 16.5L18 7.5" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 className="card-heading">Home Energy Survey</h3>
                <p className="card-text">Professional EPC and boiler inspection.</p>
              </div>
              <div className="service-card">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{margin: '0 auto 20px'}}>
                  <circle cx="12" cy="12" r="12" fill="#00a676"/>
                  <path d="M6 12.5L10 16.5L18 7.5" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 className="card-heading">Gas Safe Installation</h3>
                <p className="card-text">New A-rated boiler fitted free.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="expert-repair-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto', padding: '0 20px'}}>
            <h2 className="section-heading section-heading--spaced">Eligibility for Boiler Grants Scunthorpe</h2>
            <p className="section-text">Qualify for <strong>gas boiler grants Scunthorpe</strong> if you meet these criteria:</p>
            <ul className="section-list">
              <li><strong>Location:</strong> Homeowners/tenants in Scunthorpe, North Lincolnshire</li>
              <li><strong>Income:</strong> Household income under 31,400</li>
              <li><strong>EPC:</strong> Property rating D, E, F or G</li>
              <li><strong>Benefits:</strong> Pension Credit, Universal Credit, Child Tax Credit, etc.</li>
              <li><strong>Boiler:</strong> Over 8-10 years old or inefficient G-rated</li>
            </ul>
            <p className="section-text">We help with the full process from eligibility to <a href="/gas-boiler-installation-scunthorpe">gas boiler installation Scunthorpe</a>.</p>
            <div className="section-cta-group">
              <a href="#contact-form" className="cta-button cta-button--nowrap">Check Eligibility Free</a>
            </div>
          </div>
        </section>

        <section className="gas-service-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto', padding: '0 20px'}}>
            <h2 className="section-heading section-heading--spaced">How to Apply for Free Boiler Grants</h2>
            <p className="section-text">1. Check eligibility<br/>2. Free survey<br/>3. Grant approval<br/>4. Free installation</p>
            <div className="section-cta-group">
              <a href="#contact-form" className="cta-button cta-button--nowrap">Apply Now - Free Check</a>
            </div>
          </div>
        </section>

        <section className="faqs-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto', padding: '0 20px'}}>
            <h2 className="section-heading section-heading--spaced">Boiler Grants FAQ Scunthorpe</h2>
            <div className="faq-accordion">
              {faqData.map((faq, index) => (
                <div key={index} className={`faq-item ${faqActive === index ? 'active' : ''}`}>
                  <h3 className="faq-question flex justify-between items-center" onClick={() => toggleFaq(index)} role="button" tabIndex="0">
                    {faq.question}
                    <span>
                      {faqActive === index ? (
                        <MinusIcon className="h-5 w-5" />
                      ) : (
                        <PlusIcon className="h-5 w-5" />
                      )}
                    </span>
                  </h3>
                  <div className="faq-answer" style={{display: faqActive === index ? 'block' : 'none'}}>
                    {faq.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="free-quote-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto', padding: '0 20px'}}>
            <h2 className="section-heading">Check Your Boiler Grant Eligibility Free</h2>
            <p className="section-text section-text--intro">No obligation. Takes 2 minutes.</p>
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
        .section-heading--hero { font-size: 3rem; color: white; text-shadow: 0 2px 4px rgba(0,0,0,0.3); }
        .section-subheading { font-size: 1.5rem; margin: 0 0 1.5rem; color: rgba(255,255,255,0.9); }
        .section-text { font-size: 1.1rem; margin: 0 0 1.5rem; max-width: 600px; }
        .section-text--intro { font-size: 1.2rem; }
        .section-text--compact { line-height: 1.5; }
        .section-cta-group { display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center; }
        .cta-button { padding: 1rem 2rem; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 1.1rem; transition: all 0.3s; display: inline-flex; align-items: center; justify-content: center; min-height: 50px; }
        .cta-button--primary { background: var(--orange); color: white; }
        .cta-button--primary:hover { background: #e55a2b; transform: translateY(-3px); box-shadow: 0 5px 15px rgba(255,107,53,0.4); }
        .cta-button--secondary { background: transparent; color: white; border: 2px solid white; }
        .cta-button--secondary:hover { background: white; color: var(--orange); }
        .cta-button--nowrap { white-space: nowrap; }
        .services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; margin-top: 3rem; }
        .service-card { text-align: center; padding: 2.5rem 1.5rem; border: 1px solid #e9ecef; border-radius: 12px; transition: all 0.3s; background: var(--light-gray); }
        .service-card:hover { transform: translateY(-5px); box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
        .card-heading { font-size: 1.4rem; margin: 1rem 0 0.5rem; color: var(--dark); }
        .card-text { color: var(--gray); margin: 0; }
        .section-list { max-width: 600px; margin: 2rem auto; padding-left: 1.5rem; }
        .section-list li { margin-bottom: 0.75rem; font-size: 1.1rem; }
        .section-list--numbered { list-style: decimal; }
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

export default BoilerGrantsScunthorpe;