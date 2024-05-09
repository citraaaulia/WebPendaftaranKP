var express = require('express');
var router = express.Router();

/* GET halaman profil. */
router.get('/profile', function(req, res, next) {
  // Di sini Anda akan menambahkan logika untuk mengambil data profil pengguna
  // dan menampilkannya di halaman profil.
  res.render('profile', { title: 'Profil Pengguna' });
});

module.exports = router;
