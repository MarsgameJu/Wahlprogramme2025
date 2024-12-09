function createChart(canvasId, type, data, title) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    
    // Überprüfen, ob der ctx (Kontext des Canvas) korrekt abgerufen wurde
    if (!ctx) {
        console.error(`Canvas mit ID ${canvasId} konnte nicht gefunden werden.`);
        return;
    }

    new Chart(ctx, {
        type: type,  // Diagrammtyp (z.B. 'line', 'bar', 'pie')
        data: {
            labels: Object.keys(data),  // X-Achse Labels (Zeitraum / Themen / Parteien)
            datasets: [{
                label: title,  // Beschriftung des Diagramms
                data: Object.values(data),  // Y-Achse mit den entsprechenden Daten
                backgroundColor: getBackgroundColor(type),  // Bestimmt die Hintergrundfarbe basierend auf dem Typ
                borderColor: getBorderColor(type),  // Bestimmt die Randfarbe basierend auf dem Typ
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
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

// Helferfunktionen für Farben basierend auf Diagrammtyp
function getBackgroundColor(type) {
    if (type === 'pie') {
        return [
            'rgba(255, 99, 132, 0.6)', 
            'rgba(54, 162, 235, 0.6)', 
            'rgba(255, 206, 86, 0.6)', 
            'rgba(75, 192, 192, 0.6)', 
            'rgba(153, 102, 255, 0.6)'
        ];
    } else if (type === 'line' || type === 'bar') {
        return 'rgba(75,192,192,0.2)';
    }
    return 'rgba(75, 192, 192, 0.2)';
}

function getBorderColor(type) {
    if (type === 'pie') {
        return [
            'rgba(255, 99, 132, 1)', 
            'rgba(54, 162, 235, 1)', 
            'rgba(255, 206, 86, 1)', 
            'rgba(75, 192, 192, 1)', 
            'rgba(153, 102, 255, 1)'
        ];
    } else if (type === 'line' || type === 'bar') {
        return '#4BC0C0';
    }
    return '#4BC0C0';
}
