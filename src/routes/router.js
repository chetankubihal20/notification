const express = require('express');
const router = express.Router();
const universityRouter = require('../university/router')


router.use('/notifications',universityRouter);

module.exports = router;