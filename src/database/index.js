import Sequelize from 'sequelize';

import User from '../app/models/User';
import Invitation from '../app/models/Invitation';
import Application from '../app/models/Application';

import databaseConfig from '../config/database';

const models = [User, Invitation, Application];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
