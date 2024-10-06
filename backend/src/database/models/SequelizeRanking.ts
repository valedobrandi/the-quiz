import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  ForeignKey,
} from 'sequelize';
import db from '.';
import { IUsers } from '../../Interfaces/users/IUsers';
import SequelizeUser from './SequelizeUsers';


class SequelizeRanking extends Model<InferAttributes<SequelizeRanking>,
InferCreationAttributes<SequelizeRanking>> {

  declare userId: ForeignKey<IUsers['id']>
  
  declare ranking: number;
  
  declare points: number;

}

SequelizeRanking.init({
  ranking: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  points: {
    type: DataTypes.INTEGER,
  },
}, {
  sequelize: db,
  modelName: 'ranking',
  timestamps: false,
  underscored: true,
});

SequelizeRanking.belongsTo(SequelizeUser);

export default SequelizeRanking;
