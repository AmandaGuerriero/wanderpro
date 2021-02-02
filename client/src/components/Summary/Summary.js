import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ITINERARY_BY_ID } from '../../utils/queries';
import ActivityList from '../ActivityList';
import './index.css'
// import { LogoNodejs } from 'react-ionicons'


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
<section>
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3">
          <aside id="leftsidebar" className="sidebar">
            <ul className="list">
              <div className="user-info">
                <div className="flex-row mb-3">
                  <div className="detail">
                  <ion-icon name="today-outline"></ion-icon>
                    <p>{itinerary.title}</p>
                  </div>
                </div>
                <div>
                  {/* <h5>Your Itinerary: {itinerary.itineraryId}</h5> */}
                  <div className="detail">
                  <ion-icon name="today-outline"></ion-icon>
                  <p>{itinerary.dateBegin}</p>
                  </div>
                  <div className="detail">
                  <ion-icon name="today-outline"></ion-icon>
                  <p>{itinerary.dateEnd}</p>
                  </div>
                  <div className="detail">
                  <ion-icon name="today-outline"></ion-icon>
                  <p>{itinerary.location}</p>
                  </div>
                </div>
                <br></br>
              </div>
            </ul>
          </aside>
        </div>
      </div>
    </div>
  <ActivityList activities={itinerary.activities} />
</section>
  );
};


export default Summary;