const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");

const Survey = mongoose.model("surveys");

module.exports = app => {
  app.post("/api/surveys", requireLogin, requireCredits, async (req, res) => {
    const { title, subject, body, recipients } = req.body;

    var survey = Survey({
      title,
      subject,
      body,
      recipients: recipients.split(",").map(email => ({
        email
      })),
      _user: req.user.id,
      dateSent: Date.now()
    });

    survey.Save();
  });
};
