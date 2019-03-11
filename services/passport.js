const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

// metodo per salvare nei cookie l'utente corrente
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// metodo per recuperare dai cookie l'utente
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

// passport setup for google strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        // we already have a record with the given profile ID
        return done(null, existingUser);
      }

      // we don't have a user record with this ID, make a new record!
      const u = await new User({ googleId: profile.id }).save();
      done(null, u);
    }
  )
);
