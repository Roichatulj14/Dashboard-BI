const labels = [
    '03 Des 2024',
    '04 Des 2024',
    '05 Des 2024',
    '06 Des 2024',
    '07 Des 2024',
    '08 Des 2024',
    '09 Des 2024',
];

const data = {
    labels: labels,
    datasets: [{
    label: 'Transaksi Top Up',
    backgroundColor: '#673ab7',
    borderColor: '#673ab7',
    borderRadius: '100',
    data: [120, 140, 50, 140, 200, 140, 50],
    }]
};

const config = {
    type: 'bar',
    data: data,
    options: {
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: 'Transaksi Top Up',
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

const topUpChart = new Chart(
    document.getElementById('topUpChart'),
    config
);