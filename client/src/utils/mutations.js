import gql from 'graphql-tag';

// Mutation to Log a user in
export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

// Mutation to add a user
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

// Mutation to add an itinerary
export const ADD_ITINERARY = gql`
  mutation addItinerary($title: String!, $description: String, $location: String, $dateBegin: String, $dateEnd: String, $latitude: Float, $longitude: Float) {
    addItinerary(title: $title, description: $description, location: $location, dateBegin: $dateBegin, dateEnd: $dateEnd, latitude: $latitude, longitude: $longitude) {
      _id,
      title,
      description,
      location,
      dateBegin,
      dateEnd,
      latitude,
      longitude
    }
  }
`;

// Mutation to update an itinerary
export const UDPATE_ITINERARY = gql`
mutation updateItinerary ($_id: ID!, $title: String, $description: String, $location: String, $dateBegin: String, $dateEnd: String) {
  updateItinerary (_id: $_id, title: $title, description: $description, location: $location, dateBegin: $dateBegin, dateEnd: $dateEnd ) {
    _id
    title
    description
    dateEnd
    dateBegin
    location
  }
}
`;

// Mutation to add an activity
export const ADD_ACTIVITY = gql`
  mutation addActivity($itineraryId: String, $name: String, $location: String!, $timeFrom: String, $timeTo: String, $notes: String, $date: String) {
    addActivity(itineraryId: $itineraryId, location: $location, timeFrom: $timeFrom, timeTo: $timeTo, notes: $notes, name: $name, date: $date ) {
      _id
      title
      activities {
        _id
        name
        location
        notes
      }
    }
  }
`;

// Mutation to Update an activity
export const UPDATE_ACTIVITY = gql`
mutation updateActivity($_id: ID!, $name: String, $location: String, $timeFrom: String, $timeTo: String, $date: String, $notes: String, $rating: Int) {
  updateActivity(_id: $_id, name: $name, location: $location, timeFrom: $timeFrom, timeTo: $timeTo, date: $date, notes: $notes, rating: $rating) {
    _id
    timeTo
    timeFrom
    date
    notes
    rating
    itineraryId
  }
}
`;

