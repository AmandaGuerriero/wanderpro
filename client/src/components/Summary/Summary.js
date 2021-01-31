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
      <p>Title: {this.props.title}</p>
      <p>location: {this.props.location}</p>
      <p>description: {this.props.description}</p>
      <div ref={el => (this.mapWrapper = el)} className="mapWrapper" />
    // </div>
    );
  }
}

export default Summary;


// const geojson = {
//   type: 'FeatureCollection',
//   features: [
//     {type: 'Feature', geometry: {type: 'Point', coordinates: [-122.4, 37.8]}}
//   ],
// };

// const layerStyle = {
//   id: 'point',
//   type: 'circle',
//   paint: {
//     'circle-radius': 10,
//     'circle-color': '#007cbf'
//   }
// };

// function Summary() {
//   const [viewport, setViewport] = React.useState({
//     longitude: -122.45,
//     latitude: 37.78,
//     zoom: 14
//   });
//   return (
//     <ReactMapGL {...viewport} 
//     width="50vw" height="50vh" 
//     onViewportChange={setViewport} 
//     mapboxApiAccessToken="pk.eyJ1Ijoiem91c2hpbHUzMSIsImEiOiJja2tnMGxiZmEwOW5lMnVsYTN3OTR6eXg5In0.EExs7dyM_eoTAEdLXzUmVw">
//     <Source id="my-data" type="geojson" data={geojson}>
//     <Layer {...layerStyle} />
//       </Source>
//     </ReactMapGL>
//   );
// }

// works 2
// function Summary(props) {
//   const [viewport, setViewport] = React.useState({
//     width: 400,
//     height: 400,
//     latitude: 34.0522,
//     longitude: -118.2437,
//     zoom: 8
//   });  
//   return (
//     <div>
//       <p>Title: {props.title}</p>
//       <p>location: {props.location}</p>
//       <p>description: {props.description}</p>
//       <div id="map"></div>
//       <ReactMapGL
//       {...viewport}
//       onViewportChange={(viewport) => setViewport(viewport)}
//       mapboxApiAccessToken="pk.eyJ1Ijoiem91c2hpbHUzMSIsImEiOiJja2tnMGxiZmEwOW5lMnVsYTN3OTR6eXg5In0.EExs7dyM_eoTAEdLXzUmVw"
//     />
//      </div>
//   );
// }
// export default Summary;