// Ziggy Discos (Librerías: jQuery, Swiper y AOS)

$(function () {
  //-Swiper: carrusel de discos del catálogo-

  //-jQuery: filtro por género-

  //-jQuery: botón "Me apunto" de las ferias-
  
   $(".apuntarse").on("click", function () {
    const apuntado = $(this).attr("aria-pressed") === "true";
    $(this).attr("aria-pressed", !apuntado);
    $(this).text(apuntado ? "Me apunto" : "✓ Apuntado");
  });

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
