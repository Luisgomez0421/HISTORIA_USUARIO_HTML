// Cambia el texto del parrafo al hacer clic
function cambiarTexto() {
  var parrafo = document.getElementById("bienvenida");
  parrafo.textContent = "Gracias por visitar mi portafolio!";
}
 
// Muestra u oculta el contenido extra
function mostrarOculto() {
  var contenido = document.getElementById("contenido-oculto");
  var boton = event.target;
  if (contenido.style.display === "none" || contenido.style.display === "") {
    contenido.style.display = "block";
    boton.textContent = "Ocultar info";
  } else {
    contenido.style.display = "none";
    boton.textContent = "Mostrar mas info";
  }
}
 
// Mensaje de bienvenida al cargar la pagina
window.onload = function() {
  alert("Bienvenido a mi portafolio!");
};
 