document.addEventListener('DOMContentLoaded', () => {
  const inkling = document.getElementById('inkling');
  const book = document.getElementById('book');
  const ink = document.getElementById('ink-squirt');
  const logo = document.getElementById('logo');
  const tagline = document.getElementById('tagline');

  // Ensure all elements reset
  ink.style.display = 'none';
  logo.style.display = 'none';
  tagline.style.display = 'none';
  book.style.display = 'block';
  inkling.style.top = '55%';
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
    inkling.style.top = '35%';
  }, 2800);

  setTimeout(() => {
    ink.style.display = 'block';
    logo.style.display = 'none';
  }, 3400);

  setTimeout(() => {
    ink.style.display = 'none';
    logo.style.display = 'block';
  }, 4700);

  setTimeout(() => {
    inkling.style.top = '55%';
    tagline.style.display = 'block';
  }, 5200);
});