const mongoose = require('mongoose');

const BillSchema = new mongoose.Schema({
  refNo: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  advocateId:{
    type: String,
    require:true
  },
  items: [{
    particulars: {
      type: String,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    },
    amount: {
      type: Number,
      required: true
    },
  }],
  totalAmount: {
    type: Number,
    required: true
  },
});

const Bill = mongoose.model('Bill', BillSchema);
module.exports = Bill;