export default function initModal() {
  const modalContainer = document.querySelector('[data-modal="container"]');
  const btnclose = document.querySelector('[data-modal="fechar"]');
  const btnOpen = document.querySelector('[data-open="open"]');

  function openModal(event) {
    event.preventDefault();
    modalContainer.classList.add("ativo");
  }

  function toggleActive(event) {
    event.preventDefault();
    modalContainer.classList.toggle("ativo");
  }

  function clickAwayModal(event) {
    if (event.target === this) {
      toggleActive(event);
    }
  }
  btnOpen.addEventListener("click", openModal);
  btnclose.addEventListener("click", toggleActive);
  modalContainer.addEventListener("click", clickAwayModal);
}
