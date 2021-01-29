
const { Itinerary, User, Activity, Day } = require('../models');
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
    addItinerary: async (parent, args) => {
      const itinerary = await Itinerary.create(args);
      return itinerary;
    }, 
    updateItinerary: async (parent, { _id, title, description }) => {
      // const itinerary = Itinerary.findById(_id);  
      if (title !== undefined) {
        let newTitle = title
      }
      if (description !== undefined) {
        let newDescription = description
      }
      console.log(newDescription)
      return Itinerary.findByIdAndUpdate(_id, {title: newTitle, description: newDescription}, { new: true });
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

    addDay: async (parent, args) => {
      const day = await Day.create(args);

      return day;
    },
    updateDay: async (parent, { _id, title }) => {
      const newTitle = title
      return await Day.findByIdAndUpdate(_id, {title: newTitle}, { new: true });
    },
    addActivity: async (parent, args) => {
      const activity = await Activity.create(args);

      return Activity;
    },
    updateActivity: async (parent, { _id, location }) => {
      const newLocation = location
      return await Activity.findByIdAndUpdate(_id, {location: newLocation}, { new: true });
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