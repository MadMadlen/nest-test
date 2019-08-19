import { CreateUserInterface } from '../interfaces/user.createInterface';
import { getCustomRepository } from "typeorm";
import { UserRepository } from '../user.repository';
import { User } from  '../user.entity';

export function createUser (userParams: CreateUserInterface): Promise<User> {
	const usersRepository = getCustomRepository(UserRepository);

    return usersRepository.createUser(userParams);
}