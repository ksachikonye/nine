'use client'
import React, { useState, useRef } from "react";
// ThreeJs
import { TextureLoader } from "three/src/loaders/TextureLoader";
// React Three Fiber
import { useFrame, useLoader } from "@react-three/fiber";
import WaveShaderMaterial from "./Shaders/WaveShaderMaterial";

export default function WavyPlane(props) {
  const waveShaderRef = useRef();
  const { position } = props;
  const [image] = useLoader(TextureLoader, ["eyepatch.jpg"]);

  // Setting up the parameters for the shader
  const [opts, setOpts] = useState({
    // Uniforms of the wave Shader Material
    uNoiseFreq: 0.0, // 2.0
    uNoiseAmp: 0.0, // 0.1
    uSpeed: 0.0, // 0.8
    uDistorsion: 0.0 // 0.5
  });

  // Updating time in the mesh shader so it can animates
  useFrame(({ clock }) => {
    waveShaderRef.current.uTime = clock.getElapsedTime();
  });

  return (
    <mesh position={position}>
      <planeBufferGeometry args={[1.627, 2.19, 50, 50]} />
      <waveShaderMaterial
        ref={waveShaderRef}
        uTexture={image}
        uNoiseFreq={opts.uNoiseFreq}
        uNoiseAmp={opts.uNoiseAmp}
        uSpeed={opts.uSpeed}
        uDistorsion={opts.uDistorsion}
      />
    </mesh>
  );
}
