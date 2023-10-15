'use client'
import React, { useState, useRef } from "react";
import { useCurtainsEvent } from "react-curtains";
import ImageSection from "./ImageSection";

const ImageGroup = ({ data }) => {
  // keep track of the planes
  const [planes, setPlanes] = useState([]);

  const planesDeformations = useRef(0);

  useCurtainsEvent(
    "onRender",
    (curtains) => {
      // update our planes deformation
      // increase/decrease the effect
      planesDeformations.current = curtains.lerp(
        planesDeformations.current,
        0,
        0.095
      );

      // update planes deformations
      planes.forEach((plane) => {
        plane.uniforms.planeDeformation.value = planesDeformations.current;
      });
    },
    [planes]
  );

  useCurtainsEvent("onScroll", (curtains) => {
    // get scroll deltas to apply the effect on scroll
    const delta = curtains.getScrollDeltas();

    // invert value for the effect
    delta.y = -delta.y;

    // threshold
    if (delta.y > 20) {
      delta.y = 20;
    } else if (delta.y < -20) {
      delta.y = -20;
    }

    if (Math.abs(delta.y) > Math.abs(planesDeformations.current)) {
      planesDeformations.current = curtains.lerp(
        planesDeformations.current,
        delta.y,
        0.5
      );
    }
  });

  const onPlaneReady = (plane) => {
    setPlanes((planes) => [...planes, plane]);
  };

  return (
    <div className="imageGroup">
      {data.map((project) => (
        <ImageSection
          key={project.brand}
          project={project}
          onPlaneReady={onPlaneReady}
        />
      ))}
    </div>
  );
};

export default ImageGroup;
