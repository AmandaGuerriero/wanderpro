import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ITINERARY_BY_ID } from '../../utils/queries';
import ActivityList from '../ActivityList';


// import mapboxgl from 'mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';
// import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
// import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'

// mapboxgl.accessToken = 'pk.eyJ1Ijoiem91c2hpbHUzMSIsImEiOiJja2tnMGxiZmEwOW5lMnVsYTN3OTR6eXg5In0.EExs7dyM_eoTAEdLXzUmVw';


const Summary = props => {

  const { id: itineraryId } = useParams();
  const { loading, data } = useQuery(QUERY_ITINERARY_BY_ID, {
    variables: { _id: itineraryId }
  });
  const itinerary = data?.itineraryById || {};
  if (loading) {
    return <div>Loading...</div>;
  }
  
  return (
    
    <div>
        <p>Your Trip: {itinerary.title}</p>
        <p>Your Itinerary: {itinerary.itineraryId}</p>
        <p>First day of your trip: {itinerary.dateBegin}</p>
        <p>Last day of your trip: {itinerary.dateEnd}</p>
        <p>Location: {itinerary.location}</p>
        {/* <p>Time starts: {this.props.state.timeFrom}</p>
        <p>Time ends: {this.props.state.timeTo}</p>
        <p>Notes: {this.props.state.notes}</p> */}
        <ActivityList activities={itinerary.activities} />

         {/* <div ref={el => (this.mapWrapper = el)} className="mapWrapper" /> */}
    </div>
  );
};
 

export default Summary;