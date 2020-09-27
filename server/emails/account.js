const sgMail = require("@sendgrid/mail");

const sendGripAPIKey =
  "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";

sgMail.setApiKey(sendGripAPIKey);

const welcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "vnghenry@gmail.com",
    subject: "welcome to My Health",
    text: `Hello ${name}, welcome to to My Health app`,
  });
};

module.exports = {
  welcomeEmail,
};
