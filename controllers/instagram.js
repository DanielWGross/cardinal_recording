const Instagram = require('node-instagram').default;
// Create a new instance
const instagram = new Instagram({
  clientId: process.env.INSTAGRAM_CLIENT_ID,
  clientSecret: process.env.INSTAGRAM_SECRET,
  accessToken: process.env.INSTAGRAM_ACCESS_TOKEN
});

const instafeed = {
  // Get the most recent media published by the owner of the access token
  getPosts: function(resolve) {
    instagram.get('users/self/media/recent', (err, data) => {
      if (err) {
        // an error occured
        console.log(err);
      } else {
        console.log(data);
      }
      // Create an array of thumbnail URLs from the object
      const justPictures = data.data.map(posts => posts.images.thumbnail.url);
      // Remove the last two objects (This is not very clean)
      justPictures.splice(-2,2);
      // Create a new object of the images with the key being the iterator
      const newObject = justPictures.reduce(function(acc, cur, i) {
        acc[i] = cur;
        return acc;
      }, {});
      resolve(newObject);
    });
  }
};

module.exports = instafeed;