import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import QuoteForm from './QuoteForm';

const RegularBoilerInstallationScunthorpe = () => {
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
      question: "What is a regular boiler vs combi or system boiler in Scunthorpe?",
      answer: "Regular (conventional) boilers use a loft feed tank and hot water cylinder for gravity-fed hot water systems. Ideal for homes with low mains pressure or existing gravity-fed setups. Combi boilers provide instant hot water without storage, while system boilers have the pump inside but no loft tank."
    },
    {
      question: "How to size a regular boiler for my Scunthorpe home?",
      answer: "Sizing depends on bathrooms (1-2: 27-30kW, 3+: 35kW+), radiators (8-12: 24kW, 15+: 35kW), and hot water demand. Our free survey calculates exact BTU needs for optimal efficiency."
    },
    {
      question: "What is the cost of regular boiler installation Scunthorpe?",
      answer: "£3,500-£7,000 including boiler, loft feed tank, hot water cylinder, pipework, filters, and Gas Safe certification. Prices vary by size, complexity, and grants eligibility. Finance available."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Regular Boiler Installation Scunthorpe | Expert Traditional Gravity Systems | Nimbus Boilers</title>
        <meta name="description" content="Expert regular boiler installation Scunthorpe for low pressure homes and traditional systems. Loft tank & cylinder installs by Gas Safe engineers North Lincolnshire. Free quote." />
        <meta name="keywords" content="regular boiler installation Scunthorpe, conventional boiler Scunthorpe, regular boiler vs combi, gravity boiler installation North Lincolnshire, regular boiler sizing Scunthorpe" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://nimbusboilers.co.uk/regular-boiler-installation-scunthorpe" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://nimbusboilers.co.uk/#organization",
            "name": "Nimbus Boilers & Heat Pumps",
            "alternateName": "Nimbus Boilers",
            "url": "https://nimbusboilers.co.uk/",
            "logo": "/images/nimbus-logo.webp",
            "description": "Expert regular boiler installation, service and repair in Scunthorpe. Gas Safe registered for traditional gravity systems, low pressure homes.",
            "image": "/images/hero-install.webp",
            "telephone": "+44 7487 546550",
            "email": "info@nimbusboilers.co.uk",
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
            "areaServed": "Scunthorpe, North Lincolnshire",
            "serviceType": "Regular Boiler Installation",
            "priceRange": "££",
            "keywords": "regular boiler installation Scunthorpe, conventional boiler Scunthorpe"
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Regular Boiler Installation Scunthorpe",
            "provider": {
              "@id": "https://nimbusboilers.co.uk/#organization"
            },
            "areaServed": "Scunthorpe, North Lincolnshire",
            "description": "Regular boiler installation for traditional gravity systems with loft tank and cylinder. Expert sizing and Gas Safe installation.",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "GBP",
              "price": "3500-7000"
            },
            "keywords": "regular boiler installation Scunthorpe"
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.map((faq, index) => ({
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
            <a href="/" className="nimbus-logo-link">
              <img src="/images/nimbus-logo.webp" alt="Nimbus Boilers - Regular Boiler Installation Scunthorpe" className="nimbus-logo" loading="lazy" />
            </a>
            <button className={`nimbus-mobile-toggle ${menuActive ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle navigation menu">
              <span></span><span></span><span></span>
            </button>
            <ul className={`nimbus-menu ${menuActive ? 'active' : ''}`}>
              <li className="nimbus-menu-item"><a href="/faq" className="nimbus-link">FAQ</a></li>
              <li className="nimbus-menu-item"><a href="/areas-covered" className="nimbus-link">Areas Covered</a></li>
              <li className="nimbus-menu-item"><a href="/boiler-grants-scunthorpe" className="nimbus-link">Boiler Grants</a></li>
              <li className="nimbus-menu-item"><a href="/" className="nimbus-link">Home</a></li>
              <li className="nimbus-menu-item nimbus-social-item">
                <div className="nimbus-social">
                  <a href="https://x.com/NimbusHeatPumps" target="_blank" rel="noopener noreferrer" aria-label="X">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path fill="#000" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61579773217395" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
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
              <a href="/quote" className="nimbus-cta nimbus-cta-primary">Boiler Quote</a>
              <a href="#contact-form" className="nimbus-cta nimbus-cta-secondary">Call Now</a>
            </div>
          </div>
        </div>
      </nav>
      <div className="install-banner">
        <div className="banner-wrapper">
          <h2 className="banner-label">Every regular boiler installation includes:</h2>
          <div className="banner-scroller">
            <div className="banner-track">
              <div className="banner-items">
                <span className="banner-item">MagnaCleanse chemical flush</span>
                <span className="banner-item">Hive smart thermostat</span>
                <span className="banner-item">Shock arrester</span>
                <span className="banner-item">Scale reducer</span>
                <span className="banner-item">Magnetic filter</span>
              </div>
              <div className="banner-items">
                <span className="banner-item">MagnaCleanse chemical flush</span>
                <span className="banner-item">Hive smart thermostat</span>
                <span className="banner-item">Shock arrester</span>
                <span className="banner-item">Scale reducer</span>
                <span className="banner-item">Magnetic filter</span>
              </div>
            </div>
          </div>
        </div>
        <p className="banner-footnote">Gas Safe certified.</p>
      </div>
      <main>
        <section className="hero-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '50px'}}>
            <div style={{flex: '1 1 400px', textAlign: 'center'}}>
              <h1 className="section-heading section-heading--hero">Regular Boiler Installation Scunthorpe</h1>
              <h2 className="section-subheading">Expert sizing & install for traditional gravity systems</h2>
              <p className="section-text section-text--intro section-text--compact">Professional <strong>regular boiler installation Scunthorpe</strong> by Gas Safe engineers. Perfect for low mains pressure homes, existing loft tanks. <strong>Conventional boiler Scunthorpe</strong> vs combi/system. Free quote.</p>
              <div className="section-cta-group">
                <a href="#contact-form" className="cta-button cta-button--nowrap">Get Free Quote</a>
                <a href="/quote" className="cta-button cta-button--nowrap">Instant Quote</a>
              </div>
            </div>
            <div style={{flex: '1 1 300px', maxWidth: '400px'}}>
              <img src="/images/hero-install.webp" alt="regular boiler installation Scunthorpe" className="w-full h-96 object-cover rounded-lg" loading="lazy" />
            </div>
          </div>
        </section>
        <section className="our-services-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <h2 className="section-heading section-heading--spaced">Regular Boiler Services Scunthorpe</h2>
            <div className="services-grid">
              <div className="service-card">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="12" fill="#00a676"/>
                  <path d="M6 12.5L10 16.5L18 7.5" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 className="card-heading">New Regular Boiler Installs</h3>
                <p className="card-text">Complete installs for traditional gravity systems.</p>
              </div>
              <div className="service-card">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="12" fill="#00a676"/>
                  <path d="M6 12.5L10 16.5L18 7.5" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 className="card-heading">Replacements & Upgrades</h3>
                <p className="card-text">Upgrade existing regular boilers to efficient models.</p>
              </div>
              <div className="service-card">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="12" fill="#00a676"/>
                  <path d="M6 12.5L10 16.5L18 7.5" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 className="card-heading">Loft Tank & Cylinder Install</h3>
                <p className="card-text">Feed tank and hot water cylinder integration.</p>
              </div>
              <div className="service-card">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="12" fill="#00a676"/>
                  <path d="M6 12.5L10 16.5L18 7.5" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 className="card-heading">Sizing Surveys</h3>
                <p className="card-text">Free professional sizing for your home.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="benefits-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <h2 className="section-heading section-heading--spaced">Regular Boiler vs Combi Boiler Benefits</h2>
            <img src="/images/hero-boiler-room.webp" alt="regular boiler vs combi benefits" style={{width: '100%', maxWidth: '600px', height: 'auto', margin: '0 auto 30px', borderRadius: '8px'}} loading="lazy" />
            <p className="section-text">Regular boilers excel in homes with <strong>low mains pressure</strong> using <strong>gravity-fed stored hot water</strong> from loft tank. Perfect for traditional systems.</p>
            <ul className="section-list">
              <li>Gravity hot water - reliable low pressure mains</li>
              <li>Loft feed tank ensures supply</li>
              <li>Multiple bathrooms/outlets</li>
              <li>Cylinder in airing cupboard</li>
              <li>Ideal for older/large homes</li>
            </ul>
            <div className="section-cta-group">
              <a href="#contact-form" className="cta-button cta-button--nowrap">Compare Regular vs Combi</a>
            </div>
          </div>
        </section>
        <section className="sizing-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <h2 className="section-heading section-heading--spaced">Regular Boiler Sizing Guide Scunthorpe</h2>
            <img src="/images/hero-team-service.webp" alt="regular boiler sizing Scunthorpe" style={{width: '100%', maxWidth: '600px', height: 'auto', margin: '0 auto 30px', borderRadius: '8px'}} loading="lazy" />
            <p className="section-text">Proper sizing ensures efficiency. Based on bathrooms, radiators, demand.</p>
            <ul className="section-list">
              <li>1-2 bathrooms, 10 radiators: 27-30kW</li>
              <li>3+ bathrooms, 15+ radiators: 35-40kW</li>
              <li>High demand: Add 5kW</li>
              <li>Free survey recommended</li>
            </ul>
            <div className="section-cta-group">
              <a href="#contact-form" className="cta-button cta-button--nowrap">Free Sizing Survey</a>
            </div>
          </div>
        </section>
        <section className="faqs-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <h2 className="section-heading section-heading--spaced">Regular Boiler Installation FAQs</h2>
            <div className="faq-accordion">
              {faqData.map((faq, index) => (
                <div key={index} className={`faq-item ${faqActive === index ? 'active' : ''}`}>
                  <h3 className="faq-question" onClick={() => toggleFaq(index)}>{faq.question}</h3>
                  <div className="faq-answer">{faq.answer}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="testimonials-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <h2 className="section-heading section-heading--spaced">Customer Testimonials</h2>
            <div className="testimonials-carousel-wrapper">
              <div className="testimonials-carousel">
                <div className="testimonial-card">
                  <div className="testimonial-stars">★★★★★</div>
                  <p>"Perfect for our low pressure mains. Consistent hot water now!" - Scunthorpe Family</p>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-stars">★★★★★</div>
                  <p>"Loft tank and cylinder installed flawlessly. Traditional system revived." - Local Homeowner</p>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-stars">★★★★★</div>
                  <p>"Expert advice on regular vs combi. Great service." - Satisfied Customer</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="free-quote-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <h2 className="section-heading">Request Free Regular Boiler Quote</h2>
            <div id="contact-form">
              <QuoteForm />
            </div>
          </div>
        </section>
        <footer className="company-details-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <img src="/images/nimbus-logo.webp" alt="Nimbus Boilers" style={{maxWidth: '200px', margin: '0 auto 20px'}} loading="lazy" />
            <h2 className="footer-heading">Nimbus Boilers - Scunthorpe</h2>
            <p className="section-text">info@nimbusboilers.co.uk | 01724 622069</p>
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
          --shadow-soft: 0 2px 8px rgba(0, 0, 0, 0.04);
          --shadow-medium: 0 4px 16px rgba(0, 0, 0, 0.06);
          --shadow-large: 0 8px 32px rgba(0, 0, 0, 0.08);
          --radius-sm: 10px;
          --radius-md: 14px;
          --radius-lg: 18px;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        * { box-sizing: border-box; }
        body { margin: 0; padding: 0; line-height: 1.6; color: var(--text-dark); }
        .nimbus-nav { background: var(--white); box-shadow: var(--shadow-medium); position: sticky; top: 0; z-index: 100; padding: 1rem 0; }
        .nimbus-nav-container { max-width: 1400px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; padding: 0 32px; }
        .nimbus-logo { height: 50px; width: auto; }
        .nimbus-mobile-toggle { display: none; flex-direction: column; gap: 4px; background: none; border: none; cursor: pointer; }
        .nimbus-mobile-toggle span { width: 25px; height: 3px; background: var(--primary-green); transition: 0.3s; }
        .nimbus-mobile-toggle.active span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
        .nimbus-mobile-toggle.active span:nth-child(2) { opacity: 0; }
        .nimbus-mobile-toggle.active span:nth-child(3) { transform: rotate(-45deg) translate(7px, -6px); }
        .nimbus-menu { display: flex; list-style: none; margin: 0; padding: 0; gap: 2rem; align-items: center; }
        .nimbus-link { text-decoration: none; color: var(--text-dark); font-weight: 500; transition: color 0.3s; }
        .nimbus-link:hover { color: var(--primary-green); }
        .nimbus-social { display: flex; gap: 1rem; }
        .nimbus-cta-container { display: flex; align-items: center; }
        .nimbus-cta-row { display: flex; gap: 1rem; }
        .nimbus-cta { padding: 0.75rem 1.5rem; border-radius: var(--radius-md); text-decoration: none; font-weight: 600; transition: all 0.3s; }
        .nimbus-cta-primary { background: var(--primary-green); color: white; }
        .nimbus-cta-primary:hover { background: var(--dark-green); transform: translateY(-2px); }
        .nimbus-cta-secondary { background: transparent; color: var(--primary-green); border: 2px solid var(--primary-green); }
        .nimbus-cta-secondary:hover { background: var(--primary-green); color: white; transform: translateY(-2px); }
        .nimbus-section-base { padding: 80px 24px; max-width: 1400px; margin: 40px auto; border: 2px solid var(--light-green); border-radius: var(--radius-lg); box-shadow: var(--shadow-large); background: var(--white); }
        .section-heading { font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 800; background: linear-gradient(135deg, var(--primary-green), var(--accent-green)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 1rem; line-height: 1.2; }
        .section-heading--hero { font-size: clamp(3rem, 6vw, 5rem); }
        .section-subheading { font-size: 1.5rem; color: var(--text-medium); margin-bottom: 1.5rem; font-weight: 600; }
        .section-text { font-size: 1.2rem; max-width: 700px; margin: 0 auto 2rem; line-height: 1.7; }
        .section-text--compact { font-size: 1.1rem; line-height: 1.6; }
        .section-text--intro { font-size: 1.25rem; }
        .section-list { max-width: 600px; margin: 2rem auto; text-align: left; list-style: none; padding: 0; }
        .section-list li { padding: 1rem 1.5rem; background: var(--light-green); margin-bottom: 1rem; border-radius: var(--radius-md); border-left: 5px solid var(--primary-green); font-size: 1.1rem; transition: transform 0.3s; }
        .section-list li:hover { transform: translateX(5px); }
        .section-cta-group { display: flex; flex-wrap: wrap; gap: 1rem; justify-content: center; margin-top: 2rem; }
        .cta-button { background: linear-gradient(135deg, var(--primary-green), var(--accent-green)); color: white; padding: 1.25rem 2.5rem; border-radius: var(--radius-lg); text-decoration: none; font-weight: 700; font-size: 1.1rem; transition: all 0.3s; box-shadow: var(--shadow-medium); display: inline-flex; align-items: center; justify-content: center; }
        .cta-button:hover { transform: translateY(-3px); box-shadow: var(--shadow-glow); }
        .cta-button--nowrap { white-space: nowrap; }
        .services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; margin-top: 3rem; }
        .service-card { text-align: center; padding: 2rem; background: var(--off-white); border-radius: var(--radius-lg); box-shadow: var(--shadow-soft); transition: all 0.3s; }
        .service-card:hover { transform: translateY(-10px); box-shadow: var(--shadow-large); }
        .card-heading { font-size: 1.4rem; margin: 1rem 0 0.5rem; color: var(--text-dark); }
        .card-text { color: var(--text-medium); line-height: 1.6; }
        .faq-accordion { max-width: 800px; margin: 2rem auto 0; }
        .faq-item { border: 1px solid #e2e8f0; margin-bottom: 1rem; border-radius: var(--radius-md); overflow: hidden; box-shadow: var(--shadow-soft); }
        .faq-question { padding: 1.5rem; cursor: pointer; font-weight: 600; background: var(--off-white); margin: 0; transition: background 0.3s; display: flex; justify-content: space-between; align-items: center; }
        .faq-question:hover { background: var(--light-green); }
        .faq-answer { padding: 0 1.5rem; max-height: 0; overflow: hidden; transition: all 0.4s ease; background: white; }
        .faq-item.active .faq-answer { padding: 1.5rem; max-height: 300px; }
        .testimonials-carousel-wrapper { overflow: hidden; margin: 2rem 0; }
        .testimonials-carousel { display: flex; gap: 1.5rem; animation: scroll 20s linear infinite; }
        .testimonial-card { flex: 0 0 350px; background: var(--light-green); padding: 2rem; border-radius: var(--radius-lg); box-shadow: var(--shadow-medium); text-align: center; }
        .testimonial-stars { color: #f39c12; font-size: 1.8rem; margin-bottom: 1rem; }
        .install-banner { background: linear-gradient(135deg, var(--primary-green), var(--dark-green)); color: white; padding: 3rem 0; text-align: center; position: relative; overflow: hidden; }
        .banner-label { font-size: 1.6rem; font-weight: 700; margin-bottom: 1.5rem; }
        .banner-scroller { overflow: hidden; }
        .banner-track { display: flex; animation: scroll 25s linear infinite; }
        @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .banner-items { display: flex; gap: 3rem; min-width: 200%; white-space: nowrap; }
        .banner-item { background: rgba(255,255,255,0.2); padding: 0.75rem 2rem; border-radius: 50px; font-weight: 600; backdrop-filter: blur(10px); box-shadow: 0 4px 15px rgba(0,0,0,0.1); }
        .banner-footnote { margin-top: 1rem; opacity: 0.9; font-size: 1rem; }
        .footer-heading { font-size: 1.8rem; margin-bottom: 1rem; }
        @media (max-width: 1024px) {
          .nimbus-nav-container { padding: 0 24px; }
          .services-grid { grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); }
        }
        @media (max-width: 768px) {
          .nimbus-mobile-toggle { display: flex; }
          .nimbus-menu { position: fixed; top: 0; right: -100%; width: 80%; height: 100vh; background: white; flex-direction: column; padding: 5rem 2rem; transition: right 0.3s; box-shadow: -5px 0 20px rgba(0,0,0,0.1); }
          .nimbus-menu.active { right: 0; }
          .nimbus-menu li { margin-bottom: 1.5rem; }
          .nimbus-cta-row { flex-direction: column; gap: 0.75rem; }
          .nimbus-section-base { padding: 60px 20px; margin: 20px auto; }
          .section-heading { font-size: 2.5rem; }
          .hero-section > div { flex-direction: column; text-align: center; gap: 2rem; }
          .services-grid { grid-template-columns: 1fr; }
          .section-cta-group { flex-direction: column; align-items: center; }
          .testimonials-carousel { flex-direction: column; animation: none; }
        }
        @media (max-width: 480px) {
          .nimbus-section-base { padding: 40px 16px; }
          .banner-items { gap: 1.5rem; }
          .banner-item { padding: 0.5rem 1.5rem; font-size: 0.95rem; }
        }
      `}</style>
    </>
  );
};

export default RegularBoilerInstallationScunthorpe;
