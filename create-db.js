const mysql = require('mysql');

const db = mysql.createConnection ({
  multipleStatements: true,
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

const query = "CREATE DATABASE `cypress-test`; CREATE TABLE `cypress-test`.`entries`(`id` INT NOT NULL AUTO_INCREMENT, `title` varchar(255) NOT NULL, `content` varchar(255) NOT NULL, `date_created` datetime NOT NULL, PRIMARY KEY (`id`))ENGINE=INNODB;"
const insertQuery = "USE `cypress-test`; INSERT INTO `entries` (`title`, `content`, `date_created`) VALUES ('Entry to update', 'Entry to update content', CURRENT_DATE);INSERT INTO entries (`title`, `content`, `date_created`) VALUES ('Entry to delete from list', 'Entry to delete from list content', CURRENT_DATE);INSERT INTO entries (`title`, `content`, `date_created`) VALUES ('Entry to delete from view', 'Entry to delete from view content', CURRENT_DATE);";
db.query(query + insertQuery, (err, result, fields) => {
  if (!!err) {
    console.log(err);
  } else {
    db.end();
  }
});