import React from 'react';
import Map from '../Map';

const ActivityList = ({ activities}) => {
  return (
    <div className="card mb-3">
        <div className="card-header">
            <span className="text-light">Activities</span>
        </div>
        <div className="card-body">
            {activities &&
            activities.map(activity => (
              <div key={activity._id} className="card mb-3">
                <p>{activity.name} {''} {activity.location}</p>
                <p>Get directions for your trip:</p>
        <div className="App">
        <Map component={Map} />
        <p>Your Notes: {activity.notes}</p>
        </div>
              </div>
            ))}
            
        </div>
    </div>
  );
};

export default ActivityList;