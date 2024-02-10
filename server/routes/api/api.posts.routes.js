const router = require('express').Router();
const { Post, User, Comment, PostLike } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [{ model: User }, { model: Comment }, { model: PostLike }],
    });
    // console.log(posts);
    res.json({ posts });
    return;
  } catch ({ message }) {
    res.json({ type: 'posts router', message });
  }
});

module.exports = router;
