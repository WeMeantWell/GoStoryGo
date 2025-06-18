// splash.js - Inkling jumps to center, squirts ink, logo appears

document.addEventListener("DOMContentLoaded", () => {
  const inkling = document.getElementById("inkling");
  const book = document.getElementById("book");
  const logo = document.querySelector(".logo");
  const tagline = document.querySelector(".tagline");
  const inkSquirt = document.getElementById("ink-squirt");

  inkling.classList.add("enter-stage");

  setTimeout(() => {
    book.src = "assets/images/book-slight.png";
    inkling.classList.add("struggle");
  }, 1000);

  setTimeout(() => {
    book.src = "assets/images/book-opening.png";
  }, 1700);

  setTimeout(() => {
    book.src = "assets/images/book-open.png";
    inkling.classList.remove("struggle");
    inkling.classList.add("fall-back");
  }, 2500);

  setTimeout(() => {
    inkling.classList.remove("fall-back");
    inkling.classList.add("jump-up-center");
  }, 3500);

  setTimeout(() => {
    inkSquirt.classList.add("squirt-visible");
  }, 4200);

  setTimeout(() => {
    inkSquirt.classList.add("squirt-drip-away");
    logo.classList.remove("hidden");
    logo.classList.add("drip-in");
  }, 5400);

  setTimeout(() => {
    tagline.classList.remove("hidden");
    tagline.classList.add("fade-in");
  }, 6200);
});