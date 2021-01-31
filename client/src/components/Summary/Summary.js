import React from 'react';
import './Summary.css';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'

mapboxgl.accessToken = 'pk.eyJ1Ijoiem91c2hpbHUzMSIsImEiOiJja2tnMGxiZmEwOW5lMnVsYTN3OTR6eXg5In0.EExs7dyM_eoTAEdLXzUmVw';

class Summary extends 
React.Component{

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
  }

  render() {
    return (
    <div>
      <p>Your Trip: {this.props.title}</p>
      {/* <p>Where: {this.props.location}</p> */}
      <p>Your Itinerary: {this.props.itineraryId}</p>
      <p>First day of your trip: {this.props.dateBegin}</p>
      <p>Last day of your trip: {this.props.dateEnd}</p>
      <p>Location: {this.props.location}</p>
      <p>Time starts: {this.props.timeFrom}</p>
      <p>Time ends: {this.props.timeTo}</p>
      <p>Notes: {this.props.notes}</p>
      <p>Get directions for your trip:</p>
      <div ref={el => (this.mapWrapper = el)} className="mapWrapper" />
    // </div>
    );
  }
}

export default Summary;