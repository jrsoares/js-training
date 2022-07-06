export default function dropdownMenu() {
  const dropdownMenu = document.querySelectorAll('[data-dropdown]');

  dropdownMenu.forEach((item) => {
    ['click', 'touchstart'].forEach((action) => {
      item.addEventListener(action, onClick);
    });
  });

  function onClick(event) {
    event.preventDefault();
    this.classList.toggle('ativo');
  }
}
