import { Router } from 'express';
import ensureAuthenticated from '@modules/users/infra/http/middleware/ensureAuthenticated';
import PostController from '../controller/PostController';

const postRouter = Router();
const postController = new PostController();

postRouter.use(ensureAuthenticated);
postRouter.post('/', postController.create);
postRouter.get('/', postController.index);

export default postRouter;
