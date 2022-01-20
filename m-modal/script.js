const modalBg = document.querySelector('.modal-background');
const modal = document.querySelector('.modal');
const cancelBtn = document.querySelector('.cancel-btn');

function modalNone() {
  modalBg.style.display = 'none';
  modal.style.display = 'none';
}

cancelBtn.addEventListener('click', (e) => {
  e.preventDefault();
  modalNone();
});

modalBg.addEventListener('click', (e) => {
  e.preventDefault();
  modalNone();
});


