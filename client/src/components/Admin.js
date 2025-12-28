import React, { useState, useEffect } from 'react';

const Admin = () => {
  const [quotes, setQuotes] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchQuotes = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('Unauthorized');
        return;
      }
      try {
        const response = await fetch('http://localhost:5000/api/quotes', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        if (response.ok) {
          const data = await response.json();
          setQuotes(data);
        } else {
          setError('Failed to fetch quotes');
        }
      } catch (err) {
        setError('Error fetching quotes');
      }
    };
    fetchQuotes();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      {error && <p className="text-red-500">{error}</p>}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Boiler Type</th>
              <th className="py-2 px-4 border-b">Property Size</th>
              <th className="py-2 px-4 border-b">Date</th>
            </tr>
          </thead>
          <tbody>
            {quotes.map(quote => (
              <tr key={quote._id}>
                <td className="py-2 px-4 border-b">{quote.name}</td>
                <td className="py-2 px-4 border-b">{quote.email}</td>
                <td className="py-2 px-4 border-b">{quote.boilerType}</td>
                <td className="py-2 px-4 border-b">{quote.propertySize}</td>
                <td className="py-2 px-4 border-b">{new Date(quote.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;