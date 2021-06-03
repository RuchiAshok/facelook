var express = require('express');
var router = express.Router();
var userLoginController = require('../controllers/loginController/userLogin');
var userRegisterController = require('../controllers/loginController/userRegister.js');
var getMemberController = require('../controllers/adminController/getMember.js');
var approveMemberController = require('../controllers/adminController/approveMember');
const verifyJWTMiddleWare = require('../middleware/auth.js');

/*User Login*/
router.post('/login', userLoginController);

/*Member Registration*/
router.post('/memberRegister', userRegisterController);

/* Get Member Pending for Approval */
router.get('/getMember',[verifyJWTMiddleWare], getMemberController);

/*Approve Member - Single and in bulk*/
router.post('/approveMember',[verifyJWTMiddleWare], approveMemberController);

module.exports = router;