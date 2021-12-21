const express = require('express');

const controller = require('../controllers/mail');

const router = express.Router();

router.delete('/:id', controller.deleteOne)
router.get('/:email', controller.get)
router.post('/', controller.send)

module.exports = router;