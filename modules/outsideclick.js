export default function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = "data-outside";
  if (element.hasAttributes(outside)) {
    events.forEach((item) => {
      html.addEventListener(item, handleOutSideClick);
    });
    element.setAttribute(outside, "");
  }

  function handleOutSideClick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      events.forEach((item) => {
        html.removeEventListener(item, handleOutSideClick);
      });
      callback();
    }
  }
}
