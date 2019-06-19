import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './user.service';

import { CreateUserValidator } from './validators/user.createValidator';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    createUser(@Body() CreateUserValidator: CreateUserValidator) {
      return this.usersService.createUser(CreateUserValidator)
    }
}
