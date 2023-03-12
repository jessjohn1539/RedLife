const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '@Ys2drrizfs',
    database: 'redlife'
  });
  connection.connect(function(err) {
    if (err) {
      console.error('Error connecting to SQL database: ' + err.stack);
      return;
    }
    console.log('Connected to SQL database as ID ' + connection.threadId);
  });
