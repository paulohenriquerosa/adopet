import { Router } from 'express';

import UsersController from '../controller/UsersController';

const usersRouter = Router();

const userController = new UsersController();

usersRouter.post('/', userController.create);

export default usersRouter;
