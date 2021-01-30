const mongoose = require('mongoose');
const Activity = require('./Activity');

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
  activities: [Activity.schema]
});

const Day = mongoose.model('Day', daySchema);

module.exports = Day;
