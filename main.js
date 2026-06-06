console.log("main.js loaded");

// Gravity Homepage Capsule
window.addEventListener("DOMContentLoaded", () => {
  console.log("Gravity Homepage Capsule initialized");

  // Smooth scrolling for nav links
  document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', evt => {
      evt.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Active section highlighting
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav a");

  const activateSection = () => {
    let index = sections.length;

    while (--index && window.scrollY + 80 < sections[index].offsetTop) {}

    navLinks.forEach(link => link.classList.remove("active"));
    navLinks[index].classList.add("active");
  };

  activateSection();
  window.addEventListener("scroll", activateSection);

  console.log("Navigation capsule active");
});
