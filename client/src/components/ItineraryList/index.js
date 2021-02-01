import React from 'react';
import { Link } from 'react-router-dom';

const ItineraryList = ({ itineraries, title, description, activityCount }) => {
  if (!itineraries.length) {
    return <h3>No Itineraries Created Yet</h3>;
  }

  return (
    <div>
      {itineraries &&
        itineraries.map(itinerary => (
          <div key={itinerary._id} className="card mb-3">
            <p className="card-header">
                {itinerary.title}
            </p>
            <div className="card-body">
                
                    <p>Description: {itinerary.description}</p>
                    <p className="mb-0">
                    You have {itinerary.activityCount} activities in this itinerary!
                    </p>
                    <Link to={`/itinerary/${itinerary._id}`}><button>View full Itinerary</button></Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ItineraryList;