import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ITINERARY_BY_ID } from '../../utils/queries';
import ActivityList from '../ActivityList';
import './index.css'
import { Image, List } from 'semantic-ui-react'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';

const Summary = props => {

  const { id: itineraryId } = useParams();
  const { loading, data } = useQuery(QUERY_ITINERARY_BY_ID, {
    variables: { _id: itineraryId }
  });
  const itinerary = data?.itineraryById || {};
  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(itinerary)
  return (
    <div>
      <List celled className='itcontainer'>
        <List.Item className="title-box">
          <List.Content className='content-box'>
            <List.Header className='header-box'>
              <FontAwesomeIcon icon={faGlobeAmericas} />
              Your Trip</List.Header>
            {itinerary.title}
          </List.Content>
        </List.Item>
        <List.Item className="title-box">
          <List.Content className='content-box'>
            <List.Header className='header-box'>
              <FontAwesomeIcon icon={faMapMarker} />
              Location</List.Header>
            {itinerary.location}
          </List.Content>
        </List.Item>
        <List.Item className="title-box">

          <i class="fas fa-map-marker-alt"></i>
          <List.Content className='content-box'>
            <List.Header className='header-box'>
              <FontAwesomeIcon icon={faCalendar} />
              Date</List.Header>
            {itinerary.dateBegin}
            - {itinerary.dateEnd}
          </List.Content>
        </List.Item>
        <List.Item className="title-box">

          <List.Content className='content-box'>
            <List.Header className='header-box'>
              <FontAwesomeIcon icon={faClipboard} />
              Your Notes</List.Header>
            {itinerary.location}
          </List.Content>
        </List.Item>
        <ActivityList activities={itinerary.activities} />
      </List>
    </div>
  );
};

export default Summary;