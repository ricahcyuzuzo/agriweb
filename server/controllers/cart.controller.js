import Cart from '../models/db/cart.model';

class CartController {
    static addQuantity(req, res){
        const { quantity, price, cartId } = req.body;
        const totalPrice = quantity * price;
        
        Cart.findByIdAndUpdate(cartId, { quantity: quantity, price: totalPrice }, (err, docs) => {
            if(err){
                console.log(err);
            }else{
                res.status(201).json({
                    statuc: 201,
                    message: 'Quantity added successful'
                });
            }
        });
    }

    static payWithMobileMoney(req, res){
        const { phoneNumber, amount } = req.body;
        
    }
}

export default CartController;
