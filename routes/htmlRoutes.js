const db = require('../models');
const instafeed = require('../controllers/instagram');
module.exports = (app) => {
  // home page
  app.get('/', (req, res) => { 
    new Promise(resolve => {
      instafeed.getPosts(resolve)
    }).then((posts) => {
      res.render('index', { posts: posts })
    });
  });
  // navigate between pages from the navbar
  app.get('/:page', (req, res) => {
    const page = req.params.page;
    switch(page) {
      case ('equipment'):
        return db.Equipment.findAll({
          raw: true
        }).then((equipment) => {
          res.render('equipment', {
            layout: "subpage.handlebars",
            equipment: equipment
          });
        });
      case ('clients'):
        return db.Client.findAll({
          raw: true
        }).then((clients) => {
          res.render('clients', {
            layout: false,
            clients: clients
          });
        });
      case ('contact'):
        return res.render('contact', {
          layout: "subpage.handlebars"
        });
      default:
        return res.render('404', {layout: false})
    }
  });
};
