import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarked } from '@fortawesome/free-solid-svg-icons';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
// import '../Summary/index.css';
import { Grid, Segment } from 'semantic-ui-react'
import View from 'react-flexbox'
import { Image, List } from 'semantic-ui-react'
import './index.css';

const ItineraryList = ({ itineraries, title, description, activityCount }) => {
 if (!itineraries.length) {
  return <h3>No Itineraries Created Yet</h3>;
 }
 return (
  // Try setting `flexDirection` to `column`.
  // <View style={{ flex: 1, flexDirection: 'row',flexWrap:'wrap' }} className="test1">
   <div className="profile-outter-container flex-row">
    {itineraries &&
     itineraries.map(itinerary => (
      <List.Content className="itinerary-item">
       <div key={itinerary._id} className="profile-card-container">
         <div className="profile-card-header">
        <h2>
            {itinerary.title}
         </h2>
         </div>
         <div className="profile-card-body">
            <div>
            <div>
              Date: {itinerary.dateBegin} - {itinerary.dateEnd}
            </div>
            <div> 
              Location: {itinerary.location}
            </div>
            <div>
              Description: {itinerary.description}
            </div>
            <Link to={`/itinerary/${itinerary._id}`}>
            <div className='ui button'>
              <FontAwesomeIcon icon={faAngleDoubleRight} />
              View full Itinerary</div>
            </Link>
            </div>
         </div>
       </div>
      </List.Content>
     ))}
   </div>
 );
};
export default ItineraryList;