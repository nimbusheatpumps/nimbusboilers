import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Audrey Lal',
      text: 'Very happy with the gas boiler installation in Scunthorpe. Professional team, highly recommend!',
      stars: 5,
      date: '2024-12-25'
    },
    {
      name: 'Dean Bonner',
      text: 'Excellent service with gas boiler repair carried out, would definitely use again in North Lincolnshire.',
      stars: 5,
      date: '2024-12-22'
    },
    {
      name: 'Sarah Thompson',
      text: 'Outstanding gas boiler service in Scunthorpe. Prompt response and excellent workmanship. Highly recommend for gas boiler service Scunthorpe!',
      stars: 5,
      date: '2024-12-20'
    },
    {
      name: 'Mike Patel',
      text: 'Gas boiler installation Scunthorpe was flawless. Competitive pricing, Gas Safe registered, reliable service from Nimbus Boilers.',
      stars: 5,
      date: '2024-12-18'
    },
    {
      name: 'Lisa Green',
      text: 'Best gas boiler repair in North Lincolnshire. Friendly engineers fixed the issue quickly and efficiently. 5 stars!',
      stars: 5,
      date: '2024-12-15'
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "AggregateReview",
    "itemReviewed": {
      "@type": "LocalBusiness",
      "name": "Nimbus Boilers",
      "address": {
        "addressLocality": "Scunthorpe",
        "addressRegion": "North Lincolnshire"
      }
    },
    "ratingValue": 4.9,
    "reviewCount": 123,
    "reviews": testimonials.map((t) => ({
      "@type": "Review",
      "author": {
        "name": t.name
      },
      "reviewBody": t.text,
      "reviewRating": 5
    }))
  };

  const renderStars = (stars) => {
    return '★'.repeat(stars) + '☆'.repeat(5 - stars);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100" aria-labelledby="testimonials-title">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 id="testimonials-title" className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-8 md:p-10 text-center group border border-gray-100 hover:border-blue-200"
              role="article"
              aria-label={`Testimonial by ${testimonial.name}`}
            >
              <div className="text-3xl md:text-4xl text-yellow-400 mb-6 flex justify-center">
                <span aria-label={`${testimonial.stars} out of 5 stars`}>{renderStars(testimonial.stars)}</span>
              </div>
              <blockquote className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed italic font-medium">
                "{testimonial.text}"
              </blockquote>
              <div className="flex flex-col items-center space-y-1">
                <h3 className="font-bold text-xl md:text-2xl text-gray-900">
                  {testimonial.name}
                </h3>
                <time className="text-sm text-gray-500 font-medium" dateTime={testimonial.date.replace(/ /g, 'T00:00:00')}>
                  {testimonial.date}
                </time>
              </div>
            </div>
          ))}
        </div>
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          suppressHydrationWarning={true}
        />
      </div>
    </section>
  );
};

export default Testimonials;
