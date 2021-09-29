import Router from 'express';
import AdminController from '../controllers/admin.controller';

const routes = Router();

routes.get('/userss', AdminController.getAllUsersByType);
routes.get('/products', AdminController.getAllProducts);

export default routes;
