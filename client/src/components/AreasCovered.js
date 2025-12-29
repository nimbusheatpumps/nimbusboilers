import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { LoadScript, GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';

const AreasCovered = () => {
  const [selectedMarker, setSelectedMarker] = useState(null);

  const markers = [
    { id: 1, position: { lat: 53.5723, lng: -0.6355 }, title: 'Scunthorpe', info: 'Heat pump installations Scunthorpe, Gas boiler services North Lincolnshire' },
    { id: 2, position: { lat: 53.552, lng: -0.485 }, title: 'Brigg', info: 'Air source heat pumps Brigg, Boiler repairs Barton-upon-Humber' },
    { id: 3, position: { lat: 53.401, lng: -0.774 }, title: 'Gainsborough', info: 'Heating services Gainsborough, Energy efficient upgrades Doncaster' }
  ];

  return (
    <>
      <Helmet>
        <title>Areas Covered: Heat Pumps & Boilers in Scunthorpe</title>
        <meta name="description" content="Nimbus provides heat pump & gas boiler installations across DN/LN postcodes in Scunthorpe, Doncaster & Lincoln. £7,500 Boiler Upgrade Scheme grants available." />
        <meta name="keywords" content="areas covered Scunthorpe, boiler installation areas North Lincolnshire, heat pump service Doncaster, Lincolnshire postcodes covered DN LN, gas boiler Scunthorpe areas" />
        <meta name="author" content="Nimbus Heat Pumps Ltd" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href="https://nimbusheatpumps.co.uk/areas-we-cover/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Areas We Cover | Nimbus Heat Pumps Scunthorpe" />
        <meta property="og:description" content="Areas we cover: Scunthorpe, Doncaster, Lincoln, Grimsby DN LN postcodes. Gas boiler installation & air source heat pumps across North Lincolnshire Northumberland Northeast Lincolnshire." />
        <meta property="og:url" content="https://nimbusheatpumps.co.uk/areas-we-cover/" />
        <meta property="og:image" content="https://nimbusheatpumps.co.uk/wp-content/uploads/2025/06/iStock-2211126281-scaled.jpg" />
        <meta property="og:image:alt" content="Areas covered by Nimbus Heat Pumps in Scunthorpe Lincolnshire" />
        <meta property="og:site_name" content="Nimbus Heat Pumps Ltd" />
        <meta property="og:locale" content="en_GB" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Areas We Cover | Nimbus Heat Pumps Scunthorpe" />
        <meta name="twitter:description" content="Areas we cover: Scunthorpe, Doncaster, Lincoln, Grimsby DN LN postcodes. Gas boiler installation & air source heat pumps across North Lincolnshire Northumberland Northeast Lincolnshire." />
        <meta name="twitter:image" content="https://nimbusheatpumps.co.uk/wp-content/uploads/2025/06/iStock-2211126281-scaled.jpg" />
        <meta name="twitter:image:alt" content="Areas covered by Nimbus Heat Pumps in Scunthorpe Lincolnshire" />
        <meta name="twitter:site" content="@NimbusHeatPumps" />
        <meta name="twitter:creator" content="@NimbusHeatPumps" />
        <meta name="geo.region" content="GB-NLN" />
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
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Nimbus Heat Pumps Ltd",
            "url": "https://nimbusheatpumps.co.uk/",
            "description": "Gas Safe registered installers for boiler installations, air source heat pumps and heating solutions in Scunthorpe and North Lincolnshire. Claim £7,500 Boiler Upgrade Scheme grants.",
            "publisher": {
              "@id": "https://nimbusheatpumps.co.uk/#organization"
            },
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://nimbusheatpumps.co.uk/?s={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
      </Helmet>

      <main>
        {/* Hero Section */}
        <section style={{ padding: '100px 32px', textAlign: 'center', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)', borderRadius: '8px', margin: '40px 0', fontFamily: "'Inter', sans-serif", border: '2px solid #A8D5BA' }}>
          <h1 style={{ fontSize: '32px', fontWeight: 600, marginBottom: '25px', color: '#333', textAlign: 'center' }}>Areas We Cover - Air Source Heat Pumps & Gas Boiler Installations</h1>
          <h2 style={{ fontSize: '22px', fontWeight: 400, marginBottom: '15px', color: '#666', textAlign: 'center' }}>North Lincolnshire & Lincolnshire Heating Services</h2>
          <p style={{ fontSize: '17px', lineHeight: '1.7', color: '#555', marginBottom: '25px', textAlign: 'center', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>Nimbus Heat Pumps Ltd provides comprehensive heating solutions across the DN and LN postcodes, serving Scunthorpe, Doncaster, Lincoln, Grimsby and surrounding areas. Our Gas Safe registered engineers specialise in air source heat pump installations and gas boiler services throughout North Lincolnshire and Lincolnshire.</p>
        </section>

        {/* Why Choose Nimbus Section */}
        <section className="why-choose-section" style={{ padding: '100px 32px', textAlign: 'center', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)', borderRadius: '8px', margin: '40px 0', fontFamily: "'Inter', sans-serif", border: '2px solid #A8D5BA' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '28px', fontWeight: 600, marginBottom: '25px', color: '#333', textAlign: 'center' }}>Why Choose Nimbus for Heat Pump and Boiler Services in Your Area?</h2>
            <p style={{ fontSize: '17px', lineHeight: '1.7', color: '#555', marginBottom: '30px', textAlign: 'center', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>We strive for the highest levels of customer satisfaction across North Lincolnshire, delivering expert installations qualified for the £7,500 Boiler Upgrade Scheme. Our team provides fast, reliable service with warranties on all work.</p>
          </div>
        </section>

        {/* Areas We Cover Section */}
        <section className="areas-we-cover-section" style={{ padding: '100px 32px', textAlign: 'center', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)', borderRadius: '8px', margin: '40px 0', fontFamily: "'Inter', sans-serif", border: '2px solid #A8D5BA' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '28px', fontWeight: 600, marginBottom: '25px', color: '#333', textAlign: 'center' }}>Areas We Cover: Air Source Heat Pumps and Gas Boiler Installations Across DN and LN Postcodes</h2>
            <p style={{ fontSize: '17px', lineHeight: '1.7', color: '#555', marginBottom: '30px', textAlign: 'center', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>Nimbus Heat Pumps Ltd covers all areas within the DN and LN postcodes, with a base in Scunthorpe, North Lincolnshire. We specialize in air source heat pump installations and gas boiler services, offering services across these postcodes with a focus on energy-efficient and sustainable heating solutions.</p>
            <div className="area-cards-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', justifyItems: 'center', marginBottom: '30px', width: '100%', maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
              <div className="area-card" style={{ background: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)', border: '2px solid #A8D5BA', marginBottom: '20px' }}>
                <div className="area-card-header" style={{ marginBottom: '20px', textAlign: 'center' }}>
                  <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#00a676', marginBottom: '10px' }}>Scunthorpe & North Lincolnshire</h3>
                  <p style={{ fontSize: '16px', color: '#666', fontWeight: 500 }}>DN15-17, DN20 Postcodes</p>
                </div>
                <div className="area-card-content">
                  <h4 style={{ fontSize: '18px', fontWeight: 600, color: '#333', marginBottom: '10px' }}>Location Highlights</h4>
                  <p style={{ fontSize: '15px', color: '#666', marginBottom: '15px' }}>Heat pump installers Scunthorpe, air source heat pumps Brigg, gas boiler services Barton-upon-Humber.</p>
                  <h4 style={{ fontSize: '18px', fontWeight: 600, color: '#333', marginBottom: '10px' }}>Key Services</h4>
                  <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#555', marginBottom: '15px' }}>Vaillant heat pump installations, Samsung air source heat pumps, Baxi gas boiler repairs and upgrades, smart thermostat installations. Reduce energy bills by up to 70% with our sustainable heating solutions in cold Lincolnshire winters.</p>
                  <h4 style={{ fontSize: '18px', fontWeight: 600, color: '#333', marginBottom: '10px' }}>Why Choose Us Here?</h4>
                  <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#555' }}>Local Scunthorpe base for fast response; full grant application support for £7,500 Boiler Upgrade Scheme. Work under MCS umbrella scheme with Gas Safe registration. 10+ years serving North Lincolnshire heating needs.</p>
                </div>
              </div>

              <div className="area-card" style={{ background: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)', border: '2px solid #A8D5BA', marginBottom: '20px' }}>
                <div className="area-card-header" style={{ marginBottom: '20px', textAlign: 'center' }}>
                  <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#00a676', marginBottom: '10px' }}>Doncaster & South Yorkshire</h3>
                  <p style={{ fontSize: '16px', color: '#666', fontWeight: 500 }}>DN1-12, DN22 Postcodes</p>
                </div>
                <div className="area-card-content">
                  <h4 style={{ fontSize: '18px', fontWeight: 600, color: '#333', marginBottom: '10px' }}>Location Highlights</h4>
                  <p style={{ fontSize: '15px', color: '#666', marginBottom: '15px' }}>Boiler replacement Doncaster, air source heat pumps Doncaster areas.</p>
                  <h4 style={{ fontSize: '18px', fontWeight: 600, color: '#333', marginBottom: '10px' }}>Key Services</h4>
                  <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#555', marginBottom: '15px' }}>Worcester Bosch boiler services, Mitsubishi Electric heat pumps, Vaillant heating systems, energy-efficient upgrades tailored to Doncaster homes and commercial properties.</p>
                  <h4 style={{ fontSize: '18px', fontWeight: 600, color: '#333', marginBottom: '10px' }}>Why Choose Us Here?</h4>
                  <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#555' }}>Energy-efficient solutions with tailored installations for Doncaster's diverse housing stock. Work under MCS umbrella scheme with full grant application support. Trusted by homeowners across South Yorkshire.</p>
                </div>
              </div>

              <div className="area-card" style={{ background: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)', border: '2px solid #A8D5BA', marginBottom: '20px' }}>
                <div className="area-card-header" style={{ marginBottom: '20px', textAlign: 'center' }}>
                  <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#00a676', marginBottom: '10px' }}>Grimsby & NE Lincolnshire</h3>
                  <p style={{ fontSize: '16px', color: '#666', fontWeight: 500 }}>DN31-41 Postcodes</p>
                </div>
                <div className="area-card-content">
                  <h4 style={{ fontSize: '18px', fontWeight: 600, color: '#333', marginBottom: '10px' }}>Location Highlights</h4>
                  <p style={{ fontSize: '15px', color: '#666', marginBottom: '15px' }}>Heat pump services Grimsby, boiler repairs Cleethorpes.</p>
                  <h4 style={{ fontSize: '18px', fontWeight: 600, color: '#333', marginBottom: '10px' }}>Key Services</h4>
                  <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#555', marginBottom: '15px' }}>Viessmann heat pump setups, Intergas boiler installations, Samsung air source systems adapted for coastal areas. Expert gas safety certificates and maintenance services.</p>
                  <h4 style={{ fontSize: '18px', fontWeight: 600, color: '#333', marginBottom: '10px' }}>Why Choose Us Here?</h4>
                  <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#555' }}>Coastal-adapted systems for Grimsby and surrounding areas. Free quotes with no obligation and expert guidance through the Boiler Upgrade Scheme process. Serving North East Lincolnshire for over a decade.</p>
                </div>
              </div>

              <div className="area-card" style={{ background: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)', border: '2px solid #A8D5BA', marginBottom: '20px' }}>
                <div className="area-card-header" style={{ marginBottom: '20px', textAlign: 'center' }}>
                  <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#00a676', marginBottom: '10px' }}>Lincoln & Lincolnshire</h3>
                  <p style={{ fontSize: '16px', color: '#666', fontWeight: 500 }}>LN1-13 Postcodes</p>
                </div>
                <div className="area-card-content">
                  <h4 style={{ fontSize: '18px', fontWeight: 600, color: '#333', marginBottom: '10px' }}>Location Highlights</h4>
                  <p style={{ fontSize: '15px', color: '#666', marginBottom: '15px' }}>Heating services Market Rasen, boiler upgrades Louth.</p>
                  <h4 style={{ fontSize: '18px', fontWeight: 600, color: '#333', marginBottom: '10px' }}>Key Services</h4>
                  <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#555', marginBottom: '15px' }}>Ideal heat pumps and boilers, Baxi gas systems, Viessmann renewable heating solutions for rural and urban areas. Underfloor heating and smart controls in expert installations.</p>
                  <h4 style={{ fontSize: '18px', fontWeight: 600, color: '#333', marginBottom: '10px' }}>Why Choose Us Here?</h4>
                  <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#555' }}>Rural expertise in Lincolnshire areas like Market Rasen and Horncastle. Comprehensive service from consultation to installation with ongoing support. Fully insured and accredited with industry standards.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Grant Areas Card */}
        <section style={{ padding: '100px 32px', textAlign: 'center', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)', borderRadius: '8px', margin: '40px 0', fontFamily: "'Inter', sans-serif", border: '2px solid #A8D5BA' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <div style={{ border: 'none', borderRadius: '0', margin: '0' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="12" fill="#00a676"/>
                  <path d="M6 12.5L10 16.5L18 7.5" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div>
                  <h3 style={{ fontSize: '28px', fontWeight: 600, marginBottom: '25px', color: '#333', textAlign: 'center' }}>£7,500 Boiler Upgrade Scheme</h3>
                  <p style={{ fontSize: '17px', lineHeight: '1.7', color: '#555', marginBottom: '25px', textAlign: 'center', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>All areas within our coverage qualify for government-backed grants</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Map Section */}
        <section style={{ padding: '100px 32px', textAlign: 'center', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)', borderRadius: '8px', margin: '40px 0', fontFamily: "'Inter', sans-serif", border: '2px solid #A8D5BA' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '28px', fontWeight: 600, marginBottom: '25px', color: '#333', textAlign: 'center' }}>Our Service Area Map</h2>
            <p style={{ fontSize: '17px', lineHeight: '1.7', color: '#555', marginBottom: '30px', textAlign: 'center', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>See our coverage across North Lincolnshire, Lincolnshire and South Yorkshire - we're here to serve you!</p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div className="map-container" style={{ maxWidth: '100%', margin: '0 auto', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 8px 32px rgba(0, 166, 118, 0.15)', border: '2px solid #A8D5BA' }}>
                <LoadScript googleMapsApiKey={process.env.GOOGLE_MAPS_API_KEY}>
                  <GoogleMap
                    mapContainerStyle={{ height: '450px', width: '100%' }}
                    center={{ lat: 53.5723, lng: -0.6355 }}
                    zoom={10}
                  >
                    {markers.map(marker => (
                      <Marker
                        key={marker.id}
                        position={marker.position}
                        onClick={() => setSelectedMarker(marker)}
                      />
                    ))}
                    {selectedMarker && (
                      <InfoWindow
                        position={selectedMarker.position}
                        onCloseClick={() => setSelectedMarker(null)}
                      >
                        <div>
                          <h3>{selectedMarker.title}</h3>
                          <p>{selectedMarker.info}</p>
                        </div>
                      </InfoWindow>
                    )}
                  </GoogleMap>
                </LoadScript>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section" style={{ padding: '100px 32px', textAlign: 'center', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)', borderRadius: '8px', margin: '40px 0', fontFamily: "'Inter', sans-serif", border: '2px solid #A8D5BA' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '28px', fontWeight: 600, marginBottom: '25px', color: '#333', textAlign: 'center' }}>Frequently Asked Questions About Heat Pumps and Boiler Services</h2>
            <div className="faq-cards-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', justifyItems: 'center', marginBottom: '30px', width: '100%', maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
              <div style={{ padding: '20px', background: 'white', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)', border: '2px solid #00a676', textAlign: 'center' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '15px', color: '#333' }}>Can I get the Boiler Upgrade Scheme in Doncaster?</h3>
                <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#555', margin: 0 }}>Yes! All areas within our Doncaster coverage (DN1-12, DN22) qualify for the £7,500 Boiler Upgrade Scheme. We handle the full application process for you.</p>
              </div>
              <div style={{ padding: '20px', background: 'white', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)', border: '2px solid #00a676', textAlign: 'center' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '15px', color: '#333' }}>How long does a heat pump installation take in Grimsby?</h3>
                <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#555', margin: 0 }}>Typical air source heat pump installations in Grimsby and surrounding areas take 1-2 days. We ensure minimal disruption with our experienced team.</p>
              </div>
              <div style={{ padding: '20px', background: 'white', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)', border: '2px solid #00a676', textAlign: 'center' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '15px', color: '#333' }}>Do you serve rural areas like Market Rasen?</h3>
                <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#555', margin: 0 }}>Absolutely! Our Lincolnshire coverage includes rural areas like Market Rasen, Horncastle and Louth, with expertise in diverse property types and challenging installations.</p>
              </div>
              <div style={{ padding: '20px', background: 'white', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)', border: '2px solid #00a676', textAlign: 'center' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '15px', color: '#333' }}>What boiler brands do you install in Scunthorpe?</h3>
                <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#555', margin: 0 }}>We install premium brands like Worcester Bosch, Baxi, Ideal, Vaillant and Viessmann in Scunthorpe and North Lincolnshire, all with full manufacturer warranties.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{ padding: '100px 32px', textAlign: 'center', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)', borderRadius: '8px', margin: '40px 0', fontFamily: "'Inter', sans-serif", border: '2px solid #A8D5BA' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '28px', fontWeight: 600, marginBottom: '25px', color: '#333', textAlign: 'center' }}>Get Your Free Quote Today</h2>
            <p style={{ fontSize: '17px', lineHeight: '1.7', color: '#555', marginBottom: '30px', textAlign: 'center', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>Don't wait to upgrade your home's heating system. Contact our experts today for a no-obligation quote on air source heat pumps, gas boiler installations or service work in your area.</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
              <a href="/#contact-form" style={{ padding: '14px 28px', border: '2px solid #00a676', borderRadius: '14px', fontWeight: 600, fontSize: '14px', letterSpacing: '-0.01em', cursor: 'pointer', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', minHeight: '46px', transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)', whiteSpace: 'nowrap', position: 'relative', overflow: 'hidden', background: 'rgba(255, 255, 255, 0.9)', color: '#007a57', boxShadow: '0 2px 8px rgba(0, 166, 118, 0.1)', marginLeft: '0' }}>Schedule Free Scunthorpe Consultation Now</a>
              <a href="https://nimbusheatpumps.co.uk/gas-boiler-installation-scunthorpe/" style={{ padding: '14px 28px', border: '2px solid #00a676', borderRadius: '14px', fontWeight: 600, fontSize: '14px', letterSpacing: '-0.01em', cursor: 'pointer', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', minHeight: '46px', transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)', whiteSpace: 'nowrap', position: 'relative', overflow: 'hidden', background: 'rgba(255, 255, 255, 0.9)', color: '#007a57', boxShadow: '0 2px 8px rgba(0, 166, 118, 0.1)', marginLeft: '0' }}>Get £7,500 Grant Quote Today</a>
              <a href="tel:+447487546550" style={{ padding: '14px 28px', border: '2px solid #00a676', borderRadius: '14px', fontWeight: 600, fontSize: '14px', letterSpacing: '-0.01em', cursor: 'pointer', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', minHeight: '46px', transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)', whiteSpace: 'nowrap', position: 'relative', overflow: 'hidden', background: 'rgba(255, 255, 255, 0.9)', color: '#007a57', boxShadow: '0 2px 8px rgba(0, 166, 118, 0.1)', marginLeft: '0' }}>Call Scunthorpe Today: 07487 546550</a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="company-details-section" style={{ padding: '60px 32px', textAlign: 'center', borderRadius: '8px', marginTop: '40px', fontFamily: "'Inter', sans-serif", border: '2px solid #A8D5BA' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <img src="https://nimbusheatpumps.co.uk/wp-content/uploads/2025/06/Nimbus-Heat-Pumps-Logo.png" alt="Nimbus Heat Pumps Ltd Logo - Energy Efficient Heating in Scunthorpe and North Lincolnshire" style={{ maxWidth: '200px', height: 'auto', display: 'block', margin: '0 auto 20px auto' }} loading="lazy" />
            <p style={{ fontSize: '18px', fontWeight: 600, color: '#007a57', marginBottom: '30px' }}>Your Trusted Partner for Energy Efficient Heating Solutions in Scunthorpe and North Lincolnshire</p>
            <p style={{ fontSize: '17px', lineHeight: '1.7', color: '#555', marginBottom: '30px', textAlign: 'center' }}>Nimbus Heat Pumps Ltd<br />Company Number: 16497314<br />Trading Address: 3 Crossbeck Road, Scunthorpe, DN16 3HR<br />Registered Office: Lytchett House, 13 Freeland Park, Wareham Road, Poole, Dorset, BH16 6FA<br />Email: info@nimbusheatpumps.co.uk<br />Telephone: +44 7487 546550</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', marginBottom: '30px' }}>
              <a href="https://nimbusheatpumps.co.uk/policies/privacy-policy/" target="_blank" rel="noopener noreferrer" style={{ padding: '14px 28px', border: '2px solid #00a676', borderRadius: '14px', fontWeight: 600, fontSize: '14px', letterSpacing: '-0.01em', cursor: 'pointer', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', minHeight: '46px', transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)', whiteSpace: 'normal', position: 'relative', overflow: 'hidden', background: 'rgba(255, 255, 255, 0.9)', color: '#007a57', boxShadow: '0 2px 8px rgba(0, 166, 118, 0.1)' }}>Privacy Policy</a>
              <a href="https://nimbusheatpumps.co.uk/policies/terms-and-conditions/" target="_blank" rel="noopener noreferrer" style={{ padding: '14px 28px', border: '2px solid #00a676', borderRadius: '14px', fontWeight: 600, fontSize: '14px', letterSpacing: '-0.01em', cursor: 'pointer', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', minHeight: '46px', transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)', whiteSpace: 'normal', position: 'relative', overflow: 'hidden', background: 'rgba(255, 255, 255, 0.9)', color: '#007a57', boxShadow: '0 2px 8px rgba(0, 166, 118, 0.1)' }}>Terms & Conditions</a>
              <a href="https://nimbusheatpumps.co.uk/policies/cookies-policy/" target="_blank" rel="noopener noreferrer" style={{ padding: '14px 28px', border: '2px solid #00a676', borderRadius: '14px', fontWeight: 600, fontSize: '14px', letterSpacing: '-0.01em', cursor: 'pointer', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', minHeight: '46px', transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)', whiteSpace: 'normal', position: 'relative', overflow: 'hidden', background: 'rgba(255, 255, 255, 0.9)', color: '#007a57', boxShadow: '0 2px 8px rgba(0, 166, 118, 0.1)' }}>Cookies Policy</a>
            </div>
            <p style={{ fontSize: '14px', color: '#777', textAlign: 'center' }}>© Nimbus Heat Pumps Ltd. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </>
  );
};

export default AreasCovered;