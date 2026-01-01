import React, { useState, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import {
  ClockIcon,
  CurrencyDollarIcon,
  TruckIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';
const Testimonials = lazy(() => import('./Testimonials'));
const QuoteForm = lazy(() => import('./QuoteForm'));
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
              { "@type": "City", "name": "Barton-upon-Humber" },
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
              { "@type": "City", "name": "Burton-upon-Stather" },
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
                <a href="/gas-boiler-installation-scunthorpe" className="cta-button cta-button--nowrap">Get an Instant Gas Boiler Quote in Scunthorpe, Grimsby, Doncaster, Lincoln</a>
                <a href="#contact-form" className="cta-button cta-button--nowrap">Get a Free Air Source Heat Pump Quote in Scunthorpe</a>
              </div>
              <div className="mt-6 mx-auto max-w-md">
                <a href="/gas-safe-boiler-installers-scunthorpe"
                   className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-400/80 rounded-2xl px-6 py-3 text-sm font-bold text-green-900 shadow-lg hover:shadow-xl hover:shadow-green-200/50 hover:scale-[1.02] hover:bg-green-100 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-200/50 sm:px-8 sm:py-4 w-full"
                   aria-label="10 Year Warranty - Gas Safe Registered Boiler Installers in Scunthorpe">
                  <img src="/images/gas-safe-logo.svg" alt="Gas Safe Registered Logo" className="w-7 h-7 flex-shrink-0 sm:w-9 sm:h-9" loading="lazy" decoding="async" />
                  <span className="text-center leading-tight">10 Year Warranty<span className="sm:hidden"><br /></span><br className="hidden sm:inline" />on All Installations<br />— Gas Safe Registered</span>
                </a>
              </div>
            </div>
            <div style={{flex: '1 1 300px', maxWidth: '400px'}}>
              <img src="/images/hero-team-service.webp" alt="Nimbus Boilers expert team servicing boilers Scunthorpe" className="w-full h-96 object-cover lg:h-screen rounded-lg" loading="lazy" />
            </div>
          </div>
        </section>
        {/* Why Choose Nimbus Section */}
        <section className="why-choose-nimbus section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <h2 className="section-heading">Why Choose Nimbus?</h2>
            <ul className="section-list">
              <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display: 'inline-block', verticalAlign: 'middle', marginRight: '10px'}}><circle cx="12" cy="12" r="12" fill="#00a676"/><path d="M6 12.5L10 16.5L18 7.5" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>Instant online quotes</li>
              <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display: 'inline-block', verticalAlign: 'middle', marginRight: '10px'}}><circle cx="12" cy="12" r="12" fill="#00a676"/><path d="M6 12.5L10 16.5L18 7.5" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>Assistance with up to &pound;7,500 boiler grants</li>
              <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display: 'inline-block', verticalAlign: 'middle', marginRight: '10px'}}><circle cx="12" cy="12" r="12" fill="#00a676"/><path d="M6 12.5L10 16.5L18 7.5" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>Same-day emergency response in Scunthorpe & North Lincolnshire</li>
              <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display: 'inline-block', verticalAlign: 'middle', marginRight: '10px'}}><circle cx="12" cy="12" r="12" fill="#00a676"/><path d="M6 12.5L10 16.5L18 7.5" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>10-year parts & labour warranties on installations</li>
              <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display: 'inline-block', verticalAlign: 'middle', marginRight: '10px'}}><circle cx="12" cy="12" r="12" fill="#00a676"/><path d="M6 12.5L10 16.5L18 7.5" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>Gas Safe registered engineers (ID: 966812)</li>
            </ul>
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
              <a href="/gas-boiler-installation-scunthorpe" className="cta-button">Get Your Gas Boiler Quote in Scunthorpe</a>
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
              <img decoding="async" src="/images/hero-install.webp" alt="Air source heat pump suitability for older homes in Scunthorpe by Nimbus Boilers & Heat Pumps" style={{width: '100%', height: 'auto', display: 'block', margin: '0 auto', borderRadius: '8px'}} loading="lazy" />
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
            <p className="section-text section-text--intro">Determine if your property qualifies for government funding through the Boiler Upgrade Scheme in Scunthorpe. Our engineers at Nimbus Boilers & Heat Pumps, working under the MCS umbrella scheme, will assist with the application process to obtain &pound;7,500 towards an air source heat pump, helping lower heating costs and emissions in North Lincolnshire.</p>
            <div className="section-cta-group">
              <a href="/boiler-grants-scunthorpe" className="cta-button">Check Grant Eligibility and Apply Now</a>
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
                  <img decoding="async" src="/images/baxi-logo.png" alt="Baxi boilers logo - Nimbus Boilers & Heat Pumps in Scunthorpe" style={{maxWidth: '150px', maxHeight: '100px', display: 'block'}} loading="lazy" />
                </a>
              </div>
              <div style={{padding: '20px', border: '1px solid #A8D5BA', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)', backgroundColor: '#f9f9f9', minHeight: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.3s ease, box-shadow 0.3s ease'}}>
                <a href="https://idealheating.com/" target="_blank" rel="noopener noreferrer" style={{display: 'inline-block', textDecoration: 'none'}}>
                  <img decoding="async" src="/images/ideal-logo.png" alt="Ideal boilers logo - Nimbus Boilers & Heat Pumps in Scunthorpe" style={{maxWidth: '150px', maxHeight: '100px', display: 'block'}} loading="lazy" />
                </a>
              </div>
              <div style={{padding: '20px', border: '1px solid #A8D5BA', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)', backgroundColor: '#f9f9f9', minHeight: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.3s ease, box-shadow 0.3s ease'}}>
                <a href="https://www.vaillant.co.uk/" target="_blank" rel="noopener noreferrer" style={{display: 'inline-block', textDecoration: 'none'}}>
                  <img decoding="async" src="/images/vaillant-logo.png" alt="Vaillant boilers logo - Nimbus Boilers & Heat Pumps in Scunthorpe" style={{maxWidth: '150px', maxHeight: '100px', display: 'block'}} loading="lazy" />
                </a>
              </div>
              <div style={{padding: '20px', border: '1px solid #A8D5BA', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)', backgroundColor: '#f9f9f9', minHeight: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.3s ease, box-shadow 0.3s ease'}}>
                <a href="https://www.worcester-bosch.co.uk/" target="_blank" rel="noopener noreferrer" style={{display: 'inline-block', textDecoration: 'none'}}>
                  <img decoding="async" src="/images/worcester-logo.png" alt="Worcester Bosch boilers logo - Nimbus Boilers & Heat Pumps in Scunthorpe" style={{maxWidth: '150px', maxHeight: '100px', display: 'block'}} loading="lazy" />
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Testimonials Section */}
        <section className="testimonials-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <Suspense fallback={<div className="loading-spinner">Loading testimonials...</div>}>
              <Testimonials />
            </Suspense>
          </div>
        </section>
        {/* Why Choose Nimbus Boilers in Scunthorpe */}
        <section className="why-choose-nimbus-boilers section nimbus-section-base">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading mb-12">Why Choose Nimbus Boilers in Scunthorpe?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg border border-green-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center group">
                <ClockIcon className="w-16 h-16 text-green-600 mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold mb-3 text-gray-900">Instant Online Quote in Seconds</h3>
                <p className="text-gray-700 leading-relaxed">Get instant online quotes for gas boiler installation in Scunthorpe.</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg border border-green-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center group">
                <CurrencyDollarIcon className="w-16 h-16 text-green-600 mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold mb-3 text-gray-900">Free ECO4 Grant Referral</h3>
                <p className="text-gray-700 leading-relaxed">Free ECO4 grant referral (active until 31 March 2026, Gas Safe 966812).</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg border border-green-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center group">
                <TruckIcon className="w-16 h-16 text-green-600 mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold mb-3 text-gray-900">Same-Day Response</h3>
                <p className="text-gray-700 leading-relaxed">Same-day response for boiler emergencies in Scunthorpe.</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg border border-green-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center group">
                <ShieldCheckIcon className="w-16 h-16 text-green-600 mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold mb-3 text-gray-900">Up to 12-Year Warranties</h3>
                <p className="text-gray-700 leading-relaxed">Up to 12-year warranties on premium boilers (e.g. Worcester Bosch).</p>
              </div>
            </div>
          </div>
        </section>
        {/* FAQs Section */}
        <section className="faqs-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <h2 className="section-heading section-heading--spaced">Frequently Asked Questions</h2>
            <div className="faq-accordion">
              <div className={`faq-item ${faqActive === 0 ? 'active' : ''}`}>
                <button type="button" id="faq-question-0" className="faq-question" onClick={() => toggleFaq(0)} aria-expanded={faqActive === 0} aria-controls="faq-answer-0">How much can I save with a new gas boiler?</button>
                <div className="faq-answer" id="faq-answer-0" role="region" aria-labelledby="faq-question-0" aria-hidden={faqActive !== 0}>Upgrading to a modern gas boiler can save up to &pound;500 annually on heating bills compared to older models (savings vary depending on property and usage).</div>
              </div>
              <div className={`faq-item ${faqActive === 1 ? 'active' : ''}`}>
                <button type="button" id="faq-question-1" className="faq-question" onClick={() => toggleFaq(1)} aria-expanded={faqActive === 1} aria-controls="faq-answer-1">What is an air source heat pump?</button>
                <div className="faq-answer" id="faq-answer-1" role="region" aria-labelledby="faq-question-1" aria-hidden={faqActive !== 1}>An air source heat pump is an energy-efficient system that extracts heat from the outside air to warm your home and provide hot water, even in cold weather.</div>
              </div>
              <div className={`faq-item ${faqActive === 2 ? 'active' : ''}`}>
                <button type="button" id="faq-question-2" className="faq-question" onClick={() => toggleFaq(2)} aria-expanded={faqActive === 2} aria-controls="faq-answer-2">How much can I save with the Boiler Upgrade Scheme?</button>
                <div className="faq-answer" id="faq-answer-2" role="region" aria-labelledby="faq-question-2" aria-hidden={faqActive !== 2}>Eligible households can receive &pound;7,500 towards the cost of installing an air source heat pump, significantly reducing upfront expenses.</div>
              </div>
              <div className={`faq-item ${faqActive === 3 ? 'active' : ''}`}>
                <button type="button" id="faq-question-3" className="faq-question" onClick={() => toggleFaq(3)} aria-expanded={faqActive === 3} aria-controls="faq-answer-3">Is my home suitable for a heat pump?</button>
                <div className="faq-answer" id="faq-answer-3" role="region" aria-labelledby="faq-question-3" aria-hidden={faqActive !== 3}>Most properties are suitable. Our engineers conduct a free assessment to confirm and design the best system for your needs.</div>
              </div>
              <div className={`faq-item ${faqActive === 4 ? 'active' : ''}`}>
                <button type="button" id="faq-question-4" className="faq-question" onClick={() => toggleFaq(4)} aria-expanded={faqActive === 4} aria-controls="faq-answer-4">What maintenance do heat pumps require?</button>
                <div className="faq-answer" id="faq-answer-4" role="region" aria-labelledby="faq-question-4" aria-hidden={faqActive !== 4}>Annual servicing is recommended to ensure optimal performance. We offer comprehensive maintenance plans.</div>
              </div>
              <div className={`faq-item ${faqActive === 5 ? 'active' : ''}`}>
                <button type="button" id="faq-question-5" className="faq-question" onClick={() => toggleFaq(5)} aria-expanded={faqActive === 5} aria-controls="faq-answer-5">How long does installation take?</button>
                <div className="faq-answer" id="faq-answer-5" role="region" aria-labelledby="faq-question-5" aria-hidden={faqActive !== 5}>Typically 1-3 days, depending on your property. We minimise disruption with our professional team.</div>
              </div>
            </div>
          </div>
        </section>
        {/* Gas Safe Section */}
        <section className="gas-safe-section section nimbus-section-base">
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
            <h2 className="section-heading section-heading--spaced">Why Use a Gas Safe Registered Engineer?</h2>
            <img decoding="async" src="/images/gas-safe-logo.png" alt="Gas Safe Registered Logo - Nimbus Heat Pumps Ltd" style={{maxWidth: '200px', height: 'auto', display: 'block', margin: '0 auto 30px auto'}} loading="lazy" />
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
          white-space: normal !important;
        }
        .cta-button:hover {
          background: #ffffff;
          border-color: #007a57;
          color: #007a57;
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 6px 20px rgba(0, 166, 118, 0.2), inset 0 0 0 2px #ffffff;
        }
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