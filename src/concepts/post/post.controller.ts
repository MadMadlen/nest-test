import { Controller, Get } from '@nestjs/common';
import { PostsService } from './post.service';

import { Post } from './post.entity';

@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) {}

    @Get()
    getPosts(): Promise<Post[]> {
      return this.postsService.getPosts();
    }
}
