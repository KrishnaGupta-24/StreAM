// backend/db.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'your_mysql_username',   // root (default)
    password: 'your_mysql_password', // (whatever you set during MySQL install)
    database: 'stream_db'  // We'll create this database
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL: ', err);
        return;
    }
    console.log('Connected to MySQL Database ✅');
});

module.exports = connection;
