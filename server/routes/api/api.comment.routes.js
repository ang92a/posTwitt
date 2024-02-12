const router = require('express').Router();
const { Comment } = require('../../db/models');

router.post('/', async (req, res) => {
  try {
    const { postId, userId, content } = req.body;
    const commentOne = await Comment.create({
      userId: res.locals.user.id,
      postId,
      content,
      parentId: postId,
    });

    const comment = await Comment.findOne({
      where: { id: commentOne.id },
    });
    res.json({
      comment,
    });
  } catch ({ message }) {
    res.json({ type: 'comment router', message });
  }
});

module.exports = router;
