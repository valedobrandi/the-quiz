import { IUserModel } from '../Interfaces/users/IUserModel';
import SequelizeUser from '../database/models/SequelizeUsers';
import { IUsers } from '../Interfaces/users/IUsers';

export default class UserModel implements IUserModel {
  private model = SequelizeUser;

  async register(username: string, password: string): Promise<IUsers | null> {
    const existingUser = await this.model.findOne({ where: { username } });
    if (existingUser) return null;

    const newUser = await this.model.create({ username, password });
    return newUser.dataValues;
  }

  async findUser(username: string): Promise<IUsers | null> {
    const dbData = await this.model.findOne({ where: { username } });
    if (!dbData) return null;
    return dbData.dataValues;
  }
}
