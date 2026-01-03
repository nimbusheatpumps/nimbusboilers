import React, { useEffect, useCallback, useRef } from 'react';
import { Helmet } from 'react-helmet';
import Chat from './Chat';
import { Link } from 'react-router-dom';

const Footer = () => {
  const loadedRef = useRef(false);

  const handleScroll = useCallback(() => {
    if (loadedRef.current || window.scrollY <= window.innerHeight / 2) return;
    loadedRef.current = true;
    const tidioScript = document.createElement('script');
    tidioScript.src = '//code.tidio.co/YOUR_PUBLIC_KEY.js'; /* Replace YOUR_PUBLIC_KEY with your Tidio account public key from https://www.tidio.com/ after free signup. */
    tidioScript.async = true;
    document.body.appendChild(tidioScript);
    window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <>
      <Chat />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://nimbusheatpumps.co.uk/#organization",
            "name": "Nimbus Heat Pumps Ltd",
            "alternateName": "Nimbus Heat Pumps",
            "url": "https://nimbusheatpumps.co.uk/",
            "logo": "/images/nimbus-logo.webp",
            "description": "Gas Safe registered installers for boiler installations, air source heat pumps and heating solutions in Scunthorpe and North Lincolnshire. Claim £7500 Boiler Upgrade Scheme grants.",
            "image": "https://nimbusheatpumps.co.uk/wp-content/uploads/2025/06/iStock-2211126281-scaled.jpg",
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
      <style dangerouslySetInnerHTML={{__html: 'footer div.text-xs { color: #ffffff !important; } footer a.group span { color: #ffffff !important; } footer a.group:hover span { color: #4ade80 !important; }'}} />
      <footer className="bg-navy text-white company-details-section">
        <div className="section-container section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Gas Safe Trust Section */}
            <div className="bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 flex flex-col md:flex-row items-center gap-8 shadow-2xl">
              <div className="flex items-center gap-6">
                <img
                  src="/gas-safe-logo.svg"
                  alt="Official Gas Safe Register Logo"
                  className="h-20 w-auto flex-shrink-0"
                  loading="lazy"
                />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    Gas Safe Registered
                  </h3>
                  <p className="text-secondary font-black tracking-[0.2em] text-lg">#966812</p>
                </div>
              </div>
              <a
                href="https://www.gassaferegister.co.uk/search-register/?search=966812"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary !px-8 !py-4 w-full md:w-auto whitespace-nowrap shadow-xl"
                aria-label="Verify our Gas Safe registration"
              >
                Verify Registration
              </a>
            </div>

            {/* Contact Info */}
            <div className="text-center lg:text-left space-y-6">
              <h3 className="text-3xl font-extrabold">Nimbus Boilers & Heat Pumps</h3>
              <p className="text-slate-400 text-lg max-w-md mx-auto lg:mx-0">Expert boiler installation and repair services across Scunthorpe and North Lincolnshire.</p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-8">
                <a href="tel:01724622069" className="text-white hover:text-secondary transition-colors font-bold text-lg flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  01724 622069
                </a>
                <a href="mailto:info@nimbusheatpumps.co.uk" className="text-white hover:text-secondary transition-colors font-bold text-lg flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  info@nimbusheatpumps.co.uk
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-sm text-slate-500">&copy; 2025 Nimbus Boilers & Heat Pumps Ltd. All rights reserved.</p>
            <div className="flex gap-10">
              <Link to="/privacy-policy" className="text-sm text-slate-500 hover:text-white transition-colors font-medium">Privacy Policy</Link>
              <Link to="/terms-and-conditions" className="text-sm text-slate-500 hover:text-white transition-colors font-medium">Terms & Conditions</Link>
              <a href="https://x.com/NimbusHeatPumps" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-500 hover:text-white transition-colors font-medium">Twitter</a>
            </div>
          </div>
          <div className="mt-10 text-center">
            <p className="text-[11px] text-slate-600 uppercase tracking-[0.3em] font-bold">Calls recorded for training and quality purposes.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;