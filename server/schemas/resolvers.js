
const { Itinerary, User, Activity } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');


const resolvers = {
  Query: {
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
      const user = await User.findById(_id).populate({
        path: 'itineraries',
        populate: 'title'
      });

      user.itineraries.sort((a, b) => b.title - a.title);

      return User.findById(_id);
    },
    days: async () => {
      return await Day.find();
    },
    activities: async () => {
      return await Activity.find();
    },
  },
  Mutation: {
    addItinerary: async (parent, args, context) => {
      console.log(context);
      if (context.user) {
        const itinerary = new Itinerary(args);

        await User.findByIdAndUpdate(context.user._id, { $push: { itineraries: itinerary } });

        return itinerary;
      }

      throw new AuthenticationError('Not logged in');
    }, 
    updateItinerary: async (parent, args) => {
        return await Itinerary.findByIdAndUpdate(Itinerary._id, args, { new: true });
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

    addActivity: async (parent, { itineraryId, name, date, location, timeFrom, timeTo, notes}, context) => {
      if (context.user) {
        const updatedItinerary = await Itinerary.findOneAndUpdate(
          { _id: itineraryId },
          { $push: { activities: { name, date, location, timeFrom, timeTo, notes } } },
          { new: true}
        );
    
        return updatedItinerary;
      }
    
      throw new AuthenticationError('You need to be logged in!');
    },
    addActivityPublic: async (parent, args) => {
      const newActivity = await Activity.create(args);
      return newActivity;
    },
    
    updateActivity: async (parent, { _id, name }) => {
      const newName = name
      return await Activity.findByIdAndUpdate(_id, {location: newName}, { new: true });
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