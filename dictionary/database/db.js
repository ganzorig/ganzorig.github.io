const mysql = require('mysql');
require('dotenv').config();

// Create a connection to the database
const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USERNAME,
  password: process.env.PASS,
  database: process.env.DBNAME,
});

// open the MySQL connection
connection.connect((error) => {
  if (error) throw error;
  console.log('Successfully connected to the database.');
});

module.exports = connection;
