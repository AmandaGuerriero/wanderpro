import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ITINERARY_BY_ID } from '../../utils/queries';
import ActivityList from '../ActivityList';
import './index.css'
import { Image, List } from 'semantic-ui-react'
import { FaMapMarkerAlt} from '@fortawesome/free-brands-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
        <List.Item>
          <Image avatar src='https://react.semantic-ui.com/images/avatar/small/helen.jpg' />
          <List.Content>
            <List.Header>Title</List.Header>
            {itinerary.title}
      </List.Content>
        </List.Item>
        <List.Item>
        {/* <FontAwesomeIcon icon={faMapMarkerAlt}/> */}
        <i class="fas fa-map-marker-alt"></i>
          <List.Content>
            <List.Header>Date</List.Header>
            {itinerary.dateBegin}
            - {itinerary.dateEnd}
      </List.Content>
        </List.Item>
        <List.Item>
          <Image avatar src='https://react.semantic-ui.com/images/avatar/small/daniel.jpg' />
          <List.Content>
            <List.Header>Descripton</List.Header>
            {itinerary.location}
      </List.Content>
        </List.Item>
        <ActivityList activities={itinerary.activities} />
      </List>
      
    </div>

  );
};

export default Summary;