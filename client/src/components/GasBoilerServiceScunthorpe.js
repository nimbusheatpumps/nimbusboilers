import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import QuoteForm from './QuoteForm';
import { Link } from 'react-router-dom';

const GasBoilerServiceScunthorpe = () => {
  const [faqActive, setFaqActive] = useState(null);

  const toggleFaq = (index) => {
    setFaqActive(faqActive === index ? null : index);
  };

  const faqData = [
    {
      question: "How often should my gas boiler be serviced in Scunthorpe?",
      answer: "According to UK regulations and manufacturer recommendations, gas boilers should be serviced annually. Our Gas Safe engineers in Scunthorpe recommend booking your boiler service every 12 months to ensure safety and efficiency."
    },
    {
      question: "How much does a boiler service cost in North Lincolnshire?",
      answer: "Boiler service costs in Scunthorpe typically range from £80 to £150, depending on the boiler type and system complexity. We offer fixed-price boiler servicing with no hidden fees."
    },
    {
      question: "What is included in a Gas Safe boiler service in Scunthorpe?",
      answer: "A comprehensive Gas Safe boiler service includes visual inspection, flue gas analysis, cleaning the combustion chamber, checking all safety devices, pressure testing, and providing an efficiency report."
    },
    {
      question: "What are the benefits of regular boiler servicing?",
      answer: "Regular servicing improves safety, increases efficiency (saving up to 10% on bills), prevents breakdowns, extends boiler lifespan, and ensures compliance with insurance and warranty requirements."
    },
    {
      question: "Do you offer emergency boiler service in Scunthorpe?",
      answer: "Yes, we provide 24/7 emergency boiler service across Scunthorpe and North Lincolnshire for urgent issues like no heating or hot water."
    },
    {
      question: "Is annual boiler service required for landlords in Scunthorpe?",
      answer: "Yes, landlords must have an annual Gas Safety Certificate for rental properties. We issue CP12 certificates following thorough inspections."
    },
    {
      question: "What happens if issues are found during my boiler service?",
      answer: "We will identify any faults during the service and provide a detailed repair quote on the spot. No work is carried out without your approval."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Gas Boiler Service Scunthorpe | Annual Boiler Servicing North Lincolnshire | Nimbus Boilers & Heat Pumps</title>
        <meta name="description" content="Expert gas boiler service Scunthorpe by Gas Safe registered engineers. Annual boiler servicing, safety checks and maintenance in North Lincolnshire. Fast, reliable service. Free quote." />
      </Helmet>

      <main className="bg-slate-50">
        {/* Hero Section */}
        <section className="bg-white section-padding">
          <div className="section-container flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="mb-6">Gas Boiler Service Scunthorpe</h1>
              <p className="text-xl md:text-2xl text-slate-600 font-medium mb-8">Annual Boiler Servicing North Lincolnshire | Gas Safe Engineers</p>
              <p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">Professional gas boiler service in Scunthorpe by certified Gas Safe engineers. Annual servicing ensures safety, efficiency and compliance.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#contact-form" className="btn-primary">Book Service</a>
                <a href="/quote" className="btn-outline">Get Instant Quote</a>
              </div>
            </div>
            <div className="flex-1 w-full max-w-xl">
              <img src="https://nimbusheatpumps.co.uk/wp-content/uploads/2025/06/iStock-2211126281-scaled.jpg" alt="Gas boiler service Scunthorpe" className="w-full h-[450px] object-cover rounded-[2.5rem] shadow-2xl border-8 border-slate-50" loading="lazy" />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-slate-50 section-padding">
          <div className="section-container">
            <h2 className="section-heading">Our Servicing Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Annual Service", text: "Comprehensive annual servicing for gas boilers." },
                { title: "Safety Checks", text: "Thorough safety inspections and reports." },
                { title: "Efficiency Tuning", text: "Optimise your boiler for lower energy bills." },
                { title: "Landlord CP12", text: "Gas Safety Certificates for rental properties." }
              ].map((service, i) => (
                <div key={i} className="card-premium flex flex-col items-center text-center">
                  <h3 className="text-xl mb-4">{service.title}</h3>
                  <p className="text-slate-600 mb-0">{service.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="bg-white section-padding">
          <div className="section-container max-w-4xl">
            <h2 className="section-heading">Service FAQs</h2>
            <div className="space-y-6">
              {faqData.map((faq, i) => (
                <div key={i} className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <button
                    className="w-full px-8 py-6 text-left font-bold text-lg flex justify-between items-center hover:bg-slate-50 transition-colors"
                    onClick={() => toggleFaq(i)}
                  >
                    <span className="text-slate-900">{faq.question}</span>
                    <span className={`flex items-center justify-center w-8 h-8 rounded-full bg-primary/5 text-primary transform transition-transform duration-300 ${faqActive === i ? 'rotate-45 bg-primary text-white' : ''}`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v12M6 12h12" /></svg>
                    </span>
                  </button>
                  {faqActive === i && (
                    <div className="px-8 py-6 bg-slate-50/50 text-slate-600 border-t border-slate-100 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Now Section */}
        <section id="contact-form" className="section-padding bg-navy text-white text-center">
          <div className="section-container">
            <h2 className="text-white mb-6">Ready to Book Your Boiler Service?</h2>
            <p className="text-xl mb-10 text-slate-300 max-w-2xl mx-auto">
              Don't wait for a breakdown. Ensure your boiler is safe and efficient with a professional service from Nimbus Boilers.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/contact" className="btn-primary">
                Contact Us
              </Link>
              <a href="tel:01724488050" className="btn-outline !border-white !text-white hover:!bg-white hover:!text-navy">
                Call 01724 488050
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default GasBoilerServiceScunthorpe;
