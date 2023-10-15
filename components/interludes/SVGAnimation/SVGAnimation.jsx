'use client'

import * as THREE from 'three'
import React, { useState, useEffect } from 'react'
import { Canvas } from 'react-three-fiber'
import { useTransition, a } from 'react-spring/three'
import flatten from 'lodash-es/flatten'
import { SVGLoader as loader } from './SVGLoader'


const svgResource = new Promise(resolve =>
  new loader().load('https://raw.githubusercontent.com/drcmda/react-three-fiber/master/examples/resources/images/svg/city.svg', shapes =>
    resolve(flatten(shapes.map((group, index) => group.toShapes(true).map(shape => ({ shape, color: group.color, index })))))
  )
)

function Shape({ shape, position, color, opacity, index }) {
  return (
    <a.mesh position={position.interpolate((x, y, z) => [x, y, z + -index * 50])}>
      <a.meshPhongMaterial attach="material" color={color} opacity={opacity} side={THREE.DoubleSide} depthWrite={false} transparent />
      <shapeBufferGeometry attach="geometry" args={[shape]} />
    </a.mesh>
  )
}

function Scene() {
  const [show, toggle] = useState(true)
  const [shapes, set] = useState([])
  useEffect(() => void (!show ? set([]) : svgResource.then(set)), [show])
  useEffect(() => void setInterval(() => toggle(show => !show), 4000), [])

  const transitions = useTransition(shapes, item => item.shape.uuid, {
    from: { position: [0, 50, -200], opacity: 0 },
    enter: { position: [0, 0, 0], opacity: 1 },
    leave: { position: [0, -50, 10], opacity: 0 },
    order: ['leave', 'enter', 'update'],
    trail: 30,
    lazy: true
  })

  return (
    <group position={[1600, -700, 0]} rotation={[0, THREE.Math.degToRad(180), 0]}>
      {transitions.map(({ item, key, props }) => (
        <Shape key={key} {...item} {...props} />
      ))}
    </group>
  )
}

export default function SVGAnimation() {
  return (
    <div class="main">
      <Canvas
        camera={{
          fov: 80,
          position: [0, 0, 2000],
          rotation: [0, THREE.Math.degToRad(-20), THREE.Math.degToRad(180)],
          far: 20000
        }}>
        <ambientLight intensity={0.5} />
        <spotLight intensity={0.5} position={[300, 300, 4000]} />
        <Scene />
      </Canvas>
    </div>
  )
}


