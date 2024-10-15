document.addEventListener('DOMContentLoaded', function() {
    const contentDiv = document.getElementById('content');
    
    contentDiv.innerHTML = `
        <p>Azubi-Kick App ist live! Hier können Sie Turniere erstellen und Spieler verwalten.</p>
        <button id="startBtn">Starte ein neues Turnier</button>
    `;
    
    document.getElementById('startBtn').addEventListener('click', function() {
        alert('Turnier gestartet!');
    });
});
