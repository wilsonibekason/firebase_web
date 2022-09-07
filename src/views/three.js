import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import React, { Suspense } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { MeshNormalMaterial } from "three";
export default function Canvas() {
  let textture = "";
  const colorMap = useLoader(TextureLoader, textture);
  const canvas = new Canvas();
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.fillStyle = "#000";
  return (
    <canvas className="bg-red-400 h-[500px]">
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[-2, 5, 2]} intensity={1} />
      <Suspense fallback={null}>
        {/* box  */}
        <mesh rotation={[90, 0, 20]}>
          <boxBufferGeometry attach={"geometry"} args={[3, 3, 3]} />
          {/* <meshLambertMaterial attach={"material"} color={"blue"} /> */}
          <meshStandardMaterial map={colorMap} />
          <meshNormalMaterial attach={"material"} />
          <meshStandardMaterial attach={"material"} color={"blue"} />
        </mesh>
        {/* end of box */}
      </Suspense>
    </canvas>
  );
}

const Spheres = () => {
  return (
    <Sphere visible args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial
        color={"red"}
        attach="material"
        distort={0.3}
        speed={1.5}
        roughness={1}
      />
    </Sphere>
  );
};
