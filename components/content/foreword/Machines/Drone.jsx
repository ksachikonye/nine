'use client'


import React, {  useEffect, Suspense } from "react";
import { useFrame, Canvas} from '@react-three/fiber'
import { useGLTF, useAnimations,  useScroll, ContactShadows, Float } from "@react-three/drei";
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
  const { nodes, materials, animations } = useGLTF("/assets/models/devices/flying_drone.glb");
  const { ref, actions } = useAnimations(animations)
  useEffect(() => void (actions[ "step_by_step"].reset().play().paused = true), [])
  useFrame(() => (actions[ "step_by_step"].time = actions[ "step_by_step"].getClip().duration * scroll.offset))
  return (
    <group ref={ref} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={11.07}
        >
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="RootNode0_0" scale={0.01}>
                <group name="skeletal1_1">
                  <group name="GLTF_created_0">
                    <primitive object={nodes.GLTF_created_0_rootJoint} />
                    <skinnedMesh
                      name="Object_96"
                      geometry={nodes.Object_96.geometry}
                      material={materials.material_0}
                      skeleton={nodes.Object_96.skeleton}
                    />
                    <skinnedMesh
                      name="Object_99"
                      geometry={nodes.Object_99.geometry}
                      material={materials.material_1}
                      skeleton={nodes.Object_99.skeleton}
                    />
                    <skinnedMesh
                      name="Object_102"
                      geometry={nodes.Object_102.geometry}
                      material={materials.material_2}
                      skeleton={nodes.Object_102.skeleton}
                    />
                    <skinnedMesh
                      name="Object_105"
                      geometry={nodes.Object_105.geometry}
                      material={materials.material_3}
                      skeleton={nodes.Object_105.skeleton}
                    />
                    <skinnedMesh
                      name="Object_108"
                      geometry={nodes.Object_108.geometry}
                      material={materials.material_4}
                      skeleton={nodes.Object_108.skeleton}
                    />
                    <skinnedMesh
                      name="Object_111"
                      geometry={nodes.Object_111.geometry}
                      material={materials.material_5}
                      skeleton={nodes.Object_111.skeleton}
                    />
                    <skinnedMesh
                      name="Object_114"
                      geometry={nodes.Object_114.geometry}
                      material={materials.material_6}
                      skeleton={nodes.Object_114.skeleton}
                    />
                    <skinnedMesh
                      name="Object_117"
                      geometry={nodes.Object_117.geometry}
                      material={materials.material_7}
                      skeleton={nodes.Object_117.skeleton}
                    />
                    <skinnedMesh
                      name="Object_120"
                      geometry={nodes.Object_120.geometry}
                      material={materials.material_8}
                      skeleton={nodes.Object_120.skeleton}
                    />
                    <skinnedMesh
                      name="Object_123"
                      geometry={nodes.Object_123.geometry}
                      material={materials.material_9}
                      skeleton={nodes.Object_123.skeleton}
                    />
                    <skinnedMesh
                      name="Object_126"
                      geometry={nodes.Object_126.geometry}
                      material={materials.material_10}
                      skeleton={nodes.Object_126.skeleton}
                    />
                    <skinnedMesh
                      name="Object_129"
                      geometry={nodes.Object_129.geometry}
                      material={materials.material_11}
                      skeleton={nodes.Object_129.skeleton}
                    />
                    <skinnedMesh
                      name="Object_132"
                      geometry={nodes.Object_132.geometry}
                      material={materials.material_12}
                      skeleton={nodes.Object_132.skeleton}
                    />
                    <skinnedMesh
                      name="Object_135"
                      geometry={nodes.Object_135.geometry}
                      material={materials.material_13}
                      skeleton={nodes.Object_135.skeleton}
                    />
                    <skinnedMesh
                      name="Object_138"
                      geometry={nodes.Object_138.geometry}
                      material={materials.material_14}
                      skeleton={nodes.Object_138.skeleton}
                    />
                    <skinnedMesh
                      name="Object_141"
                      geometry={nodes.Object_141.geometry}
                      material={materials.material_15}
                      skeleton={nodes.Object_141.skeleton}
                    />
                    <skinnedMesh
                      name="Object_144"
                      geometry={nodes.Object_144.geometry}
                      material={materials.material_16}
                      skeleton={nodes.Object_144.skeleton}
                    />
                    <skinnedMesh
                      name="Object_147"
                      geometry={nodes.Object_147.geometry}
                      material={materials.material_17}
                      skeleton={nodes.Object_147.skeleton}
                    />
                    <skinnedMesh
                      name="Object_150"
                      geometry={nodes.Object_150.geometry}
                      material={materials.material_18}
                      skeleton={nodes.Object_150.skeleton}
                    />
                    <skinnedMesh
                      name="Object_153"
                      geometry={nodes.Object_153.geometry}
                      material={materials.material_19}
                      skeleton={nodes.Object_153.skeleton}
                    />
                    <skinnedMesh
                      name="Object_156"
                      geometry={nodes.Object_156.geometry}
                      material={materials.material_20}
                      skeleton={nodes.Object_156.skeleton}
                    />
                    <skinnedMesh
                      name="Object_159"
                      geometry={nodes.Object_159.geometry}
                      material={materials.material_21}
                      skeleton={nodes.Object_159.skeleton}
                    />
                    <skinnedMesh
                      name="Object_162"
                      geometry={nodes.Object_162.geometry}
                      material={materials.material_22}
                      skeleton={nodes.Object_162.skeleton}
                    />
                    <skinnedMesh
                      name="Object_165"
                      geometry={nodes.Object_165.geometry}
                      material={materials.material_23}
                      skeleton={nodes.Object_165.skeleton}
                    />
                    <skinnedMesh
                      name="Object_168"
                      geometry={nodes.Object_168.geometry}
                      material={materials.material_24}
                      skeleton={nodes.Object_168.skeleton}
                    />
                    <skinnedMesh
                      name="Object_171"
                      geometry={nodes.Object_171.geometry}
                      material={materials.material_25}
                      skeleton={nodes.Object_171.skeleton}
                    />
                    <skinnedMesh
                      name="Object_174"
                      geometry={nodes.Object_174.geometry}
                      material={materials.material_26}
                      skeleton={nodes.Object_174.skeleton}
                    />
                    <skinnedMesh
                      name="Object_177"
                      geometry={nodes.Object_177.geometry}
                      material={materials.material_27}
                      skeleton={nodes.Object_177.skeleton}
                    />
                    <skinnedMesh
                      name="Object_180"
                      geometry={nodes.Object_180.geometry}
                      material={materials.material_28}
                      skeleton={nodes.Object_180.skeleton}
                    />
                    <skinnedMesh
                      name="Object_183"
                      geometry={nodes.Object_183.geometry}
                      material={materials.material_29}
                      skeleton={nodes.Object_183.skeleton}
                    />
                    <skinnedMesh
                      name="Object_186"
                      geometry={nodes.Object_186.geometry}
                      material={materials.material_30}
                      skeleton={nodes.Object_186.skeleton}
                    />
                    <skinnedMesh
                      name="Object_189"
                      geometry={nodes.Object_189.geometry}
                      material={materials.material_31}
                      skeleton={nodes.Object_189.skeleton}
                    />
                    <skinnedMesh
                      name="Object_192"
                      geometry={nodes.Object_192.geometry}
                      material={materials.material_32}
                      skeleton={nodes.Object_192.skeleton}
                    />
                    <skinnedMesh
                      name="Object_195"
                      geometry={nodes.Object_195.geometry}
                      material={materials.material_33}
                      skeleton={nodes.Object_195.skeleton}
                    />
                    <skinnedMesh
                      name="Object_198"
                      geometry={nodes.Object_198.geometry}
                      material={materials.material_34}
                      skeleton={nodes.Object_198.skeleton}
                    />
                    <skinnedMesh
                      name="Object_201"
                      geometry={nodes.Object_201.geometry}
                      material={materials.material_35}
                      skeleton={nodes.Object_201.skeleton}
                    />
                    <skinnedMesh
                      name="Object_204"
                      geometry={nodes.Object_204.geometry}
                      material={materials.material_36}
                      skeleton={nodes.Object_204.skeleton}
                    />
                    <skinnedMesh
                      name="Object_207"
                      geometry={nodes.Object_207.geometry}
                      material={materials.material_37}
                      skeleton={nodes.Object_207.skeleton}
                    />
                    <skinnedMesh
                      name="Object_210"
                      geometry={nodes.Object_210.geometry}
                      material={materials.material_38}
                      skeleton={nodes.Object_210.skeleton}
                    />
                    <skinnedMesh
                      name="Object_213"
                      geometry={nodes.Object_213.geometry}
                      material={materials.material_39}
                      skeleton={nodes.Object_213.skeleton}
                    />
                    <skinnedMesh
                      name="Object_216"
                      geometry={nodes.Object_216.geometry}
                      material={materials.material_40}
                      skeleton={nodes.Object_216.skeleton}
                    />
                    <skinnedMesh
                      name="Object_219"
                      geometry={nodes.Object_219.geometry}
                      material={materials.material_41}
                      skeleton={nodes.Object_219.skeleton}
                    />
                    <skinnedMesh
                      name="Object_222"
                      geometry={nodes.Object_222.geometry}
                      material={materials.material_42}
                      skeleton={nodes.Object_222.skeleton}
                    />
                    <skinnedMesh
                      name="Object_225"
                      geometry={nodes.Object_225.geometry}
                      material={materials.material_43}
                      skeleton={nodes.Object_225.skeleton}
                    />
                    <skinnedMesh
                      name="Object_228"
                      geometry={nodes.Object_228.geometry}
                      material={materials.material_44}
                      skeleton={nodes.Object_228.skeleton}
                    />
                    <skinnedMesh
                      name="Object_231"
                      geometry={nodes.Object_231.geometry}
                      material={materials.material_45}
                      skeleton={nodes.Object_231.skeleton}
                    />
                    <skinnedMesh
                      name="Object_234"
                      geometry={nodes.Object_234.geometry}
                      material={materials.material_46}
                      skeleton={nodes.Object_234.skeleton}
                    />
                    <skinnedMesh
                      name="Object_237"
                      geometry={nodes.Object_237.geometry}
                      material={materials.material_47}
                      skeleton={nodes.Object_237.skeleton}
                    />
                    <skinnedMesh
                      name="Object_240"
                      geometry={nodes.Object_240.geometry}
                      material={materials.material_48}
                      skeleton={nodes.Object_240.skeleton}
                    />
                    <skinnedMesh
                      name="Object_243"
                      geometry={nodes.Object_243.geometry}
                      material={materials.material_49}
                      skeleton={nodes.Object_243.skeleton}
                    />
                    <skinnedMesh
                      name="Object_246"
                      geometry={nodes.Object_246.geometry}
                      material={materials.material_50}
                      skeleton={nodes.Object_246.skeleton}
                    />
                    <skinnedMesh
                      name="Object_249"
                      geometry={nodes.Object_249.geometry}
                      material={materials.material_51}
                      skeleton={nodes.Object_249.skeleton}
                    />
                    <skinnedMesh
                      name="Object_252"
                      geometry={nodes.Object_252.geometry}
                      material={materials.material_52}
                      skeleton={nodes.Object_252.skeleton}
                    />
                    <skinnedMesh
                      name="Object_255"
                      geometry={nodes.Object_255.geometry}
                      material={materials.material_53}
                      skeleton={nodes.Object_255.skeleton}
                    />
                    <skinnedMesh
                      name="Object_258"
                      geometry={nodes.Object_258.geometry}
                      material={materials.material_54}
                      skeleton={nodes.Object_258.skeleton}
                    />
                    <skinnedMesh
                      name="Object_261"
                      geometry={nodes.Object_261.geometry}
                      material={materials.material_55}
                      skeleton={nodes.Object_261.skeleton}
                    />
                    <skinnedMesh
                      name="Object_264"
                      geometry={nodes.Object_264.geometry}
                      material={materials.material_56}
                      skeleton={nodes.Object_264.skeleton}
                    />
                    <skinnedMesh
                      name="Object_267"
                      geometry={nodes.Object_267.geometry}
                      material={materials.material_57}
                      skeleton={nodes.Object_267.skeleton}
                    />
                    <skinnedMesh
                      name="Object_270"
                      geometry={nodes.Object_270.geometry}
                      material={materials.material_58}
                      skeleton={nodes.Object_270.skeleton}
                    />
                    <skinnedMesh
                      name="Object_273"
                      geometry={nodes.Object_273.geometry}
                      material={materials.material_59}
                      skeleton={nodes.Object_273.skeleton}
                    />
                    <skinnedMesh
                      name="Object_276"
                      geometry={nodes.Object_276.geometry}
                      material={materials.material_60}
                      skeleton={nodes.Object_276.skeleton}
                    />
                    <skinnedMesh
                      name="Object_279"
                      geometry={nodes.Object_279.geometry}
                      material={materials.material_61}
                      skeleton={nodes.Object_279.skeleton}
                    />
                    <skinnedMesh
                      name="Object_282"
                      geometry={nodes.Object_282.geometry}
                      material={materials.material_62}
                      skeleton={nodes.Object_282.skeleton}
                    />
                    <skinnedMesh
                      name="Object_285"
                      geometry={nodes.Object_285.geometry}
                      material={materials.material_63}
                      skeleton={nodes.Object_285.skeleton}
                    />
                    <skinnedMesh
                      name="Object_288"
                      geometry={nodes.Object_288.geometry}
                      material={materials.material_64}
                      skeleton={nodes.Object_288.skeleton}
                    />
                    <skinnedMesh
                      name="Object_291"
                      geometry={nodes.Object_291.geometry}
                      material={materials.material_65}
                      skeleton={nodes.Object_291.skeleton}
                    />
                    <skinnedMesh
                      name="Object_294"
                      geometry={nodes.Object_294.geometry}
                      material={materials.material_66}
                      skeleton={nodes.Object_294.skeleton}
                    />
                    <skinnedMesh
                      name="Object_297"
                      geometry={nodes.Object_297.geometry}
                      material={materials.material_67}
                      skeleton={nodes.Object_297.skeleton}
                    />
                    <skinnedMesh
                      name="Object_300"
                      geometry={nodes.Object_300.geometry}
                      material={materials.material_68}
                      skeleton={nodes.Object_300.skeleton}
                    />
                    <skinnedMesh
                      name="Object_303"
                      geometry={nodes.Object_303.geometry}
                      material={materials.material_69}
                      skeleton={nodes.Object_303.skeleton}
                    />
                    <skinnedMesh
                      name="Object_306"
                      geometry={nodes.Object_306.geometry}
                      material={materials.material_70}
                      skeleton={nodes.Object_306.skeleton}
                    />
                    <skinnedMesh
                      name="Object_309"
                      geometry={nodes.Object_309.geometry}
                      material={materials.material_71}
                      skeleton={nodes.Object_309.skeleton}
                    />
                    <skinnedMesh
                      name="Object_312"
                      geometry={nodes.Object_312.geometry}
                      material={materials.material_72}
                      skeleton={nodes.Object_312.skeleton}
                    />
                    <skinnedMesh
                      name="Object_315"
                      geometry={nodes.Object_315.geometry}
                      material={materials.material_73}
                      skeleton={nodes.Object_315.skeleton}
                    />
                    <skinnedMesh
                      name="Object_318"
                      geometry={nodes.Object_318.geometry}
                      material={materials.material_74}
                      skeleton={nodes.Object_318.skeleton}
                    />
                    <skinnedMesh
                      name="Object_321"
                      geometry={nodes.Object_321.geometry}
                      material={materials.material_75}
                      skeleton={nodes.Object_321.skeleton}
                    />
                    <skinnedMesh
                      name="Object_324"
                      geometry={nodes.Object_324.geometry}
                      material={materials.material_76}
                      skeleton={nodes.Object_324.skeleton}
                    />
                    <group name="small_part_plate_190_90_correction">
                      <group name="small_part_plate_190_90" />
                    </group>
                    <group name="small_part_scew_fittings91_91_correction">
                      <group name="small_part_scew_fittings91_91" />
                    </group>
                    <group name="small_part_plate_292_92_correction">
                      <group name="small_part_plate_292_92" />
                    </group>
                    <group name="top_board93_93_correction">
                      <group name="top_board93_93" />
                    </group>
                    <group name="screw_194_94_correction">
                      <group name="screw_194_94" />
                    </group>
                    <group name="screw_295_95_correction">
                      <group name="screw_295_95" />
                    </group>
                    <group name="screw_396_96_correction">
                      <group name="screw_396_96" />
                    </group>
                    <group name="screw_497_97_correction">
                      <group name="screw_497_97" />
                    </group>
                    <group name="receiver_middle_board98_98_correction">
                      <group name="receiver_middle_board98_98" />
                    </group>
                    <group name="receiver_input99_99_correction">
                      <group name="receiver_input99_99" />
                    </group>
                    <group name="receiver100_100_correction">
                      <group name="receiver100_100" />
                    </group>
                    <group name="battery_input101_101_correction">
                      <group name="battery_input101_101" />
                    </group>
                    <group name="battery102_102_correction">
                      <group name="battery102_102" />
                    </group>
                    <group name="bottom_frame103_103_correction">
                      <group name="bottom_frame103_103" />
                    </group>
                    <group name="big_plate_screw_fittings104_104_correction">
                      <group name="big_plate_screw_fittings104_104" />
                    </group>
                    <group name="middle_screw_1105_105_correction">
                      <group name="middle_screw_1105_105" />
                    </group>
                    <group name="middle_screw_2106_106_correction">
                      <group name="middle_screw_2106_106" />
                    </group>
                    <group name="middle_screw_3107_107_correction">
                      <group name="middle_screw_3107_107" />
                    </group>
                    <group name="middle_screw_4108_108_correction">
                      <group name="middle_screw_4108_108" />
                    </group>
                    <group name="middle_screw_5109_109_correction">
                      <group name="middle_screw_5109_109" />
                    </group>
                    <group name="middle_screw_6110_110_correction">
                      <group name="middle_screw_6110_110" />
                    </group>
                    <group name="lower_body111_111_correction">
                      <group name="lower_body111_111" />
                    </group>
                    <group name="bottom_venting112_112_correction">
                      <group name="bottom_venting112_112" />
                    </group>
                    <group name="upper_body113_113_correction">
                      <group name="upper_body113_113" />
                    </group>
                    <group name="camera_base114_114_correction">
                      <group name="camera_base114_114" />
                    </group>
                    <group name="camera_fitting_screw_1115_115_correction">
                      <group name="camera_fitting_screw_1115_115" />
                    </group>
                    <group name="camera_fitting_screw_2116_116_correction">
                      <group name="camera_fitting_screw_2116_116" />
                    </group>
                    <group name="camera_fitting_screw_3117_117_correction">
                      <group name="camera_fitting_screw_3117_117" />
                    </group>
                    <group name="camera_fitting_screw_4118_118_correction">
                      <group name="camera_fitting_screw_4118_118" />
                    </group>
                    <group name="camera119_119_correction">
                      <group name="camera119_119" />
                    </group>
                    <group name="camera_screw_1120_120_correction">
                      <group name="camera_screw_1120_120" />
                    </group>
                    <group name="camera_screw_2121_121_correction">
                      <group name="camera_screw_2121_121" />
                    </group>
                    <group name="camera_screw_3122_122_correction">
                      <group name="camera_screw_3122_122" />
                    </group>
                    <group name="leg_1123_123_correction">
                      <group name="leg_1123_123" />
                    </group>
                    <group name="leg_2124_124_correction">
                      <group name="leg_2124_124" />
                    </group>
                    <group name="leg_3125_125_correction">
                      <group name="leg_3125_125" />
                    </group>
                    <group name="leg_4126_126_correction">
                      <group name="leg_4126_126" />
                    </group>
                    <group name="prop_1127_127_correction">
                      <group name="prop_1127_127" />
                    </group>
                    <group name="prop_motor_bolt_1128_128_correction">
                      <group name="prop_motor_bolt_1128_128" />
                    </group>
                    <group name="motor_1129_129_correction">
                      <group name="motor_1129_129" />
                    </group>
                    <group name="prop_2130_130_correction">
                      <group name="prop_2130_130" />
                    </group>
                    <group name="prop_motor_bolt_2131_131_correction">
                      <group name="prop_motor_bolt_2131_131" />
                    </group>
                    <group name="motor_2132_132_correction">
                      <group name="motor_2132_132" />
                    </group>
                    <group name="prop_3133_133_correction">
                      <group name="prop_3133_133" />
                    </group>
                    <group name="prop_motor_bolt_3134_134_correction">
                      <group name="prop_motor_bolt_3134_134" />
                    </group>
                    <group name="motor_3135_135_correction">
                      <group name="motor_3135_135" />
                    </group>
                    <group name="prop_4136_136_correction">
                      <group name="prop_4136_136" />
                    </group>
                    <group name="prop_motor_bolt_4137_137_correction">
                      <group name="prop_motor_bolt_4137_137" />
                    </group>
                    <group name="motor_4138_138_correction">
                      <group name="motor_4138_138" />
                    </group>
                    <group name="prop_bolt_nut_1139_139_correction">
                      <group name="prop_bolt_nut_1139_139" />
                    </group>
                    <group name="prop_bolt_nut_2140_140_correction">
                      <group name="prop_bolt_nut_2140_140" />
                    </group>
                    <group name="prop_bolt_nut_3141_141_correction">
                      <group name="prop_bolt_nut_3141_141" />
                    </group>
                    <group name="prop_bolt_nut_4142_142_correction">
                      <group name="prop_bolt_nut_4142_142" />
                    </group>
                    <group name="prop_bolt_cap_1143_143_correction">
                      <group name="prop_bolt_cap_1143_143" />
                    </group>
                    <group name="prop_bolt_cap_2144_144_correction">
                      <group name="prop_bolt_cap_2144_144" />
                    </group>
                    <group name="prop_bolt_cap_3145_145_correction">
                      <group name="prop_bolt_cap_3145_145" />
                    </group>
                    <group name="prop_bolt_cap_4146_146_correction">
                      <group name="prop_bolt_cap_4146_146" />
                    </group>
                    <group name="prop_motor_base_1147_147_correction">
                      <group name="prop_motor_base_1147_147" />
                    </group>
                    <group name="prop_motor_base_2148_148_correction">
                      <group name="prop_motor_base_2148_148" />
                    </group>
                    <group name="prop_motor_base_3149_149_correction">
                      <group name="prop_motor_base_3149_149" />
                    </group>
                    <group name="prop_motor_base_4150_150_correction">
                      <group name="prop_motor_base_4150_150" />
                    </group>
                    <group name="motor_base_screw_a_1151_151_correction">
                      <group name="motor_base_screw_a_1151_151" />
                    </group>
                    <group name="motor_base_screw_a_2152_152_correction">
                      <group name="motor_base_screw_a_2152_152" />
                    </group>
                    <group name="motor_base_screw_a_3153_153_correction">
                      <group name="motor_base_screw_a_3153_153" />
                    </group>
                    <group name="motor_base_screw_a_4154_154_correction">
                      <group name="motor_base_screw_a_4154_154" />
                    </group>
                    <group name="motor_base_screw_b_1155_155_correction">
                      <group name="motor_base_screw_b_1155_155" />
                    </group>
                    <group name="motor_base_screw_b_2156_156_correction">
                      <group name="motor_base_screw_b_2156_156" />
                    </group>
                    <group name="motor_base_screw_b_3157_157_correction">
                      <group name="motor_base_screw_b_3157_157" />
                    </group>
                    <group name="motor_base_screw_b_4158_158_correction">
                      <group name="motor_base_screw_b_4158_158" />
                    </group>
                    <group name="motor_base_screw_c_1159_159_correction">
                      <group name="motor_base_screw_c_1159_159" />
                    </group>
                    <group name="motor_base_screw_c_2160_160_correction">
                      <group name="motor_base_screw_c_2160_160" />
                    </group>
                    <group name="motor_base_screw_c_3161_161_correction">
                      <group name="motor_base_screw_c_3161_161" />
                    </group>
                    <group name="motor_base_screw_c_4162_162_correction">
                      <group name="motor_base_screw_c_4162_162" />
                    </group>
                    <group name="motor_base_screw_d_1163_163_correction">
                      <group name="motor_base_screw_d_1163_163" />
                    </group>
                    <group name="motor_base_screw_d_2164_164_correction">
                      <group name="motor_base_screw_d_2164_164" />
                    </group>
                    <group name="motor_base_screw_d_3165_165_correction">
                      <group name="motor_base_screw_d_3165_165" />
                    </group>
                    <group name="motor_base_screw_d_4166_166_correction">
                      <group name="motor_base_screw_d_4166_166" />
                    </group>
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

useGLTF.preload("/assets/models/devices/flying_drone.glb");

export default function Drone() {
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


