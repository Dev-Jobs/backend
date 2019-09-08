import jwt from 'jsonwebtoken';
import * as Yup from 'yup';

import User from '../models/User';
import Company from '../models/Company';
import authConfig from '../../config/auth';

class SessionController {
  async userStore(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed' });
    }

    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      res.status(401).json({ error: 'User not found.' });
    }

    if (!(await user.checkPassword(password))) {
      res.status(401).json({ error: 'Wrong password.' });
    }

    const { id, name } = user;

    return res.json({
      user: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }

  async companyStore(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed' });
    }

    const { email, password } = req.body;

    const company = await Company.findOne({ where: { email } });

    if (!company) {
      res.status(401).json({ error: 'Company not found.' });
    }

    if (!(await company.checkPassword(password))) {
      res.status(401).json({ error: 'Wrong password.' });
    }

    const { id, name } = company;

    return res.json({
      company: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
