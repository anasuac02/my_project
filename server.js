// const db = require("./db"); // ❌ TEMPORARILY DISABLED

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

// Test route
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

// Contact route (DB disabled for deployment)
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  console.log("Form received:", { name, email, message });

  res.send("Form received successfully (DB coming soon)");
});

// IMPORTANT: use Render's PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});