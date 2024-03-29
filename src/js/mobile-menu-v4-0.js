(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  //   const mobileMenuRef = document.querySelector('[data-menu]');
  const menuBackdrop = document.querySelector('[data-thumb]');

  menuBtnRef.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    //     mobileMenuRef.classList.toggle('env-open');
    menuBackdrop.classList.toggle('is-open');
  });
})();
