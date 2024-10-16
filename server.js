const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware zum Verarbeiten von JSON-Anfragen
app.use(express.json());

// Test-Route zum Überprüfen, ob der Server läuft
app.get('/', (req, res) => {
    res.send('Azubi-Kick Backend ist live!');
});

// Starte den Server und höre auf dem zugewiesenen Port
app.listen(port, () => {
    console.log(`Server läuft auf Port ${port}`);
});
app.post('/api/tournaments', (req, res) => {
    const tournament = req.body;
    console.log('Turnier erhalten:', tournament);
    // Hier könnten wir die Daten speichern (z.B. in einer Datenbank)
    res.status(201).send({ message: 'Turnier erfolgreich erstellt', tournament });
});
