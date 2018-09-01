'use strict';
const nodemailer = require('nodemailer');
// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
const mailer = {
  sendEmail: (contactForm, resolve) => {
    nodemailer.createTestAccount((err, account) => {
      // Create transporter object
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS 
        }
    	});

			// Create a new date/time stamp
			const mailDate = new Date;
   	 	// Setup email data with unicode symbols
    	const mailOptions = {

				from: `${contactForm.name} <${contactForm.email}>`,
				to: 'cardinaltest21@gmail.com',
        subject: `You received a new message from ${contactForm.email}!`,
				text:`
				
				You received a new message from the submission form on Cardinal Recordings!
				
				From: ${contactForm.email} 

				Date: ${mailDate}

				Subject: ${contactForm.subject}

				Message: ${contactForm.message}
				`
    	};

   	 	// Send email with defined transport object
    	transporter.sendMail(mailOptions, (error, info) => {
      	if (error) {
        	return console.log(error);
      	};
				console.log('Message sent: %s', info.messageId);
    	});
		});
		resolve("Sucess");
	}
};

module.exports = mailer;