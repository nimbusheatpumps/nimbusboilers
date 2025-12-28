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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white shadow-2xl rounded-3xl p-8 md:p-12">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6 text-center">Customer Feedback</h1>
        <p className="text-xl text-gray-600 mb-12 text-center">Share your experience with our boiler service Scunthorpe. Your review helps us serve you better!</p>
        {message && (
          <div className={`p-6 rounded-2xl mb-8 font-medium text-center ${
            message.includes('successfully') ? 'bg-green-100 border-2 border-green-300 text-green-800' : 'bg-red-100 border-2 border-red-300 text-red-800'
          }`}>
            {message}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label htmlFor="name" className="block text-lg font-semibold text-gray-900 mb-3">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-200 focus:border-blue-500 transition-all duration-300 shadow-sm"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-semibold text-gray-900 mb-3">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-200 focus:border-blue-500 transition-all duration-300 shadow-sm"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label htmlFor="rating" className="block text-lg font-semibold text-gray-900 mb-3">Rating</label>
            <select
              id="rating"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              required
              className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-200 focus:border-blue-500 transition-all duration-300 shadow-sm appearance-none bg-white"
            >
              <option value={5}>⭐⭐⭐⭐⭐ Excellent - Best boiler service Scunthorpe!</option>
              <option value={4}>⭐⭐⭐⭐ Good</option>
              <option value={3}>⭐⭐⭐ Average</option>
              <option value={2}>⭐⭐ Poor</option>
              <option value={1}>⭐ Terrible</option>
            </select>
          </div>
          <div>
            <label htmlFor="review" className="block text-lg font-semibold text-gray-900 mb-3">Your Review</label>
            <textarea
              id="review"
              name="review"
              rows={8}
              value={formData.review}
              onChange={handleChange}
              required
              className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-200 focus:border-blue-500 transition-all duration-300 shadow-sm resize-vertical"
              placeholder="Review our boiler service Scunthorpe. Tell us about your experience with Gas Boiler Service Scunthorpe, installation, repair, or maintenance. How can we improve?"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-6 px-8 rounded-2xl font-bold text-xl shadow-xl hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {loading ? 'Submitting Your Feedback...' : 'Submit Review'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;