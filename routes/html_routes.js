const path = require('path');
require('dotenv').config();

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  app.get('/portfolio', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/portfolio.html'));
  });

  app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/contact.html'));
  });

  app.post('/send_email', (req, res) => {
    console.log(req.body);
    let from = req.body.email;
    let message = req.body.message;
    let subject = req.body.subject;
    sgMail.setApiKey(process.env.SENDGRID_KEY);
    const msg = {
      to: 'jasonlwest@gmail.com', // Change to your recipient
      from: from,
      subject: subject,
      text: message,
    };
    sgMail.send(msg, (err, info) => {
      if (err) {
        console.log('Email not Sent');
      } else {
        alert('Your Email was Sent\nWill redirect you to main page');
      }
    });
    res.redirect('/');
  });
};
