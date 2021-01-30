const mongoose = require('mongoose');
const Day = require('./Day');

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
    type: Date
  },
  dateEnd: {
    type: Date
  },
  latitude: {
    type: Number
  },
  longtitude: {
    type: Number
  },
  days: [Day.schema]
});

const Itinerary = mongoose.model('Itinerary', itinerarySchema);

module.exports = Itinerary;
