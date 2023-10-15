'use client'
import { Suspense, useEffect, useRef } from "react";
// react three fiber
import { TextureLoader } from "three";
import { useThree, useLoader } from "@react-three/fiber";
import { Scroll, ScrollControls, useGLTF} from "@react-three/drei";
//  Components
import illustration from "../public/eyepatch.jpg";

const Sprite = (props) => {
  const { position, w, h } = props;
  const texture = useLoader(TextureLoader, illustration);

  return (
    <group position={position}>
      <sprite scale={[w, h, 1]}>
        <spriteMaterial map={texture} />
      </sprite>
    </group>
  );
};

function Pig(props) {
  const { scene } = useGLTF('/forest_pig.glb')

  return <primitive object={scene} {...props} />
}

function Helicopter(props) {
  const { scene } = useGLTF('/helicopter_2.glb')

  return <primitive object={scene} {...props} />
}

export default function Scene({ w = 3.2, h = 4.4, gap = 0.3 }) {
  const { width } = useThree((state) => state.viewport);
  const illustrations = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const xW = w + gap;

  return (
    <ScrollControls
      horizontal
      damping={4}
      pages={(width / 3 - xW + illustrations.length * xW) / width}
    >
      <Scroll>
        <Suspense fallback={null}>
          <group>
            <Helicopter scale={0.1} position={[ xW - width / 3, 0, 0]}/>
            <Pig scale={0.1} position={[3 * xW - width / 3, 0, 0]}/>
    
          </group>
        </Suspense>
      </Scroll>
    </ScrollControls>
  );
}
