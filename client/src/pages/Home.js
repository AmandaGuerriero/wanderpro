import React from "react";
import { QUERY_ACTIVITIES } from '../utils/queries';
import { useQuery } from '@apollo/react-hooks';
import Auth from "../utils/auth";
import { Link } from "react-router-dom";
import { faUserPlus, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => {
  const { loading, data } = useQuery(QUERY_ACTIVITIES);
  const activities = data?.activities || [];

  return (
      <div>
        <div className="homepage-jumbo">
        {
        Auth.loggedIn() ?
        <Link to="/profile">
        <button className="homePage-profile">
        <FontAwesomeIcon icon={faUserCircle}/> Go to Profile
        </button>
        </Link>
          :
          <button href="/signup" className="homepage-signup">
        <FontAwesomeIcon icon={faUserPlus}/> Create an account 
        </button>
       }
        </div>
        <div className="activity-section-header">
          <h1 >Activities You Can Try!</h1>
        </div>
        <div className="activity-container flex-row space-between">
        {activities && 
          activities.map(activity => (
            <div key={activity._id} className="card-box flex-row">
              <div className="home-activities-container">
                <div className="home-card-header"> 
                  <h5 >{activity.name}</h5>
                </div>
                <div className="home-card-body"> 
                  <p>{activity.location}</p>
                </div>
              </div>
            </div>
      ))}
        </div>
    </div>
  )
};

export default Home;

