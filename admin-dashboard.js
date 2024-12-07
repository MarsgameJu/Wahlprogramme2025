function loadStats() {
    console.log("loadStats Funktion aufgerufen");

    // API-Anfrage zum Abrufen der Statistiken
    fetch('http://192.168.2.190:3000/api/stats') // Ersetzen Sie <IP-Adresse-des-PCs> durch die tatsächliche IP-Adresse
        .then(response => {
            if (!response.ok) {
                throw new Error('Netzwerkantwort war nicht ok');
            }
            return response.json();
        })
        .then(data => {
            // Gesamtbesucher anzeigen
            document.getElementById('total-visitors').textContent = data.visits;

            // Diagramm für beliebte Themen
            const popularThemes = data.themeViews; // Hier wird angenommen, dass die API diese Struktur zurückgibt
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
            const popularParties = data.partyViews; // Hier wird angenommen, dass die API diese Struktur zurückgibt
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
        })
        .catch(error => console.error('Fehler beim Laden der Statistiken:', error));
}
