import Router  from "express";
import SellerController from "../controllers/seller.controller";

const routes = Router();

routes.post('/seller_products', SellerController.getAllClientsProducts);

export default routes;
