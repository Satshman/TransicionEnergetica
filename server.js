const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'consultas.html'));
});


// Conexión a la base de datos
const db = new sqlite3.Database('./energy.db', (err) => {
    if (err) console.error('Error al conectar con la base de datos:', err.message);
    else console.log('Conectado a la base de datos.');
});

// Función para ejecutar una consulta SQL desde un archivo
const executeQuery = (filePath, params, res) => {
    const query = require('fs').readFileSync(path.join(__dirname, 'db', filePath), 'utf-8');
    db.all(query, params, (err, rows) => {
        if (err) {
            console.error('Error al ejecutar la consulta:', err.message);
            res.status(500).send('Error interno del servidor');
        } else {
            res.json(rows);
        }
    });
};

// Rutas para las consultas
app.post('/api/query1', (req, res) => {
    const { year } = req.body;
    executeQuery('total_production.sql', [year], res);
});

app.get('/api/query2', (req, res) => {
    executeQuery('elec_region_total.sql', [], res);
});

app.get('/api/query3', (req, res) => {
    executeQuery('solar_capacity.sql', [], res);
});

app.post('/api/query4', (req, res) => {
    const { year } = req.body;
    executeQuery('top10_wind_countries.sql', [year], res);
});

app.get('/api/query5', (req, res) => {
    executeQuery('total_energy_global.sql', [], res);
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
