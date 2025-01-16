let visitorChart;

const partyColors = {
  'CDU': '#52b7c1',
  'SPD': '#e3000f',
  'Bündnis 90/Die Grünen': '#1fa12d',
  'FDP': '#ffec01',
  'Die Linke': '#ff0000',
  'AFD': '#009fe1',
  'CSU': '#87bbe6',
  'Freien Wähler': '#C0C0C0'
};

function changeTimeframe(timeframe) {
    loadStats(timeframe); // Ruft die Statistik-Daten für den angegebenen Zeitraum ab

    // Visuelles Feedback für aktive Buttons
    const buttons = document.querySelectorAll('.filter-button');
    buttons.forEach(button => button.classList.remove('active'));

    // Aktiviere den Button basierend auf dem übergebenen Zeitraum
    const activeButton = document.querySelector(`button[onclick="changeTimeframe('${timeframe}')"]`);
    if (activeButton) activeButton.classList.add('active');
}

function loadStats(timeframe) {
    fetch(`http://localhost:3000/api/stats?timeframe=${timeframe}`)
        .then(response => response.json())
        .then(data => {
            console.log("Daten aus der API:", data); // Debugging: Überprüfen, was die API zurückgibt

            if (data.visitors) {
                let totalVisitors = 0;
                
                // Gesamtbesucherzahl berechnen und anzeigen
                for (let date in data.visitors) {
                    for (let hour in data.visitors[date]) {
                        totalVisitors += data.visitors[date][hour];
                    }
                }

                // Gesamtbesucherzahl im HTML anzeigen
                document.getElementById('total-visitors').textContent = totalVisitors;

                // Aufruf der Funktion zur Anzeige der Diagramme
                createVisitorChart(data.visitors);  // Besucher-Diagramm
                createThemeChart(data.themeViews);  // Beliebte Themen
                createPartyChart(data.partyViews);  // Beliebte Parteien
            } else {
                console.error('Fehler: Daten konnten nicht geladen werden');
            }
        })
        .catch(error => console.error('Fehler beim Laden der Daten:', error));
}



function createVisitorChart(data) {
    const ctx = document.getElementById('visitors-chart').getContext('2d');

    if (window.visitorChart) {
        window.visitorChart.destroy();
    }

    // Labels und Daten umkehren, sodass die neuesten Werte rechts sind
    const reversedLabels = Object.keys(data).reverse();
    const reversedData = Object.values(data).reverse();

    window.visitorChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: reversedLabels, // X-Achse
            datasets: [{
                label: 'Besucher',
                data: reversedData, // Y-Achse
                borderColor: '#4BC0C0',
                backgroundColor: 'rgba(75,192,192,0.2)',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        precision: 0
                    }
                }
            }
        }
    });
}



function createThemeChart(themeData) {
  const ctx = document.getElementById('themes-chart').getContext('2d');
  if (window.themeChart) window.themeChart.destroy();

  window.themeChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: Object.keys(themeData),
          datasets: [{
              label: 'Aufrufe',
              data: Object.values(themeData),
              backgroundColor: 'rgba(54, 162, 235, 0.6)'
          }]
      },
      options: {
          responsive: true,
          plugins: { legend: { display: false } },
          scales: { y: { beginAtZero: true } }
      }
  });
}

function createPartyChart(partyData) {
  const ctx = document.getElementById('parties-chart').getContext('2d');
  if (window.partyChart) window.partyChart.destroy();

  window.partyChart = new Chart(ctx, {
      type: 'pie',
      data: {
          labels: Object.keys(partyData),
          datasets: [{
              data: Object.values(partyData),
              backgroundColor: Object.values(partyColors)
          }]
      },
      options: {
          responsive: true,
          plugins: { legend: { display: false } }
      }
  });
}

// Buttons mit Event-Listener versehen
document.addEventListener('DOMContentLoaded', () => {
  loadStats(); // Standardmäßig Tagesansicht laden
  document.getElementById('day-button').addEventListener('click', () => loadStats('day'));
  document.getElementById('week-button').addEventListener('click', () => loadStats('week'));
  document.getElementById('month-button').addEventListener('click', () => loadStats('month'));
});
