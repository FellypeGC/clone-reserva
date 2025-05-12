const elemsMenuCabecalho = document.querySelectorAll('.menu__expansivel-cabecalho');


elemsMenuCabecalho.forEach(function (ele) {
  ele.addEventListener('click', function () {
    ele.parentElement.classList.toggle('menu__expansivel--aberto');
  });
});


const elemsFecharFiltro = document.querySelector('.menu__fechar-filtro');
const elemsAbrirFiltro = document.querySelector('.produtos__cabecalho-filtrar');

elemsFecharFiltro.addEventListener('click', function () {
  document.body.classList.remove('filtro-aberto');
});

elemsAbrirFiltro.addEventListener('click', function () {
  document.body.classList.add('filtro-aberto');
});