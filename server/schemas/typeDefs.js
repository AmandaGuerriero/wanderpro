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
  latitude: Int
  longitude: Int
  activities: [Activity]
}

type Activity {
  _id: ID!
  name: String
  date: String
  location: String!
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
  activities: [Activity]
  activityById(_id: ID!): Activity
  users: [User]
  userById(_id: ID!): User
}

type Mutation {
  login(email: String!, password: String!): Auth
  addItinerary(title: String!, description: String, location: String, dateBegin: String, dateEnd: String, latitude: Int, longitude: Int): Itinerary
  updateItinerary(_id: ID!, title: String, description: String, location: String, dateBegin: String, dateEnd: String): Itinerary
  addUser(username: String!, email: String!, password: String!): Auth
  updateUser(_id: ID!, username: String): User
  addActivity(itineraryId:ID!,location: String!, timeFrom: String, timeTo: String, notes:String, name: String): Itinerary
  addActivityPublic(name: String, location: String!): Activity
  updateActivity(_id: ID!, location: String): Activity
}
`;

module.exports = typeDefs;