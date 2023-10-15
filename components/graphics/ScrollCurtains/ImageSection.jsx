'use client'
import { Plane } from "react-curtains";
import { vertexShader, fragmentShader } from "./shaders";

const ImageSection = ({ project, onPlaneReady = () => {} }) => {
  const uniforms = {
    planeDeformation: {
      name: "uPlaneDeformation",
      type: "1f",
      value: 0
    }
  };

  return (
    <div className="grid w-full max-w-[800px] h-min grid-cols-[repeat(5,1fr)] grid-rows-[repeat(4,1fr)]">
      <div className="col-start-1 col-end-5 row-start-2 row-end-5 z-[2]">
        <h3 className="text-lg leading-none m-0">{project.brand}</h3>
        <p className="text-4xl leading-none mt-4 mb-0 mx-0">{project.description}</p>
      </div>
      <div className="col-start-2 col-end-6 row-start-1 row-end-5 w-full relative z-[1]">
        <Plane
          className="irelative"
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          shareProgram={true}
          widthSegments={12}
          heightSegments={12}
          uniforms={uniforms}
          onReady={onPlaneReady}
        >
          <img src={project.imgUrl} alt="" data-sampler="planeTexture" />
        </Plane>
      </div>
    </div>
  );
};

export default ImageSection;
