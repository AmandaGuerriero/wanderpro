import React from 'react';
import Map from '../Map';

import './Map.css';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css';
mapboxgl.accessToken = 'pk.eyJ1Ijoiem91c2hpbHUzMSIsImEiOiJja2tnMGxiZmEwOW5lMnVsYTN3OTR6eXg5In0.EExs7dyM_eoTAEdLXzUmVw';

class ActivityList extends Component { 
  Constructor(props) {
    super(props);

    this.state = this.props.activities
  }
  console.log(activities)

  ComponentDidMount() {
    // Creates new map instance
  const map = new mapboxgl.Map({
    container: this.mapWrapper,
    style: 'mapbox://styles/mapbox/streets-v10',
    center: [-73.985664, 40.748514],
    zoom: 12
  });

  // Creates new directions control instance
  const directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
    unit: 'metric',
    profile: 'mapbox/driving',
  });

  // Integrates directions control with map
  map.addControl(directions, 'top-left');
  map.on('load', () => {
    this.showRoute()
  });
  }
}
  

  // GET THE DESTINATION LOCATION
  directions.setOrigin('New York')
  directions.setDestination('Los Angelos');

  // Add geolocate control to the map.
  map.addControl(
    new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true
    })
  );
  return (
    <div className="card mb-3">
      <div className="card-header">
        <span className="text-light">Activities</span>
      </div>
      <div className="card-body">
        {/* {activities &&
            activities.map(activity => (
              <div key={activity._id} className="card mb-3">
                <p>{activity.name} {''} {activity.location}</p>
                <p>Get directions for your trip:</p>
        <div className="App">
        <Map component={Map} myLocation={activity.location}/> */}
        //
        <Map myLocation={activities[1].location} />
        <Map myLocation={activities[0].location} />
        <div>

          <div ref={el => (this.mapWrapper = el)} className="mapWrapper" />
        </div>

        {/* <p>Your Notes: {activity.notes}</p>
        </div>
              </div>
            ))} */}

      </div>
    </div>
  );
};

export default ActivityList;