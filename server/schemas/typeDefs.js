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

type Auth {
  token: ID!
  user: User
}

type Query {
  itineraries(title: String): [Itinerary]
  itineraryById(_id: ID!): Itinerary
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