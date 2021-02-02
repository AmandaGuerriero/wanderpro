const mongoose = require('mongoose');
const Activity = require('./Activity');

const { Schema } = mongoose;

const itinerarySchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  location: {
    type: String,
  },
  dateBegin: {
    type: String,
    trim: true
  },
  dateEnd: {
    type: String,
    trim: true

  },
  latitude: {
    type: Number
  },
  longitude: {
    type: Number
  },
  activities: [Activity.schema]
});

itinerarySchema.virtual('activityCount').get(function() {
  return this.activities.length;
});

const Itinerary = mongoose.model('Itinerary', itinerarySchema);

module.exports = Itinerary;
