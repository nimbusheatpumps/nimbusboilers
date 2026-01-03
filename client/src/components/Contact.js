import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', rating: 5, review: '' });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      const res = await fetch('http://localhost:5000/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage('Feedback submitted successfully!');
        setFormData({ name: '', email: '', rating: 5, review: '' });
      } else {
        setMessage(data.message || 'Error submitting feedback.');
      }
    } catch (err) {
      setMessage('Network error: ' + err.message);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 section-padding px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white shadow-premium rounded-3xl p-8 md:p-16 border border-slate-100">
        <h1 className="text-center mb-6">Customer Feedback</h1>
        <p className="section-subheading !mb-12">Share your experience with our boiler service. Your review helps us serve you better!</p>
        {message && (
          <div className={`p-6 rounded-2xl mb-8 font-medium text-center ${
            message.includes('successfully') ? 'bg-green-50 border border-green-200 text-green-800' : 'bg-red-50 border border-red-200 text-red-800'
          }`}>
            {message}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="input-field"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input-field"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label htmlFor="rating" className="block text-sm font-bold text-slate-700 mb-2">Rating</label>
            <select
              id="rating"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              required
              className="input-field appearance-none bg-white"
            >
              <option value={5}>⭐⭐⭐⭐⭐ Excellent</option>
              <option value={4}>⭐⭐⭐⭐ Good</option>
              <option value={3}>⭐⭐⭐ Average</option>
              <option value={2}>⭐⭐ Poor</option>
              <option value={1}>⭐ Terrible</option>
            </select>
          </div>
          <div>
            <label htmlFor="review" className="block text-sm font-bold text-slate-700 mb-2">Your Review</label>
            <textarea
              id="review"
              name="review"
              rows={6}
              value={formData.review}
              onChange={handleChange}
              required
              className="input-field resize-none"
              placeholder="Tell us about your experience..."
            />
          </div>
          <button
            type="submit"
            id="feedback-submit"
            disabled={loading}
            className="btn-primary w-full py-4 text-lg"
          >
            {loading ? 'Submitting...' : 'Submit Review'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;