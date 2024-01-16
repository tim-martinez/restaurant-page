const populateContent = function () {
  const header = document.querySelector('.header');
  const bodyDiv = document.querySelector('.bodyDiv');
  const footer = document.querySelector('.footer');

  const h1 = document.createElement('h1');

  h1.textContent = 'BYTE SUSHI';
  h1.classList.add('neon-text');

  header.append(h1);
};

export default populateContent;
