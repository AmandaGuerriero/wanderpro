const mongoose = require('mongoose');

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
  dateBegin: {
    type: Date
  },
  dateEnd: {
    type: Date
  }
});

const Itinerary = mongoose.model('Itinerary', itinerarySchema);

module.exports = Itinerary;
