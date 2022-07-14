const labels4 = [
    '03 Des 2024',
    '04 Des 2024',
    '05 Des 2024',
    '06 Des 2024',
    '07 Des 2024',
    '08 Des 2024',
    '09 Des 2024',
];

const data4 = {
    labels: labels4,
    datasets: [{
    label: 'Transaksi Data',
    backgroundColor: '#00bfa5',
    borderColor: '#00bfa5',
    borderRadius: '100',
    data: [120, 140, 50, 140, 200, 140, 50],
    }]
};

const config4 = {
    type: 'bar',
    data: data4,
    options: {
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: 'Transaksi Data',
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

const dataChart = new Chart(
    document.getElementById('dataChart'),
    config4
);