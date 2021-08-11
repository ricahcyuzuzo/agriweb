import Mongoose from "mongoose";
import validateTransactions from "../helpers/userValidations/validateTransactions"; 
import transactionBodyModel from "../models/body/transactionBody.model";
import Transaction from '../models/db/transactions.model';

class TransactionController {
    static addTransaction(req, res){
        const {products, customerName, customerAddress, phoneNumber, sellerIdentifier, email } = req.body;
        
        const {error} = validateTransactions.validateTransactions(transactionBodyModel.transactionModel(req));
        
        if(error){
            return res.status(400).json({
                status: 400,
                message: error.details[0].message.replace(/"/g, '')
            });
        }
        
        const randomNumber = (min, max) => {
            return Math.floor(
                Math.random() * (max - min) + min
            )
        }

        const randomNumber1 = (min, max) => {
            return Math.floor(
                Math.random() * (max - min) + min
            )
        }

        const txRef = randomNumber(111111, 999999);
        const orderId = randomNumber1(111111, 999999);

        const transaction = new Transaction({
            _id: new Mongoose.Types.ObjectId(),
            products: products,
            customerName: customerName,
            customerAddress: customerAddress,
            phoneNumber: phoneNumber,
            sellerIdentifier: sellerIdentifier,
            email: email,
            paid: false,
            transactionId: txRef,
        });

        transaction
            .save()
            .then(() => {
                res.status(201).json({
                    status: 201,
                    message: 'You have placed an order, please confirm your payment dialing *182*7*1#'
                })
            }).catch((err) => console.log(err))

    }
}

export default TransactionController;