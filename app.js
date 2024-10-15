document.addEventListener('DOMContentLoaded', function() {
    // Zugriff auf das content-Div und Einfügen eines Buttons
    const contentDiv = document.getElementById('content');
    
    contentDiv.innerHTML = `
        <p>Azubi-Kick App ist live! Hier können Sie Turniere erstellen und Spieler verwalten.</p>
        <button id="startBtn">Starte ein neues Turnier</button>
    `;
    
    // Überprüfen, ob der Button existiert und einen Event-Listener hinzufügen
    const startBtn = document.getElementById('startBtn');
    if (startBtn) {
        startBtn.addEventListener('click', function() {
            alert('Turnier gestartet!');
        });
    } else {
        console.error('Button konnte nicht gefunden werden');
    }
});
