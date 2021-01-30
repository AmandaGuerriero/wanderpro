const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
  _id: ID
  username: String
  email: String
  itineraries: [Itinerary]
}

type Itinerary {
  _id: String
  title: String
  description: String
  location: String
  dateBegin: String
  dateEnd: String
  days: [Day]
}

type Day {

  _id: ID!
  title: String!
  date: String
  activities: [Activity]
}

type Activity {

  _id: ID!
  location: String
  timeFrom: String
  timeTo: String
  notes: String
}


type Auth {
  token: ID!
  user: User
}

type Query {
  itineraries(title: String): [Itinerary]
  itineraryById(_id: ID!): Itinerary
  days(title: String): [Day]
  dayById(_id: ID!): Day
  activities: [Activity]
  activityById(_id: ID!): Activity
  users: [User]
  userById(_id: ID!): User
}

type Mutation {
  login(email: String!, password: String!): Auth
  addItinerary(title: String!, description: String, location: String, dateBegin: String, dateEnd: String): Itinerary
  updateItinerary(_id: ID!, title: String, description: String, location: String, dateBegin: String, dateEnd: String): Itinerary
  addUser(username: String!, email: String!, password: String!): Auth
  updateUser(_id: ID!, username: String): User
  addDay(itineraryId: ID!, title: String!, date: String): Itinerary
  updateDay(_id: ID!, title: String, date: String): Day
  addActivity(dayId:ID!,location: String!, timeFrom: String, timeTo: String, notes:String): Day
  updateActivity(_id: ID!, location: String): Activity
}
`;

module.exports = typeDefs;