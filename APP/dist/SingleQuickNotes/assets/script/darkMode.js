// ================ DARK MODE ==========================================================================>

var nightModeToggleButton = document.querySelector(".nightModeButton");
var container = document.querySelector(".container");
var body = document.querySelector("body");
var nav = document.querySelector("nav");
var main = document.querySelector("main");

nightModeToggleButton.onclick = function () {
  nightModeToggleButton.classList.toggle("night-mode");
  body.classList.toggle("night-mode");
  nav.classList.toggle("night-mode");
  main.classList.toggle("night-mode");
  container.classList.toggle("night-mode");
};
