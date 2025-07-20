export function runLandingAnimation() {
  const landing = document.querySelector(".landing");
  const circle = landing.querySelector(".circle");

  const positions = [
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    "top-right",
    "bottom-left",
    "bottom-right",
  ];

  const centerRect = circle.getBoundingClientRect();
  const landingRect = landing.getBoundingClientRect();
  const centerX = centerRect.left + centerRect.width / 2 - landingRect.left;
  const centerY = centerRect.top + centerRect.height / 2 - landingRect.top;

  positions.forEach((posClass, index) => {
    const clone = circle.cloneNode(true);
    clone.classList.add(posClass);
    clone.style.position = "absolute";
    clone.style.transition = "all 0.6s ease";
    clone.style.left = `${centerX}px`;
    clone.style.top = `${centerY}px`;
    clone.style.opacity = "0";

    landing.appendChild(clone);

    setTimeout(() => {
      clone.style.opacity = "1";
      clone.classList.add("animate");
      clone.style.left = ""; // allow CSS to reposition via classes
      clone.style.top = "";
    }, 50 + index * 100);
  });

  setTimeout(() => {
    landing.removeChild(circle);
  }, 1500);
}
