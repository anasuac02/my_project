const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

// Test route
app.get("/", (req, res) => {
  res.send("Server is running ");
});

// Contact route
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  const sql = "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)";

  db.query(sql, [name, email, message], (err, result) => {
    if (err) {
      console.error("DB Error:", err);
      res.status(500).send("Error saving data");
      return;
    }

    console.log("✅ Data inserted:", result);
    res.send("Message sent successfully!");
  });
});

// Port (Render uses this)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});