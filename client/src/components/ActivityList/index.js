import React from 'react';

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
                <p>{activity.name} {'// '} {activity.location}</p>
              </div>
            ))}
            
        </div>
    </div>
  );
};

export default ActivityList;