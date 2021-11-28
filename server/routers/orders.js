const express = require('express');

const controller = require('../controllers/orders');

const router = express.Router();

router.get('/', controller.get)
router.get('/:id', controller.getById)
router.post('/', controller.create)
router.put('/:id', controller.update)
router.delete('/:id', controller.deleteById)

module.exports = router;