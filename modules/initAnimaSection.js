export default function initAnimaSection() {
  const sections = document.querySelectorAll('.js-section');
  const windowHeigth = window.innerHeight * 0.6;

  function animaScroll() {
    sections.forEach((item) => {
      const sectionTop = item.getBoundingClientRect().top;
      const sectionVisible = sectionTop - windowHeigth < 0;

      if (sectionVisible) {
        item.classList.add('ativo');
      } else if (item.classList.contains('ativo')) {
        item.classList.remove('ativo');
      }
    });
  }

  animaScroll();

  window.addEventListener('scroll', animaScroll);
}
