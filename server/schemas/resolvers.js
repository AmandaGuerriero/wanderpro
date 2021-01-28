const { Itinerary, User } = require('../models');

const resolvers = {
  Query: {
    itineraries: async () => {
      return await Itinerary.find();
    },
    itineraryById: async (parent, { _id }) => {
      return await Itinerary.findById(_id)
    },
    user: async (parent, { _id }) => {
      const user = await User.findById(user._id).populate({
        path: 'itineraries',
        populate: 'title'
      });

      user.itineraries.sort((a, b) => b.title - a.title);

      return user;
    },
  },
  Mutation: {
    addItinerary: async (parent, args) => {
      const itinerary = await Itinerary.create(args);
      return itinerary;
    }, 
    updateItinerary: async(parent, { _id, title, description }) => {
      const newTitle = title
      const newDescription = description
      return Itinerary.findByIdAndUpdate(_id, {title: newTitle, description: newDescription}, { new: true });
    },
    addUser: async (parent, args) => {
      const user = await User.create(args);

      return user;
    },
    updateUser: async (parent, { _id, username }) => {
      const newUsername = username
      return await User.findByIdAndUpdate(_id, {username: newUsername}, { new: true });
    },
  }
};

module.exports = resolvers;