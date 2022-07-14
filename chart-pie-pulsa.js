const data = {
    labels: [
      'TELKOMSEL',
      'TREE',
      'INDOSAT',
      'SMARTFREN',
      'XL',
      'OTHER',
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

const chartpiepulsa = new Chart(
    document.getElementById('chartpiepulsa'),
    config
);