const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const keys = require("./config/keys");

// DB model class
require("./models/User");

// passport setup
require("./services/passport");

// mongoose connect
mongoose.connect(keys.mongoURI);

// use cookie for passport auth
const app = express();
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 20 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

// require auth routes
require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);

if (process.env.NODE_ENV === "production") {
  // express will serve up production assets, like main.js
  app.use(express.static("client/build"));

  // express will serve up index.html if it doesn't recognize the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// listen on port
const PORT = process.env.PORT || 5000;
app.listen(PORT);
