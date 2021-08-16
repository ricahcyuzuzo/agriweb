import express from 'express';
import StoreController from '../controllers/store.controller';

const routes = express();

routes.get('/products_approved', StoreController.getAllProductsByCategories);
routes.get('/product', StoreController.getOneProduct);
routes.post('/add_to_cart', StoreController.addToCart);
routes.get('/getname', StoreController.getAllProductByName);
export default routes;
