import NewCompany from '../models/NewCompany';

class ContactController {
  async store(req, res) {
    const { name, email, phone_number } = await NewCompany.create(req.body);

    return res.json({
      name,
      email,
      phone_number,
    });
  }
}

export default new ContactController();
