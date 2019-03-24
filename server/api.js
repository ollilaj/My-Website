const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const fs = require('fs');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MY_WEBSITE_GMAIL,
    pass: process.env.MY_WEBSITE_GMAIL_PASSWORD
  }
});

router.post('/send-email', function(req, res){

  let mailOptions = {
    from: process.env.MY_WEBSITE_GMAIL,
    to: process.env.MY_PERSONAL_GMAIL,
    subject: 'Freelance Prospect: ' + req.body.name,
    text: req.body.message + ". From: " + req.body.email
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      res.send({
        success: false
      })
    } else {
      console.log('Email sent.');
      res.send({
        success: true
      })
    }
  });

});

module.exports = router;
