const Instagram = require('node-instagram').default;
// Create a new instance
const instagram = new Instagram({
  clientId: process.env.INSTAGRAM_CLIENT_ID,
  clientSecret: process.env.INSTAGRAM_SECRET,
  accessToken: process.env.INSTAGRAM_ACCESS_TOKEN
});

const instafeed = {
  getPosts: function(resolve) {
    instagram.get('users/self', (err, data) => {
      if (err) {
        // an error occured
        console.log(err);
      } else {
        console.log(data);
      }
    resolve(data);
    });
  }
}

module.exports = instafeed;