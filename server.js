const express = require("express");
const path = require("path");

const app = express();

// Azure Container Apps expects your app to listen on PORT or 80
const PORT = process.env.PORT || 80;

app.use(express.static(path.join(__dirname)));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Gravity Binary homepage capsule running on port ${PORT}`);
});
