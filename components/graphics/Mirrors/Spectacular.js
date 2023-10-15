'use client'

import React, { Suspense } from 'react'
import { Canvas } from 'react-three-fiber'
import Scene from './Scene'
export default function Spectacular({title}) {
    return (
      <Canvas concurrent shadowMap camera={{ position: [0, 0, 5], fov: 70 }}>
        <color attach="background" args={['#000']} />
        <Suspense fallback={null}>
        <Scene title={title} />
        </Suspense>
        <ambientLight intensity={0.4} />
      </Canvas>
    )
  }