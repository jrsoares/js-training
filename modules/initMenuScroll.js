export default function initMenuScroll() {
  const menuScroll = document.querySelectorAll('.js-menu a[href^="#"]');

  function handleMenuScroll(event) {
    const hrefContent = event.currentTarget.getAttribute('href');
    const section = document.querySelector(hrefContent);
    // section.scrollIntoView({
    //   behavior: 'smooth',
    //   block: 'start',
    // });
  }

  menuScroll.forEach((item) => {
    item.addEventListener('click', handleMenuScroll);
  });
}
