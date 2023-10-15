'use client'

import React, { useRef, useMemo } from 'react'
import { useGLTF, Merged } from '@react-three/drei'

export default function InstancedModel(props) {
  const { nodes } = useGLTF('/models/engines/scene-draco.glb')
  const instances = useMemo(
    () => ({
      PPushrod: nodes['196-P-050&051_Pushrod001'],
      PEndLowerforPushrod: nodes['196-P-052_End_Lower_for_Pushrod001'],
      PEndUpperforPushrod: nodes['196-P-053_End_Upper_for_Pushrod001'],
      BearingNeedleRollerPreviewCfg: nodes['Bearing_Needle-Roller_06-15-10_PreviewCfg001'],
      PinforPushrod: nodes.Pin_for_Pushrod001,
      PGasketforPushrods: nodes['196-P-086_Gasket_for_Pushrods001'],
      PGuideforPushrods: nodes['196-P-101_Guide_for_Pushrods002'],
      PGuideforPushrods1: nodes['196-P-101_Guide_for_Pushrods003'],
      ScrewMCapHdSSMx: nodes['Screw_M6_Cap-Hd_SS_M6_x_12001'],
      PSleeveforCylinder: nodes['196-P-020_Sleeve_for_Cylinder001'],
      PDrainforOil: nodes['196-P-031_Drain_for_Oil001'],
      PGasketforCylinderHead: nodes['196-P-075_Gasket_for_Cylinder-Head001'],
      PGasketforCylinderBase: nodes['196-P-077_Gasket_for_Cylinder-Base001'],
      ORingOringxAISO: nodes['O-Ring_9-18_O-ring_9x18-A-ISO_3601-1001'],
      ScrewMCapHdSSMx1: nodes['Screw_M10_Cap-Hd_SS_M10_x_25001'],
      ScrewMCapHdSSMx2: nodes['Screw_M10_Cap-Hd_SS_M10_x_45001'],
      PPiston: nodes['196-P-021_Piston001'],
      PPistonRingA: nodes['196-P-022_Piston_Ring_A001'],
      PPistonRingB: nodes['196-P-023_Piston_Ring_B001'],
      PPistonRingC: nodes['196-P-024_Piston_Ring_C001'],
      PGidgionPin: nodes['196-P-025_Gidgion_Pin001'],
      BearingNeedleRollerPreviewCfg1: nodes['Bearing_Needle-Roller_14-20-17_PreviewCfg001'],
      CirclipExternalBSSM: nodes['Circlip_External_BS_3673-4_-_S014M001'],
      PinforPiston: nodes.Pin_for_Piston001,
      PPushrodLong: nodes['196-P-050&051_Pushrod_Long001'],
      KeyxxR: nodes['Key_12x8x12-R001'],
      PThrotleBodyCast: nodes['196-P-091_Throtle-Body_Cast001'],
      PAxleforThrottleBody: nodes['196-P-092_Axle_for_Throttle-Body001'],
      PBracketforThrottleBodies: nodes['196-P-096_Bracket_for_Throttle-Bodies001'],
      PDiskforThrottleBody: nodes['196-P-098_Disk_for_Throttle-Body001'],
      PWheelforThrottleBodies: nodes['196-P-100_Wheel_for_Throttle-Bodies001'],
      CableforThrottlesMx: nodes.Cable_for_Throttles_M6x10004,
      CableforThrottlesMx1: nodes.Cable_for_Throttles_M6x10005,
      CableforThrottlesMx2: nodes.Cable_for_Throttles_M6x10006,
      CableforThrottlesMx3: nodes.Cable_for_Throttles_M6x10007,
      CirclipExternalBSSM1: nodes['Circlip_External_BS_3673-4_-_S006M001'],
      InjectorApriliaSXV: nodes.Injector_Aprilia_450_SXV004,
      InjectorApriliaSXV1: nodes.Injector_Aprilia_450_SXV006,
      InjectorApriliaSXV2: nodes.Injector_Aprilia_450_SXV007,
      InjectorApriliaSXV3: nodes.Injector_Aprilia_450_SXV010,
      NutFullSSM: nodes.Nut_Full_SS_M06001,
      PlainBearingIgusGFM: nodes['Plain_Bearing_Igus_GFM-0608-07001'],
      ScrewMPanHdSSMx: nodes['Screw_M25_Pan-Hd_SS_M25_x_06001'],
      ScrewMPanHdSSMx1: nodes['Screw_M25_Pan-Hd_SS_M25_x_08001'],
      ScrewMCapHdSSMx3: nodes['Screw_M4_Cap-Hd_SS_M4_x_12001'],
      WasherPlainSSM: nodes.Washer_Plain_SS_M02001,
      WasherPlainSSM1: nodes.Washer_Plain_SS_M04001,
      WasherPlainSSM2: nodes.Washer_Plain_SS_M06001,
      WasherSpringSSM: nodes.Washer_Spring_SS_M02001,
      WasherSpringSSM1: nodes.Washer_Spring_SS_M04001,
      WasherSpringSSM2: nodes.Washer_Spring_SS_M06001,
      SNGE: nodes['SNGE_17-40100_____________014'],
      SNGE1: nodes['SNGE_17-40200_____________014'],
      SNGE2: nodes['SNGE_17-40300_____________014'],
      SNGE3: nodes['SNGE_17-40400_____________014'],
      SNGE4: nodes['SNGE_17-405014'],
      SNGE5: nodes['SNGE_17-40600_____________014'],
      SNGE6: nodes['SNGE_17-407014'],
      PPlateforOilSupply: nodes['196-P-027_Plate_for_Oil-Supply001'],
      PPlateforRockerAxles: nodes['196-P-028_Plate_for_Rocker-Axles001'],
      PAxleforRocker: nodes['196-P-029_Axle_for_Rocker001'],
      PCoverMx: nodes['196-P-030_Cover_M20x1001'],
      PValveInlet: nodes['196-P-035_Valve_Inlet001'],
      PValveExhaust: nodes['196-P-036_Valve_Exhaust001'],
      PValveGuideInlet: nodes['196-P-037_Valve-Guide_Inlet001'],
      PValveGuideExhaust: nodes['196-P-038_Valve_Guide_Exhaust001'],
      PTopforValve: nodes['196-P-039_Top_for_Valve001'],
      PColletforValve: nodes['196-P-040_Collet_for_Valve001'],
      PSliderforPushrod: nodes['196-P-054_Slider_for_Pushrod001'],
      PInletManifold: nodes['196-P-061_Inlet-Manifold001'],
      PTappet: nodes['196-P-062_Tappet001'],
      PBallforTappet: nodes['196-P-063_Ball_for_Tappet001'],
      PGasketforRockerBox: nodes['196-P-078_Gasket_for_Rocker-Box001'],
      PGasketforRockerCover: nodes['196-P-079_Gasket_for_Rocker-Cover001'],
      PGasketforInletManifold: nodes['196-P-080_Gasket_for_Inlet-Manifold001'],
      PGasketforOilSupplyPlate: nodes['196-P-089_Gasket_for_Oil-Supply-Plate001'],
      PGasketforRockerAxlesPlate: nodes['196-P-090_Gasket_for_Rocker-Axles-Plate001'],
      PScrewSpecialAforOilMx: nodes['196-P-102_Screw_Special_A_for_Oil_M6x10001'],
      PHoseTailMformmPipe: nodes['196-P-106_Hose-Tail_M16_for_16mm-Pipe001'],
      PWasherforRocker: nodes['196-P-111_Washer_for_Rocker001'],
      BearingNeedleRollerISOCDEA: nodes['Bearing_Needle-Roller_12-15-17_ISO_3030_-_61C1215_-_22,DE,A'],
      BondedSealMhydroscand: nodes['Bonded-Seal_M16_5601-02-16-hydroscand001'],
      Fittingumixjes: nodes['Fitting_umi_-_06_x_je_813_s001'],
      JubileeClipfor: nodes.Jubilee_Clip_for_44001,
      NutHalfSSM: nodes.Nut_Half_SS_M06001,
      ORingxOringxAISO: nodes['O-Ring_18x265_O-ring_18x265-A-ISO_3601-1001'],
      ORingforCoverOringxAISO: nodes['O-Ring_for_Cover_O-ring_212x265-A-ISO_3601-1001'],
      ScrewMCapHdSSMx4: nodes['Screw_M5_Cap-Hd_SS_M5x12001'],
      ScrewMCapHdSSMx5: nodes['Screw_M6_Cap-Hd_SS_M6_x_16001'],
      ScrewMCapHdSSMx6: nodes['Screw_M6_Cap-Hd_SS_M6_x_35001'],
      SpringInnerforValve: nodes.Spring_Inner_for_Valve001,
      SpringOuterforValve: nodes.Spring_Outer_for_Valve001,
      MagnetMisumiHXNH: nodes.Magnet_Misumi_HXNH_15_5009,
      PClampforCrank: nodes['196-P-019_Clamp_for_Crank001'],
      PWasherforBigEndBearings: nodes['196-P-108_Washer_for_Big-End-Bearings001'],
      BearingNeedleRollerPreviewCfg2: nodes['Bearing_Needle-Roller_25-31-17_PreviewCfg001'],
      ScrewMCapHdSSISOMxS: nodes['Screw_M8_Cap-Hd_SS_ISO_4762_M8_x_25_---_25S001'],
      WasherMudguardSSMx: nodes.Washer_Mudguard_SS_M8x30001,
      ScrewMCapHdSSMx7: nodes['Screw_M5_Cap-Hd_SS_M5x16001'],
      ScrewMCapHdSSMx8: nodes['Screw_M5_Cap-Hd_SS_M5x45001'],
      NJECMLPART: nodes._NJ_2306_ECML_PART1003,
      NJECMLPART1: nodes._NJ_2306_ECML_PART2003,
      NJECMLPART2: nodes._NJ_2306_ECML_PART3025,
      PScrewSpecialBforOilMx: nodes['196-P-103_Screw_Special_B_for_Oil_M6x10001'],
      PlainBearingIgusGFM1: nodes['Plain_Bearing_Igus_GFM-1012-17001'],
      WasherMCopperWasherISO: nodes['Washer_M6_Copper_Washer_ISO_7092_-_6001'],
      MagnetMisumiHXNH1: nodes.Magnet_Misumi_HXNH_6_10001,
      ScrewMCapHdSSMx9: nodes['Screw_M5_Cap-Hd_SS_M5x10001'],
      ScrewMCapHdSSMx11: nodes['Screw_M6_Cap-Hd_SS_M6_x_25001'],
      PBackingPlateforGenerator: nodes['196-P-055_Backing-Plate_for_Generator003'],
      PBackingPlateforGenerator1: nodes['196-P-055_Backing-Plate_for_Generator004'],
      PBackingPlateforGenerator2: nodes['196-P-055_Backing-Plate_for_Generator007'],
      PFormerforGeneratorCoil: nodes['196-P-056_Former_for_Generator-Coil001'],
      PScrewforGenerator: nodes['196-P-105_Screw_for_Generator001'],
      CoilforGenerator: nodes.Coil_for_Generator001,
      ScrewMPanHdSSMx2: nodes['Screw_M4_Pan-Hd_SS_M4_x_12001'],
      StandoffHexMFSteelMx: nodes['Standoff_Hex_M-F_Steel_M4x30001'],
      PCoverforElectric: nodes['196-P-059_Cover_for_Electric001'],
      CableGlandsMetalM1: nodes.Cable_Glands_Metal_M12001,
      Fittingumixjes1: nodes['Fitting_umi_-_08_x_je_813_s001'],
      NutCastleMDIN1: nodes['Nut,_Castle,_M6,_DIN935001'],
      PlainBearingIgusGFM2: nodes['Plain_Bearing_Igus_GFM-1012-09001'],
      SplitPinM1: nodes.Split_Pin_M6001,
      PClampforExhaust: nodes['196-P-041_Clamp_for_Exhaust001'],
      PColletforExhaust: nodes['196-P-042_Collet_for_Exhaust001'],
      PGasketforExhaust: nodes['196-P-076_Gasket_for_Exhaust001'],
      ScrewMCapHdSSMx12: nodes['Screw_M6_Cap-Hd_SS_M6_x_20001'],
      PScrewSpecialCforOilMx: nodes['196-P-104_Screw_Special_C_for_Oil_M8x10001'],
      ScrewMCapHdSSMx13: nodes['Screw_M4_Cap-Hd_SS_M4_x_08001'],
      WasherMCopperWasherISO1: nodes['Washer_M8_Copper_Washer_ISO_7092_-_8001'],
      Object4: nodes.Object966
    }),
    [nodes]
  )
  return (
    <Merged meshes={instances} {...props}>
      {(instances) => <Model instances={instances} />}
    </Merged>
  )
}

