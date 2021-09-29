import Product from '../models/product.model';
import User from '../models/user.model';

class AdminController {
    static approveProduct(req, res){
        const { sellingApproved } = req.body;
        const { product_id } = req.query;

        Product.findByIdAndUpdate(product_id, { sellingApproved: sellingApproved}, (err, docs) => {
            if(err){
                console.log(err);
            }else{
                res.status(201).json({
                    status: 201,
                    message: 'The product is approved!'
                })
            }
        });
        
    }

    static getAllUsersByType(req, res){
        User.find((err, docs) => {
            if(docs.length){
                res.status(200).json({
                    status: 200,
                    message: 'Ok',
                    data: docs
                });
            }else{
                res.status(404).json({
                    status: 404,
                    message: 'No Users Found here'
                });
            }
        });
    }

    static getAllProducts(req, res){
        Product.find()
            .exec()
            .then((docs) => {
                if(docs.length){
                    res.status(200).json({
                        status: 200,
                        message: 'Ok',
                        data: docs
                    });
                }else{
                    res.status(200).json({
                        status: 200,
                        message: 'Products isn\'t added yet'
                    })
                }
            });
    }
}

export default AdminController;