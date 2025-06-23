// Cargar preferencias al iniciar
window.onload = () => {
  const tema = localStorage.getItem('tema');
  const fuente = localStorage.getItem('fuente');

  if (tema) document.body.setAttribute('data-theme', tema);
  if (fuente) document.body.style.fontFamily = fuente;

  document.getElementById('theme').value = tema || 'dark';
  document.getElementById('font').value = fuente || 'Montserrat';
};

document.getElementById('guardarBtn').addEventListener('click', () => {
  const tema = document.getElementById('theme').value;
  const fuente = document.getElementById('font').value;

  localStorage.setItem('tema', tema);
  localStorage.setItem('fuente', fuente);

  alert("¡Preferencias guardadas!");

  // Aplicar cambios inmediatos
  document.body.setAttribute('data-theme', tema);
  document.body.style.fontFamily = fuente;
});
