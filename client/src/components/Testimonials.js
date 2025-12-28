import React, { useState, useEffect } from 'react';
/* global google */
const Testimonials = () => {
  const staticTestimonials = [
    {
      name: 'Audrey Lal',
      text: 'positive note',
      stars: 5
    },
    {
      name: 'Dean Bonner',
      text: 'Excellent service with work carried out would defo use again',
      stars: 5
    }
  ];


  const renderStars = (stars) => {
    return '★'.repeat(stars) + '☆'.repeat(5 - stars);
  };

  const [liveReviews, setLiveReviews] = useState([]);
  const [businessName, setBusinessName] = useState('');

  useEffect(() => {
    const initPlaces = async () => {
      try {
        const { Place } = await google.maps.importLibrary('places');
        const place = new Place({
          id: 'ChIJEWnr9yN396sRQM7LYNrsuWA',
          map: null,
          requestOptions: {
            fields: ['reviews', 'name', 'rating']
          }
        });
        const details = await place.fetchFields({ fields: ['reviews', 'name', 'rating'] });
        console.log(`# Live Google Reviews fetched: ${details.reviews?.length || 0}`);
        if (details.reviews && details.reviews.length > 0) {
          setLiveReviews(details.reviews.slice(0, 5));
          setBusinessName(details.name);
          const sample = details.reviews[0];
          console.log('Sample review:', {
            name: sample.author_name,
            rating: sample.rating,
            text: sample.text.substring(0, 100) + (sample.text.length > 100 ? '...' : '')
          });
        }
      } catch (error) {
        console.error('Google Places API error:', error);
      }
    };

    if (window.google?.maps?.places) {
      initPlaces();
      return;
    }

    const existingScript = document.querySelector('script[src*="maps.googleapis.com/maps/api/js"]');
    if (existingScript) {
      const checkGoogleReady = () => {
        if (window.google?.maps?.places) {
          initPlaces();
        } else {
          setTimeout(checkGoogleReady, 100);
        }
      };
      checkGoogleReady();
      return;
    }

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_PLACES_API_KEY}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = initPlaces;
    script.onerror = () => console.error('Failed to load Google Maps script');
    document.head.appendChild(script);

  }, []);

  const formatRelativeTime = (timestamp) => {
    const now = Math.floor(Date.now() / 1000);
    const diff = now - timestamp;
    if (diff < 60) return 'just now';
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    if (diff < 2592000) return `${Math.floor(diff / 86400)}d ago`;
    if (diff < 31536000) return `${Math.floor(diff / 2592000)}mo ago`;
    return `${Math.floor(diff / 31536000)}y ago`;
  };

  const displayedTestimonials = liveReviews.length > 0
    ? liveReviews.map((review) => ({
        name: review.author_name,
        text: review.text,
        stars: review.rating,
        date: formatRelativeTime(review.time),
        dateTime: new Date(review.time * 1000).toISOString()
      }))
    : staticTestimonials;

  const avgRating = displayedTestimonials.reduce((sum, t) => sum + t.stars, 0) / displayedTestimonials.length || 5;

  const schemaReviews = displayedTestimonials.map((t) => ({
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": t.name
    },
    "reviewBody": t.text,
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": t.stars.toString(),
      "bestRating": "5"
    }
  }));

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": businessName || "Nimbus Boilers & Heat Pumps",
    "description": "gas boiler installation Scunthorpe, gas boiler repair North Lincolnshire, gas boiler service Scunthorpe",
    "address": {
      "addressLocality": "Scunthorpe",
      "addressRegion": "North Lincolnshire"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": avgRating.toFixed(1),
      "reviewCount": displayedTestimonials.length
    },
    "review": schemaReviews
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100" aria-labelledby="testimonials-title">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 id="testimonials-title" className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {displayedTestimonials.map((testimonial, index) => (
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
                {testimonial.date && (
                  <time className="text-sm text-gray-500 font-medium" dateTime={testimonial.dateTime || testimonial.date.replace(/ /g, 'T00:00:00')}>
                    {testimonial.date}
                  </time>
                )}
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
