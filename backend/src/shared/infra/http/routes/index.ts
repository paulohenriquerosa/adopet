import { Router } from 'express';

import usersRouter from '@modules/users/infra/http/routes/users.routes';
import postsRouter from '@modules/posts/infra/http/routes/posts.routes';
import sessionRouter from '@modules/users/infra/http/routes/session.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/posts', postsRouter);
routes.use('/session', sessionRouter);

export default routes;
