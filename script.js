const menu = document.getElementById("menu");
const menuToggleBtn = document.getElementById("nav-toggle_btn");

const x1 = document.querySelector(".x-1");
const x2 = document.querySelector(".x-2");
const x3 = document.querySelector(".x-3");

let isActive = false;

menuToggleBtn.addEventListener("click", () => {
  if (!isActive) {
    menu.classList.add("w-menu");
    isActive = true;


    x1.classList.add("rotate-p45", "absolute");
    x2.classList.add("rotate-m45", "absolute");
    x3.style.display = "none";
  } else {
    menu.classList.remove("w-menu");
    isActive = false;

    x1.classList.remove("rotate-p45", "absolute");
    x2.classList.remove("rotate-m45", "absolute");
    x3.style.display = "block";
  }
});