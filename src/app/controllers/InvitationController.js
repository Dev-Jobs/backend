import User from '../models/User';
import Invitation from '../models/Invitation';

class InvitationController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const invitations = await Invitation.findAll({
      where: { company_id: req.userId },
      order: ['created_at'],
      attributes: ['id', 'created_at'],
      limit: 20,
      offset: (page - 1) * 20,
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['id', 'name'],
        },
      ],
    });

    return res.json(invitations);
  }

  async store(req, res) {
    const { user_id } = req.body;

    const invitation = await Invitation.create({
      user_id,
      company_id: req.userId,
    });

    return res.json(invitation);
  }
}

export default new InvitationController();
