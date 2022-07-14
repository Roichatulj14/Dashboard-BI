const labels3 = [
    '03 Des 2024',
    '04 Des 2024',
    '05 Des 2024',
    '06 Des 2024',
    '07 Des 2024',
    '08 Des 2024',
    '09 Des 2024',
];

const data3 = {
    labels: labels3,
    datasets: [{
    label: 'Transaksi Pulsa',
    backgroundColor: '#ba68c8',
    borderColor: '#ba68c8',
    borderRadius: '100',
    data: [120, 140, 50, 140, 200, 140, 50],
    }]
};

const config3 = {
    type: 'bar',
    data: data3,
    options: {
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: 'Transaksi Pulsa',
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
            x: {
                scaleFontSize: 8,
            },
        },
    }
};

const pulsaChart = new Chart(
    document.getElementById('pulsaChart'),
    config3
);