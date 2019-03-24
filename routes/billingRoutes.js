var keys = require("../config/keys");
var stripe = require("stripe")(keys.stripeSecretKey);

module.exports = app => {
  app.post("/api/stripe", async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 500,
      currency: "usd",
      source: req.body.id,
      description: "charge for some credits"
    });

    console.log(charge);
  });
};
