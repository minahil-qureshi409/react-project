// src/pages/Main.jsx
import React, { useRef } from 'react';
import Hero from '../sections/Hero';
import Vision from '../sections/Vision';
import Layers from '../sections/Layers';
import Technologies from '../sections/Technologies';
import GuidingPrinciple from '../sections/GuidingPrinciple';

const Main = () => {
  const visionRef = useRef(null); // ⬅️ Create the ref here

  return (
    <div className="main-page">
      <Hero />
      <Vision ref={visionRef} />  {/*⬅️ Pass ref to Vision */}
      <Layers visionRef={visionRef} /> {/*⬅️ Pass ref to Layers */}
      {/* <About  /> ⬅️ Pass ref to Layers */}
       <Technologies/> {/* ⬅️ Pass ref to Layers */}
      <GuidingPrinciple/> {/* ⬅️ Pass ref to Layers */}
    </div>
  );
};

export default Main;
