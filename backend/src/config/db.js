require('dotenv').config({ path: '../../.env' });
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

connection.connect((err) => {
  if (err) {
    console.error('Erreur de connexion MySQL : ' + err.stack);
    return;
  }
  console.log('Connecté à la base de données MySQL');
});

module.exports = connection;
