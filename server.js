//Install express server
const express = require("express");
const path = require("path");

function requireHTTPS(req, res, next) {
  if (!req.secure && req.get("x-forwarded-proto") !== "https") {
    return res.redirect("https://" + req.get("host") + req.url);
  }
  next();
}

const app = express();
// app.use(requireHTTPS);
// Serve only the static files form the dist directory
app.use(express.static(__dirname + "/dist/cookbook-app"));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/cookbook-app/index.html"));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8000);
