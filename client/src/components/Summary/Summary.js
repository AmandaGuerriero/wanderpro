import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Summary.css';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ITINERARY_BY_ID } from '../../utils/queries';
import ActivityList from '../ActivityList';

const Summary = props => {
  const { id: itineraryId } = useParams();
  const { loading, data } = useQuery(QUERY_ITINERARY_BY_ID, {
    variables: { _id: itineraryId }
  });
  console.log(data)
  const itinerary = data?.itinerary || {};
  console.log(data)
  console.log(itinerary.description)
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="card mb-3">
        <p className="card-header">
          <span style={{ fontWeight: 700 }} className="text-light">
            {itinerary.title}
            {console.log(itinerary.description)}
          </span>{' '}
        </p>
        <div className="card-body">
          <p>{itinerary.description}</p>
        </div>
      </div>
      {itinerary.activites !== null ?  <ActivityList activities={itinerary.activities} /> : <p>No Activities Found</p>}
     
    </div>
  );
};



// // Import Queries
// import { QUERY_ITINERARY_BY_ID } from '../../utils/queries';
// import { useQuery } from '@apollo/react-hooks';

// // Import Mapbox
// import mapboxgl from 'mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';
// import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
// import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'
// mapboxgl.accessToken = `${process.env.MAPBOX_PUBLIC_KEY}`



// const SingleItinerary = props => {
//   const { _id: _id } = useParams();
//   const { loading, data } = useQuery(QUERY_ITINERARY_BY_ID, {
//     variables: { _id: _id }
//   });

//   const itinerary = data?.itinerary || {};

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <div>
//         <p>
//             {itinerary.title} at {itinerary.location}
//         </p>
//           <p>
//             {itinerary.description}
//           </p>
//       </div>
//     </div>
//   );
// };

// class Summary extends 
// React.Component{

//   componentDidMount() {

//     // Creates new map instance
//     const map = new mapboxgl.Map({
//       container: this.mapWrapper,
//       style: 'mapbox://styles/mapbox/streets-v10',
//       center: [-73.985664, 40.748514],
//       zoom: 12
//     });

//     // Creates new directions control instance
//     const directions = new MapboxDirections({
//       accessToken: mapboxgl.accessToken,
//       unit: 'metric',
//       profile: 'mapbox/driving',
//     });

//     // Integrates directions control with map
//     map.addControl(directions, 'top-left');
//     directions.setDestination(this.props.state.location);
//     // Add geolocate control to the map.
// map.addControl(
//   new mapboxgl.GeolocateControl({
//   positionOptions: {
//   enableHighAccuracy: true
//   },
//   trackUserLocation: true
//   })
//   );
//   }

//   render() {
//     return (
//     <div>
//       <p>Your Trip: {this.props.state.title}</p>
//       {/* <p>Where: {this.props.location}</p> */}
//       <p>Your Itinerary: {this.props.state.tineraryId}</p>
//       <p>First day of your trip: {this.props.state.dateBegin}</p>
//       <p>Last day of your trip: {this.props.state.dateEnd}</p>
//       <p>Location: {this.props.state.location}</p>
//       <p>Time starts: {this.props.state.timeFrom}</p>
//       <p>Time ends: {this.props.state.timeTo}</p>
//       <p>Notes: {this.props.state.notes}</p>
//       <p>Get directions for your trip:</p>
//       <div ref={el => (this.mapWrapper = el)} className="mapWrapper" />
//     // </div>
//     );
//   }
// }

export default Summary;
