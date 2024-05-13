var express = require('express');
var router = express.Router();

// Render login.ejs
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

router.get('/dashboard', function(req, res, next) {
    res.render('dashboard', { title: 'Dashboard' });
  });

module.exports = router;