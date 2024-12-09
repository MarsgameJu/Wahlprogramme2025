const fs = require('fs');
const path = require('path');
const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname))); // Statische Dateien bereitstellen

const visitorDataPath = path.join(__dirname, 'visitor-data.json');

// Besuchsdaten laden mit Fehlerbehandlung
// Besuchsdaten laden mit Fehlerbehandlung
function loadVisitorData() {
    try {
        if (!fs.existsSync(visitorDataPath)) {
            // Wenn die Datei nicht existiert, erzeuge eine leere Datenstruktur
            return {
                daily: {},
                weekly: {},
                monthly: {},
                themeViews: {},
                partyViews: {}
            };
        }
        // Lade die JSON-Daten
        const data = fs.readFileSync(visitorDataPath, 'utf-8');
        const parsedData = JSON.parse(data);

        // Sicherstellen, dass 'daily', 'weekly' und 'monthly' existieren
        if (!parsedData.daily) parsedData.daily = {};
        if (!parsedData.weekly) parsedData.weekly = {};
        if (!parsedData.monthly) parsedData.monthly = {};
        if (!parsedData.themeViews) parsedData.themeViews = {};
        if (!parsedData.partyViews) parsedData.partyViews = {};

        return parsedData;
    } catch (error) {
        console.error('Fehler beim Laden der Besuchsdaten:', error);
        return {
            daily: {},
            weekly: {},
            monthly: {},
            themeViews: {},
            partyViews: {}
        };
    }
}


// Besuchsdaten speichern
function saveVisitorData(data) {
    try {
        fs.writeFileSync(visitorDataPath, JSON.stringify(data, null, 2), 'utf-8');
    } catch (error) {
        console.error('Fehler beim Speichern der Besuchsdaten:', error);
    }
}

// API-Endpunkt zum Protokollieren von Besuchen
// API-Endpunkt zum Protokollieren von Besuchen
app.post('/api/log-visit', (req, res) => {
    try {
        let visitorData = loadVisitorData();  // Daten erneut laden, um sicherzustellen, dass sie aktuell sind
        const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
        visitorData.daily[today] = (visitorData.daily[today] || 0) + 1;  // Zähler erhöhen
        saveVisitorData(visitorData);  // Besuchsdaten speichern
        res.sendStatus(200); // Erfolgreiche Antwort
    } catch (error) {
        console.error('Fehler beim Loggen des Besuchs:', error);
        res.status(500).json({ error: 'Interner Serverfehler' });
    }
});


// API-Endpunkt zum Protokollieren von Themenaufrufen
app.post('/api/log-theme', (req, res) => {
    const { theme } = req.body;
    if (theme) {
        let visitorData = loadVisitorData();
        visitorData.themeViews[theme] = (visitorData.themeViews[theme] || 0) + 1;
        saveVisitorData(visitorData);
        res.sendStatus(200); // Erfolgreiche Antwort
    } else {
        res.status(400).json({ error: 'Kein Thema angegeben' });
    }
});

// API-Endpunkt zum Protokollieren von Parteienaufrufen
app.post('/api/log-party', (req, res) => {
    const { party } = req.body;
    if (party) {
        let visitorData = loadVisitorData();
        visitorData.partyViews[party] = (visitorData.partyViews[party] || 0) + 1;
        saveVisitorData(visitorData);
        res.sendStatus(200); // Erfolgreiche Antwort
    } else {
        res.status(400).json({ error: 'Keine Partei angegeben' });
    }
});

// API-Endpunkt zum Abrufen von Statistiken
app.get('/api/stats', (req, res) => {
    const timeframe = req.query.timeframe; // 'day', 'week', 'month'
    console.log("Zeitrahmen empfangen:", timeframe); // Debugging: Welcher Zeitraum wird angefordert?

    const validTimeframes = {
        day: 'daily',
        week: 'weekly',
        month: 'monthly'
    };

    // Überprüfen, ob der Zeitraum gültig ist
    if (timeframe && validTimeframes[timeframe]) {
        let visitorData = loadVisitorData(); // Daten erneut laden
        const timeframeKey = validTimeframes[timeframe]; // 'daily', 'weekly', 'monthly'

        // Für 'weekly' und 'monthly' Aggregationen durchführen
        if (timeframe === 'week') {
            // Berechne Besuche für die letzte Woche (z. B. von Mo bis So)
            visitorData = aggregateWeeklyData(visitorData);
        } else if (timeframe === 'month') {
            // Berechne Besuche für den letzten Monat
            visitorData = aggregateMonthlyData(visitorData);
        }

        console.log("Daten für Zeitraum:", timeframeKey, visitorData[timeframeKey]);  // Debugging: Zeigt die Daten für den Zeitraum an

        if (visitorData[timeframeKey] && Object.keys(visitorData[timeframeKey]).length > 0) {
            res.json({
                visitors: visitorData[timeframeKey], // Rückgabe der Besucherdaten für den angegebenen Zeitraum
                themeViews: visitorData.themeViews,  // Rückgabe der Daten zu Themen
                partyViews: visitorData.partyViews   // Rückgabe der Daten zu Parteien
            });
        } else {
            console.error("Keine Daten für diesen Zeitraum gefunden");
            res.status(400).json({ error: "Keine Daten für diesen Zeitraum vorhanden" });
        }
    } else {
        console.error("Ungültiger Zeitraum:", timeframe);
        res.status(400).json({ error: "Ungültiger Zeitraum oder keine Daten vorhanden" });
    }
});

// Aggregiere die Daten für die letzte Woche
function aggregateWeeklyData(visitorData) {
    const aggregatedData = {};

    // Iteriere durch alle täglichen Besuchsdaten
    for (let date in visitorData.daily) {
        const dateObj = new Date(date);
        const weekStartDate = getWeekStartDate(dateObj); // Berechne den Start der Woche
        const weekKey = `${weekStartDate.getFullYear()}-${weekStartDate.getMonth() + 1}-${weekStartDate.getDate()}`;

        // Füge die Besuche für diese Woche hinzu
        if (!aggregatedData[weekKey]) {
            aggregatedData[weekKey] = 0;
        }
        aggregatedData[weekKey] += visitorData.daily[date];
    }

    return {
        ...visitorData,
        weekly: aggregatedData
    };
}

// Berechne den Start der Woche (Montag)
function getWeekStartDate(date) {
    const dayOfWeek = date.getDay();
    const diff = date.getDate() - dayOfWeek + (dayOfWeek == 0 ? -6 : 1); // Gehe zum Montag der Woche
    const weekStartDate = new Date(date.setDate(diff));
    return weekStartDate;
}

// Aggregiere die Daten für den letzten Monat
function aggregateMonthlyData(visitorData) {
    const aggregatedData = {};

    // Iteriere durch alle täglichen Besuchsdaten
    for (let date in visitorData.daily) {
        const dateObj = new Date(date);
        const monthKey = `${dateObj.getFullYear()}-${dateObj.getMonth() + 1}`; // Jahr und Monat

        // Füge die Besuche für diesen Monat hinzu
        if (!aggregatedData[monthKey]) {
            aggregatedData[monthKey] = 0;
        }
        aggregatedData[monthKey] += visitorData.daily[date];
    }

    return {
        ...visitorData,
        monthly: aggregatedData
    };
}




// Server starten
app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
});
