document.addEventListener('DOMContentLoaded', () => {
  const inkling = document.getElementById('inkling');
  const book = document.getElementById('book');
  const ink = document.getElementById('ink-squirt');
  const logo = document.querySelector('.logo');
  const tagline = document.querySelector('.tagline');

  // Reset initial states to prevent duplication
  inkling.style.top = '55%';
  inkling.style.display = 'block';
  ink.style.display = 'none';
  logo.style.display = 'none';
  tagline.style.display = 'none';

  // Book sequence
  book.src = 'assets/images/book-closed.png';

  setTimeout(() => {
    book.src = 'assets/images/book-slight.png';
  }, 800);

  setTimeout(() => {
    book.src = 'assets/images/book-open.png';
  }, 1600);

  // Inkling crouch and jump
  setTimeout(() => {
    inkling.style.top = '70%';
  }, 2300);

  setTimeout(() => {
    inkling.style.top = '35%';
  }, 2800);

  // Ink splash appears
  setTimeout(() => {
    ink.style.display = 'block';
    logo.style.display = 'none';
  }, 3400);

  // Ink splash fades and logo appears
  setTimeout(() => {
    ink.style.display = 'none';
    logo.style.display = 'block';
  }, 4700);

  // Inkling returns to base and tagline appears
  setTimeout(() => {
    inkling.style.top = '55%';
    tagline.style.display = 'block';
  }, 5200);
});