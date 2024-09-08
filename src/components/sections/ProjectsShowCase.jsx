import React from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cyl from "../sections/utils/Cyl";
import {
  Bloom,
  EffectComposer,
  ToneMapping,
} from "@react-three/postprocessing";

const ProjectsShowCase = () => {
  return (
    <>
      <Canvas flat camera={{ fov: 40 }}>
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ambientLight />
        <Cyl />
        <EffectComposer>
          <Bloom
            mipmapBlur
            intensity={0}
            luminanceThreshold={0}
            luminanceSmoothing={0}
          />
          {/* <ToneMapping adaptive /> */}
        </EffectComposer>
      </Canvas>
    </>
  );
};

export default ProjectsShowCase;
