'use client'


import React, { Suspense, useEffect } from "react";
import { Canvas,useFrame} from '@react-three/fiber'
import { useGLTF, useAnimations,  useScroll, ContactShadows , Float, Environment } from "@react-three/drei";
import styled from 'styled-components'

const Grid = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: start;
  font-family: 'ThunderBlack';
  font-size: 1.2em;
  line-height: 0.74em;
  color: #f7f4af;

  @media (max-width: 425px) {
    grid-template-columns: 1fr;
  }
`

const Left = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 1fr auto;
  width: 100%;
  height: 100%;
  padding: 100px;
  white-space: nowrap;
  font-family: 'ThunderThin';
  line-height: 1em;
  @media (max-width: 768px) {
    padding: 50px;
  }
`

const Right = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  background: #f7f4af;
  color: #252525;
`

const Sub = styled.div`
  align-self: end;
  width: 200px;
  height: 2px;
  background: #f7f4af;
`

const Jumbo = styled.div`
  align-self: center;
  padding: 100px;
  font-size: 1.5em;
  color: #252525;
`

const Label = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  font-family: 'ThunderThin';
  font-size: 0.2em;
  line-height: 0.1em;
  color: #252525;
  padding: 100px;

  @media (max-width: 768px) {
    padding: 50px;
  }

  @media (max-width: 425px) {
    padding: 20px;
  }
`

export default function Underlay() {
  return (
    <Grid>
      <Left>
        <div>
          THE SISTRUM
          <br />
          IS DESIGNED
          <br />
          TO REPRESENT
          <br />
          CONTINUAL
          <br />
          AGITATION.
        </div>
        <Sub />
      </Left>
      <Right>
        <Jumbo>M1</Jumbo>
      </Right>
    </Grid>
  )
}

export function Model(props) {
    const scroll = useScroll()
  const { nodes, materials, animations } = useGLTF("/assets/models/vehicles/helicopter_2.glb");
  const { ref, actions } = useAnimations(animations)
  useEffect(() => void (actions["Take 001"].reset().play().paused = true), [])
  useFrame(() => (actions["Take 001"].time = actions["Take 001"].getClip().duration * scroll.offset))
  return (
    <group ref={ref} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="AW101FBX" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="AW101"
                  position={[0.006, -14.243, 14.829]}
                  scale={9.177}
                >
                  <mesh
                    name="AW101_AW101-AW101_sha_0"
                    castShadow
                    receiveShadow
                    geometry={nodes["AW101_AW101-AW101_sha_0"].geometry}
                    material={materials["AW101-AW101_sha"]}
                  />
                  <mesh
                    name="AW101_AW101-AW101_windows_sha_0"
                    castShadow
                    receiveShadow
                    geometry={nodes["AW101_AW101-AW101_windows_sha_0"].geometry}
                    material={materials["AW101-AW101_windows_sha"]}
                  />
                  <group
                    name="AW101_backrotor"
                    position={[0.534, 2.136, -8.864]}
                  >
                    <mesh
                      name="AW101_backrotor_AW101-AW101_sha_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes["AW101_backrotor_AW101-AW101_sha_0"].geometry
                      }
                      material={materials["AW101-AW101_sha"]}
                    />
                  </group>
                  <group
                    name="AW101_propellar"
                    position={[0.034, 2.534, 3.215]}
                  >
                    <mesh
                      name="AW101_propellar_AW101-AW101_sha_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes["AW101_propellar_AW101-AW101_sha_0"].geometry
                      }
                      material={materials["AW101-AW101_sha"]}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/assets/models/vehicles/helicopter_2.glb");

export default function Helicopter() {
  return (
    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 1.1], fov: 45 }}>
       <hemisphereLight
        args={[0xffffff, 0xffffff, 1.0]}
        color={0x7095c1}
        position={[0, 50, 0]}
        groundColor={0xcbc1b2}
      />
      <directionalLight
        position={[100, 200, 100]}
        castShadow
        shadow-mapSize={[4096, 4096]}
        shadow-camera-left={-22}
        shadow-camera-bottom={-22}
        shadow-camera-right={22}
        shadow-camera-top={22}
      />
      <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/potsdamer_platz_1k.hdr" />
      <ambientLight intensity={2} />
      <spotLight position={[1, 6, 1.5]} angle={0.2} penumbra={1} intensity={2.5} castShadow shadow-mapSize={[2048, 2048]} />
      <spotLight position={[-5, 5, -1.5]} angle={0.03} penumbra={1} intensity={4} castShadow shadow-mapSize={[1024, 1024]} />
      <spotLight position={[5, 5, -5]} angle={0.3} penumbra={1} intensity={4} castShadow={true} shadow-mapSize={[256, 256]} color="#ffffc0" />
      <Suspense fallback={null}>
      <Float speed={2}>
        <Model scale={0.225} position={[0, -0.09, 0]} />
        <ContactShadows frames={1} rotation-x={[Math.PI / 2]} position={[0, -0.33, 0]} far={0.4} width={2} height={2} blur={4} />
         </Float>
      </Suspense>
    </Canvas>
  )
}