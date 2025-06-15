
setTimeout(() => {
  document.getElementById("splash").classList.remove("hidden");
  document.getElementById("splash").style.opacity = "1";
}, 4600);

setTimeout(() => {
  document.getElementById("title").classList.remove("hidden");
  document.getElementById("title").classList.add("visible");
}, 4800);

setTimeout(() => {
  window.location.href = "index.html";
}, 7000);
