import React from "react";
import "../styles/header.scss"; // SCSS file

const Header = () => {
  return (
    <header className="header fixed-top d-flex justify-content-between align-items-center px-5 py-2">
  {/* Empty left space */}
  <div className="header-left" style={{ width: "150px" }}></div>

  {/* Center brand absolutely */}
  <div className="brand  fs-5 text-uppercase position-absolute start-50 translate-middle-x mt-4">
    Amaterasu
  </div>

  {/* Right section */}
  <div className="header-right d-flex flex-column align-items-center " style={{ width: "200px" }}>
    <div className="horizontal-line mb-2 mt-5"></div>
        <div className="vision-text text-uppercase small mb-1 mt-2 d-flex align-items-center">
          Vision
          <div className="dots-grid ">
            {Array.from({ length: 9 }).map((_, index) => (
              <span key={index} className="dot"></span>
            ))}
          </div>
        </div>
  </div>
</header>

  );
};

export default Header;
