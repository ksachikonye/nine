'use client'

import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useMemo, useRef, useState } from 'react'
import { Line, useCursor, MeshDistortMaterial } from '@react-three/drei'
import { useRouter } from 'next/navigation'





export function Primates(props) {
  const { scene } = useGLTF('/assets/models/archeology/primates_skeletons.glb')

  useFrame((state, delta) => (scene.rotation.y += delta))

  return <primitive object={scene} {...props} />
}


export function SmartWatch(props) {
  const { scene } = useGLTF('/assets/models/devices/smart_watch.glb')

  return <primitive object={scene} {...props} />
}

export function Poseidon(props) {
  const { scene } = useGLTF('/assets/models/archeology/poseidon_temple.glb')

  return <primitive object={scene} {...props} />
}

export function Olympia(props) {
  const { scene } = useGLTF('/assets/models/archeology/stadium_of_olympia.glb')

  return <primitive object={scene} {...props} />
}

export function ReliefMap(props) {
  const { scene } = useGLTF('/assets/models/archeology/greece_turkey_relief_map.glb')

  return <primitive object={scene} {...props} />
}

export function Peloponisia(props) {
  const { scene } = useGLTF('/assets/models/archeology/greece_island.glb')

  return <primitive object={scene} {...props} />
}

export function Dionysis(props) {
  const { scene } = useGLTF('/assets/models/archeology/dionysos.glb')

  return <primitive object={scene} {...props} />
}

export function Dionysis(props) {
  const { scene } = useGLTF('/assets/models/archeology/pbr_greek_pottery.glb')

  return <primitive object={scene} {...props} />
}