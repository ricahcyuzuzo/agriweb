import express from 'express';
import TransactionController from '../controllers/transaction.controller';

const routes = express();

routes.post('/order', TransactionController.addTransaction);

export default routes;