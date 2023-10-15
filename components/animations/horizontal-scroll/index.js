import { Canvas } from "@react-three/fiber";
import "./HorizontalScroll.scss";
import { Suspense } from "react";
import { PerspectiveCamera, Cloud } from "@react-three/drei";
import Scene from "features/Scene/Scene";
import { useRef } from "react";
const HorizontalScroll= () => {
  const scrollPosRef = useRef({
    current: 0,
    target: 0
  });

  const canvasSizeRef = useRef({
    width: 0,
    height: 0
  });

  return (
    <>
      {/* <Home /> */}
      <Canvas
        frameloop="demand"
        dpr={Math.max(window.devicePixelRatio, 2)}
        linear={true}
        flat={true}
        gl={{ antialias: true, alpha: true }}
        onCreated={(state) => {
          const { viewport } = state;
          const { width, height } = viewport;
          canvasSizeRef.current.width = width;
          canvasSizeRef.current.height = height;
        }}
      >
        <Suspense fallback={null}>
          <PerspectiveCamera
            makeDefault
            position={[0, 0, 5]}
            near={0.1}
            far={100}
            fov={75}
          />
          <color attach="background" args={["#9e9e9e"]} />
          <Scene scrollPosRef={scrollPosRef} />

        </Suspense>

        <Cloud
  opacity={0.5}
  speed={0.4} // Rotation speed
  width={10} // Width of the full cloud
  depth={1.5} // Z-dir depth
  segments={20} // Number of particles
  color={'#f797b1'}
/>
      </Canvas>
    </>
  );
};

export default HorizontalScroll;
