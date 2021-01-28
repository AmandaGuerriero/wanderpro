const mongoose = require('mongoose');

const { Schema } = mongoose;

const daySchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  date: {
    type: Date
  },
});

const Day = mongoose.model('Day', daySchema);

module.exports = Day;
