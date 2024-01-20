const generateContact = function () {
  const bodyDiv = document.querySelector('.bodyDiv');

  while (bodyDiv.firstChild) {
    bodyDiv.firstChild.remove();
  }

  const contactDiv = document.createElement('div');
  contactDiv.classList.add('contactDiv');
  bodyDiv.append(contactDiv);

  const addressTitle = document.createElement('h2');
  const addressText = document.createElement('p');
  const addressText2 = document.createElement('p');
  const phoneTitle = document.createElement('h2');
  const phoneText = document.createElement('p');

  addressTitle.textContent = 'Address';
  addressText.textContent = '456 Cherry Blossom Lane';
  addressText2.textContent = 'Springfield, CA 98765';
  phoneTitle.textContent = 'Phone';
  phoneText.textContent = '(123) 456 7890';

  contactDiv.append(addressTitle);
  contactDiv.append(addressText);
  contactDiv.append(addressText2);
  contactDiv.append(phoneTitle);
  contactDiv.append(phoneText);
};

export default generateContact;
