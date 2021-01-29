import gql from 'graphql-tag';

export const QUERY_USER = gql`
{
  user {
    username
    email
    itineraries {
      _id
      title
    }
  }
}
`;

export const QUERY_ITINERARIES = gql`
{
  itineraries {
    _id
    title
    description
    location
    dateBegin
    dateEnd
  }
}
`;