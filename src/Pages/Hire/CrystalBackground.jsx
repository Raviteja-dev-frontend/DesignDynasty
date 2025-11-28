import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, MeshDistortMaterial } from "@react-three/drei";

const CrystalBackground = () => {
  return (
    <Canvas
      style={{ position: "absolute", top: 0, left: 0, zIndex: 0 }}
      camera={{ position: [0, 0, 5], fov: 75 }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Suspense fallback={null}>
        <mesh rotation={[0.4, 0.3, 0]}>
          <icosahedronGeometry args={[2, 3]} />
          <MeshDistortMaterial
            color="#b0884d"
            attach="material"
            distort={0.4}
            speed={1.5}
            roughness={0.1}
          />
        </mesh>
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
};

export default CrystalBackground;
