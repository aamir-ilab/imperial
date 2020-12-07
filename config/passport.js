const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
// var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;


module.exports = () => {
    const User = mongoose.model('User');
    passport.use('user', new LocalStrategy({
        usernameField: 'emailAddress',
        passwordField: 'hash'
    }, (username, password, done) => {
        // console.log('dddd');
        console.log('authenticate', username, password);
        User.findOne({ 'emailAddress': username }, (err, client) => {
            // console.log('err',err)
            console.log('auth client', client)
            if (err) {
                return done(err);
            }
            if (!client) {
                console.log('Incorrect fullname');
                return done(null, false, {
                    message: "Incorrect fullname."
                });
            }
            if (!client.ValidPassword(password)) {
                console.log('Incorrect password');
                return done(null, false, {
                    message: "Incorrect password."
                });
            }
            return done(null, client);
        });
    }));
};