function Model({ instances, ...props }) {
  const group = useRef()
  const { nodes } = useGLTF('/scene-draco.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh castShadow receiveShadow geometry={nodes.filter001.geometry} material={nodes.filter001.material} position={[0.185, -0.096, 0.171]} rotation={[Math.PI / 2, 0, -1.6379]} />
        <mesh castShadow receiveShadow geometry={nodes.kate1001.geometry} material={nodes.kate1001.material} position={[0.185, 0.11, 0.171]} rotation={[Math.PI / 2, 0, 3.1309]} />
        <mesh castShadow receiveShadow geometry={nodes.kate2001.geometry} material={nodes.kate2001.material} position={[0.185, 0.092, 0.171]} rotation={[Math.PI / 2, 0, 1.8527]} />
        <mesh castShadow receiveShadow geometry={nodes.klapp001.geometry} material={nodes.klapp001.material} position={[0.185, 0.054, 0.171]} rotation={[Math.PI / 2, 0, -2.3953]} />
        <mesh castShadow receiveShadow geometry={nodes.korpus001.geometry} material={nodes.korpus001.material} position={[0.185, -0.118, 0.171]} rotation={[Math.PI / 2, 0, 3.1309]} />
        <mesh castShadow receiveShadow geometry={nodes.tihend001.geometry} material={nodes.tihend001.material} position={[0.185, 0.117, 0.171]} rotation={[Math.PI / 2, 0, 3.1309]} />
        <mesh castShadow receiveShadow geometry={nodes.vedru001.geometry} material={nodes.vedru001.material} position={[0.1852, -0.1166, 0.1723]} rotation={[1.5709, 0.0121, 3.1309]} />
        <mesh castShadow receiveShadow geometry={nodes.võre001.geometry} material={nodes.võre001.material} position={[0.185, -0.092, 0.171]} rotation={[Math.PI / 2, 0, 3.1309]} />
        <instances.PPushrod position={[-0.0529, -0.054, -0.2329]} rotation={[-0.1895, -0.7764, 3.008]} />
        <instances.PEndLowerforPushrod position={[-0.0317, -0.054, -0.2117]} rotation={[0, Math.PI / 4, -Math.PI]} />
        <instances.PEndUpperforPushrod position={[-0.3549, -0.054, -0.5349]} rotation={[0, Math.PI / 4, 3.1396]} />
        <instances.BearingNeedleRollerPreviewCfg position={[-0.0317, -0.054, -0.2117]} rotation={[0, -0.9202, -Math.PI / 2]} />
        <instances.PinforPushrod position={[-0.0317, -0.054, -0.2117]} rotation={[0, -Math.PI / 4, -Math.PI]} />
        <instances.PGasketforPushrods position={[-0.0663, -0.006, -0.2463]} rotation={[Math.PI, -Math.PI / 4, Math.PI / 2]} />
        <instances.PGuideforPushrods position={[-0.2063, 0.042, -0.3863]} rotation={[0, -Math.PI / 4, Math.PI]} />
        <instances.PGuideforPushrods1 position={[-0.2063, 0.042, -0.3863]} rotation={[0, -Math.PI / 4, Math.PI]} />
        <instances.ScrewMCapHdSSMx position={[-0.0861, 0.078, -0.2519]} rotation={[-1.855, 0.2734, -0.746]} />
        <instances.ScrewMCapHdSSMx position={[-0.0861, -0.09, -0.2519]} rotation={[-1.855, 0.2734, -0.746]} />
        <instances.ScrewMCapHdSSMx position={[-0.0535, -0.038, -0.2845]} rotation={[-1.855, 0.2734, -0.746]} />
        <instances.ScrewMCapHdSSMx position={[-0.0535, 0.026, -0.2845]} rotation={[-1.855, 0.2734, -0.746]} />
        <mesh castShadow receiveShadow geometry={nodes['196-P-012&013_Cylinder_Outer001'].geometry} material={nodes['196-P-012&013_Cylinder_Outer001'].material} position={[0.1563, 0.018, -0.1563]} rotation={[0, -Math.PI / 4, Math.PI / 2]} />
        <instances.PSleeveforCylinder position={[0.1945, 0.018, -0.1945]} rotation={[0, Math.PI / 4, Math.PI / 2]} />
        <instances.PDrainforOil position={[0.2314, 0.078, -0.056]} rotation={[1.2277, 0.3245, -0.7287]} />
        <instances.PGasketforCylinderHead position={[0.2977, 0.018, -0.2977]} rotation={[-Math.PI, Math.PI / 4, Math.PI / 2]} />
        <instances.PGasketforCylinderBase position={[0.1556, 0.018, -0.1556]} rotation={[0, -Math.PI / 4, -Math.PI / 2]} />
        <instances.ORingOringxAISO position={[0.2377, 0.078, -0.0624]} rotation={[0.1308, 0.7811, 1.4785]} />
        <instances.ORingOringxAISO position={[0.3909, 0.078, -0.2155]} rotation={[0.9095, 0.5507, 0.9788]} />
        <instances.ScrewMCapHdSSMx1 position={[0.1287, 0.113, -0.2489]} rotation={[1.3404, 0.2245, 2.3823]} />
        <instances.ScrewMCapHdSSMx1 position={[0.2489, 0.113, -0.1287]} rotation={[1.2183, 0.3324, 2.4159]} />
        <instances.ScrewMCapHdSSMx1 position={[0.1287, -0.077, -0.2489]} rotation={[1.9896, -0.3862, 2.4393]} />
        <instances.ScrewMCapHdSSMx1 position={[0.2489, -0.077, -0.1287]} rotation={[1.7489, -0.1754, 2.3719]} />
        <instances.ScrewMCapHdSSMx2 position={[0.1775, -0.072, -0.3048]} rotation={[-Math.PI / 2, 0, Math.PI / 4]} />
        <instances.ScrewMCapHdSSMx2 position={[0.3048, 0.108, -0.1775]} rotation={[-Math.PI / 2, 0, Math.PI / 4]} />
        <instances.ScrewMCapHdSSMx2 position={[0.1775, 0.108, -0.3048]} rotation={[-Math.PI / 2, 0, Math.PI / 4]} />
        <instances.ScrewMCapHdSSMx2 position={[0.3048, -0.072, -0.1775]} rotation={[-Math.PI / 2, 0, Math.PI / 4]} />
        <instances.PPiston position={[-0.2863, -0.018, -0.2863]} rotation={[0, Math.PI / 4, -Math.PI / 2]} />
        <instances.PPistonRingA position={[-0.2778, -0.018, -0.2778]} rotation={[0, Math.PI / 4, -Math.PI / 2]} />
        <instances.PPistonRingA position={[-0.2708, -0.018, -0.2708]} rotation={[0, Math.PI / 4, 0]} />
        <instances.PPistonRingB position={[-0.2651, -0.018, -0.2651]} rotation={[0, Math.PI / 4, -1.0581]} />
        <instances.PPistonRingB position={[-0.2594, -0.018, -0.2594]} rotation={[0, Math.PI / 4, -2.0701]} />
        <instances.PPistonRingC position={[-0.2609, -0.018, -0.2609]} rotation={[0, Math.PI / 4, -Math.PI / 2]} />
        <instances.PGidgionPin position={[-0.2439, -0.018, -0.2439]} rotation={[0, Math.PI / 4, -Math.PI / 2]} />
        <instances.BearingNeedleRollerPreviewCfg1 position={[-0.2439, -0.018, -0.2439]} rotation={[0, Math.PI / 4, -Math.PI / 2]} />
        <instances.CirclipExternalBSSM position={[-0.2439, 0.042, -0.2439]} rotation={[0, Math.PI / 4, Math.PI]} />
        <instances.CirclipExternalBSSM position={[-0.2439, -0.078, -0.2439]} rotation={[0, Math.PI / 4, 0]} />
        <instances.PinforPiston position={[-0.2227, -0.018, -0.3188]} rotation={[0, Math.PI / 4, -Math.PI / 2]} />
        <instances.PinforPiston position={[-0.2778, -0.086, -0.2778]} rotation={[0, 1.0207, Math.PI]} />
        <instances.PEndLowerforPushrod position={[-0.0276, 0.042, -0.2076]} rotation={[0, Math.PI / 4, 0]} />
        <instances.PEndUpperforPushrod position={[-0.3847, 0.042, -0.5647]} rotation={[0, Math.PI / 4, -0.002]} />
        <instances.BearingNeedleRollerPreviewCfg position={[-0.0276, 0.042, -0.2076]} rotation={[Math.PI, 0.6506, -Math.PI / 2]} />
        <instances.PinforPushrod position={[-0.0276, 0.042, -0.2076]} rotation={[-Math.PI, Math.PI / 4, -Math.PI]} />
        <instances.PPushrodLong position={[-0.0488, 0.042, -0.2288]} rotation={[2.9521, 0.7764, -3.008]} />
        <instances.PPushrod position={[0.0488, -0.018, -0.2288]} rotation={[-2.9521, -0.7764, 0.1336]} />
        <instances.PEndLowerforPushrod position={[0.0276, -0.018, -0.2076]} rotation={[0, -Math.PI / 4, -Math.PI]} />
        <instances.PEndUpperforPushrod position={[0.3507, -0.018, -0.5307]} rotation={[0, -Math.PI / 4, 3.1396]} />
        <instances.BearingNeedleRollerPreviewCfg position={[0.0276, -0.018, -0.2076]} rotation={[Math.PI, -0.6506, Math.PI / 2]} />
        <instances.PinforPushrod position={[0.0276, -0.018, -0.2076]} rotation={[Math.PI, -Math.PI / 4, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['196-P-009_Cam-Shaft001'].geometry} material={nodes['196-P-009_Cam-Shaft001'].material} position={[0, 0.068, -0.18]} rotation={[-Math.PI / 2, 0, 2.0924]} />
        <mesh castShadow receiveShadow geometry={nodes['196-P-066_Gear_Output_ISO_-_Spur_gear_2M_60T_20PA_12FW_---S'].geometry} material={nodes['196-P-066_Gear_Output_ISO_-_Spur_gear_2M_60T_20PA_12FW_---S'].material} position={[0, 0.185, -0.18]} rotation={[0, 0.5216, -Math.PI / 2]} />
        <mesh castShadow receiveShadow geometry={nodes['196-P-109_Washer_for_Cam-Shaft001'].geometry} material={nodes['196-P-109_Washer_for_Cam-Shaft001'].material} position={[0, 0.253, -0.18]} rotation={[Math.PI / 2, 0, -2.1678]} />
        <instances.KeyxxR position={[-0.0189, 0.173, -0.2129]} rotation={[0, 0.5216, Math.PI / 2]} />
        <instances.KeyxxR position={[-0.0329, 0.173, -0.1611]} rotation={[Math.PI, 1.0492, -Math.PI / 2]} />
        <mesh castShadow receiveShadow geometry={nodes['Locking_Washer,_M25,_MB_5_2_14b001'].geometry} material={nodes['Locking_Washer,_M25,_MB_5_2_14b001'].material} position={[0, -0.139, -0.18]} rotation={[-Math.PI, 1.0492, Math.PI / 2]} />
        <mesh castShadow receiveShadow geometry={nodes['Locking_Washer,_M35,_MB_7_2_14b001'].geometry} material={nodes['Locking_Washer,_M35,_MB_7_2_14b001'].material} position={[0, 0.2635, -0.18]} rotation={[Math.PI, 1.0492, -Math.PI / 2]} />
        <mesh castShadow receiveShadow geometry={nodes['Locking_Washer,_M40,_MB_8_2_14b001'].geometry} material={nodes['Locking_Washer,_M40,_MB_8_2_14b001'].material} position={[0, 0.1585, -0.18]} rotation={[-Math.PI, 1.0492, Math.PI / 2]} />
        <mesh castShadow receiveShadow geometry={nodes['Locknut,_M25x15,_KM_5_2_14b001'].geometry} material={nodes['Locknut,_M25x15,_KM_5_2_14b001'].material} position={[0, -0.139, -0.18]} rotation={[-Math.PI, 1.0167, Math.PI / 2]} />
        <mesh castShadow receiveShadow geometry={nodes['Locknut,_M35x15,_KM_7_2_14b001'].geometry} material={nodes['Locknut,_M35x15,_KM_7_2_14b001'].material} position={[0, 0.2635, -0.18]} rotation={[Math.PI, 0.0504, -Math.PI / 2]} />
        <mesh castShadow receiveShadow geometry={nodes['Locknut,_M40x15,_KM_8_2_14b001'].geometry} material={nodes['Locknut,_M40x15,_KM_8_2_14b001'].material} position={[0, 0.1585, -0.18]} rotation={[0, -0.4687, -Math.PI / 2]} />
        <instances.PGasketforPushrods position={[0.0663, 0.03, -0.2463]} rotation={[Math.PI, Math.PI / 4, -Math.PI / 2]} />
        <instances.PGuideforPushrods position={[0.2063, -0.018, -0.3863]} rotation={[0, Math.PI / 4, 0]} />
        <instances.PGuideforPushrods1 position={[0.2063, -0.018, -0.3863]} rotation={[0, Math.PI / 4, 0]} />
        <instances.ScrewMCapHdSSMx position={[0.0861, -0.054, -0.2519]} rotation={[1.855, -0.2734, 2.3956]} />
        <instances.ScrewMCapHdSSMx position={[0.0535, -0.002, -0.2845]} rotation={[1.855, -0.2734, 2.3956]} />
        <instances.ScrewMCapHdSSMx position={[0.0535, 0.062, -0.2845]} rotation={[1.855, -0.2734, 2.3956]} />
        <instances.ScrewMCapHdSSMx position={[0.0861, 0.114, -0.2519]} rotation={[1.855, -0.2734, 2.3956]} />
        <instances.PThrotleBodyCast position={[0.4555, -0.2503, -0.3039]} rotation={[0, -Math.PI / 4, -Math.PI]} />
        <instances.PThrotleBodyCast position={[0.3039, -0.2503, -0.4555]} rotation={[Math.PI, Math.PI / 4, 0]} />
        <instances.PAxleforThrottleBody position={[0.4555, -0.1863, -0.3039]} rotation={[0, Math.PI / 4, Math.PI]} />
        <instances.PAxleforThrottleBody position={[0.3039, -0.1863, -0.4555]} rotation={[Math.PI, -Math.PI / 4, 0]} />
        <instances.PBracketforThrottleBodies position={[0.3797, -0.2023, -0.3797]} rotation={[0, -Math.PI / 4, -Math.PI]} />
        <instances.PDiskforThrottleBody position={[0.3039, -0.1853, -0.4555]} rotation={[-Math.PI, -Math.PI / 4, 0]} />
        <instances.PDiskforThrottleBody position={[0.4555, -0.1853, -0.3039]} rotation={[0, Math.PI / 4, Math.PI]} />
        <instances.PWheelforThrottleBodies position={[0.3797, -0.1863, -0.3797]} rotation={[0, -Math.PI / 4, -Math.PI]} />
        <instances.CableforThrottlesMx position={[0.4151, -0.4063, -0.4151]} rotation={[Math.PI / 2, 0, 2.3562]} />
        <instances.CableforThrottlesMx1 position={[0.4151, -0.4063, -0.4151]} rotation={[Math.PI / 2, 0, 2.3562]} />
        <instances.CableforThrottlesMx2 position={[0.4151, -0.4063, -0.4151]} rotation={[Math.PI / 2, 0, 2.3562]} />
        <instances.CableforThrottlesMx3 position={[0.4151, -0.4063, -0.4151]} rotation={[Math.PI / 2, 0, 2.3562]} />
        <instances.CirclipExternalBSSM1 position={[0.2663, -0.1863, -0.4931]} rotation={[0, -Math.PI / 4, -Math.PI / 2]} />
        <instances.CirclipExternalBSSM1 position={[0.3416, -0.1863, -0.4179]} rotation={[0, -Math.PI / 4, Math.PI / 2]} />
        <instances.CirclipExternalBSSM1 position={[0.4179, -0.1863, -0.3416]} rotation={[0, -Math.PI / 4, -Math.PI / 2]} />
        <instances.CirclipExternalBSSM1 position={[0.4931, -0.1863, -0.2663]} rotation={[0, -Math.PI / 4, Math.PI / 2]} />
        <instances.InjectorApriliaSXV position={[0.2265, -0.1797, -0.5329]} rotation={[0, -Math.PI / 4, -Math.PI / 3]} />
        <instances.InjectorApriliaSXV position={[0.5329, -0.1797, -0.2265]} rotation={[Math.PI, Math.PI / 4, 2.0944]} />
        <instances.InjectorApriliaSXV1 position={[0.5329, -0.1797, -0.2265]} rotation={[Math.PI, Math.PI / 4, 2.0944]} />
        <instances.InjectorApriliaSXV1 position={[0.2265, -0.1797, -0.5329]} rotation={[0, -Math.PI / 4, -Math.PI / 3]} />
        <instances.InjectorApriliaSXV2 position={[0.5329, -0.1797, -0.2265]} rotation={[Math.PI, Math.PI / 4, 2.0944]} />
        <instances.InjectorApriliaSXV2 position={[0.2265, -0.1797, -0.5329]} rotation={[0, -Math.PI / 4, -Math.PI / 3]} />
        <instances.InjectorApriliaSXV3 position={[0.5329, -0.1797, -0.2265]} rotation={[Math.PI, Math.PI / 4, 2.0944]} />
        <instances.InjectorApriliaSXV3 position={[0.2265, -0.1797, -0.5329]} rotation={[0, -Math.PI / 4, -Math.PI / 3]} />
        <instances.NutFullSSM position={[0.4151, -0.2759, -0.4151]} rotation={[0, -1.0352, -Math.PI]} />
        <instances.NutFullSSM position={[0.3444, -0.3021, -0.3444]} rotation={[Math.PI, 0.1624, 0]} />
        <instances.NutFullSSM position={[0.4151, -0.3021, -0.4151]} rotation={[0, -0.149, -Math.PI]} />
        <instances.NutFullSSM position={[0.3444, -0.2759, -0.3444]} rotation={[0, 0.3308, -Math.PI]} />
        <instances.PlainBearingIgusGFM position={[0.43, -0.1863, -0.3294]} rotation={[0.0668, -0.7843, -3.0944]} />
        <instances.PlainBearingIgusGFM position={[0.481, -0.1863, -0.2785]} rotation={[-0.2361, -0.7713, -0.1662]} />
        <instances.PlainBearingIgusGFM position={[0.3294, -0.1863, -0.43]} rotation={[1.8253, 0.2466, 0.7537]} />
        <instances.PlainBearingIgusGFM position={[0.2785, -0.1863, -0.4809]} rotation={[2.2107, 0.5383, -2.5385]} />
        <instances.ScrewMPanHdSSMx position={[0.4696, -0.1915, -0.2898]} rotation={[0, -0.5443, Math.PI / 2]} />
        <instances.ScrewMPanHdSSMx position={[0.3181, -0.1915, -0.4414]} rotation={[0, -0.5443, Math.PI / 2]} />
        <instances.ScrewMPanHdSSMx position={[0.4414, -0.1915, -0.3181]} rotation={[0, -0.5443, Math.PI / 2]} />
        <instances.ScrewMPanHdSSMx position={[0.2898, -0.1915, -0.4696]} rotation={[0, -0.5443, Math.PI / 2]} />
        <instances.ScrewMPanHdSSMx1 position={[0.3683, -0.2015, -0.3911]} rotation={[0, -0.5443, Math.PI / 2]} />
        <instances.ScrewMPanHdSSMx1 position={[0.3912, -0.2015, -0.3683]} rotation={[0, -0.5443, Math.PI / 2]} />
        <instances.ScrewMCapHdSSMx3 position={[0.3039, -0.2167, -0.5121]} rotation={[0, -0.3726, Math.PI / 2]} />
        <instances.ScrewMCapHdSSMx3 position={[0.5121, -0.2167, -0.3039]} rotation={[0, -0.3726, Math.PI / 2]} />
        <instances.ScrewMCapHdSSMx3 position={[0.4555, -0.2167, -0.2474]} rotation={[0, -0.3726, Math.PI / 2]} />
        <instances.ScrewMCapHdSSMx3 position={[0.4555, -0.2167, -0.3605]} rotation={[0, -0.3726, Math.PI / 2]} />
        <instances.ScrewMCapHdSSMx3 position={[0.3989, -0.2167, -0.3039]} rotation={[0, -0.3726, Math.PI / 2]} />
        <instances.ScrewMCapHdSSMx3 position={[0.3039, -0.2167, -0.3989]} rotation={[0, -0.3726, Math.PI / 2]} />
        <instances.ScrewMCapHdSSMx3 position={[0.2474, -0.2167, -0.4555]} rotation={[0, -0.3726, Math.PI / 2]} />
        <instances.ScrewMCapHdSSMx3 position={[0.3605, -0.2167, -0.4555]} rotation={[0, -0.3726, Math.PI / 2]} />
        <instances.WasherPlainSSM position={[0.3683, -0.1973, -0.3911]} rotation={[Math.PI, -1.2659, Math.PI / 2]} />
        <instances.WasherPlainSSM position={[0.3912, -0.1963, -0.3683]} rotation={[0, 0.4222, Math.PI / 2]} />
        <instances.WasherPlainSSM1 position={[0.2474, -0.2069, -0.4555]} rotation={[Math.PI, -1.4162, Math.PI / 2]} />
        <instances.WasherPlainSSM1 position={[0.4555, -0.2069, -0.3605]} rotation={[Math.PI, -1.4162, Math.PI / 2]} />
        <instances.WasherPlainSSM1 position={[0.3039, -0.2069, -0.3989]} rotation={[Math.PI, -1.4162, Math.PI / 2]} />
        <instances.WasherPlainSSM1 position={[0.4555, -0.2069, -0.2474]} rotation={[Math.PI, -1.4162, Math.PI / 2]} />
        <instances.WasherPlainSSM1 position={[0.5121, -0.2069, -0.3039]} rotation={[Math.PI, -1.4162, Math.PI / 2]} />
        <instances.WasherPlainSSM1 position={[0.3989, -0.2069, -0.3039]} rotation={[Math.PI, -1.4162, Math.PI / 2]} />
        <instances.WasherPlainSSM1 position={[0.3605, -0.2069, -0.4555]} rotation={[Math.PI, -1.4162, Math.PI / 2]} />
        <instances.WasherPlainSSM1 position={[0.3039, -0.2069, -0.5121]} rotation={[Math.PI, -1.4162, Math.PI / 2]} />
        <instances.WasherPlainSSM2 position={[0.4909, -0.1863, -0.2686]} rotation={[0, -Math.PI / 4, -Math.PI]} />
        <instances.WasherPlainSSM2 position={[0.3444, -0.2853, -0.3444]} rotation={[0, -Math.PI / 4, Math.PI / 2]} />
        <instances.WasherPlainSSM2 position={[0.4151, -0.2823, -0.4151]} rotation={[0, -Math.PI / 4, -Math.PI / 2]} />
        <instances.WasherPlainSSM2 position={[0.4151, -0.2853, -0.4151]} rotation={[0, -0.9653, Math.PI / 2]} />
        <instances.WasherPlainSSM2 position={[0.3444, -0.2823, -0.3444]} rotation={[0, -Math.PI / 4, -Math.PI / 2]} />
        <instances.WasherPlainSSM2 position={[0.3393, -0.1863, -0.4201]} rotation={[0, -Math.PI / 4, -Math.PI]} />
        <instances.WasherPlainSSM2 position={[0.4201, -0.1863, -0.3393]} rotation={[-1.855, 0.2734, -0.746]} />
        <instances.WasherPlainSSM2 position={[0.2686, -0.1863, -0.4909]} rotation={[-1.855, 0.2734, -0.746]} />
        <instances.WasherSpringSSM position={[0.3912, -0.1973, -0.3683]} rotation={[0, -Math.PI / 4, Math.PI / 2]} />
        <instances.WasherSpringSSM position={[0.4414, -0.1873, -0.3181]} rotation={[0, -Math.PI / 4, Math.PI / 2]} />
        <instances.WasherSpringSSM position={[0.3181, -0.1873, -0.4414]} rotation={[0, -Math.PI / 4, Math.PI / 2]} />
        <instances.WasherSpringSSM position={[0.3683, -0.1973, -0.3911]} rotation={[0, -Math.PI / 4, Math.PI / 2]} />
        <instances.WasherSpringSSM position={[0.4696, -0.1873, -0.2898]} rotation={[Math.PI, 0.3048, -Math.PI / 2]} />
        <instances.WasherSpringSSM position={[0.2898, -0.1873, -0.4696]} rotation={[0, -Math.PI / 4, Math.PI / 2]} />
        <instances.WasherSpringSSM1 position={[0.4555, -0.2069, -0.3605]} rotation={[0, -0.7081, Math.PI / 2]} />
        <instances.WasherSpringSSM1 position={[0.3605, -0.2069, -0.4555]} rotation={[0, -0.7081, Math.PI / 2]} />
        <instances.WasherSpringSSM1 position={[0.3989, -0.2069, -0.3039]} rotation={[0, -0.7081, Math.PI / 2]} />
        <instances.WasherSpringSSM1 position={[0.2474, -0.2069, -0.4555]} rotation={[0, -0.7081, Math.PI / 2]} />
        <instances.WasherSpringSSM1 position={[0.4555, -0.2069, -0.2474]} rotation={[0, -0.7081, Math.PI / 2]} />
        <instances.WasherSpringSSM1 position={[0.5121, -0.2069, -0.3039]} rotation={[0, -0.7081, Math.PI / 2]} />
        <instances.WasherSpringSSM1 position={[0.3039, -0.2069, -0.3989]} rotation={[0, -0.7081, Math.PI / 2]} />
        <instances.WasherSpringSSM1 position={[0.3039, -0.2069, -0.5121]} rotation={[0, -0.7081, Math.PI / 2]} />
        <instances.WasherSpringSSM2 position={[0.4151, -0.2791, -0.4151]} rotation={[0, -0.8378, -Math.PI / 2]} />
        <instances.WasherSpringSSM2 position={[0.4151, -0.2885, -0.4151]} rotation={[0, -Math.PI / 4, Math.PI / 2]} />
        <instances.WasherSpringSSM2 position={[0.3444, -0.2917, -0.3444]} rotation={[0, -1.1785, -Math.PI / 2]} />
        <instances.WasherSpringSSM2 position={[0.3444, -0.2791, -0.3444]} rotation={[0, -Math.PI / 4, -Math.PI / 2]} />
        <instances.SNGE position={[0.3036, -0.0425, -0.3036]} rotation={[-3.1113, -0.7751, 0.4576]} />
        <instances.SNGE1 position={[0.3792, -0.0924, -0.3792]} rotation={[0.5399, 0.4785, 2.3774]} />
        <instances.SNGE2 position={[0.3909, -0.1001, -0.3909]} rotation={[0.0303, 0.7751, 2.684]} />
        <instances.SNGE3 position={[0.3393, -0.066, -0.3393]} rotation={[0.0303, 0.7751, 2.684]} />
        <instances.SNGE4 position={[0.3946, -0.1025, -0.3946]} rotation={[0.0303, 0.7751, 2.684]} />
        <instances.SNGE5 position={[0.3122, -0.0482, -0.3122]} rotation={[-3.1113, -0.7751, 0.4576]} />
        <instances.SNGE6 position={[0.3249, -0.0565, -0.3249]} rotation={[-3.1113, -0.7751, 0.4576]} />
        <instances.SNGE position={[0.3469, 0.03, -0.2629]} rotation={[0.683, 0.2752, -0.2176]} />
        <instances.SNGE1 position={[0.4577, 0.03, -0.3033]} rotation={[-1.9626, -0.1381, -2.82]} />
        <instances.SNGE2 position={[0.4749, 0.03, -0.3095]} rotation={[-2.4585, -0.2752, -2.924]} />
        <instances.SNGE3 position={[0.3992, 0.03, -0.282]} rotation={[-2.4585, -0.2752, -2.924]} />
        <instances.SNGE4 position={[0.4803, 0.03, -0.3115]} rotation={[-2.4585, -0.2752, -2.924]} />
        <instances.SNGE5 position={[0.3594, 0.03, -0.2675]} rotation={[0.683, 0.2752, -0.2176]} />
        <instances.SNGE6 position={[0.378, 0.03, -0.2743]} rotation={[0.683, 0.2752, -0.2176]} />
        <instances.SNGE position={[0.2629, 0.03, -0.3469]} rotation={[-0.9078, 1.0368, 0.834]} />
        <instances.SNGE1 position={[0.3033, 0.03, -0.4577]} rotation={[-2.881, -1.2105, -2.897]} />
        <instances.SNGE2 position={[0.3095, 0.03, -0.4749]} rotation={[2.2338, -1.0368, 2.3076]} />
        <instances.SNGE3 position={[0.282, 0.03, -0.3992]} rotation={[2.2338, -1.0368, 2.3076]} />
        <instances.SNGE4 position={[0.3115, 0.03, -0.4803]} rotation={[2.2338, -1.0368, 2.3076]} />
        <instances.SNGE5 position={[0.2675, 0.03, -0.3594]} rotation={[-0.9078, 1.0368, 0.834]} />
        <instances.SNGE6 position={[0.2743, 0.03, -0.378]} rotation={[-0.9078, 1.0368, 0.834]} />
        <instances.SNGE position={[0.3082, 0.03, -0.3082]} rotation={[0.3439, 0.7553, -0.2407]} />
        <instances.SNGE1 position={[0.3916, 0.03, -0.3916]} rotation={[-2.2183, -0.5428, -2.5424]} />
        <instances.SNGE2 position={[0.4045, 0.03, -0.4045]} rotation={[-2.7977, -0.7553, -2.9009]} />
        <instances.SNGE3 position={[0.3475, 0.03, -0.3475]} rotation={[-2.7977, -0.7553, -2.9009]} />
        <instances.SNGE4 position={[0.4086, 0.03, -0.4086]} rotation={[-2.7977, -0.7553, -2.9009]} />
        <instances.SNGE5 position={[0.3176, 0.03, -0.3176]} rotation={[0.3439, 0.7553, -0.2407]} />
        <instances.SNGE6 position={[0.3316, 0.03, -0.3316]} rotation={[0.3439, 0.7553, -0.2407]} />
        <instances.SNGE position={[0.3036, 0.0841, -0.3036]} rotation={[-0.306, 0.6467, 0.6385]} />
        <instances.SNGE1 position={[0.3792, 0.134, -0.3792]} rotation={[-2.8121, -0.8592, 2.9478]} />
        <instances.SNGE2 position={[0.3909, 0.1417, -0.3909]} rotation={[2.8356, -0.6467, 2.5031]} />
        <instances.SNGE3 position={[0.3393, 0.1076, -0.3393]} rotation={[2.8356, -0.6467, 2.5031]} />
        <instances.SNGE4 position={[0.3946, 0.1441, -0.3946]} rotation={[2.8356, -0.6467, 2.5031]} />
        <instances.SNGE5 position={[0.3122, 0.0898, -0.3122]} rotation={[-0.306, 0.6467, 0.6385]} />
        <instances.SNGE6 position={[0.3249, 0.0981, -0.3249]} rotation={[-0.306, 0.6467, 0.6385]} />
        <mesh castShadow receiveShadow geometry={nodes['196-P-010&011_Cylinder-Head001'].geometry} material={nodes['196-P-010&011_Cylinder-Head001'].material} position={[0.3005, 0.018, -0.3005]} rotation={[0, -Math.PI / 4, -Math.PI / 2]} />
        <mesh castShadow receiveShadow geometry={nodes['196-P-014&015_Rocker-Box001'].geometry} material={nodes['196-P-014&015_Rocker-Box001'].material} position={[0.4243, 0.03, -0.4243]} rotation={[0, -Math.PI / 4, -Math.PI / 2]} />
        <mesh castShadow receiveShadow geometry={nodes['196-P-016&017_Cover_for_Rocker-Box001'].geometry} material={nodes['196-P-016&017_Cover_for_Rocker-Box001'].material} position={[0.4985, 0.0438, -0.4985]} rotation={[0, -Math.PI / 4, -Math.PI / 2]} />
        <instances.PPlateforOilSupply position={[0.3408, 0.018, -0.5798]} rotation={[0, Math.PI / 4, Math.PI / 2]} />
        <instances.PPlateforRockerAxles position={[0.5275, 0.018, -0.3932]} rotation={[Math.PI, -Math.PI / 4, Math.PI / 2]} />
        <instances.PAxleforRocker position={[0.4229, 0.0368, -0.4752]} rotation={[0.2972, -0.763, -1.3622]} />
        <instances.PAxleforRocker position={[0.4568, 0.013, -0.5091]} rotation={[-0.0154, -0.7853, -1.5817]} />
        <instances.PCoverMx position={[0.4978, -0.088, -0.4497]} rotation={[-Math.PI / 2, 0, -3.0064]} />
        <instances.PCoverMx position={[0.5325, -0.062, -0.4844]} rotation={[0, -Math.PI / 4, 0.2658]} />
        <instances.PCoverMx position={[0.4731, 0.106, -0.5183]} rotation={[0, -Math.PI / 4, 2.9377]} />
        <instances.PCoverMx position={[0.5183, 0.106, -0.4731]} rotation={[0, -Math.PI / 4, 2.436]} />
        <instances.PCoverMx position={[0.4257, 0.132, -0.4709]} rotation={[Math.PI / 2, 0, -0.6469]} />
        <instances.PCoverMx position={[0.4844, -0.062, -0.5325]} rotation={[0, -Math.PI / 4, -1.6275]} />
        <instances.PCoverMx position={[0.4497, -0.088, -0.4978]} rotation={[-Math.PI / 2, 0, -2.9901]} />
        <instances.PCoverMx position={[0.4709, 0.132, -0.4257]} rotation={[Math.PI / 2, 0, -2.3683]} />
        <instances.PValveInlet position={[0.285, -0.0096, -0.3331]} rotation={[-0.2444, -0.7703, -1.9044]} />
        <instances.PValveInlet position={[0.3331, -0.0096, -0.285]} rotation={[-0.2444, -0.7703, 0.2928]} />
        <instances.PValveExhaust position={[0.331, 0.0575, -0.2858]} rotation={[0.2444, -0.7703, -1.0977]} />
        <instances.PValveExhaust position={[0.2858, 0.0575, -0.331]} rotation={[0.2444, -0.7703, -1.3989]} />
        <instances.PValveGuideInlet position={[0.3945, -0.0369, -0.4426]} rotation={[-0.2444, -0.7703, -1.7427]} />
        <instances.PValveGuideInlet position={[0.4426, -0.0369, -0.3945]} rotation={[-0.2444, -0.7703, -1.7427]} />
        <instances.PValveGuideExhaust position={[0.3638, 0.0769, -0.4091]} rotation={[0.2444, -0.7703, -1.3989]} />
        <instances.PValveGuideExhaust position={[0.4091, 0.0769, -0.3638]} rotation={[0.2444, -0.7703, -1.3989]} />
        <instances.PTopforValve position={[0.4202, 0.091, -0.4654]} rotation={[0.2444, -0.7703, -1.3989]} />
        <instances.PTopforValve position={[0.4654, 0.091, -0.4202]} rotation={[0.2444, -0.7703, -0.4929]} />
        <instances.PTopforValve position={[0.4514, -0.0511, -0.4995]} rotation={[-0.2444, -0.7703, -1.7427]} />
        <instances.PTopforValve position={[0.4995, -0.0511, -0.4514]} rotation={[-0.2444, -0.7703, -1.7343]} />
        <instances.PColletforValve position={[0.4202, 0.091, -0.4654]} rotation={[0.2444, -0.7703, 1.9647]} />
        <instances.PColletforValve position={[0.4514, -0.0511, -0.4995]} rotation={[-0.2444, -0.7703, -1.1018]} />
        <instances.PColletforValve position={[0.4202, 0.091, -0.4654]} rotation={[0.2444, -0.7703, -1.1769]} />
        <instances.PColletforValve position={[0.4654, 0.091, -0.4202]} rotation={[0.2444, -0.7703, -0.5719]} />
        <instances.PColletforValve position={[0.4654, 0.091, -0.4202]} rotation={[0.2444, -0.7703, 2.5697]} />
        <instances.PColletforValve position={[0.4995, -0.0511, -0.4514]} rotation={[-0.2444, -0.7703, -1.514]} />
        <instances.PColletforValve position={[0.4514, -0.0511, -0.4995]} rotation={[-0.2444, -0.7703, 2.0397]} />
        <instances.PColletforValve position={[0.4995, -0.0511, -0.4514]} rotation={[-0.2444, -0.7703, 1.6276]} />
        <mesh castShadow receiveShadow geometry={nodes['196-P-043&044_Rocker_Inlet001'].geometry} material={nodes['196-P-043&044_Rocker_Inlet001'].material} position={[0.3859, 0.013, -0.58]} rotation={[-0.0061, -0.7854, -1.5751]} />
        <mesh castShadow receiveShadow geometry={nodes['196-P-045&046_Rocker_Exhaust001'].geometry} material={nodes['196-P-045&046_Rocker_Exhaust001'].material} position={[0.4815, 0.0368, -0.4165]} rotation={[0.0072, -0.7854, 1.5759]} />
        <instances.PSliderforPushrod position={[0.3507, -0.018, -0.5307]} rotation={[0, -Math.PI / 4, -Math.PI / 2]} />
        <instances.PSliderforPushrod position={[0.3847, 0.078, -0.5647]} rotation={[0, -Math.PI / 4, -Math.PI / 2]} />
        <instances.PInletManifold position={[0.4325, -0.0879, -0.3269]} rotation={[-1.9584, -0.3614, -0.8571]} />
        <instances.PInletManifold position={[0.3269, -0.0879, -0.4325]} rotation={[-1.1832, 0.3614, 2.2845]} />
        <instances.PTappet position={[0.5023, -0.0518, -0.4542]} rotation={[-0.2503, -0.7696, 2.0828]} />
        <instances.PTappet position={[0.4229, 0.0917, -0.4682]} rotation={[0.2514, -0.7694, -1.3989]} />
        <instances.PTappet position={[0.4682, 0.0917, -0.4229]} rotation={[0.2514, -0.7694, -1.3536]} />
        <instances.PTappet position={[0.4542, -0.0518, -0.5023]} rotation={[-0.2503, -0.7696, -2.7336]} />
        <instances.PBallforTappet position={[0.4682, 0.0917, -0.4229]} rotation={[0.2157, -0.7388, -1.5067]} />
        <instances.PBallforTappet position={[0.5023, -0.0518, -0.4542]} rotation={[-0.2155, -0.7315, -1.6656]} />
        <instances.PBallforTappet position={[0.4542, -0.0518, -0.5023]} rotation={[-0.2444, -0.7703, -1.7428]} />
        <instances.PBallforTappet position={[0.4229, 0.0917, -0.4682]} rotation={[0.2444, -0.7703, -1.3989]} />
        <instances.PGasketforRockerBox position={[0.4236, 0.018, -0.4236]} rotation={[0, -Math.PI / 4, -Math.PI / 2]} />
        <instances.PGasketforRockerCover position={[0.7958, 0.018, -0.7958]} rotation={[0, -Math.PI / 4, -Math.PI / 2]} />
        <instances.PGasketforInletManifold position={[0.3273, -0.087, -0.4321]} rotation={[-1.1832, 0.3614, -2.4279]} />
        <instances.PGasketforInletManifold position={[0.4321, -0.087, -0.3273]} rotation={[-1.9584, -0.3614, -2.4279]} />
        <instances.PGasketforOilSupplyPlate position={[0.3415, 0.018, -0.5791]} rotation={[0, Math.PI / 4, -Math.PI / 2]} />
        <instances.PGasketforRockerAxlesPlate position={[0.5268, 0.018, -0.3939]} rotation={[Math.PI, -Math.PI / 4, Math.PI / 2]} />
        <instances.PScrewSpecialAforOilMx position={[0.3578, 0.046, -0.5812]} rotation={[Math.PI, -Math.PI / 4, Math.PI / 2]} />
        <instances.PHoseTailMformmPipe position={[0.1987, 0.03, -0.4405]} rotation={[-Math.PI, -Math.PI / 4, 1.2177]} />
        <instances.PWasherforRocker position={[0.5155, 0.013, -0.4504]} rotation={[-Math.PI, -Math.PI / 4, 1.4047]} />
        <instances.PWasherforRocker position={[0.3519, 0.0368, -0.5461]} rotation={[0, Math.PI / 4, -Math.PI / 2]} />
        <instances.PWasherforRocker position={[0.3859, 0.013, -0.58]} rotation={[0, Math.PI / 4, -1.6634]} />
        <instances.PWasherforRocker position={[0.4815, 0.0368, -0.4165]} rotation={[Math.PI, -Math.PI / 4, Math.PI / 2]} />
        <instances.BearingNeedleRollerISOCDEA position={[0.364, 0.0368, -0.5341]} rotation={[-0.3494, -0.7543, -0.2445]} />
        <instances.BearingNeedleRollerISOCDEA position={[0.3979, 0.013, -0.568]} rotation={[-0.2245, -0.7727, -0.1581]} />
        <instances.BearingNeedleRollerISOCDEA position={[0.4695, 0.0368, -0.4285]} rotation={[-0.3685, -0.7507, -0.2576]} />
        <instances.BearingNeedleRollerISOCDEA position={[0.5035, 0.013, -0.4624]} rotation={[-0.3244, -0.7586, -0.2274]} />
        <instances.BondedSealMhydroscand position={[0.1987, 0.03, -0.4405]} rotation={[Math.PI, -Math.PI / 4, 1.4558]} />
        <instances.Fittingumixjes position={[0.3154, 0.018, -0.5657]} rotation={[0, Math.PI / 4, 3.0519]} />
        <instances.JubileeClipfor position={[0.3287, -0.1157, -0.4576]} rotation={[1.9584, -0.3614, 0.8385]} />
        <instances.JubileeClipfor position={[0.4575, -0.1157, -0.3288]} rotation={[1.1832, 0.3614, 0.8715]} />
        <instances.NutHalfSSM position={[0.442, 0.0966, -0.4873]} rotation={[-0.2335, 0.7402, -1.2294]} />
        <instances.NutHalfSSM position={[0.4873, 0.0966, -0.442]} rotation={[-0.2335, 0.7402, -1.2294]} />
        <instances.NutHalfSSM position={[0.5214, -0.0567, -0.4733]} rotation={[0.2336, 0.7403, -1.9115]} />
        <instances.NutHalfSSM position={[0.4733, -0.0567, -0.5214]} rotation={[0.2336, 0.7403, -1.9115]} />
        <instances.ORingxOringxAISO position={[0.3354, 0.078, -0.5154]} rotation={[3.1305, -0.7854, 1.563]} />
        <instances.ORingxOringxAISO position={[0.3354, -0.018, -0.5154]} rotation={[-1.6184, -0.0475, 2.3551]} />
        <instances.ORingforCoverOringxAISO position={[0.4257, 0.1433, -0.4709]} rotation={[0, -0.1553, 0]} />
        <instances.ORingforCoverOringxAISO position={[0.481, 0.106, -0.5263]} rotation={[-0.0989, 0.7829, -1.5009]} />
        <instances.ORingforCoverOringxAISO position={[0.5404, -0.062, -0.4924]} rotation={[0.2306, 0.772, -1.7332]} />
        <instances.ORingforCoverOringxAISO position={[0.5263, 0.106, -0.481]} rotation={[1.8846, -0.2994, -2.3085]} />
        <instances.ORingforCoverOringxAISO position={[0.4978, -0.0993, -0.4497]} rotation={[0, -0.2228, Math.PI]} />
        <instances.ORingforCoverOringxAISO position={[0.4497, -0.0993, -0.4978]} rotation={[Math.PI, 0.2151, 0]} />
        <instances.ORingforCoverOringxAISO position={[0.4924, -0.062, -0.5404]} rotation={[0.0005, 0.7854, -1.5712]} />
        <instances.ORingforCoverOringxAISO position={[0.4709, 0.1433, -0.4257]} rotation={[-Math.PI, 0.9471, -Math.PI]} />
        <instances.ScrewMCapHdSSMx4 position={[0.4561, -0.088, -0.5636]} rotation={[-Math.PI / 2, 0, -2.3562]} />
        <instances.ScrewMCapHdSSMx4 position={[0.3981, -0.0482, -0.6215]} rotation={[-Math.PI / 2, 0, -2.3562]} />
        <instances.ScrewMCapHdSSMx4 position={[0.5671, 0.058, -0.4101]} rotation={[0, -Math.PI / 4, Math.PI]} />
        <instances.ScrewMCapHdSSMx4 position={[0.5692, -0.088, -0.4504]} rotation={[-Math.PI / 2, 0, -2.3562]} />
        <instances.ScrewMCapHdSSMx4 position={[0.4702, 0.132, -0.5494]} rotation={[-Math.PI / 2, 0, -2.3562]} />
        <instances.ScrewMCapHdSSMx4 position={[0.5692, 0.132, -0.4504]} rotation={[-Math.PI / 2, 0, -2.3562]} />
        <instances.ScrewMCapHdSSMx4 position={[0.4245, 0.132, -0.5951]} rotation={[-Math.PI / 2, 0, -2.3562]} />
        <instances.ScrewMCapHdSSMx4 position={[0.3536, -0.022, -0.6237]} rotation={[0, -Math.PI / 4, 0]} />
        <instances.ScrewMCapHdSSMx4 position={[0.3536, 0.058, -0.6237]} rotation={[0, -Math.PI / 4, 0]} />
        <instances.ScrewMCapHdSSMx4 position={[0.5671, -0.022, -0.4101]} rotation={[0, -Math.PI / 4, Math.PI]} />
        <instances.ScrewMCapHdSSMx4 position={[0.5105, -0.022, -0.3536]} rotation={[0, -Math.PI / 4, Math.PI]} />
        <instances.ScrewMCapHdSSMx4 position={[0.5692, 0.04, -0.4504]} rotation={[-Math.PI / 2, 0, -2.3562]} />
        <instances.ScrewMCapHdSSMx4 position={[0.3981, 0.04, -0.6215]} rotation={[-Math.PI / 2, 0, -2.3562]} />
        <instances.ScrewMCapHdSSMx4 position={[0.297, 0.058, -0.5671]} rotation={[0, -Math.PI / 4, 0]} />
        <instances.ScrewMCapHdSSMx4 position={[0.297, -0.022, -0.5671]} rotation={[0, -Math.PI / 4, 0]} />
        <instances.ScrewMCapHdSSMx4 position={[0.5105, 0.058, -0.3536]} rotation={[0, -Math.PI / 4, Math.PI]} />
        <instances.ScrewMCapHdSSMx5 position={[0.3841, -0.1262, -0.3159]} rotation={[0, -Math.PI / 4, 2.0944]} />
        <instances.ScrewMCapHdSSMx5 position={[0.4435, -0.1262, -0.3753]} rotation={[0, -Math.PI / 4, 2.0944]} />
        <instances.ScrewMCapHdSSMx5 position={[0.3753, -0.1262, -0.4435]} rotation={[0, -Math.PI / 4, Math.PI / 3]} />
        <instances.ScrewMCapHdSSMx5 position={[0.3239, -0.0842, -0.495]} rotation={[0, -Math.PI / 4, Math.PI / 3]} />
        <instances.ScrewMCapHdSSMx5 position={[0.495, -0.0842, -0.3238]} rotation={[0, -Math.PI / 4, 2.0944]} />
        <instances.ScrewMCapHdSSMx5 position={[0.4356, -0.0842, -0.2645]} rotation={[0, -Math.PI / 4, 2.0944]} />
        <instances.ScrewMCapHdSSMx5 position={[0.2645, -0.0842, -0.4356]} rotation={[0, -Math.PI / 4, Math.PI / 3]} />
        <instances.ScrewMCapHdSSMx5 position={[0.3159, -0.1262, -0.3841]} rotation={[0, -Math.PI / 4, Math.PI / 3]} />
        <instances.ScrewMCapHdSSMx6 position={[0.3982, 0.11, -0.5397]} rotation={[-Math.PI / 2, 0, -2.3562]} />
        <instances.ScrewMCapHdSSMx6 position={[0.469, 0.118, -0.469]} rotation={[-Math.PI / 2, 0, -2.3562]} />
        <instances.ScrewMCapHdSSMx6 position={[0.5227, -0.04, -0.4152]} rotation={[-Math.PI / 2, 0, -2.3562]} />
        <instances.ScrewMCapHdSSMx6 position={[0.469, -0.074, -0.469]} rotation={[-Math.PI / 2, 0, -2.3562]} />
        <instances.ScrewMCapHdSSMx6 position={[0.3869, -0.05, -0.551]} rotation={[-1.6516, -0.0805, -2.3595]} />
        <instances.ScrewMCapHdSSMx6 position={[0.5227, 0.1, -0.4152]} rotation={[-Math.PI / 2, 0, -2.3562]} />
        <instances.SpringInnerforValve position={[0.4455, -0.0376, -0.3974]} rotation={[-1.5888, 0.2273, 2.3453]} />
        <instances.SpringInnerforValve position={[0.3974, -0.0376, -0.4455]} rotation={[1.7629, -0.4109, 0.8627]} />
        <instances.SpringInnerforValve position={[0.3668, 0.0777, -0.412]} rotation={[1.5791, 0.2365, 0.7985]} />
        <instances.SpringInnerforValve position={[0.412, 0.0777, -0.3668]} rotation={[1.8769, -0.0635, 0.7723]} />
        <instances.SpringOuterforValve position={[0.4474, -0.0381, -0.3993]} rotation={[2.0417, -0.5944, 0.9982]} />
        <instances.SpringOuterforValve position={[0.3681, 0.078, -0.4133]} rotation={[1.155, 0.5637, 0.9681]} />
        <instances.SpringOuterforValve position={[0.3993, -0.0381, -0.4474]} rotation={[1.6441, -0.3115, 0.8206]} />
        <instances.SpringOuterforValve position={[0.4133, 0.078, -0.3681]} rotation={[-0.6638, 0.5651, 2.1722]} />
        <instances.PEndLowerforPushrod position={[0.0276, 0.078, -0.2076]} rotation={[0, -Math.PI / 4, 0]} />
        <instances.PEndUpperforPushrod position={[0.3847, 0.078, -0.5647]} rotation={[0, -Math.PI / 4, -0.002]} />
        <instances.BearingNeedleRollerPreviewCfg position={[0.0276, 0.078, -0.2076]} rotation={[0, 0.9202, Math.PI / 2]} />
        <instances.PinforPushrod position={[0.0276, 0.078, -0.2076]} rotation={[0, Math.PI / 4, 0]} />
        <instances.PPushrodLong position={[0.0488, 0.078, -0.2288]} rotation={[0.1895, 0.7764, -0.1336]} />
        <mesh castShadow receiveShadow geometry={nodes['196-P-057_Disc_A_for_Generator002'].geometry} material={nodes['196-P-057_Disc_A_for_Generator002'].material} position={[0, 0.264, 0]} rotation={[0, 0.1343, -Math.PI]} />
        <mesh castShadow receiveShadow geometry={nodes['196-P-058_Disc_B_for_Generator002'].geometry} material={nodes['196-P-058_Disc_B_for_Generator002'].material} position={[0, 0.276, 0]} rotation={[0, 0.1343, -Math.PI]} />
        <instances.MagnetMisumiHXNH position={[-0.0352, 0.266, 0.0461]} rotation={[-Math.PI, -0.1491, 0]} />
        <instances.MagnetMisumiHXNH position={[-0.0078, 0.276, -0.0575]} rotation={[0, 0.1413, 0]} />
        <instances.MagnetMisumiHXNH position={[-0.0575, 0.276, 0.0078]} rotation={[-Math.PI, 0.6537, -Math.PI]} />
        <instances.MagnetMisumiHXNH position={[0.0461, 0.266, 0.0352]} rotation={[0, -0.9809, -Math.PI]} />
        <instances.MagnetMisumiHXNH position={[0.0078, 0.276, 0.0575]} rotation={[Math.PI, -0.9574, Math.PI]} />
        <instances.MagnetMisumiHXNH position={[-0.0461, 0.266, -0.0352]} rotation={[0, 1.2124, -Math.PI]} />
        <instances.MagnetMisumiHXNH position={[0.0352, 0.266, -0.0461]} rotation={[0, -0.9809, -Math.PI]} />
        <instances.MagnetMisumiHXNH position={[0.0575, 0.276, -0.0078]} rotation={[Math.PI, -0.9574, Math.PI]} />
        <mesh castShadow receiveShadow geometry={nodes['196-P-006_Crank_Starter-Side002'].geometry} material={nodes['196-P-006_Crank_Starter-Side002'].material} position={[0, 0.051, 0]} rotation={[0, 1.1588, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['196-P-006_Crank_Starter-Side003'].geometry} material={nodes['196-P-006_Crank_Starter-Side003'].material} position={[0, 0.051, 0]} rotation={[0, 1.1588, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['196-P-007_Crank_Output-Side002'].geometry} material={nodes['196-P-007_Crank_Output-Side002'].material} position={[0, -0.051, 0]} rotation={[0, 1.1588, Math.PI]} />
        <mesh castShadow receiveShadow geometry={nodes['196-P-007_Crank_Output-Side003'].geometry} material={nodes['196-P-007_Crank_Output-Side003'].material} position={[0, -0.051, 0]} rotation={[0, 1.1588, Math.PI]} />
        <mesh castShadow receiveShadow geometry={nodes['196-P-008_Bar_for_Big-End001'].geometry} material={nodes['196-P-008_Bar_for_Big-End001'].material} position={[-0.0733, 0, -0.032]} rotation={[0, 1.1992, 0]} />
        <instances.PClampforCrank position={[-0.0733, -0.051, -0.032]} rotation={[0, 1.1588, 0]} />
        <instances.PClampforCrank position={[-0.0733, 0.051, -0.032]} rotation={[0, 1.1588, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['196-P-047__Extender_for_Crank001'].geometry} material={nodes['196-P-047__Extender_for_Crank001'].material} position={[0, 0.22, 0]} rotation={[0, 0.1343, Math.PI / 2]} />
        <mesh castShadow receiveShadow geometry={nodes['196-P-065_Gear_Crank_ISO_-_Spur_gear_2M_30T_20PA_12FW_---S3'].geometry} material={nodes['196-P-065_Gear_Crank_ISO_-_Spur_gear_2M_30T_20PA_12FW_---S3'].material} position={[0, 0.161, 0]} rotation={[0, 1.1588, Math.PI / 2]} />
        <mesh castShadow receiveShadow geometry={nodes['196-P-067_Gear_First_for_Oil-Pump_ISO_-_Spur_gear_2M_15T_20'].geometry} material={nodes['196-P-067_Gear_First_for_Oil-Pump_ISO_-_Spur_gear_2M_15T_20'].material} position={[0, 0.206, 0]} rotation={[0, 1.1588, Math.PI / 2]} />
        <mesh castShadow receiveShadow geometry={nodes['196-P-093_Ratchet_for_Starter001'].geometry} material={nodes['196-P-093_Ratchet_for_Starter001'].material} position={[0, -0.129, 0]} rotation={[0, 1.1588, -Math.PI]} />
        <instances.PWasherforBigEndBearings position={[-0.0733, -0.036, -0.032]} rotation={[0, 1.0631, 0]} />
        <instances.PWasherforBigEndBearings position={[-0.0733, 0, -0.032]} rotation={[Math.PI, -0.8111, Math.PI]} />
        <instances.PWasherforBigEndBearings position={[-0.0733, 0.036, -0.032]} rotation={[0, 1.1372, 0]} />
        <instances.BearingNeedleRollerPreviewCfg2 position={[-0.0733, -0.018, -0.032]} rotation={[0, 1.103, -Math.PI / 2]} />
        <instances.BearingNeedleRollerPreviewCfg2 position={[-0.0733, 0.018, -0.032]} rotation={[0, 1.1426, -Math.PI / 2]} />
        <mesh castShadow receiveShadow geometry={nodes.Key_10x6x25001.geometry} material={nodes.Key_10x6x25001.material} position={[-0.0275, 0.158, -0.012]} rotation={[0, 1.1588, -Math.PI / 2]} />
        <mesh castShadow receiveShadow geometry={nodes['Key_5x5x15-R001'].geometry} material={nodes['Key_5x5x15-R001'].material} position={[-0.0101, 0.198, -0.0044]} rotation={[0, 1.1588, -Math.PI / 2]} />
        <mesh castShadow receiveShadow geometry={nodes['Locking_Washer,_M12,_MB_1_2_14b001'].geometry} material={nodes['Locking_Washer,_M12,_MB_1_2_14b001'].material} position={[0, 0.22, 0]} rotation={[0, 1.1588, Math.PI / 2]} />
        <mesh castShadow receiveShadow geometry={nodes['Locking_Washer,_M30,_MB_6_2_14b001'].geometry} material={nodes['Locking_Washer,_M30,_MB_6_2_14b001'].material} position={[0, -0.1395, 0]} rotation={[0, -0.412, -Math.PI / 2]} />
        <mesh castShadow receiveShadow geometry={nodes['Locknut,_M30x15,_KM_6_2_14b001'].geometry} material={nodes['Locknut,_M30x15,_KM_6_2_14b001'].material} position={[0, -0.1395, 0]} rotation={[0, 1.1173, -Math.PI / 2]} />
        <mesh castShadow receiveShadow geometry={nodes['Nut,_Castle,_M8,_DIN935001'].geometry} material={nodes['Nut,_Castle,_M8,_DIN935001'].material} position={[0, 0.281, 0]} rotation={[0, 0.1343, 0]} />
        <mesh castShadow receiveShadow geometry={nodes.Pin_3x20001.geometry} material={nodes.Pin_3x20001.material} position={[0, 0.268, 0]} rotation={[-3.0404, 1.4358, 1.4705]} />
        <instances.ScrewMCapHdSSISOMxS position={[-0.1167, -0.051, -0.0095]} rotation={[0, -0.412, 0]} />
        <instances.ScrewMCapHdSSISOMxS position={[-0.0863, 0.051, -0.0792]} rotation={[0, -0.412, 0]} />
        <instances.ScrewMCapHdSSISOMxS position={[-0.1167, 0.051, -0.0095]} rotation={[0, -0.412, 0]} />
        <instances.ScrewMCapHdSSISOMxS position={[-0.0863, -0.051, -0.0792]} rotation={[0, -0.412, 0]} />
        <mesh castShadow receiveShadow geometry={nodes.Split_Pin_M8001.geometry} material={nodes.Split_Pin_M8001.material} position={[0, 0.297, 0]} rotation={[Math.PI / 2, 0, -1.7051]} />
        <instances.WasherMudguardSSMx position={[0, 0.264, 0]} rotation={[-Math.PI / 2, 0, 1.2113]} />
        <instances.WasherMudguardSSMx position={[0, 0.278, 0]} rotation={[Math.PI / 2, 0, -1.2113]} />
        <mesh castShadow receiveShadow geometry={nodes['196-P-004_Front001'].geometry} material={nodes['196-P-004_Front001'].material} position={[0, 0.26, -0.18]} />
        <mesh castShadow receiveShadow geometry={nodes['196-P-084_Gasket_for_Front001'].geometry} material={nodes['196-P-084_Gasket_for_Front001'].material} position={[0, 0.26, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Oil-Seal-RTC-03004007-ComTech_Oil-Seal-RTC-03004007-ComTech001'].geometry} material={nodes['Oil-Seal-RTC-03004007-ComTech_Oil-Seal-RTC-03004007-ComTech001'].material} position={[0, 0.309, -0.18]} rotation={[0, -0.0292, -Math.PI / 2]} />
        <instances.ScrewMCapHdSSMx7 position={[-0.086, 0.282, -0.2156]} rotation={[0, 0, -Math.PI / 2]} />
        <instances.ScrewMCapHdSSMx7 position={[-0.0356, 0.282, -0.266]} rotation={[0, 0, -Math.PI / 2]} />
        <instances.ScrewMCapHdSSMx7 position={[0.086, 0.282, -0.11]} rotation={[0, 0, -Math.PI / 2]} />
        <instances.ScrewMCapHdSSMx7 position={[0.0356, 0.282, -0.266]} rotation={[0, 0, -Math.PI / 2]} />
        <instances.ScrewMCapHdSSMx7 position={[0.086, 0.282, -0.2156]} rotation={[0, 0, -Math.PI / 2]} />
        <instances.ScrewMCapHdSSMx7 position={[-0.086, 0.282, -0.11]} rotation={[0, 0, -Math.PI / 2]} />
        <instances.ScrewMCapHdSSMx8 position={[0.04, 0.338, 0.1]} rotation={[0, 0, -Math.PI / 2]} />
        <instances.ScrewMCapHdSSMx8 position={[-0.04, 0.338, 0.1]} rotation={[0, 0, -Math.PI / 2]} />
        <instances.ScrewMCapHdSSMx8 position={[0.086, 0.338, 0]} rotation={[0, 0, -Math.PI / 2]} />
        <instances.ScrewMCapHdSSMx8 position={[-0.086, 0.338, 0]} rotation={[0, 0, -Math.PI / 2]} />
        <instances.NJECMLPART position={[0, -0.075, 0]} rotation={[0, -0.0037, -Math.PI / 2]} />
        <instances.NJECMLPART1 position={[0, -0.075, 0]} rotation={[0, -0.0037, -Math.PI / 2]} />
        <instances.NJECMLPART2 position={[0, -0.075, 0]} rotation={[0, -0.0037, -Math.PI / 2]} />
        <instances.NJECMLPART2 position={[0, -0.075, 0]} rotation={[3.1416, -1.5671, 1.5708]} />
        <instances.NJECMLPART2 position={[0, -0.075, 0]} rotation={[0, -1.0509, -Math.PI / 2]} />
        <instances.NJECMLPART2 position={[0, -0.075, 0]} rotation={[-Math.PI, 0.5273, Math.PI / 2]} />
        <instances.NJECMLPART2 position={[0, -0.075, 0]} rotation={[0, 1.5672, -1.5708]} />
        <instances.NJECMLPART2 position={[0, -0.075, 0]} rotation={[Math.PI, -1.0435, Math.PI / 2]} />
        <instances.NJECMLPART2 position={[0, -0.075, 0]} rotation={[Math.PI, -0.5199, Math.PI / 2]} />
        <instances.NJECMLPART2 position={[0, -0.075, 0]} rotation={[0, -0.5273, -Math.PI / 2]} />
        <instances.NJECMLPART2 position={[0, -0.075, 0]} rotation={[0, 1.0435, -Math.PI / 2]} />
        <instances.NJECMLPART2 position={[0, -0.075, 0]} rotation={[-Math.PI, 1.0509, Math.PI / 2]} />
        <instances.NJECMLPART2 position={[0, -0.075, 0]} rotation={[0, 0.5199, -Math.PI / 2]} />
        <instances.NJECMLPART2 position={[0, -0.075, 0]} rotation={[-Math.PI, 0.0037, Math.PI / 2]} />
        <instances.ScrewMCapHdSSMx position={[0.084, 0.128, 0.273]} rotation={[0, 1.5705, 0]} />
        <instances.ScrewMCapHdSSMx position={[-0.084, 0.128, 0.273]} rotation={[0, 1.5705, 0]} />
        <instances.ScrewMCapHdSSMx position={[0.084, 0, 0.273]} rotation={[0, 1.5705, 0]} />
        <instances.ScrewMCapHdSSMx position={[-0.084, 0, 0.273]} rotation={[0, 1.5705, 0]} />
        <instances.ScrewMCapHdSSMx position={[0.084, -0.128, 0.273]} rotation={[0, 1.5705, 0]} />
        <instances.ScrewMCapHdSSMx position={[-0.084, -0.128, 0.273]} rotation={[0, 1.5705, 0]} />
        <instances.PCoverMx position={[0, 0.094, 0.251]} rotation={[Math.PI, 0, -2.5322]} />
        <instances.PHoseTailMformmPipe position={[-0.1768, 0.143, -0.1004]} rotation={[-Math.PI / 2, 0, 0]} />
        <instances.PHoseTailMformmPipe position={[0.1768, 0.143, -0.1004]} rotation={[-Math.PI / 2, 0, 0]} />
        <instances.BondedSealMhydroscand position={[0.1768, 0.14, -0.1004]} rotation={[Math.PI / 2, 0, 0]} />
        <instances.BondedSealMhydroscand position={[-0.1768, 0.14, -0.1004]} rotation={[Math.PI / 2, 0, 0]} />
        <instances.ORingforCoverOringxAISO position={[0, 0.094, 0.2623]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['196-P-001_Crank-Case001'].geometry} material={nodes['196-P-001_Crank-Case001'].material} />
        <mesh castShadow receiveShadow geometry={nodes['196-P-026_Plate_for_Sump001'].geometry} material={nodes['196-P-026_Plate_for_Sump001'].material} position={[0, 0, 0.249]} rotation={[-Math.PI, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['196-P-081_Gasket_for_Sump001'].geometry} material={nodes['196-P-081_Gasket_for_Sump001'].material} position={[0, 0, 0.249]} />
        <instances.PScrewSpecialBforOilMx position={[0, -0.052, -0.3012]} rotation={[Math.PI, 0, -0.5787]} />
        <instances.PScrewSpecialBforOilMx position={[0, -0.016, -0.3012]} rotation={[Math.PI, 0, -0.5787]} />
        <instances.PScrewSpecialBforOilMx position={[0, 0.076, -0.3012]} rotation={[Math.PI, 0, -0.5787]} />
        <instances.PScrewSpecialBforOilMx position={[0, 0.04, -0.3012]} rotation={[Math.PI, 0, -0.5787]} />
        <mesh castShadow receiveShadow geometry={nodes['Bearing_Output_Back_ISO_355-6_-_7FB25_-_Full,DE,AC,Full001'].geometry} material={nodes['Bearing_Output_Back_ISO_355-6_-_7FB25_-_Full,DE,AC,Full001'].material} position={[0, -0.1365, -0.18]} rotation={[0, 0.0767, -Math.PI / 2]} />
        <instances.PlainBearingIgusGFM1 position={[-0.0948, -0.101, 0.0948]} rotation={[0, -0.0036, -Math.PI / 2]} />
        <instances.WasherMCopperWasherISO position={[0, 0.04, -0.298]} rotation={[0, -1.5705, 0]} />
        <instances.WasherMCopperWasherISO position={[0, -0.016, -0.298]} rotation={[0, -1.5705, 0]} />
        <instances.WasherMCopperWasherISO position={[0, 0.076, -0.298]} rotation={[0, -1.5705, 0]} />
        <instances.WasherMCopperWasherISO position={[0, -0.052, -0.298]} rotation={[0, -1.5705, 0]} />
        <instances.PSleeveforCylinder position={[-0.1945, -0.018, -0.1945]} rotation={[0, -Math.PI / 4, -Math.PI / 2]} />
        <instances.PDrainforOil position={[-0.2314, 0.042, -0.056]} rotation={[-0.0439, -0.7849, 3.1105]} />
        <instances.PGasketforCylinderHead position={[-0.2963, -0.018, -0.2963]} rotation={[0, Math.PI / 4, -Math.PI / 2]} />
        <instances.PGasketforCylinderBase position={[-0.1563, -0.018, -0.1563]} rotation={[Math.PI, -Math.PI / 4, Math.PI / 2]} />
        <instances.ORingOringxAISO position={[-0.2377, 0.042, -0.0624]} rotation={[-0.353, -0.7536, -1.8178]} />
        <instances.ORingOringxAISO position={[-0.3909, 0.042, -0.2155]} rotation={[-0.3589, -0.7525, -1.8218]} />
        <instances.ScrewMCapHdSSMx1 position={[-0.1287, -0.113, -0.2489]} rotation={[-1.6581, 0.087, -0.7816]} />
        <instances.ScrewMCapHdSSMx1 position={[-0.2489, -0.113, -0.1287]} rotation={[-1.5911, 0.0203, -0.7852]} />
        <instances.ScrewMCapHdSSMx1 position={[-0.2489, 0.077, -0.1287]} rotation={[-1.5903, 0.0195, -0.7852]} />
        <instances.ScrewMCapHdSSMx1 position={[-0.1287, 0.077, -0.2489]} rotation={[-1.71, 0.1379, -0.7758]} />
        <instances.ScrewMCapHdSSMx2 position={[-0.1775, 0.072, -0.3048]} rotation={[Math.PI / 2, 0, -2.3562]} />
        <instances.ScrewMCapHdSSMx2 position={[-0.3048, -0.108, -0.1775]} rotation={[Math.PI / 2, 0, -2.3562]} />
        <instances.ScrewMCapHdSSMx2 position={[-0.1775, -0.108, -0.3048]} rotation={[Math.PI / 2, 0, -2.3562]} />
        <instances.ScrewMCapHdSSMx2 position={[-0.3048, 0.072, -0.1775]} rotation={[Math.PI / 2, 0, -2.3562]} />
        <mesh castShadow receiveShadow geometry={nodes['196-P-012&013_Cylinder_Outer_Op_Hand001'].geometry} material={nodes['196-P-012&013_Cylinder_Outer_Op_Hand001'].material} position={[-0.1563, -0.018, -0.1563]} rotation={[0, Math.PI / 4, -Math.PI / 2]} />
        <instances.PlainBearingIgusGFM position={[0, 0.232, 0.09]} rotation={[0, 0.1363, -Math.PI / 2]} />
        <instances.WasherPlainSSM1 position={[0, 0.259, 0.174]} rotation={[0, -0.2642, -Math.PI / 2]} />
        <instances.WasherPlainSSM2 position={[0, 0.247, 0.174]} rotation={[Math.PI, 0.1864, -Math.PI / 2]} />
        <instances.PHoseTailMformmPipe position={[0.099, 0.286, 0.158]} rotation={[-1.8653, Math.PI / 2, 0]} />
        <instances.PHoseTailMformmPipe position={[-0.099, 0.286, 0.19]} rotation={[-1.5656, -Math.PI / 2, 0]} />
        <instances.BondedSealMhydroscand position={[-0.096, 0.286, 0.19]} rotation={[0, 1.5705, 0]} />
        <instances.BondedSealMhydroscand position={[0.096, 0.286, 0.158]} rotation={[0, -1.5705, 0]} />
        <instances.ScrewMCapHdSSMx6 position={[-0.08, 0.239, 0.058]} rotation={[0, 0, -Math.PI / 2]} />
        <instances.ScrewMCapHdSSMx6 position={[0.062, 0.239, 0.234]} rotation={[0, 0, -Math.PI / 2]} />
        <instances.ScrewMCapHdSSMx6 position={[-0.082, 0.239, 0.234]} rotation={[0, 0, -Math.PI / 2]} />
        <instances.ScrewMCapHdSSMx6 position={[0.08, 0.239, 0.058]} rotation={[0, 0, -Math.PI / 2]} />
        <mesh castShadow receiveShadow geometry={nodes['196-P-003_Front-Case001'].geometry} material={nodes['196-P-003_Front-Case001'].material} position={[0, 0.189, -0.18]} />
        <mesh castShadow receiveShadow geometry={nodes['196-P-032_Body_for_Water-Pump001'].geometry} material={nodes['196-P-032_Body_for_Water-Pump001'].material} position={[0, 0.26, 0.174]} />
        <mesh castShadow receiveShadow geometry={nodes['196-P-033_Rotor_for_Water-Pump001'].geometry} material={nodes['196-P-033_Rotor_for_Water-Pump001'].material} position={[0, 0.2606, 0.174]} rotation={[Math.PI, -0.134, Math.PI]} />
        <mesh castShadow receiveShadow geometry={nodes['196-P-034_Cover_for_Water-Pump001'].geometry} material={nodes['196-P-034_Cover_for_Water-Pump001'].material} position={[0, 0.323, 0.174]} />
        <mesh castShadow receiveShadow geometry={nodes['196-P-049_Dowel_Stepped001'].geometry} material={nodes['196-P-049_Dowel_Stepped001'].material} position={[0, 0.247, 0.174]} rotation={[0, -0.2883, Math.PI]} />
        <mesh castShadow receiveShadow geometry={nodes['196-P-064_Filler_Cap001'].geometry} material={nodes['196-P-064_Filler_Cap001'].material} position={[0.1301, 0.213, 0.0867]} rotation={[0, -Math.PI / 6, 1.0002]} />
        <mesh castShadow receiveShadow geometry={nodes['196-P-083_Gasket_for_Front-Case001'].geometry} material={nodes['196-P-083_Gasket_for_Front-Case001'].material} position={[0, 0.188, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['196-P-087_Gasket_for_Water-Pump001'].geometry} material={nodes['196-P-087_Gasket_for_Water-Pump001'].material} position={[0, 0.189, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['196-P-088_Gasket_forWater-Pump-Cover001'].geometry} material={nodes['196-P-088_Gasket_forWater-Pump-Cover001'].material} position={[0, 0.189, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['196-P-107_Hose-Tail_M20_for_20mm-Pipe001'].geometry} material={nodes['196-P-107_Hose-Tail_M20_for_20mm-Pipe001'].material} position={[0.099, 0.288, 0.246]} rotation={[-1.1266, Math.PI / 2, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Bearing_Output_Front_ISO_355-2_-_2CE50_-_Full,DE,AC,Full001'].geometry} material={nodes['Bearing_Output_Front_ISO_355-2_-_2CE50_-_Full,DE,AC,Full001'].material} position={[0, 0.253, -0.18]} rotation={[0, -0.1598, Math.PI / 2]} />
        <mesh castShadow receiveShadow geometry={nodes['Bonded-Seal_M20_5601-02-20-hydroscand001'].geometry} material={nodes['Bonded-Seal_M20_5601-02-20-hydroscand001'].material} position={[0.096, 0.288, 0.246]} rotation={[0, -1.5705, 0]} />
        <mesh castShadow receiveShadow geometry={nodes.Cable_Glands_Metal_M16001.geometry} material={nodes.Cable_Glands_Metal_M16001.material} position={[-0.0807, 0.239, 0.086]} rotation={[-1.3431, Math.PI / 2, 0]} />
        <instances.MagnetMisumiHXNH1 position={[-0.0123, 0.2906, 0.1445]} />
        <instances.MagnetMisumiHXNH1 position={[-0.0295, 0.2706, 0.1863]} rotation={[0, -0.125, -Math.PI]} />
        <instances.MagnetMisumiHXNH1 position={[0.0295, 0.2706, 0.1617]} rotation={[0, -0.1148, Math.PI]} />
        <instances.MagnetMisumiHXNH1 position={[0.0123, 0.2906, 0.2035]} />
        <group position={[0, 0.259, 0]} rotation={[0, -0.172, -Math.PI / 2]}>
          <mesh castShadow receiveShadow geometry={nodes.ID1279.geometry} material={nodes.ID1279.material} />
          <mesh castShadow receiveShadow geometry={nodes.ID1279_1.geometry} material={nodes.ID1279_1.material} />
        </group>
        <instances.ScrewMCapHdSSMx9 position={[-0.04, 0.338, 0.264]} rotation={[0, 0, -Math.PI / 2]} />
        <instances.ScrewMCapHdSSMx9 position={[0.084, 0.282, 0.202]} rotation={[0, 0, -Math.PI / 2]} />
        <instances.ScrewMCapHdSSMx9 position={[-0.04, 0.338, 0.126]} rotation={[0, 0, -Math.PI / 2]} />
        <instances.ScrewMCapHdSSMx9 position={[-0.084, 0.282, 0.128]} rotation={[0, 0, -Math.PI / 2]} />
        <instances.ScrewMCapHdSSMx9 position={[0.04, 0.338, 0.218]} rotation={[0, 0, -Math.PI / 2]} />
        <instances.ScrewMCapHdSSMx9 position={[0.04, 0.338, 0.264]} rotation={[0, 0, -Math.PI / 2]} />
        <instances.ScrewMCapHdSSMx9 position={[-0.062, 0.282, 0.236]} rotation={[0, 0, -Math.PI / 2]} />
        <instances.ScrewMCapHdSSMx9 position={[-0.04, 0.338, 0.218]} rotation={[0, 0, -Math.PI / 2]} />
        <instances.ScrewMCapHdSSMx9 position={[0.04, 0.338, 0.126]} rotation={[0, 0, -Math.PI / 2]} />
        <mesh castShadow receiveShadow geometry={nodes['Screw_M5_Cap-Hd_SS_M5x30001'].geometry} material={nodes['Screw_M5_Cap-Hd_SS_M5x30001'].material} position={[0.062, 0.312, 0.128]} rotation={[0, 0, -Math.PI / 2]} />
        <instances.ScrewMCapHdSSMx11 position={[-0.134, 0.221, -0.2355]} rotation={[0, 0, -Math.PI / 2]} />
        <instances.ScrewMCapHdSSMx11 position={[-0.0555, 0.221, -0.314]} rotation={[0, 0, -Math.PI / 2]} />
        <instances.ScrewMCapHdSSMx11 position={[0.134, 0.221, -0.1245]} rotation={[0, 0, -Math.PI / 2]} />
        <instances.ScrewMCapHdSSMx11 position={[-0.134, 0.221, -0.1245]} rotation={[0, 0, -Math.PI / 2]} />
        <instances.ScrewMCapHdSSMx11 position={[0.134, 0.221, -0.2355]} rotation={[0, 0, -Math.PI / 2]} />
        <instances.ScrewMCapHdSSMx11 position={[0.0555, 0.221, -0.314]} rotation={[0, 0, -Math.PI / 2]} />
        <instances.WasherPlainSSM1 position={[-0.0333, 0.305, -0.0804]} rotation={[0, 0, -Math.PI / 2]} />
        <instances.WasherPlainSSM1 position={[0.0333, 0.305, -0.0804]} rotation={[0, 0, -Math.PI / 2]} />
        <instances.WasherPlainSSM1 position={[-0.0804, 0.305, 0.0333]} rotation={[0, 0, -Math.PI / 2]} />
        <instances.WasherPlainSSM1 position={[-0.0804, 0.305, -0.0333]} rotation={[0, 0, -Math.PI / 2]} />
        <instances.WasherPlainSSM1 position={[0.0804, 0.305, -0.0333]} rotation={[0, 0, -Math.PI / 2]} />
        <instances.WasherPlainSSM1 position={[0.0333, 0.305, 0.0804]} rotation={[0, 0, -Math.PI / 2]} />
        <instances.WasherPlainSSM1 position={[-0.0333, 0.305, 0.0804]} rotation={[0, 0, -Math.PI / 2]} />
        <instances.WasherPlainSSM1 position={[0.0804, 0.305, 0.0333]} rotation={[0, 0, -Math.PI / 2]} />
        <instances.WasherSpringSSM1 position={[0.0333, 0.3066, -0.0804]} rotation={[0, 0.092, -Math.PI / 2]} />
        <instances.WasherSpringSSM1 position={[-0.0804, 0.3066, -0.0333]} rotation={[0, 0, -Math.PI / 2]} />
        <instances.WasherSpringSSM1 position={[0.0333, 0.3066, 0.0804]} rotation={[0, -0.1359, -Math.PI / 2]} />
        <instances.WasherSpringSSM1 position={[0.0804, 0.3066, 0.0333]} rotation={[0, 0, -Math.PI / 2]} />
        <instances.WasherSpringSSM1 position={[-0.0333, 0.3066, 0.0804]} rotation={[0, 0, -Math.PI / 2]} />
        <instances.WasherSpringSSM1 position={[-0.0333, 0.3066, -0.0804]} rotation={[0, 0, -Math.PI / 2]} />
        <instances.WasherSpringSSM1 position={[-0.0804, 0.3066, 0.0333]} rotation={[0, -0.097, -Math.PI / 2]} />
        <instances.WasherSpringSSM1 position={[0.0804, 0.3066, -0.0333]} rotation={[0, 0.167, -Math.PI / 2]} />
        <instances.PBackingPlateforGenerator position={[0, 0.237, 0]} />
        <instances.PBackingPlateforGenerator position={[0, 0.305, 0]} rotation={[-Math.PI, 1.5705, 0]} />
        <instances.PBackingPlateforGenerator1 position={[0, 0.237, 0]} />
        <instances.PBackingPlateforGenerator1 position={[0, 0.305, 0]} rotation={[-Math.PI, 1.5705, 0]} />
        <instances.PBackingPlateforGenerator2 position={[0, 0.305, 0]} rotation={[-Math.PI, 1.5705, 0]} />
        <instances.PBackingPlateforGenerator2 position={[0, 0.237, 0]} />
        <instances.PFormerforGeneratorCoil position={[-0.0373, 0.243, -0.0444]} />
        <instances.PFormerforGeneratorCoil position={[-0.0444, 0.299, 0.0373]} rotation={[-Math.PI, 1.5342, 0]} />
        <instances.PFormerforGeneratorCoil position={[-0.0571, 0.243, -0.0101]} />
        <instances.PFormerforGeneratorCoil position={[-0.0502, 0.243, 0.029]} />
        <instances.PFormerforGeneratorCoil position={[0.0502, 0.243, 0.029]} />
        <instances.PFormerforGeneratorCoil position={[0.0198, 0.243, 0.0545]} />
        <instances.PFormerforGeneratorCoil position={[-0.0101, 0.299, -0.0571]} rotation={[-Math.PI, 1.5342, 0]} />
        <instances.PFormerforGeneratorCoil position={[0.0545, 0.299, 0.0198]} rotation={[-Math.PI, 1.5342, 0]} />
        <instances.PFormerforGeneratorCoil position={[0.0373, 0.243, -0.0444]} />
        <instances.PFormerforGeneratorCoil position={[-0.058, 0.299, 0]} rotation={[-Math.PI, 1.5342, 0]} />
        <instances.PFormerforGeneratorCoil position={[-0.0101, 0.299, 0.0571]} rotation={[-Math.PI, 1.5342, 0]} />
        <instances.PFormerforGeneratorCoil position={[-0.0444, 0.299, -0.0373]} rotation={[-Math.PI, 1.5342, 0]} />
        <instances.PFormerforGeneratorCoil position={[0.029, 0.299, 0.0502]} rotation={[-Math.PI, 1.5342, 0]} />
        <instances.PFormerforGeneratorCoil position={[0.0545, 0.299, -0.0198]} rotation={[-Math.PI, 1.5342, 0]} />
        <instances.PFormerforGeneratorCoil position={[-0.0198, 0.243, 0.0545]} />
        <instances.PFormerforGeneratorCoil position={[0.029, 0.299, -0.0502]} rotation={[-Math.PI, 1.5342, 0]} />
        <instances.PFormerforGeneratorCoil position={[0.0571, 0.243, -0.0101]} />
        <instances.PFormerforGeneratorCoil position={[0, 0.243, -0.058]} rotation={[0, -1.0106, 0]} />
        <instances.PScrewforGenerator position={[-0.0101, 0.28, 0.0571]} rotation={[-Math.PI, 1.5342, 0]} />
        <instances.PScrewforGenerator position={[0.0198, 0.262, 0.0545]} rotation={[0, 0.3573, 0]} />
        <instances.PScrewforGenerator position={[0.0373, 0.262, -0.0444]} rotation={[-Math.PI, 0.1306, -Math.PI]} />
        <instances.PScrewforGenerator position={[0.0502, 0.262, 0.029]} rotation={[Math.PI, -0.2986, Math.PI]} />
        <instances.PScrewforGenerator position={[-0.0444, 0.28, -0.0373]} rotation={[-Math.PI, 1.5342, 0]} />
        <instances.PScrewforGenerator position={[0.029, 0.28, 0.0502]} rotation={[-Math.PI, 1.5342, 0]} />
        <instances.PScrewforGenerator position={[0.0545, 0.28, -0.0198]} rotation={[-Math.PI, 1.5342, 0]} />
        <instances.PScrewforGenerator position={[0.029, 0.28, -0.0502]} rotation={[-Math.PI, 1.5342, 0]} />
        <instances.PScrewforGenerator position={[-0.058, 0.28, 0]} rotation={[-Math.PI, 1.5342, 0]} />
        <instances.PScrewforGenerator position={[-0.0502, 0.262, 0.029]} rotation={[0, 0.3745, 0]} />
        <instances.PScrewforGenerator position={[-0.0444, 0.28, 0.0373]} rotation={[-Math.PI, 1.5342, 0]} />
        <instances.PScrewforGenerator position={[-0.0198, 0.262, 0.0545]} rotation={[0, -0.2561, 0]} />
        <instances.PScrewforGenerator position={[0.0571, 0.262, -0.0101]} rotation={[0, 0.1661, 0]} />
        <instances.PScrewforGenerator position={[-0.0101, 0.28, -0.0571]} rotation={[-Math.PI, 1.5342, 0]} />
        <instances.PScrewforGenerator position={[0, 0.262, -0.058]} rotation={[0, 1.4903, 0]} />
        <instances.PScrewforGenerator position={[-0.0373, 0.262, -0.0444]} rotation={[0, 0.034, 0]} />
        <instances.PScrewforGenerator position={[0.0545, 0.28, 0.0198]} rotation={[-Math.PI, 1.5342, 0]} />
        <instances.PScrewforGenerator position={[-0.0571, 0.262, -0.0101]} rotation={[-Math.PI, 0.3712, -Math.PI]} />
        <instances.CoilforGenerator position={[-0.0444, 0.297, 0.0373]} rotation={[-Math.PI, 1.5342, 0]} />
        <instances.CoilforGenerator position={[-0.0101, 0.297, -0.0571]} rotation={[-Math.PI, 1.5342, 0]} />
        <instances.CoilforGenerator position={[0.0545, 0.297, -0.0198]} rotation={[-Math.PI, 1.5342, 0]} />
        <instances.CoilforGenerator position={[-0.0198, 0.245, 0.0545]} />
        <instances.CoilforGenerator position={[0, 0.245, -0.058]} />
        <instances.CoilforGenerator position={[0.029, 0.297, -0.0502]} rotation={[-Math.PI, 1.5342, 0]} />
        <instances.CoilforGenerator position={[-0.0571, 0.245, -0.0101]} />
        <instances.CoilforGenerator position={[-0.0502, 0.245, 0.029]} />
        <instances.CoilforGenerator position={[0.0545, 0.297, 0.0198]} rotation={[-Math.PI, 1.5342, 0]} />
        <instances.CoilforGenerator position={[-0.0444, 0.297, -0.0373]} rotation={[-Math.PI, 1.5342, 0]} />
        <instances.CoilforGenerator position={[0.0198, 0.245, 0.0545]} />
        <instances.CoilforGenerator position={[-0.058, 0.297, 0]} rotation={[-Math.PI, 1.5342, 0]} />
        <instances.CoilforGenerator position={[0.0502, 0.245, 0.029]} />
        <instances.CoilforGenerator position={[0.0571, 0.245, -0.0101]} />
        <instances.CoilforGenerator position={[0.029, 0.297, 0.0502]} rotation={[-Math.PI, 1.5342, 0]} />
        <instances.CoilforGenerator position={[0.0373, 0.245, -0.0444]} />
        <instances.CoilforGenerator position={[-0.0373, 0.245, -0.0444]} />
        <instances.CoilforGenerator position={[-0.0101, 0.297, 0.0571]} rotation={[-Math.PI, 1.5342, 0]} />
        <instances.ScrewMPanHdSSMx2 position={[-0.0804, 0.3132, 0.0333]} rotation={[0, -0.3909, -Math.PI / 2]} />
        <instances.ScrewMPanHdSSMx2 position={[0.0804, 0.3132, 0.0333]} rotation={[0, -0.3909, -Math.PI / 2]} />
        <instances.ScrewMPanHdSSMx2 position={[-0.0333, 0.3132, -0.0804]} rotation={[0, -0.3553, -Math.PI / 2]} />
        <instances.ScrewMPanHdSSMx2 position={[-0.0804, 0.3132, -0.0333]} rotation={[0, -0.3335, -Math.PI / 2]} />
        <instances.ScrewMPanHdSSMx2 position={[0.0333, 0.3132, 0.0804]} rotation={[0, -0.3909, -Math.PI / 2]} />
        <instances.ScrewMPanHdSSMx2 position={[0.0804, 0.3132, -0.0333]} rotation={[0, -1.0984, -Math.PI / 2]} />
        <instances.ScrewMPanHdSSMx2 position={[0.0333, 0.3132, -0.0804]} rotation={[0, -0.3909, -Math.PI / 2]} />
        <instances.ScrewMPanHdSSMx2 position={[-0.0333, 0.3132, 0.0804]} rotation={[0, -0.3909, -Math.PI / 2]} />
        <instances.StandoffHexMFSteelMx position={[0.0333, 0.243, 0.0804]} rotation={[Math.PI / 2, 0, 0]} />
        <instances.StandoffHexMFSteelMx position={[-0.0804, 0.243, -0.0333]} rotation={[Math.PI / 2, 0, 0]} />
        <instances.StandoffHexMFSteelMx position={[0.0804, 0.243, 0.0333]} rotation={[Math.PI / 2, 0, 0]} />
        <instances.StandoffHexMFSteelMx position={[0.0804, 0.243, -0.0333]} rotation={[Math.PI / 2, 0, 0]} />
        <instances.StandoffHexMFSteelMx position={[-0.0333, 0.243, 0.0804]} rotation={[Math.PI / 2, 0, 0]} />
        <instances.StandoffHexMFSteelMx position={[-0.0333, 0.243, -0.0804]} rotation={[Math.PI / 2, 0, 0]} />
        <instances.StandoffHexMFSteelMx position={[-0.0804, 0.243, 0.0333]} rotation={[Math.PI / 2, 0, 0]} />
        <instances.StandoffHexMFSteelMx position={[0.0333, 0.243, -0.0804]} rotation={[Math.PI / 2, 0, 0]} />
        <instances.Fittingumixjes position={[-0.024, -0.169, -0.274]} />
        <instances.Fittingumixjes position={[0.024, -0.169, -0.274]} />
        <instances.ScrewMCapHdSSMx4 position={[0.054, -0.229, -0.234]} rotation={[0, 0, Math.PI / 2]} />
        <instances.ScrewMCapHdSSMx4 position={[-0.054, -0.229, -0.234]} rotation={[0, 0, Math.PI / 2]} />
        <instances.ScrewMCapHdSSMx4 position={[0.054, -0.229, -0.126]} rotation={[0, 0, Math.PI / 2]} />
        <instances.ScrewMCapHdSSMx4 position={[-0.054, -0.229, -0.126]} rotation={[0, 0, Math.PI / 2]} />
        <instances.ScrewMCapHdSSMx6 position={[0.0602, -0.205, 0.1349]} rotation={[0, 0, Math.PI / 2]} />
        <instances.ScrewMCapHdSSMx6 position={[-0.134, -0.205, -0.0555]} rotation={[0, 0, Math.PI / 2]} />
        <instances.ScrewMCapHdSSMx6 position={[-0.134, -0.205, 0.036]} rotation={[0, 0, Math.PI / 2]} />
        <instances.ScrewMCapHdSSMx6 position={[0, -0.205, -0.286]} rotation={[0, 0, Math.PI / 2]} />
        <instances.ScrewMCapHdSSMx6 position={[0.134, -0.205, 0.0612]} rotation={[0, 0, Math.PI / 2]} />
        <instances.ScrewMCapHdSSMx6 position={[0.134, -0.205, -0.0555]} rotation={[0, 0, Math.PI / 2]} />
        <instances.ScrewMCapHdSSMx7 position={[-0.054, -0.235, 0.054]} rotation={[0, 0, Math.PI / 2]} />
        <instances.ScrewMCapHdSSMx7 position={[0.054, -0.235, -0.054]} rotation={[0, 0, Math.PI / 2]} />
        <instances.ScrewMCapHdSSMx7 position={[-0.054, -0.235, -0.054]} rotation={[0, 0, Math.PI / 2]} />
        <instances.ScrewMCapHdSSMx7 position={[0.054, -0.235, 0.054]} rotation={[0, 0, Math.PI / 2]} />
        <instances.ScrewMCapHdSSMx11 position={[-0.1527, -0.1836, 0.2087]} rotation={[0, 0, Math.PI / 2]} />
        <instances.ScrewMCapHdSSMx11 position={[-0.0136, -0.1836, 0.2087]} rotation={[0, 0, Math.PI / 2]} />
        <instances.ScrewMCapHdSSMx11 position={[-0.1923, -0.1836, 0.1131]} rotation={[0, 0, Math.PI / 2]} />
        <mesh castShadow receiveShadow geometry={nodes['196-P-005_Back-Case001'].geometry} material={nodes['196-P-005_Back-Case001'].material} position={[0, -0.211, 0]} />
        <instances.PCoverforElectric position={[0, -0.211, -0.18]} rotation={[Math.PI, -1.5705, 0]} />
        <instances.PCoverforElectric position={[0, -0.217, 0]} rotation={[Math.PI, -1.5705, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['196-P-060_Former_for_Solanoyd_Coil001'].geometry} material={nodes['196-P-060_Former_for_Solanoyd_Coil001'].material} position={[0, -0.211, 0]} rotation={[0, 0, -Math.PI]} />
        <mesh castShadow receiveShadow geometry={nodes['196-P-072_Gear_Starter_Large_ISO_-_Spur_gear_2M_60T_20PA_8F'].geometry} material={nodes['196-P-072_Gear_Starter_Large_ISO_-_Spur_gear_2M_60T_20PA_8F'].material} position={[0, -0.167, 0]} rotation={[-Math.PI, 0.1491, Math.PI / 2]} />
        <mesh castShadow receiveShadow geometry={nodes['196-P-073_Gear_Starter_Intermediate_ISO_-_Spur_gear_2M_23T_'].geometry} material={nodes['196-P-073_Gear_Starter_Intermediate_ISO_-_Spur_gear_2M_23T_'].material} position={[-0.0948, -0.135, 0.0948]} rotation={[-Math.PI, 1.3439, Math.PI / 2]} />
        <mesh castShadow receiveShadow geometry={nodes['196-P-074_Gear_for_Starter-Motor001'].geometry} material={nodes['196-P-074_Gear_for_Starter-Motor001'].material} position={[-0.1527, -0.151, 0.1527]} rotation={[0, 1.1503, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['196-P-085_Gasket_for_Back-Case001'].geometry} material={nodes['196-P-085_Gasket_for_Back-Case001'].material} position={[0.1437, -0.2462, -0.02]} />
        <mesh castShadow receiveShadow geometry={nodes['196-P-094_Rod_for_Solanoyd001'].geometry} material={nodes['196-P-094_Rod_for_Solanoyd001'].material} position={[0, -0.275, 0]} rotation={[0, 1.4217, -Math.PI]} />
        <mesh castShadow receiveShadow geometry={nodes['196-P-095_Plate_for_Solanoyd001'].geometry} material={nodes['196-P-095_Plate_for_Solanoyd001'].material} position={[0, -0.253, 0]} rotation={[0, -0.7097, Math.PI]} />
        <mesh castShadow receiveShadow geometry={nodes['Bearing_Thrust_10-20-07_ISO_104_-_701020_-_R,12,DE,AC,12001'].geometry} material={nodes['Bearing_Thrust_10-20-07_ISO_104_-_701020_-_R,12,DE,AC,12001'].material} position={[0, -0.224, 0]} rotation={[0, 0.0835, -Math.PI / 2]} />
        <instances.CableGlandsMetalM1 position={[-0.0533, -0.231, -0.16]} rotation={[-2.9409, Math.PI / 2, 0]} />
        <instances.CableGlandsMetalM1 position={[-0.0631, -0.237, 0.02]} rotation={[-2.2862, Math.PI / 2, 0]} />
        <mesh castShadow receiveShadow geometry={nodes.Coil_for_Solanoyd001.geometry} material={nodes.Coil_for_Solanoyd001.material} position={[0, -0.237, 0]} />
        <instances.Fittingumixjes1 position={[0.06, -0.169, -0.26]} rotation={[1.1387, -1.5706, 0]} />
        <instances.NutCastleMDIN1 position={[0, -0.173, 0]} rotation={[Math.PI, -1.4217, Math.PI]} />
        <instances.NutCastleMDIN1 position={[0, -0.256, 0]} rotation={[Math.PI, -1.4217, 0]} />
        <group position={[0, -0.211, 0]} rotation={[0, -0.0653, Math.PI / 2]}>
          <mesh castShadow receiveShadow geometry={nodes.ID1506.geometry} material={nodes.ID1506.material} />
          <mesh castShadow receiveShadow geometry={nodes.ID1506_1.geometry} material={nodes.ID1506_1.material} />
        </group>
        <group position={[0, -0.191, -0.18]} rotation={[0, -0.2669, Math.PI / 2]}>
          <mesh castShadow receiveShadow geometry={nodes.ID1408.geometry} material={nodes.ID1408.material} />
          <mesh castShadow receiveShadow geometry={nodes.ID1408_1.geometry} material={nodes.ID1408_1.material} />
        </group>
        <instances.PlainBearingIgusGFM2 position={[-0.0948, -0.203, 0.0948]} rotation={[0, 0.1824, Math.PI / 2]} />
        <instances.PlainBearingIgusGFM2 position={[-0.1527, -0.1816, 0.1527]} rotation={[0, 0.2141, Math.PI / 2]} />
        <instances.PlainBearingIgusGFM2 position={[0, -0.197, 0]} rotation={[0, 0.2169, Math.PI / 2]} />
        <instances.SplitPinM1 position={[0, -0.269, 0]} rotation={[Math.PI / 2, 0, 0.1491]} />
        <instances.SplitPinM1 position={[0, -0.16, 0]} rotation={[Math.PI / 2, 0, 0.1491]} />
        <mesh castShadow receiveShadow geometry={nodes.Spring_Starter001.geometry} material={nodes.Spring_Starter001.material} position={[0, -0.2322, 0]} rotation={[0, 0.5031, 0]} />
        <instances.PClampforExhaust position={[0.2946, 0.1365, -0.4337]} rotation={[0, -Math.PI / 4, 0.6981]} />
        <instances.PClampforExhaust position={[0.4337, 0.1365, -0.2946]} rotation={[0, -Math.PI / 4, -0.6981]} />
        <instances.PClampforExhaust position={[-0.4337, 0.1005, -0.2946]} rotation={[0, Math.PI / 4, 0.6981]} />
        <instances.PClampforExhaust position={[-0.2946, 0.1005, -0.4337]} rotation={[0, Math.PI / 4, -0.6981]} />
        <instances.PColletforExhaust position={[-0.3024, 0.0875, -0.426]} rotation={[2.7703, -0.31, -2.6441]} />
        <instances.PColletforExhaust position={[-0.426, 0.0875, -0.3024]} rotation={[-2.6662, -0.1172, 2.6662]} />
        <instances.PColletforExhaust position={[0.3024, 0.1235, -0.426]} rotation={[2.6662, 0.1172, 2.6662]} />
        <instances.PColletforExhaust position={[-0.426, 0.0875, -0.3024]} rotation={[0.4754, 0.1172, 0.4754]} />
        <instances.PColletforExhaust position={[0.426, 0.1235, -0.3024]} rotation={[0.4754, -0.1172, -0.4754]} />
        <instances.PColletforExhaust position={[-0.3024, 0.0875, -0.426]} rotation={[-0.3713, 0.31, -0.4975]} />
        <instances.PColletforExhaust position={[0.426, 0.1235, -0.3024]} rotation={[-2.6662, 0.1172, -2.6662]} />
        <instances.PColletforExhaust position={[0.3024, 0.1235, -0.426]} rotation={[-0.4754, -0.1172, 0.4754]} />
        <instances.PGasketforExhaust position={[-0.4219, 0.0806, -0.3065]} rotation={[0.4754, 0.1172, 0.4754]} />
        <instances.PGasketforExhaust position={[0.3065, 0.1166, -0.4219]} rotation={[-0.4754, -0.1172, 0.4754]} />
        <instances.PGasketforExhaust position={[-0.3065, 0.0806, -0.4219]} rotation={[-0.4754, 0.1172, -0.4754]} />
        <instances.PGasketforExhaust position={[0.4219, 0.1166, -0.3065]} rotation={[0.4754, -0.1172, -0.4754]} />
        <mesh castShadow receiveShadow geometry={nodes['196-P-116_Exhaust-Pipe_Set004'].geometry} material={nodes['196-P-116_Exhaust-Pipe_Set004'].material} />
        <mesh castShadow receiveShadow geometry={nodes['196-P-116_Exhaust-Pipe_Set005'].geometry} material={nodes['196-P-116_Exhaust-Pipe_Set005'].material} />
        <mesh castShadow receiveShadow geometry={nodes['196-P-116_Exhaust-Pipe_Set006'].geometry} material={nodes['196-P-116_Exhaust-Pipe_Set006'].material} />
        <mesh castShadow receiveShadow geometry={nodes['196-P-116_Exhaust-Pipe_Set007'].geometry} material={nodes['196-P-116_Exhaust-Pipe_Set007'].material} />
        <instances.ScrewMCapHdSSMx12 position={[0.2915, 0.1287, -0.4877]} rotation={[-0.2721, -0.4718, -1.0353]} />
        <instances.ScrewMCapHdSSMx12 position={[0.3978, 0.175, -0.2796]} rotation={[0.1096, -0.6806, -2.1954]} />
        <instances.ScrewMCapHdSSMx12 position={[-0.2915, 0.0927, -0.4877]} rotation={[-0.4754, 0.1172, -2.0462]} />
        <instances.ScrewMCapHdSSMx12 position={[0.4487, 0.175, -0.3305]} rotation={[0.1096, -0.6806, -2.1954]} />
        <instances.ScrewMCapHdSSMx12 position={[-0.4487, 0.139, -0.3305]} rotation={[0.4754, 0.1172, -1.0954]} />
        <instances.ScrewMCapHdSSMx12 position={[0.4877, 0.1287, -0.2915]} rotation={[0.1096, -0.6806, -2.1954]} />
        <instances.ScrewMCapHdSSMx12 position={[-0.2406, 0.0927, -0.4368]} rotation={[-0.4754, 0.1172, -2.0462]} />
        <instances.ScrewMCapHdSSMx12 position={[0.3305, 0.175, -0.4487]} rotation={[-0.2721, -0.4718, -1.0353]} />
        <instances.ScrewMCapHdSSMx12 position={[-0.2796, 0.139, -0.3978]} rotation={[-0.4754, 0.1172, -2.0462]} />
        <instances.ScrewMCapHdSSMx12 position={[-0.4368, 0.0927, -0.2406]} rotation={[0.4754, 0.1172, -1.0954]} />
        <instances.ScrewMCapHdSSMx12 position={[-0.3305, 0.139, -0.4487]} rotation={[-0.4754, 0.1172, -2.0462]} />
        <instances.ScrewMCapHdSSMx12 position={[0.4368, 0.1287, -0.2406]} rotation={[0.1096, -0.6806, -2.1954]} />
        <instances.ScrewMCapHdSSMx12 position={[-0.3978, 0.139, -0.2796]} rotation={[0.4754, 0.1172, -1.0954]} />
        <instances.ScrewMCapHdSSMx12 position={[0.2406, 0.1287, -0.4368]} rotation={[-0.2721, -0.4718, -1.0353]} />
        <instances.ScrewMCapHdSSMx12 position={[0.2796, 0.175, -0.3978]} rotation={[-0.2721, -0.4718, -1.0353]} />
        <instances.ScrewMCapHdSSMx12 position={[-0.4877, 0.0927, -0.2915]} rotation={[0.4754, 0.1172, -1.0954]} />
        <instances.NJECMLPART position={[0, 0.075, 0]} rotation={[0, -0.3655, Math.PI / 2]} />
        <instances.NJECMLPART1 position={[0, 0.075, 0]} rotation={[0, -0.3655, Math.PI / 2]} />
        <instances.NJECMLPART2 position={[0, 0.075, 0]} rotation={[Math.PI, 0.3655, -Math.PI / 2]} />
        <instances.NJECMLPART2 position={[0, 0.075, 0]} rotation={[0, 0.1581, Math.PI / 2]} />
        <instances.NJECMLPART2 position={[0, 0.075, 0]} rotation={[0, -1.4127, Math.PI / 2]} />
        <instances.NJECMLPART2 position={[0, 0.075, 0]} rotation={[0, 1.2053, Math.PI / 2]} />
        <instances.NJECMLPART2 position={[0, 0.075, 0]} rotation={[Math.PI, -0.6817, -Math.PI / 2]} />
        <instances.NJECMLPART2 position={[0, 0.075, 0]} rotation={[0, 0.6817, Math.PI / 2]} />
        <instances.NJECMLPART2 position={[0, 0.075, 0]} rotation={[-Math.PI, -0.1581, -Math.PI / 2]} />
        <instances.NJECMLPART2 position={[0, 0.075, 0]} rotation={[Math.PI, 0.8891, -Math.PI / 2]} />
        <instances.NJECMLPART2 position={[0, 0.075, 0]} rotation={[-Math.PI, -1.2053, -Math.PI / 2]} />
        <instances.NJECMLPART2 position={[0, 0.075, 0]} rotation={[0, -0.3655, Math.PI / 2]} />
        <instances.NJECMLPART2 position={[0, 0.075, 0]} rotation={[0, -0.8891, Math.PI / 2]} />
        <instances.NJECMLPART2 position={[0, 0.075, 0]} rotation={[Math.PI, 1.4127, -Math.PI / 2]} />
        <instances.WasherSpringSSM1 position={[-0.02, 0.1392, 0.206]} rotation={[0, 0, -Math.PI / 2]} />
        <instances.WasherSpringSSM1 position={[-0.02, 0.1392, 0.144]} rotation={[0, 0, -Math.PI / 2]} />
        <instances.WasherSpringSSM1 position={[0.052, 0.1382, 0.144]} rotation={[0, 0, -Math.PI / 2]} />
        <instances.WasherSpringSSM1 position={[0.052, 0.1382, 0.206]} rotation={[0, 0, -Math.PI / 2]} />
        <instances.PlainBearingIgusGFM1 position={[0, 0.156, 0.09]} rotation={[0, -0.0217, Math.PI / 2]} />
        <instances.PlainBearingIgusGFM1 position={[0.04, 0.187, 0.174]} rotation={[-Math.PI, -1.3543, Math.PI / 2]} />
        <instances.MagnetMisumiHXNH1 position={[0.0287, 0.23, 0.1599]} rotation={[0, -0.2847, -Math.PI]} />
        <instances.MagnetMisumiHXNH1 position={[-0.0287, 0.25, 0.1881]} />
        <instances.MagnetMisumiHXNH1 position={[0.0141, 0.23, 0.2027]} rotation={[0, -0.2195, Math.PI]} />
        <instances.MagnetMisumiHXNH1 position={[-0.0141, 0.25, 0.1453]} />
        <instances.Fittingumixjes1 position={[0.185, 0.145, 0.061]} rotation={[-Math.PI / 2, 0, 1.3309]} />
        <instances.NutCastleMDIN1 position={[0, 0.204, 0.174]} rotation={[Math.PI, -0.4553, Math.PI]} />
        <instances.PlainBearingIgusGFM2 position={[0, 0.172, 0.174]} rotation={[0, 0.774, Math.PI / 2]} />
        <instances.PlainBearingIgusGFM2 position={[0, 0.171, 0.174]} rotation={[0, -1.1524, -Math.PI / 2]} />
        <instances.SplitPinM1 position={[0, 0.217, 0.174]} rotation={[Math.PI / 2, 0, 1.1155]} />
        <instances.ScrewMCapHdSSMx12 position={[-0.0787, 0.169, -0.1474]} rotation={[0, 0, -Math.PI / 2]} />
        <instances.ScrewMCapHdSSMx12 position={[-0.132, 0.169, 0.0603]} rotation={[0, 0, -Math.PI / 2]} />
        <instances.ScrewMCapHdSSMx12 position={[0.082, 0.169, 0.208]} rotation={[0, 0, -Math.PI / 2]} />
        <instances.ScrewMCapHdSSMx12 position={[-0.0326, 0.169, -0.2587]} rotation={[0, 0, -Math.PI / 2]} />
        <instances.ScrewMCapHdSSMx12 position={[0.0326, 0.169, -0.2587]} rotation={[0, 0, -Math.PI / 2]} />
        <instances.ScrewMCapHdSSMx12 position={[0.132, 0.169, -0.0603]} rotation={[0, 0, -Math.PI / 2]} />
        <instances.ScrewMCapHdSSMx12 position={[-0.132, 0.169, -0.0603]} rotation={[0, 0, -Math.PI / 2]} />
        <instances.ScrewMCapHdSSMx12 position={[0.0787, 0.169, -0.1474]} rotation={[0, 0, -Math.PI / 2]} />
        <instances.ScrewMCapHdSSMx12 position={[-0.082, 0.169, 0.208]} rotation={[0, 0, -Math.PI / 2]} />
        <instances.ScrewMCapHdSSMx12 position={[0.132, 0.169, 0.0603]} rotation={[0, 0, -Math.PI / 2]} />
        <mesh castShadow receiveShadow geometry={nodes['196-P-002_Front-Block001'].geometry} material={nodes['196-P-002_Front-Block001'].material} position={[0, 0.079, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['196-P-048_Driver_for_Pump001'].geometry} material={nodes['196-P-048_Driver_for_Pump001'].material} position={[0, 0.252, 0.174]} rotation={[Math.PI, 1.1155, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['196-P-068_Gear_Intermediate_for_Oil-Pump_ISO_-_Spur_gear_2M'].geometry} material={nodes['196-P-068_Gear_Intermediate_for_Oil-Pump_ISO_-_Spur_gear_2M'].material} position={[0, 0.218, 0.09]} rotation={[Math.PI, -1.1601, Math.PI / 2]} />
        <mesh castShadow receiveShadow geometry={nodes['196-P-069_Gear_Large_for_Oil-Pump_DIN_-_Spur_gear_2M_27T_20'].geometry} material={nodes['196-P-069_Gear_Large_for_Oil-Pump_DIN_-_Spur_gear_2M_27T_20'].material} position={[0, 0.202, 0.174]} rotation={[-Math.PI, 1.1155, Math.PI / 2]} />
        <mesh castShadow receiveShadow geometry={nodes['196-P-070_Gear_Driving_for_Oil-Pump_ISO_-_Spur_gear_2M_10T_'].geometry} material={nodes['196-P-070_Gear_Driving_for_Oil-Pump_ISO_-_Spur_gear_2M_10T_'].material} position={[0, 0.153, 0.174]} rotation={[0, -1.1155, -Math.PI / 2]} />
        <mesh castShadow receiveShadow geometry={nodes['196-P-071_Gear_Driven_for_Oil-Pump_ISO_-_Spur_gear_2M_10T_2'].geometry} material={nodes['196-P-071_Gear_Driven_for_Oil-Pump_ISO_-_Spur_gear_2M_10T_2'].material} position={[0.04, 0.141, 0.174]} rotation={[0, 1.4215, Math.PI / 2]} />
        <mesh castShadow receiveShadow geometry={nodes['196-P-082_Gasket_for_Front-Block001'].geometry} material={nodes['196-P-082_Gasket_for_Front-Block001'].material} position={[0, 0.14, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['196-P-097_Plate_for_Oil-Pump001'].geometry} material={nodes['196-P-097_Plate_for_Oil-Pump001'].material} position={[0.016, 0.14, 0.183]} />
        <mesh castShadow receiveShadow geometry={nodes['196-P-099_Fitting_for_Oil-Filter001'].geometry} material={nodes['196-P-099_Fitting_for_Oil-Filter001'].material} position={[0.185, 0.117, 0.171]} rotation={[Math.PI / 2, 0, 0.8681]} />
        <instances.PScrewSpecialCforOilMx position={[0.185, 0.152, 0.0268]} rotation={[Math.PI, 0, -0.5787]} />
        <instances.PScrewSpecialCforOilMx position={[0.2652, 0.172, 0.14]} rotation={[0, 1.5705, 0]} />
        <instances.ScrewMCapHdSSMx13 position={[0.052, 0.1302, 0.144]} rotation={[0, -0.3431, Math.PI / 2]} />
        <instances.ScrewMCapHdSSMx13 position={[0.052, 0.1302, 0.206]} rotation={[0, -0.3431, Math.PI / 2]} />
        <instances.ScrewMCapHdSSMx13 position={[-0.02, 0.1312, 0.206]} rotation={[0, -0.3431, Math.PI / 2]} />
        <instances.ScrewMCapHdSSMx13 position={[-0.02, 0.1312, 0.144]} rotation={[0, -0.3431, Math.PI / 2]} />
        <instances.WasherMCopperWasherISO1 position={[0.262, 0.172, 0.14]} rotation={[1.9626, 0, -Math.PI]} />
        <instances.WasherMCopperWasherISO1 position={[0.185, 0.152, 0.03]} rotation={[0, -1.5705, 0]} />
        <instances.PThrotleBodyCast position={[-0.4555, -0.2863, -0.3039]} rotation={[Math.PI, -Math.PI / 4, 0]} />
        <instances.PThrotleBodyCast position={[-0.3039, -0.2863, -0.4555]} rotation={[0, Math.PI / 4, -Math.PI]} />
        <instances.PAxleforThrottleBody position={[-0.4555, -0.2223, -0.3039]} rotation={[0, -Math.PI / 4, -Math.PI]} />
        <instances.PAxleforThrottleBody position={[-0.3039, -0.2223, -0.4555]} rotation={[-Math.PI, Math.PI / 4, 0]} />
        <instances.PBracketforThrottleBodies position={[-0.3797, -0.2383, -0.3797]} rotation={[0, Math.PI / 4, -Math.PI]} />
        <instances.PDiskforThrottleBody position={[-0.4555, -0.2213, -0.3039]} rotation={[0, -Math.PI / 4, -Math.PI]} />
        <instances.PDiskforThrottleBody position={[-0.3039, -0.2213, -0.4555]} rotation={[-Math.PI, Math.PI / 4, 0]} />
        <instances.PWheelforThrottleBodies position={[-0.3797, -0.2223, -0.3797]} rotation={[0, Math.PI / 4, -Math.PI]} />
        <instances.CableforThrottlesMx position={[-0.4151, -0.4423, -0.4151]} rotation={[Math.PI / 2, 0, Math.PI / 4]} />
        <instances.CableforThrottlesMx1 position={[-0.4151, -0.4423, -0.4151]} rotation={[Math.PI / 2, 0, Math.PI / 4]} />
        <instances.CableforThrottlesMx2 position={[-0.4151, -0.4423, -0.4151]} rotation={[Math.PI / 2, 0, Math.PI / 4]} />
        <instances.CableforThrottlesMx3 position={[-0.4151, -0.4423, -0.4151]} rotation={[Math.PI / 2, 0, Math.PI / 4]} />
        <instances.CirclipExternalBSSM1 position={[-0.3416, -0.2223, -0.4179]} rotation={[0, Math.PI / 4, -Math.PI / 2]} />
        <instances.CirclipExternalBSSM1 position={[-0.4931, -0.2223, -0.2663]} rotation={[0, Math.PI / 4, -Math.PI / 2]} />
        <instances.CirclipExternalBSSM1 position={[-0.2663, -0.2223, -0.4931]} rotation={[0, Math.PI / 4, Math.PI / 2]} />
        <instances.CirclipExternalBSSM1 position={[-0.4179, -0.2223, -0.3416]} rotation={[0, Math.PI / 4, Math.PI / 2]} />
        <instances.InjectorApriliaSXV position={[-0.2265, -0.2157, -0.5329]} rotation={[-Math.PI, -Math.PI / 4, 2.0944]} />
        <instances.InjectorApriliaSXV position={[-0.5329, -0.2157, -0.2265]} rotation={[0, Math.PI / 4, -Math.PI / 3]} />
        <instances.InjectorApriliaSXV1 position={[-0.2265, -0.2157, -0.5329]} rotation={[-Math.PI, -Math.PI / 4, 2.0944]} />
        <instances.InjectorApriliaSXV1 position={[-0.5329, -0.2157, -0.2265]} rotation={[0, Math.PI / 4, -Math.PI / 3]} />
        <instances.InjectorApriliaSXV2 position={[-0.5329, -0.2157, -0.2265]} rotation={[0, Math.PI / 4, -Math.PI / 3]} />
        <instances.InjectorApriliaSXV2 position={[-0.2265, -0.2157, -0.5329]} rotation={[-Math.PI, -Math.PI / 4, 2.0944]} />
        <instances.InjectorApriliaSXV3 position={[-0.5329, -0.2157, -0.2265]} rotation={[0, Math.PI / 4, -Math.PI / 3]} />
        <instances.InjectorApriliaSXV3 position={[-0.2265, -0.2157, -0.5329]} rotation={[-Math.PI, -Math.PI / 4, 2.0944]} />
        <instances.NutFullSSM position={[-0.4151, -0.3381, -0.4151]} rotation={[0, 1.4218, Math.PI]} />
        <instances.NutFullSSM position={[-0.3444, -0.3381, -0.3444]} rotation={[Math.PI, -1.4084, 0]} />
        <instances.NutFullSSM position={[-0.4151, -0.3119, -0.4151]} rotation={[0, 0.5356, -Math.PI]} />
        <instances.NutFullSSM position={[-0.3444, -0.3119, -0.3444]} rotation={[-Math.PI, 1.24, 0]} />
        <instances.PlainBearingIgusGFM position={[-0.43, -0.2223, -0.3294]} rotation={[1.8253, -0.2466, -0.7537]} />
        <instances.PlainBearingIgusGFM position={[-0.2785, -0.2223, -0.481]} rotation={[-0.2361, 0.7713, 0.1662]} />
        <instances.PlainBearingIgusGFM position={[-0.3294, -0.2223, -0.43]} rotation={[0.0668, 0.7843, 3.0944]} />
        <instances.PlainBearingIgusGFM position={[-0.4809, -0.2223, -0.2785]} rotation={[2.2107, -0.5383, 2.5385]} />
        <instances.ScrewMPanHdSSMx position={[-0.3181, -0.2275, -0.4414]} rotation={[0, 1.0265, Math.PI / 2]} />
        <instances.ScrewMPanHdSSMx position={[-0.2898, -0.2275, -0.4696]} rotation={[0, 1.0265, Math.PI / 2]} />
        <instances.ScrewMPanHdSSMx position={[-0.4414, -0.2275, -0.3181]} rotation={[0, 1.0265, Math.PI / 2]} />
        <instances.ScrewMPanHdSSMx position={[-0.4696, -0.2275, -0.2898]} rotation={[0, 1.0265, Math.PI / 2]} />
        <instances.ScrewMPanHdSSMx1 position={[-0.3683, -0.2375, -0.3912]} rotation={[0, 1.0265, Math.PI / 2]} />
        <instances.ScrewMPanHdSSMx1 position={[-0.3911, -0.2375, -0.3683]} rotation={[0, 1.0265, Math.PI / 2]} />
        <instances.ScrewMCapHdSSMx3 position={[-0.3039, -0.2527, -0.5121]} rotation={[0, 1.1982, Math.PI / 2]} />
        <instances.ScrewMCapHdSSMx3 position={[-0.4555, -0.2527, -0.2474]} rotation={[0, 1.1982, Math.PI / 2]} />
        <instances.ScrewMCapHdSSMx3 position={[-0.4555, -0.2527, -0.3605]} rotation={[0, 1.1982, Math.PI / 2]} />
        <instances.ScrewMCapHdSSMx3 position={[-0.3605, -0.2527, -0.4555]} rotation={[0, 1.1982, Math.PI / 2]} />
        <instances.ScrewMCapHdSSMx3 position={[-0.5121, -0.2527, -0.3039]} rotation={[0, 1.1982, Math.PI / 2]} />
        <instances.ScrewMCapHdSSMx3 position={[-0.2474, -0.2527, -0.4555]} rotation={[0, 1.1982, Math.PI / 2]} />
        <instances.ScrewMCapHdSSMx3 position={[-0.3039, -0.2527, -0.3989]} rotation={[0, 1.1982, Math.PI / 2]} />
        <instances.ScrewMCapHdSSMx3 position={[-0.3989, -0.2527, -0.3039]} rotation={[0, 1.1982, Math.PI / 2]} />
        <instances.WasherPlainSSM position={[-0.3911, -0.2333, -0.3683]} rotation={[0, -0.3049, -Math.PI / 2]} />
        <instances.WasherPlainSSM position={[-0.3683, -0.2323, -0.3912]} rotation={[-Math.PI, 1.1486, -Math.PI / 2]} />
        <instances.WasherPlainSSM1 position={[-0.3989, -0.2429, -0.3039]} rotation={[0, -0.1546, -Math.PI / 2]} />
        <instances.WasherPlainSSM1 position={[-0.5121, -0.2429, -0.3039]} rotation={[0, -0.1546, -Math.PI / 2]} />
        <instances.WasherPlainSSM1 position={[-0.2474, -0.2429, -0.4555]} rotation={[0, -0.1546, -Math.PI / 2]} />
        <instances.WasherPlainSSM1 position={[-0.4555, -0.2429, -0.2474]} rotation={[0, -0.1546, -Math.PI / 2]} />
        <instances.WasherPlainSSM1 position={[-0.3039, -0.2429, -0.3989]} rotation={[0, -0.1546, -Math.PI / 2]} />
        <instances.WasherPlainSSM1 position={[-0.4555, -0.2429, -0.3605]} rotation={[0, -0.1546, -Math.PI / 2]} />
        <instances.WasherPlainSSM1 position={[-0.3605, -0.2429, -0.4555]} rotation={[0, -0.1546, -Math.PI / 2]} />
        <instances.WasherPlainSSM1 position={[-0.3039, -0.2429, -0.5121]} rotation={[0, -0.1546, -Math.PI / 2]} />
        <instances.WasherPlainSSM2 position={[-0.3393, -0.2223, -0.4201]} rotation={[-1.855, -0.2734, 0.746]} />
        <instances.WasherPlainSSM2 position={[-0.4201, -0.2223, -0.3393]} rotation={[0, Math.PI / 4, -Math.PI]} />
        <instances.WasherPlainSSM2 position={[-0.3444, -0.3213, -0.3444]} rotation={[0, Math.PI / 4, Math.PI / 2]} />
        <instances.WasherPlainSSM2 position={[-0.2686, -0.2223, -0.4909]} rotation={[0, Math.PI / 4, -Math.PI]} />
        <instances.WasherPlainSSM2 position={[-0.4151, -0.3183, -0.4151]} rotation={[0, Math.PI / 4, -Math.PI / 2]} />
        <instances.WasherPlainSSM2 position={[-0.3444, -0.3183, -0.3444]} rotation={[0, Math.PI / 4, -Math.PI / 2]} />
        <instances.WasherPlainSSM2 position={[-0.4151, -0.3213, -0.4151]} rotation={[0, 0.6055, Math.PI / 2]} />
        <instances.WasherPlainSSM2 position={[-0.4909, -0.2223, -0.2686]} rotation={[-1.855, -0.2734, 0.746]} />
        <instances.WasherSpringSSM position={[-0.4414, -0.2233, -0.3181]} rotation={[0, Math.PI / 4, Math.PI / 2]} />
        <instances.WasherSpringSSM position={[-0.3911, -0.2333, -0.3683]} rotation={[0, Math.PI / 4, Math.PI / 2]} />
        <instances.WasherSpringSSM position={[-0.4696, -0.2233, -0.2898]} rotation={[0, Math.PI / 4, Math.PI / 2]} />
        <instances.WasherSpringSSM position={[-0.3181, -0.2233, -0.4414]} rotation={[0, Math.PI / 4, Math.PI / 2]} />
        <instances.WasherSpringSSM position={[-0.3683, -0.2333, -0.3912]} rotation={[0, Math.PI / 4, Math.PI / 2]} />
        <instances.WasherSpringSSM position={[-0.2898, -0.2233, -0.4696]} rotation={[-Math.PI, -1.266, -Math.PI / 2]} />
        <instances.WasherSpringSSM1 position={[-0.3989, -0.2429, -0.3039]} rotation={[0, 0.8627, Math.PI / 2]} />
        <instances.WasherSpringSSM1 position={[-0.3039, -0.2429, -0.5121]} rotation={[0, 0.8627, Math.PI / 2]} />
        <instances.WasherSpringSSM1 position={[-0.3605, -0.2429, -0.4555]} rotation={[0, 0.8627, Math.PI / 2]} />
        <instances.WasherSpringSSM1 position={[-0.5121, -0.2429, -0.3039]} rotation={[0, 0.8627, Math.PI / 2]} />
        <instances.WasherSpringSSM1 position={[-0.4555, -0.2429, -0.2474]} rotation={[0, 0.8627, Math.PI / 2]} />
        <instances.WasherSpringSSM1 position={[-0.3039, -0.2429, -0.3989]} rotation={[0, 0.8627, Math.PI / 2]} />
        <instances.WasherSpringSSM1 position={[-0.2474, -0.2429, -0.4555]} rotation={[0, 0.8627, Math.PI / 2]} />
        <instances.WasherSpringSSM1 position={[-0.4555, -0.2429, -0.3605]} rotation={[0, 0.8627, Math.PI / 2]} />
        <instances.WasherSpringSSM2 position={[-0.3444, -0.3151, -0.3444]} rotation={[0, Math.PI / 4, -Math.PI / 2]} />
        <instances.WasherSpringSSM2 position={[-0.3444, -0.3277, -0.3444]} rotation={[0, 0.3923, -Math.PI / 2]} />
        <instances.WasherSpringSSM2 position={[-0.4151, -0.3151, -0.4151]} rotation={[0, 0.733, -Math.PI / 2]} />
        <instances.WasherSpringSSM2 position={[-0.4151, -0.3245, -0.4151]} rotation={[0, Math.PI / 4, Math.PI / 2]} />
        <instances.SNGE position={[-0.2629, -0.006, -0.3469]} rotation={[1.9914, 0.8428, -2.1106]} />
        <instances.SNGE1 position={[-0.3033, -0.006, -0.4577]} rotation={[-1.4215, -0.3879, -1.1924]} />
        <instances.SNGE2 position={[-0.3095, -0.006, -0.4749]} rotation={[-1.1502, -0.8428, -1.031]} />
        <instances.SNGE3 position={[-0.282, -0.006, -0.3992]} rotation={[-1.1502, -0.8428, -1.031]} />
        <instances.SNGE4 position={[-0.3115, -0.006, -0.4803]} rotation={[-1.1502, -0.8428, -1.031]} />
        <instances.SNGE5 position={[-0.2675, -0.006, -0.3594]} rotation={[1.9914, 0.8428, -2.1106]} />
        <instances.SNGE6 position={[-0.2743, -0.006, -0.378]} rotation={[1.9914, 0.8428, -2.1106]} />
        <instances.SNGE position={[-0.3469, -0.006, -0.2629]} rotation={[-2.7054, 0.3187, 2.9966]} />
        <instances.SNGE1 position={[-0.4577, -0.006, -0.3033]} rotation={[-0.0968, -0.3476, -0.033]} />
        <instances.SNGE2 position={[-0.4749, -0.006, -0.3095]} rotation={[0.4361, -0.3187, 0.145]} />
        <instances.SNGE3 position={[-0.3992, -0.006, -0.282]} rotation={[0.4361, -0.3187, 0.145]} />
        <instances.SNGE4 position={[-0.4803, -0.006, -0.3115]} rotation={[0.4361, -0.3187, 0.145]} />
        <instances.SNGE5 position={[-0.3594, -0.006, -0.2675]} rotation={[-2.7054, 0.3187, 2.9966]} />
        <instances.SNGE6 position={[-0.378, -0.006, -0.2743]} rotation={[-2.7054, 0.3187, 2.9966]} />
        <instances.SNGE position={[-0.3082, -0.006, -0.3082]} rotation={[-3.0674, 0.784, 3.0892]} />
        <instances.SNGE1 position={[-0.3916, -0.006, -0.3916]} rotation={[-0.6008, -0.6897, -0.4112]} />
        <instances.SNGE2 position={[-0.4045, -0.006, -0.4045]} rotation={[0.0742, -0.784, 0.0524]} />
        <instances.SNGE3 position={[-0.3475, -0.006, -0.3475]} rotation={[0.0742, -0.784, 0.0524]} />
        <instances.SNGE4 position={[-0.4086, -0.006, -0.4086]} rotation={[0.0742, -0.784, 0.0524]} />
        <instances.SNGE5 position={[-0.3176, -0.006, -0.3176]} rotation={[-3.0674, 0.784, 3.0892]} />
        <instances.SNGE6 position={[-0.3316, -0.006, -0.3316]} rotation={[-3.0674, 0.784, 3.0892]} />
        <instances.SNGE position={[-0.3036, 0.0481, -0.3036]} rotation={[-1.2605, 0.3121, 2.3096]} />
        <instances.SNGE1 position={[-0.3792, 0.098, -0.3792]} rotation={[1.459, -0.6542, 0.6307]} />
        <instances.SNGE2 position={[-0.3909, 0.1057, -0.3909]} rotation={[1.8811, -0.3121, 0.832]} />
        <instances.SNGE3 position={[-0.3393, 0.0716, -0.3393]} rotation={[1.8811, -0.3121, 0.832]} />
        <instances.SNGE4 position={[-0.3946, 0.1081, -0.3946]} rotation={[1.8811, -0.3121, 0.832]} />
        <instances.SNGE5 position={[-0.3122, 0.0538, -0.3122]} rotation={[-1.2605, 0.3121, 2.3096]} />
        <instances.SNGE6 position={[-0.3249, 0.0621, -0.3249]} rotation={[-1.2605, 0.3121, 2.3096]} />
        <instances.SNGE position={[-0.3036, -0.0785, -0.3036]} rotation={[2.6634, 0.8725, 3.0612]} />
        <instances.SNGE1 position={[-0.3792, -0.1284, -0.3792]} rotation={[-1.2121, -0.7694, -0.4687]} />
        <instances.SNGE2 position={[-0.3909, -0.1361, -0.3909]} rotation={[-0.4781, -0.8725, 0.0804]} />
        <instances.SNGE3 position={[-0.3393, -0.102, -0.3393]} rotation={[-0.4781, -0.8725, 0.0804]} />
        <instances.SNGE4 position={[-0.3946, -0.1385, -0.3946]} rotation={[-0.4781, -0.8725, 0.0804]} />
        <instances.SNGE5 position={[-0.3122, -0.0842, -0.3122]} rotation={[2.6634, 0.8725, 3.0612]} />
        <instances.SNGE6 position={[-0.3249, -0.0925, -0.3249]} rotation={[2.6634, 0.8725, 3.0612]} />
        <instances.PPlateforOilSupply position={[-0.3408, -0.018, -0.5798]} rotation={[0, -Math.PI / 4, -Math.PI / 2]} />
        <instances.PPlateforRockerAxles position={[-0.5275, -0.018, -0.3932]} rotation={[-Math.PI, Math.PI / 4, Math.PI / 2]} />
        <instances.PAxleforRocker position={[-0.4568, -0.023, -0.5091]} rotation={[-1.5646, 0.0062, 2.3562]} />
        <instances.PAxleforRocker position={[-0.4229, 0.0008, -0.4752]} rotation={[-1.1611, 0.3791, 2.2765]} />
        <instances.PCoverMx position={[-0.4731, 0.07, -0.5183]} rotation={[0, Math.PI / 4, -Math.PI / 2]} />
        <instances.PCoverMx position={[-0.4497, -0.124, -0.4978]} rotation={[-Math.PI / 2, 0, -1.4878]} />
        <instances.PCoverMx position={[-0.4709, 0.096, -0.4257]} rotation={[Math.PI / 2, 0, 3.1146]} />
        <instances.PCoverMx position={[-0.4844, -0.098, -0.5325]} rotation={[0, Math.PI / 4, -Math.PI / 2]} />
        <instances.PCoverMx position={[-0.5325, -0.098, -0.4844]} rotation={[0, Math.PI / 4, -Math.PI / 2]} />
        <instances.PCoverMx position={[-0.5183, 0.07, -0.4731]} rotation={[0, Math.PI / 4, -Math.PI / 2]} />
        <instances.PCoverMx position={[-0.4257, 0.096, -0.4709]} rotation={[Math.PI / 2, 0, 2.8205]} />
        <instances.PCoverMx position={[-0.4978, -0.124, -0.4497]} rotation={[-Math.PI / 2, 0, -1.4252]} />
        <instances.PValveInlet position={[-0.3331, -0.0456, -0.285]} rotation={[-0.2444, 0.7703, -1.5606]} />
        <instances.PValveInlet position={[-0.285, -0.0456, -0.3331]} rotation={[-0.2444, 0.7703, 0.6366]} />
        <instances.PValveExhaust position={[-0.3269, 0.0204, -0.2817]} rotation={[0.2444, 0.7703, -0.8622]} />
        <instances.PValveExhaust position={[-0.2817, 0.0204, -0.3269]} rotation={[0.2444, 0.7703, -1.8447]} />
        <instances.PValveGuideInlet position={[-0.3945, -0.0729, -0.4426]} rotation={[-0.2444, 0.7703, -0.0118]} />
        <instances.PValveGuideInlet position={[-0.4426, -0.0729, -0.3945]} rotation={[-0.2444, 0.7703, -1.2577]} />
        <instances.PValveGuideExhaust position={[-0.3638, 0.0409, -0.4091]} rotation={[0.2444, 0.7703, -1.4458]} />
        <instances.PValveGuideExhaust position={[-0.4091, 0.0409, -0.3638]} rotation={[0.2444, 0.7703, -1.6673]} />
        <instances.PTopforValve position={[-0.4161, 0.054, -0.4613]} rotation={[0.2444, 0.7703, -0.7995]} />
        <instances.PTopforValve position={[-0.4514, -0.0871, -0.4995]} rotation={[-0.2444, 0.7703, -1.7153]} />
        <instances.PTopforValve position={[-0.4995, -0.0871, -0.4514]} rotation={[-0.2444, 0.7703, -1.3989]} />
        <instances.PTopforValve position={[-0.4613, 0.054, -0.4161]} rotation={[0.2444, 0.7703, -1.0936]} />
        <instances.PColletforValve position={[-0.4613, 0.054, -0.4161]} rotation={[0.2444, 0.7703, -1.5208]} />
        <instances.PColletforValve position={[-0.4514, -0.0871, -0.4995]} rotation={[-0.2444, 0.7703, -1.1702]} />
        <instances.PColletforValve position={[-0.4995, -0.0871, -0.4514]} rotation={[-0.2444, 0.7703, -0.758]} />
        <instances.PColletforValve position={[-0.4161, 0.054, -0.4613]} rotation={[0.2444, 0.7703, -1.2552]} />
        <instances.PColletforValve position={[-0.4995, -0.0871, -0.4514]} rotation={[-0.2444, 0.7703, 2.3836]} />
        <instances.PColletforValve position={[-0.4514, -0.0871, -0.4995]} rotation={[-0.2444, 0.7703, 1.9714]} />
        <instances.PColletforValve position={[-0.4161, 0.054, -0.4613]} rotation={[0.2444, 0.7703, 1.8864]} />
        <instances.PColletforValve position={[-0.4613, 0.054, -0.4161]} rotation={[0.2444, 0.7703, 1.6208]} />
        <instances.PSliderforPushrod position={[-0.3847, 0.042, -0.5647]} rotation={[0, Math.PI / 4, -Math.PI / 2]} />
        <instances.PSliderforPushrod position={[-0.3549, -0.0537, -0.5349]} rotation={[0, Math.PI / 4, -Math.PI / 2]} />
        <instances.PInletManifold position={[-0.4325, -0.1239, -0.3269]} rotation={[-1.9584, 0.3614, -2.2845]} />
        <instances.PInletManifold position={[-0.3269, -0.1239, -0.4325]} rotation={[-1.1832, -0.3614, 0.8571]} />
        <instances.PTappet position={[-0.4188, 0.0549, -0.4641]} rotation={[0.3945, 0.7455, -2.2055]} />
        <instances.PTappet position={[-0.5023, -0.0878, -0.4542]} rotation={[-0.2503, 0.7696, -2.3392]} />
        <instances.PTappet position={[-0.4542, -0.0878, -0.5023]} rotation={[-0.2503, 0.7696, 2.4349]} />
        <instances.PTappet position={[-0.4641, 0.0549, -0.4188]} rotation={[0.3945, 0.7455, -1.8901]} />
        <instances.PBallforTappet position={[-0.5023, -0.0878, -0.4542]} rotation={[-0.2444, 0.7703, 1.5549]} />
        <instances.PBallforTappet position={[-0.4188, 0.0549, -0.4641]} rotation={[0.2444, 0.7703, -1.8307]} />
        <instances.PBallforTappet position={[-0.4542, -0.0878, -0.5023]} rotation={[-0.2444, 0.7703, -1.3417]} />
        <instances.PBallforTappet position={[-0.4641, 0.0549, -0.4188]} rotation={[0.2444, 0.7703, 2.4915]} />
        <instances.PGasketforRockerBox position={[-0.4243, -0.018, -0.4243]} rotation={[Math.PI, -Math.PI / 4, Math.PI / 2]} />
        <instances.PGasketforRockerCover position={[-0.2006, -0.018, -0.2006]} rotation={[Math.PI, -Math.PI / 4, Math.PI / 2]} />
        <instances.PGasketforInletManifold position={[-0.4321, -0.123, -0.3273]} rotation={[-1.9584, 0.3614, -0.7137]} />
        <instances.PGasketforInletManifold position={[-0.3273, -0.123, -0.4321]} rotation={[-1.1832, -0.3614, -0.7137]} />
        <instances.PGasketforOilSupplyPlate position={[-0.3408, -0.018, -0.5798]} rotation={[-Math.PI, Math.PI / 4, Math.PI / 2]} />
        <instances.PGasketforRockerAxlesPlate position={[-0.5268, -0.018, -0.3939]} rotation={[-Math.PI, Math.PI / 4, Math.PI / 2]} />
        <instances.PScrewSpecialAforOilMx position={[-0.3578, 0.01, -0.5812]} rotation={[Math.PI, Math.PI / 4, 2.4968]} />
        <instances.PHoseTailMformmPipe position={[-0.1987, -0.006, -0.4405]} rotation={[-Math.PI, Math.PI / 4, -1.2652]} />
        <instances.PWasherforRocker position={[-0.5169, -0.023, -0.449]} rotation={[0, -Math.PI / 4, -2.1054]} />
        <instances.PWasherforRocker position={[-0.483, 0.0008, -0.4151]} rotation={[0, -Math.PI / 4, -Math.PI / 2]} />
        <instances.PWasherforRocker position={[-0.3519, 0.0008, -0.5461]} rotation={[0, -Math.PI / 4, -Math.PI / 2]} />
        <instances.PWasherforRocker position={[-0.3845, -0.023, -0.5814]} rotation={[-Math.PI, Math.PI / 4, Math.PI / 2]} />
        <instances.BearingNeedleRollerISOCDEA position={[-0.4695, 0.0008, -0.4285]} rotation={[-0.3494, 0.7543, 0.2445]} />
        <instances.BearingNeedleRollerISOCDEA position={[-0.364, 0.0008, -0.5341]} rotation={[-0.2638, 0.7678, 0.1854]} />
        <instances.BearingNeedleRollerISOCDEA position={[-0.5035, -0.023, -0.4624]} rotation={[0.1939, 0.7759, -0.1367]} />
        <instances.BearingNeedleRollerISOCDEA position={[-0.3979, -0.023, -0.568]} rotation={[-0.236, 0.7713, 0.1661]} />
        <instances.BondedSealMhydroscand position={[-0.2008, -0.006, -0.4384]} rotation={[0, -Math.PI / 4, -1.6858]} />
        <instances.Fittingumixjes position={[-0.3154, -0.018, -0.5657]} rotation={[0, -Math.PI / 4, -0.1122]} />
        <instances.JubileeClipfor position={[-0.4576, -0.1516, -0.3287]} rotation={[-1.9584, 0.3614, -2.2633]} />
        <instances.JubileeClipfor position={[-0.329, -0.1519, -0.4573]} rotation={[-1.1832, -0.3614, -2.2828]} />
        <instances.NutHalfSSM position={[-0.4827, 0.0626, -0.4374]} rotation={[-2.7819, 0.825, 1.5964]} />
        <instances.NutHalfSSM position={[-0.5214, -0.0927, -0.4733]} rotation={[2.8504, 0.8008, 1.6002]} />
        <instances.NutHalfSSM position={[-0.4374, 0.0626, -0.4827]} rotation={[-2.7819, 0.825, 1.5964]} />
        <instances.NutHalfSSM position={[-0.4733, -0.0927, -0.5214]} rotation={[2.8504, 0.8008, 1.6002]} />
        <instances.ORingxOringxAISO position={[-0.3354, 0.042, -0.5154]} rotation={[-1.6466, 0.0756, 0.7883]} />
        <instances.ORingxOringxAISO position={[-0.3354, -0.054, -0.5154]} rotation={[-1.6382, 0.0672, 0.7877]} />
        <instances.ORingforCoverOringxAISO position={[-0.4978, -0.1353, -0.4497]} rotation={[0, -1.4376, -Math.PI]} />
        <instances.ORingforCoverOringxAISO position={[-0.5263, 0.07, -0.481]} rotation={[-Math.PI, Math.PI / 4, Math.PI / 2]} />
        <instances.ORingforCoverOringxAISO position={[-0.4924, -0.098, -0.5404]} rotation={[-Math.PI, Math.PI / 4, Math.PI / 2]} />
        <instances.ORingforCoverOringxAISO position={[-0.5404, -0.098, -0.4924]} rotation={[-Math.PI, Math.PI / 4, Math.PI / 2]} />
        <instances.ORingforCoverOringxAISO position={[-0.4497, -0.1353, -0.4978]} rotation={[0, Math.PI / 4, Math.PI]} />
        <instances.ORingforCoverOringxAISO position={[-0.481, 0.07, -0.5263]} rotation={[-Math.PI, Math.PI / 4, Math.PI / 2]} />
        <instances.ORingforCoverOringxAISO position={[-0.4709, 0.1073, -0.4257]} rotation={[0, Math.PI / 4, 0]} />
        <instances.ORingforCoverOringxAISO position={[-0.4257, 0.1073, -0.4709]} rotation={[0, Math.PI / 4, 0]} />
        <instances.ScrewMCapHdSSMx4 position={[-0.4245, 0.096, -0.5951]} rotation={[-Math.PI / 2, 0, -Math.PI / 4]} />
        <instances.ScrewMCapHdSSMx4 position={[-0.297, 0.022, -0.5671]} rotation={[0, Math.PI / 4, Math.PI]} />
        <instances.ScrewMCapHdSSMx4 position={[-0.3981, -0.0842, -0.6215]} rotation={[-Math.PI / 2, 0, -Math.PI / 4]} />
        <instances.ScrewMCapHdSSMx4 position={[-0.5692, -0.124, -0.4504]} rotation={[-Math.PI / 2, 0, -Math.PI / 4]} />
        <instances.ScrewMCapHdSSMx4 position={[-0.3536, 0.022, -0.6237]} rotation={[0, Math.PI / 4, Math.PI]} />
        <instances.ScrewMCapHdSSMx4 position={[-0.5692, 0.096, -0.4504]} rotation={[-Math.PI / 2, 0, -Math.PI / 4]} />
        <instances.ScrewMCapHdSSMx4 position={[-0.5105, 0.022, -0.3536]} rotation={[0, Math.PI / 4, 0]} />
        <instances.ScrewMCapHdSSMx4 position={[-0.5671, 0.022, -0.4101]} rotation={[0, Math.PI / 4, 0]} />
        <instances.ScrewMCapHdSSMx4 position={[-0.4617, 0.096, -0.5579]} rotation={[-Math.PI / 2, 0, -Math.PI / 4]} />
        <instances.ScrewMCapHdSSMx4 position={[-0.297, -0.058, -0.5671]} rotation={[0, Math.PI / 4, Math.PI]} />
        <instances.ScrewMCapHdSSMx4 position={[-0.5692, 0.004, -0.4504]} rotation={[-Math.PI / 2, 0, -Math.PI / 4]} />
        <instances.ScrewMCapHdSSMx4 position={[-0.5671, -0.058, -0.4101]} rotation={[0, Math.PI / 4, 0]} />
        <instances.ScrewMCapHdSSMx4 position={[-0.3536, -0.058, -0.6237]} rotation={[0, Math.PI / 4, Math.PI]} />
        <instances.ScrewMCapHdSSMx4 position={[-0.5105, -0.058, -0.3536]} rotation={[0, Math.PI / 4, 0]} />
        <instances.ScrewMCapHdSSMx4 position={[-0.3981, 0.004, -0.6215]} rotation={[-Math.PI / 2, 0, -Math.PI / 4]} />
        <instances.ScrewMCapHdSSMx4 position={[-0.4561, -0.124, -0.5636]} rotation={[-Math.PI / 2, 0, -Math.PI / 4]} />
        <instances.ScrewMCapHdSSMx5 position={[-0.4356, -0.1202, -0.2645]} rotation={[0, Math.PI / 4, Math.PI / 3]} />
        <instances.ScrewMCapHdSSMx5 position={[-0.3753, -0.1622, -0.4435]} rotation={[0, Math.PI / 4, 2.0944]} />
        <instances.ScrewMCapHdSSMx5 position={[-0.2645, -0.1202, -0.4356]} rotation={[0, Math.PI / 4, 2.0944]} />
        <instances.ScrewMCapHdSSMx5 position={[-0.495, -0.1202, -0.3239]} rotation={[0, Math.PI / 4, Math.PI / 3]} />
        <instances.ScrewMCapHdSSMx5 position={[-0.3239, -0.1202, -0.495]} rotation={[0, Math.PI / 4, 2.0944]} />
        <instances.ScrewMCapHdSSMx5 position={[-0.3159, -0.1622, -0.3841]} rotation={[0, Math.PI / 4, 2.0944]} />
        <instances.ScrewMCapHdSSMx5 position={[-0.3841, -0.1622, -0.3159]} rotation={[0, Math.PI / 4, Math.PI / 3]} />
        <instances.ScrewMCapHdSSMx5 position={[-0.4435, -0.1622, -0.3753]} rotation={[0, Math.PI / 4, Math.PI / 3]} />
        <instances.ScrewMCapHdSSMx6 position={[-0.3982, 0.074, -0.5397]} rotation={[-Math.PI / 2, 0, -Math.PI / 4]} />
        <instances.ScrewMCapHdSSMx6 position={[-0.3869, -0.086, -0.551]} rotation={[-Math.PI / 2, 0, -Math.PI / 4]} />
        <instances.ScrewMCapHdSSMx6 position={[-0.469, -0.11, -0.469]} rotation={[-Math.PI / 2, 0, -Math.PI / 4]} />
        <instances.ScrewMCapHdSSMx6 position={[-0.469, 0.082, -0.469]} rotation={[-Math.PI / 2, 0, -Math.PI / 4]} />
        <instances.ScrewMCapHdSSMx6 position={[-0.5227, -0.076, -0.4152]} rotation={[-Math.PI / 2, 0, -Math.PI / 4]} />
        <instances.ScrewMCapHdSSMx6 position={[-0.5227, 0.064, -0.4152]} rotation={[-Math.PI / 2, 0, -Math.PI / 4]} />
        <instances.SpringInnerforValve position={[-0.4455, -0.0736, -0.3974]} rotation={[1.0699, -0.2557, -0.8035]} />
        <instances.SpringInnerforValve position={[-0.3974, -0.0736, -0.4455]} rotation={[-1.3964, -0.3968, -2.2859]} />
        <instances.SpringInnerforValve position={[-0.412, 0.0417, -0.3668]} rotation={[2.2344, 0.3972, -0.8559]} />
        <instances.SpringInnerforValve position={[-0.3668, 0.0417, -0.412]} rotation={[1.4006, -0.3935, -0.8541]} />
        <instances.SpringOuterforValve position={[-0.364, 0.041, -0.4092]} rotation={[-2.3705, 0.7278, -1.9399]} />
        <instances.SpringOuterforValve position={[-0.4092, 0.041, -0.364]} rotation={[2.1754, 0.3485, -0.8344]} />
        <instances.SpringOuterforValve position={[-0.3993, -0.0741, -0.4474]} rotation={[0.4204, -0.6815, -1.1122]} />
        <instances.SpringOuterforValve position={[-0.4474, -0.0741, -0.3993]} rotation={[1.169, -0.1602, -0.783]} />
        <mesh castShadow receiveShadow geometry={nodes['196-P-010&011_Cylinder-Head_Op_Hand001'].geometry} material={nodes['196-P-010&011_Cylinder-Head_Op_Hand001'].material} position={[-0.0629, -0.018, -0.5381]} rotation={[0, Math.PI / 4, -Math.PI / 2]} />
        <mesh castShadow receiveShadow geometry={nodes['196-P-014&015_Rocker-Box_Op_Hand001'].geometry} material={nodes['196-P-014&015_Rocker-Box_Op_Hand001'].material} position={[-0.4243, -0.006, -0.4243]} rotation={[0, Math.PI / 4, -Math.PI / 2]} />
        <mesh castShadow receiveShadow geometry={nodes['196-P-016&017_Cover_for_Rocker-Box_Op_Hand001'].geometry} material={nodes['196-P-016&017_Cover_for_Rocker-Box_Op_Hand001'].material} position={[-0.4985, 0.0078, -0.4985]} rotation={[0, Math.PI / 4, -Math.PI / 2]} />
        <mesh castShadow receiveShadow geometry={nodes['196-P-043&044_Rocker_Inlet_Op_Hand001'].geometry} material={nodes['196-P-043&044_Rocker_Inlet_Op_Hand001'].material} position={[-0.3859, -0.023, -0.58]} rotation={[-0.0061, 0.7854, -1.5665]} />
        <mesh castShadow receiveShadow geometry={nodes['196-P-045&046_Rocker_Exhaust_Op_Hand001'].geometry} material={nodes['196-P-045&046_Rocker_Exhaust_Op_Hand001'].material} position={[-0.4815, 0.0008, -0.4165]} rotation={[0.1574, 0.7792, 1.4597]} />
        <instances.PPiston position={[0.2068, 0.018, -0.2068]} rotation={[0, -Math.PI / 4, -Math.PI / 2]} />
        <instances.PPistonRingA position={[0.1912, 0.018, -0.1912]} rotation={[0, -Math.PI / 4, 0]} />
        <instances.PPistonRingA position={[0.1983, 0.018, -0.1983]} rotation={[0, -Math.PI / 4, -Math.PI / 2]} />
        <instances.PPistonRingB position={[0.1856, 0.018, -0.1856]} rotation={[0, -Math.PI / 4, -1.0581]} />
        <instances.PPistonRingB position={[0.1799, 0.018, -0.1799]} rotation={[0, -Math.PI / 4, -2.0701]} />
        <instances.PPistonRingC position={[0.1813, 0.018, -0.1813]} rotation={[0, -Math.PI / 4, -Math.PI / 2]} />
        <instances.PGidgionPin position={[0.1643, 0.018, -0.1643]} rotation={[0, -Math.PI / 4, -Math.PI / 2]} />
        <instances.BearingNeedleRollerPreviewCfg1 position={[0.1643, 0.018, -0.1643]} rotation={[0, -Math.PI / 4, -Math.PI / 2]} />
        <instances.CirclipExternalBSSM position={[0.1643, -0.042, -0.1643]} rotation={[0, -Math.PI / 4, 0]} />
        <instances.CirclipExternalBSSM position={[0.1643, 0.078, -0.1643]} rotation={[0, -Math.PI / 4, Math.PI]} />
        <instances.PinforPiston position={[0.1983, -0.05, -0.1983]} rotation={[0, -0.5501, -Math.PI]} />
        <instances.PinforPiston position={[0.2393, 0.018, -0.1431]} rotation={[0, -Math.PI / 4, -Math.PI / 2]} />
        <mesh castShadow receiveShadow geometry={nodes.Object961.geometry} material={nodes.Object961.material} />
        <mesh castShadow receiveShadow geometry={nodes.Object962.geometry} material={nodes.Object962.material} />
        <group position={[-0.1527, 0.0736, 0.1527]} rotation={[-Math.PI, 0.5878, -Math.PI]}>
          <mesh castShadow receiveShadow geometry={nodes.ID20.geometry} material={nodes.ID20.material} />
          <mesh castShadow receiveShadow geometry={nodes.ID20_1.geometry} material={nodes.ID20_1.material} />
        </group>
        <mesh castShadow receiveShadow geometry={nodes.Object964.geometry} material={nodes.Object964.material} />
        <mesh castShadow receiveShadow geometry={nodes.Object965.geometry} material={nodes.Object965.material} />
        <instances.Object4 position={[-0.0733, 0.018, -0.032]} rotation={[0, -1.0628, 0]} />
        <instances.Object4 position={[-0.0733, -0.018, -0.032]} rotation={[0, 0.6779, Math.PI]} />
        <mesh castShadow receiveShadow geometry={nodes.Object968.geometry} material={nodes.Object968.material} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/engines/scene-draco.glb')
