const db = require('../models');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(
    new GoogleStrategy({
        // options for google strategy
        callbackURL:'/google/redirect',
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }, (accessToken, refreshToken, profile, done) => {
        // passport callback function
        console.log(profile.id);
        const googleID = profile.id;
        db.User.findOne({
            where: {
                google_id: profile.id
            }
        }).then(currentUser => {
            if(currentUser) {
                console.log('You DO exsist');
                console.log(currentUser);
            } else {
                console.log('You dont exsist');
            }
        })
        // db.User.create({
        //     google_id: googleID,
        //     display_name: profile.displayName
        // }).then(newUser => {
        //     console.log(`new user created: ${newUser}`);
        // });
    })
);