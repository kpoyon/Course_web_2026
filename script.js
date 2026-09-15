const root = document.documentElement;
const toggle = document.getElementById("theme-toggle");
const icon = toggle.querySelector(".theme-toggle__icon");
const text = toggle.querySelector(".theme-toggle__text");

function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  const isDark = theme === "dark";
  icon.textContent = isDark ? "☀️" : "🌙";
  text.textContent = isDark ? "Modo claro" : "Modo oscuro";
  localStorage.setItem("theme", theme);
}

// Al cargar: usa lo guardado o la preferencia del sistema
const saved = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
applyTheme(saved || (prefersDark ? "dark" : "light"));

toggle.addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(next);
});
