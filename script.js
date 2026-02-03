const ip = "sotg.ddns.net:25570"; 
async function checkServer() {
    try {
        const response = await fetch(`https://api.mcsrvstat.us/2/${ip}`);
        const data = await response.json();
        const statusEl = document.getElementById('status');
        const playersEl = document.getElementById('players');

        if (data.online) {
            statusEl.innerHTML = '<span class="online">● ONLINE</span>';
            playersEl.innerText = `Jugadores: ${data.players.online} / ${data.players.max}`;
        } else {
            statusEl.innerHTML = '<span class="offline">● OFFLINE</span>';
            playersEl.innerText = "El servidor está apagado.";
        }
    } catch (error) {
        document.getElementById('status').innerText = "Error al consultar API";
    }
}
checkServer();
setInterval(checkServer, 60000);