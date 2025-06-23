const express = require('express');
const mysql = require('mysql');
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();

// Middleware to parse request body
app.use(bodyParser.urlencoded({ extended: false }));

// Middleware to use session
app.use(session({
  secret: 'secret-key', // Use a secure key here
  resave: false,
  saveUninitialized: true
}));

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Update with your MySQL username
  password: '', // Update with your MySQL password
  database: 'stress_analyzer' // Replace with your database name
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database');
});

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
  db.query(query, [username, password], (err, result) => {
    if (err) {
      console.log(err);
      return res.send('Error');
    }

    if (result.length > 0) {
      // User found, save the stress type in the session
      const stressType = result[0].stress_type; // Assuming 'stress_type' column in your table
      req.session.stressType = stressType; // Store the stress type in session

      // Redirect to the daily goals page based on stress type
      if (stressType === 'Mental') {
        return res.redirect('/mental-goals.html');
      } else if (stressType === 'Physical') {
        return res.redirect('/physical-goals.html');
      } else if (stressType === 'Behavioral') {
        return res.redirect('/behavioral-goals.html');
      } else if (stressType === 'Emotional') {
        return res.redirect('/emotional-goals.html');
      }
    } else {
      res.send('Invalid login credentials');
    }
  });
});

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
