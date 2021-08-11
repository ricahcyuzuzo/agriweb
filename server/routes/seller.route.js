import express from 'express';
import SellerController from '../controllers/seller.controller';

const routes = express();

routes.post('/product', SellerController.addProduct);
routes.get('/seller_products', SellerController.getAllClientsProducts);
routes.get('/one_seller_product', SellerController.getOneClientProducts);
routes.get('/user', SellerController.getProfile);

export default routes;
