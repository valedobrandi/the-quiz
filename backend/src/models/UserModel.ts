import { IUserModel } from '../Interfaces/users/IUserModel';
import SequelizeUser from '../database/models/SequelizeUsers';
import { IUsers } from '../Interfaces/users/IUsers';

export default class UserModel implements IUserModel {
  private model = SequelizeUser;

  async findUser(email: string): Promise<IUsers | null> {
    const dbData = await this.model.findOne({ where: { email } });
    if (!dbData) return null;
    return dbData.dataValues;
  }
}
