
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password', 
    database: 'energy'
});

connection.connect((err) => {
    if (err) throw err;
    console.log("Conectado a la base de datos");
});
