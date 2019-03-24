const requireLogin = require("../middlewares/requireLogin");
const keys = require("../config/keys");
var stripe = require("stripe")(keys.stripeSecretKey);

module.exports = app => {
  app.post("/api/stripe", requireLogin, async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 500,
      currency: "usd",
      source: req.body.id,
      description: "charge for some credits"
    });

    req.user.credits += 5;
    const user = await req.user.save();

    res.send(user);
  });
};
