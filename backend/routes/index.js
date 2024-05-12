var express = require('express');
var router = express.Router();
var { getUsers, Login, Logout } = require ("../controllers/Users.js");
var { verifyToken } = require ("../middleware/VerifyToken.js");
var { refreshToken } = require ("../controllers/RefreshToken.js");
const handleTokenRequest = (req, res) => {
  res.status(200).json({ message: 'Token refreshed successfully' });
};

router.get('/users', verifyToken, (req, res) => {
  getUsers(req, res);
});
router.post('/login', Login);
router.get('/token', (req, res, next) => {
  refreshToken(req, res, () => {
    handleTokenRequest(req, res);
  });
});
router.delete('./logout', Logout);

module.exports = router;