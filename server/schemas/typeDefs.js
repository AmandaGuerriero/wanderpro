const { gql } = require('apollo-server-express');

const typeDefs = gql`
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
}

type Mutation {
  addItinerary(title: String!, description: String, dateBegin: String, dateEnd: String): Itinerary
  updateItinerary(_id: ID!, title: String, description: String, dateBegin: String, dateEnd: String): Itinerary
}

`;

module.exports = typeDefs;