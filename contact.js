// contact.js
function handleSubmit(event) {
  event.preventDefault();
  const response = document.getElementById("form-response");

  // Mensaje de confirmación simulado
  response.textContent = "¡Gracias por tu mensaje! Te responderemos pronto 💜";

  // Resetear el formulario
  event.target.reset();
}
