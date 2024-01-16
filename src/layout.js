const generateLayout = function () {
  const content = document.querySelector('.content');
  const header = document.createElement('div');
  const footer = document.createElement('div');
  const bodyDiv = document.createElement('div');

  header.classList.add('header');
  footer.classList.add('footer');
  bodyDiv.classList.add('bodyDiv');

  content.appendChild(header);
  content.appendChild(bodyDiv);
  content.appendChild(footer);
};

export default generateLayout;
