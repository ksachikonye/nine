import * as React from 'react';
import Map, {Source, Layer} from 'react-map-gl';

import ControlPanel from './control-panel';


const TOKEN = 'pk.eyJ1IjoiY2hvbWJvY2hpbm9rb3NvcmFtb3RvIiwiYSI6ImNsYWIzNzN1YzA5M24zdm4xb2txdXZ0YXQifQ.mltBkVjXA6LjUJ1bi7gdRg'; // Set your mapbox token here

const skyLayer =  {
  id: 'sky',
  type: 'sky',
  paint: {
    'sky-type': 'atmosphere',
    'sky-atmosphere-sun': [0.0, 0.0],
    'sky-atmosphere-sun-intensity': 15
  }
};

export default function Terrain() {
  return (
    <>
      <Map
        initialViewState={{
          latitude: 32.6141,
          longitude: -114.34411,
          zoom: 14,
          bearing: 80,
          pitch: 80
        }}
        maxPitch={85}
        mapStyle="mapbox://styles/mapbox/satellite-v9"
        mapboxAccessToken={TOKEN}
        terrain={{source: 'mapbox-dem', exaggeration: 1.5}}
      >
        <Source
          id="mapbox-dem"
          type="raster-dem"
          url="mapbox://mapbox.mapbox-terrain-dem-v1"
          tileSize={512}
          maxzoom={14}
        />
        <Layer {...skyLayer} />
      </Map>
      <ControlPanel />
    </>
  );
}


