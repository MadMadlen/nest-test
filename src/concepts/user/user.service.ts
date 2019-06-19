import { Injectable } from '@nestjs/common';
import { getCustomRepository } from "typeorm";

import { UserRepository } from './user.repository';
import { CreateUserInterface } from './interfaces/user.createInterface';
import { User } from  './user.entity';

@Injectable()
export class UsersService {
    async createUser(userParams: CreateUserInterface): Promise<User> {
        const usersRepository = getCustomRepository(UserRepository);

        return await usersRepository.create(userParams);
    }
}
