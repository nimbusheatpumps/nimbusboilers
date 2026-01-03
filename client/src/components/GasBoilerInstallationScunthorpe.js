import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import QuoteForm from './QuoteForm';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline';

const GasBoilerInstallationScunthorpe = () => {
  const [faqActive, setFaqActive] = useState(null);

  const toggleFaq = (index) => {
    setFaqActive(faqActive === index ? null : index);
  };

  const faqData = [
    {
      question: "How long does gas boiler installation take in Scunthorpe?",
      answer: "Standard combi boiler swaps take 1-2 days. System conversions or complex installs may take 3-5 days. Our Gas Safe engineers work efficiently to minimize disruption."
    },
    {
      question: "Am I eligible for boiler grants in Scunthorpe?",
      answer: "Gas boiler grants are available through ECO4 for low-income households or properties with poor EPC ratings. We check eligibility during your free survey. Note: £7,500 Boiler Upgrade Scheme is for heat pump replacements."
    },
    {
      question: "What is included in a new gas boiler installation?",
      answer: "Every installation includes MagnaCleanse chemical flush, Hive smart thermostat, shock arrester, scale reducer, magnetic filter, flue, controls, commissioning, and Gas Safe certification."
    },
    {
      question: "Do you offer boiler installation finance in Scunthorpe?",
      answer: "Yes, flexible finance options are available for gas boiler installations. Contact us for details and eligibility."
    },
    {
      question: "Which boiler brands do you install in Scunthorpe?",
      answer: "We install leading brands including Worcester Bosch, Vaillant, Baxi, Ideal, and Viessmann as accredited Gas Safe installers."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Gas Boiler Installation Scunthorpe | Expert Local Installers | Nimbus Boilers & Heat Pumps</title>
        <meta name="description" content="Professional gas boiler installation Scunthorpe by Gas Safe engineers. New installs, replacements, boiler service Scunthorpe, gas boiler grants Scunthorpe. Free quote, fast service North Lincolnshire." />
      </Helmet>

      <main className="bg-slate-50">
        {/* Hero Section */}
        <section className="bg-white section-padding">
          <div className="section-container flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="mb-6">Gas Boiler Installation Scunthorpe</h1>
              <p className="text-xl md:text-2xl text-slate-600 font-medium mb-8">Gas Safe Engineers | New Installs, Replacements & Upgrades</p>
              <p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">Professional gas boiler installation in Scunthorpe by certified Gas Safe engineers. New combi boilers, replacements, and system conversions.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#contact-form" className="btn-primary">Get Free Quote</a>
                <a href="/quote" className="btn-outline">Instant Quote</a>
              </div>
            </div>
            <div className="flex-1 w-full max-w-xl">
              <img src="/images/hero-boiler-room.webp" alt="Modern gas boiler installation Scunthorpe utility room" className="w-full h-[450px] object-cover rounded-[2.5rem] shadow-2xl border-8 border-slate-50" loading="lazy" />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-slate-50 section-padding">
          <div className="section-container">
            <h2 className="section-heading">Our Installation Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
              {[
                { title: "New Installs", text: "Complete new installations for homes without existing boilers." },
                { title: "Replacements", text: "Like-for-like combi swaps and efficiency upgrades." },
                { title: "Conversions", text: "Convert system/regular to combi boilers with pipework." },
                { title: "Back Boilers", text: "Safe removal of old back boilers and modern replacements." }
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
            <h2 className="section-heading">Installation FAQs</h2>
            <div className="space-y-6">
              {faqData.map((faq, i) => (
                <div key={i} className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <button
                    className="w-full px-8 py-6 text-left font-bold text-lg flex justify-between items-center hover:bg-slate-50 transition-colors"
                    onClick={() => toggleFaq(i)}
                  >
                    <span className="text-slate-900">{faq.question}</span>
                    <span className={`flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-300 ${faqActive === i ? 'bg-primary text-white' : 'bg-primary/5 text-primary'}`}>
                      {faqActive === i ? (
                        <MinusIcon className="w-5 h-5" />
                      ) : (
                        <PlusIcon className="w-5 h-5" />
                      )}
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

        {/* Free Quote Section */}
        <section id="contact-form" className="bg-navy section-padding">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-white mb-6">Request Your Free Installation Quote</h2>
              <p className="text-xl text-slate-400">Get your personalized quote for gas boiler installation in Scunthorpe today.</p>
            </div>
            <div className="bg-white rounded-[3rem] p-8 md:p-20 shadow-2xl">
              <QuoteForm />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default GasBoilerInstallationScunthorpe;
