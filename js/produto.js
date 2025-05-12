const elemsCarrosselBotaoProduto = document.querySelectorAll('.s-produto__carrossel-botao');
const elemCarrosselImagensProduto = document.querySelector('.s-produto__carrossel-itens');

elemsCarrosselBotaoProduto.forEach(function (elem, i) {
  elem.addEventListener('click', function () {
    elemCarrosselImagensProduto.style = 'transform: translateX(-' + i * 100 + '%)';
    elemsCarrosselBotaoProduto.forEach(function (ele) {
      if (ele != elem) {
        ele.classList.remove('s-produto__carrossel-botao--selecionado');
      } else {
        ele.classList.add('s-produto__carrossel-botao--selecionado');
      }
    });
  });
});

