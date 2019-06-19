import { Injectable } from '@nestjs/common';
import { getCustomRepository } from "typeorm";

import { PostRepository } from './post.repository';
import { Post } from './post.entity';

@Injectable()
export class PostsService {
  getPosts(): Promise<Post[]> {
    const postsRepository = getCustomRepository(PostRepository);

    return postsRepository.findAll();
  }
}
