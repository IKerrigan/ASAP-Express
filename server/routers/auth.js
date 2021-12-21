const express = require('express');

const controller = require('../controllers/auth');

const router = express.Router();

router.post('/sign-up', controller.signUp) // /auth/sign-up
router.post('/sign-in', controller.signIn)

module.exports = router;