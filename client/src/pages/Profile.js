import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import ItineraryList from '../components/ItineraryList';
import { Link } from 'react-router-dom';
import '../index.css';

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
  <section className="profile-two">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3">
        <aside id="leftsidebar" class="sidebar">     
        <ul className="list">
          <div className="user-info">
            <div className="image img-responsive img-circle" alt="profile">
              <img src={require('../assets/images/profile.png')} />
            </div>
            <div className="flex-row mb-3">
              <div className="detail">
               <h4>{user.username}'s profile</h4>
              </div>
            </div>
            <div>
              <small>Email: {user.email}</small>
            </div>
            <br></br>
            <small>Bio: I have been to 16 contries: Iceland, 
              Paris, Dubai, Japan, Thailand, and more.
          
              Check out my itineraries. </small>
          </div>
        </ul>
      </aside>
    </div>
    </div>
    <div className="row">
    <div class="col-lg-6">
			 <div class="card-body">
       <ItineraryList itineraries={user.itineraries} title={`${user.itineraries.title}'s thoughts...`} />
      </div>
    </div>
  </div>
  </div>
  </section>
</div>
  );
};

export default Profile;
