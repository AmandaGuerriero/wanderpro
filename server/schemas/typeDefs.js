const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Itinerary {
  _id: String
  title: String
  description: String
  dateBegin: String
  dateEnd: String
}

type Day {
  dayId: ID!
  title: String
  date: String
}

type Activity {
  _id: ID!
  location: String
  timeFrom: String
  timeTo: String
  notes: String
}

type Query {
  itineraries(title: String): [Itinerary]
  itineraryById(_id: ID!): Itinerary
  days(title: String): [Day]
  dayById(_id: ID!): Day
  activities(title: String): [Activity]
  activityById(_id: ID!): Activity
}

type Mutation {
  addItinerary(title: String!, description: String, dateBegin: String, dateEnd: String): Itinerary
  updateItinerary(_id: ID!, title: String, description: String, dateBegin: String, dateEnd: String): Itinerary
}

`;

module.exports = typeDefs;