const shrink_btn = document.querySelector(".shrink-btn");
const sidebar_links = document.querySelectorAll(".sidebar-links a");
const active_tab = document.querySelector(".active-tab");
const logo = document.querySelector(".logo");
const shortcuts = document.querySelector(".sidebar-links h4");
const tooltip_elements = document.querySelectorAll(".tooltip-element");

let r_art = document.querySelector(".r-art");
let utm = document.querySelector(".utm");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");

r_art.addEventListener("click", () => {
  slider.classList.add("moveslider");
  formSection.classList.add("form-section-move");
});

utm.addEventListener("click", () => {
  slider.classList.remove("moveslider");
  formSection.classList.remove("form-section-move");
});

let activeIndex;

shrink_btn.addEventListener("click", () => {
  document.body.classList.toggle("shrink");
  setTimeout(moveActiveTab, 400);

  shrink_btn.classList.add("hovered");
  logo.style.display == "none";
  setTimeout(() => {
    shrink_btn.classList.remove("hovered");
  }, 500);
});

// Using JavaScript
const link = document.querySelector("a");
link.addEventListener("click", () => {
  link.classList.toggle("active");
});
