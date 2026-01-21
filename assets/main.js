const buttonLogin = document.querySelector('#button-login');

buttonLogin.addEventListener('click', function () {
  const modalId = buttonLogin.getAttribute('data-modal');
  const modal = document.getElementById(modalId);

  modal.showModal();
  
});

const closeButtons = document.querySelector('.close-modal');

closeButtons.addEventListener('click', function () {
  const modalId = buttonLogin.getAttribute('data-modal');
  const modal = document.getElementById(modalId);

  modal.close();
  
});