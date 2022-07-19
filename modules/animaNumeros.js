export default function animaNumeros() {
  function animaNum() {
    const numeros = document.querySelectorAll('[data-numero]');
    numeros.forEach((item) => {
      const total = +item.innerText;
      const incremento = total / 100;
      let start = 0;
      const timer = setInterval(() => {
        start = start + incremento;
        item.innerText = Math.floor(start);

        if (start > total) {
          item.innerText = total;
          clearInterval(timer);
        }
      }, 25 * Math.random());
    });
  }

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('ativo')) {
      observer.disconnect();
      animaNum();
    }
  }

  const observerTarget = document.querySelector('.numeros');

  const observer = new MutationObserver(handleMutation);

  observer.observe(observerTarget, { attributes: true });
}
