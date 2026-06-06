const express = require("express");
const path = require("path");

const app = express();

// Local development uses port 3000
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname)));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Gravity Binary homepage capsule running on port ${PORT}`);
});

