import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { PostModule } from './concepts/post/post.module';
import { UserModule } from './concepts/user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    PostModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
