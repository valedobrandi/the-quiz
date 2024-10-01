import * as bcrypt from 'bcryptjs';
import { IUserModel } from '../Interfaces/users/IUserModel';
import SequelizeUser from '../database/models/SequelizeUsers';
import { IUsers } from '../Interfaces/users/IUsers';

const SALT_ROUNDS = process.env.BCRYPT_SALT_ROUNDS;

export default class UserModel implements IUserModel {
  private model = SequelizeUser;

  async register(username: string, password: string): Promise<IUsers | null> {
    const existingUser = await this.model.findOne({ where: { username } });
    if (existingUser) return null;
    if (!SALT_ROUNDS) throw new Error('SALT_ROUNDS is not defined');
    const coded = await bcrypt.hash(password, SALT_ROUNDS);
    const newUser = await this.model.create({ username, password: coded });
    return newUser.dataValues;
  }

  async findUser(username: string): Promise<IUsers | null> {
    const dbData = await this.model.findOne({ where: { username } });
    if (!dbData) return null;
    return dbData.dataValues;
  }
}
