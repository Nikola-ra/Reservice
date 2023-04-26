const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Con Reservice', 'Senza Reservice'],
    datasets: [{
      label: '% di Guadagno',
      data: [100, 40],
      borderWidth: 1
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