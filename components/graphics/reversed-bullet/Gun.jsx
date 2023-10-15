'use client'
import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Model(props) {
    const sectionOne = useRef()
    const sectionTwo = useRef()
    const scroll = useScroll()
    const { scene, materials, animations } = useGLTF("/a_pistol_that_fires.glb");
    const { ref, actions } = useAnimations(animations, group);
    useEffect(() => void (actions["Take 001"].reset().play().paused = true), [])
    useFrame(() => (actions["Take 001"].time = actions["Take 001"].getClip().duration * scroll.offset))
  
  
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
        }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="guidshoter_0" position={[14.09, 2.86, -60.3]}>
                <group name="gunshoter_1" position={[-14.084, -2.856, 64.08]}>
                  <mesh
                    name="Object_5"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_5.geometry}
                    material={materials.gunshoter_alb}
                  />
                </group>
              </group>
              <group name="gun_guid_2" position={[13.91, -6.28, -47.3]}>
                <group name="gunBB_3" position={[-13.91, 6.28, 47.3]}>
                  <group name="Box016_4">
                    <mesh
                      name="Object_9"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_9.geometry}
                      material={materials.gunBB__445_3d_B_fin_2spacer_alb}
                    />
                  </group>
                  <group name="gunADD3_5">
                    <mesh
                      name="Object_11"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_11.geometry}
                      material={materials.gunADD3_alb}
                    />
                  </group>
                  <group name="Box017_6">
                    <mesh
                      name="Object_13"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_13.geometry}
                      material={materials.gunBB__445_3d_B_fin_2spacer_alb}
                    />
                  </group>
                  <group name="Box018_7">
                    <mesh
                      name="Object_15"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_15.geometry}
                      material={materials.gunBB__445_3d_B_fin_2spacer_alb}
                    />
                  </group>
                  <group name="Box019_8">
                    <mesh
                      name="Object_17"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_17.geometry}
                      material={materials.gunBB__445_3d_B_fin_2spacer_alb}
                    />
                  </group>
                  <group name="Box020_9">
                    <mesh
                      name="Object_19"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_19.geometry}
                      material={materials.gunBB__445_3d_B_fin_2spacer_alb}
                    />
                  </group>
                  <group name="ChamferCyl001_10">
                    <mesh
                      name="Object_21"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_21.geometry}
                      material={materials.gunBB__445_3d_B_fin_2spacer_alb}
                    />
                  </group>
                  <group name="guidC_11" position={[14.06, 2.01, -52.29]}>
                    <group name="gunbox_12" position={[-14.06, -2.01, 52.29]}>
                      <mesh
                        name="Object_24"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_24.geometry}
                        material={materials.gunbox_alb}
                      />
                    </group>
                  </group>
                  <group name="Cylinder014_13">
                    <mesh
                      name="Object_26"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_26.geometry}
                      material={materials.gunBB__445_3d_B_fin_2spacer_alb}
                    />
                  </group>
                  <group name="Cylinder015_14">
                    <mesh
                      name="Object_28"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_28.geometry}
                      material={materials.gunBB__445_3d_B_fin_2spacer_alb}
                    />
                  </group>
                  <group name="Cylinder016_15">
                    <mesh
                      name="Object_30"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_30.geometry}
                      material={materials.gunBB__445_3d_B_fin_2spacer_alb}
                    />
                  </group>
                  <group name="Line019_16">
                    <mesh
                      name="Object_32"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_32.geometry}
                      material={materials.gunBB__445_3d_B_fin_2spacer_alb}
                    />
                  </group>
                  <group name="guidB_17" position={[14.06, -0.26, -53.754]}>
                    <group name="Line020_18" position={[-14.06, 0.277, 53.754]}>
                      <mesh
                        name="Object_35"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_35.geometry}
                        material={materials.gunBB__445_3d_B_fin_2spacer_alb}
                      />
                    </group>
                  </group>
                  <group name="Line022_19">
                    <mesh
                      name="Object_37"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_37.geometry}
                      material={materials.gunBB__445_3d_B_fin_2spacer_alb}
                    />
                  </group>
                  <group name="Object003_20">
                    <mesh
                      name="Object_39"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_39.geometry}
                      material={materials.gunBB__445_3d_B_fin_2spacer_alb}
                    />
                  </group>
                  <group name="Optimized_Optimized_Shape001_21">
                    <mesh
                      name="Object_41"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_41.geometry}
                      material={materials.gunBB__445_3d_B_fin_2spacer_alb_1}
                    />
                  </group>
                  <group
                    name="guidA_22"
                    position={[14.12, 3.27, -50.82]}
                    rotation={[0.381, 0, 0]}
                    scale={[0.858, 1, 1]}
                  >
                    <group name="Shape001_23" position={[-14.12, -3.27, 50.71]}>
                      <mesh
                        name="Object_44"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_44.geometry}
                        material={materials.gunBB__445_3d_B_fin_2spacer_alb}
                      />
                    </group>
                  </group>
                  <group name="Shape002_24">
                    <mesh
                      name="Object_46"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_46.geometry}
                      material={materials.gunBB__445_3d_B_fin_2spacer_alb_1}
                    />
                  </group>
                  <group name="Tube009_25">
                    <mesh
                      name="Object_48"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_48.geometry}
                      material={materials.gunBB__445_3d_B_fin_2spacer_alb}
                    />
                  </group>
                  <group name="Tube010_26">
                    <mesh
                      name="Object_50"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_50.geometry}
                      material={materials.gunBB__445_3d_B_fin_2spacer_alb}
                    />
                  </group>
                  <group name="Tube011_27">
                    <mesh
                      name="Object_52"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_52.geometry}
                      material={materials.gunBB__445_3d_B_fin_2spacer_alb}
                    />
                  </group>
                  <group name="Tube012_28">
                    <mesh
                      name="Object_54"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_54.geometry}
                      material={materials.gunBB__445_3d_B_fin_2spacer_alb}
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

useGLTF.preload("/a_pistol_that_fires.glb");


rembrandt

city
