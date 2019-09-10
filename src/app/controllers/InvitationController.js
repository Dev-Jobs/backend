import User from '../models/User';
import Invitation from '../models/Invitation';

class InvitationController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const checkIsCompany = await User.findOne({
      where: { id: req.userId, company: true },
    });

    if (!checkIsCompany) {
      return res
        .status(401)
        .json({ error: 'You need to be a company to have invitations' });
    }

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

    if (!invitations) {
      return res.status(404).json({
        error: 'Oops... It seems that you do not have any invitations',
      });
    }

    return res.json(invitations);
  }

  async store(req, res) {
    const checkIsCompany = await User.findOne({
      where: { id: req.userId, company: true },
    });

    if (!checkIsCompany) {
      return res
        .status(401)
        .json({ error: 'You need to be a company to send invitations' });
    }

    const { user_id } = req.body;

    const checkIsUser = await User.findOne({
      where: { id: user_id, company: false },
    });

    if (!checkIsUser) {
      return res
        .status(401)
        .json({ error: 'You can not send invitations to another company' });
    }

    const invitation = await Invitation.create({
      user_id,
      company_id: req.userId,
    });

    return res.json(invitation);
  }
}

export default new InvitationController();
