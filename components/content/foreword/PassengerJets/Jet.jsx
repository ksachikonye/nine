'use client'
import React, {  useEffect, useRef, useLayoutEffect } from "react";
import { useFrame} from '@react-three/fiber'
import { useGLTF, useAnimations,  useScroll } from "@react-three/drei";

export function Jet(props) {
  const sectionOne = useRef()
  const sectionTwo = useRef()
  const scroll = useScroll()
  const { scene, materials, animations } = useGLTF("/assets/models/vehicles/aviao_da_gol.glb");
  const { ref, actions } = useAnimations(animations, group);
  useEffect(() => void (actions["Action" | "PlanoAction"].reset().play().paused = true), [])
  useFrame(() => (actions["Action" | "PlanoAction"].time = actions["Action" | "PlanoAction"].getClip().duration * scroll.offset))


    useLayoutEffect(() => {
    gsap.to(ref.current.rotation, {
      scrollTrigger: {
        trigger: sectionOne.current,
        scrub: 0.2,
        start: "top top",
        end: "bottom top"
      },
      y: THREE.MathUtils.degToRad((props.scroll.current * 360) / 1),
       duration: 3.5,
        ease: "power3.out",
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
         ease: "power3.out",
      immediateRender: false
    });

    
  }, []);
   

  return (
    <group ref={ref} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root" position={[0, 0, 0]}>
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Blades_0" rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials.Blades}
                />
              </group>
              <group name="BodyBack_1" rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_6"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6.geometry}
                  material={materials["Materiais.001"]}
                />
              </group>
              <group name="BodyFront_2" rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_8"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_8.geometry}
                  material={materials.BodyFront}
                />
              </group>
              <group name="BodyMiddle_3" rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_10"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_10.geometry}
                  material={materials.BodyMiddle}
                />
              </group>
              <group name="Cockpit_4" rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_12"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_12.geometry}
                  material={materials["Materiais.014"]}
                />
              </group>
              <group name="CockpitGlass_5" rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_14"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_14.geometry}
                  material={materials.GlassCockpit}
                />
              </group>
              <group
                name="CoversMainLandingGear_6"
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_16"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_16.geometry}
                  material={materials.CoversAndLandingGear}
                />
              </group>
              <group name="DoorFront_7" rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_18"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_18.geometry}
                  material={materials.Materiais}
                />
              </group>
              <group name="Engine1_8" rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_20"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_20.geometry}
                  material={materials.EngineBack}
                />
              </group>
              <group name="LGCoverFrR_9" rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_22"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_22.geometry}
                  material={materials["Materiais.006"]}
                />
              </group>
              <group name="MLGCoverLeft_11" rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_24"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_24.geometry}
                  material={materials["Materiais.005"]}
                />
              </group>
              <group
                name="RadarHolder+random_12"
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_26"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_26.geometry}
                  material={materials["Materiais.009"]}
                />
              </group>
              <group
                name="RandomStuffAtCockpit_13"
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_28"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_28.geometry}
                  material={materials["Materiais.008"]}
                />
              </group>
              <group name="TrimRight_14" rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_30"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_30.geometry}
                  material={materials["Materiais.010"]}
                />
              </group>
              <group name="WingLeft_15" rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_32"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_32.geometry}
                  material={materials["Materiais.012"]}
                />
              </group>
              <group
                name="gol-boeing-737-800-congonhas001_16"
                position={[-0.75, 0.187, -4.409]}
                rotation={[1.569, -0.015, 1.571]}
                scale={2.248}
              >
                <mesh
                  name="Object_34"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_34.geometry}
                  material={materials["gol-boeing-737-800-congonhas"]}
                />
              </group>
              <group
                name="gol-boeing-737-800-congonhas002_17"
                position={[-0.75, 0.187, -4.409]}
                rotation={[1.569, -0.015, 1.571]}
                scale={2.248}
              >
                <mesh
                  name="Object_36"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_36.geometry}
                  material={materials["gol-boeing-737-800-congonhas"]}
                />
              </group>
              <group
                name="gol-boeing-737-800-congonhas003_18"
                position={[0.782, 0.187, -4.409]}
                rotation={[1.569, -0.015, 1.571]}
                scale={2.248}
              >
                <mesh
                  name="Object_38"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_38.geometry}
                  material={materials["gol-boeing-737-800-congonhas"]}
                />
              </group>
              <group
                name="gol-boeing-737-800-congonhas004_19"
                position={[0.782, 0.187, -4.409]}
                rotation={[1.569, -0.015, 1.571]}
                scale={2.248}
              >
                <mesh
                  name="Object_40"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_40.geometry}
                  material={materials["gol-boeing-737-800-congonhas"]}
                />
              </group>
              <group name="Engine1001_20" rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_42"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_42.geometry}
                  material={materials.Engine}
                />
              </group>
              <group name="BodyBack001_21" rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_44"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_44.geometry}
                  material={materials.BodyBackLeft}
                />
              </group>
              <group
                name="LandingGearFront001_22"
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_46"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_46.geometry}
                  material={materials["Materiais.002"]}
                />
              </group>
              <group
                name="MainLandingGearRight001_23"
                position={[0, -0.063, 0.346]}
                rotation={[1.489, 0, 0]}
              >
                <mesh
                  name="Object_48"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_48.geometry}
                  material={materials["Materiais.003"]}
                />
              </group>
              <group name="Engine1002_24" rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_50"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_50.geometry}
                  material={materials["Materiais.004"]}
                />
              </group>
              <group name="Cockpit001_25" rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_52"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_52.geometry}
                  material={materials.CockpitAndRandom}
                />
              </group>
              <group name="BodyBack002_26" rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_54"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_54.geometry}
                  material={materials["Materiais.011"]}
                />
              </group>
              <group name="WingLeft001_27" rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_56"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_56.geometry}
                  material={materials["Materiais.013"]}
                />
              </group>
              <group name="WingLeft002_28" rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_58"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_58.geometry}
                  material={materials["Materiais.007"]}
                />
              </group>
              <group name="LandingGearFront_29" rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_60"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_60.geometry}
                  material={materials["Materiais.016"]}
                />
              </group>
              <group
                name="MainLandingGearRight_30"
                position={[0, -0.063, 0.346]}
                rotation={[1.489, 0, 0]}
              >
                <mesh
                  name="Object_62"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_62.geometry}
                  material={materials["Materiais.019"]}
                />
              </group>
              <group
                name="LandingGearFront002_31"
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_64"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_64.geometry}
                  material={materials["Materiais.015"]}
                />
              </group>
              <group
                name="MainLandingGearRight002_32"
                position={[0, -0.063, 0.346]}
                rotation={[1.489, 0, 0]}
              >
                <mesh
                  name="Object_66"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_66.geometry}
                  material={materials["Materiais.020"]}
                />
              </group>
              <group
                name="MainLandingGearRight003_33"
                position={[0, -0.063, 0.346]}
                rotation={[1.489, 0, 0]}
              >
                <mesh
                  name="Object_68"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_68.geometry}
                  material={materials["Materiais.017"]}
                />
              </group>
              <group name="Plano_34" rotation={[1.558, 0, 0]} scale={0.263}>
                <mesh
                  name="Object_70"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_70.geometry}
                  material={materials["Materiais.018"]}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/assets/models/vehicles/aviao_da_gol.glb");