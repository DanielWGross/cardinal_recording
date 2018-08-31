'use strict';
const nodemailer = require('nodemailer');

// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
const mailer = {
  sendEmail: (contactForm) => {
    nodemailer.createTestAccount((err, account) => {
      // create transporter object
      let transporter = nodemailer.createTransport({
        service: 'gmail', // we need to enter cardinal recordings email info here
        auth: {
            user: process.env.EMAIL_USER, // cardinal recordings email  (save this in an env)
            pass: process.env.EMAIL_PASS // cardinal recordings password (")
        }
    });
  
    // setup email data with unicode symbols
    let mailOptions = {
        from: `${contactForm.name} <${contactForm.email}>`, // sender address
        to: 'cardinaltest21@gmail.com', // wherever they want to recieve the emails, this could be the same as the sender
        subject: `${contactForm.subject}`, // Subject line
        text: `Hey fuckhead! You got a new message from ${contactForm.email}. Here's the bullshit they said ${contactForm.message}` // plain text body
        //html: '<b>Hello world?</b>' html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    });
  });
  }
}

module.exports = mailer;