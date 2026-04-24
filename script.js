// Cambia el texto de bienvenida cuando el usuario hace clic en el botón
function cambiarTexto() {
  var parrafo = document.getElementById("bienvenida");
  parrafo.textContent = "Gracias por visitar mi portafolio. Espero que puedas conocer un poco sobre mis proyectos y lo que me gusta hacer.";
}


// Muestra u oculta la información extra
function mostrarOculto() {
  var contenido = document.getElementById("contenido-oculto");
  var boton = event.target;

  if (contenido.style.display === "none" || contenido.style.display === "") {
    contenido.style.display = "block";
    boton.textContent = "Ocultar información";
  } else {
    contenido.style.display = "none";
    boton.textContent = "Mostrar más";
  }
}


// Mensaje que aparece cuando se carga la página
window.onload = function() {
  alert("Bienvenido a mi portafolio personal.");
};