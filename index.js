import express from "express";
import { connect } from "mongoose";
import cookieSession from "cookie-session";
import { initialize, session } from "passport";
import { json } from "body-parser";
import { mongoURI, cookieKey } from "./config/keys";

// DB model class
import "./models/User";

// passport setup
import "./services/passport";

// mongoose connect
connect(mongoURI);

// use cookie for passport auth
const app = express();
app.use(json());
app.use(
  cookieSession({
    maxAge: 20 * 24 * 60 * 60 * 1000,
    keys: [cookieKey]
  })
);
app.use(initialize());
app.use(session());

// require auth routes
require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);

// listen on port
const PORT = process.env.PORT || 5000;
app.listen(PORT);
