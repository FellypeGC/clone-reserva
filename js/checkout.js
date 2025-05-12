const elemBotaoEntrega = document.querySelector('.checkout__end-entrega');
const elemCheckoutEndereco = document.querySelector('.checkout__endereco');

elemBotaoEntrega.addEventListener('click', function () {
  elemCheckoutEndereco.classList.add('checkout__endereco--visivel');
});