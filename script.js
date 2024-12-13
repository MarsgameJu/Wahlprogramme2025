// script.js

const kandidaten = {
    "CDU": "Friedrich Merz",
    "SPD": "Olaf Scholz",
    "Bündnis 90/Die Grünen": "Robert Habeck",
    "FDP": "Christian Lindner",
    "Die Linke": "Heidi Reichinnek und Jan van Aken",
    "AFD": "Alice Weidel",
    "CSU": "-"
    "BSW": "Sahra Wagenknecht"
};

const data = [
    { partei: "CDU", thema: "Klima", position: "Meinung1" },
    { partei: "Bündnis 90/Die Grünen", thema: "Klima", position: "Meinung2" },
    { partei: "SPD", thema: "Klima", position: "Meinung3" },
    { partei: "AFD", thema: "Klima", position: "Meinung4" },
    { partei: "FDP", thema: "Klima", position: "Meinung5" },
    { partei: "Die Linke", thema: "Klima", position: "Meinung6" },
    { partei: "CSU", thema: "Klima", position: "Meinung7." },
    { partei: "BSW", thema: "Klima", position: "Meinung8" },
    { partei: "CDU", thema: "Außen- und Sicherheitspolitik", position: "Meinung1" },
    { partei: "Bündnis 90/Die Grünen", thema: "Außen- und Sicherheitspolitik", position: "Meinung2" },
    { partei: "SPD", thema: "Außen- und Sicherheitspolitik", position: "Meinung3" },
    { partei: "AFD", thema: "Außen- und Sicherheitspolitik", position: "Meinung4" },
    { partei: "FDP", thema: "Außen- und Sicherheitspolitik", position: "Meinung5" },
    { partei: "Die Linke", thema: "Außen- und Sicherheitspolitik", position: "Meinung6" },
    { partei: "CSU", thema: "Außen- und Sicherheitspolitik", position: "Meinung7." },
    { partei: "BSW", thema: "Außen- und Sicherheitspolitik", position: "Meinung8" },
    { partei: "CDU", thema: "Soziales", position: "Meinung1" },
    { partei: "Bündnis 90/Die Grünen", thema: "Soziales", position: "Meinung2" },
    { partei: "SPD", thema: "Soziales", position: "Meinung3" },
    { partei: "AFD", thema: "Soziales", position: "Meinung4" },
    { partei: "FDP", thema: "Soziales", position: "Meinung5" },
    { partei: "Die Linke", thema: "Soziales", position: "Meinung6" },
    { partei: "CSU", thema: "Soziales", position: "Meinung7." },
    { partei: "BSW", thema: "Soziales", position: "Meinung8" },
    { partei: "CDU", thema: "Finanzen", position: "Meinung1" },
    { partei: "Bündnis 90/Die Grünen", thema: "Finanzen", position: "Meinung2" },
    { partei: "SPD", thema: "Finanzen", position: "Meinung3" },
    { partei: "AFD", thema: "Finanzen", position: "Meinung4" },
    { partei: "FDP", thema: "Finanzen", position: "Meinung5" },
    { partei: "Die Linke", thema: "Finanzen", position: "Meinung6" },
    { partei: "CSU", thema: "Finanzen", position: "Meinung7." },
    { partei: "BSW", thema: "Finanzen", position: "Meinung8" },
    { partei: "CDU", thema: "Migration und Innere Sicherheitk", position: "Meinung1" },
    { partei: "Bündnis 90/Die Grünen", thema: "Migration und Innere Sicherheitk", position: "Meinung2" },
    { partei: "SPD", thema: "Migration und Innere Sicherheitk", position: "Meinung3" },
    { partei: "AFD", thema: "Migration und Innere Sicherheitk", position: "Meinung4" },
    { partei: "FDP", thema: "Migration und Innere Sicherheitk", position: "Meinung5" },
    { partei: "Die Linke", thema: "Migration und Innere Sicherheitk", position: "Meinung6" },
    { partei: "CSU", thema: "Migration und Innere Sicherheitk", position: "Meinung7." },
    { partei: "BSW", thema: "Migration und Innere Sicherheitk", position: "Meinung8" },
    { partei: "CDU", thema: "Bildung", position: "Meinung1" },
    { partei: "Bündnis 90/Die Grünen", thema: "Bildung", position: "Meinung2" },
    { partei: "SPD", thema: "Bildung", position: "Meinung3" },
    { partei: "AFD", thema: "Bildung", position: "Meinung4" },
    { partei: "FDP", thema: "Bildung", position: "Meinung5" },
    { partei: "Die Linke", thema: "Bildung", position: "Meinung6" },
    { partei: "CSU", thema: "Bildung", position: "Meinung7." },
    { partei: "BSW", thema: "Bildung", position: "Meinung8" },
    { partei: "CDU", thema: "Wirtschaft", position: "Meinung1" },
    { partei: "Bündnis 90/Die Grünen", thema: "Wirtschaft", position: "Meinung2" },
    { partei: "SPD", thema: "Wirtschaft", position: "Meinung3" },
    { partei: "AFD", thema: "Wirtschaft", position: "Meinung4" },
    { partei: "FDP", thema: "Wirtschaft", position: "Meinung5" },
    { partei: "Die Linke", thema: "Wirtschaft", position: "Meinung6" },
    { partei: "CSU", thema: "Wirtschaft", position: "Meinung7." },
    { partei: "BSW", thema: "Wirtschaft", position: "Meinung8" },

];


