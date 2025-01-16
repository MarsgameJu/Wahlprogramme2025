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




// Besuchsdaten laden
function loadVisitorData() {
    try {
        if (!fs.existsSync(visitorDataPath)) {
            return {
                daily: {},
                hourly: {},
                themeViews: {},
                partyViews: {}
            };
        }
        const data = fs.readFileSync(visitorDataPath, 'utf-8');
        const parsedData = JSON.parse(data);

        // Sicherstellen, dass die Schlüssel existieren
        parsedData.daily ??= {};
        parsedData.hourly ??= {};
        parsedData.themeViews ??= {};
        parsedData.partyViews ??= {};
        return parsedData;
    } catch (error) {
        console.error('Fehler beim Laden der Besuchsdaten:', error);
        return {
            daily: {},
            hourly: {},
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

// Protokolliere Besuche
app.post('/api/log-visit', (req, res) => {
    try {
        let visitorData = loadVisitorData();
        const now = new Date();

        const today = now.toISOString().split('T')[0];
        const currentHour = `${now.getHours().toString().padStart(2, '0')}:00`;

        visitorData.daily[today] = (visitorData.daily[today] || 0) + 1;
        visitorData.hourly[today] ??= {};
        visitorData.hourly[today][currentHour] = (visitorData.hourly[today][currentHour] || 0) + 1;

        saveVisitorData(visitorData);
        res.sendStatus(200);
    } catch (error) {
        console.error('Fehler beim Loggen des Besuchs:', error);
        res.status(500).json({ error: 'Interner Serverfehler' });
    }
});

// Filter für die letzten 24 Stunden
function filterLast24Hours(hourlyData) {
    const result = {};
    const now = new Date();
    const oneDayAgo = new Date(now - 24 * 60 * 60 * 1000); // 24 Stunden zurück

    // Durchlaufe die täglichen Daten und füge nur die letzten 24 Stunden hinzu
    for (let date in hourlyData) {
        const dateData = hourlyData[date];
        for (let hour in dateData) {
            const hourTime = new Date(`${date}T${hour}:00`); // Kombiniere Datum und Stunde
            if (hourTime >= oneDayAgo) {
                if (!result[date]) result[date] = {};
                result[date][hour] = dateData[hour];
            }
        }
    }

    return result;
}

function filterLast7Days(dailyData) {
    const now = new Date();
    const sevenDaysAgo = new Date(now - 7 * 24 * 60 * 60 * 1000);
    const result = {};

    for (let date in dailyData) {
        const dataDate = new Date(date);
        if (dataDate >= sevenDaysAgo) {
            result[date] = dailyData[date];
        }
    }
    return result;
}

function filterLast30Days(dailyData) {
    const now = new Date();
    const thirtyDaysAgo = new Date(now - 30 * 24 * 60 * 60 * 1000);
    const result = {};

    for (let date in dailyData) {
        const dataDate = new Date(date);
        if (dataDate >= thirtyDaysAgo) {
            result[date] = dailyData[date];
        }
    }
    return result;
}

app.get('/api/stats', (req, res) => {
    const timeframe = req.query.timeframe; // 'day', 'week', 'month'
    console.log("Zeitrahmen empfangen:", timeframe);

    const validTimeframes = { 
        day: 'hourly',
        week: 'daily',
        month: 'daily'
    };

    if (timeframe && validTimeframes[timeframe]) {
        let visitorData = loadVisitorData();
        const timeframeKey = validTimeframes[timeframe];

        if (timeframe === 'day') {
            const data = filterLast24Hours(visitorData[timeframeKey]);
            console.log("Gefilterte Daten für 24 Stunden:", data); // Debugging
            res.json({ visitors: data, themeViews: visitorData.themeViews, partyViews: visitorData.partyViews });
        } else if (timeframe === 'week') {
            const data = filterLast7Days(visitorData[timeframeKey]);
            res.json({ visitors: data, themeViews: visitorData.themeViews, partyViews: visitorData.partyViews });
        } else if (timeframe === 'month') {
            const data = filterLast30Days(visitorData[timeframeKey]);
            res.json({ visitors: data, themeViews: visitorData.themeViews, partyViews: visitorData.partyViews });
        }
    } else {
        res.status(400).json({ error: "Ungültiger Zeitraum oder keine Daten vorhanden" });
    }
});

// Protokolliere Themenaufrufe
app.post('/api/log-theme', (req, res) => {
    const { theme } = req.body;
    if (theme) {
        let visitorData = loadVisitorData();
        visitorData.themeViews[theme] = (visitorData.themeViews[theme] || 0) + 1;
        saveVisitorData(visitorData);
        res.sendStatus(200);
    } else {
        res.status(400).json({ error: 'Kein Thema angegeben' });
    }
});

// Protokolliere Parteienaufrufe
app.post('/api/log-party', (req, res) => {
    const { party } = req.body;
    if (party) {
        let visitorData = loadVisitorData();
        visitorData.partyViews[party] = (visitorData.partyViews[party] || 0) + 1;
        saveVisitorData(visitorData);
        res.sendStatus(200);
    } else {
        res.status(400).json({ error: 'Keine Partei angegeben' });
    }
});

// Server starten
app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
});
