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

// Mutation to add an activity
export const ADD_ACTIVITY = gql`
mutation removeActivity($_id: ID!, $itineraryId: String) {
  removeActivity(_id: $_id, itineraryId: $itineraryId) {
    _id
    title
    description
    location
    dateBegin
    dateEnd
    latitude
    longitude
    activityCount
    activities {
      _id
      itineraryId
      name
      date
      location
      timeFrom
      timeTo
      notes
    }
  }
}
`;


export const REMOVE_ITINERARY = gql`
mutation removeItinerary($_id: ID! ) {
  removeItinerary(_id: $_id) {
     
    username
    email
      itineraries{
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
}
`;

export const REMOVE_ACTIVITY = gql`
mutation removeActivity($_id: ID! ) {
  removeActivity(_id: $_id) {
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
