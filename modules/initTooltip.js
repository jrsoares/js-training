export default function initTooltip() {
  const toolTips = document.querySelectorAll("[data-tootip]");
  toolTips.forEach((item) => {
    item.addEventListener("mouseover", onMouseOver);
  });

  function onMouseOver(event) {
    const tooltipBox = createTooltipBox(this);

    onMouseLeave.tooltipBox = tooltipBox;
    this.addEventListener("mouseleave", onMouseLeave);

    onMouseLeave.element = this;
    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener("mousemove", onMouseMove);
  }

  const onMouseLeave = {
    handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener("mouseleave", onMouseLeave);
      this.element.removeEventListener("mousemove", onMouseMove);
    },
  };

  const onMouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.top = event.pageY + +20 + "px";
      this.tooltipBox.style.left = event.pageX + 20 + "px";
    },
  };

  function createTooltipBox(element) {
    const toolTipBox = document.createElement("div");
    const contentTooltip = element.getAttribute("aria-label");
    toolTipBox.classList.add("tooltip");
    toolTipBox.innerText = contentTooltip;
    document.body.appendChild(toolTipBox);
    return toolTipBox;
  }
}
