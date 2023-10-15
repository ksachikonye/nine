'use client'

import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useMemo, useRef, useState, useEffect } from 'react'
import { Line, useCursor, MeshDistortMaterial } from '@react-three/drei'
import { useRouter } from 'next/navigation'



export function Eye(props) {
  const { scene } = useGLTF('/assets/models/anatomy/eye.glb')

  useFrame((state, delta) => (scene.rotation.y += delta))

  return <primitive object={scene} {...props} />
}


export function Acetylcholinesterase(props) {
  const { scene } = useGLTF('/assets/models/biochemistry/acetylcholinesterase.glb')

  return <primitive object={scene} {...props} />
}

export function Brain(props) {
  const { scene } = useGLTF('/assets/models/anatomy/brain.glb')

  return <primitive object={scene} {...props} />
}

export function SurveillanceCamera({ scale, scrollState, ...props }) {
  const { scene, animations } = useGLTF('/assets/models/devices/surveillance_camera.glb')
    const { actions } = useAnimations(animations);
  useEffect(() => {
    actions["Cubo.001Action"].play();
  });
    useFrame(() => {
        scene.current.rotation.y = scrollState.progress * Math.PI * 2
  })

  return <primitive object={scene} {...props} />
}

export function BrainExplode({ scale, scrollState, ...props }) {
  const { scene, animations } = useGLTF('/assets/models/anatomy/brain_explode.glb')
  const { actions } = useAnimations(animations);
  useEffect(() => {
    actions["Take 001"].play();
  });
    useFrame(() => {
        scene.current.rotation.y = scrollState.progress * Math.PI * 2
  })

  return <primitive object={scene} {...props} />
}




export function HemisectedBrain({ scale, scrollState, ...props }) {
  const { scene } = useGLTF('/assets/models/anatomy/hemisected_brain.glb')
  useFrame(() => {
    scene.current.rotation.y = scrollState.progress * Math.PI * 2
})


  return <primitive object={scene} {...props} />
}