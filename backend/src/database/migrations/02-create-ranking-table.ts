import { QueryInterface, DataTypes, Model } from 'sequelize';
import { IRanking } from '../../Interfaces/ranking/IRanking';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IRanking>>('rankings', {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      score: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('rankings');
  },
};
