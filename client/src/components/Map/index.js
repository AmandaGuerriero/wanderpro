import React, {Component} from 'react';
import ReactMapGL from 'react-map-gl';
import './Map.css';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css';
import ActivityList from '../ActivityList';
// import { QUERY_USER, QUERY_ME } from '../utils/queries';

mapboxgl.accessToken = 'pk.eyJ1Ijoiem91c2hpbHUzMSIsImEiOiJja2tnMGxiZmEwOW5lMnVsYTN3OTR6eXg5In0.EExs7dyM_eoTAEdLXzUmVw';

class Map extends Component {

  componentDidMount() {

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

    // Need to get user activity location to get auto input location address 
    // <ActivityList activities={activity.name} location={`${activity.location}'s thoughts...`} />
    
    // GET THE DESTINATION LOCATION
    //directions.setDestination(activity.location);

    // Add geolocate control to the map.
// map.addControl(
//   new mapboxgl.GeolocateControl({
//   positionOptions: {
//   enableHighAccuracy: true
//   },
//   trackUserLocation: true
//   })
//   );
  }

  render() {
    return (
    <div>

      <div ref={el => (this.mapWrapper = el)} className="mapWrapper" />
    </div>
    );
  }
}

export default Map;