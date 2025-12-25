import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import QuoteForm from './QuoteForm';

const Home = () => {
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

  return (
    <>
      <Helmet>
        <title>Boiler Installation Scunthorpe | Gas Boiler Repair North Lincolnshire | Nimbus Boilers & Heat Pumps</title>
        <meta name="description" content="Gas Safe registered boiler installation, repair & service in Scunthorpe, Grimsby, Doncaster, Lincoln. Claim £7,500 Boiler Upgrade Scheme grant for air source heat pumps." />
        <meta name="keywords" content="boiler installation Scunthorpe, boiler repair North Lincolnshire, gas boiler service Scunthorpe, air source heat pump Scunthorpe, Boiler Upgrade Scheme grants" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://nimbusheatpumps.co.uk/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://nimbusheatpumps.co.uk/#organization",
            "name": "Nimbus Heat Pumps Ltd",
            "alternateName": "Nimbus Heat Pumps",
            "url": "https://nimbusheatpumps.co.uk/",
            "logo": "https://nimbusheatpumps.co.uk/wp-content/uploads/2025/06/Nimbus-Heat-Pumps-Logo.png",
            "description": "Gas Safe registered installers for boiler installations, air source heat pumps and heating solutions in Scunthorpe and North Lincolnshire. Claim £7500 Boiler Upgrade Scheme grants.",
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
                "@type": "State",
                "name": "North East Lincolnshire"
              },
              {
                "@type": "State",
                "name": "Lincolnshire"
              },
              {
                "@type": "State",
                "name": "South Yorkshire"
              },
              {
                "@type": "State",
                "name": "Humberside"
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
              },
              {
                "@type": "City",
                "name": "Gainsborough"
              },
              {
                "@type": "City",
                "name": "Kirton in Lindsey"
              },
              {
                "@type": "City",
                "name": "Brigg"
              },
              {
                "@type": "City",
                "name": "Barton-Upon-Humber"
              },
              {
                "@type": "City",
                "name": "Winterton"
              },
              {
                "@type": "City",
                "name": "Cleethorpes"
              },
              {
                "@type": "City",
                "name": "Epworth"
              },
              {
                "@type": "City",
                "name": "Immingham"
              },
              {
                "@type": "City",
                "name": "Wrawby"
              },
              {
                "@type": "City",
                "name": "Barnetby"
              },
              {
                "@type": "City",
                "name": "Crowle"
              },
              {
                "@type": "City",
                "name": "Broughton"
              },
              {
                "@type": "City",
                "name": "Bottesford"
              },
              {
                "@type": "City",
                "name": "South Ferriby"
              },
              {
                "@type": "City",
                "name": "Burton-Upon-Stather"
              },
              {
                "@type": "City",
                "name": "Dragonby"
              },
              {
                "@type": "City",
                "name": "Hemswell Cliff"
              },
              {
                "@type": "City",
                "name": "Burringham"
              },
              {
                "@type": "City",
                "name": "Keadby"
              },
              {
                "@type": "City",
                "name": "Gunness"
              },
              {
                "@type": "City",
                "name": "Haxey"
              },
              {
                "@type": "City",
                "name": "New Waltham"
              },
              {
                "@type": "City",
                "name": "Waltham"
              },
              {
                "@type": "City",
                "name": "Humberston"
              },
              {
                "@type": "City",
                "name": "Healing"
              },
              {
                "@type": "City",
                "name": "Great Coates"
              },
              {
                "@type": "City",
                "name": "Market Rasen"
              },
              {
                "@type": "City",
                "name": "Sudbrooke"
              },
              {
                "@type": "City",
                "name": "Fiskerton"
              },
              {
                "@type": "City",
                "name": "Reepham"
              },
              {
                "@type": "City",
                "name": "Cherry Willingham"
              },
              {
                "@type": "City",
                "name": "Nettleham"
              },
              {
                "@type": "City",
                "name": "Welton"
              },
              {
                "@type": "City",
                "name": "Caistor"
              },
              {
                "@type": "City",
                "name": "Keelby"
              },
              {
                "@type": "City",
                "name": "Thorne"
              },
              {
                "@type": "City",
                "name": "Hatfield"
              },
              {
                "@type": "City",
                "name": "Stainforth"
              },
              {
                "@type": "City",
                "name": "Bawtry"
              },
              {
                "@type": "City",
                "name": "Askern"
              },
              {
                "@type": "City",
                "name": "Barnoldby-le-Beck"
              },
              {
                "@type": "City",
                "name": "Barton Waterside"
              },
              {
                "@type": "City",
                "name": "Belton"
              },
              {
                "@type": "City",
                "name": "Bradley"
              },
              {
                "@type": "City",
                "name": "Burton-by-Lincoln"
              },
              {
                "@type": "City",
                "name": "Canwick"
              },
              {
                "@type": "City",
                "name": "East Halton"
              },
              {
                "@type": "City",
                "name": "Flixborough"
              },
              {
                "@type": "City",
                "name": "Habrough"
              },
              {
                "@type": "City",
                "name": "Harmston"
              },
              {
                "@type": "City",
                "name": "Heighington"
              },
              {
                "@type": "City",
                "name": "Holton le Clay"
              },
              {
                "@type": "City",
                "name": "Laceby"
              },
              {
                "@type": "City",
                "name": "Lea"
              },
              {
                "@type": "City",
                "name": "Morton"
              },
              {
                "@type": "City",
                "name": "Newtown"
              },
              {
                "@type": "City",
                "name": "North Hykeham"
              },
              {
                "@type": "City",
                "name": "Riseholme"
              },
              {
                "@type": "City",
                "name": "Scawby"
              },
              {
                "@type": "City",
                "name": "Stallingborough"
              },
              {
                "@type": "City",
                "name": "Thornton"
              },
              {
                "@type": "City",
                "name": "Washingborough"
              },
              {
                "@type": "City",
                "name": "Yaddlethorpe"
              }
            ],
            "makesOffer": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Boiler Installation",
                  "description": "Professional installation of boilers including gas and heating systems."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Boiler Installation Scunthorpe",
                  "description": "Local boiler installation services in Scunthorpe and North Lincolnshire."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Gas Boiler Installation",
                  "description": "Installation of gas boilers with Gas Safe compliance."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Boiler Service",
                  "description": "Routine servicing for boilers to ensure efficiency and safety."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Gas Boiler Service",
                  "description": "Servicing of gas boilers including inspections and maintenance."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Boiler Repair",
                  "description": "Repair services for faulty boilers and heating systems."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Gas Boiler Repair",
                  "description": "Expert repairs for gas boilers with quick response times."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Heating System Installation",
                  "description": "Full installation of heating systems including boilers and radiators."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Heating System Service",
                  "description": "Servicing and maintenance for complete heating systems."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Heating System Repair",
                  "description": "Repairs for heating systems including boilers and components."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Air Source Heat Pump Installation",
                  "description": "Installation of air source heat pumps for efficient heating."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Air Source Heat Pump Service",
                  "description": "Routine servicing for air source heat pumps to maintain performance."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Air Source Heat Pump Repair",
                  "description": "Repair services for air source heat pumps."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Air Source Heat Pump Maintenance",
                  "description": "Ongoing maintenance for air source heat pumps."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Heat Pump Installation",
                  "description": "General heat pump installation services."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Heat Pump Service",
                  "description": "Servicing for various heat pump systems."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Heat Pump Repair",
                  "description": "Repairs for heat pumps including air source models."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Heat Pump Maintenance",
                  "description": "Maintenance services for heat pumps."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Heating System Maintenance",
                  "description": "Comprehensive maintenance for heating systems including boilers and heat pumps."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Smart Thermostat Installation",
                  "description": "Installation of smart thermostats for energy-efficient control."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Underfloor Heating Installation",
                  "description": "Installation of underfloor heating systems."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Underfloor Heating Service",
                  "description": "Servicing for underfloor heating."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Underfloor Heating Repair",
                  "description": "Repairs for underfloor heating systems."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Gas Safety Certificates",
                  "description": "Issuance of gas safety certificates following inspections."
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
                "name": "Operates under MCS Umbrella Scheme",
                "credentialCategory": "certificate"
              }
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
      {/* Navigation */}
      <nav className="nimbus-nav" aria-label="Main navigation">
        <div className="nimbus-nav-container">
          <div className="nimbus-nav-inner">
            <a href="/" className="nimbus-logo-link" aria-label="Nimbus Boilers & Heat Pumps - Home">
              <img decoding="async" src="https://nimbusheatpumps.co.uk/wp-content/uploads/2025/06/Nimbus-Heat-Pumps-Logo.png"
                   alt="Nimbus Boilers & Heat Pumps - Gas Boiler and Air Source Heat Pump Installation in Scunthorpe and North Lincolnshire"
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
                  <a href="https://x.com/NimbusHeatPumps" target="_blank" rel="noopener noreferrer" title="Follow Nimbus Boilers & Heat Pumps on X for gas boiler and air source heat pump tips in Scunthorpe and North Lincolnshire" aria-label="Follow Nimbus Boilers & Heat Pumps on X">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path fill="#000" stroke="none" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61579773217395" target="_blank" rel="noopener noreferrer" title="Follow Nimbus Boilers & Heat Pumps on Facebook for updates on Boiler Upgrade Scheme grants and installations in DN and LN postcodes" aria-label="Follow Nimbus Boilers & Heat Pumps on Facebook">
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
      <main>
        {/* Hero Section */}
        <section className="hero-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '50px'}}>
            <div style={{flex: '1 1 400px', textAlign: 'center'}}>
              <h1 className="section-heading section-heading--hero">Boiler Installation Scunthorpe</h1>
              <h2 className="section-subheading">Gas Safe Registered Installers | Boiler Repairs and Services Scunthorpe, Grimsby, Doncaster, Lincoln & North Lincolnshire</h2>
              <p className="section-text section-text--intro section-text--compact">Specialising in gas boiler installations, repairs and services in Scunthorpe, Grimsby, Doncaster, Lincoln and every town and village in between, including Brigg, Gainsborough and Kirton in Lindsey. We offer combi boiler replacements, emergency repairs and eco-friendly heating solutions. Request your quote today.</p>
              <div className="section-cta-group">
                <a href="https://nimbusheatpumps.co.uk/gas-boiler-installation-scunthorpe/" className="cta-button cta-button--nowrap">Get an Instant Gas Boiler Quote in Scunthorpe, Grimsby, Doncaster, Lincoln</a>
                <a href="#contact-form" className="cta-button cta-button--nowrap">Get a Free Air Source Heat Pump Quote in Scunthorpe</a>
              </div>
            </div>
            <div style={{flex: '1 1 300px', maxWidth: '400px'}}>
              <img decoding="async" src="https://nimbusheatpumps.co.uk/wp-content/uploads/2025/06/iStock-2211126281-scaled.jpg" alt="Air source heat pump installation on a modern UK home in Scunthorpe by Nimbus Boilers & Heat Pumps" style={{width: '100%', height: 'auto', display: 'block', margin: '0 auto', borderRadius: '8px'}} loading="lazy" />
            </div>
          </div>
        </section>
        {/* Gas Boiler Efficiency Section */}
        <section className="gas-boiler-efficient-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <h2 className="section-heading">Gas Boiler Installation and Repair Services in Scunthorpe for Energy Efficiency</h2>
            <p className="section-text section-text--intro">Lower your energy consumption with a high-efficiency gas boiler from our local specialists in Scunthorpe. Tailored for UK homes in North Lincolnshire to reduce bills while maintaining optimal comfort.</p>
            <p className="section-text section-text--intro">We provide expert gas boiler installation services in Scunthorpe with full system upgrades and replacements for modern homes.</p>
            <ul className="section-list">
              <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display: 'inline-block', verticalAlign: 'middle', marginRight: '10px'}}><circle cx="12" cy="12" r="12" fill="#00a676"/><path d="M6 12.5L10 16.5L18 7.5" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>Up to 30% less energy used with gas boiler replacements in Scunthorpe</li>
              <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display: 'inline-block', verticalAlign: 'middle', marginRight: '10px'}}><circle cx="12" cy="12" r="12" fill="#00a676"/><path d="M6 12.5L10 16.5L18 7.5" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>Cut CO<sub>2</sub> emissions with efficient gas heating systems in North Lincolnshire</li>
              <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display: 'inline-block', verticalAlign: 'middle', marginRight: '10px'}}><circle cx="12" cy="12" r="12" fill="#00a676"/><path d="M6 12.5L10 16.5L18 7.5" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>Save up to &pound;500 annually on heating costs with gas boiler repairs in Scunthorpe, Grimsby, Doncaster, Lincoln (savings vary depending on property and usage)</li>
            </ul>
            <div className="section-cta-group">
              <a href="https://nimbusheatpumps.co.uk/gas-boiler-installation-scunthorpe/" className="cta-button">Get Your Gas Boiler Quote in Scunthorpe</a>
            </div>
          </div>
        </section>
        {/* Energy Efficient Section */}
        <section className="energy-efficient-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <h2 className="section-heading">Boiler Upgrade Services and Heat Pump Installations in Scunthorpe, North Lincolnshire for £7,500 Grants</h2>
            <p className="section-text section-text--intro">Lower your energy consumption and prepare your property for the future with a high-efficiency air source heat pump from our local specialists in Scunthorpe. Operating under the MCS umbrella scheme, our systems are tailored for UK homes in North Lincolnshire to reduce bills while maintaining optimal comfort and qualifying for the £7,500 Boiler Upgrade Scheme grant.</p>
            <p className="section-text section-text--intro">At Nimbus Boilers & Heat Pumps, we provide expert boiler installation services in Scunthorpe with full system upgrades, including replacements and energy-efficient alternatives for modern homes.</p>
            <ul className="section-list">
              <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display: 'inline-block', verticalAlign: 'middle', marginRight: '10px'}}><circle cx="12" cy="12" r="12" fill="#00a676"/><path d="M6 12.5L10 16.5L18 7.5" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>Up to 65% less energy used with air source heat pumps and boiler replacements in Scunthorpe</li>
              <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display: 'inline-block', verticalAlign: 'middle', marginRight: '10px'}}><circle cx="12" cy="12" r="12" fill="#00a676"/><path d="M6 12.5L10 16.5L18 7.5" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>Cut up to 1.3 tonnes of CO<sub>2</sub> per year with energy efficient heating systems in North Lincolnshire</li>
              <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display: 'inline-block', verticalAlign: 'middle', marginRight: '10px'}}><circle cx="12" cy="12" r="12" fill="#00a676"/><path d="M6 12.5L10 16.5L18 7.5" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>Save over &pound;470 and up to &pound;1,500 annually on heating compared to LPG and electric storage heaters in Scunthorpe (savings vary depending on property and usage)</li>
            </ul>
            <div className="section-cta-group">
              <a href="#contact-form" className="cta-button">Get Your Free Air Source Heat Pump Quote in Scunthorpe</a>
            </div>
          </div>
        </section>
        {/* Heat Pump Suitability Section */}
        <section className="heat-pump-suitability-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '50px'}}>
            <div style={{flex: '1 1 400px', textAlign: 'center'}}>
              <h2 className="section-heading">Concerned Your Home May Not Suit an Air Source Heat Pump in Scunthorpe?</h2>
              <p className="section-text">Many UK properties, including older or compact homes, are suitable for air source heat pumps in Scunthorpe and North Lincolnshire. Our Gas Safe registered engineers assess your space, considering constraints, aesthetics and performance to deliver efficient solutions that qualify for the &pound;7,500 Boiler Upgrade Scheme grant.</p>
              <div className="section-cta-group">
                <a href="#contact-form" className="cta-button">Check If Your Home Is Suitable for a Heat Pump in Scunthorpe</a>
              </div>
            </div>
            <div style={{flex: '1 1 300px', maxWidth: '400px'}}>
              <img decoding="async" src="https://nimbusheatpumps.co.uk/wp-content/uploads/2025/06/iStock-2169699497-scaled.jpg" alt="Air source heat pump suitability for older homes in Scunthorpe by Nimbus Boilers & Heat Pumps" style={{width: '100%', height: 'auto', display: 'block', margin: '0 auto', borderRadius: '8px'}} loading="lazy" />
            </div>
          </div>
        </section>
        {/* Services Section */}
        <section className="our-services-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <h2 className="section-heading section-heading--spaced">Our Services: Gas Boiler and Air Source Heat Pump Installations, Repairs and Services in Scunthorpe, Grimsby, Doncaster, Lincoln & North Lincolnshire</h2>
            <div className="services-grid">
              <div className="service-card">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{margin: '0 auto 20px'}}>
                  <circle cx="12" cy="12" r="12" fill="#00a676"/>
                  <path d="M6 12.5L10 16.5L18 7.5" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 className="card-heading">Gas Boiler Installation and Setup in Scunthorpe</h3>
                <p className="card-text">Expert gas boiler installation and setup by Gas Safe registered engineers for efficient heating in Scunthorpe homes.</p>
              </div>
              <div className="service-card">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{margin: '0 auto 20px'}}>
                  <circle cx="12" cy="12" r="12" fill="#00a676"/>
                  <path d="M6 12.5L10 16.5L18 7.5" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 className="card-heading">Combi Boiler Replacement in Scunthorpe, Grimsby, Doncaster, Lincoln</h3>
                <p className="card-text">Efficient replacements and swaps of combi boilers with modern systems for reliable heating in Scunthorpe homes.</p>
              </div>
              <div className="service-card">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{margin: '0 auto 20px'}}>
                  <circle cx="12" cy="12" r="12" fill="#00a676"/>
                  <path d="M6 12.5L10 16.5L18 7.5" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 className="card-heading">Emergency Gas Boiler Repairs and Servicing in Scunthorpe</h3>
                <p className="card-text">Prompt emergency repairs and regular servicing for gas boilers to ensure safety and warmth in Scunthorpe properties.</p>
              </div>
              <div className="service-card">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{margin: '0 auto 20px'}}>
                  <circle cx="12" cy="12" r="12" fill="#00a676"/>
                  <path d="M6 12.5L10 16.5L18 7.5" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 className="card-heading">Gas Boiler Repair and Maintenance in North Lincolnshire</h3>
                <p className="card-text">Dependable repair and maintenance for gas boilers to maintain efficiency and safety across North Lincolnshire.</p>
              </div>
              <div className="service-card">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{margin: '0 auto 20px'}}>
                  <circle cx="12" cy="12" r="12" fill="#00a676"/>
                  <path d="M6 12.5L10 16.5L18 7.5" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 className="card-heading">Gas Safety Certificates and Commercial Heating Services in North Lincolnshire</h3>
                <p className="card-text">Gas safety certificate issuance and full heating services for commercial properties in North Lincolnshire.</p>
              </div>
              <div className="service-card">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{margin: '0 auto 20px'}}>
                  <circle cx="12" cy="12" r="12" fill="#00a676"/>
                  <path d="M6 12.5L10 16.5L18 7.5" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 className="card-heading">Smart Room Thermostat Installation for Energy Efficient Heating in Scunthorpe</h3>
                <p className="card-text">Smart thermostat installations to optimise energy efficiency and comfort in Scunthorpe homes.</p>
              </div>
              <div className="service-card">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{margin: '0 auto 20px'}}>
                  <circle cx="12" cy="12" r="12" fill="#00a676"/>
                  <path d="M6 12.5L10 16.5L18 7.5" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 className="card-heading">Smart Thermostatic Radiator Valves for Heat Pump Systems in North Lincolnshire</h3>
                <p className="card-text">Integration of smart radiator valves to enhance control and efficiency in heat pump systems across North Lincolnshire.</p>
              </div>
              <div className="service-card">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{margin: '0 auto 20px'}}>
                  <circle cx="12" cy="12" r="12" fill="#00a676"/>
                  <path d="M6 12.5L10 16.5L18 7.5" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 className="card-heading">Underfloor Heating Integration with Heat Pumps in North Lincolnshire</h3>
                <p className="card-text">Seamless underfloor heating integration with air source heat pumps for consistent warmth in North Lincolnshire properties.</p>
              </div>
              <div className="service-card">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{margin: '0 auto 20px'}}>
                  <circle cx="12" cy="12" r="12" fill="#00a676"/>
                  <path d="M6 12.5L10 16.5L18 7.5" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 className="card-heading">Air Source Heat Pump Installation in Scunthorpe</h3>
                <p className="card-text">Professional installation of efficient air source heat pumps under the MCS umbrella scheme, customised for homes in Scunthorpe to deliver reliable performance and grant eligibility.</p>
              </div>
              <div className="service-card">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{margin: '0 auto 20px'}}>
                  <circle cx="12" cy="12" r="12" fill="#00a676"/>
                  <path d="M6 12.5L10 16.5L18 7.5" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 className="card-heading">Boiler Upgrade Scheme Assistance and Grant Applications in Scunthorpe</h3>
                <p className="card-text">Expert support to navigate the Boiler Upgrade Scheme and secure &pound;7,500 grants for heat pump installations in Scunthorpe and North Lincolnshire.</p>
              </div>
              <div className="service-card">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{margin: '0 auto 20px'}}>
                  <circle cx="12" cy="12" r="12" fill="#00a676"/>
                  <path d="M6 12.5L10 16.5L18 7.5" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 className="card-heading">Heat Pump Services under MCS Umbrella Scheme in North Lincolnshire</h3>
                <p className="card-text">Comprehensive installation and maintenance for heat pumps under the MCS umbrella scheme, ensuring quality and compliance in North Lincolnshire.</p>
              </div>
            </div>
          </div>
        </section>
        {/* Areas We Cover Section */}
        <section className="areas-we-cover-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <h2 className="section-heading">Areas We Cover: Gas Boiler and Air Source Heat Pump Installations Across DN and LN Postcodes</h2>
            <p className="section-text section-text--intro">Based in Scunthorpe, North Lincolnshire, Nimbus Boilers & Heat Pumps serves all DN and LN postcodes with specialist gas boiler and air source heat pump installations focused on energy efficiency and sustainability.</p>
            <ul className="section-list">
              <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display: 'inline-block', verticalAlign: 'middle', marginRight: '10px'}}><circle cx="12" cy="12" r="12" fill="#00a676"/><path d="M6 12.5L10 16.5L18 7.5" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>Scunthorpe and North Lincolnshire (DN15-DN17, DN20): Brigg, Barton-upon-Humber, surrounding towns.</li>
              <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display: 'inline-block', verticalAlign: 'middle', marginRight: '10px'}}><circle cx="12" cy="12" r="12" fill="#00a676"/><path d="M6 12.5L10 16.5L18 7.5" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>Doncaster and nearby South Yorkshire areas (DN1-DN12, DN22): Doncaster, nearby areas.</li>
              <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display: 'inline-block', verticalAlign: 'middle', marginRight: '10px'}}><circle cx="12" cy="12" r="12" fill="#00a676"/><path d="M6 12.5L10 16.5L18 7.5" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>Grimsby and NE Lincolnshire (DN31-DN41): Grimsby, Cleethorpes, Goole, surrounding areas.</li>
              <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display: 'inline-block', verticalAlign: 'middle', marginRight: '10px'}}><circle cx="12" cy="12" r="12" fill="#00a676"/><path d="M6 12.5L10 16.5L18 7.5" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>Lincoln and Lincolnshire (LN1-LN13): Lincoln, Market Rasen, Horncastle, Woodhall Spa, Louth, rural areas.</li>
            </ul>
          </div>
        </section>
        {/* Grant Eligibility Section */}
        <section className="grant-eligibility-section section nimbus-section-base" style={{padding: '100px 32px', textAlign: 'center', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)', borderRadius: '8px', margin: '40px 0', fontFamily: 'Inter, sans-serif', border: '2px solid #A8D5BA'}}>
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <h2 className="section-heading">Verify Your Eligibility for the &pound;7,500 Boiler Upgrade Scheme Grant in Scunthorpe and North Lincolnshire</h2>
            <p className="section-text section-text--intro">Determine if your property qualifies for government funding through the Boiler Upgrade Scheme in Scunthorpe. Our engineers at Nimbus Boilers & Heat Pumps, working under an MCS umbrella scheme, will assist with the application process to obtain &pound;7,500 towards an air source heat pump, helping lower heating costs and emissions in North Lincolnshire.</p>
            <div className="section-cta-group">
              <a href="https://nimbusheatpumps.co.uk/boiler-upgrade-scheme-eligibility-7500-heat-pump-grants-scunthorpe/" className="cta-button">Check Grant Eligibility and Apply Now</a>
            </div>
          </div>
        </section>
        {/* Why Choose Section */}
        <section className="why-choose-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <h2 className="section-heading">Why Select Nimbus Boilers & Heat Pumps for Your Gas Boiler or Air Source Heat Pump Installation in Scunthorpe and North Lincolnshire?</h2>
            <ul className="section-list section-list--flush">
              <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display: 'inline-block', verticalAlign: 'middle', marginRight: '10px'}}><circle cx="12" cy="12" r="12" fill="#00a676"/><path d="M6 12.5L10 16.5L18 7.5" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>Gas Safe registered engineers for secure gas boiler repairs, maintenance and services in North Lincolnshire.</li>
              <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display: 'inline-block', verticalAlign: 'middle', marginRight: '10px'}}><circle cx="12" cy="12" r="12" fill="#00a676"/><path d="M6 12.5L10 16.5L18 7.5" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>Installers operating under the MCS umbrella scheme for compliant, high-quality air source heat pump installations in Scunthorpe.</li>
              <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display: 'inline-block', verticalAlign: 'middle', marginRight: '10px'}}><circle cx="12" cy="12" r="12" fill="#00a676"/><path d="M6 12.5L10 16.5L18 7.5" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>Specialist advice on the Boiler Upgrade Scheme to help secure &pound;7,500 grants for eco-friendly heat pump upgrades in Scunthorpe.</li>
              <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display: 'inline-block', verticalAlign: 'middle', marginRight: '10px'}}><circle cx="12" cy="12" r="12" fill="#00a676"/><path d="M6 12.5L10 16.5L18 7.5" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>In-depth knowledge of North Lincolnshire properties for customised energy-efficient heating solutions.</li>
              <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display: 'inline-block', verticalAlign: 'middle', marginRight: '10px'}}><circle cx="12" cy="12" r="12" fill="#00a676"/><path d="M6 12.5L10 16.5L18 7.5" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>Complete services from installation to ongoing maintenance for reliable performance and customer confidence.</li>
            </ul>
          </div>
        </section>
        {/* Manufacturers Section */}
        <section className="manufacturers-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <h2 className="section-heading section-heading--spaced">Our Trusted Boiler & Heat Pump Manufacturers in Scunthorpe and North Lincolnshire</h2>
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
        {/* FAQs Section */}
        <section className="faqs-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <h2 className="section-heading section-heading--spaced">Frequently Asked Questions</h2>
            <div className="faq-accordion">
              <div className={`faq-item ${faqActive === 0 ? 'active' : ''}`}>
                <h3 className="faq-question" onClick={() => toggleFaq(0)} role="button" tabIndex="0" aria-expanded={faqActive === 0} aria-controls="faq-answer-0">How much can I save with a new gas boiler?</h3>
                <div className="faq-answer" id="faq-answer-0" role="region" aria-labelledby="faq-question-0" aria-hidden={faqActive !== 0}>Upgrading to a modern gas boiler can save up to &pound;500 annually on heating bills compared to older models (savings vary depending on property and usage).</div>
              </div>
              <div className={`faq-item ${faqActive === 1 ? 'active' : ''}`}>
                <h3 className="faq-question" onClick={() => toggleFaq(1)} role="button" tabIndex="0" aria-expanded={faqActive === 1} aria-controls="faq-answer-1">What is an air source heat pump?</h3>
                <div className="faq-answer" id="faq-answer-1" role="region" aria-labelledby="faq-question-1" aria-hidden={faqActive !== 1}>An air source heat pump is an energy-efficient system that extracts heat from the outside air to warm your home and provide hot water, even in cold weather.</div>
              </div>
              <div className={`faq-item ${faqActive === 2 ? 'active' : ''}`}>
                <h3 className="faq-question" onClick={() => toggleFaq(2)} role="button" tabIndex="0" aria-expanded={faqActive === 2} aria-controls="faq-answer-2">How much can I save with the Boiler Upgrade Scheme?</h3>
                <div className="faq-answer" id="faq-answer-2" role="region" aria-labelledby="faq-question-2" aria-hidden={faqActive !== 2}>Eligible households can receive &pound;7,500 towards the cost of installing an air source heat pump, significantly reducing upfront expenses.</div>
              </div>
              <div className={`faq-item ${faqActive === 3 ? 'active' : ''}`}>
                <h3 className="faq-question" onClick={() => toggleFaq(3)} role="button" tabIndex="0" aria-expanded={faqActive === 3} aria-controls="faq-answer-3">Is my home suitable for a heat pump?</h3>
                <div className="faq-answer" id="faq-answer-3" role="region" aria-labelledby="faq-question-3" aria-hidden={faqActive !== 3}>Most properties are suitable. Our engineers conduct a free assessment to confirm and design the best system for your needs.</div>
              </div>
              <div className={`faq-item ${faqActive === 4 ? 'active' : ''}`}>
                <h3 className="faq-question" onClick={() => toggleFaq(4)} role="button" tabIndex="0" aria-expanded={faqActive === 4} aria-controls="faq-answer-4">What maintenance do heat pumps require?</h3>
                <div className="faq-answer" id="faq-answer-4" role="region" aria-labelledby="faq-question-4" aria-hidden={faqActive !== 4}>Annual servicing is recommended to ensure optimal performance. We offer comprehensive maintenance plans.</div>
              </div>
              <div className={`faq-item ${faqActive === 5 ? 'active' : ''}`}>
                <h3 className="faq-question" onClick={() => toggleFaq(5)} role="button" tabIndex="0" aria-expanded={faqActive === 5} aria-controls="faq-answer-5">How long does installation take?</h3>
                <div className="faq-answer" id="faq-answer-5" role="region" aria-labelledby="faq-question-5" aria-hidden={faqActive !== 5}>Typically 1-3 days, depending on your property. We minimise disruption with our professional team.</div>
              </div>
            </div>
          </div>
        </section>
        {/* Gas Safe Section */}
        <section className="gas-safe-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <h2 className="section-heading section-heading--spaced">Why Use a Gas Safe Registered Engineer?</h2>
            <img decoding="async" src="https://nimbusheatpumps.co.uk/wp-content/uploads/2025/08/Gas-Safe-Logo-2.png" alt="Gas Safe Registered Logo - Nimbus Heat Pumps Ltd" style={{maxWidth: '200px', height: 'auto', display: 'block', margin: '0 auto 30px auto'}} loading="lazy" />
            <p className="section-text section-text--intro">Choosing a Gas Safe registered engineer ensures all gas work is carried out safely and to the highest standards. Our certified team at Nimbus Boilers & Heat Pumps guarantees compliance, safety and peace of mind for all gas-related services in Scunthorpe and North Lincolnshire.</p>
            <ul className="section-list section-list--flush">
              <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display: 'inline-block', verticalAlign: 'middle', marginRight: '10px'}}><circle cx="12" cy="12" r="12" fill="#00a676"/><path d="M6 12.5L10 16.5L18 7.5" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>Legal requirement for all gas work in the UK</li>
              <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display: 'inline-block', verticalAlign: 'middle', marginRight: '10px'}}><circle cx="12" cy="12" r="12" fill="#00a676"/><path d="M6 12.5L10 16.5L18 7.5" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>Reduces risk of gas leaks, carbon monoxide poisoning and fires</li>
              <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display: 'inline-block', verticalAlign: 'middle', marginRight: '10px'}}><circle cx="12" cy="12" r="12" fill="#00a676"/><path d="M6 12.5L10 16.5L18 7.5" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>Ensures insurance and warranty validity</li>
              <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display: 'inline-block', verticalAlign: 'middle', marginRight: '10px'}}><circle cx="12" cy="12" r="12" fill="#00a676"/><path d="M6 12.5L10 16.5L18 7.5" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>Professional expertise for efficient and safe installations</li>
              <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display: 'inline-block', verticalAlign: 'middle', marginRight: '10px'}}><circle cx="12" cy="12" r="12" fill="#00a676"/><path d="M6 12.5L10 16.5L18 7.5" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>Peace of mind knowing work is done to the highest standards</li>
            </ul>
          </div>
        </section>
        {/* Free Quote Section */}
        <section className="free-quote-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <h2 className="section-heading">Request Your Free Quote for Gas Boiler or Air Source Heat Pump in Scunthorpe and North Lincolnshire</h2>
            <p className="section-text section-text--intro">Obtain a no-obligation quote for gas boiler or air source heat pump installation, repair and maintenance in Scunthorpe and North Lincolnshire. Our specialists at Nimbus Boilers & Heat Pumps will evaluate your property, review &pound;7,500 Boiler Upgrade Scheme grant options and recommend efficient heating solutions to reduce costs and emissions.</p>
            <div id="contact-form">
              <QuoteForm />
            </div>
          </div>
        </section>
        {/* Company Details Section */}
        <footer className="company-details-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <img decoding="async" src="https://nimbusheatpumps.co.uk/wp-content/uploads/2025/06/Nimbus-Heat-Pumps-Logo.png" alt="Nimbus Boilers & Heat Pumps Logo - Energy Efficient Heating in Scunthorpe and North Lincolnshire" style={{maxWidth: '200px', height: 'auto', display: 'block', margin: '0 auto 20px auto'}} loading="lazy" />
            <h2 className="footer-heading">Your Trusted Partner for Energy Efficient Heating Solutions in Scunthorpe and North Lincolnshire</h2>
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
        @media (max-width: 768px) {
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

export default Home;