export const animateCursor = () => {
  const innerCursor = document.querySelector(".cursor-inner");
  const outerCursor = document.querySelector(".cursor-outer");
  const button = document.querySelector(".start-journey-btn"); // your button

  let mouseX = 0, mouseY = 0;
  let innerX = 0, innerY = 0;
  let outerX = 0, outerY = 0;
  let isHovering = false;

  // ✅ listen for hover on the button to set state
  if (button) {
    button.addEventListener("mouseenter", () => {
      isHovering = true;
    });
    button.addEventListener("mouseleave", () => {
      isHovering = false;
    });
  }

  // ✅ update mouse position
  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // on first move, snap cursors to mouse position
    if (innerX === 0 && innerY === 0) {
      innerX = mouseX;
      innerY = mouseY;
      outerX = mouseX;
      outerY = mouseY;
    }
  });

  const animate = () => {
    // smooth follow outer cursor
    outerX += (mouseX - outerX) * 0.08;
    outerY += (mouseY - outerY) * 0.08;

    // smooth follow inner cursor
    innerX += (mouseX - innerX) * 0.2;
    innerY += (mouseY - innerY) * 0.2;

    // ✅ scale only in JS
    const scale = isHovering ? 2 : 1;

    // ✅ set transforms (always include translate)
    outerCursor.style.transform = `translate(${outerX}px, ${outerY}px) translate(-50%, -50%) scale(${scale})`;
    innerCursor.style.transform = `translate(${innerX}px, ${innerY}px) translate(-50%, -50%)`;

    requestAnimationFrame(animate);
  };

  animate();
};
