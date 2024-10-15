let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;

document.querySelector('.prev').addEventListener('click', moveToPrevSlide);
document.querySelector('.next').addEventListener('click', moveToNextSlide);
dots.forEach((dot, index) => dot.addEventListener('click', () => moveToSlide(index)));

function showSlide(slideIndex) {
    // Ocultar todas las diapositivas
    slides.forEach(slide => {
        slide.style.display = 'none';
    });
    
    // Quitar clase 'active' de todos los dots
    dots.forEach(dot => {
        dot.classList.remove('active');
    });

    // Mostrar la diapositiva seleccionada
    slides[slideIndex].style.display = 'block';
    
    // Agregar clase 'active' al dot correspondiente
    dots[slideIndex].classList.add('active');
}

function moveToNextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function moveToPrevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

function moveToSlide(slideIndex) {
    currentSlide = slideIndex;
    showSlide(slideIndex);
}

// Iniciar el carrusel mostrando la primera diapositiva
showSlide(currentSlide);
