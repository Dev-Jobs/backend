import Mail from '../../lib/Mail';

class ApplicationMail {
  get key() {
    return 'ApplicationMail';
  }

  async handle({ data }) {
    const { user, company } = data;

    await Mail.sendMail({
      to: `${company.name} <${company.email}>`,
      subject: 'New Application!',
      template: 'application',
      context: {
        user: user.name,
        company: company.name,
      },
    });
  }
}

export default new ApplicationMail();
