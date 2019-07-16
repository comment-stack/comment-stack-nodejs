import * as Yup from 'yup';
import Comment from '../models/Comment';

class CommentController {
  async index(req, res) {
    const comments = await Comment.findAll({
      where: { user_id: req.userId },
      order: ['created_at'],
    });

    return res.json(comments);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      content: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { content } = req.body;

    const comment = await Comment.create({
      content,
      user_id: req.userId,
    });

    return res.json(comment);
  }

  async delete(req, res) {
    const comment = await Comment.findByPk(req.params.id);

    if (!comment) {
      return res.status(400).json({ error: 'Comment not found' });
    }

    if (comment.user_id !== req.userId) {
      return res
        .status(401)
        .json({ error: 'Only authors can delete comments' });
    }

    await comment.destroy();

    return res.json({ message: 'Comment canceled' });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      content: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const comment = await Comment.findByPk(req.params.id);

    if (!comment) {
      return res.status(400).json({ error: 'Comment not found' });
    }

    if (comment.user_id !== req.userId) {
      return res
        .status(401)
        .json({ error: 'Only authors can update Comments' });
    }

    await comment.update(req.body, {
      returning: true,
    });

    return res.json(comment);
  }
}

export default new CommentController();
