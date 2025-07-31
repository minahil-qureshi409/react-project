import React, { useState, useEffect, useRef } from "react";
import "../styles/header.scss";

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const visibleDotIndexes = [0, 2, 4, 6, 8]; // + shape + center

  // Disable scroll + Close on outside click + ESC
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  return (
    <header className="header fixed-top d-flex justify-content-between align-items-center px-5 py-2">
      <div className="header-left" style={{ width: "150px" }}></div>

      <div className="brand fs-5 text-uppercase position-absolute start-50 translate-middle-x mt-4">
        Amaterasu
      </div>

      <div
        className="header-right d-flex flex-column align-items-center"
        style={{ width: "200px" }}
      >
        <div className="horizontal-line mb-2 mt-5"></div>

        <div
          className={`vision-text text-uppercase small mb-1 mt-2 d-flex align-items-center ${
            isHovered ? "hovered" : ""
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="label">{isHovered ? "Menu" : "Vision"}</span>

          <div className={`dots-grid ${isHovered ? "rotate" : ""}`}>
            {Array.from({ length: 9 }).map((_, index) => {
              const showDot = !isHovered || visibleDotIndexes.includes(index);
              return (
                <span
                  key={index}
                  className={`dot ${index === 4 ? "dot-center" : ""} ${
                    showDot ? "" : "hidden"
                  }`}
                />
              );
            })}
          </div>
        </div>

        {/* Dropdown Menu */}
        <div
          ref={menuRef}
          className={`menu-panel-dropdown ${menuOpen ? "open" : ""}`}
        >
          <div className="close-btn" onClick={() => setMenuOpen(false)}>
            CLOSE
          </div>
          <h1>
            Vision
            <br />
            <span>Aleph</span>
          </h1>
          <ul>
            <li>TWITTER</li>
            <li>LINKEDIN</li>
            <li>EMAIL</li>
          </ul>
          <button className="invest-btn" data-text="INVEST WITH US">
            <span className="btn-text">INVEST WITH US</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
