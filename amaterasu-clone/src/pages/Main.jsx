// // src/pages/Main.jsx
import React from 'react';
import Hero from '../sections/Hero';
import Features from '../sections/Features';
import Vision from '../sections/Vision';
import Layers from '../sections/Layers';
// // import Services from '../sections/Services';
// // import Contact from '../sections/Contact';
// import ShaderBackground from '../components/ShaderBackground';
// import FixedBackground from "../components/FixedBackground";
// import Sound from "../components/Sound";

const Main = () => {
  return (
    <div className="main-page">
      {/* Optional animated background using three.js */}
      {/* <ShaderBackground /> */}

      {/* Main sections */}
      
      <Hero />
      <Vision />
      <Layers />
        {/* <Sound /> */}
      {/* <Features /> */}
      {/* <Contact /> */}
    </div>
  );
};

export default Main;
