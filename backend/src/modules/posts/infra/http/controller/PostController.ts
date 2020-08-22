import { Request, Response } from 'express';

import { container } from 'tsyringe';

import CreatePostService from '@modules/posts/services/CreatePostService';
import ListPostsService from '@modules/posts/services/ListPostsService';

export default class PostController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listPostsService = container.resolve(ListPostsService);
    const posts = await listPostsService.execute();

    return response.json(posts);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    const createPostService = container.resolve(CreatePostService);

    const post = await createPostService.execute({ name, description });

    return response.json(post);
  }
}
