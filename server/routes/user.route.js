import Router  from "express";
import SellerController from "../controllers/seller.controller";
import UserController from "../controllers/user.controller";

const routes = Router();

routes.post('/login', UserController.signin);
routes.post('/user', UserController.signup);
routes.get('/users', SellerController.getProfile);

export default routes;
