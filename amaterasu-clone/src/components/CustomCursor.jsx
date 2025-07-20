import React, { useEffect } from "react";
import "../styles/cursor.scss";
import { animateCursor } from "../animations/cursorAnimation";

const CustomCursor = () => {
  useEffect(() => {
    animateCursor();
  }, []);

  return (
    <>
      <div className="cursor-inner"></div>
      <div className="cursor-outer"></div>
    </>
  );
};

export default CustomCursor;
