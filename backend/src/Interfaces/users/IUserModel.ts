import { IUsers } from './IUsers';

export interface IUserModel {
  getByEmail(email: string): Promise<IUsers | null>;
  getByUsername(email: string): Promise<IUsers | null>;
  register(username: string,email: string, password: string): Promise<string>;
}
