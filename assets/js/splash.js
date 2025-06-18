document.addEventListener('DOMContentLoaded', () => {
  const inkling = document.getElementById('inkling');
  const book = document.getElementById('book');
  const ink = document.getElementById('ink-squirt');
  const logo = document.querySelector('.logo');
  const tagline = document.querySelector('.tagline');

  // Step 1: Closed Book
  book.src = 'assets/images/book-closed.png';

  setTimeout(() => {
    book.src = 'assets/images/book-slight.png';
  }, 800);

  setTimeout(() => {
    book.src = 'assets/images/book-open.png';
  }, 1600);

  setTimeout(() => {
    // Inkling falls and jumps up
    inkling.style.top = '70%';
  }, 2300);

  setTimeout(() => {
    // Inkling jumps up to center
    inkling.style.top = '35%';
  }, 2800);

  setTimeout(() => {
    // Ink squirt effect
    ink.style.display = 'block';
  }, 3400);

  setTimeout(() => {
    // Reveal logo
    logo.style.display = 'block';
  }, 4100);

  setTimeout(() => {
    // Hide ink
    ink.style.display = 'none';
  }, 4700);

  setTimeout(() => {
    // Return Inkling to bottom
    inkling.style.top = '55%';
    tagline.style.display = 'block';
  }, 5200);
});