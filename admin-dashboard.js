function loadStats() {
    console.log("loadStats Funktion aufgerufen");
    
    // Dummy-Daten für die Statistiken
    const totalVisitors = 1000;
    const popularThemes = {
        'Klima': 300,
        'Bildung': 250,
        'Wirtschaft': 200,
        'Soziales': 150,
        'Finanzen': 100
    };
    const popularParties = {
        'CDU': 280,
        'SPD': 250,
        'Grüne': 220,
        'FDP': 150,
        'Linke': 100
    };

    // Gesamtbesucher anzeigen
    document.getElementById('total-visitors').textContent = totalVisitors;

    // Diagramm für beliebte Themen
    new Chart(document.getElementById('themes-chart'), {
        type: 'bar',
        data: {
            labels: Object.keys(popularThemes),
            datasets: [{
                label: 'Aufrufe',
                data: Object.values(popularThemes),
                backgroundColor: 'rgba(54, 162, 235, 0.6)'
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Diagramm für beliebte Parteien
    new Chart(document.getElementById('parties-chart'), {
        type: 'pie',
        data: {
            labels: Object.keys(popularParties),
            datasets: [{
                data: Object.values(popularParties),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)'
                ]
            }]
        },
        options: {
            responsive: true
        }
    });
}
