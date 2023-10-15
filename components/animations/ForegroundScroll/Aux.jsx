'use client'
import gsap from "gsap-trial/dist/gsap";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { Model } from "./Model.jsx";

gsap.registerPlugin(ScrollTrigger);

export default function Aux(props) {
  return (
    <>
      <Canvas
        camera={{
          fov: 50,
          near: 0.1,
          far: 30,
          position: [0, 0, 8]
        }}
      >
        <Model></Model>
      </Canvas>
    </>
  );
}
