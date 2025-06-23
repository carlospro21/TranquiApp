document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Funcionalidad en desarrollo: ' + btn.innerText);
  });
});
// script.js - Funcionalidades interactivas TranquiApp
// Toggle música
function toggleMusic() {
  const music = document.getElementById("bgMusic");
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

// Menú móvil
function toggleMenu() {
  const nav = document.querySelector("nav");
  nav.classList.toggle("active");
}

// Modal de testimonios
function toggleModal() {
  document.querySelector(".modal").classList.toggle("active");
  document.querySelector(".modal-overlay").classList.toggle("active");
}

// Fondo de partículas animado
particlesJS("background", {
  particles: {
    number: { value: 60, density: { enable: true, value_area: 800 } },
    color: { value: "#a78bfa" },
    shape: { type: "circle" },
    opacity: { value: 0.3, random: true },
    size: { value: 4, random: true },
    line_linked: { enable: true, distance: 150, color: "#7c3aed", opacity: 0.2, width: 1 },
    move: { enable: true, speed: 1, random: true, out_mode: "out" }
  },
  interactivity: {
    events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" } },
    modes: { repulse: { distance: 100 }, push: { particles_nb: 4 } }
  },
  retina_detect: true
});
AOS.init({
  duration: 1200,
  once: true,
});
// Menú móvil toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("mobile-menu");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("show");
  });
});
particlesJS('particles-js', {
  particles: {
    number: {
      value: 50,
      density: { enable: true, value_area: 800 }
    },
    color: { value: '#a78bfa' },
    shape: {
      type: 'circle',
      stroke: { width: 0, color: '#000' }
    },
    opacity: {
      value: 0.5,
      random: true
    },
    size: {
      value: 3,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#7c3aed',
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 1.5,
      direction: 'none',
      out_mode: 'out'
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: { enable: true, mode: 'repulse' },
      onclick: { enable: true, mode: 'push' }
    },
    modes: {
      repulse: { distance: 80, duration: 0.4 },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});
document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("openTestimonial");
  const closeBtn = document.getElementById("closeTestimonial");
  const modal = document.getElementById("testimonialModal");

  openBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });
});
function publicarMensaje(e) {
  e.preventDefault();
  const texto = document.getElementById("mensajeTexto").value.trim();
  const categoria = document.getElementById("mensajeCategoria").value;
  const error = document.getElementById("mensajeError");

  if (texto.length < 10 || texto.length > 300) {
    error.textContent = "Tu mensaje debe tener entre 10 y 300 caracteres.";
    return;
  }

  error.textContent = "";
  const nuevoMensaje = {
    texto,
    categoria,
    fecha: new Date().toLocaleString(),
  };

  const mensajes = JSON.parse(localStorage.getItem("mensajesAnonimos") || "[]");
  mensajes.unshift(nuevoMensaje);
  localStorage.setItem("mensajesAnonimos", JSON.stringify(mensajes));
  document.getElementById("mensajeTexto").value = "";
  cargarMensajes();
}

function cargarMensajes() {
  const contenedor = document.getElementById("listaMensajes");
  const mensajes = JSON.parse(localStorage.getItem("mensajesAnonimos") || "[]");
  contenedor.innerHTML = "";
  mensajes.forEach((m) => {
    const div = document.createElement("div");
    div.className = "mensaje-card";
    div.innerHTML = `
      <p>${m.texto}</p>
      <div class="mensaje-categoria">🗂 ${m.categoria} | 📅 ${m.fecha}</div>
    `;
    contenedor.appendChild(div);
  });
}

document.addEventListener("DOMContentLoaded", cargarMensajes);
