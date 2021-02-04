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

    <div className="summary-outter">

    <div className="summary-container">
      <List celled className='itcontainer flex-row space-around'>
        <List.Item className="title-box summary-item">
          <div className="summary-icon">
            <FontAwesomeIcon icon={faGlobeAmericas} />
          </div>
    <div>
      <List celled className='itcontainer'>
        <List.Item className="title-box">


        <List.Item className="title-box summary-item">
          <div className="summary-icon">
            <FontAwesomeIcon icon={faMapMarker} />
          </div>

        <List.Item className="title-box">

        <List.Item className="title-box summary-item">
          <div className="summary-icon">
            <FontAwesomeIcon icon={faCalendar} />
          </div>
          <i className="fas fa-map-marker-alt"></i>

        <List.Item className="title-box">

          <i class="fas fa-map-marker-alt"></i>

        <List.Item className="title-box summary-item">
          <div className="summary-icon">
            <FontAwesomeIcon icon={faComment} />
          </div>

        <List.Item className="title-box">



    </div>
    <div className="map-item">
          <ActivityList activities={itinerary.activities} />
    </div>


  );
};

export default Summary;