import { inject, injectable } from 'tsyringe';

import Post from '@modules/posts/infra/typeorm/entities/Post';
import IPostsRepository from '@modules/posts/repositories/IPostsRepository';

@injectable()
class ListPostsService {
  constructor(
    @inject('PostsRepository')
    private postRepository: IPostsRepository,
  ) {}

  public async execute(): Promise<Post[]> {
    const posts = await this.postRepository.findAll();

    return posts;
  }
}

export default ListPostsService;
