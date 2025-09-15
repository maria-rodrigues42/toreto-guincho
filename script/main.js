// --- LÓGICA DO CARROSSEL DE IMAGENS ---
let slideIndex = 1;
let slideInterval;

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("carousel-slide");
    let dots = document.getElementsByClassName("dot");
    if (!slides.length || !dots.length) return; // Aborta se não houver carrossel
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-dot", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active-dot";
}

function plusSlides(n) {
    showSlides(slideIndex += n);
    resetInterval();
}

function currentSlide(n) {
    showSlides(slideIndex = n);
    resetInterval();
}

function autoSlides() {
    plusSlides(1);
}

function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(autoSlides, 5000); // Muda de imagem a cada 5 segundos
}

// --- ANIMAÇÃO DE REVELAÇÃO AO ROLAR A PÁGINA ---
function reveal() {
    const sections = document.querySelectorAll('.reveal-section');
    const windowHeight = window.innerHeight;
    const revealPoint = 100; // Distância do topo para ativar a animação

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < windowHeight - revealPoint) {
            section.classList.add('visible');
        } else {
            // Opcional: remover a classe para re-animar se o usuário rolar para cima
            // section.classList.remove('visible'); 
        }
    });
}


// --- INICIALIZAÇÃO QUANDO O CONTEÚDO DA PÁGINA É CARREGADO ---
document.addEventListener("DOMContentLoaded", function() {
    // Inicia o carrossel
    if (document.getElementsByClassName("carousel-slide").length > 0) {
        showSlides(slideIndex);
        slideInterval = setInterval(autoSlides, 5000);
    }

    // Inicia o observador da animação de scroll
    window.addEventListener('scroll', reveal);
    reveal(); // Chama uma vez para verificar se alguma seção já está visível
});