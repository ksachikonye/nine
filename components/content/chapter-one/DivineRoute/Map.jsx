'use client'

import React from 'react';
import ReactMapboxGl from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = ReactMapboxGl({
  accessToken: 'pk.eyJ1IjoiY2hvbWJvY2hpbm9rb3NvcmFtb3RvIiwiYSI6ImNsYWIzNzN1YzA5M24zdm4xb2txdXZ0YXQifQ.mltBkVjXA6LjUJ1bi7gdRg',
  interactive: false,
});

export default ({ center, zoom }) => (
  <Map
    style="mapbox://styles/mapbox/satellite-v9"
    containerStyle={{
      height: '100vh',
      width: '100vw',
    }}
    center={center}
    zoom={[zoom]}
    flyToOptions={{ speed: 0.75 }}
  />
);
