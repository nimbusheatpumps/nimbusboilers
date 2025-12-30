import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import QuoteForm from './QuoteForm';

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Array(14).fill(false));

  const toggleItem = (index) => {
    setOpenItems(prev => prev.map((item, i) => i === index ? !item : item));
  };

  const faqData = [
    {
      question: "How do air source heat pumps work?",
      answer: "An air source heat pump draws heat from outside air using a refrigerant circuit, compresses it to raise the temperature, then delivers that heat to radiators or underfloor loops. For a full walkthrough see the <a href=\"https://energysavingtrust.org.uk/advice/air-source-heat-pumps/\" target=\"_blank\" rel=\"noopener noreferrer\">Energy Saving Trust guide to air source heat pumps</a> and the <a href=\"https://www.nationalgrid.com/stories/energy-explained/how-do-heat-pumps-work\" target=\"_blank\" rel=\"noopener noreferrer\">National Grid explainer</a>."
    },
    {
      question: "How much do air source heat pumps cost to install in the UK?",
      answer: "Typical UK installation costs range between £7,000 and £13,000 according to the <a href=\"https://energysavingtrust.org.uk/advice/air-source-heat-pumps/\" target=\"_blank\" rel=\"noopener noreferrer\">Energy Saving Trust</a>, with recent surveys from <a href=\"https://www.which.co.uk/reviews/air-source-heat-pumps/article/air-source-heat-pumps-costs\" target=\"_blank\" rel=\"noopener noreferrer\">Which?</a> reporting similar totals. The <a href=\"https://www.gov.uk/apply-boiler-upgrade-scheme\" target=\"_blank\" rel=\"noopener noreferrer\">GOV.UK Boiler Upgrade Scheme</a> can cut upfront cost by £7,500 for eligible homes."
    },
    {
      question: "Do air source heat pumps work in cold UK weather?",
      answer: "Modern inverter heat pumps maintain output down to about −15°C by using defrost cycles and weather compensation, as outlined by the <a href=\"https://www.heatpumps.org.uk/faq/\" target=\"_blank\" rel=\"noopener noreferrer\">Heat Pump Association</a> and the <a href=\"https://energysavingtrust.org.uk/advice/air-source-heat-pumps/\" target=\"_blank\" rel=\"noopener noreferrer\">Energy Saving Trust</a>."
    },
    {
      question: "How efficient are air source heat pumps compared to boilers?",
      answer: "Well designed systems deliver 3–4.5 kWh of heat from each kWh of electricity according to the <a href=\"https://energysavingtrust.org.uk/advice/air-source-heat-pumps/\" target=\"_blank\" rel=\"noopener noreferrer\">Energy Saving Trust</a>, while <a href=\"https://www.which.co.uk/reviews/boilers/article/gas-boiler-types-explained\" target=\"_blank\" rel=\"noopener noreferrer\">Which?</a> lists modern gas boilers around 90% efficiency, showing the potential gain."
    },
    {
      question: "Do I need to replace or upgrade my radiators for a heat pump?",
      answer: "Many homes reuse existing radiators, yet upsizing key emitters or adding underfloor heating helps heat pumps run at lower flow temperatures. The <a href=\"https://energysavingtrust.org.uk/advice/air-source-heat-pumps/\" target=\"_blank\" rel=\"noopener noreferrer\">Energy Saving Trust</a> and <a href=\"https://www.simpleenergyadvice.org.uk/measures/measure/heat-pumps\" target=\"_blank\" rel=\"noopener noreferrer\">Simple Energy Advice service</a> both recommend reviewing emitters during the survey."
    },
    {
      question: "How long do air source heat pumps last and what maintenance is needed?",
      answer: "With regular servicing an air source heat pump typically lasts 15–20 years. The <a href=\"https://energysavingtrust.org.uk/advice/air-source-heat-pumps/\" target=\"_blank\" rel=\"noopener noreferrer\">Energy Saving Trust maintenance guidance</a> and the UK government <a href=\"https://www.gov.uk/government/publications/heat-pump-ready-what-it-means-for-consumers/heat-pump-ready-what-it-means-for-consumers\" target=\"_blank\" rel=\"noopener noreferrer\">Heat Pump Ready consumer guide</a> outline filter cleaning, airflow checks and annual inspections."
    },
    {
      question: "Can air source heat pumps cool homes in summer?",
      answer: "Reversible models switch the refrigerant cycle to supply cooling through fan coils or underfloor loops. The <a href=\"https://www.nationalgrid.com/stories/energy-explained/how-do-heat-pumps-work\" target=\"_blank\" rel=\"noopener noreferrer\">National Grid explainer</a> and the UK government <a href=\"https://www.gov.uk/government/publications/heat-pump-ready-what-it-means-for-consumers/heat-pump-ready-what-it-means-for-consumers\" target=\"_blank\" rel=\"noopener noreferrer\">Heat Pump Ready guide</a> describe how and when to use the cooling mode."
    },
    {
      question: "Are air source heat pumps noisy?",
      answer: "Outdoor units usually run at 40–60 dB, similar to normal conversation, per the <a href=\"https://energysavingtrust.org.uk/advice/air-source-heat-pumps/\" target=\"_blank\" rel=\"noopener noreferrer\">Energy Saving Trust</a>. The <a href=\"https://www.planningportal.co.uk/permission/common-projects/heat-pumps/planning-permission-air-source-heat-pump\" target=\"_blank\" rel=\"noopener noreferrer\">Planning Portal</a> confirms the 42 dB limit for permitted development in England."
    },
    {
      question: "Are we Gas Safe and MCS certified?",
      answer: "Nimbus Boilers & Heat Pumps appears on the official <a href=\"https://www.gassaferegister.co.uk/find-an-engineer/\" target=\"_blank\" rel=\"noopener noreferrer\">Gas Safe Register</a> under ID 966812. Installations are delivered through an accredited MCS umbrella partner listed on <a href=\"https://mcscertified.com/find-an-installer/\" target=\"_blank\" rel=\"noopener noreferrer\">MCS Certified</a> so Boiler Upgrade Scheme rules are met."
    },
    {
      question: "What else should I know before getting a heat pump?",
      answer: "Focus on insulation, electrical capacity and an achievable install timetable so performance meets expectations. The <a href=\"https://www.nesta.org.uk/report/what-homeowners-want-to-know-about-heat-pumps-data-driven-faqs/full/\" target=\"_blank\" rel=\"noopener noreferrer\">Nesta homeowner guide</a> and the <a href=\"https://energysavingtrust.org.uk/advice/air-source-heat-pumps/\" target=\"_blank\" rel=\"noopener noreferrer\">Energy Saving Trust checklist</a> cover the key questions to discuss."
    },
    {
      question: "What are the pros and cons of air source heat pumps?",
      answer: "Benefits include high efficiency, access to £7,500 Boiler Upgrade Scheme funding and lower emissions, while trade-offs include higher upfront cost and careful system design. Independent summaries from <a href=\"https://www.which.co.uk/reviews/air-source-heat-pumps/article/air-source-heat-pumps-pros-and-cons\" target=\"_blank\" rel=\"noopener noreferrer\">Which?</a> and the <a href=\"https://energysavingtrust.org.uk/advice/air-source-heat-pumps/\" target=\"_blank\" rel=\"noopener noreferrer\">Energy Saving Trust</a> lay out the balance."
    },
    {
      question: "Is my home suitable for an air source heat pump?",
      answer: "Most homes with outdoor space for the unit and a wet heating system can host a heat pump once insulation is assessed. Suitability checklists from the <a href=\"https://energysavingtrust.org.uk/advice/air-source-heat-pumps/\" target=\"_blank\" rel=\"noopener noreferrer\">Energy Saving Trust</a> and the <a href=\"https://www.simpleenergyadvice.org.uk/measures/measure/heat-pumps\" target=\"_blank\" rel=\"noopener noreferrer\">Simple Energy Advice calculator</a> help confirm readiness."
    },
    {
      question: "Do I need planning permission for an air source heat pump?",
      answer: "England and Wales installs usually fall under permitted development when siting and noise rules are satisfied. The <a href=\"https://www.planningportal.co.uk/permission/common-projects/heat-pumps/planning-permission-air-source-heat-pump\" target=\"_blank\" rel=\"noopener noreferrer\">Planning Portal guidance</a> and the UK government <a href=\"https://www.gov.uk/guidance/air-source-heat-pumps-installations-for-dwellings\" target=\"_blank\" rel=\"noopener noreferrer\">permitted development rules</a> list the criteria."
    },
    {
      question: "How much can I save on energy bills with an air source heat pump?",
      answer: "Savings depend on the system you replace, the electricity tariff and the heat pump's efficiency. The <a href=\"https://energysavingtrust.org.uk/advice/air-source-heat-pumps/\" target=\"_blank\" rel=\"noopener noreferrer\">Energy Saving Trust</a> shares scenarios versus electric, oil and LPG heating, while the UK government <a href=\"https://www.gov.uk/government/publications/heat-pump-ready-what-it-means-for-consumers/heat-pump-ready-what-it-means-for-consumers\" target=\"_blank\" rel=\"noopener noreferrer\">Heat Pump Ready guide</a> explains when costs can undercut mains gas."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Air Source Heat Pump FAQs North Lincolnshire | Nimbus Boilers & Heat Pumps</title>
        <meta name="description" content="air source heat pump FAQs North Lincolnshire" />
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

      {/* Hero Section */}
      <section className="hero-section section nimbus-section-base" style={{padding: '100px 32px', textAlign: 'center', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)', borderRadius: '8px', margin: '40px 0', fontFamily: "'Inter', sans-serif", border: '2px solid #A8D5BA'}}>
        <div style={{maxWidth: '1400px', margin: '0 auto'}}>
          <h1 style={{fontSize: '32px', fontWeight: '600', marginBottom: '25px', color: '#333', textAlign: 'center'}}>Boiler Repair FAQs North Lincolnshire</h1>
          <h2 style={{fontSize: '22px', fontWeight: '400', marginBottom: '15px', color: '#666', textAlign: 'center'}}>Honest Answers to Boiler Repair Questions Covering Costs, Efficiency, Cold Weather Performance, Maintenance and Grants in North Lincolnshire</h2>
          <p style={{fontSize: '17px', lineHeight: '1.7', color: '#555', marginBottom: '25px', textAlign: 'center', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto'}}>Get the facts on boiler repairs before installation in your North Lincolnshire home. Our FAQ guide addresses common concerns for residents, including grant eligibility and energy savings.</p>
          <div style={{display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap'}}>
            <a href="#contact-form" style={{padding: '14px 28px', border: '2px solid #00a676', borderRadius: '14px', fontWeight: '600', fontSize: '14px', letterSpacing: '-0.01em', cursor: 'pointer', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', minHeight: '46px', transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)', whiteSpace: 'nowrap', position: 'relative', overflow: 'hidden', background: 'rgba(255, 255, 255, 0.9)', color: '#007a57', boxShadow: '0 2px 8px rgba(0, 166, 118, 0.1)', inset: '0 0 0 0 #00a676'}}>Get a Free Boiler Repair Quote</a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faqs-section section nimbus-section-base" style={{padding: '100px 32px', textAlign: 'center', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)', borderRadius: '8px', margin: '40px 0', fontFamily: "'Inter', sans-serif", border: '2px solid #A8D5BA'}}>
        <div style={{maxWidth: '1400px', margin: '0 auto'}}>
          <h2 style={{fontSize: '28px', fontWeight: '600', marginBottom: '40px', color: '#333', textAlign: 'center'}}>Boiler Repair Frequently Asked Questions</h2>
          <div className="faq-accordion" style={{maxWidth: '800px', margin: '0 auto', border: 'none', overflow: 'hidden', boxShadow: 'none'}}>
            {faqData.map((faq, index) => (
              <div key={index} className="faq-item" style={{marginBottom: '20px', border: '2px solid #A8D5BA', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)', transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)', overflow: 'hidden'}}>
                <button
                                  type="button"
                                  role="button"
                                  className="faq-question"
                                  aria-expanded={openItems[index]}
                                  aria-controls={`faq-answer-${index}`}
                                  onClick={() => toggleItem(index)}
                                  style={{background: '#ffffff', padding: '15px 20px', cursor: 'pointer', position: 'relative', fontWeight: '600', color: '#1a1a1a', transition: 'background 0.3s ease, color 0.3s ease, border-color 0.3s ease', textAlign: 'left', width: '100%', display: 'block', border: 'none', fontFamily: 'inherit', fontSize: 'inherit', lineHeight: 'inherit'}}
                                >
                  {faq.question}
                  <span aria-hidden="true" style={{position: 'absolute', right: '20px', fontSize: '20px', transition: 'transform 0.3s ease'}}>{openItems[index] ? '-' : '+'}</span>
                </button>
                {openItems[index] && (
                  <div
                    id={`faq-answer-${index}`}
                    className="faq-answer"
                    style={{padding: '15px 20px', background: '#ffffff', textAlign: 'left', color: '#4a5568'}}
                    dangerouslySetInnerHTML={{__html: faq.answer}}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grant Eligibility Section */}
      <section className="grant-eligibility-section section nimbus-section-base" style={{padding: '100px 32px', textAlign: 'center', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)', borderRadius: '8px', margin: '40px 0', fontFamily: "'Inter', sans-serif", border: '2px solid #A8D5BA'}}>
        <div style={{maxWidth: '1400px', margin: '0 auto'}}>
          <h2 style={{fontSize: '28px', fontWeight: '600', marginBottom: '25px', color: '#333', textAlign: 'center'}}>Verify Your Eligibility for the £7,500 Boiler Upgrade Scheme Grant in Scunthorpe and North Lincolnshire</h2>
          <p style={{fontSize: '17px', lineHeight: '1.7', color: '#555', marginBottom: '30px', textAlign: 'center', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto'}}>Determine if your property qualifies for government funding through the Boiler Upgrade Scheme in Scunthorpe. Our engineers at Nimbus Boilers & Heat Pumps, working under an MCS umbrella scheme, will assist with the application process to obtain £7,500 towards an air source heat pump, helping lower heating costs and emissions in North Lincolnshire.</p>
          <div style={{display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap'}}>
            <a href="https://nimbusheatpumps.co.uk/boiler-upgrade-scheme-eligibility-7500-heat-pump-grants-scunthorpe/" style={{padding: '14px 28px', border: '2px solid #00a676', borderRadius: '14px', fontWeight: '600', fontSize: '14px', letterSpacing: '-0.01em', cursor: 'pointer', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', minHeight: '46px', transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)', whiteSpace: 'normal', position: 'relative', overflow: 'hidden', background: 'rgba(255, 255, 255, 0.9)', color: '#007a57', boxShadow: '0 2px 8px rgba(0, 166, 118, 0.1)', inset: '0 0 0 0 #00a676'}}>Check Grant Eligibility and Apply Now</a>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="why-choose-section section nimbus-section-base" style={{padding: '100px 32px', textAlign: 'center', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)', borderRadius: '8px', margin: '40px 0', fontFamily: "'Inter', sans-serif", border: '2px solid #A8D5BA'}}>
        <div style={{maxWidth: '1400px', margin: '0 auto'}}>
          <h2 style={{fontSize: '28px', fontWeight: '600', marginBottom: '25px', color: '#333', textAlign: 'center'}}>Why Choose Nimbus Boilers & Heat Pumps for Your Air Source Heat Pump Installation in Scunthorpe and North Lincolnshire?</h2>
          <ul style={{fontSize: '17px', lineHeight: '1.7', color: '#555', listStyleType: 'none', paddingLeft: '0', margin: '0 auto', maxWidth: '800px', textAlign: 'center'}}>
            <li style={{marginBottom: '15px'}}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display: 'inline-block', verticalAlign: 'middle', marginRight: '10px'}}><circle cx="12" cy="12" r="12" fill="#00a676"/><path d="M6 12.5L10 16.5L18 7.5" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>Installers operating under the MCS umbrella scheme for compliant, high-quality air source heat pump installations in Scunthorpe.</li>
            <li style={{marginBottom: '15px'}}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display: 'inline-block', verticalAlign: 'middle', marginRight: '10px'}}><circle cx="12" cy="12" r="12" fill="#00a676"/><path d="M6 12.5L10 16.5L18 7.5" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>Gas Safe registered heating engineers for safe gas boiler repairs, maintenance and services in North Lincolnshire.</li>
            <li style={{marginBottom: '15px'}}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display: 'inline-block', verticalAlign: 'middle', marginRight: '10px'}}><circle cx="12" cy="12" r="12" fill="#00a676"/><path d="M6 12.5L10 16.5L18 7.5" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>Expert guidance on Boiler Upgrade Scheme £7,500 grants to save you money on eco-friendly heat pump upgrades in Scunthorpe.</li>
            <li style={{marginBottom: '15px'}}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display: 'inline-block', verticalAlign: 'middle', marginRight: '10px'}}><circle cx="12" cy="12" r="12" fill="#00a676"/><path d="M6 12.5L10 16.5L18 7.5" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>Local knowledge of North Lincolnshire homes for tailored energy efficient heating solutions.</li>
            <li style={{marginBottom: '15px'}}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display: 'inline-block', verticalAlign: 'middle', marginRight: '10px'}}><circle cx="12" cy="12" r="12" fill="#00a676"/><path d="M6 12.5L10 16.5L18 7.5" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>Comprehensive heating services from installation to maintenance for long-term performance and peace of mind.</li>
          </ul>
        </div>
      </section>

      {/* Manufacturers Section */}
      <section className="manufacturers-section section nimbus-section-base" style={{padding: '100px 32px', textAlign: 'center', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)', borderRadius: '8px', margin: '40px 0', fontFamily: "'Inter', sans-serif", border: '2px solid #A8D5BA'}}>
        <div style={{maxWidth: '1400px', margin: '0 auto'}}>
          <h2 style={{fontSize: '28px', fontWeight: '600', marginBottom: '40px', color: '#333', textAlign: 'center'}}>Our Trusted Heat Pump and Boiler Manufacturers in Scunthorpe and North Lincolnshire</h2>
          <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '20px'}}>
            <div style={{padding: '20px', border: '1px solid #A8D5BA', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)', backgroundColor: '#f9f9f9', minHeight: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.3s ease, box-shadow 0.3s ease'}}>
              <a href="https://www.baxi.co.uk/" target="_blank" rel="noopener noreferrer" style={{display: 'inline-block', textDecoration: 'none'}}>
                <img decoding="async" src="https://nimbusheatpumps.co.uk/wp-content/uploads/2025/08/baxi-logo.png" alt="Baxi heat pumps logo - Nimbus Boilers & Heat Pumps in Scunthorpe" style={{maxWidth: '150px', maxHeight: '100px', display: 'block'}} loading="lazy" />
              </a>
            </div>
            <div style={{padding: '20px', border: '1px solid #A8D5BA', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)', backgroundColor: '#f9f9f9', minHeight: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.3s ease, box-shadow 0.3s ease'}}>
              <a href="https://idealheating.com/" target="_blank" rel="noopener noreferrer" style={{display: 'inline-block', textDecoration: 'none'}}>
                <img decoding="async" src="https://nimbusheatpumps.co.uk/wp-content/uploads/2025/06/Ideal_Logo-removebg-preview-1.png" alt="Ideal heat pumps logo - Nimbus Boilers & Heat Pumps in Scunthorpe" style={{maxWidth: '150px', maxHeight: '100px', display: 'block'}} loading="lazy" />
              </a>
            </div>
            <div style={{padding: '20px', border: '1px solid #A8D5BA', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)', backgroundColor: '#f9f9f9', minHeight: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.3s ease, box-shadow 0.3s ease'}}>
              <a href="https://www.vaillant.co.uk/" target="_blank" rel="noopener noreferrer" style={{display: 'inline-block', textDecoration: 'none'}}>
                <img decoding="async" src="https://nimbusheatpumps.co.uk/wp-content/uploads/2025/06/a38b5edd-0773-40c1-a329-ed07a9522c26.png" alt="Vaillant heat pumps logo - Nimbus Boilers & Heat Pumps in Scunthorpe" style={{maxWidth: '150px', maxHeight: '100px', display: 'block'}} loading="lazy" />
              </a>
            </div>
            <div style={{padding: '20px', border: '1px solid #A8D5BA', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)', backgroundColor: '#f9f9f9', minHeight: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.3s ease, box-shadow 0.3s ease'}}>
              <a href="https://www.worcester-bosch.co.uk/" target="_blank" rel="noopener noreferrer" style={{display: 'inline-block', textDecoration: 'none'}}>
                <img decoding="async" src="https://nimbusheatpumps.co.uk/wp-content/uploads/2025/06/worcester-removebg-preview-1.png" alt="Worcester Bosch heat pumps logo - Nimbus Boilers & Heat Pumps in Scunthorpe" style={{maxWidth: '150px', maxHeight: '100px', display: 'block'}} loading="lazy" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Free Quote Section */}
      <section className="free-quote-section section nimbus-section-base" style={{padding: '100px 32px', textAlign: 'center', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)', borderRadius: '8px', margin: '40px 0', fontFamily: "'Inter', sans-serif", border: '2px solid #A8D5BA'}}>
        <div style={{maxWidth: '1400px', margin: '0 auto'}}>
          <h2 style={{fontSize: '28px', fontWeight: '600', marginBottom: '25px', color: '#333', textAlign: 'center'}}>Request Your Free Air Source Heat Pump Quote in Scunthorpe and North Lincolnshire</h2>
          <p style={{fontSize: '17px', lineHeight: '1.7', color: '#555', marginBottom: '30px', textAlign: 'center', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto'}}>Obtain a no-obligation quote for air source heat pump installation or gas boiler services in Scunthorpe and North Lincolnshire. Our local heating specialists at Nimbus Boilers & Heat Pumps will assess your property, discuss £7,500 Boiler Upgrade Scheme grant eligibility and provide eco-friendly, energy efficient heating solutions to cut costs and reduce carbon emissions across Scunthorpe and North Lincolnshire.</p>
          <div id="contact-form">
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="company-details-section section nimbus-section-base" style={{padding: '100px 32px', textAlign: 'center', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)', borderRadius: '8px', margin: '40px 0', fontFamily: "'Inter', sans-serif", border: '2px solid #A8D5BA'}}>
        <div style={{maxWidth: '1400px', margin: '0 auto'}}>
          <img decoding="async" src="https://nimbusheatpumps.co.uk/wp-content/uploads/2025/06/Nimbus-Heat-Pumps-Logo.png" alt="Nimbus Boilers & Heat Pumps Logo - Energy Efficient Heating in Scunthorpe and North Lincolnshire" style={{maxWidth: '200px', height: 'auto', display: 'block', margin: '0 auto 20px auto'}} loading="lazy" />
          <p style={{fontSize: '18px', fontWeight: '600', color: '#007a57', marginBottom: '30px'}}>Your Trusted Partner for Energy Efficient Heating Solutions in Scunthorpe and North Lincolnshire</p>
          <p style={{fontSize: '17px', lineHeight: '1.7', color: '#555', marginBottom: '30px', textAlign: 'center'}}>Nimbus Heat Pumps Ltd (trading as Nimbus Boilers & Heat Pumps)<br />Company Number: 16497314<br />Registered Office: Lytchett House, 13 Freeland Park, Wareham Road, Poole, Dorset, BH16 6FA<br />Email: info@nimbusheatpumps.co.uk<br />Telephone: +44 7487 546550</p>
          <div style={{display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', marginBottom: '30px'}}>
            <a href="https://nimbusheatpumps.co.uk/policies/privacy-policy/" target="_blank" rel="noopener noreferrer" style={{padding: '14px 28px', border: '2px solid #00a676', borderRadius: '14px', fontWeight: '600', fontSize: '14px', letterSpacing: '-0.01em', cursor: 'pointer', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', minHeight: '46px', transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)', whiteSpace: 'normal', position: 'relative', overflow: 'hidden', background: 'rgba(255, 255, 255, 0.9)', color: '#007a57', boxShadow: '0 2px 8px rgba(0, 166, 118, 0.1)', inset: '0 0 0 0 #00a676'}}>Privacy Policy</a>
            <a href="https://nimbusheatpumps.co.uk/policies/terms-and-conditions/" target="_blank" rel="noopener noreferrer" style={{padding: '14px 28px', border: '2px solid #00a676', borderRadius: '14px', fontWeight: '600', fontSize: '14px', letterSpacing: '-0.01em', cursor: 'pointer', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', minHeight: '46px', transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)', whiteSpace: 'normal', position: 'relative', overflow: 'hidden', background: 'rgba(255, 255, 255, 0.9)', color: '#007a57', boxShadow: '0 2px 8px rgba(0, 166, 118, 0.1)', inset: '0 0 0 0 #00a676'}}>Terms & Conditions</a>
            <a href="https://nimbusheatpumps.co.uk/policies/cookies-policy/" target="_blank" rel="noopener noreferrer" style={{padding: '14px 28px', border: '2px solid #00a676', borderRadius: '14px', fontWeight: '600', fontSize: '14px', letterSpacing: '-0.01em', cursor: 'pointer', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', minHeight: '46px', transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)', whiteSpace: 'normal', position: 'relative', overflow: 'hidden', background: 'rgba(255, 255, 255, 0.9)', color: '#007a57', boxShadow: '0 2px 8px rgba(0, 166, 118, 0.1)', inset: '0 0 0 0 #00a676'}}>Cookies Policy</a>
          </div>
          <p style={{fontSize: '14px', color: '#777', textAlign: 'center'}}>© Nimbus Heat Pumps Ltd. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default FAQ;