const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

app.use(bodyParser.json({ limit: "25mb" }));
app.use(bodyParser.urlencoded({ extended: false, limit: "25mb" }));

app.post("/message", async (req, res) => {
  // NODEMAILER

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    secure: true,
  });

  const mailData = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO,
    subject: `Konsultacja online: ${req.body.name} ${req.body.surname} (${req.body.phoneNumber}, ${req.body.email})`,
    text: `Imię Nazwisko: ${req.body.name} ${req.body.surname} \n Numer telefonu: ${req.body.phoneNumber}\n email: ${req.body.email}\n Konsultacja online w sprawie: ${req.body.message}`,
  };

  await transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
  res.redirect(200, "/online");
});

module.exports = app;
