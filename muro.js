document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("muroForm");
  const mensajeInput = document.getElementById("mensaje");
  const categoriaSelect = document.getElementById("categoria");
  const errorMsg = document.getElementById("errorMsg");
  const mensajesContainer = document.getElementById("mensajesContainer");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const mensaje = mensajeInput.value.trim();
    const categoria = categoriaSelect.value;

    if (!mensaje || !categoria) {
      errorMsg.textContent = "Por favor escribe un mensaje y selecciona una emoción.";
      return;
    }

    const card = document.createElement("div");
    card.className = "mensaje-card";
    card.innerHTML = `
      <p>${mensaje}</p>
      <div class="mensaje-categoria">${categoria}</div>
    `;
    mensajesContainer.prepend(card); // Mostrar el más nuevo arriba

    mensajeInput.value = "";
    categoriaSelect.value = "";
    errorMsg.textContent = "";
  });
});
