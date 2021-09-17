import Mongoose from 'mongoose';
import Product from '../models/product.model';
import User from '../models/user.model';

class StoreController {
    static getAllProductsByCategories(req, res){
        Product.find({ sellingApproved: true }, (err, docs) => {
            if(docs.length){
                Product.find((err, docs) => {
                    if(docs.length){
                        res.status(200).json({
                            status: 200,
                            message: 'Ok',
                            data: docs
                        });
                    }else{
                        res.status(404).json({
                            status: 404,
                            message: 'Products of this category is not found!'
                        })
                    }
                });
            }else{
                res.status(404).json({
                    status: 404,
                    message: 'Products not found!'
                })
            }
        });
    }

    static getAllProductByName (req, res){
        const {name} = req.query;
        Product.find({productName: name}, (err, docs) => {
            if(docs){
                res.status(200).json({
                    status: 200,
                    message: 'Ok',
                    data: docs
                });
            }else{
                res.status(404).json({
                    status: 404,
                    message: 'Not Found'
                })
            }
        })
    }

    static getOneProduct(req, res){
        const { product_id } = req.body;
        Product.findById(product_id, (err, docs) => {
            if(docs){
                res.status(200).json({
                    status: 200,
                    message: 'Ok',
                    data: docs
                });
            }else{
                res.status(404).json({
                    status: 404,
                    message: 'The product of the provided Id is not found!'
                })
            }
        })
    }

    static addToCart(req, res){
        const { productId, productName, productUnit, price } = req.body;
        const { user_id } = req.query;

        User.findByIdAndUpdate(user_id, {$push: { cart: { productId: productId, productName: productName, productUnit: productUnit, price: price }}}, (err, docs) => {
            res.status(201).json({
                status: 201,
                message: 'product added to cart successful',
                data: docs
            });
        });
    }

    static getCartbyUserId(req, res){
        const { user_id } = req.query;
        User.findById(user_id, (err, docs) => {
            if(err){
                res.status(500).json({
                    status: 500,
                    error: err
                });
            }else{
                res.status(200).json({
                    status: 200,
                    data: docs.cart
                });
            }
        })
    }
}

export default StoreController;