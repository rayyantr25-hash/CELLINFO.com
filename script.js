function toggleMenu() {
  const menu = document.getElementById("navLinks");
  const content = document.getElementById("pageContent");
  menu.classList.toggle("show");
  content.classList.toggle("blur");
}


document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("navLinks").classList.remove("show");
    document.getElementById("pageContent").classList.remove("blur");
  });
});

// Reveal Animation Logic
const revealElements = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, { threshold: 0.1 });
  const elements = document.querySelectorAll('.reveal');
  elements.forEach((el) => observer.observe(el));
};

window.addEventListener("DOMContentLoaded", revealElements);
