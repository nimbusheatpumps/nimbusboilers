import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import QuoteForm from './QuoteForm';

const BoilerGrantsScunthorpe = () => {
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
      question: "Who qualifies for boiler grants in Scunthorpe?",
      answer: "Eligible households include those receiving benefits (e.g., Pension Credit, Universal Credit), low-income households with annual income under £31,400, properties with EPC rating D-G, and Scunthorpe postcodes (DN15, DN16, DN17)."
    },
    {
      question: "How much funding is available through boiler grants?",
      answer: "Up to £7,500 in fully funded grants for installing an A-rated gas boiler or air source heat pump under ECO4 and Boiler Upgrade Scheme."
    },
    {
      question: "What does the £7,500 boiler grant cover?",
      answer: "The grant covers the complete cost of new A-rated boiler or heat pump installation, including old boiler removal, pipework, controls, and commissioning - no upfront costs."
    },
    {
      question: "How long does the boiler grant process take in North Lincolnshire?",
      answer: "Typically 4-8 weeks from eligibility confirmation to complete installation, subject to scheme processing and installer scheduling."
    },
    {
      question: "Is there any cost to check my boiler grant eligibility?",
      answer: "No, Nimbus Boilers offers completely free eligibility assessments and grant application support for Scunthorpe residents."
    },
    {
      question: "Can I get a free boiler grant if I own my home?",
      answer: "Yes, homeowners and private tenants qualify if meeting income, benefits, and EPC criteria under ECO4 government schemes."
    }
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Boiler Grants Scunthorpe | Up to £7,500 Funding for New Boiler Installation",
    "description": "Discover boiler grants Scunthorpe up to £7,500 for eligible households through ECO4 and Boiler Upgrade Scheme. Free boiler grant check North Lincolnshire - benefits recipients and low income EPC D-G properties qualify for fully funded A-rated boiler replacement.",
    "author": {
      "@type": "Organization",
      "name": "Nimbus Boilers & Heat Pumps"
    },
    "datePublished": "2025-01-01",
    "publisher": {
      "@type": "Organization",
      "name": "Nimbus Boilers & Heat Pumps",
      "logo": {
        "@type": "ImageObject",
        "url": "https://nimbusheatpumps.co.uk/wp-content/uploads/2025/06/Nimbus-Heat-Pumps-Logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://nimbusboilers-scunthorpe.vercel.app/boiler-grants-scunthorpe"
    }
  };

  return (
    <>
      <Helmet>
        <title>Boiler Grants Scunthorpe | Up to £7,500 Funding for New Boiler Installation</title>
        <meta name="description" content="Free boiler grants Scunthorpe up to £7,500 ECO4 funding for eligible North Lincolnshire households. Boiler replacement grant for low income & benefits recipients - EPC D-G properties. No upfront costs with Nimbus." />
        <meta name="keywords" content="boiler grants Scunthorpe, free boiler grant North Lincolnshire, £7500 boiler replacement grant Scunthorpe, ECO4 boiler grant, gas boiler upgrade grant, boiler upgrade scheme Scunthorpe, heat pump grants" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://nimbusboilers-scunthorpe.vercel.app/boiler-grants-scunthorpe" />
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
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
            <a href="/" className="nimbus-logo-link" aria-label="Nimbus Boilers & Heat Pumps home">
              <img decoding="async" src="https://nimbusheatpumps.co.uk/wp-content/uploads/2025/06/Nimbus-Heat-Pumps-Logo.png" alt="Nimbus Boilers & Heat Pumps - Boiler Grants Scunthorpe" className="nimbus-logo" loading="lazy" />
            </a>
            <button className={`nimbus-mobile-toggle ${menuActive ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle navigation menu" aria-expanded={menuActive} aria-controls="nimbusMenu">
              <span></span>
              <span></span>
              <span></span>
            </button>
            <ul className={`nimbus-menu ${menuActive ? 'active' : ''}`} id="nimbusMenu">
              <li className="nimbus-menu-item">
                <a href="/faq" className="nimbus-link">FAQ</a>
              </li>
              <li className="nimbus-menu-item">
                <a href="/areas" className="nimbus-link">Areas Covered</a>
              </li>
              <li className="nimbus-menu-item">
                <a href="/boiler-grants-scunthorpe" className="nimbus-link">£7,500 Boiler Grants Scunthorpe</a>
              </li>
              <li className={`nimbus-menu-item nimbus-has-dropdown ${dropdownActive === 0 ? 'dropdown-active' : ''}`}>
                <a href="#" className="nimbus-link" onClick={(e) => {e.preventDefault(); toggleDropdown(0);}}>
                  Heat Pump & Boiler Manufacturers <span>▼</span>
                </a>
                <ul className="nimbus-dropdown">
                  <li className="nimbus-dropdown-item">
                    <a href="https://www.alpha-innovation.co.uk/products-category/air-source-heat-pumps" className="nimbus-dropdown-link" target="_blank" rel="noopener noreferrer">Alpha Heat Pumps</a>
                  </li>
                  <li className="nimbus-dropdown-item">
                    <a href="https://www.ariston.com/uk/" className="nimbus-dropdown-link" target="_blank" rel="noopener noreferrer">Ariston Boilers</a>
                  </li>
                  <li className="nimbus-dropdown-item">
                    <a href="https://www.baxi.co.uk/" className="nimbus-dropdown-link" target="_blank" rel="noopener noreferrer">Baxi</a>
                  </li>
                  <li className="nimbus-dropdown-item">
                    <a href="https://www.glow-worm.co.uk/" className="nimbus-dropdown-link" target="_blank" rel="noopener noreferrer">Glow-worm</a>
                  </li>
                  <li className="nimbus-dropdown-item">
                    <a href="https://www.viessmann.co.uk/" className="nimbus-dropdown-link" target="_blank" rel="noopener noreferrer">Viessmann</a>
                  </li>
                  <li className="nimbus-dropdown-item">
                    <a href="https://www.worcester-bosch.co.uk/" className="nimbus-dropdown-link" target="_blank" rel="noopener noreferrer">Worcester Bosch</a>
                  </li>
                </ul>
              </li>
              <li className="nimbus-menu-item">
                <a href="/" className="nimbus-link">Home</a>
              </li>
              <li className={`nimbus-menu-item nimbus-has-dropdown ${dropdownActive === 1 ? 'dropdown-active' : ''}`}>
                <a href="#" className="nimbus-link" onClick={(e) => {e.preventDefault(); toggleDropdown(1);}}>
                  Policies <span>▼</span>
                </a>
                <ul className="nimbus-dropdown">
                  <li className="nimbus-dropdown-item">
                    <a href="/privacy-policy" className="nimbus-dropdown-link">Privacy Policy</a>
                  </li>
                  <li className="nimbus-dropdown-item">
                    <a href="/terms-conditions" className="nimbus-dropdown-link">Terms & Conditions</a>
                  </li>
                  <li className="nimbus-dropdown-item">
                    <a href="/cookie-policy" className="nimbus-dropdown-link">Cookie Policy</a>
                  </li>
                </ul>
              </li>
              <li className="nimbus-menu-item nimbus-social-item">
                <div className="nimbus-social">
                  <a href="https://facebook.com/nimbusheatpumps" className="social-link" aria-label="Facebook" target="_blank" rel="noopener">
                    <span aria-hidden="true">📘</span>
                  </a>
                  <a href="tel:+447487546550" className="social-link" aria-label="Call">
                    📞
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className="nimbus-cta-container">
            <div className="nimbus-cta-row">
              <a href="/quote" className="nimbus-cta nimbus-cta-primary">Free Grant Check</a>
              <a href="#contact-form" className="nimbus-cta nimbus-cta-secondary">Get Quote</a>
              <a href="mailto:info@nimbusheatpumps.co.uk" className="nimbus-cta nimbus-cta-primary">Email</a>
              <a href="tel:+447487546550" className="nimbus-cta nimbus-cta-secondary">Call</a>
            </div>
          </div>
        </div>
      </nav>
      <div className="install-banner">
        <div className="banner-wrapper">
          <h2 className="banner-label">Every boiler grant includes:</h2>
          <div className="banner-scroller" aria-live="polite">
            <div className="banner-track">
              <div className="banner-items">
                <span className="banner-item">Free eligibility check</span>
                <span className="banner-item">£7,500 funding</span>
                <span className="banner-item">ECO4 approved</span>
                <span className="banner-item">A-rated boiler</span>
                <span className="banner-item">No upfront cost</span>
              </div>
              <div className="banner-items" aria-hidden="true">
                <span className="banner-item">Free eligibility check</span>
                <span className="banner-item">£7,500 funding</span>
                <span className="banner-item">ECO4 approved</span>
                <span className="banner-item">A-rated boiler</span>
                <span className="banner-item">No upfront cost</span>
              </div>
            </div>
          </div>
        </div>
        <p className="banner-footnote">Government approved schemes • Fully funded for eligible households</p>
      </div>
      <main>
        <section className="hero-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '50px'}}>
            <div style={{flex: '1 1 400px', textAlign: 'center'}}>
              <h1 className="section-heading section-heading--hero">Boiler Grants Scunthorpe | Up to £7,500 Funding for New Boiler Installation</h1>
              <h2 className="section-subheading">Free Boiler Grant North Lincolnshire | ECO4 Boiler Replacement Funding</h2>
              <p className="section-text section-text--intro section-text--compact">Eligible Scunthorpe households can get up to <strong>£7,500 free boiler grant</strong> through government ECO4 and Boiler Upgrade Scheme. No upfront costs for A-rated boiler or heat pump replacement. Free eligibility check by Nimbus.</p>
              <div className="section-cta-group">
                <a href="#contact-form" className="cta-button cta-button--nowrap">Check Eligibility Free</a>
                <a href="/quote" className="cta-button cta-button--nowrap">Instant Quote</a>
              </div>
            </div>
            <div style={{flex: '1 1 300px', maxWidth: '400px'}}>
              <img decoding="async" src="https://nimbusheatpumps.co.uk/wp-content/uploads/2025/06/iStock-2211126281-scaled.jpg" alt="boiler grants Scunthorpe £7500 funding new installation" style={{width: '100%', height: 'auto', borderRadius: '8px'}} loading="lazy" />
            </div>
          </div>
        </section>
        <section className="our-services-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <h2 className="section-heading section-heading--spaced">Boiler Grants Services in Scunthorpe</h2>
            <div className="services-grid">
              <div className="service-card">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{margin: '0 auto 20px'}}>
                  <circle cx="12" cy="12" r="12" fill="#00a676"/>
                  <path d="M6 12.5L10 16.5L18 7.5" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 className="card-heading">Free Eligibility Check</h3>
                <p className="card-text">Complete assessment for ECO4 and Boiler Upgrade Scheme qualification.</p>
              </div>
              <div className="service-card">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{margin: '0 auto 20px'}}>
                  <circle cx="12" cy="12" r="12" fill="#00a676"/>
                  <path d="M6 12.5L10 16.5L18 7.5" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 className="card-heading">Grant Application Help</h3>
                <p className="card-text">Expert assistance with paperwork and scheme submission.</p>
              </div>
              <div className="service-card">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{margin: '0 auto 20px'}}>
                  <circle cx="12" cy="12" r="12" fill="#00a676"/>
                  <path d="M6 12.5L10 16.5L18 7.5" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 className="card-heading">A-Rated Boiler Install</h3>
                <p className="card-text">Fully funded installation of energy-efficient boilers.</p>
              </div>
              <div className="service-card">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{margin: '0 auto 20px'}}>
                  <circle cx="12" cy="12" r="12" fill="#00a676"/>
                  <path d="M6 12.5L10 16.5L18 7.5" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 className="card-heading">Heat Pump Upgrades</h3>
                <p className="card-text">£7,500 grants for air source heat pump installations.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="expert-repair-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <h2 className="section-heading section-heading--spaced">£7,500 Boiler Grants Scunthorpe - ECO4 Funding</h2>
            <p className="section-text">Nimbus helps Scunthorpe residents access <strong>boiler grants Scunthorpe</strong> and <strong>free boiler grant North Lincolnshire</strong>. Government schemes provide up to <strong>£7500 boiler replacement grant</strong> for eligible homes.</p>
            <p className="section-text">ECO4 targets energy inefficient homes (EPC D-G) with low-income households and benefits recipients.</p>
            <h3 className="card-heading" style={{textAlign: 'center', marginBottom: '20px', fontSize: '22px'}}>Eligibility for Boiler Grants</h3>
            <ul className="section-list">
              <li>Receiving qualifying benefits (Pension Credit, Universal Credit, etc.)</li>
              <li>Household income under £31,400 per year</li>
              <li>EPC rating D, E, F or G</li>
              <li>Scunthorpe postcodes DN15-17</li>
              <li>Gas boiler over 10 years old (preferred)</li>
            </ul>
            <div className="section-cta-group">
              <a href="#contact-form" className="cta-button cta-button--nowrap">Check Eligibility Now</a>
            </div>
          </div>
        </section>
        <section className="gas-service-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <h2 className="section-heading section-heading--spaced">What Your Boiler Grant Includes</h2>
            <p className="section-text"><strong>£7,500 covers</strong> complete A-rated boiler or heat pump system with no upfront payment. Fully funded for approved applicants.</p>
            <ul className="section-list">
              <li>New A-rated condensing boiler or air source heat pump</li>
              <li>Old boiler safe removal and disposal</li>
              <li>Full central heating system upgrade</li>
              <li>Smart controls and TRVs</li>
              <li>10-year manufacturer warranty</li>
              <li>Gas Safe certified installation</li>
            </ul>
            <div className="section-cta-group">
              <a href="#contact-form" className="cta-button cta-button--nowrap">Apply for Grant</a>
            </div>
          </div>
        </section>
        <section className="faqs-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <h2 className="section-heading section-heading--spaced">Boiler Grants Scunthorpe FAQ</h2>
            <div className="faq-accordion">
              {faqData.map((faq, index) => (
                <div key={index} className={`faq-item ${faqActive === index ? 'active' : ''}`}>
                  <h3 className="faq-question" onClick={() => toggleFaq(index)} role="button" tabIndex="0" aria-expanded={faqActive === index} aria-controls={`faq-answer-${index}`}>
                    {faq.question}
                  </h3>
                  <div className="faq-answer" id={`faq-answer-${index}`} role="region" aria-labelledby={`faq-question-${index}`} aria-hidden={faqActive !== index}>
                    {faq.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="testimonials-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <h2 className="section-heading section-heading--spaced">Customer Success with Boiler Grants</h2>
            <div className="testimonials-carousel-wrapper">
              <div className="testimonials-carousel">
                <div className="testimonial-card">
                  <div className="testimonial-stars">★★★★★</div>
                  <p>"Got our full £7,500 grant approved quickly. New boiler installed free - fantastic service!" - J. Smith, DN16</p>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-stars">★★★★★</div>
                  <p>"Free eligibility check and smooth process. Heat pump funded 100%. Highly recommend." - M. Brown, Scunthorpe</p>
                </div>
              </div>
            </div>
            <div className="section-cta-group section-cta-group--spaced">
              <a href="https://www.google.com/search?q=nimbus+boilers+reviews" target="_blank" rel="noopener noreferrer" className="cta-button cta-button--nowrap">
                Read Google Reviews
              </a>
            </div>
          </div>
        </section>
        <section className="free-quote-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <h2 className="section-heading">Check Boiler Grant Eligibility Free</h2>
            <p className="section-text section-text--intro">Complete the form below for your free <strong>ECO4 boiler grant</strong> assessment in Scunthorpe.</p>
            <div id="contact-form">
              <QuoteForm />
            </div>
          </div>
        </section>
      </main>
      <style>{`
        :root {
          --primary-green: #00a676;
          --dark-green: #00855a;
          --light-green: #b3e5c6;
          --white: #ffffff;
          --off-white: #f8f9fa;
          --gray-100: #f8f9fa;
          --gray-200: #e9ecef;
          --gray-300: #dee2e6;
          --gray-400: #ced4da;
          --gray-500: #adb5bd;
          --gray-600: #6c757d;
          --gray-700: #495057;
          --gray-800: #343a40;
          --gray-900: #212529;
          --black: #000000;
          --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
          --shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
          --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
          --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
          --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
          --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
          --border-radius: 0.5rem;
          --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        * { box-sizing: border-box; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: var(--gray-900); margin: 0; }
        /* Nav styles */
        .nimbus-nav { background: var(--white); box-shadow: var(--shadow-md); position: sticky; top: 0; z-index: 100; }
        .nimbus-nav-container { max-width: 1400px; margin: 0 auto; display: flex; align-items: center; padding: 1rem 2rem; }
        .nimbus-nav-inner { flex: 1; display: flex; align-items: center; }
        .nimbus-logo { height: 40px; width: auto; }
        .nimbus-mobile-toggle { display: none; flex-direction: column; background: none; border: none; cursor: pointer; padding: 0.5rem; }
        .nimbus-mobile-toggle span { display: block; width: 25px; height: 3px; background: var(--gray-900); margin: 3px 0; transition: var(--transition); }
        .nimbus-mobile-toggle.active span:nth-child(1) { transform: rotate(45deg) translate(6px, 6px); }
        .nimbus-mobile-toggle.active span:nth-child(2) { opacity: 0; }
        .nimbus-mobile-toggle.active span:nth-child(3) { transform: rotate(-45deg) translate(6px, -6px); }
        .nimbus-menu { display: flex; list-style: none; margin: 0; padding: 0; gap: 2rem; }
        .nimbus-menu-item { position: relative; }
        .nimbus-link { color: var(--gray-900); text-decoration: none; font-weight: 500; transition: var(--transition); }
        .nimbus-link:hover { color: var(--primary-green); }
        .nimbus-has-dropdown { }
        .nimbus-dropdown { position: absolute; top: 100%; left: 0; background: var(--white); min-width: 200px; box-shadow: var(--shadow-lg); opacity: 0; visibility: hidden; transform: translateY(-10px); transition: var(--transition); list-style: none; padding: 1rem 0; margin: 0; border-radius: var(--border-radius); }
        .nimbus-has-dropdown.dropdown-active .nimbus-dropdown { opacity: 1; visibility: visible; transform: translateY(0); }
        .nimbus-dropdown-link { display: block; padding: 0.5rem 2rem; color: var(--gray-900); text-decoration: none; transition: var(--transition); }
        .nimbus-dropdown-link:hover { background: var(--gray-100); color: var(--primary-green); }
        .nimbus-social { display: flex; gap: 1rem; }
        .nimbus-cta-container { display: none; }
        @media (min-width: 1024px) { .nimbus-mobile-toggle { display: none; } .nimbus-cta-container { display: block; } .nimbus-cta-row { display: flex; gap: 1rem; } .nimbus-cta { padding: 0.75rem 1.5rem; border-radius: var(--border-radius); text-decoration: none; font-weight: 600; transition: var(--transition); } .nimbus-cta-primary { background: var(--primary-green); color: var(--white); } .nimbus-cta-primary:hover { background: var(--dark-green); } .nimbus-cta-secondary { color: var(--primary-green); border: 2px solid var(--primary-green); } .nimbus-cta-secondary:hover { background: var(--primary-green); color: var(--white); } }
        @media (max-width: 1023px) { .nimbus-menu { position: fixed; top: 0; left: 0; width: 100%; height: 100vh; background: var(--white); flex-direction: column; padding: 5rem 2rem 2rem; transform: translateX(-100%); transition: var(--transition); } .nimbus-menu.active { transform: translateX(0); } .nimbus-nav-container { flex-direction: column; gap: 1rem; } .nimbus-nav-inner { width: 100%; justify-content: space-between; } .nimbus-mobile-toggle { display: flex; order: 3; } .nimbus-menu-item { margin-bottom: 1rem; } .nimbus-has-dropdown .nimbus-dropdown { position: static; opacity: 1; visibility: visible; transform: none; box-shadow: none; padding-left: 2rem; max-height: 0; overflow: hidden; } .nimbus-has-dropdown.dropdown-active .nimbus-dropdown { max-height: 500px; } }
        /* Banner */
        .install-banner { background: linear-gradient(135deg, var(--primary-green), var(--light-green)); color: var(--white); overflow: hidden; padding: 1rem 0; }
        .banner-wrapper { max-width: 1400px; margin: 0 auto; padding: 0 2rem; }
        .banner-label { font-size: 1.125rem; font-weight: 700; margin-bottom: 1rem; text-align: center; }
        .banner-scroller { overflow: hidden; }
        .banner-track { display: flex; animation: scroll 30s linear infinite; }
        .banner-items { display: flex; gap: 3rem; white-space: nowrap; min-width: max-content; }
        .banner-item { font-weight: 600; font-size: 1rem; padding: 0.5rem 1rem; background: rgba(255,255,255,0.2); border-radius: var(--border-radius); backdrop-filter: blur(10px); }
        .banner-footnote { text-align: center; font-size: 0.875rem; opacity: 0.9; margin-top: 0.5rem; }
        @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        /* Sections */
        .section { padding: 4rem 0; }
        .nimbus-section-base { background: var(--off-white); }
        .section-heading { font-size: clamp(2rem, 5vw, 3.5rem); font-weight: 800; line-height: 1.1; margin-bottom: 1rem; color: var(--gray-900); text-align: center; }
        .section-heading--hero { font-size: clamp(2.5rem, 6vw, 4rem); }
        .section-heading--spaced { margin-bottom: 2rem; }
        .section-subheading { font-size: 1.5rem; font-weight: 600; color: var(--gray-700); text-align: center; margin-bottom: 1.5rem; }
        .section-text { font-size: 1.125rem; line-height: 1.7; max-width: 700px; margin: 0 auto 2rem; text-align: center; }
        .section-text--intro { font-size: 1.25rem; }
        .section-text--compact { margin-bottom: 2rem; }
        .section-list { max-width: 700px; margin: 2rem auto; list-style: none; padding: 0; }
        .section-list li { font-size: 1.125rem; padding: 1rem 0; border-bottom: 1px solid var(--gray-200); position: relative; padding-left: 2rem; }
        .section-list li:before { content: '✓'; position: absolute; left: 0; color: var(--primary-green); font-weight: bold; font-size: 1.25rem; }
        .section-cta-group { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; margin-top: 2rem; }
        .cta-button { padding: 1rem 2rem; font-size: 1.125rem; font-weight: 600; border-radius: var(--border-radius); text-decoration: none; transition: var(--transition); box-shadow: var(--shadow-lg); }
        .cta-button--nowrap { white-space: nowrap; }
        .cta-button--primary { background: var(--primary-green); color: var(--white); }
        .cta-button:hover { transform: translateY(-2px); box-shadow: var(--shadow-xl); }
        /* Services */
        .services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; margin-top: 3rem; }
        .service-card { background: var(--white); padding: 2.5rem 2rem; border-radius: var(--border-radius); box-shadow: var(--shadow-md); text-align: center; transition: var(--transition); }
        .service-card:hover { transform: translateY(-5px); box-shadow: var(--shadow-xl); }
        .card-heading { font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem; color: var(--gray-900); }
        .card-text { color: var(--gray-700); line-height: 1.6; }
        /* FAQ */
        .faq-accordion { max-width: 800px; margin: 0 auto; }
        .faq-item { border-bottom: 1px solid var(--gray-200); margin-bottom: 1rem; }
        .faq-question { font-size: 1.25rem; font-weight: 600; padding: 1.5rem 0; cursor: pointer; color: var(--gray-900); position: relative; }
        .faq-question:after { content: '+'; position: absolute; right: 0; top: 50%; transform: translateY(-50%); font-size: 1.5rem; font-weight: bold; transition: var(--transition); }
        .faq-item.active .faq-question:after { content: '−'; transform: translateY(-50%) rotate(0deg); }
        .faq-answer { max-height: 0; overflow: hidden; transition: var(--transition); padding: 0 0 0 1rem; color: var(--gray-700); font-size: 1.1rem; }
        .faq-item.active .faq-answer { max-height: 500px; padding: 1.5rem 0; }
        /* Testimonials */
        .testimonials-carousel-wrapper { overflow: hidden; margin: 3rem 0; }
        .testimonials-carousel { display: flex; gap: 2rem; animation: scrollTest 20s linear infinite; }
        .testimonial-card { flex: 0 0 400px; background: var(--white); padding: 2rem; border-radius: var(--border-radius); box-shadow: var(--shadow-md); text-align: center; }
        .testimonial-stars { color: #fbbf24; font-size: 1.5rem; margin-bottom: 1rem; }
        @keyframes scrollTest { 0% { transform: translateX(0); } 100% { transform: translateX(-100%); } }
        /* Responsive */
        @media (max-width: 768px) { .section { padding: 2rem 1rem; } .services-grid { grid-template-columns: 1fr; } .section-cta-group { flex-direction: column; align-items: center; } .cta-button { width: 100%; max-width: 300px; text-align: center; } }
        /* Additional styles for completeness */
        .sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0; }
      `}</style>
    </>
  );
};

export default BoilerGrantsScunthorpe;
