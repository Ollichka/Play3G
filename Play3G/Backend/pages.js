
exports.mainPage = function(req, res) {
    res.render('mainPage', {
        pageTitle: 'Main Page'
    });
};

exports.levelOne = function(req, res) {
    res.render('levelOne', {
        pageTitle: 'First Level'
    });
};
exports.Vocabulary = function(req, res) {
    res.render('Vocabulary', {
        pageTitle: 'Your vocabulary'
    });
};
exports.profile = function(req, res) {
    res.render('profile', {
        pageTitle: 'Your Profile'
    });
};
exports.about = function(req, res) {
    res.render('about', {
        pageTitle: 'About our application'
    });
};