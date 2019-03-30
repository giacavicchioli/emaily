const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");
const Mailer = require("../services/Mailer");
const surveyTemplate = require("../services/emailTemplates/surveyTemplate");

const Survey = mongoose.model("surveys");

module.exports = app => {
  app.post("/api/surveys", requireLogin, requireCredits, async (req, res) => {
    // create a new Survey instance
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

    // attempt to create and send email
    const mailer = new Mailer(survey, surveyTemplate(survey));
    mailer.send();

    // save survey
    // survey.save();
  });
};
