function initTab() {
  const listaAnimais = document.querySelectorAll('.js-lista-animais li');

  const descricaoAnimal = document.querySelectorAll(
    '.js-descricao-animal section'
  );

  descricaoAnimal[0].classList.add('ativo');

  function handleTabImageClick(index) {
    descricaoAnimal.forEach((item) => {
      item.classList.remove('ativo');
    });
    descricaoAnimal[index].classList.add('ativo');
  }

  listaAnimais.forEach((item, index) => {
    item.addEventListener('click', () => {
      handleTabImageClick(index);
    });
  });
}
initTab();

const faqList = document.querySelectorAll('.js-faq-lista dt');
const classActive = 'ativo';

function handleFaqClick() {
  this.classList.toggle(classActive);
  this.nextElementSibling.classList.toggle(classActive);
}

faqList.forEach((item) => {
  item.addEventListener('click', handleFaqClick);
});
