import Mail from '../../lib/Mail';

class InvitationMail {
  get key() {
    return 'InvitationMail';
  }

  async handle({ data }) {
    const { user, company } = data;

    await Mail.sendMail({
      to: `${user.name} <${user.email}>`,
      subject: 'Great News!',
      template: 'invitation',
      context: {
        user: user.name,
        company: company.name,
      },
    });
  }
}

export default new InvitationMail();
