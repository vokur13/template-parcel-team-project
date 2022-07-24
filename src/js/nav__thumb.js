// Dropbox Modal

const refs = {
  openModalBtn: document.querySelector('[data-menu-open]'),
  closeModalBtn: document.querySelector('[data-menu-close]'),
  backdrop: document.querySelector('[data-nav-thumb]'),
  navEnv: document.querySelector('[data-nav-env]'),
  //   modalButton: document.querySelector('[data-mdl-btn]'),
};

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);

refs.backdrop.addEventListener('click', logBackdropClick);
refs.navEnv.addEventListener('click', logBackdropClick);
// refs.modalButton.addEventListener('click', logBackdropClick);

function toggleModal() {
  document.body.classList.toggle('menu-open');
  refs.backdrop.classList.toggle('is-open');
  refs.navEnv.classList.toggle('is-open');
  //   refs.modalButton.classList.toggle('is-open');
}

function logBackdropClick() {
  console.log('Это клик в бекдроп');
}
