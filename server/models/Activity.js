const mongoose = require('mongoose');

const { Schema } = mongoose;

const activitySchema = new Schema({
  location: {
    type: String,
    required: true,
    trim: true
  },
  timeFrom: {
    type: Time
  },
  timeTo: {
    type: Time
  },
  notes: {
    type: String,
    trim: true
  }
});

const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;
