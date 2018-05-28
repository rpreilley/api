module.exports = function(req, res, next) {
  if (!req.currentUser) {
    req.flash('errors', 'You are not signed in');
    res.redirect('/');
  }
  else {
    next();
  }
}
