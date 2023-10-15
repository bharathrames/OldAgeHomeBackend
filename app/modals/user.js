const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contactInfo: { type: String },
  description: { type: String },
});

module.exports = mongoose.model('User', userSchema);
