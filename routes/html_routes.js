const path = require('path');
require('dotenv').config();
const sgMail = require('@sendgrid/mail');

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
    let email = req.body.email;
    let message = req.body.message;
    let subject = req.body.subject;
    sgMail.setApiKey(process.env.SENDGRID_KEY);
    const msg = {
      to: 'jasonlwest@gmail.com', // Change to your recipient
      from: 'jlw00329@gmail.com',
      subject: subject,
      html: email + '<br>' + message,
    };
    console.log(msg);
    sgMail.send(msg, (err, info) => {
      if (err) {
        console.log(err);
      } else {
        console.log('email sent.');
        res.redirect('./success.html');
      }
    });
    // res.redirect('/');
  });
};
