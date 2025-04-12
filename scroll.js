// scroll.js
AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
  });
  
  // Dark mode toggle
const toggleBtn = document.getElementById("theme-toggle");
const html = document.documentElement;

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  html.classList.add("dark");
  toggleBtn.textContent = "☀️";
}

// Toggle theme on click
toggleBtn.addEventListener("click", () => {
  html.classList.toggle("dark");
  if (html.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    toggleBtn.textContent = "🌙";
  }
});
