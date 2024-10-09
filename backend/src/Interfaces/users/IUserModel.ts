import { IUsers } from './IUsers';

export interface IUserModel {
  getUser(email: string): Promise<IUsers | null>;
  register(username: string, password: string): Promise<string>;
}
