import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarked } from '@fortawesome/free-solid-svg-icons';
import '../Summary/index.css';
import { Grid, Segment} from 'semantic-ui-react'
const ItineraryList = ({ itineraries, title, description, activityCount }) => {
  if (!itineraries.length) {
    return <h3>No Itineraries Created Yet</h3>;
  }
  return (

    <div>
      <Grid stackable columns={2}>
      <Grid.Column>
      <Segment>
      {itineraries &&
        itineraries.map(itinerary => (
          <div key={itinerary._id} className="card mb-3">
            <div className="card-header">
              <FontAwesomeIcon icon={faMapMarked} />
              <div className="title-text">
                {itinerary.title}
              </div>
            </div>
            <div className="card-body">
              <div className="title-text">
                Date: {itinerary.dateBegin} - {itinerary.dateEnd}
              </div>
              <div className="title-text"> Location: {itinerary.location}
              </div>
              <div className="title-text">
                Description: {itinerary.description}
              </div>
              <Link to={`/itinerary/${itinerary._id}`}>
                <div className='ui button'>View full Itinerary</div>
              </Link>
            </div>
          </div>
        ))}
        </Segment>
      </Grid.Column>
      </Grid>
     
    </div>
  );
};

export default ItineraryList;