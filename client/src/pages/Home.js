import React from "react";
import { QUERY_ACTIVITIES } from '../utils/queries';
import { useQuery } from '@apollo/react-hooks';
import Auth from "../utils/auth";
import { Link } from "react-router-dom";
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => {
  const { loading, data } = useQuery(QUERY_ACTIVITIES);
  const activities = data?.activities || [];

  return (
      <div>
        {/* <h1>HOME</h1> */}
        <div className="homepage-jumbo">
        {
        Auth.loggedIn() ?
        <Link to="/profile">
        <button>
        Go to Profile
        </button>
        </Link>
          :
          <button href="/signup" className="homepage-signup">
        <FontAwesomeIcon icon={faUserPlus}/> Create an account 
        </button>
       }
        </div>
        {activities && 
          activities.map(activity => (
            <div key={activity._id} className="card-box">
                  <div className="timeline">
                    <div className="container-timeline right">
                      <div className="content">
                        <h5>{activity.name}</h5>
                        <p>{activity.location}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                  </div>
          </div>
      ))}
      
    </div>
  )
};

export default Home;

