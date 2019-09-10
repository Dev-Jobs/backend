import User from '../models/User';
import Application from '../models/Application';

class ApplicationController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const checkIsUser = await User.findOne({
      where: { id: req.userId, company: false },
    });

    if (!checkIsUser) {
      return res
        .status(401)
        .json({ error: 'You can not have applications being a company' });
    }

    const applications = await Application.findAll({
      where: { user_id: req.userId },
      order: ['created_at'],
      attributes: ['id', 'created_at'],
      limit: 20,
      offset: (page - 1) * 20,
      include: [
        {
          model: User,
          as: 'company',
          attributes: ['id', 'name'],
        },
      ],
    });

    if (!applications) {
      return res.status(404).json({
        error: 'Oops... It seems that you do not have any application',
      });
    }

    return res.json(applications);
  }

  async store(req, res) {
    const checkIsUser = await User.findOne({
      where: { id: req.userId, company: false },
    });

    if (!checkIsUser) {
      return res
        .status(401)
        .json({ error: 'You can not send applications being a company' });
    }

    const { company_id } = req.body;

    const checkIsCompany = await User.findOne({
      where: { id: company_id, company: true },
    });

    if (!checkIsCompany) {
      return res
        .status(401)
        .json({ error: 'You can not send invitations to another user' });
    }

    const application = await Application.create({
      company_id,
      user_id: req.userId,
    });

    return res.json(application);
  }
}

export default new ApplicationController();
