// // import React, { Suspense } from "react";
// // import { Canvas } from "@react-three/fiber";
// // import { Environment, OrbitControls, useGLTF } from "@react-three/drei"; // ✅ Fixed imports

// // function GirlModel() {
// //   const { scene } = useGLTF("/models/girl.glb"); // Make sure the path is correct
// //   return <primitive object={scene} scale={1.5} />;
// // }

// // export default function Girl() {
// //   return (
// //     <Canvas
// //     //   style={{ background: "black" }}
// //       camera={{ position: [0, 0, 2.5], fov: 35 }}
// //     >
// //       <ambientLight intensity={0.5} />
// //       <directionalLight position={[2, 2, 5]} intensity={1} />
// //       {/* <Environment preset="sunset" /> */}
// //       <Suspense fallback={null}>
// //         <GirlModel />
// //       </Suspense>
// //       <OrbitControls enableZoom={false} autoRotate />
// //     </Canvas>
// //   );
// // }



// // src/components/HeroGirlModel.jsx
// import { useRef } from "react";
// import { useGLTF } from "@react-three/drei";
// import { useFrame } from "@react-three/fiber";
// import { useThree } from "@react-three/fiber";

// export default function HeroGirlModel({ mouse }) {
//   const model = useGLTF("/model/girl.glb");
//   const ref = useRef();
//   const { viewport } = useThree();

//   useFrame(() => {
//     // Animate based on mouse movement
//     if (ref.current && mouse.current) {
//       ref.current.rotation.y = mouse.current.x / 500;
//       ref.current.rotation.x = -mouse.current.y / 1000;
//     }
//   });

//   return (
//     <primitive
//       object={model.scene}
//       ref={ref}
//       position={[0, -1.5, 0]}
//       scale={viewport.width < 6 ? 1.3 : 2}
//     />
//   );
// }


// // src/components/HeroGirlModel.jsx
// import React, { useRef } from "react";
// import { useFrame } from "@react-three/fiber";
// import { useGLTF } from "@react-three/drei";

// export default function HeroGirlModel({ mouse }) {
//   const ref = useRef();
//   const { scene } = useGLTF("/models/girl.glb");

//   useFrame(() => {
//     if (ref.current && mouse) {
//       ref.current.rotation.y = mouse.x * 0.5;
//       ref.current.rotation.x = mouse.y * 0.2;
//     }
//   });

//   return <primitive ref={ref} object={scene} scale={2.3} position={[0, -1.5, 0]} />;
// }
