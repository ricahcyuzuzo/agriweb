class cartBodymodels {
    static addToCartBodyModel(req){
        const cart = {
            productId: req.body.productId,
            productName: req.body.productName,
            productUnit: req.body.productUnit,
            price: req.body.price
        };

        return cart;
    }
}

export default cartBodymodels;
