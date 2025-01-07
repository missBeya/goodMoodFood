const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'new_password', 
  database: 'goodmoodfood', // Database name
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
  } else {
    console.log('Connected to MySQL database.');
  }
});

module.exports = db;
