import mongoose from 'mongoose';

const leadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  source: { type: String, default: 'general' },
  productInterest: { type: String, default: 'psyllium-husk' },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Lead', leadSchema); 