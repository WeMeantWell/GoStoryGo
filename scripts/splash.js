// splash.js - controls the Inkling intro animation

document.addEventListener("DOMContentLoaded", () => {
  const inkling = document.getElementById("inkling");
  const book = document.getElementById("book");
  const logo = document.querySelector(".logo");
  const tagline = document.querySelector(".tagline");
  const inkSquirt = document.getElementById("ink-squirt");

  // Step 1: Inkling enters screen
  inkling.classList.add("enter-stage");

  // Step 2: After delay, simulate book struggle
  setTimeout(() => {
    book.classList.add("wiggle");
    inkling.classList.add("struggle");
  }, 1000);

  // Step 3: Book pops open, Inkling falls back
  setTimeout(() => {
    book.src = "/assets/images/book-open.png";
    inkling.classList.remove("struggle");
    inkling.classList.add("fall-back");
  }, 2500);

  // Step 4: Ink squirt and logo reveal
  setTimeout(() => {
    inkSquirt.classList.add("squirt-visible");
    logo.classList.remove("hidden");
    logo.classList.add("drip-in");
  }, 3500);

  // Step 5: Cleanup ink and reveal tagline
  setTimeout(() => {
    inkSquirt.classList.remove("squirt-visible");
    tagline.classList.remove("hidden");
    tagline.classList.add("fade-in");
  }, 5000);
});