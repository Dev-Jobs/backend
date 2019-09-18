import Sequelize, { Model } from 'sequelize';

class NewCompany extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        phone_number: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default NewCompany;
