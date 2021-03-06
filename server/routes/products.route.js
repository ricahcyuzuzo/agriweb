import Router  from "express";
import SellerController from "../controllers/seller.controller";
import StoreController from "../controllers/store.controller";

const routes = Router();

routes.post('/product', SellerController.addProduct);
routes.get('/products_approved', StoreController.getAllProductsByCategories);
routes.delete('/delete', SellerController.deleteProduct);

export default routes;
