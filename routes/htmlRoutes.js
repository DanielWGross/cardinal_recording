const db = require('../models');
const instafeed = require('../controllers/instagram');
module.exports = (app) => {
  // home page
  app.get('/', (req, res) => { 
    new Promise(resolve => {
      instafeed.getPosts(resolve)
    }).then((posts) => {
      res.render('index', {
        posts: posts
      })
    })
  });
  // navigate between pages from the navbar
  app.get('/:page', (req, res) => {
    const page = req.params.page;
    switch(page) {
      case ('services'):
        return res.render('services');
      case ('equipment'):
        return db.Equipment.findAll({
          raw: true
        }).then((equipment) => {
          res.render('equipment', {
            equipment: equipment
          });
        });
      case ('clients'):
        return db.Client.findAll({
          raw: true
        }).then((clients) => {
          res.render('clients', {
            clients: clients
          });
        });
      case ('contact'):
        return res.render('contact');
      default:
        return res.render('404', {layout: false})
    }
  });
};
