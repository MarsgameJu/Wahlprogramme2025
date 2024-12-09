// chart-config.js

const partyColors = {
    'CDU': 'rgba(255, 99, 132, 0.6)',
    'SPD': 'rgba(54, 162, 235, 0.6)',
    'Grüne': 'rgba(75, 192, 192, 0.6)',
    'FDP': 'rgba(255, 206, 86, 0.6)',
    'Linke': 'rgba(153, 102, 255, 0.6)',
    'AFD': 'rgba(255, 159, 64, 0.6)'
};

// Funktion zum Erstellen eines Liniendiagramms für tägliche Besucher
function createLineChart(ctx, labels, data) {
    return new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Tägliche Besucher',
                data: data,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 2,
                fill: true,
            }]
        },
        options: {
            responsive: true,
            scales: {
                yAxes: [{
                    ticks: { beginAtZero:true }
                }]
            }
        }
    });
}

// Funktion zum Erstellen eines Balkendiagramms für Themen
function createBarChart(ctx, labels, data) {
    return new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Aufrufe',
                data: data,
                backgroundColor: 'rgba(54,162,235,0.6)'
            }]
        },
        options: {
            responsive: true,
            scales: {
                yAxes:[{
                    ticks:{ beginAtZero:true }
                }]
            }
        }
    });
}
