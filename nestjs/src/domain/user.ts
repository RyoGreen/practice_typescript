import { Status } from './status';

export class User {
  id: number;
  email: string;
  name: string;
  status?: Status[];

  constructor(user: User) {
    this.id = user.id;
    this.email = user.email;
    this.name = user.name;
    this.status = user.status;
  }
}

export interface IUserRepository {
  Get(): Promise<User[]>;
  GetById(id: number): Promise<User | null>;
  Create(post: User): Promise<User>;
  Update(post: User): Promise<User>;
  Delete(id: number): Promise<void>;
}
