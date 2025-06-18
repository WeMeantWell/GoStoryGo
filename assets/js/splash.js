document.addEventListener('DOMContentLoaded', () => {
  const inkling = document.getElementById('inkling');
  const book = document.getElementById('book');
  const ink = document.getElementById('ink-squirt');
  const logo = document.querySelector('.logo');
  const tagline = document.querySelector('.tagline');

  // Reset initial states
  inkling.style.top = '55%';
  logo.style.display = 'none';
  ink.style.display = 'none';
  tagline.style.display = 'none';

  book.src = 'assets/images/book-closed.png';

  setTimeout(() => {
    book.src = 'assets/images/book-slight.png';
  }, 800);

  setTimeout(() => {
    book.src = 'assets/images/book-open.png';
  }, 1600);

  setTimeout(() => {
    inkling.style.top = '70%';
  }, 2300);

  setTimeout(() => {
    inkling.style.top = '40%';
  }, 2800);

  setTimeout(() => {
    ink.style.display = 'block';
  }, 3400);

  setTimeout(() => {
    ink.style.display = 'none';
  }, 4700);

  setTimeout(() => {
    logo.style.display = 'block';
  }, 5000);

  setTimeout(() => {
    inkling.style.top = '55%';
    tagline.style.display = 'block';
  }, 5600);
});