import * as Yup from 'yup';

import Vote from '../models/Vote';
import Comment from '../models/Comment';
import User from '../models/User';

class VoteController {
  async index(req, res) {
    const votes = await Vote.findAll({
      where: {
        user_id: req.userId,
      },
      include: [
        {
          model: Comment,
          as: 'comment',
        },
      ],
    });

    return res.json(votes);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      comment_id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed' });
    }

    const comment = await Comment.findByPk(req.body.comment_id, {
      include: [
        {
          model: User,
          as: 'user',
        },
      ],
    });

    if (!comment) {
      return res.status(400).json({ error: 'comment not found' });
    }

    if (comment.user_id === req.userId) {
      return res
        .status(401)
        .json({ error: 'You cannot vote your own comment' });
    }

    const hasAlreadyVoted = await Vote.findAll({
      where: {
        user_id: req.userId,
        comment_id: comment.id,
      },
    });

    if (hasAlreadyVoted.length) {
      return res
        .status(401)
        .json({ error: 'You already voted for the requested comment' });
    }

    const insertVote = await Vote.create({
      user_id: req.userId,
      comment_id: comment.id,
    });

    const vote = await Vote.findByPk(insertVote.id, {
      include: [
        {
          model: User,
          as: 'user',
        },
        {
          model: Comment,
          as: 'comment',
        },
      ],
    });

    return res.json(vote);
  }
}

export default new VoteController();
