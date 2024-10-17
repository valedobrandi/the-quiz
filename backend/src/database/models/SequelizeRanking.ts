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
  },
  score: {
    type: DataTypes.INTEGER,
  },
}, {
  sequelize: db,
  modelName: 'ranking',
  timestamps: false,
  underscored: true,
});

export default SequelizeRanking;
