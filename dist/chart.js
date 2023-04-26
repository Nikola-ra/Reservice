const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Con Reservice', 'Senza Reservice'],
    datasets: [{
      label: '% di Guadagno',
      data: [100, 40],
      borderWidth: 1,
      borderColor: '#60B5F7',
      backgroundColor: '#628EE0'
    },
    {
    label: '% di Profitto',
    data: [60, 30],
    borderWidth: 1,
    borderColor: '#9790F0',
    backgroundColor: '#012E5A'
    }
  ]
  },
  options: {
    maintainAspectRatio: false,
}});