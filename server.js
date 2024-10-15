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
