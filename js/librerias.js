// Ziggy Discos (Librerías: jQuery, Swiper y AOS)

$(function () {
  //-Swiper: carrusel de discos del catálogo-

    const carrusel = new Swiper(".catalogo", {
    effect: "coverflow",
    centeredSlides: true,
    grabCursor: true,
    slidesPerView: 1.5,
    coverflowEffect: { rotate: 0, depth: 180, slideShadows: false },
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: { slidesPerView: 2.5 },
      1024: { slidesPerView: 3.5 },
    },
  });

  //-jQuery: filtro por género-

  const $carril = $(".catalogo .swiper-wrapper");
  const $discos = $carril.children(".swiper-slide");

  $(".filtro").on("click", function () {
    const genero = $(this).data("genero");

    $(".filtro").attr("aria-pressed", "false");
    $(this).attr("aria-pressed", "true");

    $discos.detach();
    $discos
      .filter(function () {
        return genero === "todos" || $(this).data("genero") === genero;
      })
      .appendTo($carril);

    carrusel.update();
    carrusel.slideTo(0, 0);
  });

    // Azulejos activan filtro correspondiente
  $(".azulejo").on("click", function () {
    $('.filtro[data-genero="' + $(this).data("genero") + '"]').trigger("click");
  });


  //-jQuery: botón "Me apunto" de las ferias-

  //-AOS (animaciones al hacer scroll)-

  AOS.init({
    duration: 700,
    once: true,
    disable: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  });
});

window.addEventListener("load", function () {
  AOS.refresh();
});
