
window.onload = function () {
  const inkling = document.getElementById("inkling");
  const book = document.getElementById("book");
  const title = document.getElementById("title");
  const tagline = document.getElementById("tagline");

  // Animate Inkling "opening" book
  setTimeout(() => {
    book.style.height = "60px"; // simulate opening
    inkling.style.transform = "translateY(-40px) rotate(-10deg)";
  }, 1000);

  // Inkling falls back
  setTimeout(() => {
    inkling.style.transform = "translateY(20px) rotate(20deg)";
  }, 2000);

  // Inkling hops and squirts ink
  setTimeout(() => {
    inkling.style.transform = "translateY(0) rotate(0deg)";
    title.style.display = "block";
  }, 3000);

  // Handwriting appears
  setTimeout(() => {
    tagline.style.opacity = 1;
  }, 4000);

  // Redirect to main site
  setTimeout(() => {
    window.location.href = "main.html";
  }, 8000);
};
