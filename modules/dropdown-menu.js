import outsideClick from "./outsideclick.js";

export default function initDropDownMenu() {
  const dropdownMenu = document.querySelectorAll("[data-dropdown]");

  dropdownMenu.forEach((item) => {
    ["click", "touchstart"].forEach((action) => {
      item.addEventListener(action, onClick);
    });
  });

  function onClick(event) {
    event.preventDefault();
    this.classList.add("ativo");
    outsideClick(this, ["click", "touchstart"], () => {
      this.classList.remove("ativo");
    });
  }
}
