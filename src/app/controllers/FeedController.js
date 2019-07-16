import Comment from '../models/Comment';

class FeedController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const votes = await Comment.findAll({
      offset: (page - 1) * 10,
    });

    return res.json(votes);
  }
}

export default new FeedController();
