'use client'

import React, { useState, useEffect, useRef, useMemo  } from "react";
import Globe from 'react-globe.gl';

const EARTH_RADIUS_KM = 6371; // km
const SAT_SIZE = 80; // km
const TIME_STEP = 3 * 1000; // per frame

const Satellite = () => {
    const globeEl = useRef();
    const [satData, setSatData] = useState();
    const [globeRadius, setGlobeRadius] = useState();
    const [time, setTime] = useState(new Date());

    useEffect(() => {
      // time ticker
      (function frameTicker() {
        requestAnimationFrame(frameTicker);
        setTime(time => new Date(+time + TIME_STEP));
      })();
    }, []);

    useEffect(() => {
      // load satellite data
      fetch('//unpkg.com/globe.gl/example/datasets/space-track-leo.txt').then(r => r.text()).then(rawData => {
        const tleData = rawData.replace(/\r/g, '')
          .split(/\n(?=[^12])/)
          .filter(d => d)
          .map(tle => tle.split('\n'));
        const satData = tleData.map(([name, ...tle]) => ({
          satrec: satellite.twoline2satrec(...tle),
          name: name.trim().replace(/^0 /, '')
        }))
        // exclude those that can't be propagated
        .filter(d => !!satellite.propagate(d.satrec, new Date()).position)
        .slice(0, 1500);

        setSatData(satData);
      });
    }, []);

    const objectsData = useMemo(() => {
      if (!satData) return [];

      // Update satellite positions
      const gmst = satellite.gstime(time);
      return satData.map(d => {
        const eci = satellite.propagate(d.satrec, time);
        if (eci.position) {
          const gdPos = satellite.eciToGeodetic(eci.position, gmst);
          const lat = satellite.radiansToDegrees(gdPos.latitude);
          const lng = satellite.radiansToDegrees(gdPos.longitude);
          const alt = gdPos.height / EARTH_RADIUS_KM;
          return { ...d, lat, lng, alt };
        }
        return d;
      });
    }, [satData, time]);

    const satObject = useMemo(() => {
      if (!globeRadius) return undefined;

      const satGeometry = new THREE.OctahedronGeometry(SAT_SIZE * globeRadius / EARTH_RADIUS_KM / 2, 0);
      const satMaterial = new THREE.MeshLambertMaterial({ color: 'palegreen', transparent: true, opacity: 0.7 });
      return new THREE.Mesh(satGeometry, satMaterial);
    }, [globeRadius]);

    useEffect(() => {
      setGlobeRadius(globeEl.current.getGlobeRadius());
      globeEl.current.pointOfView({ altitude: 3.5 });
    }, []);

    return <div>
      <Globe
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        objectsData={objectsData}
        objectLabel="name"
        objectLat="lat"
        objectLng="lng"
        objectAltitude="alt"
        objectFacesSurface={false}
        objectThreeObject={satObject}
      />
      <div id="time-log">{time.toString()}</div>
    </div>;
  };