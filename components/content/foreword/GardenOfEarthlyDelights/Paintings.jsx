'use client'

import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import {  useRef, useLayoutEffect} from 'react'




export function Dance(props) {
  const sectionOne = useRef();
  const sectionTwo = useRef();
  const { scene } = useGLTF('/assets/models/paintings/devils_dance.glb')


    useLayoutEffect(() => {
    gsap.to(scene.current.rotation, {
      scrollTrigger: {
        trigger: sectionOne.current,
        scrub: 0.2,
        start: "top top",
        end: "bottom top"
      },
      y: Math.PI * 2,
      immediateRender: false
    });
    gsap.to(scene.current, {
      scrollTrigger: {
        trigger: sectionTwo.current,
        scrub: 0.2,
        start: "top top",
        end: "bottom top"
      },
         opacity: 0,
        scale: 0,
        duration: 3.5,
      immediateRender: false
    });
  }, []);

  return <primitive object={scene} {...props} />
}


export function Elephants(props) {
  const { scene } = useGLTF('/assets/models/paintings/the_elephants.glb')

  return <primitive object={scene} {...props} />
}

export function Abstract(props) {
  const { scene } = useGLTF('/assets/models/paintings/abstract_art.glb')

  return <primitive object={scene} {...props} />
}

export function Tristan(props) {
  const { scene } = useGLTF('/assets/models/paintings/tristan_eaton.glb')

  return <primitive object={scene} {...props} />
}

export function DigitalOil(props) {
  const { scene } = useGLTF('/assets/models/paintings/3d_painting.glb')

  return <primitive object={scene} {...props} />
}

export function Newton(props) {
  const { scene } = useGLTF('/assets/models/paintings/sir_isaac_newton.glb')

  return <primitive object={scene} {...props} />
}

export function MonaLisa(props) {
  const { scene } = useGLTF('/assets/models/paintings/mona_lisa_pbr.glb')

  return <primitive object={scene} {...props} />
}

export function NuerembergChronicle(props) {
  const { scene } = useGLTF('/assets/models/paintings/nuremberg_chronicle.glb')

  return <primitive object={scene} {...props} />
}