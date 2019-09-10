import Sequelize, { Model } from 'sequelize';

class Invitation extends Model {
  static init(sequelize) {
    super.init(
      {},
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    this.belongsTo(models.User, { foreignKey: 'company_id', as: 'company' });
  }
}

export default Invitation;
