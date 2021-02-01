import React, {Component} from 'react';
import ReactMapGL from 'react-map-gl';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'

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
    directions.setDestination(this.props.state.location);
    // Add geolocate control to the map.
map.addControl(
  new mapboxgl.GeolocateControl({
  positionOptions: {
  enableHighAccuracy: true
  },
  trackUserLocation: true
  })
  );
  }
  
  state = {
    viewport: {
      width: 400,
      height: 400,
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 8
    }
  };
    
  render() {
  
      const { viewport } = this.state;
     
     return (
       <ReactMapGL
         width={viewport.width}
         height={viewport.height}
         latitude={viewport.latitude}
         longitude={viewport.longitude}
         zoom={viewport.zoom}
        
         onViewportChange={(viewport) => this.setState({viewport})}
       />
     );
   }
}
    
export default Map;