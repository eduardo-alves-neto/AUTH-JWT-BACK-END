const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');

const authRouter = require('./auth');
const transactionsRouter = require('./transactions');


router.use('/auth', authRouter);
router.use('/transactions', auth, transactionsRouter);

module.exports = router;
