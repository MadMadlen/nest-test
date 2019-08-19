import { Injectable } from '@nestjs/common';
import { getCustomRepository } from "typeorm";

import { UserRepository } from './user.repository';
import { CreateUserInterface } from './interfaces/user.createInterface';
import { User } from  './user.entity';
import { createUser } from './concepts/createUser';

@Injectable()
export class UsersService {
  createUser(userParams: CreateUserInterface): Promise<User> {
    return createUser(userParams);
  }

  getUsers(): Promise<User[]> {
    const usersRepository = getCustomRepository(UserRepository);

    return usersRepository.findAll();
  }
}
