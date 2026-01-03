import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import QuoteForm from './QuoteForm';
import { 
  PlusIcon, 
  MinusIcon, 
  Bars3Icon, 
  XMarkIcon 
} from '@heroicons/react/24/outline';

const CombiBoilerInstallationScunthorpe = () => {
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
      question: "How long does combi boiler installation take in Scunthorpe?",
      answer: "Standard combi boiler swaps take 1 day. System conversions or complex installs may take 2-3 days. Our Gas Safe engineers work efficiently to minimize disruption."
    },
    {
      question: "What size combi boiler do I need for my Scunthorpe home?",
      answer: "1-2 beds: 24-27kW (1 bath). 3 beds: 28-32kW (1 bath + shower). 4+ beds: 35-40kW (2+ baths). Free survey confirms exact sizing."
    },
    {
      question: "Are combi boilers suitable for all homes in North Lincolnshire?",
      answer: "Perfect for small-medium homes with good mains water pressure. Not ideal for large homes or low pressure areas - we advise during survey."
    },
    {
      question: "Which combi boiler brands do you install in Scunthorpe?",
      answer: "Worcester Bosch, Baxi, Ideal, Vaillant as accredited Gas Safe combi boiler fitters."
    },
    {
      question: "Do you offer emergency combi boiler replacement?",
      answer: "Yes, fast emergency combi boiler replacement service across Scunthorpe and North Lincolnshire."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Expert Combi Boiler Installation in Scunthorpe & North Lincolnshire | Nimbus Boilers</title>
        <meta name="description" content="Professional combi boiler installation Scunthorpe by Gas Safe engineers. Space-saving combi boilers, high efficiency, instant hot water, lower bills. Worcester Baxi Ideal combi fitter North Lincolnshire. Free quote." />
        <meta name="keywords" content="combi boiler installation Scunthorpe, combi boiler fitter North Lincolnshire, Worcester combi install Scunthorpe, Baxi combi boiler replacement, Ideal combi installation, emergency combi replacement Scunthorpe" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://nimbusboilers.co.uk/combi-boiler-installation-scunthorpe/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Combi Boiler Installation",
            "provider": {
              "@type": "Organization",
              "name": "Nimbus Boilers"
            },
            "areaServed": "Scunthorpe",
            "description": "Expert combi boiler installation services in Scunthorpe and North Lincolnshire by Gas Safe #966812 engineers.",
            "hasCredential": {
              "@type": "EducationalOccupationalCredential",
              "name": "Gas Safe #966812",
              "credentialCategory": "license"
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
            <a href="/" className="nimbus-logo-link" aria-label="Nimbus Boilers - Home">
              <img decoding="async" src="/images/nimbus-logo.webp" alt="Nimbus Boilers - Combi Boiler Installation Scunthorpe" className="nimbus-logo" loading="lazy" />
            </a>
            <button className={`nimbus-mobile-toggle ${menuActive ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle navigation menu" aria-expanded={menuActive} aria-controls="nimbusMenu">
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
                <a href="/boiler-grants-scunthorpe" className="nimbus-link">Boiler Grants</a>
              </li>
              <li className="nimbus-menu-item">
                <a href="/" className="nimbus-link">Home</a>
              </li>
              <li className="nimbus-menu-item nimbus-social-item">
                <div className="nimbus-social">
                  <a href="https://x.com/NimbusHeatPumps" target="_blank" rel="noopener noreferrer" title="Follow Nimbus Boilers on X" aria-label="Follow Nimbus Boilers on X">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path fill="#000" stroke="none" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61579773217395" target="_blank" rel="noopener noreferrer" title="Follow Nimbus Boilers on Facebook" aria-label="Follow Nimbus Boilers on Facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path fill="#1877F2" d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className="nimbus-cta-container">
            <div className="nimbus-cta-row">
              <a href="/quote" className="nimbus-cta nimbus-cta-primary">Combi Boiler Quote</a>
              <a href="#contact-form" className="nimbus-cta nimbus-cta-secondary" aria-label="Get Quote: Contact us for a free quote">Get Quote</a>
              <a href="mailto:info@nimbusboilers.co.uk" className="nimbus-cta nimbus-cta-primary">Email Us</a>
              <a href="tel:01724622069" className="nimbus-cta nimbus-cta-secondary" aria-label="Call Now: 01724 622069">Call Now</a>
            </div>
          </div>
        </div>
      </nav>
      <div className="install-banner">
        <div className="banner-wrapper">
          <h2 className="banner-label">Every combi boiler installation includes:</h2>
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
          All work Gas Safe certified #966812 to UK safety standards.
        </p>
      </div>
      <main>
        <section className="hero-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '50px'}}>
            <div style={{flex: '1 1 400px', textAlign: 'center'}}>
              <h1 className="section-heading section-heading--hero">Expert Combi Boiler Installation in Scunthorpe & North Lincolnshire</h1>
              <h2 className="section-subheading">Gas Safe Combi Fitters | Space Saving | Instant Hot Water | Lower Bills</h2>
              <p className="section-text section-text--intro section-text--compact">Professional <strong>combi boiler installation Scunthorpe</strong> by Gas Safe certified engineers. High efficiency combi boilers from Worcester, Baxi, Ideal. <strong>Combi boiler fitter North Lincolnshire</strong>. Emergency combi replacement available. Free quote.</p>
              <div className="section-cta-group">
                <a href="#contact-form" className="cta-button cta-button--nowrap">Get Free Combi Boiler Quote</a>
                <a href="/quote" className="cta-button cta-button--nowrap">Instant Quote</a>
              </div>
            </div>
            <div style={{flex: '1 1 300px', maxWidth: '400px'}}>
              <img decoding="async" src="/images/hero-install.webp" alt="Professional combi boiler installation Scunthorpe North Lincolnshire" style={{width: '100%', height: 'auto', borderRadius: '8px'}} loading="lazy" />
            </div>
          </div>
        </section>
        <section className="benefits-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <h2 className="section-heading section-heading--spaced">Benefits of Combi Boiler Installation</h2>
            <img decoding="async" src="/images/hero-home.webp" alt="Premium gas boiler installation Scunthorpe home heating" style={{width: '100%', maxWidth: '600px', height: 'auto', margin: '0 auto 30px', borderRadius: '8px'}} loading="lazy" />
            <p className="section-text">Upgrade to a modern combi boiler for <strong>space-saving</strong>, <strong>high efficiency</strong> and <strong>instant hot water</strong>.</p>
            <ul className="section-list">
              <li><strong>Space-saving:</strong> No hot water tank or cylinder needed.</li>
              <li><strong>High efficiency:</strong> 94%+ ErP A-rated condensing combis.</li>
              <li><strong>Instant hot water:</strong> On-demand heating, no storage lag.</li>
              <li><strong>Lower bills:</strong> Reduced losses, smart controls included.</li>
              <li><strong>Gas Safe certified:</strong> #966812 registered installers.</li>
            </ul>
            <div className="section-cta-group">
              <a href="#contact-form" className="cta-button cta-button--nowrap">Get Combi Quote</a>
            </div>
          </div>
        </section>
        <section className="sizing-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <h2 className="section-heading section-heading--spaced">Combi Boiler Sizing & Install Guide</h2>
            <table className="sizing-table" style={{width: '100%', margin: '0 auto 30px', borderCollapse: 'collapse', fontSize: '16px'}}>
              <thead>
                <tr style={{backgroundColor: '#00a676', color: 'white'}}>
                  <th style={{padding: '15px', border: '1px solid #ddd'}}>House Size (Beds)</th>
                  <th style={{padding: '15px', border: '1px solid #ddd'}}>kW Rating</th>
                  <th style={{padding: '15px', border: '1px solid #ddd'}}>Baths/Showers</th>
                  <th style={{padding: '15px', border: '1px solid #ddd'}}>Examples</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{padding: '15px', border: '1px solid #ddd'}}>1-2</td>
                  <td style={{padding: '15px', border: '1px solid #ddd'}}>24-27kW</td>
                  <td style={{padding: '15px', border: '1px solid #ddd'}}>1 bath</td>
                  <td style={{padding: '15px', border: '1px solid #ddd'}}>Worcester Greenstar 25i, Ideal Logic 24</td>
                </tr>
                <tr>
                  <td style={{padding: '15px', border: '1px solid #ddd'}}>3</td>
                  <td style={{padding: '15px', border: '1px solid #ddd'}}>28-32kW</td>
                  <td style={{padding: '15px', border: '1px solid #ddd'}}>1 bath + shower</td>
                  <td style={{padding: '15px', border: '1px solid #ddd'}}>Baxi 28i, Vaillant ecoTEC 30</td>
                </tr>
                <tr>
                  <td style={{padding: '15px', border: '1px solid #ddd'}}>4+</td>
                  <td style={{padding: '15px', border: '1px solid #ddd'}}>35-40kW</td>
                  <td style={{padding: '15px', border: '1px solid #ddd'}}>2+ baths/showers</td>
                  <td style={{padding: '15px', border: '1px solid #ddd'}}>Worcester 37i, Baxi 40</td>
                </tr>
              </tbody>
            </table>
            <p className="section-text">Free professional survey to confirm the right size combi boiler for your Scunthorpe home.</p>
            <div className="section-cta-group">
              <a href="#contact-form" className="cta-button cta-button--nowrap">Book Free Survey</a>
            </div>
          </div>
        </section>
        <section className="faqs-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <h2 className="section-heading section-heading--spaced">Combi Boiler Installation FAQs Scunthorpe</h2>
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
            <h2 className="section-heading section-heading--spaced">Customer Testimonials - Combi Installations</h2>
            <div className="testimonials-carousel-wrapper">
              <div className="testimonials-carousel">
                <div className="testimonial-card">
                  <div className="testimonial-stars">★★★★★</div>
                  <p>"Perfect combi install, instant hot water, no tank clutter. Highly recommend Nimbus." - Scunthorpe homeowner</p>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-stars">★★★★★</div>
                  <p>"Worcester combi fitted quickly, efficient and quiet. Great service." - Local customer</p>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-stars">★★★★★</div>
                  <p>"Space saving combi replacement, bills down already. Gas Safe pros." - North Lincs</p>
                </div>
              </div>
            </div>
            <div className="section-cta-group section-cta-group--spaced">
              <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="cta-button cta-button--nowrap">
                Read Google Reviews
              </a>
            </div>
          </div>
        </section>
        <section className="free-quote-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <h2 className="section-heading">Request Free Combi Boiler Installation Quote</h2>
            <p className="section-text section-text--intro">Get personalized quote for combi boiler installation in Scunthorpe.</p>
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
          --shadow-soft: 0 2px 8px rgba(0, 0, 0, 0.04);
          --shadow-medium: 0 4px 16px rgba(0, 0, 0, 0.06);
          --radius-md: 14px;
          font-family: 'Inter', sans-serif;
        }
        .nimbus-nav { background: var(--white); box-shadow: var(--shadow-medium); position: sticky; top: 0; z-index: 100; }
        .nimbus-section-base { padding: 80px 24px; max-width: 1400px; margin: 40px auto; border: 2px solid var(--light-green); border-radius: var(--radius-md); box-shadow: var(--shadow-large); background: var(--white); }
        .section-heading { font-size: clamp(2rem, 5vw, 3.5rem); font-weight: 800; background: linear-gradient(135deg, var(--primary-green), var(--accent-green)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 1rem; }
        .section-list { max-width: 600px; margin: 2rem auto; text-align: left; list-style: none; padding: 0; }
        .section-list li { padding: 1rem; background: var(--light-green); margin-bottom: 0.5rem; border-radius: var(--radius-sm); border-left: 4px solid var(--primary-green); }
        .cta-button { background: linear-gradient(135deg, var(--primary-green), var(--accent-green)); color: white; padding: 1rem 2rem; border-radius: var(--radius-md); text-decoration: none; font-weight: 600; display: inline-block; margin: 0.5rem; transition: all 0.3s; box-shadow: var(--shadow-medium); }
        .cta-button:hover { transform: translateY(-2px); box-shadow: var(--shadow-large); }
        .sizing-table th, .sizing-table td { text-align: left; }
        .faq-accordion { max-width: 800px; margin: 0 auto; }
        .faq-item { border: 1px solid #ddd; margin-bottom: 1rem; border-radius: 8px; overflow: hidden; }
        .faq-question { padding: 1.5rem; cursor: pointer; font-weight: 600; background: #f9f9f9; margin: 0; }
        .faq-answer { padding: 0; max-height: 0; overflow: hidden; transition: max-height 0.3s; }
        .faq-item.active .faq-answer { padding: 1.5rem; max-height: 200px; }
        .testimonials-carousel { display: flex; gap: 1rem; overflow-x: auto; scroll-snap-type: x mandatory; }
        .testimonial-card { flex: 0 0 300px; background: var(--light-green); padding: 2rem; border-radius: var(--radius-md); box-shadow: var(--shadow-soft); scroll-snap-align: start; }
        .testimonial-stars { color: #f39c12; font-size: 1.5rem; margin-bottom: 1rem; }
        .install-banner { background: linear-gradient(135deg, var(--primary-green), var(--dark-green)); color: white; padding: 2rem 0; text-align: center; }
        .banner-label { font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; }
        .banner-scroller { overflow: hidden; }
        .banner-track { display: flex; animation: scroll 30s linear infinite; }
        @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .banner-items { display: flex; gap: 2rem; min-width: 200%; }
        .banner-item { background: rgba(255,255,255,0.2); padding: 0.5rem 1.5rem; border-radius: 25px; white-space: nowrap; backdrop-filter: blur(10px); }
        @media (max-width: 768px) { .nimbus-section-base { padding: 40px 20px; } .section-heading { font-size: 2rem; } }
        /* Additional styles for responsive design, nav dropdowns, etc. matching model */
      `}</style>
    </>
  );
};

export default CombiBoilerInstallationScunthorpe;
