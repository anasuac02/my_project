const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "caboose.proxy.rlwy.net",
  user: "root",
  password: "dvNOFkqOvLvAuBwJjLQIWEgZnZqwZMXc",
  database: "railway",
  port: 25232
});

db.connect((err) => {
  if (err) {
    console.error("DB connection failed:", err);
  } else {
    console.log("Connected to Railway MySQL");
  }
});

module.exports = db;