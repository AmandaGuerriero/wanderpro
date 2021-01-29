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