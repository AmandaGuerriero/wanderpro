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
type Auth {
  token: ID!
  user: User
}

type Query {
  itineraries(title: String): [Itinerary]
  itineraryById(_id: ID!): Itinerary
  days(title: String): [Day]
  dayById(_id: ID!): Day
  activities(title: String): [Activity]
  activityById(_id: ID!): Activity

  users: [User]
  userById(_id: ID!): User

}

type Mutation {
  addItinerary(title: String!, description: String, dateBegin: String, dateEnd: String): Itinerary
  updateItinerary(_id: ID!, title: String, description: String, dateBegin: String, dateEnd: String): Itinerary
  login(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password: String!): Auth
  updateUser(_id: ID!, username: String): User
}

`;

module.exports = typeDefs;