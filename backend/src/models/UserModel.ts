import * as bcrypt from 'bcryptjs';
import { env } from 'process';

import { IUserModel } from '../Interfaces/users/IUserModel';
import SequelizeUser from '../database/models/SequelizeUsers';
import { IUsers } from '../Interfaces/users/IUsers';


const SALT_ROUNDS = env.BCRYPT_SALT_ROUNDS;

export default class UserModel implements IUserModel {
  private model = SequelizeUser;

  async findOne(username: string): Promise<IUsers | null> {
    const user = await this.model.findOne({ where: { username } });
    if (!user) return null;
    return user.dataValues;
  }

  async register(username: string, password: string): Promise<string> {
    const existingUser = await this.findOne(username);

    if (existingUser) return existingUser.username;

    if (!SALT_ROUNDS) throw new Error('SALT_ROUNDS is not defined');
    
    const coded = await bcrypt.hash(password, parseInt(SALT_ROUNDS));

    const newUser = await this.model.create({ username, password: coded });
    
    return newUser.dataValues.username;
  }

  async findUser(username: string): Promise<IUsers | null> {
    const dbData = await this.model.findOne({ where: { username } });
    if (!dbData) return null;
    return dbData.dataValues;
  }
}
