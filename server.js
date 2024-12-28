const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create app instance
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'new_password', 
  database: 'goodmoodfood',
});

// Test Database Connection
db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to MySQL database.');
});

// Define API Routes
app.get('/api/moods', (req, res) => {
  const mood = req.query.mood;
  db.query('SELECT mood FROM users WHERE id = ?', [userId], (err, userResults) => {
    if (err || userResults.length === 0) {
      res.status(400).json({ error: 'User not found or database error' });
    } else {
      const userMood = userResults[0].mood;
      const sql = 'SELECT * FROM restaurants WHERE mood = ?';
      db.query(sql, [userMood], (err, restaurantResults) => {
        if (err) {
          res.status(500).send({ error: 'Error fetching restaurants' });
        } else if (restaurantResults.length === 0) {
          res.status(404).send({ message: 'No restaurants found for this mood' });
        } else {
          res.json(restaurantResults);
        }
      });
    }
  });
  
});

// Start Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


