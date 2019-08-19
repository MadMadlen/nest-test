import { CreateUserInterface } from './interfaces/user.createInterface';
import { User } from './user.entity';

import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  public createUser(userParams: CreateUserInterface): Promise<User> {
    const createdUser = new User(userParams)

    return this.manager.save(createdUser)
  }

  public findAll(): Promise<User[]> {
    return this.find();
  }
}
