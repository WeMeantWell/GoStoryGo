
setTimeout(() => {
  document.getElementById("splash").classList.remove("hidden");
  document.getElementById("splash").style.opacity = "1";
}, 4300);

setTimeout(() => {
  document.getElementById("logo").classList.remove("hidden");
  document.getElementById("logo").style.opacity = "1";
}, 5000);

setTimeout(() => {
  document.getElementById("tagline").classList.remove("hidden");
}, 5500);

setTimeout(() => {
  window.location.href = "main.html";
}, 8500);
