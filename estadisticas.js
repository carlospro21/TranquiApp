const ctx = document.getElementById('emotionChart').getContext('2d');
const emotionChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Feliz', 'Triste', 'Ansioso', 'En paz', 'Estresado'],
    datasets: [{
      label: 'Registros emocionales',
      data: [12, 8, 5, 15, 3],
      backgroundColor: [
        '#34d399',
        '#f87171',
        '#fbbf24',
        '#60a5fa',
        '#c084fc'
      ]
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
