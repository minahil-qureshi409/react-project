let scrollProgress = 0; // 0 to 1 (percentage)

export const setCursorScrollProgress = (progress) => {
  scrollProgress = progress;
};

export const animateCursor = () => {
  const innerCursor = document.querySelector(".cursor-inner");
  const outerCursor = document.querySelector(".cursor-outer");
  const button = document.querySelector(".start-journey-btn");

  let mouseX = 0,
    mouseY = 0;
  let innerX = 0,
    innerY = 0;
  let outerX = 0,
    outerY = 0;

  let isHovering = false;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (innerX === 0 && innerY === 0) {
      innerX = mouseX;
      innerY = mouseY;
      outerX = mouseX;
      outerY = mouseY;
    }
  });

  const hoverElements = document.querySelectorAll(
    ".start-journey-btn, .triangle-button"
  );

  hoverElements.forEach((el) => {
    el.addEventListener("mouseenter", () => (isHovering = true));
    el.addEventListener("mouseleave", () => (isHovering = false));
  });

  const animate = () => {
    const isRingActive = document.body.classList.contains("cursor-ring-active");
    const layerNumber = document.body.dataset.cursorLayer || "";

    outerX += (mouseX - outerX) * 0.08;
    outerY += (mouseY - outerY) * 0.08;

    innerX += (mouseX - innerX) * 0.2;
    innerY += (mouseY - innerY) * 0.2;

    const scale = isHovering ? 2 : 1;

    outerCursor.style.transform = `translate(${outerX}px, ${outerY}px) translate(-50%, -50%) scale(${scale})`;
    innerCursor.style.transform = `translate(${innerX}px, ${innerY}px) translate(-50%, -50%)`;

    // 📌 Only keep ring mode when scrollProgress is inside the Layers section
    if (isRingActive && scrollProgress > 0 && scrollProgress < 1) {
      outerCursor.classList.add("cursor-ring");
      innerCursor.textContent = layerNumber;

      const progressDeg = scrollProgress * 360;
      outerCursor.style.setProperty("--ring-rotation", `${progressDeg}deg`);
    } else {
      // Back to normal cursor
      outerCursor.classList.remove("cursor-ring");
      innerCursor.textContent = "";
    }

    requestAnimationFrame(animate);
  };

  animate();
};
