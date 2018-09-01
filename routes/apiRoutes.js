const db = require('../models');
const autoMailer = require('../controllers/mailer');

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
