import * as React from 'react';
import ReactMapGL from 'react-map-gl';

function Summary(props) {
  const [viewport, setViewport] = React.useState({
    latitude: 34.0522,
    longitude: 118.2437,
    zoom: 8
  });

  return (
    // <div>
    //   <p>title: {props.state.title}</p>
    //   <p>location: {props.state.location}</p>
    //   <p>description: {props.state.description}</p>

      <ReactMapGL
            {...viewport}
            width="100%"
            height="100%"
            onViewportChange={(viewport) => setViewport(viewport)}
          />
    // </div>
  );
}

export default Summary;