const deleteBtn = document.querySelector('.delete');
const modalBg = document.querySelector('.modal-background');
const modal = document.querySelector('.modal');
const cancelBtn = document.querySelector('.cancel-btn');

function showModal() {
  modalBg.style.display = 'block';
  modal.style.display = 'block';
}

function hideModal(e) {
  e.preventDefault();
  modalBg.style.display = 'none';
  modal.style.display = 'none';
}

deleteBtn.addEventListener('click', showModal);

cancelBtn.addEventListener('click', hideModal);

modalBg.addEventListener('click', hideModal);


