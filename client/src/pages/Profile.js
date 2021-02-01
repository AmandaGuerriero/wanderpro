import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import ItineraryList from '../components/ItineraryList';


const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam }
  });

  const user = data?.me || data?.user || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this page. Use the navigation links above to sign up or log in!
      </h4>
    );
  }

  return (
    <div>
      <div className="flex-row mb-3">
        <h2 className="bg-dark text-secondary p-3 display-inline-block">
          Viewing {user.username}'s profile.
        </h2>
      </div>
      <div>
        <p>These are the {user.email}</p>
      </div>

      <div className="col-12 mb-3 col-lg-8">
          <ItineraryList itineraries={user.itineraries} title={`${user.itineraries.title}'s thoughts...`} />
        </div>
    </div>
  );
};

export default Profile;