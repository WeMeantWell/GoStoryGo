document.addEventListener('DOMContentLoaded', () => {
  const inkling = document.getElementById('inkling');
  const book = document.getElementById('book');
  const ink = document.getElementById('ink-squirt');
  const logo = document.querySelector('.logo');
  const tagline = document.querySelector('.tagline');

  // Remove any duplicate elements if they exist
  const allInklings = document.querySelectorAll('#inkling');
  const allLogos = document.querySelectorAll('.logo');
  const allTaglines = document.querySelectorAll('.tagline');

  if (allInklings.length > 1) {
    for (let i = 1; i < allInklings.length; i++) allInklings[i].remove();
  }
  if (allLogos.length > 1) {
    for (let i = 1; i < allLogos.length; i++) allLogos[i].remove();
  }
  if (allTaglines.length > 1) {
    for (let i = 1; i < allTaglines.length; i++) allTaglines[i].remove();
  }

  // Reset all visuals
  inkling.style.top = '55%';
  inkling.style.display = 'block';
  ink.style.display = 'none';
  logo.style.display = 'none';
  tagline.style.display = 'none';
  book.src = 'assets/images/book-closed.png';

  setTimeout(() => { book.src = 'assets/images/book-slight.png'; }, 800);
  setTimeout(() => { book.src = 'assets/images/book-open.png'; }, 1600);
  setTimeout(() => { inkling.style.top = '70%'; }, 2300);
  setTimeout(() => { inkling.style.top = '35%'; }, 2800);
  setTimeout(() => { ink.style.display = 'block'; logo.style.display = 'none'; }, 3400);
  setTimeout(() => { ink.style.display = 'none'; logo.style.display = 'block'; }, 4700);
  setTimeout(() => { inkling.style.top = '55%'; tagline.style.display = 'block'; }, 5200);
});