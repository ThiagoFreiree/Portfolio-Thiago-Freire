function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);
// Função de rolagem suave para todos os links de navegação
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Animação de entrada para a seção de Trabalhos
window.addEventListener('scroll', function() {
  const workSection = document.querySelector('.work');
  const workPosition = workSection.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.3;

  if (workPosition < screenPosition) {
    workSection.classList.add('visible');
  }
});
