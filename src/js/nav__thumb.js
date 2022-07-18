// Dropbox Modal

const refs = {
  openModalBtn: document.querySelector('[data-menu-open]'),
  closeModalBtn: document.querySelector('[data-menu-close]'),
  backdrop: document.querySelector('[data-nav-thumb]'),
};

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);

refs.backdrop.addEventListener('click', logBackdropClick);

function toggleModal() {
  document.body.classList.toggle('menu-open');
  refs.backdrop.classList.toggle('is-hidden');
}

function logBackdropClick() {
  console.log('Это клик в бекдроп');
}
