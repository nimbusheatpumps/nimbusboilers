import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import QuoteForm from './QuoteForm';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline';

const BoilerPriceGuideScunthorpe = () => {
  const [faqActive, setFaqActive] = useState(null);

  const toggleFaq = (index) => {
    setFaqActive(faqActive === index ? null : index);
  };

  const faqData = [
    {
      question: "What affects boiler prices in Scunthorpe?",
      answer: "Boiler prices depend on home size, number of bathrooms, boiler type (combi, system, regular), efficiency rating (A+++ recommended), and brands like Baxi, Ideal, Vaillant, Worcester Bosch. Additional factors include flue position, gas supply upgrades, and system protection like powerflushing."
    },
    {
      question: "What are combi boiler prices Scunthorpe?",
      answer: "Combi boilers range from £2,200–£3,800 in Scunthorpe. Eligible households may qualify for up to £7,500 ECO4 grant reduction. Includes installation by Gas Safe engineers."
    },
    {
      question: "System boiler cost North Lincolnshire?",
      answer: "System boilers cost £2,500–£4,200. Suitable for homes with hot water cylinders and multiple bathrooms. Free survey to confirm compatibility."
    },
    {
      question: "Regular boiler installation prices Scunthorpe?",
      answer: "Regular boilers £2,800–£4,500. Ideal for traditional systems with loft tanks. Prices after grant where eligible."
    },
    {
      question: "Boiler prices after grant Scunthorpe?",
      answer: "ECO4 grants can reduce costs significantly for low-income or low EPC homes. £7,500 Boiler Upgrade Scheme for heat pumps. Free eligibility check during survey."
    },
    {
      question: "Do you offer free boiler quotes Scunthorpe?",
      answer: "Yes, free no-obligation Gas Safe boiler quotes and surveys for Scunthorpe and North Lincolnshire. Call 01724 622069."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Boiler Price Guide Scunthorpe | Transparent Boiler Installation Costs | Nimbus Boilers</title>
        <meta name="description" content="Boiler price guide Scunthorpe: combi boiler prices Scunthorpe £2,200–£3,800, system boiler cost North Lincolnshire £2,500–£4,200, regular boiler installation prices Scunthorpe £2,800–£4,500. Boiler prices after grant. Free Gas Safe quotes." />
      </Helmet>

      <main className="bg-slate-50">
        {/* Hero Section */}
        <section className="bg-white section-padding">
          <div className="section-container flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="mb-6">Gas Boiler Price Guide Scunthorpe</h1>
              <p className="text-xl md:text-2xl text-slate-600 font-medium mb-8">Combi, System & Regular Boiler Prices | Gas Safe Quotes Scunthorpe</p>
              <p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">Comprehensive boiler price guide for Scunthorpe and North Lincolnshire. Transparent pricing for all boiler types. Free Gas Safe quotes and surveys.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#contact-form" className="btn-primary">Book Free Survey</a>
                <a href="/quote" className="btn-outline">Get Instant Quote</a>
              </div>
            </div>
            <div className="flex-1 w-full max-w-xl">
              <img src="/images/hero-boiler-room.webp" alt="Modern gas boiler installation Scunthorpe utility room" className="w-full h-[450px] object-cover rounded-[2.5rem] shadow-2xl border-8 border-slate-50" loading="lazy" />
            </div>
          </div>
        </section>

        {/* Pricing Table Section */}
        <section className="bg-slate-50 section-padding">
          <div className="section-container">
            <h2 className="section-heading">Typical Boiler Installation Prices</h2>
            <div className="overflow-hidden bg-white rounded-3xl shadow-premium border border-slate-100">
              <table className="min-w-full divide-y divide-slate-100">
                <thead className="bg-slate-50/50">
                  <tr>
                    <th className="px-8 py-6 text-left text-sm font-black text-slate-900 uppercase tracking-widest">Boiler Type</th>
                    <th className="px-8 py-6 text-left text-sm font-black text-slate-900 uppercase tracking-widest">Price Range</th>
                    <th className="px-8 py-6 text-left text-sm font-black text-slate-900 uppercase tracking-widest">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {
                    [
                      { type: "Combi", price: "£2,000 - £3,500", best: "Small-medium homes, 1-2 bathrooms" },
                      { type: "System", price: "£2,500 - £4,000", best: "Medium homes with cylinder, 2+ bathrooms" },
                      { type: "Regular", price: "£2,200 - £4,200", best: "Larger homes, traditional systems" }
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-8 py-8 font-bold text-slate-900 text-lg">{row.type}</td>
                        <td className="px-8 py-8 font-black text-primary text-lg">{row.price}</td>
                        <td className="px-8 py-8 text-slate-600">{row.best}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
            
            <div className="mt-16 bg-secondary/5 border-2 border-secondary/10 rounded-[2rem] p-10 text-center shadow-xl">
              <h3 className="text-secondary font-black mb-4 uppercase tracking-widest">Grant Eligibility</h3>
              <p className="text-slate-700 text-xl font-medium">You could be eligible for up to <span className="text-secondary font-black text-2xl">£7,500</span> towards your installation through government grants.</p>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="bg-white section-padding">
          <div className="section-container max-w-4xl">
            <h2 className="section-heading">Pricing FAQs</h2>
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
              <h2 className="text-white mb-6">Get Your Personalised Quote</h2>
              <p className="text-xl text-slate-400">Enter your details for a free, no-obligation boiler price quote tailored to your home.</p>
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

export default BoilerPriceGuideScunthorpe;
