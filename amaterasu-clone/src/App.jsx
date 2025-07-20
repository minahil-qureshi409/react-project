import React, { useState } from "react";
import CustomCursor from "./components/CustomCursor";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Features from "./sections/Features";
import Landing from "./pages/Landing";
import "./styles/globals.scss";

const App = () => {
  const [entered, setEntered] = useState(false);

  return (
    <>
      <CustomCursor />
      {!entered ? (
        <Landing onEnter={() => setEntered(true)} />
      ) : (
        <>
          <Hero />
          <About />
          <Features />
        </>
      )}
    </>
  );
};

export default App;
