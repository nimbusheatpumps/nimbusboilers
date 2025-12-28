const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  name: String,
  email: String,
  rating: Number,
  review: String,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Feedback', feedbackSchema);