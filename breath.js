// Texto de respiración animado
const breathText = document.getElementById("breathText");
const texts = ["Inhala", "Exhala"];
let index = 0;

setInterval(() => {
  index = (index + 1) % texts.length;
  breathText.textContent = texts[index];
}, 4000);

// Partículas de fondo
particlesJS('particles-js', {
  particles: {
    number: { value: 50, density: { enable: true, value_area: 800 } },
    color: { value: '#a78bfa' },
    shape: { type: 'circle' },
    opacity: { value: 0.5, random: true },
    size: { value: 3, random: true },
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
