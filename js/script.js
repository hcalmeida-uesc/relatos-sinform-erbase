document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax-container');
    var instances = M.Parallax.init(elems, options);
  });

document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o elemento do carrossel
    const slickElement = document.querySelector('.slick-carousel');

    // Inicializa o Slick Carousel
    $(slickElement).slick({
        slidesToShow: 3, // Altere o número de slides a serem mostrados
        slidesToScroll: 1, // Número de slides para rolar
        autoplay: true, // Opção de autoplay (se desejado)
        autoplaySpeed: 2000 // Velocidade do autoplay
        // Adicione outras opções conforme necessário, consulte a documentação do Slick Carousel para mais opções e configurações.
    });
});

var lastScrollTop = 0;
window.addEventListener('scroll', function() {
    var currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    var parallaxDiv = document.querySelector('.parallax_1');
    var textDiv = document.querySelector('.centered-text');

    if (currentScroll > lastScrollTop) {
        var bounding = parallaxDiv.getBoundingClientRect();

        if (bounding.top < 0 && bounding.bottom > 0) {
            textDiv.classList.add('hide');
        } else {
            textDiv.classList.remove('hide');
        }
    } else {
        textDiv.classList.remove('hide');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});


