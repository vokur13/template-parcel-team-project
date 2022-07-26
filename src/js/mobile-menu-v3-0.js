// Mobile Menu

const refs = {
  openMenuBtn: document.querySelector('[data-menu-open]'),
  closeMenuBtn: document.querySelector('[data-menu-close]'),
  menuBackdrop: document.querySelector('[data-thumb]'),
  //   navEnv: document.querySelector('[data-nav-env]'),
  //   modalButton: document.querySelector('[data-mdl-btn]'),
};

refs.openMenuBtn.addEventListener('click', toggleMenu);
refs.closeMenuBtn.addEventListener('click', toggleMenu);

// refs.backdrop.addEventListener('click', logBackdropClick);
// refs.navEnv.addEventListener('click', logBackdropClick);
// refs.modalButton.addEventListener('click', logBackdropClick);

function toggleMenu() {
  document.body.classList.toggle('menu-open');
  refs.menuBackdrop.classList.toggle('is-open');
  //   refs.navEnv.classList.toggle('is-open');
  //   refs.modalButton.classList.toggle('is-open');
}

function logBackdropClick() {
  console.log('Это клик в бекдроп');
}
