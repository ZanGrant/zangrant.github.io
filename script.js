function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

$(document).ready(function () {
    // animation Script for display
    const animationScript = ["Web Development", "UI/UX Design", "Game Development","Programming"];

    // Typing animation script
    new Typed(".typing", {
      strings: animationScript,
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });
  
    new Typed(".typing2", {
      strings: animationScript,
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });
});
