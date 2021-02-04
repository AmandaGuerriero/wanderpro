import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import ItineraryList from '../components/ItineraryList';
import { Image, List } from 'semantic-ui-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Segment, Label } from 'semantic-ui-react';
import '../components/Summary/index.css'
import View from 'react-flexbox'
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
    You must be logged in to see this page
   </h4>
  );
 }
 return (
  <div className="outtermost">
   <List.Content className='content-box-profile profile-info'>
    <List.Header className=' col-sm-12'>
     <Label as='a' color='blue' image>
      <img src=
       'https://react.semantic-ui.com/images/avatar/small/veronika.jpg'
      />
       {user.username}
      <Label.Detail className='small'>
       <FontAwesomeIcon icon={faEnvelope} />
        {user.email} </Label.Detail>
     </Label>
    </List.Header>
   </List.Content>
   <div className="trips-header">
      <h2 className="title-text">Your Trips</h2>
   </div>
   <div className="itinerary-list-container">
     <ItineraryList itineraries={user.itineraries} />
   </div>
  </div>
 );
};

export default Profile;