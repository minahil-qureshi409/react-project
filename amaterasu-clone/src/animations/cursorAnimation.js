export const animateCursor = () => {
  const innerCursor = document.querySelector(".cursor-inner");
  const outerCursor = document.querySelector(".cursor-outer");

  let mouseX = 0, mouseY = 0;
  let innerX = 0, innerY = 0;
  let outerX = 0, outerY = 0;

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

  const animate = () => {
    outerX += (mouseX - outerX) * 0.08;
    outerY += (mouseY - outerY) * 0.08;
    outerCursor.style.transform = `translate(${outerX}px, ${outerY}px) translate(-50%, -50%)`;

    innerX += (mouseX - innerX) * 0.2;
    innerY += (mouseY - innerY) * 0.2;
    innerCursor.style.transform = `translate(${innerX}px, ${innerY}px) translate(-50%, -50%)`;

    requestAnimationFrame(animate);
  };

  animate();
};
