// Abrir e fechar o menu
const eleCabecalhoMenu = document.querySelector('.cabecalho__menu');
const eleCabecalho = document.querySelector('.cabecalho');
const elemsItemLista = document.querySelectorAll('.cabecalho__item-lista');

eleCabecalhoMenu.addEventListener('click', function () {
  eleCabecalho.classList.toggle('cabecalho--aberto');

  elemsItemLista.forEach(function (ele) {
    ele.querySelector('.cabecalho__link').href = 'javascript: void(0)';
  });
});

elemsItemLista.forEach(function (ele) {
  ele.addEventListener('click', function () {
    ele.classList.toggle('cabecalho__item-lista--aberto');
  });
});


const eleCabecalhoLogin = document.querySelector('.cabecalho__link-icone');
const eleInfosPerfil = document.querySelector('.cabecalho__informacoes-perfil');

eleCabecalhoLogin.addEventListener('click', function () {
  eleInfosPerfil.classList.toggle('cabecalho__informacoes-perfil--aberto');
});