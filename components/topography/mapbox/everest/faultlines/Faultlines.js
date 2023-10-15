import * as React from 'react';
import Map, {Source} from 'react-map-gl';




const TOKEN = 'pk.eyJ1IjoiY2hvbWJvY2hpbm9rb3NvcmFtb3RvIiwiYSI6ImNsYWIzNzN1YzA5M24zdm4xb2txdXZ0YXQifQ.mltBkVjXA6LjUJ1bi7gdRg'; // Set your mapbox token here



export default function Faultlines() {
  return (
    <>
      <Map
        initialViewState={{
          latitude: 27.9881,
          longitude: 86.9250,
          zoom: 14,
          bearing: 80,
          pitch: 80
        }}
        maxPitch={85}
        mapStyle="mapbox://styles/chombochinokosoramoto/clludqa4400bc01nzcfed1wjq"
        mapboxAccessToken={TOKEN}
     
      >
        <Source
          id="mapbox-dem"
          type="raster-dem"
          url="mapbox://mapbox.mapbox-terrain-dem-v1"
          tileSize={512}
          maxzoom={14}
        />
    
      </Map>

    </>
  );
}


