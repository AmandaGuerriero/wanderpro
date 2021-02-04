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
import { faComment } from '@fortawesome/free-solid-svg-icons';

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
    <div className="summary-outter">

    <div className="summary-container">
      <List celled className='itcontainer flex-row space-around'>
        <List.Item className="title-box summary-item">
          <div className="summary-icon">
            <FontAwesomeIcon icon={faGlobeAmericas} />
          </div>
          <List.Content className='content-box'>
            <List.Header className='header-box'>Title</List.Header>
            {itinerary.title}
          </List.Content>
        </List.Item>

        <List.Item className="title-box summary-item">
          <div className="summary-icon">
            <FontAwesomeIcon icon={faMapMarker} />
          </div>
          <List.Content className='content-box'>
            <List.Header className='header-box'>Location</List.Header>
            {itinerary.location}
          </List.Content>
        </List.Item>
        <List.Item className="title-box summary-item">
          <div className="summary-icon">
            <FontAwesomeIcon icon={faCalendar} />
          </div>
          <i className="fas fa-map-marker-alt"></i>
          <List.Content className='content-box'>
            <List.Header className='header-box'><b>Date</b></List.Header>
            {itinerary.dateBegin}
             - {itinerary.dateEnd}
          </List.Content>
        </List.Item>
        <List.Item className="title-box summary-item">
          <div className="summary-icon">
            <FontAwesomeIcon icon={faComment} />
          </div>
          <List.Content className='content-box'>
            <List.Header className='header-box'>Descripton</List.Header>
            {itinerary.location}
          </List.Content>
        </List.Item>
      </List>
    </div>
    <div className="map-item">
          <ActivityList activities={itinerary.activities} />
    </div>
    </div>

  );
};

export default Summary;