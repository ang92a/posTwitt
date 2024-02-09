const express = require('express');
const router = express.Router();

const apiAuthRouter = require('./api/api.auth.routes');
const apiPostsRouter = require('./api/api.posts.routes');
const apiProfileRouter = require('./api/api.profiles.routes')

router.use('/api/auth', apiAuthRouter);
router.use('/api/posts', apiPostsRouter);
router.use('/api/profiles', apiProfileRouter)



module.exports = router;
