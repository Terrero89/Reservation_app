const express = require("express");
const app = express();
const port = 3000;

const array = ["Pedro", "Javier", "Ivan", "Alex"]
app.get("/", (req, res) => {
  res.send(array)
});

app.listen(port, () => {
  console.log("listening on port " + port);
});
