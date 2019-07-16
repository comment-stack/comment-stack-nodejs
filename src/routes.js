import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';
import CommentController from './app/controllers/CommentController';
import VoteController from './app/controllers/VoteController';
import FeedController from './app/controllers/FeedController';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);
routes.put('/users', UserController.update);

routes.post('/comments', CommentController.store);
routes.get('/comments', CommentController.index);
routes.delete('/comments/:id', CommentController.delete);
routes.put('/comments/:id', CommentController.update);

routes.post('/votes', VoteController.store);
routes.get('/votes', VoteController.index);

routes.get('/feed', FeedController.index);

export default routes;
