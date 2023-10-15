'use client'

import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'




export function Fountain(props) {
  const { scene } = useGLTF('/assets/models/buildings/peirene_fountain.glb')

  useFrame((state, delta) => (scene.rotation.y += delta))

  return <primitive object={scene} {...props} />
}


export function Stadium(props) {
  const { scene } = useGLTF('/assets/models/buildings/stadium_of_olympia_greece.glb')

  return <primitive object={scene} {...props} />
}

export function SaberToothCat(props) {
  const { scene } = useGLTF('/assets/models/archeology/saber-toothed_cat.glb')

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