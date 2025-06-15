
setTimeout(() => {
  const book = document.getElementById("book");
  book.src = "img/book_open.png";
}, 3000);

setTimeout(() => {
  document.getElementById("splash").classList.remove("hidden");
  document.getElementById("splash").classList.add("visible");
}, 4200);

setTimeout(() => {
  document.getElementById("title").classList.remove("hidden");
  document.getElementById("title").classList.add("visible");
}, 4800);

setTimeout(() => {
  window.location.href = "index.html";
}, 6500);
