import mongoose from 'mongoose';

var Schema = mongoose.Schema({
  createdAt:{
    type: Date,
    default: Date.now
  },
  companyName: String,
  companyAddress: String,
  companyEmail: String,
  companyPhone: Number
});

export default mongoose.model('Company', Schema);
