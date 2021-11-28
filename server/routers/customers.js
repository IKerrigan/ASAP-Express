const express = require('express');

const controller = require('../controllers/customers');

const router = express.Router();

router.get('/', controller.get) // GET 127.0.0.1:3000/customers/ 
router.get('/:id', controller.getById) // GET customers/1
router.post('/', controller.create) // POST customers/
router.put('/:id', controller.update) // PUT customers/
router.delete('/:id', controller.deleteById) // DELETE customers/1

module.exports = router;