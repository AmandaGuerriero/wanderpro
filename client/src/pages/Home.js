import React from "react";
import { QUERY_ACTIVITIES } from '../utils/queries';
import { useQuery } from '@apollo/react-hooks';
import Auth from "../utils/auth";
import { Link } from "react-router-dom";

const Home = () => {
  const { loading, data } = useQuery(QUERY_ACTIVITIES);
  const activities = data?.activities || [];

  return (
      <div>
        <h1>HOME</h1>
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
      {
      Auth.loggedIn() ?
      <Link to="/profile">
      <button>
      Go to Profile
      </button>
      </Link>
        :
        <button href="/signup">
      Create an account
      </button>
    }
    </div>
  )
};

export default Home;

