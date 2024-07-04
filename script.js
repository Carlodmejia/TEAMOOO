// Referencia al contenedor del carrusel
const carousel = document.querySelector('.carousel-container');

// Botones de navegación
const prevButton = document.createElement('button');
prevButton.textContent = 'Anterior';
prevButton.classList.add('prev-button');

const nextButton = document.createElement('button');
nextButton.textContent = 'Siguiente';
nextButton.classList.add('next-button');

// Insertar botones de navegación
carousel.insertAdjacentElement('beforebegin', prevButton);
carousel.insertAdjacentElement('afterend', nextButton);

// Función para mover el carrusel hacia la izquierda
function slideLeft() {
  carousel.scrollLeft -= carousel.offsetWidth;
}

// Función para mover el carrusel hacia la derecha
function slideRight() {
  carousel.scrollLeft += carousel.offsetWidth;
}

// Event listeners para los botones de navegación
prevButton.addEventListener('click', slideLeft);
nextButton.addEventListener('click', slideRight);
