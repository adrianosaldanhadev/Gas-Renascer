
document.getElementById('pedidoForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const nome = document.getElementById('nome').value;
  const telefone = document.getElementById('telefone').value;
  const endereco = document.getElementById('endereco').value;
  const bairro = document.getElementById('bairro').value;
  const mensagem = document.getElementById('mensagem').value;

  const texto = `Olá, gostaria de fazer um pedido:%0A*Nome:* ${encodeURIComponent(nome)}%0A*Telefone:* ${encodeURIComponent(telefone)}
  %0A*Endereço:* ${encodeURIComponent(endereco)}%0A*Bairro/Cidade/Cep:* ${encodeURIComponent(bairro)}%0A*Pedido:* ${encodeURIComponent(mensagem)}`;
  const telefoneDestino = '5513996649531';

  window.open(`https://wa.me/${telefoneDestino}?text=${texto}`, '_blank');
});

window.addEventListener('scroll', function() {
  const backToTop = document.querySelector('.back-to-top');
  if (window.scrollY > 200) {
    backToTop.style.display = 'block';
    backToTop.style.opacity = '1';
  } else {
    backToTop.style.opacity = '0';
    setTimeout(() => {
      backToTop.style.display = 'none';
    }, 300);
  }
});


  function animarMoto() {
    const moto = document.getElementById('moto');
    moto.style.transform = 'translateX(120vw)';
    setTimeout(() => {
      moto.style.transition = 'none';
      moto.style.transform = 'translateX(-150px)';
      void moto.offsetWidth;
      moto.style.transition = 'transform 5s linear';
      setTimeout(animarMoto, 2000);
    }, 20000);
  }

  window.onload = animarMoto;