let scrollProgress = 0; // 0 to 1 (percentage)
let storyProgress = 0; // loader for stories (0 → 1)
let loaderInterval = null;

export const setCursorScrollProgress = (progress) => {
  scrollProgress = progress;
};

// Start loader when hovering over stories
export const startStoryLoader = (onComplete) => {
  clearInterval(loaderInterval);
  storyProgress = 0;

  loaderInterval = setInterval(() => {
    storyProgress += 0.01; // adjust speed
    if (storyProgress >= 1) {
      storyProgress = 0;
      onComplete(); // trigger next story
    }
  }, 50);
};

// Stop loader when leaving
export const stopStoryLoader = () => {
  clearInterval(loaderInterval);
  storyProgress = 0;
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
    } 
     // Show arrow always in stories
  else if (document.body.classList.contains("stories-active")) {
      innerCursor.textContent = "→";

      // Rotate loader ring
      const progressDeg = storyProgress * 360;
      outerCursor.classList.add("cursor-ring");
      outerCursor.style.setProperty("--ring-rotation", `${progressDeg}deg`);
    } else {
      innerCursor.textContent = "";
      outerCursor.classList.remove("cursor-ring");
    }

    requestAnimationFrame(animate);
  };

  animate();
};
