const express = require('express');

const customersRouter = require('./customers');
const ordersRouter = require('./orders');
const drugsRouter = require('./drugs');
const authRouter = require('./auth');
const mailRouter = require('./mail');

const rootRouter = express.Router();

rootRouter.use('/customers', customersRouter);
rootRouter.use('/orders', ordersRouter);
rootRouter.use('/drugs', drugsRouter);
rootRouter.use('/mail', mailRouter);
rootRouter.use('/auth', authRouter);

module.exports = rootRouter;