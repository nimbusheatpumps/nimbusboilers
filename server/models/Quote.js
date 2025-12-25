const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
  name: String,
  email: String,
  boilerType: String,
  propertySize: String,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Quote', quoteSchema);