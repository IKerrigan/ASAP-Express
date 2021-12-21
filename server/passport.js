const passport = require('passport');
const pool = require('./pool');

passport.serializeUser((user, done) => {
    console.log("serialize ", user);
    done(null, user.user_id);
});

passport.deserializeUser((id, done) => {
    console.log("deserialize ", id);
    pool.query("SELECT user_id, user_name, user_email FROM users " +
        "WHERE user_id = $1", [id])
        .then((user) => {
            console.log("deserializeUser ", user);
            done(null, user);
        })
        .catch((err) => {
            done(new Error(`User with the id ${id} does not exist`));
        })
});