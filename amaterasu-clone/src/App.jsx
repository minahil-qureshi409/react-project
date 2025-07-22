import React, { useState } from "react";
import CustomCursor from "./components/CustomCursor";
// import Hero from "./sections/Hero";
// import About from "./sections/About";
// import Features from "./sections/Features";
import Landing from "./pages/Landing";
import "./styles/globals.scss";
import Main from './pages/Main'; // or wherever your Main.jsx file is located

// import ShaderBackground from "./components/ShaderBackground";

const App = () => {
  const [entered, setEntered] = useState(false);

  return (
    <>
      <CustomCursor />
      {!entered ? (
        <Landing onEnter={() => setEntered(true)} />
      ) : (
        <>
        {/* <ShaderBackground /> */}
          <Main />
          
        </>
      )}
    </>
  );
};

export default App;
