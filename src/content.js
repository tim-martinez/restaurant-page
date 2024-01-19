const populateContent = function () {
  const header = document.querySelector('.header');
  const bodyDiv = document.querySelector('.bodyDiv');
  const footer = document.querySelector('.footer');

  const byte = document.createElement('h1');
  const sushi = document.createElement('h1');
  byte.textContent = 'BYTE';
  sushi.textContent = 'SUSHI';
  byte.classList.add('neon-text');
  sushi.classList.add('neon-text');
  header.append(byte);
  header.append(sushi);

  const nav = document.createElement('ul');
  const home = document.createElement('li');
  const menu = document.createElement('li');
  const contact = document.createElement('li');

  menu.classList.add('menu');
  home.classList.add('home');
  contact.classList.add('contact');

  home.textContent = 'Home';
  menu.textContent = 'Menu';
  contact.textContent = 'Contact';

  nav.append(home);
  nav.append(menu);
  nav.append(contact);
  header.append(nav);

  const orderNow = document.createElement('div');
  orderNow.classList.add('orderNow');
  orderNow.classList.add('menu');
  orderNow.textContent = 'Order Now';
  bodyDiv.append(orderNow);
};

export default populateContent;
