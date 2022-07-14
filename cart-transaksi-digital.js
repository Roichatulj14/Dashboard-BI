const labels2 = [
    '03 Des 2024',
    '04 Des 2024',
    '05 Des 2024',
    '06 Des 2024',
    '07 Des 2024',
    '08 Des 2024',
    '09 Des 2024',
];

const data2 = {
    labels: labels2,
    datasets: [{
    label: 'Transaksi Digital',
    backgroundColor: '#536dfe',
    borderColor: '#536dfe',
    borderRadius: '100',
    data: [120, 140, 50, 140, 200, 140, 50],
    }]
};

const config2 = {
    type: 'bar',
    data: data2,
    options: {
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: 'Transaksi Digital',
                align: 'start',
                font: {
                    weight: 'bold',
                    size: 24,
                }
            },
        },
        scales: {
            y: {
                min: 0,
                max: 300,
            },
        },
    }
};

const digitalChart = new Chart(
    document.getElementById('digitalChart'),
    config2
);