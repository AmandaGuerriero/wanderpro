import * as React from 'react';
import ReactMapGL from 'react-map-gl';

function Summary(props) {
  const [viewport, setViewport] = React.useState({
    latitude: props.state.latitude,
    longitude: props.state.longitude,
    zoom: 8
  });

  return (
    <div>
    <ReactMapGL
      {...viewport}
      onViewportChange={(viewport) => setViewport(viewport)}
      mapboxApiAccessToken="pk.eyJ1Ijoiem91c2hpbHUzMSIsImEiOiJja2tnMGxiZmEwOW5lMnVsYTN3OTR6eXg5In0.EExs7dyM_eoTAEdLXzUmVw"
    />
      <p>Title: {props.title}</p>
      <p>location: {props.location}</p>
      <p>description: {props.description}</p>
     </div>
  );
}

export default Summary;