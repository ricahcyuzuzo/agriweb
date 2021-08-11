class productsBodyModels {
    static productsBodymodel(req){
        const products = {
            productName: req.body.productName,
            pricePerUnit: req.body.pricePerUnit,
            availableQuantity: req.body.availableQuantity,
            description: req.body.description,
            sellerIdentifier: req.body.sellerIdentifier,
            productCategory: req.body.productCategory,
            image: req.body.image
        }

        return products;
    }
}

export default productsBodyModels;
