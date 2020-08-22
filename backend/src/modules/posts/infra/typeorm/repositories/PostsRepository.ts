import { Repository, getRepository } from 'typeorm';

import IPostRepository from '@modules/posts/repositories/IPostsRepository';
import ICreatePostDTO from '@modules/posts/dtos/ICreatePostDTO';
import Post from '@modules/posts/infra/typeorm/entities/Post';

class PostsRepository implements IPostRepository {
  private ormRepository: Repository<Post>;

  constructor() {
    this.ormRepository = getRepository(Post);
  }

  public async create({ name, description }: ICreatePostDTO): Promise<Post> {
    const post = this.ormRepository.create({ name, description });
    await this.ormRepository.save(post);
    return post;
  }

  public async findAll(): Promise<Post[]> {
    const posts = await this.ormRepository.find();
    return posts;
  }
}

export default PostsRepository;
