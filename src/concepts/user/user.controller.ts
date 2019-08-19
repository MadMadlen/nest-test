import { Controller, Post, Body, HttpException, HttpStatus, Get } from '@nestjs/common';
import { UsersService } from './user.service';
import { User } from './user.entity';

import { CreateUserValidator } from './validators/user.createValidator';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  createUser(@Body() CreateUserValidator: CreateUserValidator) {
    return this.usersService.createUser(CreateUserValidator)
      .catch(() => new HttpException('I am a teapot', HttpStatus.I_AM_A_TEAPOT));
  }

  @Get()
  getUser(): Promise<User[]> {
    return this.usersService.getUsers();
  }
}
