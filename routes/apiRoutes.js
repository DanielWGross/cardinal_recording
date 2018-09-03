const db = require('../models');
const autoMailer = require('../controllers/mailer');
const Instagram = require('node-instagram').default;
const instagram = new Instagram({
  clientId: process.env.INSTAGRAM_CLIENT_ID,
  clientSecret: process.env.INSTAGRAM_SECRET
});
const redirectUri = 'http://localhost:3000/auth/instagram/callback';
// const passportSetup = require('../controllers/passport');
// const passport = require('passport');

module.exports = (app) => {
  // POST Contact Form
  app.post('/contact', (req, res) => {
    new Promise(resolve => {
      autoMailer.sendEmail(req.body, resolve)
    }).then((mailSent) => {
      res.json(mailSent);
    });
  });
  // GET All Equipment
  app.get('/api/equipment', (req, res) => {
    db.Equipment.findAll({
    }).then((dbEquipment) => {
      res.json(dbEquipment);
    });
  });
  // GET All Clients
  app.get('/api/clients', (req, res) => {
    db.Client.findAll({})
    .then((dbClients) => {
      res.json(dbClients);
    });
  });

  app.get('/auth/instagram', (req, res) => {
    res.redirect(instagram.getAuthorizationUrl(redirectUri, { scope: ['basic'] }));
  });

  app.get('/auth/instagram/callback', async (req,res) => {
    try {
      const data = await instagram.authorizeUser(req.query.code, redirectUri);
      res.json(data);
    } catch (err) {
      res.json(err);
    };
  });

  // app.get('/admin', (req, res) => {
  //   res.render('admin', {
  //     layout: false
  //   });
  // })

  // app.get('/login', (req, res) => {
  //   res.render('login', {
  //     layout: false
  //   });
  // });

  // app.get('/google', passport.authenticate('google', {
  //   scope: ['profile']
  // }));

  // app.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  //   res.send('You have reach the callback URI!');
  // });

  // app.get('/logout', (req, res) => {
  //   // Handle with passport
  //   res.send("logging out");
  // });

};