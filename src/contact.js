const generateContact = function () {
  const bodyDiv = document.querySelector('.bodyDiv');

  while (bodyDiv.firstChild) {
    bodyDiv.firstChild.remove();
  }
};

export default generateContact;
