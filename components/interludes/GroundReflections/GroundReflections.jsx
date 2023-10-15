'use client'

import * as THREE from 'three'
import React, { Suspense, useEffect, useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Reflector, Text, useTexture, useGLTF, useAnimations } from '@react-three/drei'
import { suspend } from 'suspend-react'

export default function GroundReflections() {
  return (
    <Canvas concurrent gl={{ alpha: false }} pixelRatio={[1, 1.5]} camera={{ position: [0, 3, 100], fov: 15 }}>
      <color attach="background" args={['black']} />
      <fog attach="fog" args={['black', 15, 20]} />
      <Suspense fallback={null}>
        <Bust url="https://raw.githubusercontent.com/ksachikonye/hzevo-server/main/music/Sleepnet_AngelBlade.mp3" position={[0, -10, 0]} />
        <group position={[0, -1, 0]}>
          <VideoText position={[0, 1.3, -2]} />
          <Ground />
        </group>
        <ambientLight intensity={0.5} />
        <spotLight position={[0, 10, 0]} intensity={0.3} />
        <directionalLight position={[-50, 0, -40]} intensity={0.7} />
        <Intro />
      </Suspense>
    </Canvas>
  )
}



function VideoText(props) {
  const [video] = useState(() =>
    Object.assign(document.createElement('video'), {
      src: 'https://raw.githubusercontent.com/ksachikonye/hzevo-server/main/media/mp4/site-intro.mp4',
      crossOrigin: 'Anonymous',
      loop: true,
      muted: true
    })
  )
  useEffect(() => void video.play(), [video])
  return (
    <Text font="/assets/fonts/Inter-Bold.woff" fontSize={3} letterSpacing={-0.06} {...props}>
      zana
      <meshBasicMaterial toneMapped={false}>
        <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
      </meshBasicMaterial>
    </Text>
  )
}

function Ground() {
  const [floor, normal] = useTexture(['/assets/environments/SurfaceImperfections003_1K_var1.jpg', '/assets/environments/SurfaceImperfections003_1K_Normal.jpg'])
  return (
    <Reflector blur={[400, 100]} resolution={512} args={[10, 10]} mirror={0.5} mixBlur={6} mixStrength={1.5} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
      {(Material, props) => <Material color="#a0a0a0" metalness={0.4} roughnessMap={floor} normalMap={normal} normalScale={[2, 2]} {...props} />}
    </Reflector>
  )
}



function Bust({ url }) {
  const ref = useRef()
  const time = useRef(0)
  const { scene, animations, materials } = useGLTF('/assets/models/statues/bust.glb')
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
  })
  return <primitive scale={[0.4, 0.4, 0.4]} position={[-0.2, 0, 0.1]} rotation={[0, -2.4, 0]} ref={ref} object={scene} />
}

function Intro() {
  const [vec] = useState(() => new THREE.Vector3())
  return useFrame((state) => {
    state.camera.position.lerp(vec.set(state.mouse.x * 5, 3 + state.mouse.y * 2, 14), 0.05)
    state.camera.lookAt(0, 0, 0)
  })
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
