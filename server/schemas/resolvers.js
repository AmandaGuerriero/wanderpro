
const { Itinerary, User, Activity } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');


const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('itineraries')
    
        return userData;
      }
      throw new AuthenticationError('Not logged in');
    },
    itineraries: async () => {
      return await Itinerary.find();
    },
    itineraryById: async (parent, { _id }) => {
      return await Itinerary.findById(_id)
    },
    users: async () => {
      return await User.find();
    },
    userById: async (parent, { _id }) => {
      const user = await User.findById(_id)
        .select('-__v -password')
        .populate('itineraries')

      user.itineraries.sort((a, b) => b.title - a.title);

      return User.findById(_id);
    },
    activities: async () => {
      return await Activity.find();
    },
  },
  Mutation: {
    addItinerary: async (parent, args, context) => {
      const itinerary = await Itinerary.create(args);
      if (context.user) {
        const user = await User.findById(context.user._id)
        user.itineraries.push(itinerary)
        await user.save()
        return itinerary;
      }

      throw new AuthenticationError('Not logged in');
    }, 
    updateItinerary: async (parent, args) => {
        return await Itinerary.findByIdAndUpdate(Itinerary._id, args, { new: true });
    },
    removeItinerary: async (parent, { _id }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedItineraries: { _id } } },
          { new: true }
        );

        return updatedUser;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
    
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
    
      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }
    
      const correctPw = await user.isCorrectPassword(password);
    
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }
    
      const token = signToken(user);
      return { token, user };
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },

    addActivity: async (parent, { itineraryId, name, date, location, timeFrom, timeTo, notes}) => {
      // Create Activity first
      const activity = await Activity.create({ itineraryId, name, date, location, timeFrom, timeTo, notes });
      
      // Find the Itinerary ID
      const itinerary = await Itinerary.findById(activity.itineraryId)
      
      // Push activity to itinerary
      itinerary.activities.push(activity)
      await itinerary.save()
    },
    
    updateActivity: async (parent, { _id, name, location, timeFrom, timeTo, notes, date, rating }) => {
      const newName = name
      const newLocation = location
      const newTimeFrom = timeFrom
      const newTimeTo = timeTo
      const newNotes = notes
      const newDate = date
      const newRating = rating
      return await Activity.findByIdAndUpdate(_id, {name: newName, location: newLocation, timeFrom: newTimeFrom, timeTo: newTimeTo, date: newDate, notes: newNotes, rating: newRating}, { new: true });
    },

    removeActivity: async (parent, { _id }, context) => {
      if (context.user) {
        const updatedItinerary = await Itinerary.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedActivities: { _id } } },
          { new: true }
        );

        return updatedItinerary;
      }

      throw new AuthenticationError('You need to be logged in!');
    },


    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }

  }
};

module.exports = resolvers;