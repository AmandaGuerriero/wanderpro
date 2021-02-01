import React from 'react';
import { Link } from 'react-router-dom';

const ItineraryList = ({ itineraries, title, description }) => {
  if (!itineraries.length) {
    return <h3>No Itinerary Yet</h3>;
  }

  return (
    <div>
      {itineraries &&
        itineraries.map(itinerary => (
          <div key={itinerary._id} className="card mb-3">
            <p className="card-header">
                <Link
                    to={`/itinerary/${itinerary._id}`}
                    style={{ fontWeight: 700 }}
                    className="text-light"
                >
                    {itinerary._id}
                </Link>{' '}
                {itinerary.title} has {itinerary.description}
            </p>
            <div className="card-body">
                <Link to={`/itinerary/${itinerary._id}`}>
                    <p>{itinerary.description}</p>
                    <p className="mb-0">
                    Click to{' '} 'see' : 'start' the discussion!
                    </p>
                </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ItineraryList;