const db = require('../models');
const autoMailer = require('../controllers/mailer');
const Instagram = require('node-instagram').default;
const instagram = new Instagram({
  clientId: process.env.INSTAGRAM_CLIENT_ID,
  clientSecret: process.env.INSTAGRAM_SECRET
});
const redirectUri = 'http://localhost:3000/auth/instagram/callback';

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
};
// ---------------------------------------------------FUTURE ADMIN ROUTES------------------------------------------------------------------
  // app.post('/equipment/admin', (req, res) => {
  //   db.Equipment.create(req.body).then((equipment) => {
  //     res.json(equipment); // return result and append html on client side via jQuery
  //                          // would be nice if this was a preview where the changes could be undone or edited 
  //   });
  // })

//   app.put('/equipment/admin', (req, res) => {
//     db.Equipment.update({
//       x: y,
//       where: {
//         id: req.body.id
//       }
//     }).then((equipment) => {
//       res.json(equipment); // "
//     });
//   })

//   app.delete('/equipment/admin', (req, res) => {
//     db.Equipment.destroy({
//       where: {
//         x: y
//       }
//     }).then((equipment) => {
//       res.json(equipment); // "
//     });
//   });

//   app.post('/clients/admin', (req, res) => {
//     db.Client.create(req.body).then((dbExample) => {
//       res.json(clients); 
//     });
//   });

//   app.put('/clients/admin', (req, res) => {
//     db.Client.update({
//       x: y,
//       where: {
//         id: req.body.id
//       }
//     });
//   });

//   app.delete('/clients/admin', (req, res) => {
//     db.Client.destroy({ 
//       where: { 
//         id: req.body.id 
//       } 
//     }).then((clients) => {
//       res.json(clients);
//     });
//   });
