const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const fs = require('fs');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: fs.readFileSync('gmail-credentials.txt')
});

router.post('/send-email', function(req, res){

  let mailOptions = {
    from: req.body.address,
    to: 'jake.ollila@gmail.com',
    subject: 'Freelance Prospect: ' + req.body.name,
    text: req.body.message
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
