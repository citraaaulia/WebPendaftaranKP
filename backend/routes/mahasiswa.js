var express = require('express');
var router = express.Router();
const verifyToken= require ('../middleware/validtoken.middleware');
const role= require ('../middleware/checkrole.middleware');
const { changePassword }= require ('../controller/auth.controller');

// router.use(role('mahasiswa'));

router.get('/home', verifyToken, function(req, res) {// akses data
  // Menampilkan data user
  const userId = req.userId;
  const userEmail = req.userEmail;
  const userName = req.userName;
  const userDepartemen = req.userDepartemen;
  const userRole = req.userRole;

  // Sekarang Anda dapat menggunakan data ini sesuai kebutuhan
  res.render('mahasiswa/home', { userId,userEmail,userName, userDepartemen,userRole });//akses front end
});


router.get('/mahasiswa/akun', verifyToken, function(req, res, next) {
  // Menampilkan data user
  const userId = req.userId;
  const userEmail = req.userEmail;
  const userName = req.userName;
  const userDepartemen = req.userDepartemen;
  const userRole = req.userRole;
  // Sekarang Anda dapat menggunakan data ini sesuai kebutuhan
  res.render('mahasiswa/akun', { userId,userEmail,userName, userDepartemen,userRole  });
});


router.get('/mahasiswa/ubah-pw',verifyToken, function(req, res, next) {
  const userId = req.userId;
  const userEmail = req.userEmail;
  const userName = req.userName;
  const userDepartemen = req.userDepartemen;
  const userRole = req.userRole;
  // Sekarang Anda dapat menggunakan data ini sesuai kebutuhan
  res.render('mahasiswa/ubah-pw', { userId,userEmail,userName, userDepartemen,userRole  });
});

router.post('/change-password', verifyToken, async (req, res) => {
  try {
    await changePassword(req, res);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Terjadi kesalahan server" });
  }
});






module.exports = router;
