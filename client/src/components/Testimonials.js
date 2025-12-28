import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Doe',
      text: 'Great gas boiler installation in Scunthorpe! The team was professional and completed the job efficiently.',
      stars: 5,
      date: 'December 20, 2024'
    },
    {
      name: 'Jane Smith',
      text: 'Excellent gas boiler service in Scunthorpe. Reliable and friendly engineers.',
      stars: 5,
      date: 'December 15, 2024'
    },
    {
      name: 'Mike Johnson',
      text: 'Quick boiler repair in Scunthorpe. Fixed the issue same day!',
      stars: 5,
      date: 'December 10, 2024'
    },
    {
      name: 'Sarah Wilson',
      text: 'Highly recommend for gas boiler maintenance in North Lincolnshire area.',
      stars: 5,
      date: 'November 28, 2024'
    },
    {
      name: 'David Brown',
      text: 'Outstanding customer service and quality boiler installation.',
      stars: 5,
      date: 'November 20, 2024'
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Nimbus Boilers",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Scunthorpe",
      "addressRegion": "North Lincolnshire"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": 4.9,
      "bestRating": 5,
      "ratingCount": 120
    },
    "review": testimonials.map((t, index) => ({
      "@type": "Review",
      "author": { "@type": "Person", "name": t.name },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": t.stars
      },
      "reviewBody": t.text,
      "datePublished": t.date
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
