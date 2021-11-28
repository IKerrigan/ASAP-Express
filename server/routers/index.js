const express = require('express');

const customersRouter = require('./customers');
const ordersRouter = require('./orders');
const drugsRouter = require('./drugs');

const rootRouter = express.Router();

rootRouter.use('/customers', customersRouter);
rootRouter.use('/orders', ordersRouter);
rootRouter.use('/drugs', drugsRouter);

module.exports = rootRouter;