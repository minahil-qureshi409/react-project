// export function runLandingAnimation() {
//   const landing = document.querySelector(".landing");
//   const circles = landing.querySelectorAll(".circle");

//   circles.forEach((circle, index) => {
//     // Optional: Reset any inline styles or classes
//     circle.style.opacity = "0";
//     circle.style.transition = "all 0.6s ease";

//     // Use a small delay between each animation
//     setTimeout(() => {
//       circle.style.opacity = "1";
//       circle.classList.add("animate"); // This assumes .animate in CSS does movement
//     }, 50 + index * 100);
//   });
// }

export function runLandingAnimation() {
  const outerCircles = document.querySelectorAll(".circle.outer");
  const radius = 180; // Distance from center
  const centerX = 0; // Because transform already centers
  const centerY = 0;

  outerCircles.forEach((circle, index) => {
    const angle = (index / outerCircles.length) * (2 * Math.PI);
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;

    setTimeout(() => {
      circle.style.transform = `translate(${centerX + x}px, ${centerY + y}px) scale(1)`;
      circle.classList.add("animate");
    }, index * 100);
  });
}