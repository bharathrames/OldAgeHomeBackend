const mongoose = require('mongoose');

const monthlyNeedSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  itemDescription: { type: String, required: true },
  quantity: { type: Number, required: true },
  estimatedCost: { type: Number, required: true },
  priority: { type: String, enum: ['essential', 'preferred'], required: true },
  notes: { type: String },
  approved: { type: Boolean, default: false }, 
  donationOptions: { 
    monetary: { type: Boolean, default: false },
    specificItems: [String],
    contactInfo: {
      name: { type: String },
      email: { type: String },
      phone: { type: String },
    },
  },
});

module.exports = mongoose.model('MonthlyNeed', monthlyNeedSchema);
