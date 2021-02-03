import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import ItineraryList from '../components/ItineraryList';
import { Image, List } from 'semantic-ui-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Label } from 'semantic-ui-react'
import '../components/Summary/index.css'

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
    <div>
      <div>
        <List.Item className="title-box">
          <List.Content className='content-box-profile'>
            <List.Header className='header-box'>
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
          <List.Content className='content-box'>
            <List.Header className='header-box h4'>
            Your Trips</List.Header>
            <ItineraryList itineraries={user.itineraries} />
          </List.Content>
        </List.Item>
        <List.Item className="title-box">
        </List.Item>
      </div>
      <div className="card-box">
        <div className="button col-12 mb-3 col-lg-8">
        </div>
      </div>
    </div>
  );
};

export default Profile;