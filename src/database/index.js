import Sequelize from 'sequelize';

import User from '../app/models/User';
import Comment from '../app/models/Comment';
import Vote from '../app/models/Vote';

import databaseConfig from '../config/database';

const models = [User, Comment, Vote];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = databaseConfig.url
      ? new Sequelize(databaseConfig.url, databaseConfig)
      : new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
