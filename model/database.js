require("dotenv").config();
const mysql = require("mysql");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const con = mysql.createConnection({
  host: DB_HOST || "127.0.0.1",
  user: DB_USER || "root",
  port: "52000",
  password: DB_PASS,
  database: DB_NAME || "slowDownFashion",
  multipleStatements: true,
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");

  let sql =
    "DROP TABLE if exists wardrobe; CREATE TABLE wardrobe(id INT NOT NULL AUTO_INCREMENT, clothesCategory VARCHAR(255) not null, clothesImage VARCHAR(255) not null, PRIMARY KEY (id));";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation `wardrobe` was successful!");

    console.log("Closing...");
  });

  con.end();
});
