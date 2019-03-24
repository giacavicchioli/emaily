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

// listen on port
const PORT = process.env.PORT || 5000;
app.listen(PORT);
