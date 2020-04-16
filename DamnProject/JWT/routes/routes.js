const express = require('express');
const controller = require('./../controller/controller');
var router = express.Router();

router.post('/api/signup',controller.signUpuser);
router.post('/api/signin',controller.signInuser);
router.get('/api/login',controller.executeApi);

module.exports = router;