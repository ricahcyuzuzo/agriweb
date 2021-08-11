import express from 'express';
import AdminController from '../controllers/admin.controller';

const routes = express();

routes.patch('/approve_product', AdminController.approveProduct);
routes.get('/users', AdminController.getAllUsersByType);
routes.get('/products', AdminController.getAllProducts);

export default routes;
