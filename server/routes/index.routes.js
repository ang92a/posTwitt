const express = require('express');
const router = express.Router();

const apiAuthRouter = require('./api/api.auth.routes');
const apiPostsRouter = require('./api/api.posts.routes');
const apiProfileRouter = require('./api/api.profiles.routes')

router.use('/api/auth', apiAuthRouter);
router.use('/api/profiles', apiProfileRouter)
router.use('/api/posts/check', apiPostsRouter);


module.exports = router;
