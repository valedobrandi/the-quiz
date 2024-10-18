import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';
import db from '.';

class SequelizeRanking extends Model<InferAttributes<SequelizeRanking>,
InferCreationAttributes<SequelizeRanking>> {

  declare username: string;
  
  declare score: number;

}

SequelizeRanking.init({
  username: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  score: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'ranking',
  timestamps: false,
  underscored: true,
});

export default SequelizeRanking;
