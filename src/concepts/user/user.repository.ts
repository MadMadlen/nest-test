import { CreateUserInterface } from './interfaces/user.createInterface';
import { User } from './user.entity';

import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    public findByEmail(email: string): Promise<User> {
        return this.findOne({
            where: {
                email: email,
            }
        });
    }

    public findById(id: number): Promise<User> {
        return this.findOne({
            where: {
                id: id,
            }
        });
    }

    public async createUser(userParams: CreateUserInterface): Promise<User> {
        return await this.manager.create(User, userParams)
    }
}
