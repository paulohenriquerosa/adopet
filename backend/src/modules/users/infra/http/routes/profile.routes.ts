import { Router } from 'express';
import ensureAuthenticated from '../middleware/ensureAuthenticated';

const profileRouter = Router();

profileRouter.use(ensureAuthenticated);
profileRouter.get('/');

export default profileRouter;
