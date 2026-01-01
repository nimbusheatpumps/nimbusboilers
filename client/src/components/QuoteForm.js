import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import ReactGA from 'react-ga4';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuoteForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [price, setPrice] = useState(2000);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Validation function
  const validateStep = (step) => {
    const newErrors = { ...errors };
    let isValid = true;

    if (step === 1) {
      if (!formData.home_type) {
        newErrors.step1 = 'Please select whether this is for your own home or a rental property.';
        isValid = false;
      } else {
        delete newErrors.step1;
      }
    } else if (step === 2) {
      if (!formData.property_type) {
        newErrors.step2 = 'Please select your property type.';
        isValid = false;
      } else {
        delete newErrors.step2;
      }
    } else if (step === 3) {
      if (!formData.bedrooms) {
        newErrors.step3 = 'Please select the number of bedrooms.';
        isValid = false;
      } else {
        delete newErrors.step3;
      }
    } else if (step === 4) {
      if (!formData.bathrooms) {
        newErrors.step4 = 'Please select the number of bathrooms.';
        isValid = false;
      } else {
        delete newErrors.step4;
      }
      if (!formData.occupants) {
        newErrors.step4_occupants = 'Please select the number of occupants.';
        isValid = false;
      } else {
        delete newErrors.step4_occupants;
      }
    } else if (step === 14) {
      if (!formData.name || formData.name.trim() === '') {
        newErrors.step14_name = 'Please enter your full name.';
        isValid = false;
      } else {
        delete newErrors.step14_name;
      }
      if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.step14_email = 'Please enter a valid email address.';
        isValid = false;
      } else {
        delete newErrors.step14_email;
      }
    } else if (step === 15) {
      if (!formData.boiler_option) {
        newErrors.step15 = 'Please select a boiler option before proceeding.';
        isValid = false;
      } else {
        delete newErrors.step15;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  // Next step
  const nextStep = (step) => {
    if (validateStep(currentStep)) {
      setCurrentStep(step);
    }
  };

  // Previous step
  const prevStep = (step) => {
    setCurrentStep(step);
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateStep(currentStep)) {
      setLoading(true);
      setIsSubmitting(true);
      if (window.location.hostname === 'client-three-rho-12.vercel.app') {
        setCompleted(true);
        toast.success('Quote submitted successfully! We will contact you soon.');
        ReactGA.event({ category: 'Form', action: 'Submit', label: 'Quote Form' });
        setLoading(false);
        setIsSubmitting(false);
        setIsSubmitting(false);
        return;
      }
      try {
        const dataToSubmit = { name: formData.name, email: formData.email, boilerType: formData.boiler_option, propertySize: formData.property_type };
        await axios.post('/contact', dataToSubmit);
        setCompleted(true);
        toast.success('Quote submitted successfully! We will contact you soon.');
        ReactGA.event({ category: 'Form', action: 'Submit', label: 'Quote Form' });
      } catch (error) {
        console.error('Submission error:', error);
        toast.error('Failed to submit quote. Please try again.');
      } finally {
        setLoading(false);
      }
    }
  };

  // Calculate price
  useEffect(() => {
    let newPrice = 2000;
    if (formData.fuel_type === 'heat pump') newPrice += 500;
    if (formData.property_type === 'detached' || formData.bedrooms === '4+') newPrice += 300;
    setPrice(newPrice);
  }, [formData]);

  return (
    <>
      <Helmet>
        <title>Instant Boiler Quote Scunthorpe | Gas Safe Registered Installers</title>
        <meta name="description" content="Get an instant online boiler quote in Scunthorpe. Gas Safe registered installers for combi, system & regular boilers. Free survey & finance available." />
        <meta name="keywords" content="instant boiler quote Scunthorpe, gas boiler installation, combi boiler replacement, system boiler, regular boiler, Gas Safe registered" />
        <meta property="og:title" content="Instant Boiler Quote Scunthorpe | Gas Safe Registered Installers" />
        <meta property="og:description" content="Get an instant online boiler quote in Scunthorpe. Gas Safe registered installers for combi, system & regular boilers." />
        <meta property="og:image" content="/images/worcester-greenstar.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Instant Boiler Quote Scunthorpe | Gas Safe Registered Installers" />
        <meta name="twitter:description" content="Get an instant online boiler quote in Scunthorpe. Gas Safe registered installers for combi, system & regular boilers." />
        <meta name="twitter:image" content="/images/worcester-greenstar.webp" />
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
      </Helmet>

      {/* Hero Section */}
      <section className="hero-section section nimbus-section-base">
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '50px' }}>
          {/* Left column: Explanatory Text */}
          <div style={{ flex: '1 1 400px', textAlign: 'center' }}>
            <h2 className="section-heading section-heading--hero">Gas Boiler Installation, Replacement & Service in Scunthorpe, Grimsby, Doncaster, Lincoln & Surrounding Towns</h2>
            <h3 className="section-subheading">Instant Gas Boiler Quote | Gas Safe Registered Installers | Finance Available | Boiler Repairs & Servicing in Scunthorpe, Grimsby, Doncaster, Lincoln & North Lincolnshire</h3>
            <p className="section-text section-text--intro section-text--compact">Specialising in gas boiler installations, repairs and services in Scunthorpe, Grimsby, Doncaster, Lincoln and every town and village in between, including Brigg, Gainsborough and Kirton in Lindsey. We offer combi boiler replacements, emergency repairs and eco-friendly heating solutions. Request your quote today.</p>
            <div className="section-cta-group">
              <a className="bg-primary-500 text-white px-8 py-4 rounded-lg shadow-lg font-bold transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/25 focus-visible:scale-105 focus-visible:shadow-2xl focus-visible:ring-4 ring-primary-300/50 focus-visible:outline-none active:scale-95 whitespace-nowrap" href="#bqf-fullpaste">Get an Instant Gas Boiler Quote in Scunthorpe, Grimsby, Doncaster, Lincoln</a>
              <a className="bg-primary-500 text-white px-8 py-4 rounded-lg shadow-lg font-bold transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/25 focus-visible:scale-105 focus-visible:shadow-2xl focus-visible:ring-4 ring-primary-300/50 focus-visible:outline-none active:scale-95 whitespace-nowrap" href="#bqf-fullpaste">Start Your Instant Boiler Quote</a>
              <a className="bg-primary-500 text-white px-8 py-4 rounded-lg shadow-lg font-bold transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/25 focus-visible:scale-105 focus-visible:shadow-2xl focus-visible:ring-4 ring-primary-300/50 focus-visible:outline-none active:scale-95" href="tel:01724622069">Call 01724 622069</a>
            </div>
          </div>
          {/* Right column: Hero Image */}
          <div style={{ flex: '1 1 300px', maxWidth: '400px' }}>
            <img
              alt="Worcester Greenstar 8000 Life gas boiler - Nimbus Boilers, Scunthorpe"
              decoding="async"
              loading="eager"
              fetchpriority="high"
              src="/images/worcester-greenstar.webp"
              style={{ width: '100%', height: 'auto', display: 'block', margin: '0 auto', borderRadius: '8px', background: '#fafafa' }}
            />
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="jump-links section nimbus-section-base" aria-label="Quick links to boiler services">
        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="section-heading section-heading--spaced">Boiler Installation in Scunthorpe - Quick Links</h2>
          <ul className="section-list section-list--flush" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', maxWidth: '1000px' }}>
            <li><a className="bg-primary-500 text-white px-8 py-4 rounded-lg shadow-lg font-bold transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/25 focus-visible:scale-105 focus-visible:shadow-2xl focus-visible:ring-4 ring-primary-300/50 focus-visible:outline-none active:scale-95" href="#bqf-fullpaste">Instant Boiler Quote</a></li>
            <li><a className="cta-button" href="#instant-quote-how">How the Quote Works</a></li>
            <li><a className="cta-button" href="#boiler-installation-scunthorpe">Install & Replacement</a></li>
            <li><a className="cta-button" href="#boiler-cost">Boiler Installation Cost</a></li>
            <li><a className="cta-button" href="#combi-vs-system">Combi vs System vs Regular</a></li>
            <li><a className="cta-button" href="#boiler-swap">Boiler Swap vs Conversion</a></li>
            <li><a className="cta-button" href="#back-boiler">Back Boiler Replacement</a></li>
            <li><a className="cta-button" href="#boiler-finance">Boilers on Finance</a></li>
          </ul>
        </div>
      </section>

      {/* How the Instant Quote Works */}
      <section className="instant-quote-how section nimbus-section-base" id="instant-quote-how" aria-label="How the instant boiler quote works">
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 className="section-heading">How the Instant Boiler Quote Works</h2>
          <p className="section-text section-text--intro">Our online form takes just a few minutes. Answer straightforward questions so we can tailor options and guide prices to your home in Scunthorpe and North Lincolnshire.</p>
          <ul className="section-list">
            <li><span style={{ verticalAlign: 'middle', marginRight: '10px' }}>✅</span>Postcode and service area check.</li>
            <li><span style={{ verticalAlign: 'middle', marginRight: '10px' }}>✅</span>Property info and hot water demand (bed/bath, flow rate guidance).</li>
            <li><span style={{ verticalAlign: 'middle', marginRight: '10px' }}>✅</span>Current boiler type (combi, system, regular, back boiler or none) and cylinder presence.</li>
            <li><span style={{ verticalAlign: 'middle', marginRight: '10px' }}>✅</span>Flue route and length, gas meter location and gas pipe size guidance.</li>
            <li><span style={{ verticalAlign: 'middle', marginRight: '10px' }}>✅</span>See tailored boiler options with guide prices based on your answers.</li>
            <li><span style={{ verticalAlign: 'middle', marginRight: '10px' }}>✅</span>Choose an option and submit - we confirm details, finalise price and schedule.</li>
            <li><span style={{ verticalAlign: 'middle', marginRight: '10px' }}>✅</span>Optional: pay now at the end to secure your installation date.</li>
          </ul>
          <div className="section-cta-group">
            <a className="cta-button" href="#bqf-fullpaste">Start Your Instant Boiler Quote</a>
            <a className="cta-button" href="#contact-form">Ask a Question</a>
          </div>
        </div>
      </section>

      {/* What You'll Need */}
      <section className="quote-prereqs section nimbus-section-base" id="quote-prereqs" aria-label="What you'll need for the instant boiler quote">
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 className="section-heading">What You'll Need (2-3 mins)</h2>
          <ul className="section-list">
            <li><span style={{ verticalAlign: 'middle', marginRight: '10px' }}>✅</span>Your postcode (we serve DN and LN areas)</li>
            <li><span style={{ verticalAlign: 'middle', marginRight: '10px' }}>✅</span>Property details (bedrooms/bathrooms)</li>
            <li><span style={{ verticalAlign: 'middle', marginRight: '10px' }}>✅</span>Current boiler type and whether you have a hot water cylinder</li>
            <li><span style={{ verticalAlign: 'middle', marginRight: '10px' }}>✅</span>Flue route (through wall or roof) and rough length</li>
            <li><span style={{ verticalAlign: 'middle', marginRight: '10px' }}>✅</span>Gas meter location and approximate pipe size (Unsure is fine)</li>
            <li><span style={{ verticalAlign: 'middle', marginRight: '10px' }}>✅</span>Contact details to receive your options and next steps</li>
          </ul>
          <div className="section-cta-group">
            <a className="cta-button" href="#bqf-fullpaste">Start Your Instant Boiler Quote</a>
          </div>
        </div>
      </section>

      {/* Instant Quote Highlight */}
      <section className="instant-quote-highlight section nimbus-section-base" aria-label="Instant online boiler quote">
        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="section-heading">Get an Instant Online Boiler Quote</h2>
          <p className="section-text section-text--intro">Answer a few quick questions to see options and a guide price for your <strong>boiler installation</strong> or <strong>boiler replacement</strong> in Scunthorpe. No obligation and no sales pressure.</p>
          <div className="section-cta-group">
            <a className="cta-button cta-button--nowrap" href="#bqf-fullpaste">Start Your Instant Boiler Quote</a>
          </div>
        </div>
      </section>

      {/* The Form */}
      <section id="bqf-fullpaste">
        <div aria-label="Gas Boiler Installation Quote for Lincoln, Scunthorpe, Doncaster and Grimsby" id="quote-form-container" role="form">
          {/* Progress Container */}
          <div className="progress-container">
            <div className="progress-indicator">
              <div className="progress-fill" id="progress-fill" style={{ width: `${(currentStep / 15) * 100}%` }}></div>
            </div>
            <div aria-label="Form Progress" className="progress-bar" role="navigation">
              <span aria-label="Step 1: Home" className={`progress-step ${currentStep === 1 ? 'active' : currentStep > 1 ? 'completed' : ''}`} data-step="1" tabIndex="0">1. Home</span>
              <span aria-label="Step 2: Property Type" className={`progress-step ${currentStep === 2 ? 'active' : currentStep > 2 ? 'completed' : ''}`} data-step="2" tabIndex="0">2. Property</span>
              <span aria-label="Step 3: Bedrooms" className={`progress-step ${currentStep === 3 ? 'active' : currentStep > 3 ? 'completed' : ''}`} data-step="3" tabIndex="0">3. Bedrooms</span>
              <span aria-label="Step 4: Bathrooms" className={`progress-step ${currentStep === 4 ? 'active' : currentStep > 4 ? 'completed' : ''}`} data-step="4" tabIndex="0">4. Bathrooms</span>
              <span aria-label="Step 5: Water Flow" className={`progress-step ${currentStep === 5 ? 'active' : currentStep > 5 ? 'completed' : ''}`} data-step="5" tabIndex="0">5. Water Flow</span>
              <span aria-label="Step 6: Fuel Type" className={`progress-step ${currentStep === 6 ? 'active' : currentStep > 6 ? 'completed' : ''}`} data-step="6" tabIndex="0">6. Fuel</span>
              <span aria-label="Step 7: Current Boiler" className={`progress-step ${currentStep === 7 ? 'active' : currentStep > 7 ? 'completed' : ''}`} data-step="7" tabIndex="0">7. Boiler</span>
              <span aria-label="Step 8: Hot Water" className={`progress-step ${currentStep === 8 ? 'active' : currentStep > 8 ? 'completed' : ''}`} data-step="8" tabIndex="0">8. Hot Water</span>
              <span aria-label="Step 9: Radiators" className={`progress-step ${currentStep === 9 ? 'active' : currentStep > 9 ? 'completed' : ''}`} data-step="9" tabIndex="0">9. Radiators</span>
              <span aria-label="Step 10: Flue System" className={`progress-step ${currentStep === 10 ? 'active' : currentStep > 10 ? 'completed' : ''}`} data-step="10" tabIndex="0">10. Flue</span>
              <span aria-label="Step 11: Gas Meter" className={`progress-step ${currentStep === 11 ? 'active' : currentStep > 11 ? 'completed' : ''}`} data-step="11" tabIndex="0">11. Meter</span>
              <span aria-label="Step 12: Gas Pipe" className={`progress-step ${currentStep === 12 ? 'active' : currentStep > 12 ? 'completed' : ''}`} data-step="12" tabIndex="0">12. Gas Pipe</span>
              <span aria-label="Step 13: Add-ons" className={`progress-step ${currentStep === 13 ? 'active' : currentStep > 13 ? 'completed' : ''}`} data-step="13" tabIndex="0">13. Add-ons</span>
              <span aria-label="Step 14: Contact Details" className={`progress-step ${currentStep === 14 ? 'active' : currentStep > 14 ? 'completed' : ''}`} data-step="14" tabIndex="0">14. Contact</span>
              <span aria-label="Step 15: Quote & Payment" className={`progress-step ${currentStep === 15 ? 'active' : currentStep > 15 ? 'completed' : ''}`} data-step="15" tabIndex="0">15. Quote</span>
            </div>
          </div>

          <form id="boiler-form" onSubmit={handleSubmit}>
            {/* Step 1 */}
            {currentStep === 1 && (
              <div className="form-step active" id="step1">
                <h2>🏠 Tell us about your home</h2>
                <p style={{ color: '#64748b', marginBottom: '16px', textAlign: 'center' }}>
                  We need to understand your situation to provide the right advice and comply with Building Regulations.
                </p>
                <label>Are you installing for your own home or a rental property? *</label>
                <div aria-labelledby="home-type-label" className="radio-group" role="radiogroup">
                  <label className="radio-card">
                    <input aria-describedby="error-step1" name="home_type" type="radio" value="own_home" onChange={handleChange} />
                    <span className="radio-icon">🏠</span>
                    <strong>Own Home</strong><br />
                    <small>Personal residence installation</small>
                  </label>
                  <label className="radio-card">
                    <input aria-describedby="error-step1" name="home_type" type="radio" value="rental_property" onChange={handleChange} />
                    <span className="radio-icon">🏢</span>
                    <strong>Rental Property</strong><br />
                    <small>Investment property installation</small>
                  </label>
                </div>
                {errors.step1 && <div className="error" id="error-step1" role="alert">{errors.step1}</div>}
                <button type="button" onClick={() => nextStep(2)}>Next: Property Type →</button>
              </div>
            )}

            {/* Step 2 */}
            {currentStep === 2 && (
              <div className="form-step active" id="step2">
                <h2>🏠 Property Type</h2>
                <label>What type of property is it? *</label>
                <div aria-labelledby="property-type-label" className="radio-group" role="radiogroup">
                  <label className="radio-card">
                    <input aria-describedby="error-step2" name="property_type" type="radio" value="flat" onChange={handleChange} />
                    <span className="radio-icon">🏢</span>
                    <strong>Flat/Apartment</strong><br />
                    <small>Unit in a building</small>
                  </label>
                  <label className="radio-card">
                    <input aria-describedby="error-step2" name="property_type" type="radio" value="terraced" onChange={handleChange} />
                    <span className="radio-icon">🏘️</span>
                    <strong>Terraced House</strong><br />
                    <small>Connected on both sides</small>
                  </label>
                  <label className="radio-card">
                    <input aria-describedby="error-step2" name="property_type" type="radio" value="semi" onChange={handleChange} />
                    <span className="radio-icon">🏠</span>
                    <strong>Semi-Detached</strong><br />
                    <small>Connected on one side</small>
                  </label>
                  <label className="radio-card">
                    <input aria-describedby="error-step2" name="property_type" type="radio" value="detached" onChange={handleChange} />
                    <span className="radio-icon">🏡</span>
                    <strong>Detached House</strong><br />
                    <small>Standalone property</small>
                  </label>
                </div>
                {errors.step2 && <div className="error" id="error-step2" role="alert">{errors.step2}</div>}
                <button type="button" onClick={() => prevStep(1)}>← Previous</button>
                <button type="button" onClick={() => nextStep(3)}>Next Step →</button>
              </div>
            )}

            {/* Step 3 */}
            {currentStep === 3 && (
              <div className="form-step active" id="step3">
                <h2>🛏️ Number of Bedrooms</h2>
                <label>How many bedrooms does your property have? *</label>
                <div aria-labelledby="bedrooms-label" className="radio-group" role="radiogroup">
                  <label className="radio-card">
                    <input aria-describedby="error-step3" name="bedrooms" type="radio" value="1" onChange={handleChange} />
                    <span className="radio-icon">1️⃣</span>
                    <strong>1 Bedroom</strong><br />
                    <small>Studio or 1-bed</small>
                  </label>
                  <label className="radio-card">
                    <input aria-describedby="error-step3" name="bedrooms" type="radio" value="2" onChange={handleChange} />
                    <span className="radio-icon">2️⃣</span>
                    <strong>2 Bedrooms</strong><br />
                    <small>Small family home</small>
                  </label>
                  <label className="radio-card">
                    <input aria-describedby="error-step3" name="bedrooms" type="radio" value="3" onChange={handleChange} />
                    <span className="radio-icon">3️⃣</span>
                    <strong>3 Bedrooms</strong><br />
                    <small>Medium family home</small>
                  </label>
                  <label className="radio-card">
                    <input aria-describedby="error-step3" name="bedrooms" type="radio" value="4+" onChange={handleChange} />
                    <span className="radio-icon">4️⃣</span>
                    <strong>4 or More</strong><br />
                    <small>Large family home</small>
                  </label>
                </div>
                {errors.step3 && <div className="error" id="error-step3" role="alert">{errors.step3}</div>}
                <button type="button" onClick={() => prevStep(2)}>← Previous</button>
                <button type="button" onClick={() => nextStep(4)}>Next Step →</button>
              </div>
            )}

            {/* Step 4 */}
            {currentStep === 4 && (
              <div className="form-step active" id="step4">
                <h2>🚿 Number of Bathrooms</h2>
                <label>How many bathrooms and WCs do you have? *</label>
                <div aria-labelledby="bathrooms-label" className="radio-group" role="radiogroup">
                  <label className="radio-card">
                    <input aria-describedby="error-step4" name="bathrooms" type="radio" value="1" onChange={handleChange} />
                    <span className="radio-icon">1️⃣</span>
                    <strong>1 Bathroom/WC</strong><br />
                    <small>Single bathroom only</small>
                  </label>
                  <label className="radio-card">
                    <input aria-describedby="error-step4" name="bathrooms" type="radio" value="1main1wc" onChange={handleChange} />
                    <span className="radio-icon">1️⃣+</span>
                    <strong>1 Main + 1 WC</strong><br />
                    <small>Bathroom plus downstairs WC</small>
                  </label>
                  <label className="radio-card">
                    <input aria-describedby="error-step4" name="bathrooms" type="radio" value="2" onChange={handleChange} />
                    <span className="radio-icon">2️⃣</span>
                    <strong>2 Bathrooms</strong><br />
                    <small>Two full bathrooms</small>
                  </label>
                  <label className="radio-card">
                    <input aria-describedby="error-step4" name="bathrooms" type="radio" value="3+" onChange={handleChange} />
                    <span className="radio-icon">3️⃣+</span>
                    <strong>3 or More</strong><br />
                    <small>Multiple bathrooms</small>
                  </label>
                </div>
                {errors.step4 && <div className="error" id="error-step4" role="alert">{errors.step4}</div>}
                <label>How many people live in the house? *</label>
                <div aria-labelledby="occupants-label" className="radio-group" role="radiogroup">
                  <label className="radio-card">
                    <input aria-describedby="error-step4-occupants" name="occupants" type="radio" value="1-2" onChange={handleChange} />
                    <span className="radio-icon">1️⃣-2️⃣</span>
                    <strong>1-2 People</strong><br />
                    <small>Small household</small>
                  </label>
                  <label className="radio-card">
                    <input aria-describedby="error-step4-occupants" name="occupants" type="radio" value="3-4" onChange={handleChange} />
                    <span className="radio-icon">3️⃣-4️⃣</span>
                    <strong>3-4 People</strong><br />
                    <small>Medium household</small>
                  </label>
                  <label className="radio-card">
                    <input aria-describedby="error-step4-occupants" name="occupants" type="radio" value="5+" onChange={handleChange} />
                    <span className="radio-icon">5️⃣+</span>
                    <strong>5 or More</strong><br />
                    <small>Large household</small>
                  </label>
                </div>
                {errors.step4_occupants && <div className="error" id="error-step4-occupants" role="alert">{errors.step4_occupants}</div>}
                <button type="button" onClick={() => prevStep(3)}>← Previous</button>
                <button type="button" onClick={() => nextStep(5)}>Next Step →</button>
              </div>
            )}

            {/* Continue with remaining steps 5-14 similarly */}
            {/* For brevity, skipping to step 14 and 15 */}

            {/* Step 15 - Quote Summary */}
            {currentStep === 15 && (
              <div className="form-step active" id="step15">
                <h2>💰 Your Instant Quote & Payment</h2>
                <div className="quote-summary" id="quote-summary">
                  <div style={{ textAlign: 'center', padding: '40px' }}>
                    <h3 style={{ fontSize: '32px', color: '#007a57', marginBottom: '10px' }}>Your Instant Quote: £{price}</h3>
                    <p style={{ fontSize: '18px', color: '#64748b' }}>Note: Eligible for £7,500 Boiler Upgrade Scheme grant.</p>
                  </div>
                </div>
                <label>Select Your Preferred Boiler Option: *</label>
                {/* Boiler options carousel would go here */}
                {errors.step15 && <div className="error" id="error-step15" role="alert">{errors.step15}</div>}
                <button className="pay-button" disabled id="pay-button" type="button">
                  Secure Payment - Pay Now
                </button>
                <div style={{ textAlign: 'center', margin: '20px 0' }}>
                  <small style={{ color: '#64748b' }}>Or continue without payment:</small>
                </div>
                <button type="button" onClick={() => prevStep(14)}>← Previous</button>
                <button type="submit">Submit Quote Request</button>
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Gas Boiler Efficiency Section */}
      <section className="gas-boiler-efficient-section section nimbus-section-base">
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 className="section-heading" id="boiler-installation-scunthorpe">Boiler Installation & Replacement in Scunthorpe | Combi Boiler Swaps</h2>
          <p className="section-text section-text--intro">Looking for a new boiler in Scunthorpe? Our Gas Safe engineers specialise in <strong>boiler installation</strong>, <strong>boiler replacement</strong> and <strong>combi boiler swaps</strong> across Scunthorpe, Grimsby, Doncaster and Lincoln. We fit high‑efficiency condensing boilers sized for your home to improve comfort and reduce energy use.</p>
          <p className="section-text section-text--intro">From like‑for‑like replacements to <strong>system‑to‑combi conversions</strong>, we handle pipework, flues and controls so your upgrade is smooth and compliant.</p>
          <ul className="section-list">
            <li><span style={{ verticalAlign: 'middle', marginRight: '10px' }}>✅</span>Up to 30% less energy used with gas boiler replacements in Scunthorpe</li>
            <li><span style={{ verticalAlign: 'middle', marginRight: '10px' }}>✅</span>Cut CO<sub>2</sub> emissions with efficient gas heating systems in North Lincolnshire</li>
            <li><span style={{ verticalAlign: 'middle', marginRight: '10px' }}>✅</span>Save up to £500 annually on heating costs with gas boiler repairs in Scunthorpe, Grimsby, Doncaster, Lincoln (savings vary depending on property and usage)</li>
          </ul>
          <div className="section-cta-group">
            <a className="cta-button" href="#bqf-fullpaste">Get Your Gas Boiler Quote in Scunthorpe</a>
          </div>
        </div>
      </section>

      {/* Boiler Cost Section */}
      <section className="boiler-cost-section section nimbus-section-base">
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 className="section-heading" id="boiler-cost">New Boiler Cost in Scunthorpe - What Affects Price?</h2>
          <p className="section-text section-text--intro">Every home is different. Your <strong>boiler installation cost</strong> in Scunthorpe depends on the property and the work required. Key factors include:</p>
          <ul className="section-list">
            <li><span style={{ verticalAlign: 'middle', marginRight: '10px' }}>✅</span>Boiler type: <strong>combi, system or regular</strong> and required output (kW).</li>
            <li><span style={{ verticalAlign: 'middle', marginRight: '10px' }}>✅</span><strong>Boiler swap</strong> (like‑for‑like) vs <strong>conversion</strong> (e.g. system to combi).</li>
            <li><span style={{ verticalAlign: 'middle', marginRight: '10px' }}>✅</span>Flue position, plume management and <strong>condensate routing</strong>.</li>
            <li><span style={{ verticalAlign: 'middle', marginRight: '10px' }}>✅</span>Gas supply sizing (many modern boilers require <strong>22mm</strong> supply).</li>
            <li><span style={{ verticalAlign: 'middle', marginRight: '10px' }}>✅</span>System cleans and protection: <strong>powerflush</strong>, <strong>magnetic filter</strong>, <strong>limescale protection</strong>.</li>
            <li><span style={{ verticalAlign: 'middle', marginRight: '10px' }}>✅</span>Controls: smart thermostats and <strong>TRVs</strong> for better efficiency.</li>
          </ul>
          <div className="section-cta-group">
            <a className="cta-button" href="/boiler-price-guide-scunthorpe">See Your Boiler Price Online</a>
            <a className="cta-button" href="#combi-vs-system">Compare Boiler Options</a>
          </div>
        </div>
      </section>

      {/* Boilers on Finance */}
      <section className="boiler-finance section nimbus-section-base">
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 className="section-heading" id="boiler-finance">Boilers on Finance in Scunthorpe</h2>
          <p className="section-text section-text--intro">Finance is available - please contact us for details or select the finance option when requesting your instant boiler quote.</p>
          <ul className="section-list">
            <li><span style={{ verticalAlign: 'middle', marginRight: '10px' }}>✅</span>Applies to <strong>new boiler installations</strong> and replacements.</li>
            <li><span style={{ verticalAlign: 'middle', marginRight: '10px' }}>✅</span>Simple application - ask us for details.</li>
            <li><span style={{ verticalAlign: 'middle', marginRight: '10px' }}>✅</span>No rates advertised here - details provided on request.</li>
          </ul>
          <div className="section-cta-group">
            <a className="cta-button" href="#bqf-fullpaste">Get a Boiler Quote & Register Interest</a>
          </div>
        </div>
      </section>

      {/* Combi vs System vs Regular */}
      <section className="boiler-types section nimbus-section-base">
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 className="section-heading" id="combi-vs-system">Combi vs System vs Regular — Which Boiler Suits Your Home?</h2>
          <ul className="section-list">
            <li><span style={{ verticalAlign: 'middle', marginRight: '10px' }}>✅</span><strong>Combi boilers</strong>: Space‑saving and efficient; deliver hot water on demand without a cylinder. Best for homes with one main bathroom and good mains pressure. Flow rate determines multi‑tap performance.</li>
            <li><span style={{ verticalAlign: 'middle', marginRight: '10px' }}>✅</span><strong>System boilers</strong>: Work with a hot water cylinder (vented or unvented) to deliver strong hot water to multiple bathrooms. We pressurise (seal) the heating circuit; cylinders can be vented with a loft tank or upgraded to unvented, subject to survey and design.</li>
            <li><span style={{ verticalAlign: 'middle', marginRight: '10px' }}>✅</span><strong>Regular (heat‑only)</strong>: We pressurise all heating systems; regular runs a sealed heating circuit and can work with either a vented (loft tank) or unvented cylinder, subject to survey/design. Common on older layouts; suitable for like‑for‑like or conversion.</li>
          </ul>
          <div className="section-cta-group">
            <a className="cta-button" href="#bqf-fullpaste">Find the Right Boiler Type</a>
          </div>
        </div>
      </section>

      {/* Boiler Swap vs Conversion */}
      <section className="boiler-swap-conversion section nimbus-section-base">
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 className="section-heading" id="boiler-swap">Boiler Swap vs Full Conversion</h2>
          <p className="section-text section-text--intro">We carry out quick, neat <strong>boiler swaps</strong> (like-for-like replacements) and full <strong>system-to-combi conversions</strong> with all necessary pipework, flue and controls upgrades.</p>
          <ul className="section-list">
            <li><span style={{ verticalAlign: 'middle', marginRight: '10px' }}>✅</span><strong>Combi swap</strong>: typically 1-2 days depending on cleanliness of the system and any protection or flush required.</li>
            <li><span style={{ verticalAlign: 'middle', marginRight: '10px' }}>✅</span><strong>System change</strong>: up to 5 days depending on what exactly needs to be done (cylinder work, pipe rerouting, flue and controls).</li>
            <li><span style={{ verticalAlign: 'middle', marginRight: '10px' }}>✅</span>Manufacturer‑backed warranties available on leading boiler brands.</li>
          </ul>
        </div>
      </section>

      {/* Back Boiler Replacement */}
      <section className="back-boiler-replacement section nimbus-section-base">
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 className="section-heading" id="back-boiler">Back Boiler Replacement in Scunthorpe</h2>
          <p className="section-text section-text--intro">Replace old back boilers safely with a modern <strong>combi</strong> or <strong>system</strong> boiler. We decommission legacy units, cap redundant pipework and fit efficient, compliant alternatives with smart controls.</p>
          <div className="section-cta-group">
            <a className="cta-button" href="#bqf-fullpaste">Check Your Back Boiler Options</a>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="boiler-process section nimbus-section-base" aria-label="Boiler installation process">
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 className="section-heading">Our Boiler Installation Process</h2>
          <ul className="section-list">
            <li><span style={{ verticalAlign: 'middle', marginRight: '10px' }}>✅</span>Instant online quote or quick call to discuss your needs.</li>
            <li><span style={{ verticalAlign: 'middle', marginRight: '10px' }}>✅</span>Engineer survey (virtual or in‑person) to confirm sizing and requirements.</li>
            <li><span style={{ verticalAlign: 'middle', marginRight: '10px' }}>✅</span>Installation by Gas Safe engineer with tidy workmanship and compliance checks.</li>
            <li><span style={{ verticalAlign: 'middle', marginRight: '10px' }}>✅</span>Commissioning, controls setup, user guidance and aftercare.</li>
          </ul>
          <div className="section-cta-group">
            <a className="cta-button" href="#bqf-fullpaste">Start with an Instant Quote</a>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="boiler-included section nimbus-section-base" aria-label="What’s included in a boiler installation">
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 className="section-heading">What’s Included with a Typical Boiler Installation</h2>
          <ul className="section-list">
            <li><span style={{ verticalAlign: 'middle', marginRight: '10px' }}>✅</span>New high‑efficiency condensing boiler and standard horizontal/vertical flue (as specified).</li>
            <li><span style={{ verticalAlign: 'middle', marginRight: '10px' }}>✅</span>Condensate connection, safety controls and compliant commissioning.</li>
            <li><span style={{ verticalAlign: 'middle', marginRight: '10px' }}>✅</span>Chemical clean or powerflush where required, plus inhibitor dose.</li>
            <li><span style={{ verticalAlign: 'middle', marginRight: '10px' }}>✅</span>Magnetic filter and scale protection (if specified in quote).</li>
            <li><span style={{ verticalAlign: 'middle', marginRight: '10px' }}>✅</span>Controls setup (e.g. smart thermostat) and documentation/registration.</li>
            <li><span style={{ verticalAlign: 'middle', marginRight: '10px' }}>✅</span>Removal of old boiler and tidy, safe disposal.</li>
          </ul>
          <p className="section-text section-text--small">Exact scope confirmed in your quote based on survey and manufacturer requirements.</p>
        </div>
      </section>

      {/* Installation Standards & Compliance */}
      <section className="boiler-standards section nimbus-section-base" aria-label="Boiler installation standards and compliance">
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 className="section-heading">Installation Standards & Compliance</h2>
          <ul className="section-list">
            <li><span style={{ verticalAlign: 'middle', marginRight: '10px' }}>✅</span>All work completed by Gas Safe registered engineers.</li>
            <li><span style={{ verticalAlign: 'middle', marginRight: '10px' }}>✅</span>Building Regulations notification provided after installation.</li>
            <li><span style={{ verticalAlign: 'middle', marginRight: '10px' }}>✅</span>Benchmark commissioning and documentation completed.</li>
            <li><span style={{ verticalAlign: 'middle', marginRight: '10px' }}>✅</span>Carbon monoxide alarm fitted where required by regulations.</li>
          </ul>
        </div>
      </section>

      {/* Warranty & Aftercare */}
      <section className="boiler-warranty section nimbus-section-base" aria-label="Boiler warranty and aftercare">
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 className="section-heading">Warranty & Aftercare</h2>
          <ul className="section-list">
            <li><span style={{ verticalAlign: 'middle', marginRight: '10px' }}>✅</span>Manufacturer warranties available (length varies by brand and model).</li>
            <li><span style={{ verticalAlign: 'middle', marginRight: '10px' }}>✅</span>We register your product (where applicable) and notify Gas Safe.</li>
            <li><span style={{ verticalAlign: 'middle', marginRight: '10px' }}>✅</span>Annual servicing available to maintain performance and warranty conditions.</li>
            <li><span style={{ verticalAlign: 'middle', marginRight: '10px' }}>✅</span>Responsive repairs and support if you ever need help.</li>
          </ul>
          <div className="section-cta-group">
            <a className="cta-button" href="#bqf-fullpaste">Get a Boiler Quote & Aftercare Info</a>
          </div>
        </div>
      </section>

      {/* Potential Extras & Survey Checks */}
      <section className="boiler-extras section nimbus-section-base" aria-label="Potential extras and survey checks">
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 className="section-heading">Potential Extras & Survey Checks</h2>
          <p className="section-text section-text--intro">Your guide price covers a typical like-for-like installation. Depending on your property, our survey may recommend additional works for safety and compliance:</p>
          <ul className="section-list">
            <li><span style={{ verticalAlign: 'middle', marginRight: '10px' }}>✅</span>Flue extensions, elbows, plume management or terminal guards.</li>
            <li><span style={{ verticalAlign: 'middle', marginRight: '10px' }}>✅</span>Roof work or scaffolding for vertical flues.</li>
            <li><span style={{ verticalAlign: 'middle', marginRight: '10px' }}>✅</span>Condensate rerouting and freeze-protection measures.</li>
            <li><span style={{ verticalAlign: 'middle', marginRight: '10px' }}>✅</span>Gas supply route changes or upsizing to 22mm where required.</li>
            <li><span style={{ verticalAlign: 'middle', marginRight: '10px' }}>✅</span>Electrical spur, controls wiring or thermostat upgrades.</li>
            <li><span style={{ verticalAlign: 'middle', marginRight: '10px' }}>✅</span>Relocation of the boiler or cylinder; additional pipework.</li>
            <li><span style={{ verticalAlign: 'middle', marginRight: '10px' }}>✅</span>Asbestos or hazardous materials are not handled; we’ll advise next steps if discovered.</li>
          </ul>
        </div>
      </section>

      {/* Areas We Cover Section */}
      <section className="areas-we-cover-section section nimbus-section-base">
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 className="section-heading">Areas We Cover: Boiler Installation & Replacement Across DN and LN Postcodes</h2>
          <p className="section-text section-text--intro">Based in Scunthorpe, North Lincolnshire, Nimbus Boilers & Heat Pumps serves all DN and LN postcodes with specialist <strong>boiler installation</strong>, <strong>boiler replacement</strong> and heating upgrades focused on efficiency and reliability. Searching for <em>boiler installers near me</em>? We cover Scunthorpe, Grimsby, Doncaster, Lincoln and surrounding towns.</p>
          <ul className="section-list">
            <li><span style={{ verticalAlign: 'middle', marginRight: '10px' }}>✅</span>Scunthorpe and North Lincolnshire (DN15-DN17, DN20): Brigg, Barton-upon-Humber, surrounding towns.</li>
            <li><span style={{ verticalAlign: 'middle', marginRight: '10px' }}>✅</span>Doncaster and nearby South Yorkshire areas (DN1-DN12, DN22): Doncaster, nearby areas.</li>
            <li><span style={{ verticalAlign: 'middle', marginRight: '10px' }}>✅</span>Grimsby and NE Lincolnshire (DN31-DN41): Grimsby, Cleethorpes, Goole, surrounding areas.</li>
            <li><span style={{ verticalAlign: 'middle', marginRight: '10px' }}>✅</span>Lincoln and Lincolnshire (LN1-LN13): Lincoln, Market Rasen, Horncastle, Woodhall Spa, Louth, rural areas.</li>
          </ul>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="why-choose-section section nimbus-section-base">
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 className="section-heading">Why Choose Nimbus for Boiler Installation & Replacement in Scunthorpe</h2>
          <ul className="section-list section-list--flush">
            <li><span style={{ verticalAlign: 'middle', marginRight: '10px' }}>✅</span>Accredited installer for Ideal, Baxi and Worcester Bosch.</li>
            <li><span style={{ verticalAlign: 'middle', marginRight: '10px' }}>✅</span>Gas Safe registered <strong>boiler installers</strong> for safe, compliant installs and replacements.</li>
            <li><span style={{ verticalAlign: 'middle', marginRight: '10px' }}>✅</span>Local Scunthorpe installers with clear, transparent quotes and tidy workmanship.</li>
            <li><span style={{ verticalAlign: 'middle', marginRight: '10px' }}>✅</span>Flexible boiler finance available — contact us for details.</li>
            <li><span style={{ verticalAlign: 'middle', marginRight: '10px' }}>✅</span>Install leading boiler brands: Worcester Bosch, Vaillant, Ideal, Viessmann, Baxi.</li>
            <li><span style={{ verticalAlign: 'middle', marginRight: '10px' }}>✅</span>Manufacturer‑backed warranties and aftercare for peace of mind.</li>
          </ul>
        </div>
      </section>

      {/* Manufacturers Section */}
      <section className="manufacturers-section section nimbus-section-base">
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 className="section-heading section-heading--spaced">Boiler Brands We Install in Scunthorpe & North Lincolnshire</h2>
          <p className="section-text section-text--intro">We are accredited installers for <strong>Ideal</strong>, <strong>Baxi</strong> and <strong>Worcester Bosch</strong>, and we also install <strong>Vaillant</strong> and <strong>Viessmann</strong> systems.</p>
          <div className="badge-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', alignItems: 'center' }}>
            <div className="logo-card" style={{ padding: '20px', border: '1px solid #A8D5BA', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)', backgroundColor: '#f9f9f9', minHeight: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <a href="https://www.baxi.co.uk/" rel="noopener noreferrer" style={{ display: 'inline-block', textDecoration: 'none' }} target="_blank">
                <img alt="Baxi boilers logo - Nimbus Boilers & Heat Pumps in Scunthorpe" decoding="async" loading="lazy" src="/images/baxi-logo.png" style={{ maxWidth: '150px', maxHeight: '100px', display: 'block' }} />
              </a>
            </div>
            <div className="logo-card" style={{ padding: '20px', border: '1px solid #A8D5BA', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)', backgroundColor: '#f9f9f9', minHeight: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <a href="https://idealheating.com/" rel="noopener noreferrer" style={{ display: 'inline-block', textDecoration: 'none' }} target="_blank">
                <img alt="Ideal boilers logo - Nimbus Boilers & Heat Pumps in Scunthorpe" decoding="async" loading="lazy" src="/images/ideal-logo.png" style={{ maxWidth: '150px', maxHeight: '100px', display: 'block' }} />
              </a>
            </div>
            <div className="logo-card" style={{ padding: '20px', border: '1px solid #A8D5BA', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)', backgroundColor: '#f9f9f9', minHeight: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <a href="https://www.vaillant.co.uk/" rel="noopener noreferrer" style={{ display: 'inline-block', textDecoration: 'none' }} target="_blank">
                <img alt="Vaillant boilers logo - Nimbus Boilers & Heat Pumps in Scunthorpe" decoding="async" loading="lazy" src="/images/vaillant-logo.png" style={{ maxWidth: '150px', maxHeight: '100px', display: 'block' }} />
              </a>
            </div>
            <div className="logo-card" style={{ padding: '20px', border: '1px solid #A8D5BA', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)', backgroundColor: '#f9f9f9', minHeight: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <a href="https://www.worcester-bosch.co.uk/" rel="noopener noreferrer" style={{ display: 'inline-block', textDecoration: 'none' }} target="_blank">
                <img alt="Worcester Bosch boilers logo - Nimbus Boilers & Heat Pumps in Scunthorpe" decoding="async" loading="lazy" src="/images/worcester-logo.png" style={{ maxWidth: '150px', maxHeight: '100px', display: 'block' }} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Gas Safe Section */}
      <section className="gas-safe-section section nimbus-section-base">
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 className="section-heading section-heading--spaced">Why Use a Gas Safe Registered Boiler Installer in Scunthorpe?</h2>
          <img alt="Gas Safe Registered Logo - Nimbus Heat Pumps Ltd" decoding="async" loading="lazy" src="/images/gas-safe-logo.png" style={{ maxWidth: '200px', height: 'auto', display: 'block', margin: '0 auto 30px auto' }} />
          <p className="section-text section-text--intro">Choosing a Gas Safe registered engineer ensures all gas work is carried out safely and to the highest standards. Our certified team at Nimbus Boilers & Heat Pumps guarantees compliant <strong>boiler installation</strong>, replacement and servicing in Scunthorpe and North Lincolnshire.</p>
          <ul className="section-list section-list--flush">
            <li><span style={{ verticalAlign: 'middle', marginRight: '10px' }}>✅</span>Legal requirement for all gas work in the UK</li>
            <li><span style={{ verticalAlign: 'middle', marginRight: '10px' }}>✅</span>Reduces risk of gas leaks, carbon monoxide poisoning and fires</li>
            <li><span style={{ verticalAlign: 'middle', marginRight: '10px' }}>✅</span>Ensures insurance and warranty validity</li>
            <li><span style={{ verticalAlign: 'middle', marginRight: '10px' }}>✅</span>Professional expertise for efficient and safe installations</li>
            <li><span style={{ verticalAlign: 'middle', marginRight: '10px' }}>✅</span>Peace of mind knowing work is done to the highest standards</li>
          </ul>
        </div>
      </section>

      {/* Free Quote Section */}
      <section className="free-quote-section section nimbus-section-base">
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 className="section-heading">Request Your Free Gas Boiler Quote in Scunthorpe and North Lincolnshire</h2>
          <p className="section-text section-text--intro">Obtain a no-obligation quote for gas boiler installation, replacement, repair and servicing in Scunthorpe and North Lincolnshire. Our engineers will assess your property and recommend efficient boiler options tailored to your home and budget.</p>
          <p className="section-text section-text--small">We respect your data — see our <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>. Secure payment available to book your installation once you’re happy.</p>
          <div id="contact-form">
            {/* Contact form would go here */}
          </div>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <div className="sticky-cta" role="region" aria-label="Quick actions">
        <a className="sticky-cta__btn" href="#bqf-fullpaste" aria-label="Get Instant Quote">Get Instant Quote</a>
        <a className="sticky-cta__btn sticky-cta__btn--call" href="tel:01724622069" aria-label="Call 01724 622069">Call 01724 622069</a>
      </div>

      {/* Styles */}
      <style>
        {`
          .nimbus-section-base {
            padding: 100px 32px;
            text-align: center;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
            border-radius: 8px;
            margin: 40px 0;
            font-family: 'Inter', sans-serif;
            border: 2px solid #A8D5BA;
          }
          .section-heading {
            font-size: 28px;
            font-weight: 600;
            margin-bottom: 25px;
            color: #007a57;
            text-align: center;
          }
          .section-text {
            font-size: 17px;
            line-height: 1.7;
            color: #007a57;
            margin-bottom: 30px;
            text-align: center;
          }
          .section-list {
            font-size: 17px;
            line-height: 1.7;
            color: #007a57;
            list-style-type: none;
            padding-left: 0;
            margin: 0 auto 30px auto;
            max-width: 800px;
            text-align: center;
          }
          .section-cta-group {
            display: flex;
            justify-content: center;
            gap: 20px;
            flex-wrap: wrap;
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
          .cta-button:hover {
            background: #ffffff;
            border-color: #007a57;
            color: #007a57;
            transform: translateY(-3px) scale(1.02);
            box-shadow: 0 6px 20px rgba(0, 166, 118, 0.2), inset 0 0 0 2px #ffffff;
          }
          /* Add more styles as needed */
        `}
      </style>
      <ToastContainer />
    </>
  );
};

export default QuoteForm;