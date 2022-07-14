const labelsAll = [
    '01',
    '02',
    '03',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    '30',
    '31',
];

const dataAll = {
    labels: labelsAll,
    datasets: [{
    label: 'All Transaction',
    backgroundColor: '#8c9eff',
    borderColor: '#8c9eff',
    data: [520, 550, 560, 580, 600, 620, 650, 700, 750, 800, 810, 830, 850, 820, 800, 780, 760, 750, 710, 690, 650, 630, 650, 600, 700, 750, 600, 550, 600, 700, 800],
    }]
};

const configAll = {
    type: 'bar',
    data: dataAll,
    options: {
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: 'All Transaction',
                align: 'start',
                font: {
                    weight: 'bold',
                    size: 24,
                }
            },
        },
        scales: {
            y: {
                min: 500,
                max: 1000,
            },
            x: {
                scaleFontSize: 8,
            },
        },
    }
};

const AllChart = new Chart(
    document.getElementById('AllChart'),
    configAll
);