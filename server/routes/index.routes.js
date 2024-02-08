const express = require('express');
const router = express.Router();

const apiAuthRouter = require('./api/api.auth.routes');


router.use('/api/auth', apiAuthRouter);


module.exports = router;
