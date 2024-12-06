// script.js
const data = [
    { partei: "Partei A", thema: "Klima", position: "Erneuerbare Energien ausbauen." },
    { partei: "Partei B", thema: "Klima", position: "Atomenergie fördern." },
    { partei: "Partei A", thema: "Bildung", position: "Mehr Geld für Schulen." },
    { partei: "Partei B", thema: "Bildung", position: "Digitalisierung der Schulen vorantreiben." },
    { partei: "Partei A", thema: "Wirtschaft", position: "Mittelstand stärken." },
    { partei: "Partei B", thema: "Wirtschaft", position: "Großkonzerne entlasten." }
];


function showPartyInfo(partyName) {
  const filteredData = data.filter(item => item.partei === partyName);
  const themesSection = document.querySelector("#themes");
  
  themesSection.innerHTML = `
    <h2>${partyName}</h2>
    <img src="bilder/${partyName.toLowerCase().replace(' ', '')}.png" 
         alt="${partyName}" 
         class="party-detail-logo">
    <div class="card-container">
      ${filteredData.map(item => `
        <div class="card">
          <h3>${item.thema}</h3>
          <p>${item.position}</p>
        </div>
      `).join('')}
    </div>
    <button class="filter-button" onclick="displayThemes()">Zurück zur Übersicht</button>
  `;
}

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
                </div>
            `).join('')}
        </div>
        <button class="filter-button" onclick="displayThemes()">Zurück zu allen Themen</button>
    `;
}

function displayChart() {
    const ctx = document.getElementById('chart-container').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Klima', 'Bildung', 'Wirtschaft'],
            datasets: [
                {
                    label: 'Partei A',
                    data: [10, 8, 6],
                    backgroundColor: '#0056b3'
                },
                {
                    label: 'Partei B',
                    data: [5, 9, 7],
                    backgroundColor: '#ffcc00'
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'top' },
                title: {
                    display: true,
                    text: 'Vergleich der Parteien nach Themen'
                }
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    displayThemes();
    displayChart();
});

function showPartyInfo(partyName) {
  const modal = document.getElementById('party-modal');
  const modalPartyName = document.getElementById('modal-party-name');
  const modalPartyLogo = document.getElementById('modal-party-logo');
  const modalPartyPositions = document.getElementById('modal-party-positions');
  const modalPartyProgram = document.getElementById('modal-party-program');

  modalPartyName.textContent = partyName;
  modalPartyLogo.src = `bilder/${partyName.toLowerCase().replace(' ', '')}.png`;

  const partyPositions = data.filter(item => item.partei === partyName);
  modalPartyPositions.innerHTML = partyPositions.map(item => `
    <p><strong>${item.thema}:</strong> ${item.position}</p>
  `).join('');

  modalPartyProgram.textContent = `Hier könnte das vollständige Wahlprogramm von ${partyName} stehen.`;

  modal.style.display = 'block';
}

function closeModal() {
  const modal = document.getElementById('party-modal');
  modal.style.display = 'none';
}

window.onclick = function(event) {
  const modal = document.getElementById('party-modal');
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}