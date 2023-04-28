const resetButton = document.querySelector('.btn-secondary');

resetButton.addEventListener('click', (event) => {
  event.preventDefault();
  document.querySelector('form').reset();
});