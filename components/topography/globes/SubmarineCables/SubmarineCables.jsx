'use client'

import React, { useState, useEffect } from "react";
import Globe from 'react-globe.gl';

const SubmarineCables = () => {
    const [cablePaths, setCablePaths] = useState([]);

    useEffect(() => {
      // from https://www.submarinecablemap.com
      fetch('//http-proxy.vastur.com?url=https://www.submarinecablemap.com/api/v3/cable/cable-geo.json')
        .then(r => r.json())
        .then(cablesGeo => {
          let cablePaths = [];
          cablesGeo.features.forEach(({ geometry, properties }) => {
            geometry.coordinates.forEach(coords => cablePaths.push({ coords, properties }));
          });

          setCablePaths(cablePaths);
        });
    }, []);

    return <Globe
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
      bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
      backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
      pathsData={cablePaths}
      pathPoints="coords"
      pathPointLat={p => p[1]}
      pathPointLng={p => p[0]}
      pathColor={path => path.properties.color}
      pathLabel={path => path.properties.name}
      pathDashLength={0.1}
      pathDashGap={0.008}
      pathDashAnimateTime={12000}
    />;
  };
