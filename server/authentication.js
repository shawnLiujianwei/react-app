var passport = require("passport"),
BasicStrategy = require('passport-http').BasicStrategy;

var users = [
    {id: 1, username: 'commerce', password: 'test.shawn'}
];

passport.use(new BasicStrategy({},
    function (username, password, done) {
        for (var i = 0; i < users.length; i++) {
            if (users[i].username === username && users[i].password === password) {
                return done(null, users[i]);
            }
        }
        return done(null, false);
    }
));

passport.serializeUser(function(user, done) {
      done(null, user);
});

passport.deserializeUser(function(user, done) {
      done(null, user);
});

module.exports = function (app) {
    app.use(passport.initialize());
    app.use(passport.session());
    app.get('/*', passport.authenticate('basic', {session: true}),
        function (req, res, next) { next(); }
    );
};

