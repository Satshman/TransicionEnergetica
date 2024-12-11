const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Conexión a la base de datos
document.getElementById("totalProductionBtn").addEventListener("click", async () => {
    try {
        const response = await fetch("http://localhost:3000/total-production");
        const data = await response.json();
        const resultsTable = document.getElementById("resultTotalProduction");
        resultsTable.innerHTML = data.results
            .map(row => `<tr><td>${row.region}</td><td>${row.production}</td></tr>`)
            .join("");
    } catch (error) {
        console.error("Error al obtener los datos:", error);
    }
});
// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
