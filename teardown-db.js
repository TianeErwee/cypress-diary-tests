const mysql = require('mysql');

const db = mysql.createConnection ({
  host: "localhost",
  user: "root",
  password: "password"
});

db.connect((err) => {
  if (err) {
      throw err;
  }
  console.log('Connected to database');
});

db.query('DROP DATABASE `cypress-test`;', (err, result, fields) => {
  if (!!err) {
    console.log(err);
  } else {
    db.end();
  }
});