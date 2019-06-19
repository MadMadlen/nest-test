import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';

import { UsersController } from './user.controller';
import { UsersService } from './user.service';
import { UserRepository } from './user.repository';

@Module({
    imports: [TypeOrmModule.forFeature([User, UserRepository])],
    controllers: [
        UsersController
    ],
    providers: [
        UsersService
    ],
})

export class UserModule {}
