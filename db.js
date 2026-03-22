const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "MOHAR2006",
  database: "portfolio_db"
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting:", err);
    return;
  }
  console.log("Connected to MySQL");
});

module.exports = connection;