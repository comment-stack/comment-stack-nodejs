import * as Yup from 'yup';
import User from '../models/User';

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .required()
        .min(8),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Bad request' });
    }

    const existingUser = await User.findOne({
      where: { email: req.body.email },
    });

    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const { id, name, email } = await User.create(req.body);

    return res.json({ id, name, email });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      oldPassword: Yup.string()
        .required()
        .min(8),
      password: Yup.string()
        .required()
        .min(8),
      confirmPassword: Yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
      ),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const user = await User.findByPk(req.userId);

    const { oldPassword } = req.body;

    if (!user) {
      return res.status(400).json({ error: 'User does not exists' });
    }

    if (!(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Wrong password' });
    }

    const { id, name, email } = await user.update(req.body);

    return res.json({ id, name, email });
  }
}

export default new UserController();
