const e={openModalBtn:document.querySelector("[data-menu-open]"),closeModalBtn:document.querySelector("[data-menu-close]"),backdrop:document.querySelector("[data-nav-thumb]"),navEnv:document.querySelector("[data-nav-env]"),modalButton:document.querySelector("[data-mdl-btn]")};function n(){document.body.classList.toggle("menu-open"),e.backdrop.classList.toggle("is-open"),e.navEnv.classList.toggle("is-open"),e.modalButton.classList.toggle("is-open")}function t(){console.log("Это клик в бекдроп")}e.openModalBtn.addEventListener("click",n),e.closeModalBtn.addEventListener("click",n),e.backdrop.addEventListener("click",t),e.navEnv.addEventListener("click",t),e.modalButton.addEventListener("click",t);
//# sourceMappingURL=index.50a21249.js.map
