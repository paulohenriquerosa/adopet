import ICreatePostDTO from '@modules/posts/dtos/ICreatePostDTO';
import Post from '../infra/typeorm/entities/Post';

export default interface IPostRepositoy {
  create(data: ICreatePostDTO): Promise<Post>;
  findAll(): Promise<Post[]>;
}
