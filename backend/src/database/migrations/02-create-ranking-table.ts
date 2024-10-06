import { Model, QueryInterface, DataTypes } from 'sequelize';
import { IRanking } from '../../Interfaces/ranking/IRanking';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IRanking>>('ranking', {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        }
      },
      ranking: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      points: {
        type: DataTypes.INTEGER,
      },
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('ranking');
  },
};
