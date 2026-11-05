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

//-Horario: marcar el día de hoy-
