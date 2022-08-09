//=============================================================================
const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;

app.use(cors());
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "GET API",
  });
});
app.listen(process.env.PORT || port, () =>
  console.log(`App listening on port ${process.env.PORT || port}!`)
);
