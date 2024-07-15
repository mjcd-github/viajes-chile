$(document).ready(
  function () {

    // Tooltips
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

    // Controla los CARD que estan a los costados en la seccion "Quienes Somos" oculta el texto con desplazamiento suave
    $(".card-header").click(
      function () {
        $(this).next(".card-body").find(".card-text").slideToggle();
      }
    );

    // Controla el CARD que tiene el header abajo en la seccion "Quienes Somos" oculta el texto con desplazamiento suave
    $(document).ready(function () {
      $(".card-header").click(function () {
        $(this).prev(".card-body").find(".card-text").slideToggle();
      });
    });

    // Carrusel con desplazamiento automatico
    var myCarousel = document.querySelector('#carouselExampleIndicators')
    var carousel = new bootstrap.Carousel(myCarousel, {
      interval: 3000, // Intervalo de tiempo en milisegundos entre cada slide
      ride: 'carousel' // Inicializa automáticamente el carrusel
    })
  }
)