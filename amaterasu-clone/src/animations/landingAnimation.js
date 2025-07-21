export function runLandingAnimation() {
  const landing = document.querySelector(".landing");
  const circles = landing.querySelectorAll(".circle");

  circles.forEach((circle, index) => {
    // Optional: Reset any inline styles or classes
    circle.style.opacity = "0";
    circle.style.transition = "all 0.6s ease";

    // Use a small delay between each animation
    setTimeout(() => {
      circle.style.opacity = "1";
      circle.classList.add("animate"); // This assumes .animate in CSS does movement
    }, 50 + index * 100);
  });
}