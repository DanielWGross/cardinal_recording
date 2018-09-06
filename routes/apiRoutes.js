const db = require('../models');
const autoMailer = require('../controllers/mailer');
const Instagram = require('node-instagram').default;
const instagram = new Instagram({
  clientId: process.env.INSTAGRAM_CLIENT_ID,
  clientSecret: process.env.INSTAGRAM_SECRET
});
const redirectUri = 'http://localhost:3000/auth/instagram/callback';
const passportSetup = require('../controllers/passport');
const passport = require('passport');

const authCheck = (req, res, next) => {
  if(!req.user) {
    res.redirect('/');
  } else {
    next();
  };
};

module.exports = (app) => {
  // POST Contact Form
  app.post('/contact', (req, res) => {
    new Promise(resolve => {
      autoMailer.sendEmail(req.body, resolve)
    }).then((mailSent) => {
      res.json(mailSent);
    });
  });

  app.post('/edit/client/:id', (req, res) => {
    db.Client.update({
      name: req.body.name,
      picture_url: req.body.picture,
      soundcloud_url: req.body.soundcloud
    },
    { 
      where: {
        id: req.params.id
      }
    }).then(dbUpdate => {
      res.json(dbUpdate);
    })
  });

  app.post('/edit/equip/:id', (req, res) => {
    db.Equipment.update({
      name: req.body.name,
    },
    { 
      where: {
        id: req.params.id
      }
    }).then(dbUpdate => {
      res.json(dbUpdate);
    })
  });

  app.post('/delete/client/:id', (req,res) => {
    db.Client.destroy({
      where: {
        id: req.body.id
      }
    }).then(dbDestroy => {
      res.json(dbDestroy);
    })
  });

  app.post('/delete/equip/:id', (req,res) => {
    db.Equipment.destroy({
      where: {
        id: req.body.id
      }
    }).then(dbDestroy => {
      res.json(dbDestroy);
    })
  });

  app.get('/edit/client/:id', (req, res) => {
    db.Client.findOne({
      where: {
        id: req.params.id
      }
    }).then((dbClient) => {
      res.render('edit_client', {
        layout: false,
        client: dbClient
      })
    })
  })

  app.get('/edit/equip/:id', (req, res) => {
    db.Equipment.findOne({
      where: {
        id: req.params.id
      }
    }).then((dbEquip) => {
      res.render('edit_equip', {
        layout: false,
        equip: dbEquip
      })
    })
  })

  // GET All Equipment
  app.get('/api/equipment', (req, res) => {
    db.Equipment.findAll({
    }).then((dbEquipment) => {
      res.json(dbEquipment);
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

  app.get('/admin', authCheck, (req, res) => {
    res.render('admin', {
      layout: false,
      user: req.user
    });
  });

  app.get('/login', (req, res) => {
    res.render('login', {
      layout: false
    });
  });

  app.get('/google', passport.authenticate('google', {
    scope: ['profile']
  }));

  app.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    res.redirect('/admin');
  });

  app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/admin/clients', (req, res) => {
    db.Client.findAll({})
    .then((dbClients) => {
      res.render('manage_clients', {
        layout: false,
        clients: dbClients
      })
    });
  });
  
  app.get('/admin/equipment', (req, res) => {
    db.Equipment.findAll({})
    .then(dbEquip => {
      res.render('manage_equipment', {
        layout: false,
        equipment: dbEquip
      })
    });    
  });
};