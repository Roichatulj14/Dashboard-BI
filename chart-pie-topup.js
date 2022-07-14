const data = {
    labels: [
      'BCA',
      'BCA VA',
      'MANDIRI',
      'BRI',
      'DANA',
      'SHOPEE PAY',
      'MANDIRI',
      'DANA',
      'SHOPEE PAY',
      'BCA',
      'BCA VA',
      'BRI',
    ],
    datasets: [{
      label: 'Pulsa',
      data: [30, 23, 18, 9, 15, 5],
      backgroundColor: [
        '#ff80ab',
        '#ffd740',
        '#8c9eff',
        '#ce93d8',
        '#f8bbd0',
        '#90caf9',
        '#ce93d8',
        '#f8bbd0',
        '#90caf9',
        '#ff80ab',
        '#ffd740',
        '#8c9eff',
      ],
      hoverOffset: 4,
      borderWidth: 0,
    }]
};

const config = {
    type: 'pie',
    data: data,
    options: {
        plugins: {
            legend: {
                position: 'bottom',
                align: 'start',
                labels: {
                    boxWidth: 15,
                    padding: 20,
                },
            },
        },
    },
};

const chartpietopup = new Chart(
    document.getElementById('chartpietopup'),
    config
);