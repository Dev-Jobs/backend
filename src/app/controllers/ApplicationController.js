import Company from '../models/Company';
import Application from '../models/Application';

class ApplicationController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const applications = await Application.findAll({
      where: { user_id: req.userId },
      order: ['created_at'],
      attributes: ['id', 'created_at'],
      limit: 20,
      offset: (page - 1) * 20,
      include: [
        {
          model: Company,
          as: 'company',
          attributes: ['id', 'name'],
        },
      ],
    });

    return res.json(applications);
  }

  async store(req, res) {
    const { company_id } = req.body;

    const application = await Application.create({
      company_id,
      user_id: req.userId,
    });

    return res.json(application);
  }
}

export default new ApplicationController();
