import { IUsers } from './IUsers';

export interface IUserModel {
  findUser(email: string): Promise<IUsers | null>;
  register(username: string, password: string): Promise<IUsers | null>;
}
