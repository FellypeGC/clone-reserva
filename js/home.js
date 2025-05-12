// Carrossel Home
const elemsCarrosselBotao = document.querySelectorAll('.carrossel__botao');
const elemCarrosselImagens = document.querySelector('.carrossel__imagens');

function rodarCarrossel(i) {
  let itemAnt = i - 1;

  if (i == 0) {
    itemAnt = 2
  };

  elemsCarrosselBotao[itemAnt].querySelector('div').classList.remove('carrossel__preenchimento--completo');
  elemCarrosselImagens.style = 'transform: translateX(-' + i * 100 + '%)';

  elemsCarrosselBotao[i].querySelector('div').classList.add('carrossel__preenchimento--completo');

  let proxItem = i + 1;

  if (i == 2) {
    proxItem = 0;
  }

  setTimeout(() => {
    rodarCarrossel(proxItem);
  }, 5000);
}

setTimeout(() => {
  rodarCarrossel(0);
}, 1000);