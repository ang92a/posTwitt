const router = require('express').Router();
const { Post, User, Comment, PostLike } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const posts = await Post.findAll({
      order: [['id', 'DESC']],
      include: [
        { model: User },
        { model: Comment, include: { model: User }, order: [['id', 'DESC']] },
        { model: PostLike },
      ],
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
      include: [
        { model: User },
        { model: Comment, include: { model: User } },
        { model: PostLike },
      ],
    });

    res.json({
      post,
    });
  } catch ({ message }) {
    res.json({ type: 'post router', message });
  }
});

router.delete('/:postId', async (req, res) => {
  try {
    const postId = req.params;
    console.log(postId);
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

router.post('/like', async (req, res) => {
  try {
    const { userId, postId } = req.body;

    const findpost = await PostLike.findOne({
      where: { userId: userId, postId: postId },
    });

    if (!findpost) {
      await PostLike.create({
        userId,
        postId,
      });
      const post = await Post.findOne({
        where: { id: postId },
        include: [
          { model: User },
          { model: Comment, include: { model: User } },
          { model: PostLike },
        ],
      });
      res.json({
        post,
      });
    }
    return;
  } catch ({ message }) {
    res.json({ type: 'post router', message });
  }
});

router.delete('/dislike/:postId', async (req, res) => {
  try {
    const { postId } = req.params;

    const result = await PostLike.destroy({
      where: { postId: postId, userId: res.locals.user.id },
    });
    if (result > 0) {
      res.json({ message: 'success', postId });
      return;
    }
    res.json({ message: 'Не сработал dislike' });
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
