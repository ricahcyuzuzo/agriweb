import Mongoose from "mongoose";
import validateProduct from "../helpers/userValidations/validateProduct";
import productsBodyModels from "../models/body/productBody.model";
import Product from "../models/db/products.model";
import User from "../models/db/users.model";

class SellerController {
    static addProduct (req, res) {
        const { productName, pricePerUnit, availableQuantity, description, sellerIdentifier, productCategory, image} = req.body;
        const { error } = validateProduct.validateAddProduct(productsBodyModels.productsBodymodel(req));
        
        if (error) {
            return res.status(400).json({
                status: 400,
                message: error.details[0].message.replace(/"/g, '')
            });
        }

        const product = new Product({
            _id: new Mongoose.Types.ObjectId(),
            productName: productName,
            pricePerUnit: pricePerUnit,
            availableQuantity: availableQuantity,
            description: description,
            sellerIdentifier: sellerIdentifier,
            sellingApproved: true,
            productCategory: productCategory,
            image: image
        });

        product
            .save()
            .then((result) => {
                console.log(result);
            })
            .catch((err) => {
                console.log(err);
            })
        
        res.status(201).json({
            status: 201,
            message: 'Product Added successfully',
            data: product
        });
    }

    static getAllClientsProducts(req, res){
        const { phoneNumber } = req.query;
        Product.find({ sellerIdentifier: phoneNumber}, (err, docs) => {
            if(docs.length){
                res.status(200).json({
                    status: 200,
                    data: docs
                });
            }else{
                res.status(404).json({
                    status: 404,
                    message: 'No Products found!'
                });
            }
        });
    }

    static getOneClientProducts(req, res){
        const { product_id } = req.query;
        Product.findById(product_id)
            .exec()
            .then((doc) => {
                if (doc){
                    res.status(200).json({
                        status: 200,
                        data: doc
                    });
                }else{
                    res.status(404).json({
                        status: 404,
                        message: 'Product Not found!',
                    })
                }
            })
            .catch((err) => {
                res.status(500).json({
                    status: 500,
                    error: err
                });
            });
    }

    static getProfile(req, res) {
        const { telephone } = req.query;
        User.find({ phoneNumber: telephone }, (err, docs) => {
            if(docs.length){
                res.status(200).json({
                    status: 200,
                    data: docs
                })
            }else{
                res.status(404).json({
                    status: 404,
                    message: 'User not found'
                })
            }
        });
    }

    
}

export default SellerController;