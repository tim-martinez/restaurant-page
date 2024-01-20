import menuItems from './menuItems';

const generateMenu = function () {
  const bodyDiv = document.querySelector('.bodyDiv');

  while (bodyDiv.firstChild) {
    bodyDiv.firstChild.remove();
  }

  const menuDiv = document.createElement('div');
  menuDiv.classList.add('menuDiv');
  bodyDiv.append(menuDiv);

  const h2 = document.createElement('h2');
  h2.textContent = 'Menu';
  menuDiv.append(h2);

  const ul = document.createElement('ul');

  menuItems.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ${item.price}`;
    ul.append(li);
  });

  menuDiv.append(ul);
};
export default generateMenu;
