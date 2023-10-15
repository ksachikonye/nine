'use client'

import React ,{Suspense}from "react";
import { Canvas } from "@react-three/fiber";
import {  Environment, Float } from '@react-three/drei'
import { Dance } from "./Paintings";

gsap.registerPlugin(ScrollTrigger);

export default function Aux(props) {
  return (
    <>
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 30,
          position: [0, 0, 8]
        }}
      >
      <hemisphereLight
        args={[0xffffff, 0xffffff, 1.0]}
        color={0x7095c1}
        position={[0, 50, 0]}
        groundColor={0xcbc1b2}
      />
      <directionalLight
        position={[100, 200, 100]}
        castShadow
        shadow-mapSize={[4096, 4096]}
        shadow-camera-left={-22}
        shadow-camera-bottom={-22}
        shadow-camera-right={22}
        shadow-camera-top={22}
      />
      <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/potsdamer_platz_1k.hdr" />
        <Suspense fallback={null}>
           <Float speed={2}>
        <Dance></Dance>
        </Float>
         </Suspense>
      </Canvas>
    </>
  );
}