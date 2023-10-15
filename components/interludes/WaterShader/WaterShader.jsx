'use client'

import * as THREE from 'three'
import React, { Suspense, useRef, useMemo, useEffect } from 'react'
import { Canvas, extend, useThree, useLoader, useFrame } from '@react-three/fiber'
import { OrbitControls, Sky, useGLTF, useAnimations, Cloud, Stars } from '@react-three/drei'
import { Water } from 'three-stdlib'
import { suspend } from 'suspend-react'

extend({ Water })
const red = new THREE.Color('#900909')
function Ocean() {
  const ref = useRef()
  const gl = useThree((state) => state.gl)
  const waterNormals = useLoader(THREE.TextureLoader, '/waternormals.jpeg')
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping
  const geom = useMemo(() => new THREE.PlaneGeometry(10000, 10000), [])
  const config = useMemo(
    () => ({
      textureWidth: 512,
      textureHeight: 512,
      waterNormals,
      sunDirection: new THREE.Vector3(),
      sunColor: 0xffffff,
      waterColor: 0x001e0f,
      distortionScale: 3.7,
      fog: false,
      format: gl.encoding
    }),
    [waterNormals]
  )
  useFrame((state, delta) => (ref.current.material.uniforms.time.value += delta))
  return <water ref={ref} args={[geom, config]} rotation-x={-Math.PI / 2} />
}

function Box() {
  const ref = useRef()
  useFrame((state, delta) => {
    ref.current.position.y = 10 + Math.sin(state.clock.elapsedTime) * 20
    ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z += delta
  })
  return (
    <mesh ref={ref} scale={20}>
      <boxGeometry />
      <meshStandardMaterial />
    </mesh>
  )
}

function Bust({ url }) {
  const ref = useRef()
  const time = useRef(0)
  const { scene, animations, materials } = useGLTF('https://raw.githubusercontent.com/ksachikonye/preface-hezvo/main/bust.glb')
  const { actions, mixer } = useAnimations(animations, ref)
  const { gain, context, update, data } = suspend(() => createAudio(url), [url])
  useEffect(() => {
    // Connect the gain node, which plays the audio
    gain.connect(context.destination)
    // Disconnect it on unmount
    return () => gain.disconnect()
  }, [gain, context])
  // Play all actions (the fragments flying off)
  useEffect(() => Object.keys(actions).forEach((key) => actions[key].play()), [])
  // Control the exploding statue and the inner materials color
  useFrame((_) => {
    let avg = update()
    mixer.timeScale = 1
    mixer.setTime((time.current = THREE.MathUtils.lerp(time.current, avg * 1.25, 0.25)))
    ref.current.position.y = 10 + Math.sin(state.clock.elapsedTime) * 20
    ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z += delta
  })

  return <primitive scale={[4, 4, 4]} position={[0, -0.23, 0]} rotation={[0, -2.4, 0]} ref={ref} object={scene} />
}

export default function WaterShader() {
  return (
    <Canvas>
      <CameraControls makeDefault />
      <PerspectiveCamera makeDefault fov={45} />
      <pointLight position={[100, 100, 100]} />
      <pointLight position={[-100, -100, -100]} />
      <Suspense fallback={null}>
        <Ocean />
        <Bust url="https://raw.githubusercontent.com/ksachikonye/hzevo-server/main/music/Chubrub.mp3" />
      </Suspense>
      <Sky scale={100} sunPosition={[500, 150, -1000]} turbidity={0.1} />

      <OrbitControls />
    </Canvas>
  )
}

async function createAudio(url) {
  // Fetch audio data and create a buffer source
  const res = await fetch(url)
  const buffer = await res.arrayBuffer()
  const context = new (window.AudioContext || window.webkitAudioContext)()
  const source = context.createBufferSource()
  source.buffer = await new Promise((res) => context.decodeAudioData(buffer, res))
  source.loop = true
  // This is why it doesn't run in Safari 🍏🐛. Start has to be called in an onClick event
  // which makes it too awkward for a little demo since you need to load the async data first
  source.start(0)
  // Create gain node and an analyser
  const gain = context.createGain()
  const analyser = context.createAnalyser()
  analyser.fftSize = 64
  source.connect(analyser)
  analyser.connect(gain)
  // The data array receive the audio frequencies
  const data = new Uint8Array(analyser.frequencyBinCount)
  return {
    context,
    source,
    gain,
    data,
    // This function gets called every frame per audio source
    update: () => {
      analyser.getByteFrequencyData(data)
      // Calculate a frequency average
      return (data.avg = data.reduce((prev, cur) => prev + cur / data.length, 0))
    }
  }
}
