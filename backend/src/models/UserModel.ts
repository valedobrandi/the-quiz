import * as bcrypt from 'bcryptjs';
import { env } from 'process';

import { IUserModel } from '../Interfaces/users/IUserModel';
import SequelizeUser from '../database/models/SequelizeUsers';
import { IUsers } from '../Interfaces/users/IUsers';


const SALT_ROUNDS = env.BCRYPT_SALT_ROUNDS;

export default class UserModel implements IUserModel {
  private model = SequelizeUser;

  async register(username: string, email: string, password: string): Promise<string> {
    
    const response = await this.getByEmail(email);

    if (response) return response.username;

    if (!SALT_ROUNDS) throw new Error('SALT_ROUNDS is not defined');
    
    const coded = await bcrypt.hash(password, parseInt(SALT_ROUNDS));

    const newUser = await this.model.create({ username, email, password: coded });
    
    return newUser.dataValues.username;
  }

  async getByEmail(email: string): Promise<IUsers | null> {

    const response = await this.model.findOne({ where: { email } });

    if (!response) return null;

    return response.dataValues;
  }

  async getByUsername(username: string): Promise<IUsers | null> {

    const response = await this.model.findOne({ where: { username } });

    if (!response) return null;

    return response.dataValues;
  }
}
