import gql from 'graphql-tag';

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

export const ADD_ITINERARY = gql`
  mutation addItinerary($title: String!, $description: String, $location: String, $dateBegin: String, $dateEnd: String) {
    addItinerary(title: $title, description: $description, location: $location, dateBegin: $dateBegin, dateEnd: $dateEnd) {
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
