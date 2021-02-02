import React from 'react';
import Map from '../Map';
import './ActivityList.css';
import { Link } from 'react-router-dom';
import CustomizedRatings from'../Rating'

const ActivityList = ({ activities }) => {
  console.log(activities)
  const itineraryId = localStorage.getItem("itineraryId");
  return (
    <div className="card mb-3">
      <div className="card-header">
        <span className="text-light">Activities</span>
      </div>
      <div className="card-body">
        {activities &&
          activities.map(activity => (
            <div key={activity._id} className="card-box">
              <div className="timeline">
                <div className="container-timeline right">
                  <div className="content">
                    <h5>{activity.timeFrom} to {activity.timeTo}</h5>
                    <p>{activity.location}</p>
                    <h5>Get directions for your trip:</h5>
                    <div className="App">
                      <Map id={activity._id} myLocation={activity.location} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-box-note">
                <p>Your Notes: {activity.notes}</p>
                <CustomizedRatings />
              </div>
              <Link to={`/profile`}>
                <button
                className='button'
                >Go back to profile</button></Link>
            </div> 
          ))}
          
      </div>
    </div>
  );
};

export default ActivityList;