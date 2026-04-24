// Cambia el texto de bienvenida cuando el usuario hace clic en el botón
function cambiarTexto() {
  var parrafo = document.getElementById("bienvenida");
  parrafo.textContent = "Gracias por visitar mi portafolio. Aquí puedes ver algunos de los proyectos que he realizado.";
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


// Mensaje de bienvenida cuando se carga la página
window.onload = function() {
  alert("Bienvenido a mi portafolio.");
};


// Formulario de contacto
document.getElementById("formulario-contacto").addEventListener("submit", function(e){

  e.preventDefault();

  var nombre = document.getElementById("nombre").value;
  var email = document.getElementById("email").value;
  var mensaje = document.getElementById("mensaje").value;

  var correo = "Luisgomez@idetp.edu.co";
  var asunto = "Mensaje desde el portafolio";

  var cuerpo =
    "Nombre: " + nombre +
    "\nEmail: " + email +
    "\n\nMensaje:\n" + mensaje;

  window.location.href =
    "mailto:" + correo +
    "?subject=" + encodeURIComponent(asunto) +
    "&body=" + encodeURIComponent(cuerpo);

});