function logVisit() {
  fetch('http://localhost:3000/api/log-visit', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
  })
  .then(response => {
      if (response.ok) {
          console.log('Besuch erfolgreich geloggt');
      } else {
          console.error('Fehler beim Loggen des Besuchs');
      }
  })
  .catch(error => console.error('Fehler bei der Anfrage:', error));
}

function logVisit() {
  fetch('http://localhost:3000/api/log-visit', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
  })
  .then(response => {
      if (response.ok) {
          console.log('Besuch erfolgreich geloggt');
      } else {
          console.error('Fehler beim Loggen des Besuchs');
      }
  })
  .catch(error => console.error('Fehler bei der Anfrage:', error));
}

// Diese Funktion wurde im vorherigen Beispiel verwendet, um Themen zu loggen.
function logThemeView(theme) {
  fetch('http://localhost:3000/api/log-theme', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ theme: theme })
  })
  .then(response => {
      if (response.ok) {
          console.log('Thema erfolgreich geloggt:', theme);
      } else {
          console.error('Fehler beim Loggen des Themas');
      }
  })
  .catch(error => console.error('Fehler bei der Anfrage:', error));
}

// Diese Funktion wurde im vorherigen Beispiel verwendet, um Parteien zu loggen.
function logPartyView(party) {
  fetch('http://localhost:3000/api/log-party', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ party: party })
  })
  .then(response => {
      if (response.ok) {
          console.log('Partei erfolgreich geloggt:', party);
      } else {
          console.error('Fehler beim Loggen der Partei');
      }
  })
  .catch(error => console.error('Fehler bei der Anfrage:', error));
}



// Beispiel für das Loggen von Website-Besuchen:


function loadStats() {
    fetch('http://localhost:3000/api/stats')
        .then(response => response.json())
        .then(data => {
            document.getElementById('total-visitors').textContent = data.visits;
            // Hier können Sie auch Diagramme aktualisieren
            console.log(data);
        })
        .catch(error => console.error('Error:', error));
}


function logPageVisit() {
  fetch('/api/log-visit', { method: 'POST' });
}


document.addEventListener('DOMContentLoaded', () => {
  logVisit();
  displayThemes();
});


function showPartyInfo(partyName) {
    const modal = document.getElementById('party-modal');
    const modalContent = modal.querySelector('.modal-content');
    const filteredData = data.filter(item => item.partei === partyName);

    if (filteredData.length > 0) {
        const kanzlerkandidat = kandidaten[partyName] || "Keine Angabe";

        modalContent.innerHTML = `
            <span class="close" onclick="closeModal()">&times;</span>
            <img src="bilder/${partyName.toLowerCase().replace(/ /g, '')}.png" alt="${partyName} Logo" class="party-logo">
            <h2>${partyName}</h2>
            <h3>Kanzlerkandidat*in: ${kanzlerkandidat}</h3>
            <div class="party-positions">
                ${filteredData.map(item => `
                    <div class="position-card">
                        <h3>${item.thema}</h3>
                        <p>${item.position}</p>
                    </div>
                `).join('')}
            </div>
            <button class="filter-button" onclick="closeModal()">Schließen</button>
        `;
    }

    modal.style.display = 'block';
}





// Funktion zum Anzeigen der Themen
function displayThemes() {
    const themesSection = document.querySelector("#themes");
    const uniqueThemes = [...new Set(data.map(item => item.thema))];

    themesSection.innerHTML = `
        <h2>Themen</h2>
        <div class="card-container">
            ${uniqueThemes.map(theme => `
                <div class="card">
                    <h3>${theme}</h3>
                    <p>Vergleiche die Standpunkte der Parteien zu ${theme}.</p>
                    <button class="filter-button" onclick="showPartiesForTheme('${theme}')">Mehr erfahren</button>
                </div>
            `).join('')}
        </div>
    `;
}

// Funktion zum Anzeigen der Parteien für ein bestimmtes Thema
function showPartiesForTheme(theme) {
    const themesSection = document.querySelector("#themes");
    const filteredData = data.filter(item => item.thema === theme);

    themesSection.innerHTML = `
        <h2>${theme}</h2>
        <div class="card-container">
            ${filteredData.map(item => `
                <div class="card">
                    <h3>${item.partei}</h3>
                    <p>${item.position}</p>
                    <p><strong>Kanzlerkandidat*in:</strong> ${kandidaten[item.partei] || "Keine Angabe"}</p>
                </div>
            `).join('')}
        </div>
        <button class="filter-button" onclick="displayThemes()">Zurück zu allen Themen</button>
    `;
}


window.onclick = function(event) {
  const modal = document.getElementById('party-modal');
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}
