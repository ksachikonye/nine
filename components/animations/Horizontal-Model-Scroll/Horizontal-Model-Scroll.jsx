'use client'

import react, { useState, useEffect, useRef } from "react";
// react three fiber
import { Canvas } from "@react-three/fiber";
// Components
import Scene from "./Scene";


export default function HorizontalModelScroll() {
  const [scrollTarget, setScrollTarget] = useState(0);

  return (
    <div className="App">
      <Canvas orthographic camera={{ position: [0, 0, 5], fov: 50 }}>
      <color attach="background" args={['black']} />
      <ambientLight />
      <directionalLight position={[-5, 5, 5]} castShadow shadow-mapSize={1024} />
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight position={[10, 20, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
        <Scene scrollTarget={scrollTarget} />
      </Canvas>
    </div>
  );
}
