'use client'


import React, { useRef, useEffect, useLayoutEffect} from "react";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother';
import { useGLTF, useAnimations, useScroll } from "@react-three/drei";

gsap.registerPlugin( ScrollSmoother)

export function Model(props) {
  const ref = useRef();
   const tl = useRef();
  const { nodes, materials, animations } = useGLTF("/sleepingidle.glb");
  const { actions } = useAnimations(animations, ref);
    useEffect(() => {
    actions["Armature|mixamo.com|Layer0"].play();
  });

  const scroll = useScroll();
    useFrame(() => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    // VERTICAL ANIMATION
    tl.current.to(
      ref.current.position,
      {
        duration: 2,
        y: -FLOOR_HEIGHT * (NB_FLOORS - 1),
      },
      0
    );

    // Office Rotation
    tl.current.to(
      ref.current.rotation,
      { duration: 1, x: 0, y: Math.PI / 6, z: 0 },
      0
    );
    tl.current.to(
      ref.current.rotation,
      { duration: 1, x: 0, y: -Math.PI / 6, z: 0 },
      1
    );

    // Office movement
    tl.current.to(
      ref.current.position,
      {
        duration: 1,
        x: -1,
        z: 2,
      },
      0
    );
    tl.current.to(
      ref.current.position,
      {
        duration: 1,
        x: 1,
        z: 2,
      },
      1
    );

    // LIBRARY FLOOR
    tl.current.from(
      libraryRef.current.position,
      {
        duration: 0.5,
        x: -2,
      },
      0.5
    );
    tl.current.from(
      libraryRef.current.rotation,
      {
        duration: 0.5,
        y: -Math.PI / 2,
      },
      0
    );

    // ATTIC
    tl.current.from(
      atticRef.current.position,
      {
        duration: 1.5,
        y: 2,
      },
      0
    );

    tl.current.from(
      atticRef.current.rotation,
      {
        duration: 0.5,
        y: Math.PI / 2,
      },
      1
    );

    tl.current.from(
      atticRef.current.position,
      {
        duration: 0.5,

        z: -2,
      },
      1.5
    );
  }, []);

  return (
    <group ref={ref} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <skinnedMesh
            name="Beta_Joints"
            geometry={nodes.Beta_Joints.geometry}
            material={materials.Beta_Joints_MAT1}
            skeleton={nodes.Beta_Joints.skeleton}
          />
          <skinnedMesh
            name="Beta_Surface"
            geometry={nodes.Beta_Surface.geometry}
            material={materials.Beta_HighLimbsGeoSG3}
            skeleton={nodes.Beta_Surface.skeleton}
          />
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/sleepingidle.glb");