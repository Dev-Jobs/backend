import Sequelize from 'sequelize';
import mongoose from 'mongoose';

import User from '../app/models/User';
import Invitation from '../app/models/Invitation';
import Application from '../app/models/Application';

import databaseConfig from '../config/database';

const models = [User, Invitation, Application];

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }

  mongo() {
    this.mongoConnection = mongoose.connect(
      'mongodb+srv://devjobs:admin@notification-cf1xp.mongodb.net/test?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useFindAndModify: true,
      }
    );
  }
}

export default new Database();
