import express from 'express';
import UserController from '../controllers/user.controller';

const routes = express();

routes.post('/user', UserController.signup);
routes.post('/login', UserController.signin);

export default routes;