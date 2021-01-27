const { Itinerary } = require('../models');
const resolvers = {
  Query: {
    itineraries: async () => {
      return await Itinerary.find();
    },
    itineraryById: async (parent, { _id }) => {
      return await Itinerary.findById(_id)
    }
  },
  Mutation: {
    addItinerary: async (parent, args) => {
      const itinerary = await Itinerary.create(args);
      return itinerary;
    }
  }
};

module.exports = resolvers;