const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  custName: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['criminal', 'civil', 'original'], // Restrict to these values
    required: true,
  },
}, {
  timestamps: true,
});

const CustomerModel = mongoose.model('Customer', customerSchema);
module.exports = CustomerModel;