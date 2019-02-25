const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");

// DB model class
require("./models/User");

// passport setup
require("./services/passport");

// mongoose connect
mongoose.connect(keys.mongoURI);

const app = express();
app.use(
  cookieSession({
    maxAge: 20 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());
require("./routes/authRoute")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
