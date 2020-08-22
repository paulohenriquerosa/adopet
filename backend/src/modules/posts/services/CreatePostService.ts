import { inject, injectable } from 'tsyringe';

import IPostsRepository from '@modules/posts/repositories/IPostsRepository';
import Post from '@modules/posts/infra/typeorm/entities/Post';

import ICreatePostDTO from '@modules/posts/dtos/ICreatePostDTO';

@injectable()
class CreatePostService {
  constructor(
    @inject('PostsRepository')
    private postsRepository: IPostsRepository,
  ) {}

  public async execute({ name, description }: ICreatePostDTO): Promise<Post> {
    const post = await this.postsRepository.create({ name, description });
    return post;
  }
}

export default CreatePostService;
