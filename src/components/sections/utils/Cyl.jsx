import React, { useRef, useState, useMemo, useCallback } from "react";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useDrag } from "@use-gesture/react";
import { images } from "../../../data/projectShowCase";

const Cyl = React.memo(() => {
  const imagePaths = useMemo(
    () => [
      images.bravius,
      images.appific,
      images.optimistix,
      images.finteezy,
      images.kinderDot,
      images.paypath,
    ],
    []
  );

  const textures = useTexture(imagePaths);
  const cyl = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const rotationSpeed = 0.1;

  useFrame((state, delta) => {
    if (!isDragging) {
      cyl.current.rotation.y += delta * rotationSpeed;
    }
  });

  const bind = useDrag(
    useCallback(({ active }) => {
      setIsDragging(active);
    }, [])
  );

  const segmentAngle = useMemo(
    () => (2 * Math.PI) / textures.length,
    [textures.length]
  );
  const radius = 1.5;
  const height = 1;

  return (
    <group rotation={[0, 0.5, 0.03]}>
      <group ref={cyl} {...bind()}>
        {textures.map((texture, index) => (
          <mesh
            key={index}
            rotation={[0, index * segmentAngle, 0]}
            position={[
              Math.sin(index * segmentAngle) * radius,
              0,
              Math.cos(index * segmentAngle) * radius,
            ]}
          >
            <cylinderGeometry
              args={[radius, radius, height, 20, 1, true, 0, segmentAngle]}
            />
            <meshStandardMaterial
              map={texture}
              transparent
              side={THREE.DoubleSide}
            />
          </mesh>
        ))}
      </group>
    </group>
  );
});

export default Cyl;
