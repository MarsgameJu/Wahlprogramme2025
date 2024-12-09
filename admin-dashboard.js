let visitorChart;
let currentTimeframe = 'day';

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


function loadStats() {
  const timeframe = ('day'); // Derzeitiger Zeitraum, kannst auch dynamisch ändern ('day', 'week', 'month')

  fetch(`http://localhost:3000/api/stats?timeframe=${timeframe}`)
      .then(response => response.json())
      .then(data => {
          console.log("Daten aus der API:", data); // Debugging: Überprüfen, was die API zurückgibt

          if (data.visitors) {
              // Gesamtbesucherzahl berechnen und anzeigen
              document.getElementById('total-visitors').textContent = Object.values(data.visitors).reduce((a, b) => a + b, 0);
              
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



function createVisitorChart(data, timeframe) {
  const ctx = document.getElementById('visitors-chart').getContext('2d');

  // Überprüfen, ob bereits ein Diagramm existiert und es zerstören
  if (window.visitorChart) {
      window.visitorChart.destroy();  // Zerstört das bestehende Diagramm
  }

  window.visitorChart = new Chart(ctx, {
      type: 'line', // Liniendiagramm für die Besucher
      data: {
          labels: Object.keys(data),  // X-Achse mit Zeitstempeln
          datasets: [{
              label: 'Besucher',
              data: Object.values(data),  // Y-Achse mit den Besuchszahlen
              borderColor: '#4BC0C0',
              backgroundColor: 'rgba(75,192,192,0.2)',
              tension: 0.1
          }]
      },
      options: {
          responsive: true,
          plugins: {
              legend: {
                  display: false // Legende ausblenden
              }
          },
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



function updateVisitorChart(data) {
  if (visitorChart) {
      visitorChart.data.labels = Object.keys(data); // X-Achsen-Beschriftungen aktualisieren
      visitorChart.data.datasets[0].data = Object.values(data); // Y-Achsen-Werte aktualisieren
      visitorChart.update();  // Diagramm aktualisieren
  } else {
      console.error("visitorChart is not defined");
      createVisitorChart(data); // Wenn visitorChart noch nicht existiert, erstelle es
  }
}

function changeTimeframe(timeframe) {
  // Rufe die loadStats-Funktion mit dem ausgewählten Zeitraum (z.B. 'day', 'week', 'month') auf
  loadStats(timeframe); 

  // Optional: Hier kannst du auch eine visuelle Rückmeldung geben, welcher Zeitraum ausgewählt wurde
  const buttons = document.querySelectorAll('.filter-button');
  buttons.forEach(button => {
      // Entferne die aktive Klasse von allen Buttons
      button.classList.remove('active');
  });
  
  // Füge die 'active' Klasse zum ausgewählten Button hinzu
  const activeButton = document.querySelector(`button[onclick="changeTimeframe('${timeframe}')"]`);
  activeButton.classList.add('active');
}


function createThemeChart(themeData) {
  const ctx = document.getElementById('themes-chart').getContext('2d');

  // Überprüfen, ob bereits ein Diagramm existiert und es zerstören
  if (window.themeChart) {
      window.themeChart.destroy();  // Zerstört das bestehende Diagramm
  }

  window.themeChart = new Chart(ctx, {
      type: 'bar', // Balkendiagramm für Themen
      data: {
          labels: Object.keys(themeData),  // Labels auf der X-Achse (Themen)
          datasets: [{
              label: 'Aufrufe',
              data: Object.values(themeData),  // Daten für die Y-Achse (Anzahl der Aufrufe)
              backgroundColor: 'rgba(54, 162, 235, 0.6)',
          }]
      },
      options: {
          responsive: true,
          plugins: {
              legend: {
                  display: false,  // Legende ausblenden
              }
          },
          scales: {
              y: {
                  beginAtZero: true,
                  ticks: {
                      precision: 0,
                  },
              },
          },
      }
  });
}



function createPartyChart(partyData) {
  const ctx = document.getElementById('parties-chart').getContext('2d');

  // Überprüfen, ob bereits ein Diagramm existiert und es zerstören
  if (window.partyChart) {
      window.partyChart.destroy();  // Zerstört das bestehende Diagramm
  }

  window.partyChart = new Chart(ctx, {
      type: 'pie', // Kreisdiagramm für Parteien
      data: {
          labels: Object.keys(partyData),
          datasets: [{
              data: Object.values(partyData),
              backgroundColor: ['#52b7c1', '#e3000f', '#1fa12d', '#ffec01', '#ff0000', '#009fe1', '#87bbe6', '#C0C0C0']
          }]
      },
      options: {
          responsive: true,
          plugins: {
              legend: {
                  display: false  // Legende ausblenden
              }
          }
      }
  });
}


document.addEventListener('DOMContentLoaded', loadStats);
