// Ziggy Discos (Interacciones con JavaScript nativo)
// Seleccionar, escuchar y cambiar (JavaScript solo pone y quita clases)

//-Modo claro / oscuro (se recuerda con localStorage)-

const raiz = document.documentElement;
const botonTema = document.querySelector("#boton-tema");

botonTema.addEventListener("click", function () {
  raiz.classList.toggle("dark");
  const oscuro = raiz.classList.contains("dark");
  localStorage.setItem("tema", oscuro ? "oscuro" : "claro");
});

//-Menú móvil-
const botonMenu = document.querySelector("#boton-menu");
const menu = document.querySelector("#menu");

function cambiarMenu(abrir) {
  menu.classList.toggle("hidden", !abrir);
  botonMenu.setAttribute("aria-expanded", abrir);
  botonMenu.setAttribute("aria-label", abrir ? "Cerrar menú" : "Abrir menú");
}

botonMenu.addEventListener("click", function () {
  cambiarMenu(menu.classList.contains("hidden"));
});

document.querySelectorAll("#menu a").forEach(function (enlace) {
  enlace.addEventListener("click", function () {
    cambiarMenu(false);
  });
});

//-Horario: marcar el día de hoy-
