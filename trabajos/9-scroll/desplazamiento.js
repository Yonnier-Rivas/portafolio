// Obtener todos los enlaces de anclaje
var links = document.querySelectorAll('a[href^="#"]');

// Añadir un evento de clic a cada enlace de anclaje
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function(event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace

    var destino = this.getAttribute('href'); // Obtener el destino del enlace de anclaje
    var destinoElemento = document.querySelector(destino); // Obtener el elemento de destino

    // Desplazarse suavemente
    destinoElemento.scrollIntoView({
      behavior: 'smooth'
    });
  });
}