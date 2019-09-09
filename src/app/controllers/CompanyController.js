import * as Yup from 'yup';
import Company from '../models/Company';

class CompanyController {
  async index(_, res) {
    const companyExists = await Company.findAll();

    if (!companyExists) {
      return res.status(404).json({ error: 'No company was found!' });
    }

    return res.json(companyExists);
  }

  async store(req, res) {
    const companyExists = await Company.findOne({
      where: { email: req.body.email },
    });

    if (companyExists) {
      return res.status(400).json({ error: 'Company already exists.' });
    }

    const { id, name, email, cnpj } = await Company.create(req.body);

    return res.json({
      id,
      name,
      email,
      cnpj,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      oldpassword: Yup.string().min(6),
      password: Yup.string()
        .min(6)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      confirmPassword: Yup.string().when('oldPassword', (password, field) =>
        password ? field.required().oneOf([Yup.ref('oldPassword')]) : field
      ),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed' });
    }

    const { email, oldPassword } = req.body;

    const company = await Company.findByPk(req.userId);

    if (email !== company.email) {
      const companyExists = await Company.findOne({
        where: { email },
      });

      if (companyExists) {
        return res.status(400).json({ error: 'Company already registred' });
      }
    }

    if (oldPassword && !(await company.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'The old password is incorrect' });
    }

    const { id, name } = await company.update(req.body);

    return res.json({
      id,
      name,
      email,
    });
  }
}

export default new CompanyController();
