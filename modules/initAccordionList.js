export default function initAccordionList() {
  const faqList = document.querySelectorAll('.js-faq-lista dt');
  const classActive = 'ativo';

  function handleFaqClick() {
    this.classList.toggle(classActive);
    this.nextElementSibling.classList.toggle(classActive);
  }

  faqList.forEach((item) => {
    item.addEventListener('click', handleFaqClick);
  });
}
