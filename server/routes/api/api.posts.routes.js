const router = require('express').Router();
const { Post, User, Comment, PostLike } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [{ model: User }, { model: Comment }, { model: PostLike }],
    });
    res.json({ posts });
    return;
  } catch ({ message }) {
    res.json({ type: 'posts router', message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { title, userId, content } = req.body;
    const postmin = await Post.create({
      userId,
      title,
      content,
      likes: 0,
    });
    const post = await Post.findOne({
      where: { id: postmin.id },
      include: [{ model: User }, { model: Comment }, { model: PostLike }],
    });
    console.log(post);
    res.json({
      post,
    });
  } catch ({ message }) {
    res.json({ type: 'post router', message });
  }
});

router.delete('/:postId', async (req, res) => {
  try {
    const { postId } = req.params;
    const result = await Post.destroy({ where: { id: postId } });
    if (result > 0) {
      res.json({ message: 'success', postId });
      return;
    }
    res.json({ message: 'Не твоя, вот ты и бесишься' });
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
