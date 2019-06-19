import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsController } from './post.controller';
import { PostsService } from './post.service';
import { PostRepository } from './post.repository';
import { Post } from './post.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Post, PostRepository])
  ],
  controllers: [
    PostsController
  ],
  providers: [
    PostsService
  ],
})

export class PostModule {}
