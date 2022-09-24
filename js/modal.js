(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open]"),
        modal__closeModalBtn: document.querySelector("[data-modal-modal__close]"),
        modal: document.querySelector("[data-modal]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.modal__closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
    }
})();