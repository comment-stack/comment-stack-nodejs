import { Model } from 'sequelize';

class Vote extends Model {
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
    this.belongsTo(models.Comment, { foreignKey: 'comment_id', as: 'comment' });
  }
}

export default Vote;
