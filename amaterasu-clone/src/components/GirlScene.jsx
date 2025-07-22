// import React, { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import { Environment, OrbitControls, useGLTF } from "@react-three/drei"; // ✅ Fixed imports

// function GirlModel() {
//     const { scene } = useGLTF("/models/girl.glb"); // Make sure the path is correct
//     return <primitive object={scene} scale={1.5} />;
// }

// export default function Girl() {
//     return (
//         <Canvas camera={{ position: [0, 0, 2.5], fov: 35 }}>
//             <ambientLight intensity={0.5} />
//             <directionalLight position={[2, 2, 5]} intensity={1} />
//             <Environment preset="sunset" />
//             <Suspense fallback={null}>
//                 <GirlModel />
//             </Suspense>
//             <OrbitControls enableZoom={false} autoRotate />
//         </Canvas>
//     );
// }
