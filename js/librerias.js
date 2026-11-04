// Ziggy Discos (Librerías: jQuery, Swiper y AOS)

$(function () {
  //-Swiper: carrusel de discos del catálogo-

  //-jQuery: filtro por género-

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
