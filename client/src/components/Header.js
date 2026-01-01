import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [dropdownActive, setDropdownActive] = useState(null);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const toggleDropdown = (index) => {
    setDropdownActive(dropdownActive === index ? null : index);
  };

  return (
    <>
      <header role="banner">
        <Helmet>
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "/#organization",
              "name": "Nimbus Heat Pumps Ltd",
              "alternateName": "Nimbus Heat Pumps",
              "url": "/",
              "logo": "/images/nimbus-logo.webp",
              "description": "Gas Safe registered installers for boiler installations, air source heat pumps and heating solutions in Scunthorpe and North Lincolnshire. Claim £7500 Boiler Upgrade Scheme grants.",
              "image": "/images/hero-team-service.webp",
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
                { "@type": "State", "name": "North Lincolnshire" },
                { "@type": "State", "name": "North East Lincolnshire" },
                { "@type": "State", "name": "Lincolnshire" },
                { "@type": "State", "name": "South Yorkshire" },
                { "@type": "State", "name": "Humberside" },
                { "@type": "City", "name": "Scunthorpe" },
                { "@type": "City", "name": "Grimsby" },
                { "@type": "City", "name": "Doncaster" },
                { "@type": "City", "name": "Lincoln" },
                { "@type": "City", "name": "Gainsborough" },
                { "@type": "City", "name": "Kirton in Lindsey" },
                { "@type": "City", "name": "Brigg" },
                { "@type": "City", "name": "Barton-Upon-Humber" },
                { "@type": "City", "name": "Winterton" },
                { "@type": "City", "name": "Cleethorpes" },
                { "@type": "City", "name": "Epworth" },
                { "@type": "City", "name": "Immingham" },
                { "@type": "City", "name": "Wrawby" },
                { "@type": "City", "name": "Barnetby" },
                { "@type": "City", "name": "Crowle" },
                { "@type": "City", "name": "Broughton" },
                { "@type": "City", "name": "Bottesford" },
                { "@type": "City", "name": "South Ferriby" },
                { "@type": "City", "name": "Burton-Upon-Stather" },
                { "@type": "City", "name": "Dragonby" },
                { "@type": "City", "name": "Hemswell Cliff" },
                { "@type": "City", "name": "Burringham" },
                { "@type": "City", "name": "Keadby" },
                { "@type": "City", "name": "Gunness" },
                { "@type": "City", "name": "Haxey" },
                { "@type": "City", "name": "New Waltham" },
                { "@type": "City", "name": "Waltham" },
                { "@type": "City", "name": "Humberston" },
                { "@type": "City", "name": "Healing" },
                { "@type": "City", "name": "Great Coates" },
                { "@type": "City", "name": "Market Rasen" },
                { "@type": "City", "name": "Sudbrooke" },
                { "@type": "City", "name": "Fiskerton" },
                { "@type": "City", "name": "Reepham" },
                { "@type": "City", "name": "Cherry Willingham" },
                { "@type": "City", "name": "Nettleham" },
                { "@type": "City", "name": "Welton" },
                { "@type": "City", "name": "Caistor" },
                { "@type": "City", "name": "Keelby" },
                { "@type": "City", "name": "Thorne" },
                { "@type": "City", "name": "Hatfield" },
                { "@type": "City", "name": "Stainforth" },
                { "@type": "City", "name": "Bawtry" },
                { "@type": "City", "name": "Askern" },
                { "@type": "City", "name": "Barnoldby-le-Beck" },
                { "@type": "City", "name": "Barton Waterside" },
                { "@type": "City", "name": "Belton" },
                { "@type": "City", "name": "Bradley" },
                { "@type": "City", "name": "Burton-by-Lincoln" },
                { "@type": "City", "name": "Canwick" },
                { "@type": "City", "name": "East Halton" },
                { "@type": "City", "name": "Flixborough" },
                { "@type": "City", "name": "Habrough" },
                { "@type": "City", "name": "Harmston" },
                { "@type": "City", "name": "Heighington" },
                { "@type": "City", "name": "Holton le Clay" },
                { "@type": "City", "name": "Laceby" },
                { "@type": "City", "name": "Lea" },
                { "@type": "City", "name": "Morton" },
                { "@type": "City", "name": "Newtown" },
                { "@type": "City", "name": "North Hykeham" },
                { "@type": "City", "name": "Riseholme" },
                { "@type": "City", "name": "Scawby" },
                { "@type": "City", "name": "Stallingborough" },
                { "@type": "City", "name": "Thornton" },
                { "@type": "City", "name": "Washingborough" },
                { "@type": "City", "name": "Yaddlethorpe" }
              ],
              "makesOffer": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Boiler Installation" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Boiler Installation Scunthorpe" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Gas Boiler Installation" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Boiler Service" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Gas Boiler Service" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Boiler Repair" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Gas Boiler Repair" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Heating System Installation" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Heating System Service" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Heating System Repair" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Air Source Heat Pump Installation" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Air Source Heat Pump Service" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Air Source Heat Pump Repair" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Air Source Heat Pump Maintenance" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Heat Pump Installation" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Heat Pump Service" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Heat Pump Repair" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Heat Pump Maintenance" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Heating System Maintenance" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Smart Thermostat Installation" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Underfloor Heating Installation" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Underfloor Heating Service" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Underfloor Heating Repair" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Gas Safety Certificates" } }
              ],
              "hasCredential": [
                { "@type": "EducationalOccupationalCredential", "name": "Gas Safe Registered", "credentialCategory": "license" },
                { "@type": "EducationalOccupationalCredential", "name": "Operates under MCS Umbrella Scheme", "credentialCategory": "certificate" }
              ],
              "priceRange": "£££",
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
        </Helmet>
        <nav className="nimbus-nav" aria-label="Main navigation">
          <div className="nimbus-nav-container">
            <div className="nimbus-nav-inner">
              <Link to="/" className="nimbus-logo-link" aria-label="Nimbus Boilers & Heat Pumps - Home">
                <picture>
                  <source srcSet="/images/nimbus-logo.webp" type="image/webp" />
                  <img loading="lazy" decoding="async" src="/images/nimbus-logo.png"
                       alt="Nimbus Boilers & Heat Pumps - Gas Boiler and Air Source Heat Pump Installation in Scunthorpe and North Lincolnshire"
                       className="nimbus-logo" />
                </picture>
              </Link>
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
                  <Link to="/faq" className="nimbus-link">FAQ</Link>
                </li>
                <li className="nimbus-menu-item">
                  <Link to="/areas" className="nimbus-link">Areas We Cover</Link>
                </li>
                <li className="nimbus-menu-item">
                  <Link to="/boiler-grants-scunthorpe" className="nimbus-link">Grants</Link>
                </li>
                <li className="nimbus-menu-item">
                  <Link to="/" className="nimbus-link">Home</Link>
                </li>
                <li className={`nimbus-menu-item nimbus-has-dropdown ${dropdownActive === 1 ? 'dropdown-active' : ''}`}>
                  <a href="#" className="nimbus-link" onClick={(e) => { e.preventDefault(); toggleDropdown(1); }}>
                    Policies <span>▼</span>
                  </a>
                  <ul className="nimbus-dropdown">
                    <li className="nimbus-dropdown-item"><Link to="/cookies-policy" className="nimbus-dropdown-link">Cookies Policy</Link></li>
                    <li className="nimbus-dropdown-item"><Link to="/privacy-policy" className="nimbus-dropdown-link">Privacy Policy</Link></li>
                    <li className="nimbus-dropdown-item"><Link to="/terms-and-conditions" className="nimbus-dropdown-link">Terms & Conditions</Link></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="nimbus-cta-container">
              <div className="nimbus-cta-row">
                <Link to="/quote" className="nimbus-cta nimbus-cta-primary">Gas Boiler Quote</Link>
                <Link to="/contact" className="nimbus-cta nimbus-cta-secondary">Heat Pump Quote</Link>
                <a href="mailto:info@nimbusheatpumps.co.uk" className="nimbus-cta nimbus-cta-primary">Email Us</a>
                <a href="tel:01724622069" className="nimbus-cta nimbus-cta-secondary">Call Now</a>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <style jsx>{`
        .nimbus-nav-container {
          background: #fff;
          position: relative;
          z-index: 9999;
          width: 100%;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .nimbus-nav-inner {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 32px;
          min-height: 100px;
        }
        .nimbus-logo {
          height: 80px;
          object-fit: contain;
        }
        .nimbus-menu {
          display: flex;
          list-style: none;
          gap: 15px;
          align-items: center;
        }
        .nimbus-link {
          text-decoration: none;
          color: #1a1a1a;
          font-weight: 600;
          font-size: 15px;
          padding: 10px 15px;
          border-radius: 8px;
          transition: all 0.3s ease;
        }
        .nimbus-link:hover {
          color: #00a676;
          background: rgba(0, 166, 118, 0.05);
        }
        .nimbus-has-dropdown {
          position: relative;
        }
        .nimbus-dropdown {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%) translateY(10px);
          background: #fff;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          border-radius: 12px;
          list-style: none;
          padding: 10px;
          min-width: 220px;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          z-index: 1000;
        }
        .nimbus-has-dropdown:hover .nimbus-dropdown {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
        }
        .nimbus-dropdown-link {
          display: block;
          padding: 10px 15px;
          text-decoration: none;
          color: #1a1a1a;
          font-size: 14px;
          border-radius: 6px;
          transition: all 0.2s ease;
        }
        .nimbus-dropdown-link:hover {
          background: #f0fdfa;
          color: #00a676;
        }
        .nimbus-cta-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 32px 15px;
        }
        .nimbus-cta-row {
          display: flex;
          justify-content: center;
          gap: 15px;
          flex-wrap: wrap;
        }
        .nimbus-cta {
          padding: 10px 20px;
          border-radius: 10px;
          font-weight: 700;
          font-size: 14px;
          text-decoration: none;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }
        .nimbus-cta-primary {
          background: #00a676;
          color: #fff;
        }
        .nimbus-cta-primary:hover {
          background: #007a57;
          transform: translateY(-2px);
        }
        .nimbus-cta-secondary {
          background: #fff;
          color: #00a676;
          border-color: #00a676;
        }
        .nimbus-cta-secondary:hover {
          background: #f0fdfa;
          transform: translateY(-2px);
        }
        .nimbus-mobile-toggle {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 10px;
          z-index: 1001;
        }
        .nimbus-mobile-toggle span {
          width: 25px;
          height: 3px;
          background: #1a1a1a;
          border-radius: 2px;
          transition: all 0.3s ease;
        }
        @media (max-width: 1024px) {
          .nimbus-menu {
            display: none;
          }
          .nimbus-mobile-toggle {
            display: flex;
          }
          .nimbus-menu.active {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: #fff;
            padding: 20px;
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
            z-index: 999;
          }
        }
      `}</style>
    </>
  );
};

export default Header;