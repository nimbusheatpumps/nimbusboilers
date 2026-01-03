import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import QuoteForm from './QuoteForm';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline';

const BoilerRepairScunthorpe = () => {
  const [faqActive, setFaqActive] = useState(null);

  const toggleFaq = (index) => {
    setFaqActive(faqActive === index ? null : index);
  };

  const faqData = [
    {
      question: 'How much does boiler repair cost in Scunthorpe?',
      answer: 'Boiler repair costs in Scunthorpe vary depending on the issue, typically ranging from £50 to £500 for common repairs like thermostat replacement or pump fixes. Emergency call-outs may incur additional fees.'
    },
    {
      question: 'What are common boiler problems in Scunthorpe homes?',
      answer: 'Common issues include no hot water, low pressure, strange noises, and pilot light problems. Our Gas Safe engineers diagnose and fix these quickly to restore heating.'
    },
    {
      question: 'How long does boiler repair take in Scunthorpe?',
      answer: 'Most boiler repairs in Scunthorpe are completed within 1-2 hours, though complex issues may take longer. We aim for same-day service for urgent repairs.'
    },
    {
      question: 'Do you offer emergency boiler repair in Scunthorpe?',
      answer: 'Yes, we provide 24/7 emergency boiler repair services in Scunthorpe and North Lincolnshire for breakdowns during cold weather.'
    },
    {
      question: 'Is boiler installation included with repair services in Scunthorpe?',
      answer: 'While we specialize in repairs, we also offer full boiler installation services in Scunthorpe, including upgrades to energy-efficient models.'
    },
    {
      question: 'What warranties do you offer on boiler repairs in Scunthorpe?',
      answer: 'We provide a 12-month warranty on all boiler repair work in Scunthorpe, ensuring peace of mind for our customers.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Boiler Repair Scunthorpe | Gas Boiler Service North Lincolnshire | Nimbus Boilers & Heat Pumps</title>
        <meta name="description" content="Expert boiler repair Scunthorpe services by Gas Safe registered engineers. Fast emergency repairs, installations and servicing in Scunthorpe, Grimsby, Doncaster, Lincoln." />
      </Helmet>

      <main className="bg-slate-50">
        {/* Hero Section */}

        <section className="section-padding bg-navy text-white">
          <div className="section-container text-center">
            <h1 className="text-white mb-6">Boiler Repair Scunthorpe</h1>
            <p className="text-xl md:text-2xl text-slate-200 font-medium mb-10 max-w-3xl mx-auto">
              Fast, reliable, and professional boiler repair services in Scunthorpe and North Lincolnshire.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact-form" className="btn-primary">Schedule Repair</a>
              <a href="/quote" className="btn-outline">Get Instant Quote</a>
            </div>
          </div>
        </section>

        {/* Services Section */}

        <section className="bg-slate-50 section-padding">
          <div className="section-container">
            <h2 className="section-heading">Our Repair Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
              {[
                { title: "Emergency Repair", text: "24/7 emergency boiler repair services in Scunthorpe." },
                { title: "Annual Servicing", text: "Keep your boiler efficient and safe with regular maintenance." },
                { title: "Installation", text: "Professional boiler installation with energy-efficient models." },
                { title: "Safety Certificates", text: "Gas safety certificate issuance for landlords and homeowners." }
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
            <h2 className="section-heading">Repair FAQs</h2>
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
              <h2 className="text-white mb-6">Request Your Free Repair Quote</h2>
              <p className="text-xl text-slate-400">Get a no-obligation quote for boiler repair, installation or servicing in Scunthorpe.</p>
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

export default BoilerRepairScunthorpe;
