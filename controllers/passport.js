const db = require('../models');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  db.User.findById(id)
  .then(user => {
  	done(null,user);
	})
});

passport.use(
    new GoogleStrategy({
        callbackURL:'/google/redirect',
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }, (accessToken, refreshToken, profile, done) => {
        console.log(profile.id);
        const googleID = profile.id;
        db.User.findOne({
            where: {
                google_id: profile.id
            }
        }).then(currentUser => {
            if(currentUser) {
                console.log(currentUser);
                done(null, currentUser);
            } else {
                console.log('You DONT exsist');
            };
        });
        // db.User.create({
        //     google_id: googleID,
        //     display_name: profile.displayName
        // }).then(newUser => {
        //     console.log(`new user created: ${newUser}`);
        //     done(null, newUser);
        // });
    })
);