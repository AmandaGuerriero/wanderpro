// import mapboxSdk from '@mapbox/mapbox-sdk/services/directions';
import * as mapboxgl from 'mapbox-gl';

const MaxWayPoint = 20;

var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
 
mapboxgl.accessToken = 'pk.eyJ1Ijoiem91c2hpbHUzMSIsImEiOiJja2tnMGxiZmEwOW5lMnVsYTN3OTR6eXg5In0.EExs7dyM_eoTAEdLXzUmVw';
var map = new mapboxgl.Map({
container: 'YOUR_CONTAINER_ELEMENT_ID',
style: 'mapbox://styles/mapbox/streets-v11'
});
mapboxgl.accessToken = 'pk.eyJ1Ijoiem91c2hpbHUzMSIsImEiOiJja2tnMGxiZmEwOW5lMnVsYTN3OTR6eXg5In0.EExs7dyM_eoTAEdLXzUmVw';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-74.5, 40],
        zoom: 9
    });

    map.on('load', function () {
        map.addSource(id,'route', {
            'type': 'geojson',
            'data': {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                    'type': 'LineString',
                    'coordinates':directions
                }
            }
        });

        map.addLayer({
          'id': 'route'+id,
          'type': 'line',
          'source': id,
          'layout': {
              'line-join': 'round',
              'line-cap': 'round'
          },
          'paint': {
              'line-color': '#888',
              'line-width': 8
          }
      });
        map.addLayer({
            'id': 'route'+id,
            'type': 'line',
            'source': id,
            'layout': {
                'line-join': 'round',
                'line-cap': 'round'
            },
            'paint': {
                'line-color': '#8FC',
                'line-width': 4
            }
        });
    });
    export default Map