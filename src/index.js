import './style.css';
import generateLayout from './layout';
import populateContent from './content';
import generateMenu from './menu';
import generateContact from './contact';

generateLayout();
populateContent();

const home = document.querySelector('.home');
home.addEventListener('click', () => location.reload());

const menu = document.querySelector('.menu');
menu.addEventListener('click', () => generateMenu());

const contact = document.querySelector('.contact');
contact.addEventListener('click', () => generateContact());

const orderNow = document.querySelector('.orderNow');
orderNow.addEventListener('click', () => generateMenu());
