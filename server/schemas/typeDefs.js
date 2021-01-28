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

type Query {
  itineraries(title: String): [Itinerary]
  itineraryById(_id: ID!): Itinerary
  user: User
}

type Mutation {
  addItinerary(title: String!, description: String, dateBegin: String, dateEnd: String): Itinerary
  updateItinerary(_id: ID!, title: String, description: String, dateBegin: String, dateEnd: String): Itinerary
  addUser(username: String!, email: String!, password: String!): User
  updateUser(_id: ID!, username: String): User
}

`;

module.exports = typeDefs;