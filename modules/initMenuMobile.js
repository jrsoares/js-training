import outsideClick from './outsideclick.js';

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"');
  const menuList = document.querySelector('[data-menu="lista"');
  const eventOutside = ['click', 'touchstart'];

  eventOutside.forEach((item) => {
    menuButton.addEventListener(item, openMenu);
  });

  function openMenu(event) {
    menuList.classList.add('active');
    menuButton.classList.add('active');
    outsideClick(menuList, eventOutside, () => {
      menuList.classList.remove('active');
      menuButton.classList.remove('active');
    });
  }
}
