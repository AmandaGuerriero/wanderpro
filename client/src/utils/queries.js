import gql from 'graphql-tag';

// Query for by the logged in user
export const QUERY_ME = gql`
query{
  me {
    _id
    username
    email
    itineraries {
      _id
      title
      description
      location
      dateBegin
      dateEnd
    }
  }
}
`;

// Query user by a single ID
export const QUERY_USER = gql`
query ($_id: ID!) {
  userById(_id: $_id) {
    _id
    username
    email
    itineraries {
      _id
      title
      description
      location
      dateEnd
      dateBegin
    }
  }
}
`;

// Query all itineraries
export const QUERY_ITINERARIES = gql`
query {
  itineraries {
    _id
    title
    description
    location
    dateBegin
    dateEnd
    activityCount
    activities {
      _id
      location
      name
      notes
      date
      timeTo
      timeFrom
    }
  }
}
`;

// Query for a single itinerary by ID
export const QUERY_ITINERARY_BY_ID = gql`
query ($_id: ID!) {
  itineraryById (_id: $_id){
    title
    description
    location
    dateBegin
    dateBegin
    activityCount
    activities {
      _id
      itineraryId
      name
      date
      location
      notes
      timeTo
      timeFrom
    }
  }
}
`;

// Query for all activities
export const QUERY_ACTIVITIES = gql`
query {
  activities {
    _id
    location
    name
    notes
    date
    timeTo
    timeFrom
    itineraryId
  }
}
`;

// Query an activity by ID
export const QUERY_ACTIVITY_BY_ID = gql`
query activityById ($_id: ID!) {
  activityById(_id: $_id) {
    _id
    itineraryId
    name
    timeTo
    timeFrom
    location
    rating
    date
  }
}
`;
